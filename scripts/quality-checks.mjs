#!/usr/bin/env node
/**
 * Quality checks for privacybasics.de content.
 *
 * Goals:
 * - Catch broken internal links early (hard error)
 * - Warn about SEO/consistency issues (description length, duplicate titles, banned terms)
 *
 * Usage:
 *   node scripts/quality-checks.mjs
 *
 * Options (env):
 *   STRICT=1                -> treat warnings as errors (exit 1)
 *   INCLUDE_ANBIETER=1      -> also scan /anbieter/ pages for banned terms & duplicates
 */

import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const pagesDir = path.join(root, 'src', 'pages');

const STRICT = process.env.STRICT === '1';
const INCLUDE_ANBIETER = process.env.INCLUDE_ANBIETER === '1';

// Some routes are intentionally handled outside Astro pages (redirector, admin, etc.).
const ALLOW_PREFIXES = [
  '/go/',
  '/admin/',
  '/analytics/',
];

// Static files that are valid internal targets (not Astro pages).
const ALLOW_PATHS = new Set([
  '/favicon.svg',
  '/apple-touch-icon.png',
  '/sitemap.xml',
  '/robots.txt',
  '/search-index.json',
]);

// Pages we deliberately exclude from on-site search are still valid link targets.
// No special handling required here.

const bannedTerms = [
  'Quick Wins',
  'Trade-off',
  'Hardening',
  'Setup',
  'Repository',
  'Frontend',
  'Publisher',
];

// ---------- helpers ----------

function walk(dir, out = []) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const ent of entries) {
    const abs = path.join(dir, ent.name);
    if (ent.isDirectory()) {
      walk(abs, out);
      continue;
    }
    const n = ent.name.toLowerCase();
    if (n.endsWith('.md') || n.endsWith('.mdx') || n.endsWith('.astro')) {
      out.push(abs);
    }
  }
  return out;
}

function readFile(p) {
  return fs.readFileSync(p, 'utf8');
}

function relPath(abs) {
  return path.relative(root, abs).split(path.sep).join('/');
}

