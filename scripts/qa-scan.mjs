import fs from 'node:fs';
import path from 'node:path';

/**
 * QA guardrails (project policy):
 * 1) Affiliate links must not appear directly in content/components.
 *    All affiliate destinations should be routed through /go/<slug>/.
 * 2) /go/<slug>/ links may only be referenced from within /anbieter/.
 *
 * This script intentionally runs as part of `prebuild`.
 */

const ROOT = process.cwd();

const WALK_DIRS = [
  'src',
  'public',
  'scripts',
];

const SKIP_DIRS = new Set([
  'node_modules',
  'dist',
  '.git',
  '.astro',
]);

const ALLOWED_AFFILIATE_FILES = new Set([
  // The single source of truth for affiliate destinations:
  path.join(ROOT, 'src', 'data', 'go-overrides.json'),
]);

// /go/ references are allowed only in these areas (and the go route itself)
const ALLOWED_GO_REF_PATHS = [
  path.join(ROOT, 'src', 'pages', 'anbieter') + path.sep,
  path.join(ROOT, 'src', 'pages', 'go') + path.sep,
  path.join(ROOT, 'src', 'components') + path.sep + 'Anbieter',
  path.join(ROOT, 'src', 'layouts') + path.sep + 'DocLayout.astro',
];

const TEXT_EXTS = new Set([
  '.astro', '.md', '.mdx',
  '.js', '.mjs', '.ts', '.tsx',
  '.json', '.yaml', '.yml',
  '.css', '.txt', '.xml', '.html', '.webmanifest',
]);

function isTextFile(fp) {
  return TEXT_EXTS.has(path.extname(fp));
}

function walk(dir, out = []) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const e of entries) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) {
      if (SKIP_DIRS.has(e.name)) continue;
      walk(p, out);
    } else {
      if (isTextFile(p)) out.push(p);
    }
  }
  return out;
}

function allowedGoReference(filePath) {
  // Exact file allow
  if (filePath === path.join(ROOT, 'src', 'layouts', 'DocLayout.astro')) return true;
  // Prefix allows
  return ALLOWED_GO_REF_PATHS.some((allowed) => {
    if (allowed.endsWith('.astro')) return filePath === allowed;
    return filePath.startsWith(allowed);
  });
}

// We only flag obvious affiliate-style URLs in code/content.
// This is conservative to avoid false positives.
const AFFILIATE_URL_RE = /https?:\/\/[^\s"'<>)]{0,200}(?:\b(?:ref|tag|aff|affiliate|partner|utm_source)=[^\s"'<>)]{1,120}|\b(?:awin1\.com|impact\.com|partnerize\.com|tradetracker\.net|linksynergy\.com|clickbank\.net|commissionjunction|cj\.com)\b)/gi;

// /go references (internal). We catch both absolute and relative uses.
const GO_REF_RE = /(?:\b|\/)go\/[a-z0-9-]+\/?/gi;

const files = WALK_DIRS.flatMap((d) => {
  const abs = path.join(ROOT, d);
  return fs.existsSync(abs) ? walk(abs) : [];
});

const errors = [];

for (const filePath of files) {
  const rel = path.relative(ROOT, filePath);
  const raw = fs.readFileSync(filePath, 'utf8');

  // 1) Affiliate-style URLs must only live in go-overrides.json.
  if (!ALLOWED_AFFILIATE_FILES.has(filePath)) {
    const m = raw.match(AFFILIATE_URL_RE);
    if (m && m.length) {
      const sample = [...new Set(m)].slice(0, 2).join(' | ');
      errors.push(
        `[qa-scan] Verbotener Affiliate-Link in ${rel}. ` +
          `Affiliate-Ziele nur via /go/<slug>/ und in src/data/go-overrides.json pflegen. ` +
          `Beispiel: ${sample}`
      );
    }
  }

  // 2) /go/<slug> darf nur im /anbieter/-Bereich referenziert werden.
  // Note: go route itself is allowed.
  if (GO_REF_RE.test(raw)) {
    GO_REF_RE.lastIndex = 0;
    if (!allowedGoReference(filePath)) {
      // Filter out incidental mentions like '/go/' in robots or docs by checking for 'go/' usage.
      // If it matched, we enforce the policy.
      const sample = raw.match(GO_REF_RE)?.slice(0, 3).join(', ') ?? 'go/<slug>';
      errors.push(
        `[qa-scan] /go/<slug> Referenz außerhalb /anbieter/ in ${rel}. ` +
          `Bitte nur von /anbieter/ aus verlinken. Fund: ${sample}`
      );
    }
  }
}

if (errors.length) {
  console.error('\n' + errors.join('\n') + '\n');
  process.exit(1);
} else {
  console.log('[qa-scan] OK: Keine direkten Affiliate-Links, /go/ nur in /anbieter/.');
}
