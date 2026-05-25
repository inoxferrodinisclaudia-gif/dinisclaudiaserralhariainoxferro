/* ===========================
   INOX FERRO — script.js
   =========================== */

// ============================
// BASE DE DADOS DE PREÇOS (VERSÃO COMPLETA)
// ============================
let PRECOS = {
  "Tubos Quadrados": [
    { ref: "30X20", preco: 13.50, data: "24-10-2025" },
    { ref: "80X40", preco: 28.00, data: "12-09-2025" },
    { ref: "60X40", preco: 23.00, data: "09-10-2025" },
    { ref: "50X20", preco: 17.65, data: "04-06-2025" },
    { ref: "30", preco: 13.00, data: "11-11-2025" },
    { ref: "35", preco: 18.20, data: "11-04-2023" },
    { ref: "40", preco: 18.50, data: "11-09-2025" },
    { ref: "16", preco: 7.50, data: "30-09-2024" },
    { ref: "50X30", preco: 18.00, data: "03-09-2025" },
    { ref: "150X150X3", preco: 176.00, data: "13-08-2025" },
    { ref: "60X20", preco: 20.00, data: "03-09-2024" },
    { ref: "60X60", preco: 28.50, data: "11-09-2023" },
    { ref: "50X50", preco: 24.50, data: "16-03-2025" },
    { ref: "100X50X2MM", preco: 47.00, data: "13-08-2025" },
    { ref: "80X40X2MM", preco: 33.40, data: "03-01-2024" },
    { ref: "200X200X4MM", preco: 213.00, data: "19-01-2024" },
    { ref: "40X20", preco: 13.50, data: "11-09-2025" },
    { ref: "25", preco: 11.50, data: "02-10-2025" },
    { ref: "180X180X3MM", preco: 160.00, data: "15-06-2024" },
    { ref: "80X2MM", preco: 51.00, data: "08-04-2025" },
    { ref: "80X3MM", preco: 65.00, data: "11-10-2024" },
    { ref: "160X80X3MM", preco: 120.00, data: "05-08-2024" },
    { ref: "60", preco: 29.00, data: "22-11-2024" },
    { ref: "TUBO 30X15", preco: 15.00, data: "21-05-2025" },
    { ref: "30x15", preco: 11.00, data: "23-05-2025" },
    { ref: "120x120x3", preco: 151.00, data: "03-10-2025" }
  ],
  "Tubos Redondos": [
    { ref: "40", preco: 16.45, data: "22-01-2024" },
    { ref: "30", preco: 12.00, data: "31-10-2024" },
    { ref: "90X3MM", preco: 65.00, data: "22-01-2024" },
    { ref: "76X3.2MM", preco: 58.00, data: "22-01-2024" },
    { ref: "50x1.5", preco: 20.00, data: "13-05-2025" },
    { ref: "16", preco: 7.00, data: "12-09-2025" },
    { ref: "20", preco: 8.50, data: "24-09-2025" }
  ],
  "MTA": [
    { ref: "16X220", preco: 2.50, data: "27-01-2025" },
    { ref: "8X120", preco: 0.50, data: "07-04-2025" }
  ],
  "Cantoneira": [
    { ref: "40X4", preco: 20.00, data: "30-10-2024" },
    { ref: "30X5", preco: 17.50, data: "25-10-2024" },
    { ref: "50X5", preco: 44.00, data: "05-06-2025" },
    { ref: "35X5", preco: 21.00, data: "29-09-2023" },
    { ref: "25X3", preco: 12.00, data: "01-02-2024" },
    { ref: "25X5", preco: 20.00, data: "19-05-2025" },
    { ref: "45X5", preco: 25.00, data: "19-06-2024" },
    { ref: "30X3", preco: 11.50, data: "30-09-2024" },
    { ref: "15X3", preco: 10.50, data: "05-06-2025" },
    { ref: "200x200x20mm", preco: 600.00, data: "05-06-2025" },
    { ref: "200x200x15mm", preco: 450.00, data: "05-06-2025" }
  ],
  "Barras": [
    { ref: "150X10", preco: 105.00, data: "21-07-2025" },
    { ref: "40X8", preco: 23.50, data: "26-02-2024" },
    { ref: "30X5", preco: 12.00, data: "01-03-2024" },
    { ref: "40X10", preco: 23.00, data: "04-09-2024" },
    { ref: "200X10", preco: 120.00, data: "04-01-2024" },
    { ref: "16X5", preco: 7.00, data: "25-07-2025" },
    { ref: "50X8", preco: 33.00, data: "02-12-2025" },
    { ref: "60X5", preco: 23.00, data: "21-05-2025" },
    { ref: "25X5", preco: 11.00, data: "01-03-2024" },
    { ref: "40X10", preco: 24.00, data: "26-02-2024" },
    { ref: "200X8", preco: 100.00, data: "14-06-2024" },
    { ref: "40X4", preco: 19.00, data: "19-09-2025" },
    { ref: "80X5", preco: 28.00, data: "04-09-2024" },
    { ref: "300X10", preco: 237.00, data: "10-09-2024" },
    { ref: "30x3", preco: 7.65, data: "08-10-2025" },
    { ref: "50X10", preco: 49.00, data: "02-12-2025" },
    { ref: "100X6", preco: 41.60, data: "08-04-2026" }
  ],
  "Chapas": [
    { ref: "2000x1000x1.25", preco: 39.00, data: "21-05-2025" },
    { ref: "2500x1250x1.25", preco: 55.00, data: "21-05-2025" },
    { ref: "3000x1500x1.25", preco: 80.00, data: "21-05-2025" },
    { ref: "2000x1000x1.5", preco: 43.00, data: "19-06-2024" },
    { ref: "2500x1250x1.5", preco: 67.00, data: "19-06-2024" },
    { ref: "3000x1500x1.5", preco: 98.00, data: "22-02-2024" },
    { ref: "2000X1500X2", preco: 55.00, data: "03-10-2025" },
    { ref: "Chapa alumínio 2mm 3000x1500", preco: 175.00, data: "09-09-2025" },
    { ref: "3000X1500X2", preco: 120.65, data: "03-10-2025" },
    { ref: "Chapa ondulada (largura 1130)", preco: 14.10, data: "13-10-2025" },
    { ref: "Chapa caneladobalso", preco: 11.00, data: "01-01-2024" }
  ],
  "IPÊ": [
    { ref: "180", preco: 161.00, data: "21-07-2025" },
    { ref: "200", preco: 200.00, data: "11-10-2024" },
    { ref: "120", preco: 140.00, data: "26-02-2024" },
    { ref: "240 c 12 metros", preco: 540.00, data: "10-09-2024" },
    { ref: "220", preco: 205.00, data: "11-10-2024" }
  ],
  "HEB": [
    { ref: "200", preco: 455.00, data: "28-09-2023" },
    { ref: "100", preco: 168.00, data: "30-10-2024" },
    { ref: "160", preco: 302.74, data: "31-01-2024" },
    { ref: "220", preco: 520.00, data: "11-10-2024" }
  ],
  "Tubo FT": [
    { ref: "Ft12 2 abas 35", preco: 26.50, data: "" },
    { ref: "Ft15 1 aba 35", preco: 31.00, data: "" }
  ],
  "FERROT": [],
  "Vergalhão": [
    { ref: "16 quadrado", preco: 14.80, data: "28-07-2025" },
    { ref: "20 redondo", preco: 10.80, data: "11-07-2025" },
    { ref: "16 redondo", preco: 7.00, data: "11-07-2025" },
    { ref: "10X10", preco: 10.50, data: "02-12-2025" }
  ],
  "Varão Roscado": [
    { ref: "M8 roscado", preco: 2.00, data: "20-09-2025" },
    { ref: "M10 roscado", preco: 3.00, data: "" }
  ],
  "PVC": [
    { ref: "PVC 110", preco: 14.00, data: "16-07-2025" },
    { ref: "Curvas 110", preco: 4.88, data: "16-07-2025" },
    { ref: "PVC 90", preco: 11.00, data: "06-05-2024" },
    { ref: "Curvas 90 paleta", preco: 3.00, data: "05-08-2024" },
    { ref: "Almopadeiras 90", preco: 1.50, data: "16-04-2025" },
    { ref: "Curvas 75", preco: 3.40, data: "08-06-2025" },
    { ref: "Curvas 75 paleta", preco: 4.90, data: "08-06-2025" },
    { ref: "PVC 125", preco: 25.00, data: "06-11-2024" }
  ],
  "Bodóios": [
    { ref: "Rodízio extensível Duo 75", preco: 3.10, data: "24-02-2024" },
    { ref: "Rodízio extensível giratório c/ travão", preco: 4.10, data: "24-02-2024" },
    { ref: "Rodízio portão corner 60", preco: 6.00, data: "07-06-2025" }
  ],
  "MDF": [
    { ref: "16mm 3.05x2.22", preco: 50.00, data: "19-05-2025" },
    { ref: "15 mm 2.44x1.22", preco: null, data: "" },
    { ref: "16mm 1.75x2.345", preco: null, data: "" },
    { ref: "16mm x3x2.44", preco: null, data: "" }
  ],
  "Viga Caleiros": [
    { ref: "Caleiro máquina alumínio", preco: 13.00, data: "17-07-2025" },
    { ref: "Canaleiro em alumínio", preco: 11.00, data: "17-07-2025" },
    { ref: "Suporte caleiro talha normal 40mm", preco: 7.00, data: "17-07-2025" },
    { ref: "Suporte caleiro", preco: null, data: "" },
    { ref: "Vela caleiro", preco: 3.80, data: "17-07-2025" },
    { ref: "Adaptador alumínio para caleiro", preco: 2.50, data: "17-07-2025" },
    { ref: "Espiral", preco: 18.25, data: "10-07-2025" }
  ],
  "Painéis 1d": [
    { ref: "Painel branco 2500x1000", preco: 19.60, data: "14-02-2025" },
    { ref: "Forra vedação bronco 609x1000", preco: 44.00, data: "14-02-2025" }
  ],
  "INOX Mercanox": [
    { ref: "TUBO REDONDO 40", preco: 36.00, data: "05-08-2025" },
    { ref: "TUBO REDONDO 20", preco: 19.50, data: "05-08-2025" },
    { ref: "ANGULO 20", preco: 9.00, data: "05-08-2025" },
    { ref: "ESPELHO REDONDO 40", preco: 3.85, data: "05-08-2025" },
    { ref: "VERGALHÃO 07 COM 3M", preco: 9.00, data: "05-08-2025" }
  ],
  "Motores Rui e Agostinho": [
    { ref: "MOTOR TITO COM CREMALHEIRA", preco: 220.00, data: "" },
    { ref: "MOTOR BRACOS UNGO400", preco: 400.00, data: "" },
    { ref: "MOTOR CORREDIÇO UNGO 400", preco: 250.00, data: "" },
    { ref: "MOTOR CORREIBRAVO 500", preco: 270.00, data: "" },
    { ref: "CONTROLO REMOTO", preco: 45.00, data: "" },
    { ref: "COMANDO", preco: 32.00, data: "" },
    { ref: "FECHADURA PLÁSTICA", preco: 100.00, data: "" },
    { ref: "CREMALHEIRA METÁLICA", preco: 12.50, data: "" },
    { ref: "FOTOCÉLULA", preco: 20.00, data: "" }
  ],
  "Bucobbri": [
    { ref: "Painel telha/ madeira 40mm", preco: 32.00, data: "09-02-2016" },
    { ref: "Madeira 40mm", preco: 24.50, data: "" },
    { ref: "Telha/branco 3 ondas 30mm", preco: 23.80, data: "07-04-2024" },
    { ref: "5 ondas 30mm", preco: 22.50, data: "07-04-2024" },
    { ref: "5 ondas/ madeira 30mm", preco: 26.00, data: "09-02-2016" },
    { ref: "Policarbonato 30mm", preco: 24.70, data: "" },
    { ref: "Telha/ chapa corte m2 e m2", preco: 30.00, data: "" },
    { ref: "Fachada à vista 80mm", preco: 22.50, data: "07-04-2024" },
    { ref: "Fachada exterior 80mm", preco: 22.50, data: "" },
    { ref: "Chapa perfurada", preco: 20.00, data: "" },
    { ref: "Fachada canalado ou soldado", preco: 14.50, data: "" },
    { ref: "Fachada canelado baixo", preco: 14.50, data: "" },
    { ref: "Painel fachada madeira", preco: 31.00, data: "06-09-2015" },
    { ref: "Chapa policarbonato 0.8mm", preco: 21.45, data: "" },
    { ref: "Camisas 3/5 ondas", preco: 14.20, data: "" },
    { ref: "Encaixe/ sacada 3/5 ondas", preco: 0.81, data: "15-05-2025" },
    { ref: "Topo 3/5 ondas", preco: 12.90, data: "" },
    { ref: "Encaixe/ g/5 ondas", preco: 9.00, data: "" },
    { ref: "Telha ondas", preco: 13.60, data: "" },
    { ref: "calha/ lateral 5 ondas", preco: 13.50, data: "" },
    { ref: "Topo telha 5 ondas", preco: 11.80, data: "" },
    { ref: "Encaixe/ 5 ondas", preco: 4.50, data: "" },
    { ref: "Caleira 5 ondas", preco: 13.00, data: "" },
    { ref: "Caleiro telha", preco: 16.50, data: "" }
  ]
};

