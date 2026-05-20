(function(){
  function killLegacyWideBlocks(){
    document.querySelectorAll('table').forEach(function(t){
      if(t.closest('#yyk-procurement-workspace-compact')) return;
      var txt=(t.textContent||'').toLowerCase();
      if(
        (txt.includes('risk') && txt.includes('control method') && txt.includes('evidence required') && txt.includes('status')) ||
        (txt.includes('mandatory node') && txt.includes('quote effect')) ||
        (txt.includes('layer') && txt.includes('trigger') && txt.includes('required evidence')) ||
        (txt.includes('esg / sustainability check') || txt.includes('responsible sourcing'))
      ){
        t.setAttribute('data-killed','legacy-rfq-esg-wide-table');
        t.style.display='none';
      }
    });

    document.querySelectorAll('section,div').forEach(function(el){
      if(el.closest('#yyk-procurement-workspace-compact')) return;
      var txt=(el.textContent||'').toLowerCase();
      if(
        txt.includes('trading os · decision engine stage 1') ||
        (txt.includes('rfq scoring ai') && txt.includes('sogo shosha procurement gate')) ||
        (txt.includes('decision-driven esg / compliance output') && txt.includes('auto-linked to selected rfq material')) ||
        (txt.includes('primary logistics route:') && txt.includes('routing output'))
      ){
        el.setAttribute('data-killed','legacy-rfq-decision-stream');
        el.style.display='none';
      }
    });
  }

  function injectCompactWorkspace(){
    if(document.getElementById('yyk-procurement-workspace-compact')) return;

    var section=document.createElement('section');
    section.className='section safe-layout-block';
    section.id='yyk-procurement-workspace-compact';
    section.setAttribute('data-department','RFQ,ESG,Compliance,Deal');
    section.innerHTML = `
      <div class="wrap">
        <div class="section-head">
          <div>
            <div class="eyebrow">PROCUREMENT WORKSPACE · RFQ / ESG / DECISION</div>
            <h2>Controlled RFQ Decision Desk · Compact View</h2>
          </div>
          <div class="hint">Legacy wide RFQ, ESG and decision tables are collapsed into controlled drawers. Visible layer shows only decision KPIs.</div>
        </div>
        <div class="pwc-shell">
          <div class="pwc-grid">
            <main class="pwc-card">
              <strong>RFQ Decision State</strong>
              <p>RFQ remains controlled until material, CoA, sanctions, route, ESG and buyer specification evidence are complete.</p>
              <div class="pwc-kpis">
                <div class="pwc-kpi"><strong>RFQ</strong><span>Data Hold</span></div>
                <div class="pwc-kpi"><strong>Risk</strong><span>Senior Review</span></div>
                <div class="pwc-kpi"><strong>Route</strong><span>APAC hub</span></div>
                <div class="pwc-kpi"><strong>Release</strong><span>No Quote</span></div>
              </div>
              <details>
                <summary>Open RFQ Evidence Matrix</summary>
                <div class="pwc-drawer">Detailed RFQ, ESG and scoring matrices are reserved for VDR / engineering review and no longer render as open wide tables in the page flow.</div>
              </details>
            </main>
            <aside class="pwc-rail">
              <strong>Control Rail</strong>
              <div class="pwc-row"><span>EUC</span><span>Required</span></div>
              <div class="pwc-row"><span>Sanctions</span><span>Required</span></div>
              <div class="pwc-row"><span>CoA Method</span><span>Required</span></div>
              <div class="pwc-row"><span>Foundry Map</span><span>Required</span></div>
            </aside>
          </div>
        </div>
      </div>`;

    var anchor=document.querySelector('#yyk-rfq-legal-warning-clean') ||
               document.querySelector('#yyk-trade-decision-engine-compact') ||
               document.querySelector('footer');
    if(anchor && anchor.parentNode){
      anchor.parentNode.insertBefore(section, anchor);
    } else {
      document.body.appendChild(section);
    }
  }

  function init(){
    killLegacyWideBlocks();
    injectCompactWorkspace();
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',init,{once:true}); else init();
  setTimeout(init,300);
  setTimeout(init,1200);
})();
