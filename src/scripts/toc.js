(() => {
        const toc = document.querySelector('[data-toc]');
        if (!toc) return;

        // Responsive behaviour: single TOC in DOM, sidebar on desktop, collapsible on mobile.
        const mq = window.matchMedia('(max-width: 900px)');
        const syncOpen = () => {
          if (mq.matches) toc.removeAttribute('open');
          else toc.setAttribute('open', '');
        };
        syncOpen();
        if (mq.addEventListener) mq.addEventListener('change', syncOpen);
        else mq.addListener(syncOpen);

        const links = Array.from(toc.querySelectorAll('a[data-toc-link]'));
        const ids = links.map(a => (a.getAttribute('href') || '').slice(1)).filter(Boolean);
        const headingEls = ids.map(id => document.getElementById(id)).filter(Boolean);
        if (!headingEls.length) return;

        const setActive = (id) => {
          let activeEl = null;
          links.forEach(a => {
            const isActive = (a.getAttribute('href') || '') === `#${id}`;
            a.classList.toggle('active', isActive);
            if (isActive) activeEl = a;
          });
          // NOTE: We intentionally do *not* scroll the TOC itself (no scrollIntoView).
          // On some browsers this can "fight" the user's scroll (especially when many
          // headings are present, like the FAQ glossary) and feel like stutter/jumps.
        };

        let current = headingEls[0].id;

        const obs = new IntersectionObserver((entries) => {
          // Prefer the heading closest to top that is intersecting
          const visible = entries
            .filter(e => e.isIntersecting)
            .sort((a,b)=>a.boundingClientRect.top-b.boundingClientRect.top);

          if (visible.length){
            const id = visible[0].target.id;
            if (id && id !== current){
              current = id;
              setActive(id);
            }
          }
        }, { rootMargin: '-20% 0px -70% 0px', threshold: [0, 1] });

        headingEls.forEach(h => obs.observe(h));
        setActive(current);

        // For TOC clicks we deliberately rely on the browser's native anchor scrolling.
        // This is the most robust behaviour across browsers and works well with our
        // CSS scroll-margin-top on headings (sticky header offset) without causing jank.
      })();