// ============================
// ESTADO GLOBAL
// ============================
let itensOrcamento = [];
let modoImpressao = 'completo';
let orcamentosGuardados = [];
let orcamentoEmEdicao = null;

// ============================
// LOGIN
// ============================
function verificarLogin() {
  const user = document.getElementById('loginUser').value.trim();
  const pass = document.getElementById('loginPass').value.trim();
  
  if (user === 'inoxferro' && pass === 'inoxferro') {
    document.getElementById('loginOverlay').style.display = 'none';
    document.getElementById('appContainer').style.display = 'block';
    iniciarAplicacao();
    mostrarToast('Bem-vindo, INOX FERRO!', 'success');
  } else {
    document.getElementById('loginError').textContent = 'Credenciais inválidas. Tente novamente.';
    document.getElementById('loginUser').value = '';
    document.getElementById('loginPass').value = '';
  }
}

// Evento para Enter nas inputs de login
document.addEventListener('DOMContentLoaded', function() {
  const loginInputs = document.querySelectorAll('.login-input');
  loginInputs.forEach(input => {
    input.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        verificarLogin();
      }
    });
  });
});

function iniciarAplicacao() {
  carregarOrcamentosGuardados();
  iniciarNavTabs();
  renderizarPreview();
  renderizarTabelaPrecos();
  renderizarEditarPrecos();
  renderizarOrcamentosGuardados();
  filtrarProdutos();
  atualizarContador();
  
  // Event listeners para atualização ao vivo
  const campos = ['cliente-nome', 'cliente-nif', 'cliente-morada', 'cliente-tel', 'cliente-email', 'num-orcamento', 'validade', 'notas', 'desconto', 'iva'];
  campos.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener('input', () => renderizarPreview());
    if (el) el.addEventListener('change', () => renderizarPreview());
  });
}

