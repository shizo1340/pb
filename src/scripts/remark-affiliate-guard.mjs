// Lightweight AST walk to avoid adding extra dependencies.
const walk = (node, fn) => {
  if (!node || typeof node !== 'object') return;
  fn(node);
  const kids = node.children;
  if (Array.isArray(kids)) {
    for (const c of kids) walk(c, fn);
  }
};

// Common affiliate markers (conservative). Add more as you see them.
const AFFILIATE_PATTERNS = [
  /[?&](ref|refid|ref_id|affiliate|aff|affid|aff_id|tag|utm_campaign)=/i,
  /\b(awin1|impact\.com|partnerize|tradetracker|affili)\b/i,
];

const isExternal = (href) => /^https?:\/\//i.test(String(href || ''));

const isAffiliateLike = (href) => {
  const h = String(href || '');
  if (!h) return false;
  return AFFILIATE_PATTERNS.some((re) => re.test(h));
};

const normPath = (p) => {
  if (!p) return '';
  return String(p).replace(/\\/g, '/');
};

const fileToRouteHint = (filePath) => {
  // Best-effort mapping: /src/pages/xxx.md -> /xxx/
  const p = normPath(filePath);
  const i = p.lastIndexOf('/src/pages/');
  if (i === -1) return '';
  const rel = p.slice(i + '/src/pages'.length);
  // rel includes leading '/'
  const noExt = rel.replace(/\.(md|mdx)$/i, '');
  // /index -> /
  return noExt.endsWith('/index') ? `${noExt.slice(0, -'/index'.length) || '/'}/` : `${noExt}/`;
};

/**
 * Fail the build if markdown contains affiliate patterns or `/go/` links outside
 * of `/anbieter/` pages.
 */
export default function remarkAffiliateGuard() {
  return (tree, file) => {
    const filePath = file?.path || '';
    const routeHint = fileToRouteHint(filePath);
    const isAnbieterPage = routeHint.startsWith('/anbieter/');

    const errors = [];

    walk(tree, (node) => {
      if (node.type !== 'link') return;
      const href = String(node?.url || '');
      if (!href) return;

      // Rule 1: No obvious affiliate URLs anywhere in markdown.
      if (isAffiliateLike(href)) {
        errors.push(`Affiliate-like URL found: ${href}`);
      }

      // Rule 2: `/go/…` links only allowed inside `/anbieter/`.
      // Allow both absolute and relative forms.
      const isGo = href.startsWith('/go/') || href.includes('://') && /\/go\//.test(href);
      if (isGo && !isAnbieterPage) {
        errors.push(`Disallowed /go/ link outside /anbieter/: ${href}`);
      }

      // Rule 3: In `/anbieter/`, encourage using `/go/` for outbound CTAs.
      // We don't hard-fail on external links, because provider pages may cite sources.
      // But we can nudge by warning on obvious provider homepages that look like CTAs.
      // (No warnings emitted here to keep builds clean.)
      void isExternal;
    });

    if (errors.length > 0) {
      const where = routeHint || filePath || '(unknown file)';
      const msg = `\n[affiliate-guard] ${where}\n` + errors.map((e) => `- ${e}`).join('\n') + '\n';
      throw new Error(msg);
    }
  };
}
