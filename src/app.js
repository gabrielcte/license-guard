/**
 * License Guard — App Logic
 * Depende de: src/db.js (deve ser carregado antes)
 */

// ── Configuração das políticas ──────────────────────────────

const POLICIES = [
  { id: 'free', name: 'Free Software',  desc: 'GPL, MIT, Apache, BSD...',        badge: 'badge-free', label: 'Free Software'  },
  { id: 'open', name: 'Open Source',    desc: 'Licenças aprovadas pela OSI',     badge: 'badge-open', label: 'Open Source'    },
  { id: 'prop', name: 'Proprietário',   desc: 'Software comercial pago',         badge: 'badge-prop', label: 'Proprietário'   },
  { id: 'fw',   name: 'Freeware',       desc: 'Gratuito, código fechado',        badge: 'badge-fw',   label: 'Freeware'       },
];

// Estado: quais tipos de licença estão permitidos
const enabled = { free: true, open: true, prop: true, fw: true };

// Histórico de instalações da sessão
let installCount = 0;
const installLog = [];

// ── Inicialização ───────────────────────────────────────────

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('db-count').textContent = DB.length;
  renderPolicies();

  document.getElementById('search-btn').addEventListener('click', doSearch);
  document.getElementById('search-input').addEventListener('keydown', (e) => {
    if (e.key === 'Enter') doSearch();
  });
});

// ── Políticas ───────────────────────────────────────────────

function renderPolicies() {
  const grid = document.getElementById('policy-grid');

  grid.innerHTML = POLICIES.map((p) => `
    <div class="policy-card ${enabled[p.id] ? 'active' : ''}" id="pc-${p.id}">
      <div>
        <div class="policy-name">${p.name}</div>
        <div class="policy-desc">${p.desc}</div>
      </div>
      <button
        class="toggle ${enabled[p.id] ? 'on' : 'off'}"
        aria-label="${enabled[p.id] ? 'Desabilitar' : 'Habilitar'} ${p.name}"
        onclick="togglePolicy('${p.id}')"
      ></button>
    </div>
  `).join('');

  const n = Object.values(enabled).filter(Boolean).length;
  document.getElementById('allowed-count').textContent =
    `${n} tipo${n !== 1 ? 's' : ''} permitido${n !== 1 ? 's' : ''}`;
}

function togglePolicy(id) {
  enabled[id] = !enabled[id];
  renderPolicies();

  // Re-renderiza resultados se houver uma busca ativa
  const ra = document.getElementById('result-area');
  if (ra.dataset.lastQuery) {
    renderResults(ra.dataset.lastQuery);
  }
}

// ── Busca ────────────────────────────────────────────────────

/**
 * Normaliza uma string para comparação:
 * lowercase, sem espaços, hífens, underscores ou pontos.
 */
function normalize(str) {
  return str.toLowerCase().replace(/[\s\-_.+]/g, '');
}

/**
 * Busca pacotes na DB por nome, alias ou categoria.
 * Retorna resultados ordenados por relevância (score).
 */
function findPackages(query) {
  const q = normalize(query);
  const results = [];
  const seen = new Set();

  for (const pkg of DB) {
    if (seen.has(pkg.name)) continue;

    const nName = normalize(pkg.name);
    const nCat  = normalize(pkg.cat);

    let score = 0;

    // Correspondência exata por alias
    if (pkg.k.some((k) => normalize(k) === q)) {
      score = 3;
    }
    // Alias começa com a query ou vice-versa
    else if (pkg.k.some((k) => normalize(k).startsWith(q) || q.startsWith(normalize(k).substring(0, 3)))) {
      score = 2;
    }
    // Alias, nome ou categoria contém a query
    else if (
      pkg.k.some((k) => normalize(k).includes(q) || q.includes(normalize(k))) ||
      nName.includes(q) ||
      nCat.includes(q)
    ) {
      score = 1;
    }

    if (score > 0) {
      results.push({ pkg, score });
      seen.add(pkg.name);
    }
  }

  return results.sort((a, b) => b.score - a.score).map((r) => r.pkg);
}

// ── UI de busca ──────────────────────────────────────────────

