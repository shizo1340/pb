(() => {
  // Keyboard shortcut: focus search with "/".
  // - Does nothing while typing in inputs/textarea/select/contenteditable.
  // - Works on desktop + mobile (header search is visible; drawer search is fallback).

  const isTypingTarget = (el) => {
    if (!el) return false;
    const tag = String(el.tagName || '').toLowerCase();
    if (tag === 'input' || tag === 'textarea' || tag === 'select') return true;
    if (el.isContentEditable) return true;
    return false;
  };

  const isVisible = (el) => {
    if (!el) return false;
    if (el.getClientRects?.().length === 0) return false;
    const s = window.getComputedStyle(el);
    return s && s.display !== 'none' && s.visibility !== 'hidden' && s.opacity !== '0';
  };

  const pickSearch = () => {
    const header = document.getElementById('siteSearch');
    if (isVisible(header)) return header;

    const drawer = document.getElementById('siteSearchMobile');
    if (isVisible(drawer)) return drawer;

    const page = document.getElementById('siteSearchPage');
    if (isVisible(page)) return page;

    return null;
  };

  document.addEventListener('keydown', (e) => {
    // Allow Shift (some keyboard layouts require it for "/"), but block other modifiers.
    if (e.key !== '/' || e.ctrlKey || e.metaKey || e.altKey) return;
    if (isTypingTarget(e.target) || isTypingTarget(document.activeElement)) return;

    const input = pickSearch();
    if (!input) return;

    e.preventDefault();
    input.focus();
    try { input.select?.(); } catch {}
  }, { capture: true });
})();
