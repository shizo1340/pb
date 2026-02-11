import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const pagesDir = path.join(root, 'src', 'pages');
const outFile = path.join(root, 'public', 'search-index.json');
// Pages that should never appear in the on-site search (navigation/tools pages).
const EXCLUDE_URLS = new Set([
  '/wizard/',
  '/verzeichnis/',
  '/impressum/',
  '/datenschutz/',
]);


function walk(dir) {
  const out = [];
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) out.push(...walk(p));
    else if (ent.isFile() && (ent.name.endsWith('.md') || ent.name.endsWith('.astro'))) out.push(p);
  }
  return out;
}

function parseFrontmatter(md) {
  // very small frontmatter parser (YAML-like, one-line key: value)
  const m = md.match(/^---\n([\s\S]*?)\n---\n/);
  if (!m) return { data: {}, body: md };
  const raw = m[1];
  const data = {};
  for (const line of raw.split(/\n/)) {
    const mm = line.match(/^([A-Za-z0-9_\-]+)\s*:\s*(.*)\s*$/);
    if (!mm) continue;
    let v = mm[2].trim();
    v = v.replace(/^\"(.*)\"$/, '$1').replace(/^'(.*)'$/, '$1');
    data[mm[1]] = v;
  }
  return { data, body: md.slice(m[0].length) };
}

function parseAstroFrontmatter(src) {
  // Convention used in this project: const frontmatter = { ... };
  const m = src.match(/const\s+frontmatter\s*=\s*\{([\s\S]*?)\}\s*;?/);
  if (!m) return {};
  const raw = m[1];
  const data = {};
  for (const line of raw.split(/\n/)) {
    const mm = line.match(/^\s*([A-Za-z0-9_\-]+)\s*:\s*(.+?)\s*,?\s*$/);
    if (!mm) continue;
    let v = mm[2].trim();
    // strip trailing comment
    v = v.replace(/\s*\/\/.*$/, '').trim();
    // strip quotes
    v = v.replace(/^\"([\s\S]*)\"$/, '$1').replace(/^'([\s\S]*)'$/, '$1');
    data[mm[1]] = v;
  }
  return data;
}

function fileToUrl(file) {
  // file like src/pages/a/b/index.md => /a/b/
  const rel = path.relative(pagesDir, file).replace(/\\/g, '/');
  const parts = rel.split('/');
  parts.pop(); // index.ext
  const url = '/' + parts.join('/') + (parts.length ? '/' : '');
  return url;
}

const files = walk(pagesDir);
let idx = [];

for (const f of files) {
  const ext = path.extname(f).toLowerCase();
  const src = fs.readFileSync(f, 'utf8');

  let data = {};
  let body = '';

  if (ext === '.md') {
    const parsed = parseFrontmatter(src);
    data = parsed.data || {};
    body = parsed.body || '';
  } else if (ext === '.astro') {
    data = parseAstroFrontmatter(src) || {};
    body = '';
  } else {
    continue;
  }

  if (data.search === 'no') continue;
  // Respect noindex pages: don't surface them in the site search.
  if (String(data.robots || '').toLowerCase().includes('noindex')) continue;

  const url = data.url || fileToUrl(f);
  if (!url) continue;
  if (EXCLUDE_URLS.has(url)) continue;

  const title = data.title || (body.match(/^#\s+(.+)$/m)?.[1] ?? url);
  const description = data.description || '';

  idx.push({
    url,
    title,
    description,
    chapter: data.chapter || '',
    type: data.type || '',
    format: data.format || '',
    level: data.level || '',
    money: data.money || 'no',
    keywords: data.keywords || '',
    status: data.status || 'todo',
  });
}

idx = idx.filter((it) => String(it.status || 'todo').toLowerCase() === 'done');

// stable sort by url
idx.sort((a, b) => a.url.localeCompare(b.url, 'de'));
fs.mkdirSync(path.dirname(outFile), { recursive: true });
fs.writeFileSync(outFile, JSON.stringify(idx, null, 2), 'utf8');
console.log(`search-index.json: ${idx.length} Einträge`);