// ============================
// NAVEGAÇÃO TABS
// ============================
function iniciarNavTabs() {
  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const tab = btn.dataset.tab;
      document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
      btn.classList.add('active');
      document.getElementById('tab-' + tab).classList.add('active');
      if (tab === 'editar') renderizarEditarPrecos();
      if (tab === 'precos') renderizarTabelaPrecos();
    });
  });
}

// ============================
// FILTRAR PRODUTOS
// ============================
function filtrarProdutos() {
  const cat = document.getElementById('categoria').value;
  const sel = document.getElementById('produto-sel');
  if (!sel) return;
  sel.innerHTML = '<option value="">— Selecionar produto —</option>';
  
  const lista = cat ? (PRECOS[cat] || []) : Object.values(PRECOS).flat();
  lista.forEach((item) => {
    if (item.preco === null || item.preco === undefined) return;
    const opt = document.createElement('option');
    opt.value = JSON.stringify({ ref: item.ref, preco: item.preco, cat: cat || 'Geral' });
    opt.textContent = item.ref + (item.preco ? ` — ${item.preco.toFixed(2)}€` : '');
    sel.appendChild(opt);
  });
}

function preencherPreco() {
  const sel = document.getElementById('produto-sel');
  if (!sel || !sel.value) return;
  try {
    const data = JSON.parse(sel.value);
    document.getElementById('preco-unit').value = data.preco || '';
  } catch(e) {}
}

