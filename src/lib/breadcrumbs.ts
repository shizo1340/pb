// Minimal breadcrumb builder used for UI breadcrumbs.
// Intentionally contains NO structured data / schema generation.

export type BreadcrumbCrumb = { label: string; href: string };


const TITLE_CASE_SPECIAL: Record<string, string> = {
  "ios": "iOS",
  "ipados": "iPadOS",
  "macos": "macOS",
  "dns": "DNS",
  "doh": "DoH",
  "gpc": "GPC",
  "dnt": "DNT",
  "vpn": "VPN",
  "tor": "Tor",
  "2fa": "2FA",
  "csp": "CSP",
  "utm": "UTM",
  "ai": "KI",
};

function titleCase(seg: string): string {
  const raw = decodeURIComponent(seg).trim();
  const lower = raw.toLowerCase();

  if (TITLE_CASE_SPECIAL[lower]) return TITLE_CASE_SPECIAL[lower];

  // Keep very short segments uppercase (e.g. "id", "api")
  if (/^[a-z]{2,3}$/.test(lower)) return lower.toUpperCase();

  // Replace dashes/underscores with spaces and title-case each word
  const cleaned = raw.replace(/[-_]+/g, " ");
  return cleaned
    .split(" ")
    .filter(Boolean)
    .map((w) => (w.length ? w[0].toUpperCase() + w.slice(1) : w))
    .join(" ");
}

export function makeBreadcrumbs(opts: {
  pathname: string;
  title?: string;
  nav?: any;
  homeLabel?: string;
  homeHref?: string;
}): BreadcrumbCrumb[] {
  const {
    pathname,
    title,
    nav,
    homeLabel = 'Start',
    homeHref = '/',
  } = opts;

  const chapters = nav?.chapters ?? [];

  const chapterTitleBySlug = (() => {
    const m = new Map<string, string>();
    for (const col of chapters) {
      const sample = col?.items?.[0]?.href;
      if (!sample) continue;
      const seg = sample.split('/').filter(Boolean)[0];
      if (!seg) continue;
      m.set(seg, col.title);
    }
    return m;
  })();

  const labelByHref = (() => {
    const m = new Map<string, string>();
    for (const col of chapters) {
      for (const it of col.items ?? []) {
        if (it?.href && it?.label) m.set(it.href, it.label);
      }
    }
    return m;
  })();

  const path = pathname || '/';
  let segments = path.split('/').filter(Boolean);

  // If a route starts with /start/, treat that segment as the home crumb.
  let acc = '';
  const crumbs: BreadcrumbCrumb[] = [{ label: homeLabel, href: homeHref }];
  if (segments[0] === 'start') {
    acc = '/start';
    segments = segments.slice(1);
  }

  for (const seg of segments) {
    acc += `/${seg}`;
    const href = `${acc}/`;
    let label = titleCase(seg);

    // Prefer nicer chapter titles for the first segment
    if (acc === `/${seg}` && chapterTitleBySlug.has(seg)) {
      label = chapterTitleBySlug.get(seg) as string;
    }
    // Prefer explicit labels for known subpages
    if (labelByHref.has(href)) {
      label = labelByHref.get(href) as string;
    }

    crumbs.push({ label, href });
  }

  if (crumbs.length > 1 && title) {
    const leaf = title.includes(' / ') ? title.split(' / ').pop() : title;
    crumbs[crumbs.length - 1].label = String(leaf);
  }

  return crumbs;
}
