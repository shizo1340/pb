// rehype plugin: mark obvious affiliate links as sponsored.
// No external deps (simple DFS over HAST).

const AFF_PATTERNS = [
  /[?&](ref|refid|referrer|via|aff|affiliate|partner|partnerid|utm_partner)=/i,
  /[?&]tag=[^&]+/i, // Amazon
  /awin1\.com|awin\./i,
  /impact\.com|impactradius/i,
  /partnerize/i,
];

function isAffiliateUrl(href) {
  if (!href || typeof href !== 'string') return false;

  // Canonical rule for this site:
  // Outgoing affiliate links should route through /go/<slug>/.
  if (href.startsWith('/go/')) return true;
  if (href.startsWith('https://privacybasics.de/go/')) return true;

  // Safety net: if a direct external affiliate URL slips into content, still mark it.
  if (!href.startsWith('http')) return false;
  return AFF_PATTERNS.some((re) => re.test(href));
}

function addRel(node, relValue) {
  node.properties ??= {};
  const current = String(node.properties.rel || '').trim();
  const set = new Set(current.split(/\s+/).filter(Boolean));
  for (const token of relValue.split(/\s+/)) set.add(token);
  node.properties.rel = Array.from(set).join(' ');
}

function visit(node, fn) {
  fn(node);
  const kids = node && node.children;
  if (Array.isArray(kids)) {
    for (const k of kids) visit(k, fn);
  }
}

export default function rehypeAffiliateRel() {
  return (tree) => {
    visit(tree, (node) => {
      if (node?.type !== 'element') return;
      if (node.tagName !== 'a') return;
      const href = node.properties?.href;
      if (!isAffiliateUrl(href)) return;

      addRel(node, 'sponsored noopener noreferrer');
      // For direct external affiliate URLs, open in a new tab.
      // For internal /go/ redirects, keep the normal navigation behaviour.
      if (typeof href === 'string' && href.startsWith('http')) {
        if (!node.properties.target) node.properties.target = '_blank';
      }
    });
  };
}
