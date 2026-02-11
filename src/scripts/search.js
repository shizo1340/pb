(() => {
  // Targets:
  // - Header: #siteSearch / #searchResults (overlay)
  // - Drawer: #siteSearchMobile / #searchResultsMobile (overlay)
  // - Search page: #siteSearchPage / #searchResultsPage (page)
  const targets = [
    { inputId: 'siteSearch', boxId: 'searchResults', scopeId: 'siteSearchScope', mode: 'overlay', limit: 7 },
    { inputId: 'siteSearchMobile', boxId: 'searchResultsMobile', scopeId: 'siteSearchScopeMobile', mode: 'overlay', limit: 7 },
    { inputId: 'siteSearchPage', boxId: 'searchResultsPage', scopeId: 'siteSearchScopePage', mode: 'page', limit: 50 },
  ];

  // High-level buckets for filtering. We infer the bucket from the URL.
    const kindLabel = {
    themen: 'Themen',
    start: 'Start',
    anbieter: 'Anbieter',
    szenarien: 'Szenarien',
    wissen: 'Wissen',
    tests: 'Tests',
    privacy: 'Privacy-Check',
    verzeichnis: 'Verzeichnis',
  };

  const allowedScopes = new Set(['all', ...Object.keys(kindLabel)]);

    const kindFromUrl = (url) => {
    const u = String(url || '/');
    if (u === '/' || u.startsWith('/start/') || u.startsWith('/wizard/')) return 'start';
    if (u.startsWith('/privacy-check/')) return 'privacy';
    if (u.startsWith('/tests/')) return 'tests';
    if (u.startsWith('/anbieter/')) return 'anbieter';
    if (u.startsWith('/verzeichnis/')) return 'verzeichnis';
    if (u.startsWith('/szenarien/')) return 'szenarien';
    if (u.startsWith('/wissen/')) return 'wissen';
// Alte/umgezogene Bereiche: weiterhin auffindbar halten
    if (u.startsWith('/ueber/')) return 'start';
    // Standard: Themen
    return 'themen';
  };

  const normScope = (s) => {
    const v = String(s || 'all').toLowerCase();
    return allowedScopes.has(v) ? v : 'all';
  };

  let idx = null;
  let idxPromise = null;

  async function loadIndex() {
    if (idx) return idx;
    if (idxPromise) return idxPromise;

    idxPromise = (async () => {
      const res = await fetch('/search-index.json');
      const data = await res.json();

      // status filtering: show only finished pages
      idx = (data || [])
        .filter((it) => String(it.status || 'todo').toLowerCase() === 'done')
        .map((it) => ({
          ...it,
          kind: kindFromUrl(it.url),
        }));

      return idx;
    })();

    return idxPromise;
  }

  function esc(s) {
    return (s || '').replace(/[&<>\"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  }

  function filterByScope(list, scope) {
    const s = normScope(scope);
    if (s === 'all') return list;
    return (list || []).filter((it) => String(it.kind || '').toLowerCase() === s);
  }

  function scoreSearch(q, list) {
    q = (q || '').trim().toLowerCase();
    if (!q || q.length < 2) return [];
    if (!list || !list.length) return [];

    const parts = q.split(/\s+/).filter(Boolean);

    // Simple scoring: title matches matter most, then description/keywords/url.
    return list
      .map((it) => {
        const title = String(it.title || '').toLowerCase();
        const desc = String(it.description || '').toLowerCase();
        const keys = String(it.keywords || '').toLowerCase();
        const url = String(it.url || '').toLowerCase();

        const hay = `${title} ${desc} ${keys} ${url}`;

        let score = 0;
        for (const p of parts) {
          if (!p) continue;
          if (hay.includes(p)) score += 1;
          if (title.includes(p)) score += 2;
          if (url.includes(p)) score += 1;
        }

        return { it, score };
      })
      .filter((x) => x.score > 0)
      .sort((a, b) => b.score - a.score)
      .map((x) => x.it);
  }

  function render(box, items, opts, q, scope) {
    const mode = opts.mode || 'overlay';
    const limit = Number(opts.limit || 7);

    box.setAttribute('role', 'listbox');

    const query = (q || '').trim();
    const s = normScope(scope);
    const scopeName = s === 'all' ? 'Alles' : (kindLabel[s] || 'Alles');

    if (!query || query.length < 2) {
      if (mode === 'page') {
        box.classList.add('open');
        box.innerHTML = '<div class="search-empty">Tippe mindestens 2 Zeichen.</div>';
        return { state: 'minchars', query, shown: 0, total: 0, scopeName };
      }
      box.classList.remove('open');
      box.innerHTML = '';
      return { state: 'closed', query, shown: 0, total: 0, scopeName };
    }

    if (!items.length) {
      const msg = `<div class="search-empty">Keine Treffer in <strong>${esc(scopeName)}</strong> für <strong>${esc(query)}</strong>.<br><span class="muted">Enter öffnet die Suchseite.</span></div>`;
      box.classList.add('open');
      box.innerHTML = msg;
      return { state: 'noresults', query, shown: 0, total: 0, scopeName };
    }

    box.classList.add('open');

    const slice = items.slice(0, limit);
    box.innerHTML = slice
      .map((it, i) => {
        const k = String(it.kind || 'kapitel');
        const kName = kindLabel[k] || 'Kapitel';

        const metaParts = [];
        metaParts.push(kName);

        const chap = String(it.chapter || '').trim();
        if (chap && chap.toLowerCase() !== kName.toLowerCase()) metaParts.push(chap);

        const lvl = String(it.level || '').trim();
        if (lvl) metaParts.push(lvl);

        const meta = metaParts.join(' • ');
        const id = `${box.id}-opt-${i}`;

        return `<a id="${id}" role="option" aria-selected="false" data-idx="${i}" href="${esc(it.url)}">
          <div class="t">${esc(it.title)}</div>
          <div class="d">${esc(it.description || '')}</div>
          <div class="meta">${esc(meta)}</div>
        </a>`;
      })
      .join('');

    return { state: 'results', query, shown: slice.length, total: items.length, scopeName };
  }

  // Keep select scopes in sync (header <-> drawer <-> search page)
  const scopeSelects = [];

  function getInitialScope() {
    const params = new URLSearchParams(window.location.search);
    const fromUrl = params.get('t');
    if (fromUrl) return normScope(fromUrl);

    return 'all';
  }

  function setScopeEverywhere(scope) {
    const s = normScope(scope);

    for (const sel of scopeSelects) {
      if (!sel) continue;
      if (sel.value !== s) sel.value = s;
    }
  }

  function setup(opts) {
    const input = document.getElementById(opts.inputId);
    const box = document.getElementById(opts.boxId);
    const scopeEl = opts.scopeId ? document.getElementById(opts.scopeId) : null;

    if (!input || !box) return;

    if (scopeEl) {
      if (!scopeSelects.includes(scopeEl)) scopeSelects.push(scopeEl);
      scopeEl.value = getInitialScope();
    }

    // ARIA glue for autocomplete/listbox.
    input.setAttribute('role', 'combobox');
    box.setAttribute('role', 'listbox');
    input.setAttribute('aria-controls', box.id);
    input.setAttribute('aria-expanded', 'false');
    input.setAttribute('aria-autocomplete', 'list');
    input.setAttribute('aria-haspopup', 'listbox');

    // Announcer (screen reader status)
    const announcer = document.createElement('div');
    announcer.className = 'sr-only';
    announcer.setAttribute('role', 'status');
    announcer.setAttribute('aria-live', 'polite');
    announcer.setAttribute('aria-atomic', 'true');
    announcer.id = `${input.id}-status`;
    input.setAttribute('aria-describedby', announcer.id);
    input.insertAdjacentElement('afterend', announcer);

    const announce = (msg) => {
      if (!msg) return;
      if (announcer.textContent === msg) return;
      announcer.textContent = msg;
    };

    const updateExpanded = () => {
      input.setAttribute('aria-expanded', box.classList.contains('open') ? 'true' : 'false');
    };

    let t;
    let active = -1;

    const getLinks = () => Array.from(box.querySelectorAll('a[data-idx]'));

    const setActive = (i) => {
      const links = getLinks();
      links.forEach((a) => {
        const isAct = Number(a.getAttribute('data-idx')) === i;
        a.classList.toggle('kbd-active', isAct);
        a.setAttribute('aria-selected', isAct ? 'true' : 'false');
      });
      active = i;
      if (i >= 0) {
        const el = links.find((a) => Number(a.getAttribute('data-idx')) === i);
        if (el) {
          input.setAttribute('aria-activedescendant', el.id);
          try { el.scrollIntoView({ block: 'nearest', behavior: 'auto' }); } catch {}
        }
      } else {
        input.removeAttribute('aria-activedescendant');
      }
    };

    const closeOverlay = () => {
      if (opts.mode !== 'overlay') return;
      box.classList.remove('open');
      setActive(-1);
      updateExpanded();
    };

    const run = async () => {
      const q = (input.value || '').trim();
      const scope = scopeEl ? scopeEl.value : getInitialScope();

      const list = await loadIndex();
      const filtered = filterByScope(list, scope);
      const items = scoreSearch(q, filtered);

      const res = render(box, items, opts, q, scope);
      setActive(-1);
      updateExpanded();

      if (res.state === 'minchars') {
        announce('Tippe mindestens 2 Zeichen, um zu suchen.');
      } else if (res.state === 'noresults') {
        announce(`Keine Treffer in ${res.scopeName} für „${res.query}“.`);
      } else if (res.state === 'results') {
        announce(`${res.total} Treffer in ${res.scopeName}. Pfeiltasten: wählen. Enter: öffnen.`);
      }
    };

    // Prefetch the index on focus so the first real query feels instant.
    input.addEventListener('focus', () => {
      loadIndex().catch(() => {});
      const q = (input.value || '').trim();
      if (q.length >= 2) run();
    });

    // Prefill from ?q= and ?t=
    const params = new URLSearchParams(window.location.search);
    const q0 = params.get('q');
    const t0 = params.get('t');

    if (t0 && scopeEl) {
      const s0 = normScope(t0);
      scopeEl.value = s0;
      setScopeEverywhere(s0);
    }

    if (q0) {
      input.value = q0;
      run();
    } else if (opts.mode === 'page') {
      // show helper text on the dedicated search page
      render(box, [], opts, '', scopeEl ? scopeEl.value : getInitialScope());
      updateExpanded();
    }

    input.addEventListener('input', async () => {
      clearTimeout(t);
      t = setTimeout(() => run(), 80);
    });

    if (scopeEl) {
      scopeEl.addEventListener('change', () => {
        setScopeEverywhere(scopeEl.value);
        run();
      });
    }

    // Keyboard UX: Arrow keys to navigate results, Enter to open.
    input.addEventListener('keydown', (e) => {
      const links = getLinks();
      const hasResults = links.length > 0;

      if (e.key === 'Escape') {
        closeOverlay();
        return;
      }

      if (e.key === 'ArrowDown') {
        if (!hasResults) return;
        e.preventDefault();
        const next = Math.min(links.length - 1, active + 1);
        setActive(next);
        return;
      }

      if (e.key === 'ArrowUp') {
        if (!hasResults) return;
        e.preventDefault();
        const prev = Math.max(0, active - 1);
        setActive(prev);
        return;
      }

      if (e.key === 'Enter') {
        const query = (input.value || '').trim();
        const scope = scopeEl ? scopeEl.value : getInitialScope();

        // If there are results, Enter opens the active one or (default) the first hit.
        if (hasResults) {
          const target =
            active >= 0
              ? links.find((a) => Number(a.getAttribute('data-idx')) === active)
              : links[0];

          if (target) {
            e.preventDefault();
            window.location.href = target.getAttribute('href');
          }
          return;
        }

        // If there are no rendered results but the query is valid, go to the dedicated search page.
        if (query.length >= 2) {
          e.preventDefault();
          const t = normScope(scope);
          const tParam = t && t !== 'all' ? `&t=${encodeURIComponent(t)}` : '';
          window.location.href = `/suche/?q=${encodeURIComponent(query)}${tParam}`;
        }
      }
    });

    // Overlay-only: click outside closes
    if (opts.mode === 'overlay') {
      document.addEventListener('click', (e) => {
        const el = e.target;
        if (!box.contains(el) && el !== input) closeOverlay();
      });

      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeOverlay();
      });
    }
  }

  targets.forEach(setup);
})();
