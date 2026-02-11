import fs from 'node:fs';
import path from 'node:path';

/**
 * Post-build verification on rendered output.
 *
 * Policy:
 *  - No direct affiliate-style URLs in the final HTML.
 *  - /go/<slug>/ links may only appear under /anbieter/ pages.
 *
 * This complements scripts/qa-scan.mjs (source scan) by validating `dist/`.
 */

const ROOT = process.cwd();
const DIST = path.join(ROOT, 'dist');

if (!fs.existsSync(DIST)) {
  console.log('[qa-dist-scan] dist/ not found (skipping).');
  process.exit(0);
}

const SKIP_DIRS = new Set(['.git']);

const HTML_EXTS = new Set(['.html']);

function walk(dir, out = []) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const e of entries) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) {
      if (SKIP_DIRS.has(e.name)) continue;
      walk(p, out);
    } else {
      if (HTML_EXTS.has(path.extname(p))) out.push(p);
    }
  }
  return out;
}

// Conservative affiliate detection.
const AFFILIATE_URL_RE = /https?:\/\/[^\s"'<>)]{0,200}(?:\b(?:ref|tag|aff|affiliate|partner|utm_source)=[^\s"'<>)]{1,120}|\b(?:awin1\.com|impact\.com|partnerize\.com|tradetracker\.net|linksynergy\.com|clickbank\.net|commissionjunction|cj\.com)\b)/gi;

// /go references (internal). We catch both absolute and relative uses.
const GO_REF_RE = /(?:\b|\/)go\/[a-z0-9-]+\/?/gi;

const htmlFiles = walk(DIST);
const errors = [];

for (const fp of htmlFiles) {
  const rel = path.relative(DIST, fp).replace(/\\/g, '/');
  const raw = fs.readFileSync(fp, 'utf8');

  // 1) No direct affiliate-style URLs in rendered HTML.
  const aff = raw.match(AFFILIATE_URL_RE);
  if (aff && aff.length) {
    const sample = [...new Set(aff)].slice(0, 2).join(' | ');
    errors.push(
      `[qa-dist-scan] Verbotener Affiliate-Link in dist/${rel}. ` +
        `Affiliate-Ziele nur via /go/<slug>/ (und nur unter /anbieter/). ` +
        `Beispiel: ${sample}`
    );
  }

  // 2) /go references must only appear under /anbieter/ pages.
  if (GO_REF_RE.test(raw)) {
    GO_REF_RE.lastIndex = 0;
    const isAllowed = rel === '404.html' || rel.startsWith('anbieter/');
    if (!isAllowed) {
      const sample = raw.match(GO_REF_RE)?.slice(0, 3).join(', ') ?? 'go/<slug>';
      errors.push(
        `[qa-dist-scan] /go/<slug> Referenz außerhalb /anbieter/ in dist/${rel}. ` +
          `Bitte nur von /anbieter/ Seiten aus verlinken. Fund: ${sample}`
      );
    }
  }
}

if (errors.length) {
  console.error('\n' + errors.join('\n') + '\n');
  process.exit(1);
}

console.log('[qa-dist-scan] OK: dist/ enthält keine direkten Affiliate-Links, /go/ nur unter /anbieter/.');