// ============================
// ADICIONAR ITEM
// ============================
function adicionarItem() {
  const sel = document.getElementById('produto-sel');
  const preco = parseFloat(document.getElementById('preco-unit').value);
  const qty = parseFloat(document.getElementById('quantidade').value) || 1;
  const descricao = document.getElementById('descricao').value;
  
  let ref = '';
  let cat = '';
  
  if (sel && sel.value) {
    try {
      const data = JSON.parse(sel.value);
      ref = data.ref;
      cat = data.cat;
    } catch(e) {}
  }
  
  if (!ref && !descricao) { mostrarToast('Seleciona um produto ou adiciona uma descrição.', 'error'); return; }
  if (isNaN(preco) || preco <= 0) { mostrarToast('Insere um preço válido.', 'error'); return; }
  
  const item = {
    id: Date.now(),
    ref: ref || descricao,
    descricao: descricao || '',
    cat: cat,
    preco: preco,
    qty: qty,
    total: +(preco * qty).toFixed(2)
  };
  
  itensOrcamento.push(item);
  renderizarPreview();
  atualizarContador();
  mostrarToast('Produto adicionado!', 'success');
  
  if (document.getElementById('produto-sel')) document.getElementById('produto-sel').value = '';
  if (document.getElementById('preco-unit')) document.getElementById('preco-unit').value = '';
  if (document.getElementById('quantidade')) document.getElementById('quantidade').value = '1';
  if (document.getElementById('descricao')) document.getElementById('descricao').value = '';
}

function removerItem(id) {
  itensOrcamento = itensOrcamento.filter(i => i.id !== id);
  renderizarPreview();
  atualizarContador();
}

function atualizarContador() {
  const counter = document.getElementById('item-count');
  if (counter) counter.textContent = itensOrcamento.length + ' itens';
}

// ============================
// CALCULAR TOTAIS
// ============================
function calcularTotais() {
  const subtotal = itensOrcamento.reduce((s, i) => s + i.total, 0);
  const desconto = parseFloat(document.getElementById('desconto')?.value || 0);
  const iva = parseFloat(document.getElementById('iva')?.value || 23);
  const descontoVal = subtotal * (desconto / 100);
  const base = subtotal - descontoVal;
  const ivaVal = base * (iva / 100);
  const total = base + ivaVal;
  return { subtotal, desconto, descontoVal, iva, ivaVal, total };
}

