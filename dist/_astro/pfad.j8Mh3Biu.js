// Sticky "Pfad" switcher + auto-open/close <details> blocks.
//
// Behaviour:
// - URL param: ?pfad=A|B|C (also accepts ?path / ?level)
// - IMPORTANT: we do NOT auto-apply a stored/default Pfad on first visit.
//   The Pfad logic is intended to be triggered explicitly (e.g. via the Wizard
//   passing ?pfad=... into the target pages or via the on-page toggle).
//   Without an explicit trigger, all <details> remain in their default state.
// - On Pfad change we:
//   - open/close Pfad details in the ARTICLE only (never touches the mega menu)
//   - update the URL (B/C only) without reload
//   - optionally add the pfad param to internal links so navigation keeps the level

(function () {

  const normText = (s) => String(s || '').replace(/\s+/g, ' ').trim();

  const getScope = () => document.querySelector('.article-body') || document;

  const debounce = (fn, ms) => {
    let t = null;
    return (...args) => {
      clearTimeout(t);
      t = setTimeout(() => fn(...args), ms);
    };
  };

  const readUrlPfad = () => {
    const params = new URLSearchParams(window.location.search);
    const raw = (params.get('pfad') || params.get('path') || params.get('level') || '').toUpperCase().trim();
    return (raw === 'A' || raw === 'B' || raw === 'C') ? raw : '';
  };

  // NOTE: intentionally no localStorage persistence.

  const updateUrl = (pfad) => {
    try {
      const url = new URL(window.location.href);
      // Keep URLs clean: "A" is the default and doesn't need a param.
      if (pfad === 'A') url.searchParams.delete('pfad');
      else url.searchParams.set('pfad', pfad);
      history.replaceState({}, '', url.toString());
    } catch {}
  };

  const applyPfadToDetails = (pfad) => {
    // Restrict to the document content so we never influence the mega menu / UI accordions.
    const scope = getScope();
    const details = Array.from(scope.querySelectorAll('details'));

    // Mark on <html> for potential CSS hooks.
    document.documentElement.setAttribute('data-pfad', pfad);

    if (!details.length) return;

    // Pfad C: open all details inside the article body.
    if (pfad === 'C') {
      for (const d of details) d.open = true;
      return;
    }

    for (const d of details) {
      const s = d.querySelector('summary');
      if (!s) continue;
      const t = normText(s.textContent || '');

      const isB = /^(Pfad|Profil)\s*B\b/i.test(t);
      const isC = /^(Pfad|Profil)\s*C\b/i.test(t);
      if (!isB && !isC) continue;

      if (pfad === 'A') {
        d.open = false;
      } else if (pfad === 'B') {
        d.open = isB;
      }
    }
  };

  // --- UX helpers ----------------------------------------------------------
  // 1) Normalize "Pfad B/C" blocks into <details> even when authors used
  //    plain headings. This keeps the Pfad switcher effective sitewide.
  const normalizePfadHeadings = () => {
    const scope = getScope();
    const headings = Array.from(scope.querySelectorAll('h2,h3,h4,h5,h6'));
    for (const h of headings) {
      const txt = normText(h.textContent);
      if (!txt) continue;
      if (!/^(Pfad|Profil)\s*[BC]\b/i.test(txt)) continue;
      if (h.closest('details')) continue;

      const level = parseInt(h.tagName.replace('H', ''), 10) || 3;
      const details = document.createElement('details');
      details.className = 'pfad-details';
      if (h.id) details.id = h.id; // preserve anchors

      const summary = document.createElement('summary');
      summary.textContent = txt;
      details.appendChild(summary);

      // Move nodes until the next heading of same or higher level.
      let node = h.nextSibling;
      while (node) {
        const next = node.nextSibling;
        if (node.nodeType === 1 && /^H[1-6]$/.test(node.tagName)) {
          const nextLevel = parseInt(node.tagName.replace('H', ''), 10) || 6;
          if (nextLevel <= level) break;
        }
        details.appendChild(node);
        node = next;
      }

      h.replaceWith(details);
    }
  };

  // 2) Add a small jump bar ("Prüfen" / "Red Flags" / "Quellen") to improve scanability.
  const ensureId = (el, fallback) => {
    if (!el) return '';
    if (el.id) return el.id;
    let base = fallback;
    let id = base;
    let i = 2;
    while (document.getElementById(id)) {
      id = `${base}-${i++}`;
    }
    el.id = id;
    return id;
  };

  const findHeadingByText = (re) => {
    const scope = getScope();
    const hs = Array.from(scope.querySelectorAll('h2,h3,h4'));
    for (const h of hs) {
      const t = normText(h.textContent);
      if (re.test(t)) return h;
    }
    return null;
  };

  const insertQuickJump = () => {
    const scope = getScope();
    if (!scope || scope.querySelector('.quickjump')) return;

    const pruefen = findHeadingByText(/^Prüfen\b/i) || findHeadingByText(/^Prüf\-/i);
    const redflags = findHeadingByText(/^Red\s*Flags\b/i);
    const quellen = findHeadingByText(/^Quellen\b/i);

    const items = [];
    if (pruefen) items.push({ label: 'Prüfen', id: ensureId(pruefen, 'pruefen') });
    if (redflags) items.push({ label: 'Red Flags', id: ensureId(redflags, 'red-flags') });
    if (quellen) items.push({ label: 'Quellen', id: ensureId(quellen, 'quellen') });
    if (!items.length) return;

    const bar = document.createElement('div');
    bar.className = 'quickjump';
    bar.setAttribute('aria-label', 'Sprungmarken');

    for (const it of items) {
      const a = document.createElement('a');
      a.href = `#${it.id}`;
      a.textContent = it.label;
      bar.appendChild(a);
    }

    // Insert after the first paragraph if possible (keeps the intro intact).
    const firstP = scope.querySelector('p');
    if (firstP && firstP.parentNode) {
      firstP.insertAdjacentElement('afterend', bar);
    } else {
      scope.prepend(bar);
    }
  };

  // 3) Make "Startpunkt:" lines visually smaller/cleaner without rewriting content.
  const markStartpunktLines = () => {
    const scope = getScope();
    const ps = Array.from(scope.querySelectorAll('p'));
    for (const p of ps) {
      const t = normText(p.textContent);
      if (/^Startpunkt\s*:/i.test(t)) {
        p.classList.add('startpunkt');
      }
    }
  };

  // 4) Wrap bare tables into .table-wrap for horizontal scrolling on mobile.
  const wrapTables = () => {
    const scope = getScope();
    const tables = Array.from(scope.querySelectorAll('table'));
    for (const table of tables) {
      if (table.closest('.table-wrap')) continue;
      const wrap = document.createElement('div');
      wrap.className = 'table-wrap';
      table.parentNode.insertBefore(wrap, table);
      wrap.appendChild(table);
    }
  };

  // 5) Highlight "Was viele falsch machen" + "Red Flags" headings for faster scanning.
  const markScanHeadings = () => {
    const scope = getScope();
    const hs = Array.from(scope.querySelectorAll('h2,h3,h4'));
    for (const h of hs) {
      const t = normText(h.textContent);
      if (/^Was viele falsch machen\b/i.test(t)) h.classList.add('heading-mistakes');
      if (/^Red\s*Flags\b/i.test(t)) h.classList.add('heading-redflags');
    }
  };

  const rewriteInternalLinks = (pfad) => {
    // Only keep params for B/C. For A (default) we keep links clean.
    if (pfad === 'A') return;

    const anchors = Array.from(document.querySelectorAll('a[href]'));
    for (const a of anchors) {
      // Don't touch header/drawer/mega UI.
      if (a.closest('.site-header') || a.closest('.mega') || a.closest('.drawer')) continue;

      const href = a.getAttribute('href') || '';
      if (!href) continue;
      if (href.startsWith('#')) continue;
      if (href.startsWith('mailto:') || href.startsWith('tel:')) continue;
      if (href.startsWith('javascript:')) continue;

      // Only same-origin links.
      let url;
      try {
        url = new URL(href, window.location.origin);
      } catch {
        continue;
      }
      if (url.origin !== window.location.origin) continue;

      // Skip assets / feeds etc.
      if (url.pathname.startsWith('/assets/')) continue;

      // If the link already sets a pfad, don't override it.
      if (url.searchParams.has('pfad')) continue;

      url.searchParams.set('pfad', pfad);

      // Preserve relative URLs as they were.
      const next = url.pathname + (url.search ? url.search : '') + (url.hash ? url.hash : '');
      a.setAttribute('href', next);
    }
  };

  const syncToggleUi = (pfad) => {
    const toggle = document.querySelector('[data-pfad-toggle]');
    if (!toggle) return;
    const radios = Array.from(toggle.querySelectorAll('input[name="pfad"]'));
    for (const r of radios) {
      r.checked = (String(r.value).toUpperCase() === pfad);
    }
  };

  const initToggleUi = (pfadInitial) => {
    const toggle = document.querySelector('[data-pfad-toggle]');
    if (!toggle) return;

    syncToggleUi(pfadInitial);

    toggle.addEventListener('change', (ev) => {
      const t = ev.target;
      if (!(t instanceof HTMLInputElement)) return;
      if (t.name !== 'pfad') return;
      const pfad = String(t.value || '').toUpperCase();
      if (!(pfad === 'A' || pfad === 'B' || pfad === 'C')) return;

      updateUrl(pfad);
      applyPfadToDetails(pfad);
      syncToggleUi(pfad);
      rewriteInternalLinks(pfad);
    });
  };

  // --- Boot ---

  // Normalize content structure first so the Pfad switch works even on pages
  // where Pfad B/C blocks are headings instead of <details>.
  normalizePfadHeadings();

  // Scanability helpers (safe even without JS toggles).
  wrapTables();
  markStartpunktLines();
  markScanHeadings();
  insertQuickJump();

  const urlPfad = readUrlPfad();
  const pfad = urlPfad || 'A';

  // Only apply on load when explicitly requested via URL.
  // (This matches the Wizard behaviour: it passes ?pfad=A|B|C into target pages.)
  if (urlPfad) {
    applyPfadToDetails(pfad);
    rewriteInternalLinks(pfad);
  }

  initToggleUi(pfad);
})();
