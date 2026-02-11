(() => {
  // ==========================================================
  // Mega menus (Themen / Wissen / Tests)
  // ==========================================================
  const megaDefs = [
    { key: 'themen', btnId: 'megaBtn', megaId: 'mega', closeId: 'closeMega', scrimId: 'megaScrim' },
    { key: 'wissen', btnId: 'megaWissenBtn', megaId: 'megaWissen', closeId: 'closeMegaWissen', scrimId: 'megaWissenScrim' },
    { key: 'tests', btnId: 'megaTestsBtn', megaId: 'megaTests', closeId: 'closeMegaTests', scrimId: 'megaTestsScrim' },
  ];

  const megaMenus = megaDefs
    .map((d) => ({
      ...d,
      btn: document.getElementById(d.btnId),
      mega: document.getElementById(d.megaId),
      closeBtn: document.getElementById(d.closeId),
      scrim: document.getElementById(d.scrimId),
      lastFocus: null,
      trap: null,
      hoverTimer: null,
    }))
    .filter((m) => m.btn && m.mega);

  const mobileBtn = document.getElementById('mobileBtn');
  const drawer = document.getElementById('drawer');
  const closeDrawer = document.getElementById('closeDrawer');

  // ---------------------------
  // Drawer accordion: keep only one chapter open
  // ---------------------------
  function setupDrawerAccordion() {
    if (!drawer) return;
    const items = Array.from(drawer.querySelectorAll('details.drawer-col'));
    if (!items.length) return;

    items.forEach((d) => {
      d.addEventListener('toggle', () => {
        if (!d.open) return;
        items.forEach((o) => {
          if (o !== d) o.open = false;
        });
      });
    });
  }

  // ---------------------------
  // Dialog helpers (focus trap)
  // ---------------------------
  const focusableSel =
    'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

  function getFocusable(root) {
    if (!root) return [];
    return Array.from(root.querySelectorAll(focusableSel)).filter((el) => {
      const style = window.getComputedStyle(el);
      return style.display !== 'none' && style.visibility !== 'hidden';
    });
  }

  function createTrap(container) {
    return function onKeydown(e) {
      if (e.key !== 'Tab') return;
      const items = getFocusable(container);
      if (!items.length) return;

      const first = items[0];
      const last = items[items.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
  }

  // Drawer dialog state
  let drawerLastFocus = null;
  let drawerTrap = null;

  function anyMegaOpen() {
    return megaMenus.some((m) => m.mega?.classList?.contains('open'));
  }

  function updateBodyMegaClass() {
    document.body.classList.toggle('mega-open', anyMegaOpen());
  }

  function closeMega(m, { restoreFocus = true } = {}) {
    if (!m?.mega) return;
    m.mega.classList.remove('open');
    m.mega.hidden = true;
    m.btn?.setAttribute('aria-expanded', 'false');

    if (m.trap) {
      document.removeEventListener('keydown', m.trap, true);
      m.trap = null;
    }

    if (restoreFocus) {
      (m.lastFocus || m.btn)?.focus?.();
    }
    m.lastFocus = null;

    updateBodyMegaClass();
  }

  function closeAllMega({ restoreFocus = false, except = null } = {}) {
    megaMenus.forEach((m) => {
      if (except && m === except) return;
      if (m.mega?.classList?.contains('open')) closeMega(m, { restoreFocus });
      else {
        // keep aria state sane even if it wasn't open
        m.btn?.setAttribute('aria-expanded', 'false');
        if (m.mega) m.mega.hidden = true;
      }
    });
    updateBodyMegaClass();
  }

  function openMega(m, { focus = false, focusTarget = 'first', setLastFocus = true, trap = undefined } = {}) {
    if (trap === undefined) trap = !!focus;
    if (!m?.mega) return;
    if (m.mega.classList.contains('open')) return;

    // Only one mega at a time.
    closeAllMega({ restoreFocus: false, except: m });

    m.mega.hidden = false;
    if (setLastFocus) m.lastFocus = document.activeElement;

    m.mega.classList.add('open');
    m.btn?.setAttribute('aria-expanded', 'true');
    updateBodyMegaClass();

    const container = m.mega.querySelector('.mega-inner') || m.mega;

    if (trap) {
      m.trap = createTrap(container);
      document.addEventListener('keydown', m.trap, true);
    }

    if (focus) {
      requestAnimationFrame(() => {
        const items = getFocusable(container);
        if (!items.length) return;
        const target =
          focusTarget === 'last' ? items[items.length - 1] :
          focusTarget === 'close' ? (m.closeBtn || items[0]) :
          items[0];
        target?.focus?.();
      });
    }
  }

  function toggleMega(m, opts = undefined) {
    const isOpen = m?.mega?.classList?.contains('open');
    if (isOpen) closeMega(m);
    else openMega(m, opts);
  }

// Click / tap
  megaMenus.forEach((m) => {
    m.btn?.addEventListener('click', (e) => {
      e.preventDefault();
      // Pointer activation should NOT move focus into the mega menu.
      toggleMega(m, { focus: false, trap: false });
    });

    // Keyboard: ArrowDown/ArrowUp opens and moves focus into the menu.
    m.btn?.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
        e.preventDefault();
        openMega(m, { focus: true, focusTarget: e.key === 'ArrowUp' ? 'last' : 'first', trap: true });
      } else if (e.key === 'Escape') {
        // If the user presses Escape while the button is focused, close menus but keep focus.
        if (anyMegaOpen()) closeAllMega({ restoreFocus: false });
      }
    });

    m.closeBtn?.addEventListener('click', () => closeMega(m));

    m.scrim?.addEventListener('click', () => closeMega(m));
  });

  // Hover open on desktop
  const isDesktop = () => window.matchMedia('(hover:hover) and (pointer:fine)').matches;

  function scheduleClose(m) {
    if (!isDesktop()) return;
    clearTimeout(m.hoverTimer);
    m.hoverTimer = setTimeout(() => closeMega(m, { restoreFocus: false }), 140);
  }

  function cancelClose(m) {
    clearTimeout(m.hoverTimer);
  }

  megaMenus.forEach((m) => {
    m.btn?.addEventListener('mouseenter', () => {
      if (!isDesktop()) return;
      cancelClose(m);
      openMega(m, { focus: false, setLastFocus: false, trap: false });
    });
    m.btn?.addEventListener('mouseleave', () => scheduleClose(m));

    m.mega?.addEventListener('mouseenter', () => {
      if (!isDesktop()) return;
      cancelClose(m);
    });
    m.mega?.addEventListener('mouseleave', () => scheduleClose(m));
  });

  // Click outside closes
  document.addEventListener('click', (e) => {
    const t = e.target;
    if (!megaMenus.length) return;
    const insideAny = megaMenus.some((m) => m.mega?.contains(t) || m.btn?.contains(t));
    if (!insideAny) closeAllMega({ restoreFocus: false });
  });

  // ---------------------------
  // Mobile drawer
  // ---------------------------
  function closeDrawerDialog({ restoreFocus = true } = {}) {
    if (!drawer) return;
    drawer.classList.remove('open');
    mobileBtn?.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('drawer-open');

    if (drawerTrap) {
      document.removeEventListener('keydown', drawerTrap, true);
      drawerTrap = null;
    }

    if (restoreFocus) {
      (drawerLastFocus || mobileBtn)?.focus?.();
    }
    drawerLastFocus = null;
  }

  function openDrawerDialog() {
    if (!drawer) return;
    drawerLastFocus = document.activeElement;

    // If the mega menu was open (e.g. after resizing), close it first.
    closeAllMega({ restoreFocus: false });

    drawer.classList.add('open');
    mobileBtn?.setAttribute('aria-expanded', 'true');
    document.body.classList.add('drawer-open');

    // Refresh recent links + accordion state whenever the drawer opens
    
    setupDrawerAccordion();


    const panel = drawer.querySelector('.panel') || drawer;
    drawerTrap = createTrap(panel);
    document.addEventListener('keydown', drawerTrap, true);

    // Focus: search input, otherwise close button
    const focusTarget = panel.querySelector('input[type="search"]') || closeDrawer || panel;
    requestAnimationFrame(() => focusTarget?.focus?.());
  }

  mobileBtn?.addEventListener('click', () => {
    if (drawer?.classList.contains('open')) closeDrawerDialog();
    else openDrawerDialog();
  });
  closeDrawer?.addEventListener('click', () => closeDrawerDialog());

  drawer?.addEventListener('click', (e) => {
    const t = e.target;
    if (t?.classList?.contains('backdrop')) closeDrawerDialog({ restoreFocus: false });
  });

  // Escape closes whichever dialog is open
  document.addEventListener('keydown', (e) => {
    if (e.key !== 'Escape') return;
    if (drawer?.classList.contains('open')) closeDrawerDialog();
    if (anyMegaOpen()) closeAllMega({ restoreFocus: true });
  });

  // Keep breakpoint consistent with CSS
  const mqMobile = window.matchMedia('(max-width: 900px)');
  const handleMq = () => {
    if (mqMobile.matches) closeAllMega({ restoreFocus: false });
  };
  handleMq();
  try {
    mqMobile.addEventListener('change', handleMq);
  } catch {
    mqMobile.addListener(handleMq);
  }

  // ---------------------------
  // Scroll progress indicator (CSP-safe: no inline styles)
  // ---------------------------
  const scrollProg = document.getElementById('scrollProgress');
  if (scrollProg) {
    const doc = document.documentElement;
    let maxScroll = 0;
    const computeMax = () => {
      maxScroll = doc.scrollHeight - doc.clientHeight;
    };
    const update = () => {
      const p = maxScroll > 0 ? (doc.scrollTop / maxScroll) : 0;
      // progress element expects 0..100
      scrollProg.value = Math.round(Math.max(0, Math.min(1, p)) * 100);
    };
    let ticking = false;
    const schedule = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        ticking = false;
        update();
      });
    };

    computeMax();
    update();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', () => { computeMax(); schedule(); });
  }

  // ---------------------------
  // Back to top
  // ---------------------------
  const back = document.getElementById('backToTop');
  if (back) {
    const btn = back.querySelector('button');
    const update = () => {
      const show = window.scrollY > 700;
      back.classList.toggle('show', show);
    };
    let backTicking = false;
    const scheduleUpdate = () => {
      if (backTicking) return;
      backTicking = true;
      requestAnimationFrame(() => {
        backTicking = false;
        update();
      });
    };
    update();
    window.addEventListener('scroll', scheduleUpdate, { passive: true });
    window.addEventListener('resize', scheduleUpdate);

    btn?.addEventListener('click', () => {
      try {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } catch {
        window.scrollTo(0, 0);
      }
    });
  }

  // ---------------------------
  // Markdown Task-List Checkboxes (enable + optional persistence)
  // ---------------------------
  // Astro/remark renders task-list checkboxes as <input disabled>. That makes them non-interactive.
  // We enable them inside article markdown content only (no impact on Wizard/Forms).
  const fnv1a = (str) => {
    let h = 0x811c9dc5;
    for (let i = 0; i < str.length; i++) {
      h ^= str.charCodeAt(i);
      h = (h + ((h << 1) + (h << 4) + (h << 7) + (h << 8) + (h << 24))) >>> 0;
    }
    return h.toString(16);
  };

  function enableMarkdownCheckboxes() {
    const root = document.querySelector('.article-body.markdown');
    if (!root) return;

    // Only touch task-list style checkboxes (usually within <li> from - [ ] markdown).
    const boxes = Array.from(root.querySelectorAll('li input[type="checkbox"][disabled]'));
    if (!boxes.length) return;

    boxes.forEach((box, idx) => {
      const li = box.closest('li');
      const label = (li?.textContent || '').replace(/\s+/g, ' ').trim().slice(0, 80);
      const id = `${idx}-${fnv1a(label || String(idx))}`;

      // Enable interaction
      box.removeAttribute('disabled');
      box.dataset.pbTask = id;
      box.classList.add('pb-md-task');
    });
  }

  // Defer slightly to ensure DOM is in place.
  function onReady() {
    
    
    setupDrawerAccordion();
    enableMarkdownCheckboxes();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', onReady, { once: true });
  } else {
    onReady();
  }
})();
