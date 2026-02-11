import type { APIRoute } from 'astro';
// NOTE: this file lives in src/pages/go/[slug]/.
// The overrides live in src/data/, so we need three levels up.
import goOverrides from '../../../data/go-overrides.json';

/**
 * Overrides support two formats (backward compatible):
 *  - "slug": "https://example.com/?x=y"
 *  - "slug": { "url": "https://example.com/?x=y", "status": 302 }
 *
 * Optional global default:
 *  - "_defaultStatus": 302
 */
type OverrideEntry = string | { url: string; status?: 301 | 302 };
type OverrideMap = Record<string, OverrideEntry>;

const overridesRaw = goOverrides as unknown as OverrideMap & { _defaultStatus?: 301 | 302 };

const defaultStatus: 301 | 302 = (overridesRaw._defaultStatus === 301) ? 301 : 302;

const overrides = (() => {
  const m: Record<string, { url: string; status: 301 | 302 }> = {};
  for (const [k, v] of Object.entries(overridesRaw)) {
    if (k.startsWith('_')) continue;
    if (typeof v === 'string' && /^https?:\/\//i.test(v)) {
      m[k] = { url: v, status: defaultStatus };
      continue;
    }
    if (v && typeof v === 'object') {
      const url = typeof (v as any).url === 'string' ? String((v as any).url).trim() : '';
      const status = ((v as any).status === 301) ? 301 : defaultStatus;
      if (/^https?:\/\//i.test(url)) m[k] = { url, status };
    }
  }
  return m;
})();

// Build a static redirect map from /anbieter/* provider pages.
// Default destination is the provider.website from frontmatter.
export async function getStaticPaths() {
  // Static build: pre-render redirects for all provider slugs.
  const pages = import.meta.glob('../anbieter/*/index.md', { eager: true }) as Record<string, any>;

  return Object.values(pages)
    .map((p: any) => {
      const fm = p.frontmatter ?? {};
      const prov = fm.provider ?? {};

      const url = String(fm.url || '');
      const slug = url.replace(/^\/anbieter\//, '').replace(/\/$/, '').trim();

      const website = typeof prov.website === 'string' ? prov.website.trim() : '';
      if (!slug || !/^https?:\/\//i.test(website)) return null;

      const ov = overrides[slug];
      const dest = ov?.url ?? website;
      const status = ov?.status ?? defaultStatus;
      return { params: { slug }, props: { dest, status } };
    })
    .filter(Boolean);
}

export const GET: APIRoute = async ({ params, props, request }) => {
  const slug = String(params.slug || '');
  const dest = (props as any)?.dest as string | undefined;
  const status = ((props as any)?.status === 301) ? 301 : defaultStatus;

  // If this route is hit for a non-prebuilt slug, return 404.
  if (!dest || !/^https?:\/\//i.test(dest)) {
    return new Response('Not found', { status: 404 });
  }

  // Some very old/locked-down clients do not follow redirects from certain contexts.
  // For them we return a tiny HTML fallback when the caller explicitly accepts HTML.
  const accept = (request.headers.get('accept') ?? '').toLowerCase();
  const wantsHtml = accept.includes('text/html');

  const commonHeaders: Record<string, string> = {
    // Prevent indexing of redirect endpoints.
    'X-Robots-Tag': 'noindex, nofollow',
    // Basic hardening
    'Cache-Control': 'no-store',
    // Privacy hardening
    'Referrer-Policy': 'no-referrer',
    'X-Content-Type-Options': 'nosniff',
  };

  if (wantsHtml) {
    const body = `<!doctype html>
<html lang="de">
  <head>
    <meta charset="utf-8" />
    <meta name="robots" content="noindex,nofollow" />
    <meta name="referrer" content="no-referrer" />
    <meta http-equiv="refresh" content="0; url=${dest.replace(/"/g, '&quot;')}" />
    <title>Weiterleitung…</title>
  </head>
  <body>
    <p>Weiterleitung… Wenn nichts passiert: <a href="${dest.replace(/"/g, '&quot;')}">hier klicken</a>.</p>
  </body>
</html>`;

    return new Response(body, {
      status: 200,
      headers: {
        ...commonHeaders,
        'Content-Type': 'text/html; charset=utf-8',
      },
    });
  }

  // Default: redirect.
  // Use a temporary redirect by default to keep flexibility for affiliate program changes.
  // You can override per slug via src/data/go-overrides.json.
  return new Response(null, {
    status,
    headers: {
      ...commonHeaders,
      Location: dest,
    },
  });
};
