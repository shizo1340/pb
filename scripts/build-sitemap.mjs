import fs from 'node:fs';
import path from 'node:path';
import { SITE } from './site.mjs';

const root = process.cwd();
const pagesDir = path.join(root, 'src', 'pages');
const outSitemap = path.join(root, 'public', 'sitemap.xml');
const outRobots = path.join(root, 'public', 'robots.txt');

function walk(dir){
  const out = [];
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })){
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) out.push(...walk(p));
    else if (ent.isFile() && ent.name.endsWith('.md')) out.push(p);
  }
  return out;
}

function parseFrontmatter(md){
  const m = md.match(/^---\n([\s\S]*?)\n---\n/);
  if (!m) return { data: {}, body: md };
  const raw = m[1];
  const data = {};
  for (const line of raw.split(/\n/)){
    const mm = line.match(/^([A-Za-z0-9_\-]+)\s*:\s*(.*)\s*$/);
    if (!mm) continue;
    let v = mm[2].trim();
    v = v.replace(/^"(.*)"$/,'$1').replace(/^'(.*)'$/,'$1');
    data[mm[1]] = v;
  }
  return { data, body: md.slice(m[0].length) };
}


function walkAstro(dir){
  const out = [];
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })){
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) out.push(...walkAstro(p));
    else if (ent.isFile() && ent.name.endsWith('.astro')) out.push(p);
  }
  return out;
}

function parseAstroFrontmatterObject(src){
  // Heuristic: find `const frontmatter = { ... };` and extract url/updated/robots/search/status/sitemap.
  const m = src.match(/const\s+frontmatter\s*=\s*\{([\s\S]*?)\};/);
  if (!m) return null;
  const block = m[1];
  const getStr = (key) => {
    const mm = block.match(new RegExp(key + "\\s*:\\s*\"([^\"]*)\"", "m")) || block.match(new RegExp(key + "\\s*:\\s*'([^']*)'", "m"));
    return mm ? mm[1].trim() : '';
  };
  return {
    url: getStr('url'),
    updated: getStr('updated'),
    robots: getStr('robots'),
    search: getStr('search'),
    status: getStr('status'),
    sitemap: getStr('sitemap'),
  };
}

function canonicalizePath(u){
  if (!u) return '';
  if (u === '/') return '/';
  return u.endsWith('/') ? u : (u + '/');
}

const files = walk(pagesDir);
const urls = [];
for (const f of files){
  const md = fs.readFileSync(f, 'utf8');
  const { data } = parseFrontmatter(md);
  if (data.search === 'no') continue;
  // Respect robots meta for markdown pages (e.g. /404/ should never be in sitemap)
  const robots = String(data.robots || '').toLowerCase();
  if (robots.includes('noindex')) continue;
  const status = (data.status || 'todo').toLowerCase();
  const include = (status === 'done') || data.sitemap === 'yes' || data.url === '/';
  if (!include) continue;

  const u = new URL(data.url || '/', SITE.baseUrl).toString();
  const lastmod = (data.updated || '').trim();
  urls.push({ loc: u, lastmod });
}


// Include .astro pages that define a `frontmatter` object (e.g. /anbieter/, /verzeichnis/).
const astroFiles = walkAstro(pagesDir);
for (const f of astroFiles){
  const src = fs.readFileSync(f, 'utf8');
  const fm = parseAstroFrontmatterObject(src);
  if (!fm) continue;
  const urlPath = canonicalizePath(fm.url);
  if (!urlPath) continue;

  const robots = (fm.robots || '').toLowerCase();
  if (robots.includes('noindex')) continue;
  if ((fm.search || '').toLowerCase() === 'no') continue;

  const status = (fm.status || 'todo').toLowerCase();
  const include = (status === 'done') || (fm.sitemap || '').toLowerCase() === 'yes' || urlPath === '/';
  if (!include) continue;

  const loc = new URL(urlPath, SITE.baseUrl).toString();
  const lastmod = (fm.updated || '').trim();
  if (!urls.some(x => x.loc === loc)) urls.push({ loc, lastmod });
}

urls.sort((a,b) => a.loc.localeCompare(b.loc));

const xml = `<?xml version="1.0" encoding="UTF-8"?>\n` +
`<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
urls.map(x => `  <url>\n    <loc>${x.loc}</loc>\n${x.lastmod ? `    <lastmod>${x.lastmod}</lastmod>\n` : ''}  </url>`).join('\n') +
`\n</urlset>\n`;

fs.mkdirSync(path.dirname(outSitemap), { recursive: true });
fs.writeFileSync(outSitemap, xml, 'utf8');

const robots = `User-agent: *\nAllow: /\n\n# Redirect endpoints (affiliate routing)\nDisallow: /go/\n\nSitemap: ${new URL('/sitemap.xml', SITE.baseUrl).toString()}\nSitemap: ${new URL('/rss.xml', SITE.baseUrl).toString()}\n`;
fs.writeFileSync(outRobots, robots, 'utf8');

console.log(`sitemap.xml: ${urls.length} URLs`);
