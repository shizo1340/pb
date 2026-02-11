#!/usr/bin/env node
/**
 * Validate required frontmatter on content pages.
 *
 * Applies to: Markdown/MDX under src/pages/
 *
 * Required (Phase 0 – Fundament)
 *
 * Required keys (top-level):
 * - layout
 * - title
 * - url
 * - chapter
 * - type
 * - format
 * - level
 * - money
 * - status
 * - updated (YYYY-MM-DD)
 * - description
 */

import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const pagesDir = path.join(root, 'src', 'pages');

const requiredKeys = [
  'layout',
  'title',
  'url',
  'chapter',
  'type',
  'format',
  'level',
  'money',
  'status',
  'updated',
  'description',
];

const errors = [];

function walk(dir, out = []) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const ent of entries) {
    const abs = path.join(dir, ent.name);
    if (ent.isDirectory()) {
      walk(abs, out);
      continue;
    }
    if (ent.name.endsWith('.md') || ent.name.endsWith('.mdx')) {
      out.push(abs);
    }
  }
  return out;
}

function extractFrontmatterBlock(text) {
  // Must start with a frontmatter block.
  if (!text.startsWith('---')) return null;
  const lines = text.split(/\r?\n/);
  if ((lines[0] ?? '').trim() !== '---') return null;

  let end = -1;
  for (let i = 1; i < lines.length; i++) {
    if ((lines[i] ?? '').trim() === '---') {
      end = i;
      break;
    }
  }
  if (end === -1) return null;
  return lines.slice(1, end).join('\n');
}
function extractBodyAfterFrontmatter(text) {
  if (!text.startsWith('---')) return text;
  const lines = text.split(/\r?\n/);
  if ((lines[0] ?? '').trim() !== '---') return text;

  let endIdx = -1;
  for (let i = 1; i < lines.length; i++) {
    if ((lines[i] ?? '').trim() === '---') {
      endIdx = i;
      break;
    }
  }

  if (endIdx === -1) return '';
  return lines.slice(endIdx + 1).join('\n');
}
function stripQuotes(v) {
  return String(v).trim().replace(/^['"]|['"]$/g, '');
}

function topLevelLineValue(fm, key) {
  // Only match top-level keys (no indentation)
  const re = new RegExp(`^${key}\\s*:\\s*(.*)$`, 'm');
  const m = fm.match(re);
  if (!m) return null;
  return (m[1] ?? '').trim();
}

function isIsoDate(v) {
  const s = stripQuotes(v);
  if (!/^\d{4}-\d{2}-\d{2}$/.test(s)) return false;
  const d = new Date(`${s}T00:00:00Z`);
  if (Number.isNaN(d.getTime())) return false;
  return d.toISOString().startsWith(s);
}

function isValidUrlPath(v) {
  const s = stripQuotes(v);
  if (!s.startsWith('/')) return false;
  if (!s.endsWith('/')) return false;
  if (s.includes(' ')) return false;
  // We keep this fairly permissive, but disallow .html
  if (s.toLowerCase().endsWith('.html/')) return false;

  // Enforce lowercase ASCII segments (kebab-case) to keep URLs stable.
  const segs = s.split('/').filter(Boolean);
  for (const seg of segs) {
    if (seg !== seg.toLowerCase()) return false;
    if (!/^[a-z0-9-]+$/.test(seg)) return false;
  }
  return true;
}

function validateFile(filePath) {
  const rel = path.relative(root, filePath).split(path.sep).join('/');
  const text = fs.readFileSync(filePath, 'utf8');
  const fm = extractFrontmatterBlock(text);

  if (!fm) {
    errors.push(`${rel}: missing or invalid frontmatter block (--- ... ---)`);
    return;
  }

  for (const key of requiredKeys) {
    const v = topLevelLineValue(fm, key);
    if (v === null || v === '') {
      errors.push(`${rel}: missing required frontmatter '${key}'`);
    }
  }

  const layout = topLevelLineValue(fm, 'layout');
  if (layout) {
    const s = stripQuotes(layout);
    const ok =
      /(?:^|\/)DocLayout\.astro$/.test(s) ||
      /(?:^|\/)HubLayout\.astro$/.test(s) ||
      /(?:^|\/)ToolLayout\.astro$/.test(s) ||
      /(?:^|\/)ScenarioLayout\.astro$/.test(s);
    if (!ok) {
      errors.push(`${rel}: layout must point to DocLayout.astro, HubLayout.astro, ToolLayout.astro, or ScenarioLayout.astro (got: ${layout})`);
    }
  }

  const updated = topLevelLineValue(fm, 'updated');
  if (!updated || !isIsoDate(updated)) {
    errors.push(`${rel}: updated must be ISO date YYYY-MM-DD (got: ${updated ?? 'missing'})`);
  }

  const url = topLevelLineValue(fm, 'url');
  if (!url || !isValidUrlPath(url)) {
    errors.push(`${rel}: url must be an absolute path with trailing slash (example: "/start/faq/") (got: ${url ?? 'missing'})`);
  }

  // Guardrail: 'done' pages must not be empty (except /anbieter/* where pages can be generated).
  const statusVal = stripQuotes(topLevelLineValue(fm, 'status') || '').toLowerCase();
  if (statusVal === 'done' && !rel.includes('src/pages/anbieter/')) {
    const body = extractBodyAfterFrontmatter(text).trim();
    if (body.length < 120) {
      errors.push(`${rel}: status=done but body is empty/too short (${body.length} chars)`);
    }
  }
}

let files = [];
try {
  files = walk(pagesDir);
} catch (e) {
  console.error('Content validator crashed while walking src/pages:', e);
  process.exit(2);
}

for (const f of files) validateFile(f);

if (errors.length) {
  console.error('\nContent validation: errors');
  for (const er of errors) console.error('  - ' + er);
  console.error(`\nFailed: ${errors.length} error(s).`);
  process.exit(1);
}

console.log('Content validation: OK');