function stripQuotes(v) {
  return String(v).trim().replace(/^[\'"]|[\'"]$/g, '');
}

// Markdown frontmatter: --- ... ---
function extractFrontmatterBlock(text) {
  if (!text.startsWith('---')) return null;
  const lines = text.split(/\r?\n/);
  if ((lines[0] ?? '').trim() !== '---') return null;
  let end = -1;
  for (let i = 1; i < lines.length; i++) {
    if ((lines[i] ?? '').trim() === '---') { end = i; break; }
  }
  if (end === -1) return null;
  return lines.slice(1, end).join('\n');
}

function topLevelLineValue(fm, key) {
  const re = new RegExp(`^${key}\\s*:\\s*(.*)$`, 'm');
  const m = fm.match(re);
  if (!m) return null;
  return (m[1] ?? '').trim();
}

// Astro wizard/verzeichnis pages use: const frontmatter = { ... }
function extractAstroFrontmatterObject(text) {
  // Unterstützt sowohl `const frontmatter = {...}` als auch `export const frontmatter = {...}`
  let idx = text.indexOf('const frontmatter');
  if (idx === -1) idx = text.indexOf('export const frontmatter');
  if (idx === -1) return null;
  const brace = text.indexOf('{', idx);
  if (brace === -1) return null;

  // Very small, safe parser for a plain object literal without nested braces complexity.
  // We only need url/title/description.
  let depth = 0;
  let end = -1;
  for (let i = brace; i < text.length; i++) {
    const ch = text[i];
    if (ch === '{') depth++;
    if (ch === '}') {
      depth--;
      if (depth === 0) { end = i; break; }
    }
  }
  if (end === -1) return null;
  return text.slice(brace + 1, end);
}

function astroPropValue(objText, key) {
  // Match: key: "value" | 'value' | `value`
  // (Wir parsen hier bewusst nur einfache String-Literale.)
  // Wir vermeiden hier Backtick-Escapes in Template-Literalen.
  const re = new RegExp('\\b' + key + '\\s*:\\s*(["\\\'`])([\\s\\S]*?)\\1', 'm');
  const m = objText.match(re);
  if (!m) return null;
  return m[2].replace(/\\(["'\\`\\\\])/g, '$1');
}

function getPageMeta(absPath, text) {
  const rel = relPath(absPath);
  const lower = rel.toLowerCase();

  if (lower.endsWith('.md') || lower.endsWith('.mdx')) {
    const fm = extractFrontmatterBlock(text);
    if (!fm) return null;
    const url = stripQuotes(topLevelLineValue(fm, 'url') || '');
    const title = stripQuotes(topLevelLineValue(fm, 'title') || '');
    const description = stripQuotes(topLevelLineValue(fm, 'description') || '');
    return { rel, kind: 'md', url, title, description, text };
  }

  if (lower.endsWith('.astro')) {
    const obj = extractAstroFrontmatterObject(text);
    if (!obj) return null;
    const url = astroPropValue(obj, 'url') || '';
    const title = astroPropValue(obj, 'title') || '';
    const description = astroPropValue(obj, 'description') || '';
    return { rel, kind: 'astro', url, title, description, text };
  }

  return null;
}

function isInternalPath(href) {
  return typeof href === 'string' && href.startsWith('/') && !href.startsWith('//');
}

function isAllowedHref(href) {
  if (!isInternalPath(href)) return true; // we only validate internal
  if (href === '/') return true;
  if (ALLOW_PATHS.has(href)) return true;
  for (const p of ALLOW_PREFIXES) {
    if (href.startsWith(p)) return true;
  }
  return false;
}

function normalizeHref(href) {
  // Keep anchors off
  const base = href.split('#')[0].split('?')[0];
  return base;
}

function extractInternalLinks(text) {
  const links = new Set();

  // Markdown: [text](/path/)
  const mdRe = /\[[^\]]*\]\((\/[^)]+)\)/g;
  for (const m of text.matchAll(mdRe)) {
    links.add(String(m[1]));
  }

  // HTML/JSX/Astro: href="/path/"
  const hrefRe = /\bhref\s*=\s*["'](\/[^"']+)["']/g;
  for (const m of text.matchAll(hrefRe)) {
    links.add(String(m[1]));
  }

  // JS redirects in scripts: window.location = "/path/"
  const jsRe = /["'](\/[a-z0-9\/\-]+\/)["']/gi;
  for (const m of text.matchAll(jsRe)) {
    const s = String(m[1]);
    // Only add if it looks like a real route (trailing slash)
    if (s.startsWith('/') && s.endsWith('/')) links.add(s);
  }

  return Array.from(links);
}

function countChars(s) {
  return [...String(s)].length;
}

// ---------- run ----------

const files = walk(pagesDir);

const metas = [];
const urlToRel = new Map();

for (const f of files) {
  const text = readFile(f);
  const meta = getPageMeta(f, text);
  if (!meta) continue;
  if (meta.url) urlToRel.set(meta.url, meta.rel);
  metas.push(meta);
}

// Hard errors: broken internal links
const linkErrors = [];
for (const m of metas) {
  const links = extractInternalLinks(m.text);
  for (const raw of links) {
    if (!isInternalPath(raw)) continue;
    const href = normalizeHref(raw);

    // allow /path without trailing slash? In this project, internal URLs should end with /
    // We accept "/foo" but normalize to "/foo/" for matching.
    const normalized = href.endsWith('/') ? href : (href + '/');

    if (isAllowedHref(normalized)) continue;

    if (!urlToRel.has(normalized)) {
      linkErrors.push(`${m.rel}: broken link -> ${raw}`);
    }
  }
}

// Warnings: description length 140–160
const warnings = [];
for (const m of metas) {
  const rel = m.rel;
  const isAnbieter = rel.includes('src/pages/anbieter/');
  if (isAnbieter && !INCLUDE_ANBIETER) continue;

  if (!m.description) continue;
  const n = countChars(m.description);

  // Allow shorter descriptions for legal pages if you want; currently we still warn.
  if (n < 140 || n > 160) {
    warnings.push(`${rel}: description length ${n} (target 140–160)`);
  }
}

// Warnings: duplicate titles (excluding /anbieter/ by default)
const titleMap = new Map();
for (const m of metas) {
  const rel = m.rel;
  const isAnbieter = rel.includes('src/pages/anbieter/');
  if (isAnbieter && !INCLUDE_ANBIETER) continue;

  const t = (m.title || '').trim();
  if (!t) continue;
  const k = t.toLowerCase();
  const arr = titleMap.get(k) || [];
  arr.push(rel);
  titleMap.set(k, arr);
}
for (const [k, arr] of titleMap.entries()) {
  if (arr.length > 1) {
    warnings.push(`Duplicate title "${k}": ${arr.join(', ')}`);
  }
}

// Warnings: banned terms (excluding /anbieter/ by default)
const termRe = new RegExp(`\\b(${bannedTerms.map(t => t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})\\b`, 'gi');
for (const m of metas) {
  const rel = m.rel;
  const isAnbieter = rel.includes('src/pages/anbieter/');
  if (isAnbieter && !INCLUDE_ANBIETER) continue;

  const hits = new Set();
  let mm;
  while ((mm = termRe.exec(m.text)) !== null) {
    hits.add(mm[1]);
  }
  if (hits.size) {
    warnings.push(`${rel}: contains disallowed terms -> ${Array.from(hits).join(', ')}`);
  }
}

// Output
if (linkErrors.length) {
  console.error('\nQuality checks: broken internal links');
  for (const e of linkErrors) console.error('  - ' + e);
  console.error(`\nFailed: ${linkErrors.length} broken link(s).`);
  process.exit(1);
}

if (warnings.length) {
  console.warn('\nQuality checks: warnings');
  for (const w of warnings) console.warn('  - ' + w);
  console.warn(`\nWarnings: ${warnings.length}`);
  if (STRICT) process.exit(1);
}

console.log('Quality checks: OK');
