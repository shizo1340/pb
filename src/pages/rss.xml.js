import site from '../data/site.json';

// Simple, privacy-friendly RSS feed.
// We build it from markdown frontmatter in src/pages (excluding /anbieter/).

const esc = (s = '') => String(s)
  .replace(/&/g, '&amp;')
  .replace(/</g, '&lt;')
  .replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;')
  .replace(/'/g, '&#39;');

const toAbs = (path) => new URL(path, site.baseUrl.endsWith('/') ? site.baseUrl : site.baseUrl + '/').toString();

const toRfc822 = (yyyyMmDd) => {
  // normalize date-only strings to midnight UTC
  if (!yyyyMmDd) return null;
  const d = new Date(`${yyyyMmDd}T00:00:00Z`);
  if (Number.isNaN(d.getTime())) return null;
  return d.toUTCString();
};

export async function GET() {
  const mdMods = import.meta.glob('./**/*.md', { eager: true });
  const items = Object.values(mdMods)
    .map((m) => m?.frontmatter ?? {})
    .map((fm) => {
      const url = String(fm.url || '').trim();
      if (!url || !url.startsWith('/')) return null;
      if (url.startsWith('/anbieter/')) return null;
      // Skip obvious utility pages
      if (fm.robots && String(fm.robots).includes('noindex')) return null;
      const updated = String(fm.updated || fm.date || '').trim();
      return {
        title: String(fm.title || '').trim(),
        description: String(fm.description || '').trim(),
        link: url,
        updated,
        pubDate: toRfc822(updated),
      };
    })
    .filter(Boolean)
    .sort((a, b) => {
      // newest first
      const ad = a.updated || '0000-00-00';
      const bd = b.updated || '0000-00-00';
      return bd.localeCompare(ad);
    })
    .slice(0, 50);

  const now = new Date().toUTCString();
  const channelLink = toAbs('/');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n` +
`<rss version="2.0">\n` +
`  <channel>\n` +
`    <title>${esc(site.siteName)}</title>\n` +
`    <link>${esc(channelLink)}</link>\n` +
`    <description>${esc(site.defaultDescription)}</description>\n` +
`    <language>${esc(site.language || 'de')}</language>\n` +
`    <lastBuildDate>${esc(now)}</lastBuildDate>\n` +
`    <generator>Astro</generator>\n` +
items.map((it) => {
  const link = toAbs(it.link);
  const guid = link;
  const pubDate = it.pubDate || now;
  return (
`    <item>\n` +
`      <title>${esc(it.title || it.link)}</title>\n` +
`      <link>${esc(link)}</link>\n` +
`      <guid isPermaLink="true">${esc(guid)}</guid>\n` +
`      <pubDate>${esc(pubDate)}</pubDate>\n` +
`      <description>${esc(it.description || '')}</description>\n` +
`    </item>\n`
  );
}).join('') +
`  </channel>\n` +
`</rss>\n`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
