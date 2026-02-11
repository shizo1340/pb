/* Anbieter page (Variante B): filter + search + "Mehr laden" with client-side rendering.
   - Progressive enhancement: No-JS shows the full grouped list via <noscript>
   - With JS: render from JSON, keep DOM lightweight (fast on mobile)
*/
(function () {
  'use strict';

  function norm(v) {
    return String(v || '').trim().toLowerCase();
  }

  function byId(id) {
    return document.getElementById(id);
  }

  function el(tag, className, text) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (text != null) node.textContent = text;
    return node;
  }

  function init() {
    var dataEl = byId('anbieterData');
    var listEl = byId('anbieterList');
    if (!dataEl || !listEl) return;

    var raw;
    try {
      var jsonText = '';
      if (dataEl.tagName === 'TEMPLATE') {
        // template content isn't always exposed via textContent across browsers
        jsonText =
          (dataEl.innerHTML && dataEl.innerHTML.trim()) ||
          (dataEl.content && dataEl.content.textContent && dataEl.content.textContent.trim()) ||
          '';
      } else {
        jsonText = (dataEl.textContent && dataEl.textContent.trim()) || '';
      }
      raw = JSON.parse(jsonText || '[]');
    } catch (e) {
      // Fail gracefully: keep page usable.
      console.warn('[anbieter] Could not parse JSON data:', e);
      return;
    }

    // Controls
    var $q = byId('anbieterSearch');
    var $cat = byId('anbieterCat');
    var $price = byId('anbieterPrice');
    var $oss = byId('anbieterOSS');
    var $acct = byId('anbieterAccount');
    var $audits = byId('anbieterAudits');
    var $selfHost = byId('anbieterSelfHost');
    var $region = byId('anbieterRegion');
    var $logs = byId('anbieterLogs');
    var $retention = byId('anbieterRetention');
    var $hideArch = byId('anbieterHideArchived');
    var $count = byId('anbieterCount');
    var $shown = byId('anbieterShown');
    var $reset = byId('anbieterReset');
    var $more = byId('anbieterMore');

    // View toggle (cards vs. table)
    var $viewCards = byId('anbieterViewCards');
    var $viewTable = byId('anbieterViewTable');
    var $cardsWrap = byId('anbieterCardsWrap');
    var $tableWrap = byId('anbieterTableWrap');
    var $tableBody = byId('anbieterTableBody');

    // Pagination
    var INITIAL = 40;
    var STEP = 40;
    var limit = INITIAL;

    // View state (no LocalStorage; optional ?view=table)
    var currentView = 'cards';

    var matches = [];

    function statusBadgeText(status) {
      var st = norm(status);
      if (!st || st === 'done') return '';
      if (st === 'archived') return 'archiviert';
      return String(status || '');
    }

function syncViewButtons() {
      var isTable = currentView === 'table';

      if ($cardsWrap) $cardsWrap.hidden = isTable;
      if ($tableWrap) $tableWrap.hidden = !isTable;

      if ($viewCards) {
        $viewCards.classList.toggle('is-active', !isTable);
        $viewCards.setAttribute('aria-pressed', (!isTable).toString());
      }
      if ($viewTable) {
        $viewTable.classList.toggle('is-active', isTable);
        $viewTable.setAttribute('aria-pressed', isTable.toString());
      }
    }

    function setView(view) {
      view = norm(view);
      if (view !== 'table') view = 'cards';
      currentView = view;

      // Persist via URL param (no LocalStorage)
      try {
        var u = new URL(window.location.href);
        if (currentView === 'table') u.searchParams.set('view', 'table');
        else u.searchParams.delete('view');
        window.history.replaceState(null, '', u.toString());
      } catch (e) {}

      syncViewButtons();
      render();
    }

    // Initial view from URL
    try {
      var p = new URLSearchParams(window.location.search || '');
      if (p.get('view') === 'table') currentView = 'table';
    } catch (e) {}

    function makeBadge(text, extraClass) {
      var cls = 'badge' + (extraClass ? ' ' + extraClass : '');
      return el('span', cls, text);
    }

    function createCard(item) {
      var li = el('li', 'provider-card');

      var head = el('div', 'provider-head');

      var aName = el('a', 'provider-name', item.name);
      aName.setAttribute('href', item.href || '#');
      head.appendChild(aName);

      if (item.website) {
        var aDirect = el('a', 'provider-direct', 'Direkt ↗');
        aDirect.setAttribute('href', item.website);
        aDirect.setAttribute('target', '_blank');
        aDirect.setAttribute('rel', 'noopener noreferrer');
        aDirect.setAttribute('aria-label', 'Direkt zur Website von ' + (item.name || 'Anbieter'));
        head.appendChild(aDirect);
      }

      li.appendChild(head);

      var badges = el('div', 'provider-badges');

      if (item.category) badges.appendChild(makeBadge(item.category));

      if (item.pricing) {
        badges.appendChild(makeBadge(item.pricing_label || item.pricing, 'badge-muted'));
      }

      if (item.open_source) {
        badges.appendChild(makeBadge('Quellcode: ' + (item.open_source_label || item.open_source), 'badge-muted'));
      }

      if (item.account_required) {
        badges.appendChild(makeBadge('Konto: ' + (item.account_required_label || item.account_required), 'badge-muted'));
      }

      if (item.region && norm(item.region) !== 'unknown') {
        badges.appendChild(makeBadge('Region: ' + (item.region_label || item.region), 'badge-muted'));
      }

      if (item.logs_level && norm(item.logs_level) !== 'unknown') {
        badges.appendChild(makeBadge('Logs: ' + (item.logs_label || item.logs_level), 'badge-muted'));
      }

      if (item.retention_level && norm(item.retention_level) !== 'unknown') {
        badges.appendChild(makeBadge('Retention: ' + (item.retention_label || item.retention_level), 'badge-muted'));
      }

      if (typeof item.audits_count === 'number' && item.audits_count > 0) {
        badges.appendChild(makeBadge('Audits: ' + item.audits_count, 'badge-muted'));
      }

      if (norm(item.self_host_possible) === 'yes') {
        badges.appendChild(makeBadge('Self-Hosting: ja', 'badge-muted'));
      }

      var st = statusBadgeText(item.status);
      if (st) {
        badges.appendChild(makeBadge('Status: ' + st, 'badge-muted'));
      }

      li.appendChild(badges);
      return li;
    }

function createRow(item) {
      var tr = document.createElement('tr');

      function td(text) {
        var cell = document.createElement('td');
        if (text != null) cell.textContent = String(text);
        return cell;
      }

      // Name (link)
      var c0 = document.createElement('td');
      var a = document.createElement('a');
      a.textContent = item.name || '';
      a.setAttribute('href', item.href || '#');
      a.className = 'anbieter-table-link';
      c0.appendChild(a);
      tr.appendChild(c0);

      tr.appendChild(td(item.category || ''));
      tr.appendChild(td(item.pricing_label || item.pricing || ''));
      tr.appendChild(td(item.open_source_label || item.open_source || ''));
      tr.appendChild(td(item.account_required_label || item.account_required || ''));
      tr.appendChild(td(item.region_label || item.region || ''));
      tr.appendChild(td(item.logs_label || item.logs_level || ''));
      tr.appendChild(td(item.retention_label || item.retention_level || ''));

      var audits = '';
      if (typeof item.audits_count === 'number' && item.audits_count > 0) audits = String(item.audits_count);
      tr.appendChild(td(audits));

      tr.appendChild(td(norm(item.self_host_possible) === 'yes' ? 'ja' : ''));

      return tr;
    }

    function passesFilters(item) {
      var q = $q ? norm($q.value) : '';
      var cat = $cat ? norm($cat.value) : '';
      var price = $price ? norm($price.value) : '';
      var oss = $oss ? norm($oss.value) : '';
      var acct = $acct ? norm($acct.value) : '';
      var audits = $audits ? norm($audits.value) : '';
      var selfHost = $selfHost ? norm($selfHost.value) : '';
      var region = $region ? norm($region.value) : '';
      var logs = $logs ? norm($logs.value) : '';
      var retention = $retention ? norm($retention.value) : '';
      var hideArchived = $hideArch ? !!$hideArch.checked : false;

      // Search
      if (q) {
        var hay = norm(item.name) + ' ' + norm(item.category);
        if (hay.indexOf(q) === -1) return false;
      }

      // Category
      if (cat && norm(item.category) !== cat) return false;

      // Pricing key stored as canonical (free/freemium/paid/mixed/unknown)
      if (price && norm(item.pricing) !== price) return false;

      // Tri-state filters (yes/no/partial/unknown)
      if (oss && norm(item.open_source) !== oss) return false;
      if (acct && norm(item.account_required) !== acct) return false;
      if (selfHost && norm(item.self_host_possible) !== selfHost) return false;
      if (region && norm(item.region) !== region) return false;
      if (logs && norm(item.logs_level) !== logs) return false;
      if (retention && norm(item.retention_level) !== retention) return false;


      // Audits
      if (audits) {
        var c = parseInt(item.audits_count || 0, 10);
        if (!isFinite(c)) c = 0;
        if (audits === 'yes' && !(c > 0)) return false;
        if (audits === 'no' && !(c === 0)) return false;
      }

      // Hide archived
      if (hideArchived && norm(item.status) === 'archived') return false;

      return true;
    }

    function setCounts(shownCount, matchCount, totalCount) {
      var shownText = shownCount + ' von ' + matchCount;

      if ($count) {
        // Compact counter (German): "40 von 234" (+ optional total hint when filtered)
        var base = shownText;
        if (typeof totalCount === 'number' && matchCount !== totalCount) {
          base += ' (gesamt ' + totalCount + ')';
        }
        $count.textContent = base;
      }

      if ($shown) {
        $shown.textContent = shownText;
      }
    }

    function render() {
      var shown = matches.slice(0, limit);

      // Render either cards (grid) or a compact comparison table.
      if (currentView === 'table' && $tableBody) {
        // Clear both views
        listEl.innerHTML = '';
        $tableBody.innerHTML = '';

        var fragT = document.createDocumentFragment();
        for (var i = 0; i < shown.length; i++) {
          fragT.appendChild(createRow(shown[i]));
        }
        $tableBody.appendChild(fragT);
      } else {
        // Cards view
        if ($tableBody) $tableBody.innerHTML = '';
        listEl.innerHTML = '';

        var frag = document.createDocumentFragment();
        for (var j = 0; j < shown.length; j++) {
          frag.appendChild(createCard(shown[j]));
        }
        listEl.appendChild(frag);
      }

      // Load more
      if ($more) {
        var remaining = matches.length - shown.length;
        $more.hidden = remaining <= 0;
        if (!$more.hidden) {
          var loadN = remaining > STEP ? STEP : remaining;
          $more.textContent = 'Mehr laden (+' + loadN + ')';
        }
      }

      setCounts(shown.length, matches.length, raw.length);
    }

    function update(opts) {
      opts = opts || {};
      if (opts.resetLimit) limit = INITIAL;

      // Filter on the data array
      matches = raw.filter(passesFilters);

      // Ensure limit isn't beyond match length
      if (limit > matches.length) limit = matches.length;
      if (limit < INITIAL) limit = Math.min(INITIAL, matches.length);

      render();
    }

    function resetFilters() {
      if ($q) $q.value = '';
      if ($cat) $cat.value = '';
      if ($price) $price.value = '';
      if ($oss) $oss.value = '';
      if ($acct) $acct.value = '';
      if ($audits) $audits.value = '';
      if ($selfHost) $selfHost.value = '';
      if ($region) $region.value = '';
      if ($logs) $logs.value = '';
      if ($retention) $retention.value = '';
      if ($hideArch) $hideArch.checked = true;

      update({ resetLimit: true });
      if ($q) $q.focus();
    }

    // Wire events
    if ($q) $q.addEventListener('input', function () { update({ resetLimit: true }); });

    var selects = [$cat, $price, $oss, $acct, $region, $logs, $retention, $audits, $selfHost];
    for (var i = 0; i < selects.length; i++) {
      if (selects[i]) selects[i].addEventListener('change', function () { update({ resetLimit: true }); });
    }

    if ($hideArch) $hideArch.addEventListener('change', function () { update({ resetLimit: true }); });
    if ($reset) $reset.addEventListener('click', resetFilters);

    if ($viewCards) $viewCards.addEventListener('click', function () { setView('cards'); });
    if ($viewTable) $viewTable.addEventListener('click', function () { setView('table'); });

    if ($more) {
      $more.addEventListener('click', function () {
        limit += STEP;
        if (limit > matches.length) limit = matches.length;
        render();
      });
    }

    // First render
    syncViewButtons();
    update({ resetLimit: true });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
