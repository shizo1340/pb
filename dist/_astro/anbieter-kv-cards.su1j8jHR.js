/*
  Anbieter: Tabellen -> Key/Value Cards auf Mobile
  - Nur für 2-Spalten-Tabellen (Merkmal/Wert etc.)
  - Desktop bleibt Tabelle (für schnelle Übersicht + Copy/Paste)
  - Mobile zeigt zugängliche <dl> Cards (kein horizontaler Overflow)
*/

const SELECTOR = '.is-anbieter .article-body table';

function isTwoColKV(table){
  const firstRow = table.querySelector('tbody tr');
  if (!firstRow) return false;
  const cells = firstRow.querySelectorAll('td,th');
  if (cells.length !== 2) return false;

  // If a thead exists, it should also be 2 columns.
  const headRow = table.querySelector('thead tr');
  if (headRow){
    const headCells = headRow.querySelectorAll('th,td');
    if (headCells.length !== 2) return false;
  }
  return true;
}

function buildCards(table){
  const rows = Array.from(table.querySelectorAll('tbody tr'));
  if (!rows.length) return null;

  const wrap = document.createElement('div');
  wrap.className = 'kv-cards';
  wrap.setAttribute('data-kv-cards', '');

  for (const row of rows){
    const cells = row.querySelectorAll('td,th');
    if (cells.length < 2) continue;

    const key = (cells[0].textContent || '').trim();
    const valueHTML = (cells[1].innerHTML || '').trim();

    if (!key && !valueHTML) continue;

    const dl = document.createElement('dl');
    dl.className = 'kv-card';

    const dt = document.createElement('dt');
    dt.textContent = key || '—';

    const dd = document.createElement('dd');
    dd.innerHTML = valueHTML || '—';

    dl.appendChild(dt);
    dl.appendChild(dd);
    wrap.appendChild(dl);
  }

  return wrap.childElementCount ? wrap : null;
}

function transformKVTables(){
  const tables = document.querySelectorAll(`${SELECTOR}:not([data-kv-checked])`);
  tables.forEach((table) => {
    table.setAttribute('data-kv-checked', '1');

    if (!isTwoColKV(table)) return;

    const cards = buildCards(table);
    if (!cards) return;

    // Prevent double insert
    if (table.previousElementSibling?.hasAttribute('data-kv-cards')) return;

    table.classList.add('kv-source-table');
    table.parentNode?.insertBefore(cards, table);
  });
}

if (document.readyState === 'loading'){
  document.addEventListener('DOMContentLoaded', transformKVTables);
} else {
  transformKVTables();
}

// Handle client-side transitions (if any) + late-rendered content
window.addEventListener('pb:content', transformKVTables);