// ============================
// MODO IMPRESSÃO
// ============================
function setModo(modo) {
  modoImpressao = modo;
  const btnCompleto = document.getElementById('modo-completo');
  const btnSimples = document.getElementById('modo-simples');
  if (btnCompleto) btnCompleto.classList.toggle('active', modo === 'completo');
  if (btnSimples) btnSimples.classList.toggle('active', modo === 'simples');
  renderizarPreview();
}

// ============================
// RENDERIZAR PREVIEW
// ============================
function renderizarPreview() {
  const el = document.getElementById('orcamento-preview');
  if (!el) return;
  
  const nome = document.getElementById('cliente-nome')?.value || '—';
  const nif = document.getElementById('cliente-nif')?.value || '';
  const morada = document.getElementById('cliente-morada')?.value || '';
  const tel = document.getElementById('cliente-tel')?.value || '';
  const email = document.getElementById('cliente-email')?.value || '';
  const numOrc = document.getElementById('num-orcamento')?.value || 'ORC-2025-001';
  const validade = document.getElementById('validade')?.value || '30';
  const notas = document.getElementById('notas')?.value || '';
  const hoje = new Date().toLocaleDateString('pt-PT');
  const { subtotal, desconto, descontoVal, iva, ivaVal, total } = calcularTotais();
  const simples = modoImpressao === 'simples';
  
  let tabelaHTML = '';
  
  if (itensOrcamento.length === 0) {
    tabelaHTML = `<div class="empty-state"><div class="empty-icon">📋</div><h3>Nenhum produto adicionado</h3><p>Adiciona produtos ao orçamento usando o painel da esquerda.</p></div>`;
  } else if (simples) {
    tabelaHTML = `<table class="doc-table"><thead><tr><th>Descrição</th><th style="text-align:right"></th><th style="width:30px"></th></tr></thead><tbody>
      ${itensOrcamento.map(i => `<tr><td>${i.ref}${i.descricao && i.descricao !== i.ref ? `<br><span style="font-size:11px;color:#888">${i.descricao}</span>` : ''}</td>
      <td style="text-align:right">— Preço incluído —</td><td><button class="btn-remove-item" onclick="removerItem(${i.id})">×</button></td></tr>`).join('')}
    </tbody></table>`;
  } else {
    tabelaHTML = `<table class="doc-table"><thead><tr><th>Referência</th><th>Descrição</th><th style="text-align:right">Qtd.</th><th style="text-align:right">Preço Unit.</th><th style="text-align:right">Total</th><th style="width:30px"></th></tr></thead><tbody>
      ${itensOrcamento.map(i => `<tr><td><span style="font-family:monospace;font-size:12px;">${escapeHtml(i.ref)}</span></td>
      <td>${escapeHtml(i.descricao || '')}</td>
      <td style="text-align:right">${i.qty}</td><td style="text-align:right">${i.preco.toFixed(2)}€</td>
      <td style="text-align:right;font-weight:600">${i.total.toFixed(2)}€</td><td><button class="btn-remove-item" onclick="removerItem(${i.id})">×</button></td></tr>`).join('')}
    </tbody></table>`;
  }
  
  const totaisHTML = itensOrcamento.length > 0 ? `
    <div class="doc-totais">
      ${!simples ? `<div class="totais-linha"><span class="totais-label">Subtotal</span><span class="totais-valor">${subtotal.toFixed(2)}€</span></div>` : ''}
      ${desconto > 0 ? `<div class="totais-linha"><span class="totais-label">Desconto (${desconto}%)</span><span class="totais-valor">-${descontoVal.toFixed(2)}€</span></div>` : ''}
      ${!simples ? `<div class="totais-linha"><span class="totais-label">IVA (${iva}%)</span><span class="totais-valor">${ivaVal.toFixed(2)}€</span></div>` : ''}
      <div class="totais-linha total-final"><span class="totais-label">TOTAL c/ IVA</span><span class="totais-valor">${total.toFixed(2)}€</span></div>
    </div>
  ` : '';
  
  el.innerHTML = `
    <div class="doc-header">
      <div><div class="doc-logo-name">INOX FERRO</div><div class="doc-logo-sub">soluções em metal</div></div>
      <div style="text-align:right"><div class="doc-num">${escapeHtml(numOrc)}</div><div class="doc-orcamento-label">ORÇAMENTO</div><div style="font-size:11px;color:#aaa">${hoje}</div></div>
    </div>
    <div class="doc-body">
      <div class="doc-meta">
        <div><div class="doc-meta-label">Cliente</div><div class="doc-meta-value"><strong>${escapeHtml(nome)}</strong>${nif ? `<br>NIF: ${escapeHtml(nif)}` : ''}${morada ? `<br>${escapeHtml(morada)}` : ''}${tel ? `<br>${escapeHtml(tel)}` : ''}${email ? `<br>${escapeHtml(email)}` : ''}</div></div>
        <div><div class="doc-meta-label">Informações</div><div class="doc-meta-value">Data: ${hoje}<br>Validade: ${validade} dias<br>${simples ? '<span style="background:#12121a;color:#d4af37;padding:2px 8px;border-radius:12px;font-size:10px;">Resumo</span>' : ''}</div></div>
      </div>
      <div class="doc-divider"></div>
      ${tabelaHTML}
      ${totaisHTML}
      ${notas ? `<div class="doc-notas"><strong>Observações</strong><br>${escapeHtml(notas)}</div>` : ''}
    </div>
    <div class="doc-footer" style="background:#f8f8f8;padding:12px 28px;font-size:10px;color:#aaa;display:flex;justify-content:space-between;">
      <span>INOX FERRO — Qualidade e Confiança</span><span>Gerado em ${hoje} · Válido por ${validade} dias</span>
    </div>
  `;
}

