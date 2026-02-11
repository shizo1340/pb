import site from '../data/site.json';
import eeat from '../data/eeat.json';

export type JsonLd = Record<string, any> | Array<Record<string, any>>;

const baseUrlNoSlash = site.baseUrl.endsWith('/') ? site.baseUrl.slice(0, -1) : site.baseUrl;

export function absUrl(pathOrUrl: string): string {
  if (!pathOrUrl) return baseUrlNoSlash + '/';
  if (pathOrUrl.startsWith('http://') || pathOrUrl.startsWith('https://')) return pathOrUrl;
  const p = pathOrUrl.startsWith('/') ? pathOrUrl : `/${pathOrUrl}`;
  return baseUrlNoSlash + p;
}

export function breadcrumbJsonLd(crumbs: Array<{ label: string; href: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: c.label,
      item: absUrl(c.href),
    })),
  };
}

export function pageJsonLd(opts: {
  schemaType: 'WebPage' | 'CollectionPage' | 'Article';
  title: string;
  description?: string;
  url: string;
  updated?: string | null;
  ogImage?: string;
  /** Optional: link a main entity (e.g. an ItemList) to a CollectionPage. */
  mainEntityId?: string;
  /** Optional: topic/about text for CollectionPage. */
  about?: string;
}) {
  const {
    schemaType,
    title,
    description,
    url,
    updated,
    ogImage,
    mainEntityId,
    about,
  } = opts;

  const out: Record<string, any> = {
    '@context': 'https://schema.org',
    '@type': schemaType,
    headline: title,
    name: title,
    description: description || site.defaultDescription,
    url: absUrl(url),
    inLanguage: site.language,
    publisher: {
      ...(eeat.publisher as any),
      name: (eeat.publisher as any)?.name || site.siteName,
      url: (eeat.publisher as any)?.url || absUrl('/'),
    },
    author: eeat.publisher ? { ...(eeat.publisher as any) } : {
      '@type': 'Organization',
      name: site.siteName,
      url: absUrl('/'),
    },
    isPartOf: {
      '@type': 'WebSite',
      name: site.siteName,
      url: absUrl('/'),
    },
  };

  // For Article pages, add a neutral reviewer signal. This is not a "rating", just editorial responsibility.
  if (schemaType === 'Article' && eeat.reviewer) {
    out.reviewedBy = { ...(eeat.reviewer as any) };
  }

  // We only store YYYY-MM-DD in frontmatter.
  if (updated && /^\d{4}-\d{2}-\d{2}$/.test(String(updated))) {
    out.dateModified = `${updated}T00:00:00Z`;
    // If you do not track an explicit publish date, using the same date is still better
    // than omitting it entirely for many crawlers.
    out.datePublished = `${updated}T00:00:00Z`;
  }

  if (ogImage) {
    out.image = [absUrl(ogImage)];
  }

  // mainEntityOfPage is useful for Article/CollectionPage alike.
  if (schemaType === 'Article' || schemaType === 'CollectionPage') {
    out.mainEntityOfPage = {
      '@type': 'WebPage',
      '@id': absUrl(url),
    };
  }

  // CollectionPage: allow linking an ItemList/Thing as mainEntity.
  if (schemaType === 'CollectionPage') {
    if (about) out.about = about;
    if (mainEntityId) {
      out.mainEntity = { '@id': absUrl(mainEntityId) };
    }
  }

  return out;
}

/**
 * ItemList JSON-LD for directories/shortlists.
 * Use profile URLs (not affiliate/go links) for maximum clarity.
 */
export function itemListJsonLd(opts: {
  name: string;
  url: string;
  items: Array<{ name: string; url: string }>;
  description?: string;
  about?: string;
  isPartOf?: { name: string; url: string };
}) {
  const { name, url, items, description, about, isPartOf } = opts;

  const out: Record<string, any> = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    '@id': absUrl(url) + '#itemlist',
    name,
    url: absUrl(url),
    description: description || undefined,
    itemListOrder: 'https://schema.org/ItemListOrderAscending',
    numberOfItems: items.length,
    about: about || undefined,
    isPartOf: isPartOf
      ? {
          '@type': 'WebSite',
          name: isPartOf.name,
          url: absUrl(isPartOf.url),
        }
      : {
          '@type': 'WebSite',
          name: site.siteName,
          url: absUrl('/'),
        },
    itemListElement: items.map((it, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: it.name,
      item: absUrl(it.url),
    })),
  };

  // Remove undefined keys to keep JSON-LD compact.
  for (const k of Object.keys(out)) {
    if (out[k] === undefined) delete out[k];
  }
  return out;
}
