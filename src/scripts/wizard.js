(function(){
'use strict';
      const $ = (sel, root=document) => root.querySelector(sel);
      const $$ = (sel, root=document) => Array.from(root.querySelectorAll(sel));

      const config = (()=>{const t=$("#wizConfig"); return t? JSON.parse(t.innerHTML||t.textContent||"{}"): {};})();
      const chapters = (()=>{const t=$("#wizNav"); return t? JSON.parse(t.innerHTML||t.textContent||"[]"): [];})();

      const excluded = new Set((config.excludeHrefs || []).map(String));

      // Build href -> meta
      const hrefMeta = new Map();
      for (const ch of chapters) {
        for (const it of (ch.items||[])) hrefMeta.set(it.href, { label: it.label, chapter: ch.title });
      }
      const labelFor = (href) => (hrefMeta.get(href)?.label || href);
      const chapterFor = (href) => (hrefMeta.get(href)?.chapter || "");

      const steps = $$(".wizard-step");
      const dots = $$("[data-stepdot]");
      const fill = $("#wizProg");
      const btnBack = $("#wizBack");
      const btnNext = $("#wizNext");
      const btnReset = $("#wizReset");

      const planEl = $("#wizPlan");
      const summaryEl = $("#wizSummary");
      const profiBox = $("#wizProfiBox");

      const pfadeExplain = $("#wizPfadeExplain");
      const progressText = $("#wizProgressText");
      const doneFill = $("#wizDoneProg");
      const btnMarkAll = $("#wizMarkAll");
      const btnClearChecks = $("#wizClearChecks");
      const btnPrint = $("#wizPrint");
      // Personalisierte Checkliste (ohne Speicherung):
      // Wir halten die Häkchen nur im Speicher dieser Seite (Session),
      // damit die Datenschutzerklärung "keine Cookies, kein LocalStorage" konsistent bleibt.
      const checklistMem = Object.create(null); // { planKey: { href: boolean } }

      const hashString = (str) => {
        // FNV-1a 32-bit
        let h = 0x811c9dc5;
        for (let i = 0; i < str.length; i++) {
          h ^= str.charCodeAt(i);
          h = Math.imul(h, 0x01000193) >>> 0;
        }
        return (h >>> 0).toString(16);
      };

      const getChecks = (planKey) => {
        return checklistMem[planKey] || {};
      };
      const setChecks = (planKey, checks) => {
        checklistMem[planKey] = checks || {};
      };

      let currentPlanKey = null;
      let currentPlanItems = [];


      let step = 0;
      let autoTimer = null;

      const setStep = (n) => {
        if (autoTimer) { clearTimeout(autoTimer); autoTimer = null; }
        step = Math.max(0, Math.min(4, n));
        steps.forEach((s, i) => s.hidden = i !== step);
        dots.forEach((d, i) => d.classList.toggle("active", i === step));
        const pct = (step / 4) * 100;
        if (fill) fill.value = Math.round(pct);
        btnBack.disabled = step === 0;
        btnNext.hidden = step === 4;
        btnReset.hidden = step !== 4;
        btnNext.textContent = (step === 3) ? "Plan erstellen" : "Weiter";
      };

      const getState = () => {
        const devices = $$('input[name="device"]:checked').map(x => x.value);
        const goals = $$('input[name="goal"]:checked').map(x => x.value);
        const risk = ($('input[name="risk"]:checked')||{}).value || "A";
        const time = ($('input[name="time"]:checked')||{}).value || "30-60m";
        return { devices, goals, risk, time };
      };

      const tierForRisk = (risk) => (risk === "C" ? 3 : (risk === "B" ? 2 : 1));
      const tierForHref = (href) => {
        const h = String(href || "");
        if (h.includes("profi")) return 3;
        return 1; // lightweight: Pfad A/B/C is primarily inside the pages
      };

      const timeCfg = (id) => (config.timeBudgets || []).find(t => t.id === id) || config.timeBudgets?.[1];

      const addUnique = (arr, href) => {
        if (!href) return;
        if (excluded.has(String(href))) return;
        if (!arr.includes(href)) arr.push(href);
      };

      const buildPlan = (state) => {
        const t = timeCfg(state.time);
        const cap = t?.cap ?? 7;
        const perGoal = t?.perGoal ?? 2;

        const plan = [];

        // 0) Baseline (immer sinnvoll)
        const base = (config.baseline && config.baseline[state.time]) ? config.baseline[state.time] : (config.baseline?.["30-60m"] || []);
        for (const href of base) addUnique(plan, href);

        // 1) Device bundles
        for (const d of (state.devices || [])) {
          const bundle = (config.deviceBundles || {})[d] || [];
          // keep it tight: add at most 2 per device for short budgets
          const limit = (state.time === "10m") ? 1 : (state.time === "30-60m" ? 2 : 3);
          for (const href of bundle.slice(0, limit)) addUnique(plan, href);
        }

        // 2) Goals -> chapters
        const selectedGoals = (state.goals && state.goals.length) ? state.goals : ["basics"];
        for (const gid of selectedGoals) {
          const g = (config.goals || []).find(x => x.id === gid);
          if (!g) continue;
          const boost = Number(g.takeBoost || 0);
          const take = Math.max(1, perGoal + boost);

          const before = plan.length;
          
          // 2a) Goal-specific picks (hrefs) -> add first (then fill with chapter items)
          const maxTier = tierForRisk(state.risk);
          const picks = (g.picks || []);
          if (Array.isArray(picks) && picks.length) {
            for (const href of picks) {
              const h = String(href || "");
              if (!h) continue;
              if (excluded.has(h)) continue;
              if (tierForHref(h) > maxTier) continue;
              addUnique(plan, h);
              if ((plan.length - before) >= take) break;
            }
          }

          for (const chapterTitle of (g.chapters || [])) {
            const remaining = take - (plan.length - before);
            if (remaining <= 0) break;

            const chapter = chapters.find(c => c.title === chapterTitle);
            if (!chapter) continue;

            const items = (chapter.items || [])
              .map(it => it.href)
              .filter(href => (tierForHref(href) <= maxTier) && !excluded.has(String(href)));

            for (const href of items) {
              addUnique(plan, href);
              if ((plan.length - before) >= take) break;
            }
          }
        }

        // 3) Hard cap for the selected time budget (keep earliest items)
        return plan.slice(0, cap);
      };

      // Add / update a single query param, preserving existing params + hashes.
      // Used to pass the selected Pfad (A/B/C) into the guide pages.
      const withParam = (href, key, value) => {
        try {
          const u = new URL(String(href), window.location.origin);
          u.searchParams.set(String(key), String(value));
          // Keep it site-relative
          return u.pathname + (u.search ? u.search : '') + (u.hash ? u.hash : '');
        } catch {
          // Fallback: append (naive)
          const sep = String(href).includes('?') ? '&' : '?';
          return `${href}${sep}${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
        }
      };

      const renderPlan = (state, plan) => {
        const riskLabel = (config.riskLevels || []).find(x => x.id === state.risk)?.label || ("Pfad " + state.risk);
        const timeLabel = (config.timeBudgets || []).find(x => x.id === state.time)?.label || state.time;
        const goalsLabel = (state.goals && state.goals.length)
          ? state.goals.map(id => (config.goals || []).find(g => g.id === id)?.label || id).join(" · ")
          : "Schnelle Wirkung";

        summaryEl.innerHTML = `
          <div class="callout subtle">
            <p><strong>Auswahl:</strong> ${goalsLabel}</p>
            <p class="muted small">Tiefe: ${riskLabel} · Zeit: ${timeLabel} · Geräte: ${(state.devices||[]).join(", ") || "—"}</p>
            <p class="muted small">Auf jeder Zielseite: folge hauptsächlich <strong>Pfad ${state.risk}</strong> (A/B/C).</p>
          </div>
        `;

        // Pfad-Erklärung aktualisieren
        if (pfadeExplain) {
          const s = pfadeExplain.querySelector('summary strong');
          if (s) s.textContent = `Du bist Pfad ${state.risk} – wofür ist das?`;
        }

        // PlanKey für die Checkliste (abhängig von Inhalt + Pfad)
        currentPlanKey = hashString(`${state.risk}|${state.time}|${(state.devices||[]).join(',')}|${(state.goals||[]).join(',')}|${plan.join('|')}`);
        currentPlanItems = plan.slice();

        planEl.innerHTML = "";
        for (const href of plan) {
          const hrefP = withParam(href, "pfad", state.risk);
          const meta = hrefMeta.get(href);
          const label = meta?.label || href;
          const chap = meta?.chapter || "";
          const li = document.createElement("li");
          li.className = "wizard-plan-item";
          li.innerHTML = `
            <div class="wizard-plan-row">
              <input class="wizard-done" type="checkbox" data-href="${href}" aria-label="Erledigt: ${label}" />
              <a class="wizard-plan-link" href="${hrefP}">
                <div class="wizard-plan-top">
                  <span class="wizard-plan-title">${label}</span>
                  ${chap ? `<span class="wizard-pill">${chap}</span>` : ""}
                </div>
                <div class="wizard-plan-sub muted small">Empfehlung: Pfad ${state.risk}</div>
              </a>
            </div>
          `;
          planEl.appendChild(li);
        }


        // Checkliste binden (lokal speichern)
        const checks = getChecks(currentPlanKey);
        const updateProgress = () => {
          const boxes = $$(".wizard-done", planEl);
          const total = boxes.length;
          const done = boxes.filter(b => b.checked).length;
          if (progressText) progressText.textContent = `${done}/${total} erledigt`;
          if (doneFill) doneFill.value = Math.round(total ? (done/total*100) : 0);
        };

        $$(".wizard-done", planEl).forEach((box) => {
          const href0 = box.getAttribute('data-href');
          box.checked = !!checks[href0];
          const li = box.closest('li');
          if (li) li.classList.toggle('is-done', box.checked);
          box.addEventListener('change', () => {
            const href1 = box.getAttribute('data-href');
            const next = getChecks(currentPlanKey);
            next[href1] = !!box.checked;
            setChecks(currentPlanKey, next);
            if (li) li.classList.toggle('is-done', box.checked);
            updateProgress();
          });
        });

        updateProgress();
        // Highlight recommended links in chapter lists
        const rec = new Set(plan);
        $$("[data-href]").forEach(a => {
          const base = a.getAttribute("data-href");
          a.classList.toggle("is-recommended", rec.has(base));
          // Keep Pfad selection when browsing inside the wizard.
          if (base) a.setAttribute("href", withParam(base, "pfad", state.risk));
        });

        // Also decorate Profi-Addon links so they open with the right Pfad.
        if (profiBox) {
          $$('a[href]', profiBox).forEach(a => {
            const h = a.getAttribute('href');
            if (!h) return;
            if (h.startsWith('#')) return;
            if (h.startsWith('http')) return;
            a.setAttribute('href', withParam(h, 'pfad', state.risk));
          });
        }

        // Profi addon box only for risk C
        if (profiBox) profiBox.open = (state.risk === "C");
      };

      btnBack.addEventListener("click", () => setStep(step - 1));
      btnNext.addEventListener("click", () => {
        if (step === 3) {
          setStep(4);
          const state = getState();
          const plan = buildPlan(state);
          renderPlan(state, plan);
          return;
        }
        setStep(step + 1);
      });

      btnReset.addEventListener("click", () => {
        $$('input[name="device"]').forEach(i => i.checked = false);
        $$('input[name="goal"]').forEach(i => i.checked = false);
        const rA = $('input[name="risk"][value="A"]'); if (rA) rA.checked = true;
        const tDef = $('input[name="time"][value="30-60m"]'); if (tDef) tDef.checked = true;
        setStep(0);
      });

      // --- Auto-Weiter: nach einer Auswahl automatisch zum nächsten Schritt.
      // Für Mehrfachauswahl (Geräte/Ziele) wird kurz gewartet, damit man mehrere Optionen anklicken kann.
      const scheduleAuto = (delayMs, fn) => {
        if (autoTimer) clearTimeout(autoTimer);
        autoTimer = setTimeout(() => {
          autoTimer = null;
          fn();
        }, delayMs);
      };

      const buildAndShowPlan = () => {
        setStep(4);
        const state = getState();
        const plan = buildPlan(state);
        renderPlan(state, plan);
      };

      const autoAdvance = (fromStep, delayMs, guard = () => true) => {
        scheduleAuto(delayMs, () => {
          if (step !== fromStep) return;
          if (!guard()) return;
          if (fromStep === 3) buildAndShowPlan();
          else setStep(fromStep + 1);
        });
      };

      // Step 1 (Geräte): nach kurzer Pause weiter, sobald mind. ein Gerät gewählt ist
      $$('input[name="device"]').forEach((el) => {
        el.addEventListener('change', () => {
          autoAdvance(0, 900, () => $$('input[name="device"]:checked').length > 0);
        });
      });

      // Step 2 (Ziele): nach kurzer Pause weiter, sobald mind. ein Ziel gewählt ist
      $$('input[name="goal"]').forEach((el) => {
        el.addEventListener('change', () => {
          autoAdvance(1, 900, () => $$('input[name="goal"]:checked').length > 0);
        });
      });

      // Step 3 (Tiefe): nach Auswahl direkt weiter
      $$('input[name="risk"]').forEach((el) => {
        el.addEventListener('change', () => autoAdvance(2, 250));
      });

      // Step 4 (Zeit): nach Auswahl direkt Plan erstellen
      $$('input[name="time"]').forEach((el) => {
        el.addEventListener('change', () => autoAdvance(3, 250));
      });

      // Aktionen für Checkliste
      if (btnMarkAll) {
        btnMarkAll.addEventListener('click', () => {
          if (!currentPlanKey) return;
          const m = {};
          for (const h of (currentPlanItems || [])) m[h] = true;
          setChecks(currentPlanKey, m);
          $$(".wizard-done", planEl).forEach((box) => {
            box.checked = true;
            const li = box.closest('li');
            if (li) li.classList.add('is-done');
          });
          if (doneFill) doneFill.value = 100;
          if (progressText) progressText.textContent = `${(currentPlanItems||[]).length}/${(currentPlanItems||[]).length} erledigt`;
        });
      }

      if (btnClearChecks) {
        btnClearChecks.addEventListener('click', () => {
          if (!currentPlanKey) return;
          setChecks(currentPlanKey, {});
          $$(".wizard-done", planEl).forEach((box) => {
            box.checked = false;
            const li = box.closest('li');
            if (li) li.classList.remove('is-done');
          });
          if (doneFill) doneFill.value = 0;
          if (progressText) progressText.textContent = `0/${(currentPlanItems||[]).length} erledigt`;
        });
      }

      if (btnPrint) {
        btnPrint.addEventListener('click', () => window.print());
      }

      // Ensure Enter doesn't try to submit
      $("#wizForm").addEventListener("submit", (e) => e.preventDefault());

      // Init
      setStep(0);
})();