function escapeHtml(text) {
  if (!text) return '';
  return text.replace(/[&<>]/g, function(m) {
    if (m === '&') return '&amp;';
    if (m === '<') return '&lt;';
    if (m === '>') return '&gt;';
    return m;
  });
}

// ============================
// RENDERIZAR TABELA DE PREÇOS
// ============================
function renderizarTabelaPrecos() {
  const container = document.getElementById('tabela-precos-container');
  if (!container) return;
  
  const searchTerm = document.getElementById('search-precos')?.value || '';
  container.innerHTML = '';
  
  Object.entries(PRECOS).forEach(([cat, itens]) => {
    const filtrados = itens.filter(i => i.ref.toLowerCase().includes(searchTerm.toLowerCase()) || cat.toLowerCase().includes(searchTerm.toLowerCase()));
    if (filtrados.length === 0) return;
    
    const block = document.createElement('div');
    block.className = 'categoria-block';
    block.innerHTML = `
      <div class="categoria-titulo">${escapeHtml(cat)}</div>
      <table class="precos-table"><thead><tr><th>Referência</th><th>Preço (€)</th><th>Última Atualização</th></tr></thead><tbody>
        ${filtrados.map(i => `<tr><td>${escapeHtml(i.ref)}</td><td><span class="preco-val">${i.preco !== null ? i.preco.toFixed(2) + '€' : '—'}</span></td><td>${i.data || '—'}</td></tr>`).join('')}
      </tbody></table>
    `;
    container.appendChild(block);
  });
}

function filtrarTabela() {
  renderizarTabelaPrecos();
}