async function doSearch() {
  const val = document.getElementById('search-input').value.trim();
  if (!val) return;

  const ra = document.getElementById('result-area');
  ra.dataset.lastQuery = val;
  ra.innerHTML = `<p class="empty"><span class="spinner"></span>Buscando <strong>${escapeHtml(val)}</strong>...</p>`;

  // Pequeno delay para feedback visual
  await new Promise((r) => setTimeout(r, 350));
  renderResults(val);
}

function renderResults(query) {
  const ra = document.getElementById('result-area');
  const results = findPackages(query);

  if (!results.length) {
    ra.innerHTML = `
      <p class="empty">
        Nenhum pacote encontrado para "<strong>${escapeHtml(query)}</strong>".
        <span>Tente: freecad, blender, audacity, kdenlive, brave, signal...</span>
      </p>`;
    return;
  }

  const shown = results.slice(0, 8);
  const countText = results.length > 8
    ? `${results.length} resultados · mostrando os 8 mais relevantes`
    : `${results.length} resultado${results.length !== 1 ? 's' : ''}`;

  ra.innerHTML =
    `<p class="results-count">${countText} para "${escapeHtml(query)}"</p>` +
    shown.map(buildPkgCard).join('');
}

function buildPkgCard(pkg) {
  const pol     = POLICIES.find((p) => p.id === pkg.license);
  const allowed = enabled[pkg.license];
  const pkgId   = `pkg-${normalize(pkg.name)}`;

  const installBtn = allowed
    ? `<button class="btn-install allowed" onclick="installPkg('${escapeAttr(pkg.name)}','${pkg.license}','${escapeAttr(pol?.label || '')}')">Instalar</button>`
    : `<button class="btn-install blocked" disabled>Bloqueado</button>`;

  const blockedMsg = !allowed
    ? `<p class="blocked-msg">
        ${iconWarning()}
        Licença <strong>${pol?.label}</strong> está desabilitada na política atual.
       </p>`
    : '';

  return `
    <div class="pkg-card" id="${pkgId}">
      <div class="pkg-header">
        <div>
          <span class="pkg-name">${escapeHtml(pkg.name)}</span>
          <span class="tag">${escapeHtml(pkg.cat)}</span>
          <p class="pkg-meta">v${escapeHtml(pkg.ver)}</p>
        </div>
        <span class="badge ${pol?.badge || 'badge-unknown'}">${pol?.label || 'Desconhecido'}</span>
      </div>
      <p class="pkg-desc">${escapeHtml(pkg.desc)}</p>
      <div class="pkg-actions">
        ${installBtn}
      </div>
      ${blockedMsg}
    </div>`;
}

// ── Instalação ───────────────────────────────────────────────

function installPkg(name, licenseId, licenseLabel) {
  installCount++;
  document.getElementById('install-count').textContent =
    `${installCount} instalado${installCount !== 1 ? 's' : ''} hoje`;

  const now  = new Date();
  const time = now.getHours().toString().padStart(2, '0') + ':' + now.getMinutes().toString().padStart(2, '0');

  installLog.unshift({ name, licenseLabel, time });
  renderLog();
}

function renderLog() {
  const logArea = document.getElementById('log-area');
  logArea.style.display = 'block';

  document.getElementById('log-list').innerHTML = installLog.map((entry) => `
    <div class="log-item">
      ${iconCheck()}
      <span class="log-text">Instalado <b>${escapeHtml(entry.name)}</b> — ${escapeHtml(entry.licenseLabel)}</span>
      <span class="log-time">${entry.time}</span>
    </div>
  `).join('');
}

// ── Helpers ───────────────────────────────────────────────────

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function escapeAttr(str) {
  return String(str).replace(/'/g, "\\'");
}

function iconCheck() {
  return `<svg width="14" height="14" viewBox="0 0 12 12" fill="none" aria-hidden="true">
    <circle cx="6" cy="6" r="5.25" stroke="#1D9E75" stroke-width="1.5"/>
    <path d="M3.5 6l2 2 3-3" stroke="#1D9E75" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`;
}

function iconWarning() {
  return `<svg width="13" height="13" viewBox="0 0 12 12" fill="none" aria-hidden="true">
    <circle cx="6" cy="6" r="5.25" stroke="#A32D2D" stroke-width="1.5"/>
    <line x1="6" y1="3.5" x2="6" y2="6.5" stroke="#A32D2D" stroke-width="1.5" stroke-linecap="round"/>
    <circle cx="6" cy="8.5" r="0.75" fill="#A32D2D"/>
  </svg>`;
}
