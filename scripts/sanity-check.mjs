#!/usr/bin/env node
/**
 * Simple project sanity checks (SEO, a11y, UX, perf, maintenance).
 *
 * Usage:
 *   npm run sanity
 */
import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';
import { URL } from 'node:url';

const root = process.cwd();

function read(p) {
  return fs.readFileSync(path.join(root, p), 'utf8');
}

function exists(p) {
  return fs.existsSync(path.join(root, p));
}

function ok(msg) { console.log(`✅ ${msg}`); }
function warn(msg) { console.log(`⚠️  ${msg}`); }
function fail(msg) { console.log(`❌ ${msg}`); failures.push(msg); }

const failures = [];

// ---- helpers: routes & link extraction ----
function walk(relDir) {
  const out = [];
  const stack = [relDir];
  while (stack.length) {
    const cur = stack.pop();
    const abs = path.join(root, cur);
    for (const ent of fs.readdirSync(abs, { withFileTypes: true })) {
      const rel = path.posix.join(cur.replace(/\\/g, '/'), ent.name);
      if (ent.isDirectory()) stack.push(rel);
      else out.push(rel);
    }
  }
  return out;
}

function toPosix(p) {
  return p.replace(/\\/g, '/');
}

function getRoutesFromSrcPages() {
  const files = walk('src/pages')
    .filter(f => /\.(md|mdx|astro|html)$/.test(f));

  const routes = new Set();
  const derivedByFile = new Map();

  for (const rel of files) {
    const parts = toPosix(rel).split('/');
    // drop src/pages
    const sub = parts.slice(2);
    if (sub.some(seg => seg.includes('['))) {
      // dynamic route: cannot validate statically
      continue;
    }
    const file = sub[sub.length - 1];
    const dir = sub.slice(0, -1);
    let route;
    if (file.startsWith('index.')) {
      route = '/' + (dir.length ? dir.join('/') + '/' : '');
    } else {
      const base = file.replace(/\.(md|mdx|astro|html)$/, '');
      route = '/' + [...dir, base].join('/') + '/';
    }
    routes.add(route);
    derivedByFile.set(rel, route);
  }
  return { routes, derivedByFile };
}

