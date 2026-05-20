(function(){
  'use strict';

  const RSI_ENDPOINT = window.YYK_RSI_ENDPOINT || '/api/regional-synergy-index';
  const FALLBACK = {
    generated_at: new Date().toISOString(),
    source_status: 'embedded fallback',
    rsi: 92,
    regions: {
      CN: { score: 88, status: 'green', drivers: ['MOFCOM route visibility','REE/Ga/Ge resource control'] },
      KR: { score: 94, status: 'green', drivers: ['Busan distribution hub','battery and memory demand'] },
      JP: { score: 91, status: 'green', drivers: ['METI-compatible verification','precision material demand'] },
      TW: { score: 95, status: 'green', drivers: ['Silicon Shield demand','foundry-grade routing'] }
    }
  };

  function q(sel){ return document.querySelector(sel); }

  function ensureRsiNodes(){
    const host = q('#directive25-enhanced-matrix') || q('#directive25-apac-interdependency') || q('[data-master-directive="25"]');
    if(!host) return null;

    let panel = q('#yykRegionalSynergyLivePanel');
    if(panel) return panel;

    panel = document.createElement('aside');
    panel.id = 'yykRegionalSynergyLivePanel';
    panel.className = 'd25-rsi-live-panel safe-layout-block';
    panel.innerHTML = `
      <div class="d25-rsi-card">
        <div class="eyebrow">LIVE BACKEND · REGIONAL SYNERGY INDEX</div>
        <div class="d25-rsi-score"><span id="yykRsiLiveScore">--</span><small>%</small></div>
        <div class="d25-rsi-source" id="yykRsiLiveSource">Connecting to backend</div>
        <div class="d25-rsi-grid">
          <div><strong>CN</strong><span id="yykRsiCN">--</span></div>
          <div><strong>KR</strong><span id="yykRsiKR">--</span></div>
          <div><strong>JP</strong><span id="yykRsiJP">--</span></div>
          <div><strong>TW</strong><span id="yykRsiTW">--</span></div>
        </div>
        <div class="d25-rsi-note" id="yykRsiDrivers">Awaiting CRM / VDR / Compliance DB signal.</div>
      </div>
    `;
    host.appendChild(panel);
    return panel;
  }

  function render(data){
    ensureRsiNodes();
    const regions = data.regions || {};
    const score = q('#yykRsiLiveScore');
    const source = q('#yykRsiLiveSource');
    const cn = q('#yykRsiCN');
    const kr = q('#yykRsiKR');
    const jp = q('#yykRsiJP');
    const tw = q('#yykRsiTW');
    const drivers = q('#yykRsiDrivers');

    if(score) score.textContent = Math.round(Number(data.rsi || 0));
    if(source) source.textContent = 'Source: ' + (data.source_status || 'live') + ' · Updated: ' + (data.generated_at || new Date().toISOString());
    if(cn) cn.textContent = (regions.CN?.score ?? '--') + '%';
    if(kr) kr.textContent = (regions.KR?.score ?? '--') + '%';
    if(jp) jp.textContent = (regions.JP?.score ?? '--') + '%';
    if(tw) tw.textContent = (regions.TW?.score ?? '--') + '%';

    if(drivers){
      const list = ['CN','KR','JP','TW'].map(k => {
        const r = regions[k] || {};
        return k + ': ' + (r.drivers || []).slice(0,2).join(' / ');
      }).join(' · ');
      drivers.textContent = list || 'Backend live signal active.';
    }

    document.dispatchEvent(new CustomEvent('YYK:RSI_UPDATED', { detail: data }));
  }

  async function load(){
    try{
      const res = await fetch(RSI_ENDPOINT, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'X-YYK-Audit-Trace': 'directive25-regional-synergy-index'
        },
        credentials: 'same-origin'
      });
      if(!res.ok) throw new Error('Backend status ' + res.status);
      const data = await res.json();
      render(data);
    }catch(err){
      const degraded = Object.assign({}, FALLBACK, {
        source_status: 'embedded fallback · backend unavailable',
        generated_at: new Date().toISOString()
      });
      render(degraded);
    }
  }

  function init(){
    ensureRsiNodes();
    load();
    window.setInterval(load, 60000);
  }

  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', init, {once:true});
  }else{
    init();
  }
})();