// ============================
// RENDERIZAR EDITAR PREÇOS
// ============================
function renderizarEditarPrecos() {
  const container = document.getElementById('editar-precos-container');
  if (!container) return;
  container.innerHTML = '';
  
  Object.entries(PRECOS).forEach(([cat, itens]) => {
    const block = document.createElement('div');
    block.className = 'categoria-block';
    block.innerHTML = `
      <div class="categoria-titulo">${escapeHtml(cat)}</div>
      <table class="precos-table">
        <thead><tr><th>Referência</th><th>Preço (€)</th><th>Data</th><th style="width:70px">Ações</th></tr></thead>
        <tbody id="tbody-${cat.replace(/[^a-zA-Z0-9]/g, '_')}"></tbody>
       </table>
      <button class="btn-secondary" style="margin-top:10px;padding:6px 14px;" onclick="adicionarLinha('${cat.replace(/'/g, "\\'")}')">+ Nova linha em ${escapeHtml(cat)}</button>
    `;
    container.appendChild(block);
    
    const tbody = block.querySelector(`tbody`);
    itens.forEach((item, idx) => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td><input type="text" class="edit-input" style="width:180px;" value="${escapeHtml(item.ref)}" onchange="atualizarReferencia('${cat}', ${idx}, this.value)"></td>
        <td><input type="number" class="edit-input" step="0.01" value="${item.preco !== null ? item.preco : ''}" onchange="atualizarPreco('${cat}', ${idx}, this.value)"></td>
        <td><input type="text" class="edit-input" style="width:110px;" value="${item.data || ''}" placeholder="dd-mm-aaaa" onchange="atualizarData('${cat}', ${idx}, this.value)"></td>
        <td><button class="icon-btn danger" onclick="eliminarProduto('${cat}', ${idx})" title="Eliminar produto">🗑️</button></td>
      `;
      tbody.appendChild(row);
    });
  });
}

function atualizarPreco(cat, idx, val) {
  if (PRECOS[cat] && PRECOS[cat][idx]) {
    PRECOS[cat][idx].preco = parseFloat(val) || null;
    filtrarProdutos();
    renderizarTabelaPrecos();
    mostrarToast('Preço atualizado', 'success');
  }
}

function atualizarData(cat, idx, val) {
  if (PRECOS[cat] && PRECOS[cat][idx]) {
    PRECOS[cat][idx].data = val;
    mostrarToast('Data atualizada', 'success');
  }
}

function atualizarReferencia(cat, idx, val) {
  if (PRECOS[cat] && PRECOS[cat][idx]) {
    PRECOS[cat][idx].ref = val;
    filtrarProdutos();
    renderizarTabelaPrecos();
    mostrarToast('Referência atualizada', 'success');
  }
}

function eliminarProduto(cat, idx) {
  if (confirm(`Tem certeza que deseja eliminar "${PRECOS[cat][idx].ref}"?`)) {
    PRECOS[cat].splice(idx, 1);
    renderizarEditarPrecos();
    renderizarTabelaPrecos();
    filtrarProdutos();
    mostrarToast('Produto eliminado!', 'success');
  }
}

function adicionarLinha(cat) {
  if (!PRECOS[cat]) PRECOS[cat] = [];
  PRECOS[cat].push({ ref: "Novo produto", preco: 0, data: new Date().toLocaleDateString('pt-PT') });
  renderizarEditarPrecos();
  renderizarTabelaPrecos();
  filtrarProdutos();
  mostrarToast('Nova linha adicionada. Clique na referência para renomear.', 'success');
}

function guardarAlteracoes() {
  renderizarTabelaPrecos();
  filtrarProdutos();
  mostrarToast('Preços guardados com sucesso!', 'success');
}

function exportarJSON() {
  const blob = new Blob([JSON.stringify(PRECOS, null, 2)], { type: 'application/json' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'precos-inoxferro.json';
  a.click();
  mostrarToast('Ficheiro exportado!', 'success');
}

// ============================
// NOVO ORÇAMENTO
// ============================
function novoOrcamento() {
  if (itensOrcamento.length > 0 && !confirm('Tens a certeza? Vais perder o orçamento atual.')) return;
  itensOrcamento = [];
  const campos = ['cliente-nome', 'cliente-nif', 'cliente-morada', 'cliente-tel', 'cliente-email', 'descricao', 'notas'];
  campos.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.value = '';
  });
  if (document.getElementById('desconto')) document.getElementById('desconto').value = '0';
  if (document.getElementById('num-orcamento')) {
    document.getElementById('num-orcamento').value = 'ORC-2025-' + String(Math.floor(Math.random()*999)+1).padStart(3,'0');
  }
  renderizarPreview();
  atualizarContador();
  mostrarToast('Novo orçamento criado!', 'success');
}

function imprimirOrcamento() {
  window.print();
}

function mostrarToast(msg, tipo = '') {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = msg;
  toast.className = 'toast show ' + tipo;
  setTimeout(() => { toast.className = 'toast'; }, 3000);
}

// ============================
// GUARDAR E CARREGAR ORÇAMENTOS
// ============================
function guardarOrcamentoAtual() {
  const nome = document.getElementById('cliente-nome')?.value || 'Sem Nome';
  const numOrc = document.getElementById('num-orcamento')?.value || 'ORC-' + Date.now();
  
  if (itensOrcamento.length === 0) {
    mostrarToast('Adiciona produtos antes de guardar!', 'error');
    return;
  }
  
  const orcamento = {
    id: Date.now(),
    numOrcamento: numOrc,
    clienteNome: nome,
    clienteNif: document.getElementById('cliente-nif')?.value || '',
    clienteMorada: document.getElementById('cliente-morada')?.value || '',
    clienteTel: document.getElementById('cliente-tel')?.value || '',
    clienteEmail: document.getElementById('cliente-email')?.value || '',
    validade: document.getElementById('validade')?.value || '30',
    notas: document.getElementById('notas')?.value || '',
    desconto: document.getElementById('desconto')?.value || '0',
    iva: document.getElementById('iva')?.value || '23',
    itens: JSON.parse(JSON.stringify(itensOrcamento)),
    dataCriacao: new Date().toLocaleDateString('pt-PT'),
    dataCriacaoFull: new Date().toLocaleString('pt-PT')
  };
  
  orcamentosGuardados.push(orcamento);
  guardarNoLocalStorage();
  renderizarOrcamentosGuardados();
  mostrarToast('Orçamento guardado com sucesso!', 'success');
}

function guardarNoLocalStorage() {
  localStorage.setItem('orcamentosInoxFerro', JSON.stringify(orcamentosGuardados));
}

function carregarOrcamentosGuardados() {
  const dados = localStorage.getItem('orcamentosInoxFerro');
  if (dados) {
    try {
      orcamentosGuardados = JSON.parse(dados);
    } catch(e) {
      orcamentosGuardados = [];
    }
  }
}

function renderizarOrcamentosGuardados() {
  const container = document.getElementById('orcamentos-lista');
  if (!container) return;
  
  if (orcamentosGuardados.length === 0) {
    container.innerHTML = '<div class="empty-state"><div class="empty-icon">📂</div><h3>Nenhum orçamento guardado</h3><p>Cria um orçamento e guarda-o para acesso posterior.</p></div>';
    return;
  }
  
  container.innerHTML = '';
  orcamentosGuardados.forEach(orc => {
    const card = document.createElement('div');
    card.className = 'orcamento-card';
    const { subtotal, iva: ivaPerc, total } = calcularTotaisOrcamento(orc);
    
    card.innerHTML = `
      <div class="orcamento-card-header">
        <div>
          <div class="orcamento-num">${escapeHtml(orc.numOrcamento)}</div>
          <div class="orcamento-cliente">${escapeHtml(orc.clienteNome)}</div>
        </div>
        <div class="orcamento-data">${orc.dataCriacao}</div>
      </div>
      <div class="orcamento-card-body">
        <div class="orcamento-info-item">
          <span class="info-label">Itens:</span>
          <span class="info-value">${orc.itens.length}</span>
        </div>
        <div class="orcamento-info-item">
          <span class="info-label">Total:</span>
          <span class="info-value" style="font-weight:600;color:#d4af37;">${total.toFixed(2)}€</span>
        </div>
      </div>
      <div class="orcamento-card-footer">
        <button class="btn-sm" onclick="carregarOrcamentoParaEdicao(${orc.id})" title="Carregar para editar">✏️ Editar</button>
        <button class="btn-sm" onclick="visualizarOrcamento(${orc.id})" title="Visualizar">👁️ Ver</button>
        <button class="btn-sm btn-danger" onclick="eliminarOrcamento(${orc.id})" title="Eliminar">🗑️ Eliminar</button>
      </div>
    `;
    container.appendChild(card);
  });
}

function calcularTotaisOrcamento(orc) {
  const subtotal = orc.itens.reduce((s, i) => s + (i.total || 0), 0);
  const desconto = parseFloat(orc.desconto) || 0;
  const iva = parseFloat(orc.iva) || 23;
  const descontoVal = subtotal * (desconto / 100);
  const base = subtotal - descontoVal;
  const ivaVal = base * (iva / 100);
  const total = base + ivaVal;
  return { subtotal, desconto, descontoVal, iva, ivaVal, total };
}

function carregarOrcamentoParaEdicao(id) {
  const orc = orcamentosGuardados.find(o => o.id === id);
  if (!orc) return;
  
  orcamentoEmEdicao = id;
  
  // Preencher campos
  document.getElementById('num-orcamento').value = orc.numOrcamento;
  document.getElementById('cliente-nome').value = orc.clienteNome;
  document.getElementById('cliente-nif').value = orc.clienteNif;
  document.getElementById('cliente-morada').value = orc.clienteMorada;
  document.getElementById('cliente-tel').value = orc.clienteTel;
  document.getElementById('cliente-email').value = orc.clienteEmail;
  document.getElementById('validade').value = orc.validade;
  document.getElementById('notas').value = orc.notas;
  document.getElementById('desconto').value = orc.desconto;
  document.getElementById('iva').value = orc.iva;
  
  itensOrcamento = JSON.parse(JSON.stringify(orc.itens));
  
  renderizarPreview();
  atualizarContador();
  mostrarToast('Orçamento carregado para edição!', 'success');
  
  // Ir para aba de orçamento
  document.querySelector('[data-tab="orcamento"]').click();
}

function eliminarOrcamento(id) {
  if (confirm('Tens a certeza que queres eliminar este orçamento?')) {
    orcamentosGuardados = orcamentosGuardados.filter(o => o.id !== id);
    guardarNoLocalStorage();
    renderizarOrcamentosGuardados();
    mostrarToast('Orçamento eliminado!', 'success');
  }
}

function visualizarOrcamento(id) {
  const orc = orcamentosGuardados.find(o => o.id === id);
  if (!orc) return;
  
  // Temporariamente carrega o orçamento para visualização
  const itensBackup = JSON.parse(JSON.stringify(itensOrcamento));
  itensOrcamento = JSON.parse(JSON.stringify(orc.itens));
  renderizarPreview();
  
  // Voltar aos itens anteriores após um tempo
  setTimeout(() => {
    itensOrcamento = itensBackup;
    renderizarPreview();
  }, 100);
}