function stripCodeBlocks(text) {
  return text
    .replace(/```[\s\S]*?```/g, '')
    .replace(/`[^`]*`/g, '');
}

function extractLinks(text) {
  const t = stripCodeBlocks(text);
  const links = [];

  // Inline markdown links: [text](url "title")
  for (const m of t.matchAll(/\[[^\]]*\]\(([^)]+)\)/g)) {
    const raw = m[1].trim();
    const url = raw
      .replace(/^<|>$/g, '')
      .split(/\s+/)[0]
      .trim()
      .replace(/^"|"$/g, '')
      .replace(/^'|'$/g, '');
    if (url) links.push(url);
  }

  // Reference definitions: [id]: url
  const defs = new Map();
  for (const m of t.matchAll(/^\s*\[([^\]]+)\]:\s*(\S+)/gm)) {
    defs.set(m[1].trim().toLowerCase(), m[2].trim().replace(/^<|>$/g, ''));
  }
  // Reference usages: [text][id]
  for (const m of t.matchAll(/\[[^\]]+\]\[([^\]]+)\]/g)) {
    const id = m[1].trim().toLowerCase();
    if (defs.has(id)) links.push(defs.get(id));
  }

  // HTML links
  for (const m of t.matchAll(/href\s*=\s*"([^"]+)"/g)) links.push(m[1].trim());
  for (const m of t.matchAll(/href\s*=\s*'([^']+)'/g)) links.push(m[1].trim());

  return links;
}

function normalizeInternalTarget(href, pageRoute) {
  const h = href.trim();
  if (!h) return null;
  if (h.startsWith('#')) return null;
  if (/^(https?:|mailto:|tel:|javascript:)/i.test(h)) return null;
  if (h.startsWith('//')) return null;

  // Resolve relative URLs against the page route
  let url;
  try {
    const base = new URL('https://example.local' + (pageRoute.endsWith('/') ? pageRoute : pageRoute + '/'));
    url = new URL(h, base);
  } catch {
    return null;
  }

  const pathname = url.pathname;
  const hasExt = /\.[a-z0-9]{1,6}$/i.test(pathname);
  return {
    pathname,
    hasExt,
    // for routes: ignore query/hash
  };
}

function publicFileExists(pathname) {
  const rel = pathname.replace(/^\//, '');
  return exists(path.posix.join('public', rel));
}

function publicHasIndexForPath(pathname) {
  const relDir = pathname.replace(/^\//, '').replace(/\/$/, '');
  if (!relDir) return false;
  const candidates = ['index.html', 'index.htm', 'index.php'];
  for (const c of candidates) {
    if (exists(path.posix.join('public', relDir, c))) return true;
  }
  return false;
}

function normalizeRoutePath(p) {
  if (!p.startsWith('/')) p = '/' + p;
  // treat root specially
  if (p === '/') return '/';
  // ensure trailing slash for routes
  return p.endsWith('/') ? p : p + '/';
}

function isLikelyAssetPath(p) {
  return /\.[a-z0-9]{1,6}$/i.test(p);
}


function parseFrontmatterStatus(md) {
  const m = md.match(/^---\s*\n([\s\S]*?)\n---\s*\n/);
  if (!m) return null;
  const block = m[1];
  const sm = block.match(/^\s*status\s*:\s*['\"]?([^'\"\n]+)['\"]?\s*$/m);
  return sm ? sm[1].trim() : null;
}

function parseFrontmatterUrl(md) {
  const m = md.match(/^---\s*\n([\s\S]*?)\n---\s*\n/);
  if (!m) return null;
  const block = m[1];
  const um = block.match(/^\s*url\s*:\s*['\"]?([^'\"\n]+)['\"]?\s*$/m);
  return um ? um[1].trim() : null;
}

// ---- Base URL / site config ----
let site;
try {
  site = JSON.parse(read('src/data/site.json'));
  if (!site?.baseUrl) fail('src/data/site.json: baseUrl fehlt');
  else ok(`baseUrl gefunden: ${site.baseUrl}`);
} catch (e) {
  fail(`src/data/site.json: konnte nicht gelesen werden (${e.message})`);
  site = { baseUrl: '' };
}

const astroCfg = exists('astro.config.mjs') ? read('astro.config.mjs') : '';
if (!astroCfg) fail('astro.config.mjs fehlt');
else {
  // Expect it to reference site.json as single source of truth
  if (astroCfg.includes("site.baseUrl")) ok('astro.config.mjs nutzt site.json (Single Source of Truth)');
  else warn('astro.config.mjs nutzt site.json nicht (Risiko: Canonical/Sitemap kann driften)');
}

// ---- Routes from src/pages (used for link validation) ----
const { routes: knownRoutes, derivedByFile } = getRoutesFromSrcPages();
if (!knownRoutes.size) {
  fail('Keine Routen aus src/pages abgeleitet (unerwartet)');
} else {
  ok(`Routen aus src/pages: ${knownRoutes.size}`);
}

// Optional: frontmatter url should match derived route
let fmMismatch = 0;
for (const [file, route] of derivedByFile.entries()) {
  if (!file.endsWith('.md') && !file.endsWith('.mdx')) continue;
  try {
    const md = read(file);
    const st = (parseFrontmatterStatus(md) || '').toLowerCase();
    if (st === 'todo') continue;
    const fmUrl = parseFrontmatterUrl(md);
    if (fmUrl && normalizeRoutePath(fmUrl) !== normalizeRoutePath(route)) {
      fmMismatch++;
      if (fmMismatch <= 3) {
        warn(`Frontmatter url mismatch: ${file} → url=${fmUrl} (erwartet ${route})`);
      }
    }
  } catch {
    // ignore
  }
}
if (fmMismatch) warn(`Frontmatter url mismatches gesamt: ${fmMismatch}`);
else ok('Frontmatter url passt zu Dateiroute (Stichprobe/Scan)');

// ---- Sitemap script + sitemap.xml ----
const sitemapScript = exists('scripts/build-sitemap.mjs') ? read('scripts/build-sitemap.mjs') : '';
if (!sitemapScript) fail('scripts/build-sitemap.mjs fehlt');
else {
  if (sitemapScript.includes('http://www.sitemaps.org/schemas/sitemap/0.9')) ok('build-sitemap.mjs: xmlns korrekt');
  else fail('build-sitemap.mjs: xmlns NICHT korrekt (erwartet .../sitemap/0.9)');
}

if (!exists('public/sitemap.xml')) warn('public/sitemap.xml fehlt (ok, wenn erst nach build erzeugt)');
else {
  const sitemapXml = read('public/sitemap.xml');
  if (sitemapXml.includes('http://www.sitemaps.org/schemas/sitemap/0.9')) ok('public/sitemap.xml: xmlns korrekt');
  else fail('public/sitemap.xml: xmlns NICHT korrekt');

  // Extract <loc> URLs
  const locs = [...sitemapXml.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1].trim());
  if (!locs.length) warn('public/sitemap.xml: keine <loc> gefunden');
  else {
    const unique = new Set(locs);
    if (unique.size !== locs.length) warn(`public/sitemap.xml: Duplikate gefunden (${locs.length - unique.size})`);
    else ok(`public/sitemap.xml: ${locs.length} URLs, keine Duplikate`);

    // Basic baseUrl check (only if baseUrl looks like absolute URL)
    if (site.baseUrl && /^https?:\/\//i.test(site.baseUrl)) {
      const bad = locs.filter(u => !u.startsWith(site.baseUrl));
      if (bad.length) warn(`public/sitemap.xml: ${bad.length} URLs starten nicht mit baseUrl (z.B. ${bad[0]})`);
      else ok('public/sitemap.xml: alle URLs starten mit baseUrl');
    }

    // Validate sitemap paths against known src/pages routes (best-effort)
    let sitemapMissing = 0;
    for (const u of locs) {
      let pathname;
      try { pathname = new URL(u).pathname; } catch { continue; }
      if (isLikelyAssetPath(pathname)) continue;
      const r = normalizeRoutePath(pathname);
      if (!knownRoutes.has(r)) {
        sitemapMissing++;
        if (sitemapMissing <= 5) warn(`Sitemap-URL ohne passende src/pages Route: ${pathname}`);
      }
    }
    if (sitemapMissing) warn(`Sitemap-URLs ohne src/pages Route gesamt: ${sitemapMissing} (kann ok sein bei dynamischen/generierten Seiten)`);
    else ok('Sitemap-URLs matchen src/pages Routen');
  }

  // lastmod format: allow YYYY-MM-DD or ISO date-time
  const lastmods = [...sitemapXml.matchAll(/<lastmod>([^<]+)<\/lastmod>/g)].map(m => m[1].trim());
  const badLast = lastmods.filter(x => !/^\d{4}-\d{2}-\d{2}([T ]\d{2}:\d{2}(:\d{2})?([.]\d+)?(Z|[+-]\d{2}:\d{2})?)?$/.test(x));
  if (badLast.length) warn(`public/sitemap.xml: ${badLast.length} lastmod scheinen nicht ISO-konform (z.B. ${badLast[0]})`);
  else if (lastmods.length) ok('public/sitemap.xml: lastmod sehen ISO-konform aus');
}

// ---- robots.txt ----
if (!exists('public/robots.txt')) warn('public/robots.txt fehlt (ok, wenn nach build erzeugt)');
else {
  const robots = read('public/robots.txt');
  if (robots.match(/^\s*Sitemap:\s+/mi)) ok('public/robots.txt: Sitemap-Zeile vorhanden');
  else warn('public/robots.txt: keine Sitemap-Zeile gefunden');
  if (site.baseUrl) {
    const expected = `Sitemap: ${new URL('/sitemap.xml', site.baseUrl).toString()}`;
    if (robots.includes(expected)) ok('public/robots.txt: Sitemap-URL passt zur baseUrl');
    else warn(`public/robots.txt: Sitemap-URL passt evtl. nicht (erwartet: ${expected})`);
  }
}

// ---- a11y: skip link ----
const baseAstroPath = 'src/layouts/Base.astro';
if (!exists(baseAstroPath)) fail(`${baseAstroPath} fehlt`);
else {
  const baseAstro = read(baseAstroPath);
  if (baseAstro.includes('class="skip-link"') && baseAstro.includes('href="#content"')) ok('Skip-Link vorhanden (a11y)');
  else fail('Skip-Link fehlt in Base.astro (CSS ist vorhanden, aber Link nicht gerendert)'); 
}



// ---- asset versioning (hash) ----
// We use Vite's hashed asset URLs via `?url` imports (CSP-friendly, no inline bundles).
if (exists(baseAstroPath)) {
  const baseAstro = read(baseAstroPath);

  const hasHashedUrlImports =
    baseAstro.includes('?url') &&
    baseAstro.includes("../scripts/nav.js?url") &&
    baseAstro.includes("../scripts/search.js?url") &&
    baseAstro.includes("../styles/site.css?url");

  if (hasHashedUrlImports) ok("Assets werden via `?url` (gehashed) eingebunden");
  else warn("`?url` Asset-Imports fehlen in Base.astro (Hash/Cache-Busting evtl. nicht aktiv)");
} else {
  warn("Base.astro fehlt (kann Asset-Einbindung nicht prüfen)");
}

// ---- cache headers for hashed assets ----
const htaccessPath = 'public/.htaccess';
if (exists(htaccessPath)) {
  const ht = read(htaccessPath);
  const hasHashRx = ht.includes('[0-9a-f]{8}') || ht.includes('[0-9a-f]{8,}');
  if (ht.includes('immutable') && ht.includes('FilesMatch') && hasHashRx) ok('htaccess: immutable Cache-Control für gehashte Assets gesetzt');
  else warn('htaccess: kein immutable Cache-Control für gehashte Assets gefunden (Nice-to-have)');
}

// ---- mega menu: focus on hover ----
const navPath = 'src/scripts/nav.js';
if (!exists(navPath)) warn(`${navPath} fehlt`);
else {
  const nav = read(navPath);
  // The old check expected `openMega({ ... })` (single-arg). We now use `openMega(menu, { ... })`.
  // Keep this robust (avoid brittle string includes).
  const hasFocusOpt = /function\s+openMega\s*\([^)]*\{[^}]*\bfocus\s*=\s*(true|false)/.test(nav);
  if (hasFocusOpt) ok('nav.js (src): openMega unterstützt focus-Option');
  else warn('nav.js (src): openMega hat keine focus-Option (Hover könnte Fokus klauen)');

  // Hover open should explicitly set focus:false (so focus is not moved into the mega menu).
  const hoverNoFocus = /openMega\s*\([^,]*,\s*\{[^}]*\bfocus\s*:\s*false/.test(nav);
  if (hoverNoFocus) ok('nav.js: Hover öffnet ohne Fokus zu verschieben');
  else warn('nav.js: Hover öffnet evtl. mit Fokus (UX/A11y kann leiden)');
}

// ---- search: enter + caching ----
const searchPath = 'src/scripts/search.js';
if (!exists(searchPath)) warn(`${searchPath} fehlt`);
else {
  const s = read(searchPath);
  if (s.includes("fetch('/search-index.json')") && !s.includes("cache: 'no-store'") && !s.includes('cache:"no-store"')) {
    ok('search.js (src): search-index.json wird cache-freundlich geladen');
  } else {
    warn("search.js (src): fetch() könnte Caching aushebeln (achte auf cache: 'no-store')");
  }

  // Heuristic check for Enter default to first result or redirect
  const hasEnter = s.includes("e.key === 'Enter'") || s.includes('e.key === "Enter"');
  if (!hasEnter) warn('search.js (src): kein Enter-Handler gefunden');
  else {
    const opensFirst = s.includes(': links[0]') || s.includes('links[0]');
    const redirects = s.includes('/suche/?q=${encodeURIComponent(query)}') || s.includes('/suche/?q=');
    if (opensFirst && redirects) ok('search.js (src): Enter öffnet Treffer (oder leitet auf /suche/ um)');
    else warn('search.js (src): Enter-Behavior evtl. nicht optimal (kein Default-Treffer/Redirect erkannt)');
  }
}

// ---- maintenance: stray artifacts ----
if (exists('src/pages.zip')) warn('src/pages.zip gefunden (Artefakt; besser entfernen)');
else ok('keine src/pages.zip Artefakte gefunden');

// ---- broken internal links (routes + public assets) ----
function collectHrefsFromNavJson() {
  if (!exists('src/data/nav.json')) return [];
  let data;
  try { data = JSON.parse(read('src/data/nav.json')); } catch { return []; }
  const out = [];
  const stack = [data];
  while (stack.length) {
    const v = stack.pop();
    if (!v) continue;
    if (typeof v === 'object') {
      if (typeof v.href === 'string') out.push(v.href);
      for (const k of Object.keys(v)) stack.push(v[k]);
    } else if (Array.isArray(v)) {
      for (const it of v) stack.push(it);
    }
  }
  return out;
}

const pageFiles = [...derivedByFile.keys()];
let brokenRoutes = 0;
let brokenAssets = 0;
let nonCanonical = 0;
let scannedLinks = 0;

function validateTarget(pathname, hasExt) {
  if (hasExt) {
    if (!publicFileExists(pathname)) {
      brokenAssets++;
      if (brokenAssets <= 5) warn(`Fehlendes Asset in /public: ${pathname}`);
    }
    return;
  }

  const route = normalizeRoutePath(pathname);
  if (!knownRoutes.has(route) && !publicHasIndexForPath(route)) {
    brokenRoutes++;
    if (brokenRoutes <= 10) warn(`Broken internal route: ${route}`);
  }
}

for (const file of pageFiles) {
  const route = derivedByFile.get(file) || '/';
  let text;
  try { text = read(file); } catch { continue; }
  // Draft/TODO pages can contain template placeholders (e.g. [Titel](URL)) that would otherwise trigger false positives.
  if (file.endsWith('.md') || file.endsWith('.mdx')) {
    const st = (parseFrontmatterStatus(text) || '').toLowerCase();
    if (st === 'todo') continue;
  }
  for (const href of extractLinks(text)) {
    const t = normalizeInternalTarget(href, route);
    if (!t) continue;
    scannedLinks++;
    const p = t.pathname;
    // ignore placeholders and special cases
    if (p === '/#' || href === '#') continue;
    // Track non-canonical (no trailing slash for route paths)
    if (!t.hasExt && p !== '/' && !p.endsWith('/')) nonCanonical++;
    validateTarget(p, t.hasExt);
  }
}

// nav.json links
for (const href of collectHrefsFromNavJson()) {
  if (!href || href === '#' || href === '/#') continue;
  const t = normalizeInternalTarget(href, '/');
  if (!t) continue;
  scannedLinks++;
  if (!t.hasExt && t.pathname !== '/' && !t.pathname.endsWith('/')) nonCanonical++;
  validateTarget(t.pathname, t.hasExt);
}

if (!scannedLinks) warn('Internal link check: keine Links gefunden (unerwartet?)');
else ok(`Internal link check: ${scannedLinks} Links gescannt`);

if (brokenAssets) warn(`Fehlende Assets gesamt: ${brokenAssets}`);
else ok('Keine fehlenden Assets gefunden');

if (nonCanonical) warn(`Nicht-kanonische interne Links (ohne trailing slash) gesamt: ${nonCanonical} (optional aufräumen)`);
else ok('Interne Links sind kanonisch (Trailing Slash)');

if (brokenRoutes) {
  fail(`Broken internal routes gesamt: ${brokenRoutes}`);
} else {
  ok('Keine broken internal routes gefunden');
}

// ---- summary / exit ----
if (failures.length) {
  console.log('\n---\nSanity Check: FEHLGESCHLAGEN');
  console.log(`Kritische Probleme: ${failures.length}`);
  process.exitCode = 1;
} else {
  console.log('\n---\nSanity Check: OK');
}
