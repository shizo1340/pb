(() => {
const root = document.getElementById('explorer');
      if (!root) return;
      const form = document.getElementById('explorerForm');
      const list = document.getElementById('explorerList');
      const items = Array.from(list?.querySelectorAll('.exp-item') ?? []);
      const countText = document.getElementById('countText');
      const q = document.getElementById('q');
      const chapter = document.getElementById('chapter');
      const device = document.getElementById('device');

      const norm = (s) => String(s || '').trim().toLowerCase();

      const readParams = () => {
        const p = new URLSearchParams(location.search);
        if (q) q.value = p.get('q') ?? '';
        if (chapter) chapter.value = p.get('chapter') ?? '';
        if (device) device.value = p.get('device') ?? '';
      };

      const writeParams = () => {
        const p = new URLSearchParams();
        const setIf = (k, v) => { if (v) p.set(k, v); };
        setIf('q', q?.value?.trim());
        setIf('chapter', chapter?.value);
        setIf('device', device?.value);
        const next = p.toString() ? `?${p.toString()}` : '';
        history.replaceState({}, '', `${location.pathname}${next}`);
      };

      const apply = () => {
        const qv = norm(q?.value);
        const cv = norm(chapter?.value);
        const dv = norm(device?.value);

        let visible = 0;
        for (const el of items) {
          const text = norm(el.textContent);
          const okC = !cv || norm(el.dataset.chapter) === cv;
          const okD = !dv || norm(el.dataset.device) === dv;
          const okQ = !qv || text.includes(qv);
          // Filters: Suche + Thema + Gerät
          const ok = okQ && okC && okD;
          el.classList.toggle('is-hidden', !ok);
          if (ok) visible++;
        }
        if (countText) countText.textContent = `${visible} Treffer`;
        writeParams();
      };

      readParams();
      apply();

      form?.addEventListener('input', () => apply());
      form?.addEventListener('change', () => apply());


      // Keyboard UX:
      //  - "Esc" clears filters (reset)
      //  - "Enter" (outside inputs) opens the first visible result
      const isTypingTarget = (el) => {
        if (!el) return false;
        const tag = String(el.tagName || '').toLowerCase();
        return tag === 'input' || tag === 'textarea' || tag === 'select' || el.isContentEditable;
      };

      document.addEventListener('keydown', (e) => {
        if (e.defaultPrevented) return;

        if (e.key === 'Escape') {
          e.preventDefault();
          form?.reset();
          setTimeout(() => apply(), 0);
          return;
        }

        if (e.key === 'Enter' && !isTypingTarget(document.activeElement)) {
          const first = items.find((el) => !el.classList.contains('is-hidden'));
          const link = first?.querySelector('a[href]');
          if (link) {
            e.preventDefault();
            link.click();
          }
        }
      });

      form?.addEventListener('reset', () => {
        // reset event fires before values are cleared
        setTimeout(() => {
          if (countText) countText.textContent = `${items.length} Einträge`;
          apply();
        }, 0);
      });
})();
