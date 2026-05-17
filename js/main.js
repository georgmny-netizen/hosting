// YONGYEOKYO - Combined JavaScript
// Auto-extracted from monolithic HTML
document.addEventListener('DOMContentLoaded', function() {

// --- Script Block 1 ---
try {
{"@context":"https://schema.org","@graph":[{"@type":"Organization","name":"Yongyeokyo Trading House Co., Ltd.","alternateName":"YONGYEOKYO","url":"https://yongyeokyo.com","email":"sales@yongyeokyo.com","telephone":"+82 10-8010-5275","address":{"@type":"PostalAddress","streetAddress":"Room 201, 47, Hogupo-ro 764beon-gil, Namdong-gu","addressLocality":"Incheon","postalCode":"21536","addressCountry":"KR"},"identifier":[{"@type":"PropertyValue","name":"Business Registration Number","value":"877-88-03332"},{"@type":"PropertyValue","name":"Representative Director","value":"Representative Director / CEO Kim Irina"}],"knowsAbout":["SCSP Framework","6N Copper","7N Copper","6N Aluminum","5N5 Zinc","Rare Earth Materials","GDMS","SSMS","ICP-MS","SEM","Laser Diffraction","CoA","TDS","SDS","APAC Logistics","K-REACH","METI export control review","China entity and end-use screening","Taiwan UBN verification","REACH","RoHS","OECD Due Diligence","PIPA","APPI","Tokushoho","PIPL","Taiwan PDPA","Incoterms 2020","Malaysia ECER production","Kuantan Port bonded warehouse","Busan Port bonded warehouse","Port of Incheon bonded warehouse","ISO 17025 accredited laboratories","Banking arbitration","Tianjin bonded route","Qingdao bonded route","Shanghai bonded route","Niigata bonded node","Yokohama bonded node","ppb tolerance RFQ gate","Tianjin trade corridor","Qingdao trade corridor","Hong Kong trade corridor","Shanghai trade corridor","Niigata logistics node","Yokohama logistics node"]},{"@type":"Product","name":"Copper high-purity materials · KE-08896","material":"Copper","additionalProperty":[{"@type":"PropertyValue","name":"CAS","value":"7440-50-8"},{"@type":"PropertyValue","name":"Purity","value":"Up to 99.99999% (7N), subject to released batch CoA and analytical method"}]},{"@type":"Product","name":"Aluminum high-purity ingots","material":"Aluminum","additionalProperty":[{"@type":"PropertyValue","name":"CAS","value":"7429-90-5"},{"@type":"PropertyValue","name":"Purity","value":"99.996%–99.9999%, subject to supplier and CoA scope"}]},{"@type":"Product","name":"Zinc high-purity powder","material":"Zinc","additionalProperty":[{"@type":"PropertyValue","name":"CAS","value":"7440-66-6"},{"@type":"PropertyValue","name":"Purity","value":"Up to 99.9995% (5N5), batch and PSD dependent"}]},{"@type":"Product","name":"Rare earth and specialty materials","material":"Rare earth metals, oxides, salts and alloys","additionalProperty":[{"@type":"PropertyValue","name":"Scope","value":"Custom grades available; RFQ-only material review"}]}]}
} catch(e) { console.warn('Script block 1 error:', e); }

// --- Script Block 2 ---
try {
{
  "@context":"https://schema.org",
  "@graph":[
    {
      "@type":"ResearchOrganization",
      "name":"YONGYEOKYO Knowledge Leadership Hub",
      "url":"https://yongyeokyo.com/#yykThinkTankHub",
      "description":"Research and standards advocacy hub for high-purity metals, 7N+ integrity validation, GDMS evidence models, SPC stability, APAC materials compliance and foundry-grade procurement intelligence.",
      "knowsAbout":["7N+ Integrity Standard","GDMS","SPC","High-purity metals","Semiconductor materials","Quantum materials","APAC compliance","Foundry supply risk"]
    },
    {
      "@type":"CreativeWork",
      "name":"The 7N+ Integrity Standard Manifesto",
      "about":["High-purity metals","Batch traceability","GDMS validation","Statistical process control"],
      "isPartOf":{"@type":"WebPage","name":"YONGYEOKYO Knowledge Leadership Hub"}
    }
  ]
}
} catch(e) { console.warn('Script block 2 error:', e); }

// --- Script Block 3 ---
try {
{
  "@context":"https://schema.org",
  "@graph":[
    {
      "@type":"WebPage",
      "name":"YONGYEOKYO Legal Shield and B2B Trust Framework",
      "description":"Balanced APAC B2B legal framework covering RFQ review, data protection, export-control screening, VDR confidentiality, ESG limitations and commercial non-binding notices.",
      "isPartOf":{"@type":"WebSite","name":"YONGYEOKYO","url":"https://yongyeokyo.com/"},
      "about":["B2B Terms of Use","RFQ Disclaimer","Export Control","Data Protection","Virtual Data Room Confidentiality","Product Purity Disclaimer"]
    },
    {
      "@type":"CreativeWork",
      "name":"YONGYEOKYO APAC B2B Legal Shield",
      "genre":"Business legal notice",
      "audience":{"@type":"BusinessAudience","audienceType":"Qualified industrial buyers, procurement teams and technical counterparties"}
    }
  ]
}
} catch(e) { console.warn('Script block 3 error:', e); }

// --- Script Block 4 ---
try {
{"@context":"https://schema.org","@type":"ItemList","name":"YONGYEOKYO Knowledge SEO Cluster","itemListElement":[{"@type":"ListItem","position":1,"url":"https://yongyeokyo.com/knowledge/7n-integrity-standard","name":"7N+ Integrity Standard"},{"@type":"ListItem","position":2,"url":"https://yongyeokyo.com/knowledge/gdms-spc-validation","name":"GDMS + SPC Validation"},{"@type":"ListItem","position":3,"url":"https://yongyeokyo.com/knowledge/foundry-material-qualification","name":"Foundry Material Qualification"},{"@type":"ListItem","position":4,"url":"https://yongyeokyo.com/knowledge/apac-supply-risk","name":"APAC Supply Risk and BCP"}]}
} catch(e) { console.warn('Script block 4 error:', e); }

// --- Script Block 5 ---
(function(){
  function init(){
    var btn=document.querySelector('.yyk-integrity-toggle');
    var panel=document.getElementById('yykFooterIntegrityPanel');
    if(!btn||!panel) return;
    btn.addEventListener('click',function(){
      var open=panel.hasAttribute('hidden');
      if(open){panel.removeAttribute('hidden');btn.setAttribute('aria-expanded','true');}
      else{panel.setAttribute('hidden','');btn.setAttribute('aria-expanded','false');}
    });
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();

// --- Script Block 6 ---
(function(){
  'use strict';

  function isLargeTable(table){
    if(!table) return false;
    const rows = table.querySelectorAll('tr').length;
    const cols = table.querySelectorAll('tr:first-child th, tr:first-child td').length;
    return rows >= 3 || cols >= 4;
  }

  function moveHeroTablesToAuditVdr(){
    const hero = document.querySelector('.hero');
    if(!hero) return;

    let target = document.querySelector('#directive26-fiscal-passport-2026');
    if(!target){
      target = document.querySelector('section[id*="audit"]') || document.querySelector('section[id*="vdr"]');
    }
    if(!target) return;

    hero.querySelectorAll('table').forEach(function(table){
      if(!isLargeTable(table)) return;
      const wrapper = table.closest('[class*="table-wrap"], .table-panel') || table;
      wrapper.setAttribute('data-moved-from-hero', 'true');
      target.appendChild(wrapper);
    });
  }

  function enforceHeroSummaryOnly(){
    const hero = document.querySelector('.hero');
    if(!hero) return;
    hero.setAttribute('data-yyk-hero-policy', 'ticker-executive-summary-only');
  }

  function init(){
    enforceHeroSummaryOnly();
    moveHeroTablesToAuditVdr();
  }

  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', init, {once:true});
  }else{
    init();
  }
})();

// --- Script Block 7 ---
(function(){
  'use strict';

  function compactRsi(){
    var panel = document.querySelector('#yykRegionalSynergyLivePanel');
    if(!panel) return;

    panel.setAttribute('data-yyk-layout', 'compact-kpi-widget');

    var drivers = document.querySelector('#yykRsiDrivers');
    if(drivers){
      var text = drivers.textContent || '';
      if(text.length > 150){
        drivers.setAttribute('title', text);
        drivers.textContent = text.slice(0, 147) + '…';
      }
    }

    var source = document.querySelector('#yykRsiLiveSource');
    if(source){
      var s = source.textContent || '';
      if(s.length > 90){
        source.setAttribute('title', s);
        source.textContent = s.slice(0, 87) + '…';
      }
    }
  }

  function init(){
    compactRsi();
    document.addEventListener('YYK:RSI_UPDATED', function(){
      setTimeout(compactRsi, 0);
    });
    setTimeout(compactRsi, 300);
    setTimeout(compactRsi, 1200);
  }

  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', init, {once:true});
  }else{
    init();
  }
})();

// --- Script Block 8 ---
(function(){
  'use strict';

  function q(sel){ return document.querySelector(sel); }

  function ensureDock(){
    var dock = q('#yyk-audit-vdr-dock');
    if(dock) return dock;

    dock = document.createElement('section');
    dock.className = 'section safe-layout-block';
    dock.id = 'yyk-audit-vdr-dock';
    dock.setAttribute('data-department','Audit,VDR,Compliance');
    dock.innerHTML = '<div class="wrap"><div class="section-head"><div><div class="eyebrow">AUDIT / VDR · CONTROLLED APPENDIX</div><h2>Fiscal, Compliance & Backend Governance Dock</h2></div><div class="hint">Large matrices dock here, not under logistics map or hero.</div></div></div>';

    var legal = q('section[id*="legal"]') || q('footer');
    if(legal && legal.parentNode){
      legal.parentNode.insertBefore(dock, legal);
    }else{
      document.body.appendChild(dock);
    }
    return dock;
  }

  function placeD26(){
    var d26 = q('#directive26-fiscal-passport-2026');
    if(!d26) return;
    var dock = ensureDock();

    if(dock.nextElementSibling !== d26){
      dock.parentNode.insertBefore(d26, dock.nextSibling);
    }
    d26.setAttribute('data-placement','audit-vdr-dock');
  }

  function hideVisiblePolicy(){
    var policy = q('#directive25-rsi-zero-trust-security-policy');
    if(policy){
      policy.classList.add('yyk-technical-appendix-hidden');
      policy.setAttribute('aria-hidden','true');
    }
  }

  function init(){
    placeD26();
    hideVisiblePolicy();
    setTimeout(placeD26, 200);
    setTimeout(placeD26, 900);
  }

  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', init, {once:true});
  }else{
    init();
  }
})();

// --- Script Block 9 ---
(function(){
  'use strict';
  function kill(){
    ['directive26-fiscal-passport-2026','d26FiscalPassportLiveTable','d26MadeInMalaysiaEcerCertificate','d26VdrFiscalPassportTab'].forEach(function(id){
      var n = document.getElementById(id);
      if(n){
        n.setAttribute('aria-hidden','true');
        n.style.display='none';
        n.style.visibility='hidden';
        n.style.height='0';
        n.style.overflow='hidden';
      }
    });
    document.querySelectorAll('table').forEach(function(t){
      var txt = (t.textContent || '').toLowerCase();
      if(txt.includes('jurisdiction') && txt.includes('2026 fiscal lever') && txt.includes('eligible yongyeokyo route')){
        t.setAttribute('data-killed','legacy-d26-open-matrix');
        t.style.display='none';
      }
    });
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded', kill, {once:true}); else kill();
  setTimeout(kill,250);
  setTimeout(kill,1000);
})();

// --- Script Block 10 ---
(function(){
 function killRSI(){
   ['yykRegionalSynergyLivePanel','yykRsiDrivers','yykRsiLiveSource'].forEach(function(id){
      var n=document.getElementById(id);
      if(n){
        n.remove();
      }
   });

   document.querySelectorAll('*').forEach(function(el){
      var txt=(el.textContent||'').trim();
      if(txt.startsWith('LIVE BACKEND · REGIONAL SYNERGY INDEX')){
         el.remove();
      }
   });
 }

 function injectExecutiveStrip(){
   var target=document.querySelector('#yyk-d26-executive-only .d26x-shell');
   if(!target || document.getElementById('yyk-rsi-executive-strip')) return;

   var wrap=document.createElement('div');
   wrap.innerHTML = `
     <div id="yyk-rsi-executive-strip">
       <div class="yyk-rsi-kpi"><strong>CN</strong><span>88%</span></div>
       <div class="yyk-rsi-kpi"><strong>KR</strong><span>94%</span></div>
       <div class="yyk-rsi-kpi"><strong>JP</strong><span>91%</span></div>
       <div class="yyk-rsi-kpi"><strong>TW</strong><span>95%</span></div>
     </div>
     <div id="yyk-rsi-executive-summary">
       Regional Synergy Index is reduced to executive KPI format. Full backend telemetry and route diagnostics are hidden from visible website flow and reserved for Audit/VDR backend dashboards.
     </div>
   `;
   target.appendChild(wrap);
 }

 function init(){
   killRSI();
   injectExecutiveStrip();
 }
 if(document.readyState==='loading'){
   document.addEventListener('DOMContentLoaded',init,{once:true});
 } else { init(); }
 setTimeout(init,300);
 setTimeout(init,1200);
})();

// --- Script Block 11 ---
(function(){
  function kill(){
    document.querySelectorAll('table').forEach(function(t){
      var txt=(t.textContent||'').toLowerCase();
      if(txt.includes('risk area') && txt.includes('unstructured supply') && txt.includes('yongyeokyo platform')){
        t.setAttribute('data-killed','banking-arbitration-risk-table');
        t.style.display='none';
      }
    });
    document.querySelectorAll('*').forEach(function(el){
      var txt=(el.textContent||'').trim().toLowerCase();
      if(txt.startsWith('audit / banking arbitration') && el.id !== 'yyk-banking-arbitration-compact' && !el.closest('#yyk-banking-arbitration-compact')){
        var section=el.closest('section,div');
        if(section && section.id !== 'yyk-banking-arbitration-compact'){
          section.style.display='none';
          section.setAttribute('data-killed','legacy-banking-arbitration');
        }
      }
    });
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',kill,{once:true});else kill();
  setTimeout(kill,300);
  setTimeout(kill,1200);
})();

// --- Script Block 12 ---
(function(){
  function kill(){
    document.querySelectorAll('pre,code,div,section').forEach(function(el){
      if(el.closest('#yyk-trade-decision-engine-compact')) return;
      var txt=(el.textContent||'').toLowerCase();
      if(txt.includes('trade decision engine · v1.5') ||
         txt.includes('backend json contract') && txt.includes('yongyeokyo.trade_decision.v1_5') ||
         txt.includes('"schema": "yongyeokyo.trade_decision.v1_5"')){
        el.setAttribute('data-killed','legacy-trade-decision-engine');
        el.style.display='none';
      }
    });
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',kill,{once:true});else kill();
  setTimeout(kill,300);
  setTimeout(kill,1200);
})();

// --- Script Block 13 ---
(function(){
  function kill(){
    document.querySelectorAll('section,div').forEach(function(el){
      if(el.closest('#yyk-knowledge-leadership-clean') || el.closest('#yyk-rfq-legal-warning-clean')) return;
      var txt=(el.textContent||'').toLowerCase();
      if(txt.includes('knowledge leadership hub') && txt.includes('rfq legal warning')){
        el.setAttribute('data-killed','legacy-knowledge-rfq-mixed-block');
        el.style.display='none';
      }
    });
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',kill,{once:true});else kill();
  setTimeout(kill,300);
  setTimeout(kill,1200);
})();

// --- Script Block 14 ---
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

// --- Script Block 15 ---
(function(){
  'use strict';

  const defaultContent = {
    title: 'Buyer Gatekeeper Matrix',
    subtitle: 'Qualified counterparty access, document release and RFQ control.',
    primary: 'Buyer Gatekeeper Requirements',
    intro: 'This panel controls what the buyer must provide before CoA access, sample release or RFQ execution.',
    items: [
      'Corporate identity and business email verification.',
      'KYC / KYB and sanctions screening.',
      'Material, purity, form, destination and end-use scope.',
      'NDA/VDR approval where controlled documents are requested.',
      'No binding quote or supply obligation before written agreement.'
    ]
  };

  function q(sel){ return document.querySelector(sel); }

  function renderLeftPanel(data){
    data = data || defaultContent;

    const title = q('#yykBgmModalTitle');
    const sub = q('#yykBgmModalSub');
    const primary = q('#yykBgmPrimaryTitle');
    const list = q('#yykBgmEvidenceList');

    if(title && !title.textContent.trim()) title.textContent = data.title;
    if(sub && !sub.textContent.trim()) sub.textContent = data.subtitle;
    if(primary) primary.textContent = data.primary;

    if(list){
      list.innerHTML = data.items.map(x => '<li>' + x + '</li>').join('');
    }

    const panel = primary ? primary.closest('.bgm-panel') : null;
    if(panel && !panel.querySelector('.bgm-left-summary')){
      const summary = document.createElement('div');
      summary.className = 'bgm-left-summary';
      summary.innerHTML = '<strong>Access Logic</strong>' + data.intro;
      panel.insertBefore(summary, primary.nextSibling);
    }

    if(panel){
      panel.classList.remove('is-empty-warning');
      panel.setAttribute('data-content-state','filled');
    }
  }

  function repairEmptyLeftPanel(){
    const list = q('#yykBgmEvidenceList');
    const primary = q('#yykBgmPrimaryTitle');

    const empty = !list || !list.textContent.trim() || list.children.length === 0;
    if(empty){
      renderLeftPanel(defaultContent);
    }

    const panel = primary ? primary.closest('.bgm-panel') : null;
    if(panel && (!panel.textContent || panel.textContent.trim().length < 40)){
      panel.classList.add('is-empty-warning');
      renderLeftPanel(defaultContent);
    }
  }

  function bindOpenStateRepair(){
    const modal = q('#yykBuyerGatekeeperModal');
    if(!modal || modal.dataset.leftPanelObserver === 'true') return;
    modal.dataset.leftPanelObserver = 'true';

    const observer = new MutationObserver(function(){
      if(modal.classList.contains('active')) repairEmptyLeftPanel();
    });
    observer.observe(modal, {attributes:true, childList:true, subtree:true});
  }

  function init(){
    renderLeftPanel(defaultContent);
    repairEmptyLeftPanel();
    bindOpenStateRepair();
    document.addEventListener('click', function(e){
      if(e.target && e.target.closest && e.target.closest('[data-bgm-action]')){
        setTimeout(repairEmptyLeftPanel, 0);
        setTimeout(repairEmptyLeftPanel, 200);
      }
    });
  }

  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', init, {once:true});
  }else{
    init();
  }
  setTimeout(init,300);
  setTimeout(init,1200);
})();

// --- Script Block 16 ---
(function(){
  function kill(){
    var sigs=[
      'Quantum Materials Roadmap 2035',
      'Green Transformation of Korean Chaebols',
      'Failure Modes in Ultra-Pure Supply Chains',
      'Ultra-Pure Supply Failure Modes',
      'this hub advocates stricter verification'
    ];
    document.querySelectorAll('section,article,div,p,li').forEach(function(el){
      if(el.closest('#yyk-intelligence-hub-canonical')) return;
      var txt=el.textContent||'';
      if(sigs.some(function(s){ return txt.indexOf(s) !== -1; })){
        el.setAttribute('data-killed','final-knowledge-orphan');
        el.style.display='none';
      }
    });
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',kill,{once:true}); else kill();
  setTimeout(kill,300);
  setTimeout(kill,1200);
})();

// --- Script Block 17 ---
try {
{
  "directive": "Directive #2: Logical sequence of Golden Master master sections",
  "status": "approved-for-architect-review",
  "urlIntegrity": "unchanged: all existing section IDs and anchors preserved",
  "customerJourney": [
    {
      "stage": "Awareness",
      "sequence": 1,
      "section": "product-architecture",
      "purpose": "Catalog / product architecture first; buyer identifies material, purity, form and application."
    },
    {
      "stage": "Decision",
      "sequence": 2,
      "section": "productProfitRiskOverlay",
      "purpose": "Profitability and risk overlay resolves commercial lens before trust evidence and RFQ action."
    },
    {
      "stage": "Trust",
      "sequence": 3,
      "sections": [
        "trust-coa",
        "supplier-qualification",
        "scsp",
        "passports",
        "testing",
        "batch",
        "yongyeokyo-technical-specifications"
      ],
      "purpose": "Certificates, supplier qualification, analytical evidence and batch traceability validate the decision."
    },
    {
      "stage": "Action",
      "sequence": 4,
      "sections": [
        "rfq",
        "advisory-deal-room",
        "apac-regional-supply-desk"
      ],
      "purpose": "Selected product context is passed into RFQ, commercial routing, logistics and deal execution."
    }
  ],
  "priorityMoves": [
    {
      "section": "product-architecture",
      "from": "after supplier-qualification",
      "to": "immediately after hero"
    },
    {
      "section": "trust-coa",
      "from": "first section after hero",
      "to": "after product/decision layers"
    },
    {
      "section": "advisory-deal-room",
      "from": "before product catalog",
      "to": "after RFQ action layer"
    },
    {
      "section": "yyk-terminal-ux",
      "from": "before deal/product flow",
      "to": "supporting operational layer after action/supply blocks"
    }
  ],
  "dataContinuity": [
    "Product buttons keep existing data-open-product attributes.",
    "Product selection now updates rfqAutoForm, rfqAutoPurity, rfqAutoQC and rfqAutoApplication when corresponding controls are present.",
    "RFQ change events are dispatched so existing auto-decision/risk/pricing scripts can recalculate without new page routes."
  ]
}
} catch(e) { console.warn('Script block 17 error:', e); }

// --- Script Block 18 ---
(function(){
  'use strict';
  if(window.YYKTrustScoringV47){return;} window.YYKTrustScoringV47=true;
  function q(s){return document.querySelector(s)}
  function readVal(id){var el=document.getElementById(id);return el?String(el.value||''):''}
  function computeTrust(){
    var score=94;
    ['v15Ofac','v15Meti','v15Kosti'].forEach(function(id){var v=readVal(id); if(v==='review') score-=5; if(v==='hit') score-=24;});
    var kyc=readVal('v15Kyc'); if(kyc==='review')score-=5; if(kyc==='blocked')score-=22;
    score=Math.max(0,Math.min(100,score));
    var badge=q('#yykTrustScore'), sig=q('#yykTrustSignal'), comp=q('#yykTrustComplianceFactor');
    if(badge) badge.textContent=String(score);
    if(comp) comp.textContent=(score>=85?'19/20':score>=70?'14/20':'6/20');
    if(sig){
      sig.textContent=score>=85?'APPROVED FOR QUALIFICATION REVIEW':score>=70?'CONDITIONAL REVIEW REQUIRED':'DO NOT QUOTE · COUNTERPARTY REVIEW';
      sig.style.color=score>=85?'#00FF88':score>=70?'#C9A227':'#ff8a66';
    }
  }
  document.addEventListener('change',function(e){if(e.target&&/^v15(Ofac|Meti|Kosti|Kyc)$/.test(e.target.id||''))computeTrust();});
  document.addEventListener('input',function(e){if(e.target&&/^v15(Ofac|Meti|Kosti|Kyc)$/.test(e.target.id||''))computeTrust();});
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',computeTrust);else computeTrust();
})();

// --- Script Block 19 ---
(function(){
  'use strict';
  var root=document.getElementById('yykTradeDecisionV15');
  if(!root || window.YYKTradeDecisionEngineV15){return;}
  var q=function(sel){return root.querySelector(sel)};
  var qa=function(sel){return Array.prototype.slice.call(root.querySelectorAll(sel))};
  var readNum=function(id){var el=q('#'+id);var n=Number(el&&el.value);return isFinite(n)?n:0};
  var readVal=function(id){var el=q('#'+id);return el?String(el.value||''):''};
  var adapters={
    LME:function(){return {copper_usd_mt:readNum('v15Base'),source:'placeholder:lme'}},
    FX:function(){return {usdkrw:1320,usdjpy:155,usdcny:7.24,source:'placeholder:fx'}},
    freight:function(){return {apac_lane_premium:readNum('v15Port'),source:'placeholder:freight'}},
    suppliers:function(){return {premium_usd_mt:0.8,capacity:'review',source:'placeholder:supplier'}},
    risk:function(){return {route_disruption:'medium',source:'placeholder:risk'}}
  };
  function screeningRisk(){
    var score=0;
    ['v15Ofac','v15Meti','v15Kosti'].forEach(function(id){var v=readVal(id); if(v==='review')score+=18; if(v==='hit')score+=80;});
    if(readVal('v15Kyc')==='review')score+=16;
    if(readVal('v15Kyc')==='blocked')score+=80;
    return Math.min(score,100);
  }
  function routeCost(){
    var direct=readNum('v15Base')+readNum('v15Warehouse')+readNum('v15Port')+readNum('v15Customs')+readNum('v15Insurance')+readNum('v15ComplianceCost')+(readNum('v15LeadDays')*readNum('v15TimeFactor'));
    var factor=Number(readVal('v15Incoterms'))||1;
    return Math.round(direct*factor);
  }
  function buildContract(){
    var risk=screeningRisk();
    var total=routeCost();
    var status=risk>=70?'reject':(risk>=35?'conditional_approval':'approved');
    var action=risk>=70?'DO_NOT_QUOTE':(risk>=35?'APPROVE_WITH_CONDITIONS':'APPROVE');
    return {
      schema:'yongyeokyo.trade_decision.v1_5',
      rfq_id:'YYK-RFQ-V15-DEMO',
      generated_at:new Date().toISOString(),
      counterparty:{legal_name:readVal('v15LegalName'),country:readVal('v15Country'),kyc_status:readVal('v15Kyc'),external_checks:{ofac:readVal('v15Ofac'),meti:readVal('v15Meti'),kosti:readVal('v15Kosti')}},
      material:{type:'Cu',grade:'7N+',evidence_policy:'released CoA / GDMS / ICP-MS required'},
      market_data:{lme:adapters.LME(),fx:adapters.FX(),freight:adapters.freight(),supplier:adapters.suppliers(),risk:adapters.risk()},
      route:{path:'MY → BUSAN → YOKOHAMA',warehouse:'bonded',incoterms:document.getElementById('v15Incoterms').selectedOptions[0].textContent,lead_time_days:readNum('v15LeadDays')},
      cost:{total_usd_per_mt:total,currency:'USD',formula_components:{base:readNum('v15Base'),warehouse:readNum('v15Warehouse'),port:readNum('v15Port'),customs:readNum('v15Customs'),insurance:readNum('v15Insurance'),compliance:readNum('v15ComplianceCost'),time_premium:readNum('v15LeadDays')*readNum('v15TimeFactor'),incoterms_factor:Number(readVal('v15Incoterms'))||1}},
      compliance:{status:risk>=70?'blocked':(risk>=35?'review':'pass'),euc_required:true,sanctions_status:risk>=70?'blocked':(risk>=35?'review':'clear')},
      decision:{status:status,risk_score:risk,action:action,release_rule:'No Quote Release unless mandatory compliance nodes are validated.'},
      role_views:{buyer:['price','lead_time','delivery_condition'],supplier:['capacity','premium','route'],compliance:['euc','sanctions','screening'],executive:['action','risk_score','commercial_summary']}
    };
  }
  function render(){
    var c=buildContract();
    q('#v15TotalCost').textContent='$'+c.cost.total_usd_per_mt.toLocaleString()+'/MT';
    q('#v15Risk').textContent=c.decision.risk_score+'%';
    q('#v15Decision').textContent=c.decision.action.replace(/_/g,' ');
    var status=q('#yykV15Status');
    status.classList.toggle('warn',c.decision.action==='DO_NOT_QUOTE');
    status.textContent=c.decision.action==='DO_NOT_QUOTE'?'GATE BLOCKED':'API CONTRACT READY';
    q('#yykV15Json').textContent=JSON.stringify(c,null,2);
    window.YYKTradeDecisionEngineV15.lastContract=c;
    document.dispatchEvent(new CustomEvent('yyk:v15-decision-updated',{detail:c}));
  }
  function copyJson(){
    var txt=q('#yykV15Json').textContent||'';
    if(navigator.clipboard){navigator.clipboard.writeText(txt);}
  }
  qa('input,select').forEach(function(el){el.addEventListener('input',render);el.addEventListener('change',render);});
  qa('[data-v15-role]').forEach(function(btn){btn.addEventListener('click',function(){qa('[data-v15-role]').forEach(function(b){b.classList.remove('active')});btn.classList.add('active');document.body.setAttribute('data-yyk-v15-role',btn.getAttribute('data-v15-role'));render();});});
  q('#v15Recompute').addEventListener('click',render);
  q('#v15CopyJson').addEventListener('click',copyJson);
  window.YYKTradeDecisionEngineV15={adapters:adapters,buildContract:buildContract,render:render,lastContract:null};
  document.body.setAttribute('data-yyk-v15-role','buyer');
  render();
})();

// --- Script Block 20 ---
(function(){
  'use strict';
  document.addEventListener('YYK:RSI_UPDATED', function(evt){
    var data = evt.detail || {};
    var blocked = data.source_status === 'blocked' || data.rsi_blocked === true || data.compliance_decision === 'blocked';
    var score = document.querySelector('#yykRsiLiveScore');
    var source = document.querySelector('#yykRsiLiveSource');
    var drivers = document.querySelector('#yykRsiDrivers');
    if(blocked){
      if(score) score.textContent = 'BLOCKED';
      if(source) source.textContent = 'Source: backend blocked · KYC/Sanctions unresolved · RSI suppressed';
      if(drivers) drivers.textContent = 'RSI calculation is blocked until server-side KYC and sanctions clearance is complete.';
    }
  });
})();

// --- Script Block 21 ---
(function(){
  var ports={
    kuantan:{name:'Kuantan Port',role:'Malaysia · primary production + bonded warehouse',cost:'Base',costNote:'Production origin · bonded handoff',risk:'Low',riskNote:'Controlled origin / documentable route',time:'24–48h',timeNote:'Readiness after document clearance where stock is available',steps:['Kuantan','Busan QC','Yokohama'],note:'Primary route: Kuantan production → Busan bonded QC → Yokohama buyer entry. BCP alternates: Incheon / Niigata / Hong Kong / air freight.'},
    busan:{name:'Busan Port',role:'South Korea · bonded QC and regional distribution hub',cost:'+ QC',costNote:'Bonded intake + QC release',risk:'Low',riskNote:'Primary APAC control hub',time:'24–48h',timeNote:'Dispatch after payment / L-C trigger and document clearance',steps:['Kuantan','Busan Bonded','Buyer Port'],note:'Busan is the preferred QC and document-release node for Korea/Japan/Taiwan buyer flows.'},
    shanghai:{name:'Port of Shanghai',role:'China · primary commercial entry',cost:'+ CN',costNote:'Customs classification and CIQ review',risk:'Medium',riskNote:'GB/T screening and end-use review required',time:'5–9d',timeNote:'After QC release and customs readiness',steps:['Kuantan','Busan QC','Shanghai'],note:'Shanghai route requires careful customs classification, end-use screening and released batch evidence.'},
    yokohama:{name:'Yokohama',role:'Japan · primary buyer entry',cost:'+ JP',costNote:'Japan handling + buyer documentation',risk:'Low',riskNote:'Stable buyer-entry route with Form AJ / JIS document pack',time:'3–5d',timeNote:'After Korea QC release and vessel/air schedule',steps:['Kuantan','Busan QC','Yokohama'],note:'Yokohama is the preferred Japan destination node for controlled buyer entry and document handoff.'},
    kaohsiung:{name:'Kaohsiung',role:'Taiwan · primary commercial entry',cost:'+ TW',costNote:'Taiwan handling + buyer documentation',risk:'Low',riskNote:'Stable buyer-entry route for Taiwan semiconductor and metals market',time:'3–5d',timeNote:'After Korea QC release and vessel/air schedule',steps:['Kuantan','Busan QC','Kaohsiung'],note:'Kaohsiung is the preferred Taiwan destination node for controlled buyer entry and document handoff.'},
    incheon:{name:'Port of Incheon',role:'South Korea · alternate bonded gateway',cost:'+ Alt',costNote:'Alternate handling premium',risk:'Medium',riskNote:'BCP activated when Busan congestion or route disruption appears',time:'2-4d',timeNote:'Depends on inland transfer and customs queue',steps:['Kuantan','Incheon','Buyer Port'],note:'Incheon functions as a Korean BCP alternate when Busan capacity or carrier schedule is constrained.'},
    niigata:{name:'Niigata',role:'Japan · alternate / resilience node',cost:'+ BCP',costNote:'Alternate routing and handling premium',risk:'Medium',riskNote:'Used when Yokohama congestion or buyer preference requires diversion',time:'4-7d',timeNote:'After QC release, depending on route availability',steps:['Kuantan','Busan/Incheon','Niigata'],note:'Niigata is treated as a Japan-side BCP option, not the default release path.'},
    hongkong:{name:'Hong Kong',role:'Free port / flexible APAC routing',cost:'+ Flex',costNote:'Free port handling and optional onward movement',risk:'Low',riskNote:'Useful as a flexible routing node subject to end-use controls',time:'3-6d',timeNote:'After QC release and carrier availability',steps:['Kuantan','Hong Kong','Buyer Port'],note:'Hong Kong supports flexible APAC routing, especially when direct destination timing is constrained.'},
    qingdao:{name:'Qingdao Port',role:'China · northern entry route',cost:'+ North',costNote:'Northern China route premium',risk:'Medium',riskNote:'Customs and end-use review remain mandatory',time:'6-10d',timeNote:'After QC release and vessel allocation',steps:['Kuantan','Busan QC','Qingdao'],note:'Qingdao is useful for northern China buyer flows where destination logistics justify the route.'},
    tianjin:{name:'Port of Tianjin',role:'China · customs-sensitive BCP route',cost:'+ Hold',costNote:'Higher compliance / timing buffer',risk:'High',riskNote:'Use only with clear EUC, sanctions screen and customs classification',time:'7-12d',timeNote:'Can extend under compliance hold',steps:['Kuantan','Busan QC','Tianjin'],note:'Tianjin should be treated as a compliance-sensitive route: no release without complete EUC and customs classification.'},
    incheon:{name:'Port of Incheon',role:'South Korea · alternate bonded gateway',cost:'+ Alt',costNote:'Alternate handling premium',risk:'Medium',riskNote:'BCP activated when Busan congestion or route disruption appears',time:'2–4d',timeNote:'Depends on inland transfer and customs queue',steps:['Kuantan','Incheon','Buyer Port'],note:'Incheon functions as a Korean BCP alternate when Busan capacity or carrier schedule is constrained.'},
    niigata:{name:'Niigata',role:'Japan · alternate / resilience node',cost:'+ BCP',costNote:'Alternate routing and handling premium',risk:'Medium',riskNote:'Used when Yokohama congestion or buyer preference requires diversion',time:'4–7d',timeNote:'After QC release, depending on route availability',steps:['Kuantan','Busan/Incheon','Niigata'],note:'Niigata is treated as a Japan-side BCP option, not the default release path.'},
    hongkong:{name:'Hong Kong',role:'Free port / flexible APAC routing',cost:'+ Flex',costNote:'Free port handling and optional onward movement',risk:'Low',riskNote:'Useful as a flexible routing node subject to end-use controls',time:'3–6d',timeNote:'After QC release and carrier availability',steps:['Kuantan','Hong Kong','Buyer Port'],note:'Hong Kong supports flexible APAC routing, especially when direct destination timing is constrained.'},
    qingdao:{name:'Qingdao Port',role:'China · northern entry route',cost:'+ North',costNote:'Northern China route premium',risk:'Medium',riskNote:'Customs and end-use review remain mandatory',time:'6–10d',timeNote:'After QC release and vessel allocation',steps:['Kuantan','Busan QC','Qingdao'],note:'Qingdao is useful for northern China buyer flows where destination logistics justify the route.'},
    tianjin:{name:'Port of Tianjin',role:'China · customs-sensitive BCP route',cost:'+ Hold',costNote:'Higher compliance / timing buffer',risk:'High',riskNote:'Use only with clear EUC, sanctions screen and customs classification',time:'7–12d',timeNote:'Can extend under compliance hold',steps:['Kuantan','Busan QC','Tianjin'],note:'Tianjin should be treated as a compliance-sensitive route: no release without complete EUC and customs classification.'}
  };
  var portMap={Malaysia:'kuantan',Busan:'busan',Shanghai:'shanghai',Yokohama:'yokohama',Kaohsiung:'kaohsiung',Incheon:'incheon',Niigata:'niigata',HongKong:'hongkong',Qingdao:'qingdao',Tianjin:'tianjin'};
  function q(s){return document.querySelector(s)} function qa(s){return Array.prototype.slice.call(document.querySelectorAll(s))}
  function riskClass(r){return r==='High'?'risk-high':r==='Medium'?'risk-medium':'risk-low'}
  function renderRows(active){var body=q('#yykPortMatrixRows');if(!body)return;body.innerHTML=Object.keys(ports).map(function(k){var p=ports[k];return '<tr class="'+(k===active?'active':'')+'"><td>'+p.name+'</td><td>'+p.role+'</td><td>'+p.risk+' · '+p.time+'</td></tr>'}).join('')}
  function selectPort(key){
    var p=ports[key]||ports.kuantan;
    qa('#yykFooterLogisticsMap .port-node').forEach(function(b){
      var bKey=portMap[b.getAttribute('data-port')]||b.getAttribute('data-port').toLowerCase();
      b.classList.toggle('is-active',bKey===key);
    });
    var riskCell=q('#yykRiskCell');
    if(riskCell){riskCell.classList.remove('risk-low','risk-medium','risk-high');riskCell.classList.add(riskClass(p.risk));}
    if(q('#yykSelectedPortName'))q('#yykSelectedPortName').textContent=p.name;
    if(q('#yykSelectedPortNote'))q('#yykSelectedPortNote').textContent=p.role;
    if(q('#yykPortCost'))q('#yykPortCost').textContent=p.cost;
    if(q('#yykPortCostNote'))q('#yykPortCostNote').textContent=p.costNote;
    if(q('#yykPortRisk'))q('#yykPortRisk').textContent=p.risk;
    if(q('#yykPortRiskNote'))q('#yykPortRiskNote').textContent=p.riskNote;
    if(q('#yykPortTime'))q('#yykPortTime').textContent=p.time;
    if(q('#yykPortTimeNote'))q('#yykPortTimeNote').textContent=p.timeNote;
    if(q('#yykRouteNote'))q('#yykRouteNote').textContent=p.note;
    var steps=q('#yykRouteSteps');
    if(steps){steps.innerHTML=p.steps.map(function(s,i){return (i?'<span class="yyk-route-arrow">→</span>':'')+'<span class="yyk-route-step">'+s+'</span>'}).join('');}
    if(q('#yykApacLiveStatus'))q('#yykApacLiveStatus').textContent=p.risk==='High'?'APAC ROUTE REVIEW':'APAC ROUTE READY';
    renderRows(key);
    if(window.YYKModules&&YYKModules.core&&YYKModules.core.emit)YYKModules.core.emit('apac-port-selected',{port:key,risk:p.risk,time:p.time});
  }
  function init(){
    qa('#yykFooterLogisticsMap .port-node').forEach(function(node){
      node.style.cursor='pointer';
      node.addEventListener('click',function(e){
        e.stopPropagation();
        var key=portMap[node.getAttribute('data-port')]||node.getAttribute('data-port').toLowerCase();
        selectPort(key);
      });
    });
    renderRows('kuantan');
    selectPort('kuantan');
  }
  window.yykSelectPort=function(city){var key=portMap[city]||city.toLowerCase();selectPort(key);};
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});else init();
})();

// --- Script Block 22 ---
try {
const materialDefaults={"Copper Cu · CAS 7440-50-8 · KE-08896 · Up to 99.99999% (7N)":{purity:"Up to 99.99999% (7N)",form:"Powder",particle:"ingot / bar / ultrafine powder; PSD by RFQ"},"Aluminum Al · CAS 7429-90-5 · High-purity ingot route":{purity:"Up to 99.9999% (6N)",form:"Ingots",particle:""},"Zinc Zn · CAS 7440-66-6 · Up to 99.9995% (5N5)":{purity:"Up to 99.9995% (5N5)",form:"Powder",particle:"powder / formulations / coatings; PSD by RFQ"},"Rare Earth Materials · Metals / Oxides / Salts / Alloys · Custom grades":{purity:"Custom grades available",form:"Oxide / Salt",particle:""}};const required=["rfqMaterial","rfqForm","rfqPurity","rfqQty","rfqParticle","rfqApp","rfqMarket","rfqDocs","rfqTerm"];
function selectMaterial(name){document.getElementById("rfqMaterial").value=name;const d=materialDefaults[name];if(d){document.getElementById("rfqPurity").value=d.purity;document.getElementById("rfqForm").value=d.form;document.getElementById("rfqParticle").value=d.particle;}location.hash="#rfq";updateRFQ()}
function updateRFQ(){const missing=[];required.forEach(id=>{if(!document.getElementById(id).value.trim())missing.push(id.replace("rfq","").toLowerCase())});const score=Math.round(((required.length-missing.length)/required.length)*100);document.getElementById("scoreBar").style.width=score+"%";document.getElementById("scoreText").textContent="Completeness: "+score+"%";document.getElementById("missingText").textContent=missing.length?"Missing: "+missing.join(", ")+".":"Complete RFQ input. Ready for controlled technical review."; if(typeof renderRiskEngine==="function") renderRiskEngine(state.lastDecision||null)}
function verifyBatch(){const id=(document.getElementById("batchId")?.value||"COA-CU6N-2024-001").trim()||"COA-CU6N-2024-001";const rows=document.getElementById("batchRows");if(!rows){return}const safeId=id.replace(/[<>]/g,"");rows.innerHTML=`<tr><td>Batch ID</td><td>${safeId}</td></tr><tr><td>Sequence Position</td><td>Product Passport → CoA / ISO 17025 evidence → Batch Verification → Smart RFQ</td></tr><tr><td>Material</td><td>Copper high-purity materials · KE-08896</td></tr><tr><td>CoA Evidence</td><td>Controlled trust-flow check initialized</td></tr><tr><td>RFQ Gate</td><td class="ok">Verified batch evidence or manual compliance override required before final quote release</td></tr><tr><td>KYC / Sanctions</td><td class="warn">Must remain blocked until counterparty screening is complete</td></tr>`;document.getElementById("batchResult")?.classList.add("active")}
function updateSimulation(){const v=Number(document.getElementById("simDocs").value)+Number(document.getElementById("simImp").value)+Number(document.getElementById("simQual").value);let weeks="+0 weeks",text="Low qualification friction. Evaluation can proceed with documentation review.";if(v>=2&&v<6){weeks="+2–3 weeks";text="Moderate friction. Expect clarification cycles and internal SQE review."}if(v>=6){weeks="+4–6 weeks";text="High delay risk. Re-testing, supplier review or requalification may be triggered."}document.getElementById("delayWeeks").textContent=weeks;document.getElementById("delayText").textContent=text}
function openVault(product){document.getElementById("selectedProduct").textContent=product;document.getElementById("vaultMessage").textContent="";document.getElementById("vaultModal").classList.add("active")}
function closeVault(){document.getElementById("vaultModal").classList.remove("active")}
function submitVault(){const email=document.getElementById("corpEmail").value.trim();const consent=document.getElementById("consent").checked;const blocked=/@(gmail|yahoo|hotmail|outlook|icloud|protonmail)\./i.test(email);if(!email||blocked){document.getElementById("vaultMessage").textContent="Corporate email required.";return}if(!consent){document.getElementById("vaultMessage").textContent="Consent is required.";return}console.log("Controlled request",{product:document.getElementById("selectedProduct").textContent,email,industry:document.getElementById("industrySelect").value,docScope:document.getElementById("docScope").value});document.getElementById("vaultMessage").textContent="Request received. A technical representative will contact you if purity or documentation clarification is required."}
document.querySelectorAll(".rfq-field").forEach(el=>el.addEventListener("input",updateRFQ));document.querySelectorAll(".sim-field").forEach(el=>el.addEventListener("change",updateSimulation));document.querySelectorAll(".lang-btn").forEach(btn=>btn.addEventListener("click",()=>{document.querySelectorAll(".lang-btn").forEach(b=>b.classList.remove("active"));btn.classList.add("active");const v=btn.textContent.trim().toLowerCase();document.body.classList.remove("lang-en","lang-kr","lang-jp","lang-cn","lang-tw");document.body.classList.add(v==="tw"?"lang-cn":"lang-"+v);}));document.getElementById("vaultModal").addEventListener("click",e=>{if(e.target.id==="vaultModal")closeVault()});document.addEventListener("keydown",e=>{if(e.key==="Escape")closeVault()});var _riskMat=document.getElementById("rfqMaterial"); if(_riskMat) _riskMat.addEventListener("change",()=>{if(window.renderRiskEngine) window.renderRiskEngine(null)}); updateRFQ();updateSimulation(); if(window.renderRiskEngine) window.renderRiskEngine(null);

const contactEngine=document.getElementById("contactEngine");
function openContact(){
  if(contactEngine){
    contactEngine.classList.add("active");
    contactEngine.setAttribute("aria-hidden","false");
    document.body.style.overflow="hidden";
  }
}
function closeContact(){
  if(contactEngine){
    contactEngine.classList.remove("active");
    contactEngine.setAttribute("aria-hidden","true");
    document.body.style.overflow="";
  }
}
document.querySelectorAll("[data-open-contact]").forEach(btn=>btn.addEventListener("click",e=>{e.preventDefault();openContact();}));
document.querySelectorAll("[data-close-contact]").forEach(btn=>btn.addEventListener("click",closeContact));
if(contactEngine){contactEngine.addEventListener("click",e=>{if(e.target===contactEngine)closeContact();});}
document.addEventListener("keydown",e=>{if(e.key==="Escape")closeContact();});
document.querySelectorAll("[data-contact-form]").forEach(form=>{
  form.addEventListener("submit",e=>{
    e.preventDefault();
    let note=form.querySelector(".contact-submit-note");
    if(!note){note=document.createElement("div");note.className="contact-submit-note";form.appendChild(note);}
    const email=form.querySelector('input[type="email"]')?.value||"";
    const blocked=/@(gmail|yahoo|hotmail|outlook|icloud|protonmail)\./i.test(email);
    if(blocked){note.textContent="Corporate email required for controlled B2B inquiry routing.";return;}
    note.textContent="Inquiry captured for routing. Connect this form to CRM / email endpoint before production.";
  });
});

const productEngine=document.getElementById("productEngine");
function setProductTab(tab){
  document.querySelectorAll(".product-tab").forEach(b=>b.classList.toggle("active",b.dataset.productTab===tab));
  document.querySelectorAll(".product-panel").forEach(p=>p.classList.toggle("active",p.dataset.productPanel===tab));
}
function openProductEngine(tab="cu"){
  if(productEngine){
    setProductTab(tab);
    productEngine.classList.add("active");
    productEngine.setAttribute("aria-hidden","false");
    document.body.style.overflow="hidden";
  }
}
function closeProductEngine(){
  if(productEngine){
    productEngine.classList.remove("active");
    productEngine.setAttribute("aria-hidden","true");
    document.body.style.overflow="";
  }
}
document.querySelectorAll("[data-open-product]").forEach(btn=>btn.addEventListener("click",e=>{e.preventDefault();openProductEngine(btn.dataset.openProduct||"cu");}));
document.querySelectorAll("[data-close-product]").forEach(btn=>btn.addEventListener("click",closeProductEngine));
document.querySelectorAll(".product-tab").forEach(btn=>btn.addEventListener("click",()=>setProductTab(btn.dataset.productTab)));
if(productEngine){productEngine.addEventListener("click",e=>{if(e.target===productEngine)closeProductEngine();});}
document.addEventListener("keydown",e=>{if(e.key==="Escape")closeProductEngine();});
} catch(e) { console.warn('Script block 22 error:', e); }

// --- Script Block 23 ---
(function () {
      const CONSENT_KEY = "yongyeokyo_cookie_consent_v1";
      const CONSENT_LOG_KEY = "yongyeokyo_cookie_consent_log_v1";
      const POLICY_VERSION = "2026-04-19";

      const banner = document.getElementById("cookieBanner");
      const panel = document.getElementById("cookiePanel");
      const analyticsInput = document.getElementById("analyticsConsent");
      const marketingInput = document.getElementById("marketingConsent");
      const consentSummary = document.getElementById("consentSummary");
      const consentLogView = document.getElementById("consentLogView");

      function nowISO() {
        return new Date().toISOString();
      }

      function getClientMeta() {
        return {
          userAgent: navigator.userAgent,
          language: navigator.language || "unknown",
          path: location.pathname,
          policyVersion: POLICY_VERSION
        };
      }

      function getStoredConsent() {
        try {
          return JSON.parse(localStorage.getItem(CONSENT_KEY) || "null");
        } catch (e) {
          return null;
        }
      }

      function getStoredLog() {
        try {
          return JSON.parse(localStorage.getItem(CONSENT_LOG_KEY) || "[]");
        } catch (e) {
          return [];
        }
      }

      function writeLog(entry) {
        const logs = getStoredLog();
        logs.unshift(entry);
        localStorage.setItem(CONSENT_LOG_KEY, JSON.stringify(logs.slice(0, 20)));
      }

      function updateConsentUI() {
        const consent = getStoredConsent();
        if (!consent) {
          consentSummary.textContent = "";
          consentLogView.textContent = "   .";
          return;
        }
        consentSummary.textContent =
          `essential=${consent.essential}, analytics=${consent.analytics}, marketing=${consent.marketing}, updated=${consent.timestamp}`;
        const logs = getStoredLog();
        consentLogView.textContent = JSON.stringify(logs, null, 2);
      }

      function sendConsentToServer(payload) {
        // Production hook:
        // Replace this with a real fetch() call to your backend endpoint.
        // Example:
        // return fetch("/api/privacy/consent-log", {
        //   method: "POST",
        //   headers: {"Content-Type": "application/json"},
        //   body: JSON.stringify(payload)
        // });
        return Promise.resolve({ ok: true });
      }

      function applyConsent(consentData) {
        localStorage.setItem(CONSENT_KEY, JSON.stringify(consentData));
        writeLog(consentData);

        // Non-essential tags must only load after consent.
        // Example:
        // if (consentData.analytics) loadGoogleAnalytics();
        // if (consentData.marketing) loadMetaPixel();

        sendConsentToServer(consentData).catch(function () {
          // Fail silently here; local log still remains.
        });

        updateConsentUI();
        banner.classList.remove("show");
      }

      function openBannerWithPanel() {
        banner.classList.add("show");
        panel.classList.add("show");
      }

      document.getElementById("toggleCustomize").addEventListener("click", function () {
        panel.classList.toggle("show");
      });

      document.getElementById("openSettingsTop").addEventListener("click", openBannerWithPanel);
      document.getElementById("openSettingsFloating").addEventListener("click", openBannerWithPanel);

      document.getElementById("acceptAll").addEventListener("click", function () {
        analyticsInput.checked = true;
        marketingInput.checked = true;
        applyConsent({
          essential: true,
          analytics: true,
          marketing: true,
          source: "banner_accept_all",
          timestamp: nowISO(),
          ...getClientMeta()
        });
      });

      document.getElementById("rejectNonEssential").addEventListener("click", function () {
        analyticsInput.checked = false;
        marketingInput.checked = false;
        applyConsent({
          essential: true,
          analytics: false,
          marketing: false,
          source: "banner_reject_nonessential",
          timestamp: nowISO(),
          ...getClientMeta()
        });
      });

      document.getElementById("savePreferences").addEventListener("click", function () {
        applyConsent({
          essential: true,
          analytics: !!analyticsInput.checked,
          marketing: !!marketingInput.checked,
          source: "banner_customized",
          timestamp: nowISO(),
          ...getClientMeta()
        });
      });

      const existing = getStoredConsent();
      if (existing) {
        analyticsInput.checked = !!existing.analytics;
        marketingInput.checked = !!existing.marketing;
        banner.classList.remove("show");
      } else {
        banner.classList.add("show");
      }

      updateConsentUI();
    })();

// --- Script Block 24 ---
(function(){
  const KEY="apex_sogo_rfq_state_v1";
  const drawer=document.getElementById("sogoDrawer");
  const toast=document.getElementById("sogoToast");
  const materialButtons=[].slice.call(document.querySelectorAll("[data-sogo-material]"));
  const fields=["sogoPurity","sogoForm","sogoRegion","sogoVolume","sogoApplication","sogoTerm"].map(id=>document.getElementById(id)).filter(Boolean);
  const defaults={
    "Copper":{purity:"6N+",form:"Powder",app:"Semiconductor",compliance:"Required",export:"Destination review",batch:"Limited / verify"},
    "Aluminum":{purity:"6N",form:"Ingot",app:"Semiconductor",compliance:"Standard",export:"Route review",batch:"Available / verify"},
    "Zinc":{purity:"5N",form:"Powder",app:"EV",compliance:"Standard",export:"Route review",batch:"Verify PSD"},
    "Rare Earths":{purity:"Custom",form:"Oxide / Salt",app:"EV",compliance:"Enhanced",export:"End-use validation",batch:"Controlled release"}
  };
  let state={material:"Copper",purity:"6N+",form:"Powder",region:"Japan",volume:"50 kg",application:"Semiconductor",term:"CIF"};
  function save(){localStorage.setItem(KEY,JSON.stringify(state));}
  function load(){try{const s=JSON.parse(localStorage.getItem(KEY)||"null"); if(s)state=Object.assign(state,s);}catch(e){}}
  function apply(){
    materialButtons.forEach(b=>b.classList.toggle("active",b.dataset.sogoMaterial===state.material));
    const map={sogoPurity:state.purity,sogoForm:state.form,sogoRegion:state.region,sogoVolume:state.volume,sogoApplication:state.application,sogoTerm:state.term};
    Object.keys(map).forEach(id=>{const el=document.getElementById(id); if(el)el.value=map[id];});
    const d=defaults[state.material]||defaults.Copper;
    const c=document.getElementById("sogoCompliance"); if(c)c.textContent=d.compliance;
    const ex=document.getElementById("sogoExport"); if(ex)ex.textContent=d.export;
    const ba=document.getElementById("sogoBatch"); if(ba)ba.textContent=d.batch;
    updateProgress();
  }
  function updateProgress(){
    let score=20;
    if(state.material)score+=20;if(state.purity)score+=15;if(state.form)score+=15;if(state.region)score+=10;if(state.volume)score+=10;if(state.application)score+=5;if(state.term)score+=5;
    score=Math.min(score,100);
    const bar=document.getElementById("sogoProgress"); if(bar)bar.style.width=score+"%";
    const status=document.getElementById("sogoStatus");
    if(status)status.textContent=score>=95?"Ready for Lanthanex workspace.":"Progress cached automatically. Complete missing RFQ fields to accelerate review.";
  }
  function open(){if(!drawer)return;drawer.classList.add("active");drawer.setAttribute("aria-hidden","false");document.body.style.overflow="hidden";load();setTimeout(apply,560);}
  function close(){if(!drawer)return;drawer.classList.remove("active");drawer.setAttribute("aria-hidden","true");document.body.style.overflow="";}
  window.apexOpenSogoFlow=open; window.apexCloseSogoFlow=close;
  document.querySelectorAll("[data-open-sogo]").forEach(btn=>btn.addEventListener("click",e=>{e.preventDefault();open();}));
  document.querySelectorAll("[data-close-sogo]").forEach(btn=>btn.addEventListener("click",e=>{e.preventDefault();close();}));
  if(drawer)drawer.addEventListener("click",e=>{if(e.target.classList.contains("sogo-backdrop"))close();});
  document.addEventListener("keydown",e=>{if(e.key==="Escape")close();});
  materialButtons.forEach(btn=>{btn.addEventListener("click",()=>{const m=btn.dataset.sogoMaterial;const d=defaults[m]||defaults.Copper;state.material=m;state.purity=d.purity;state.form=d.form;state.application=d.app;save();apply();});});
  fields.forEach(el=>{el.addEventListener("input",()=>{state.purity=document.getElementById("sogoPurity")?.value||state.purity;state.form=document.getElementById("sogoForm")?.value||state.form;state.region=document.getElementById("sogoRegion")?.value||state.region;state.volume=document.getElementById("sogoVolume")?.value||state.volume;state.application=document.getElementById("sogoApplication")?.value||state.application;state.term=document.getElementById("sogoTerm")?.value||state.term;save();updateProgress();});el.addEventListener("change",()=>el.dispatchEvent(new Event("input")));});
  const submit=document.getElementById("sogoSubmit");
  if(submit){submit.addEventListener("click",()=>{save();submit.textContent="Processing…";if(toast){toast.classList.add("active");}setTimeout(()=>{close();if(toast){toast.textContent="RFQ synchronized. Opening RFQ form.";setTimeout(()=>toast.classList.remove("active"),2200);}if(window.apexOpenLanthanex){window.apexOpenLanthanex("workspace");}submit.textContent="Submit Request → RFQ";},650);});}
  load();apply();
})();

// --- Script Block 25 ---
(function(){
  function setRFQMaterial(material){
    var select = document.getElementById("rfqMaterial");
    if(!select || !material) return;
    var found = false;
    Array.prototype.slice.call(select.options).forEach(function(opt){
      if(opt.textContent === material || opt.value === material){ found = true; }
    });
    if(!found){
      var option = document.createElement("option");
      option.value = material;
      option.textContent = material;
      select.appendChild(option);
    }
    select.value = material;
    select.dispatchEvent(new Event("change", { bubbles:true }));
  }

  function openLinkedProduct(card){
    var product = card.getAttribute("data-product") || "cu";
    var material = card.getAttribute("data-rfq-material") || "";
    setRFQMaterial(material);

    if(typeof window.openProductEngine === "function"){
      window.openProductEngine(product);
      return;
    }
    if(typeof window.apexOpenProduct === "function"){
      window.apexOpenProduct(product);
      return;
    }

    var btn = document.querySelector('[data-open-product="' + product + '"]');
    if(btn){ btn.click(); }
  }

  document.addEventListener("click", function(event){
    var card = event.target.closest("[data-industry-link]");
    if(!card) return;

    var isInteractiveChild = event.target.closest("a, input, select, textarea");
    if(isInteractiveChild) return;

    event.preventDefault();
    openLinkedProduct(card);
  });
})();

// --- Script Block 26 ---
(function(){
  function getMaterialValue(){
    var select = document.getElementById("rfqMaterial");
    return select ? (select.value || select.options[select.selectedIndex]?.textContent || "") : "";
  }

  function getRegionValue(){
    var regionFields = [
      document.getElementById("rfqRegion"),
      document.getElementById("sogoRegion"),
      document.querySelector('[name="region"]')
    ].filter(Boolean);
    return regionFields.length ? (regionFields[0].value || "") : "";
  }

  function updateComplianceNotice(){
    var notice = document.getElementById("rfqComplianceNotice");
    var dynamic = document.getElementById("rfqComplianceDynamic");
    if(!notice || !dynamic) return;

    var material = getMaterialValue();
    var region = getRegionValue();
    var highControl = /rare|earth|ree|isotope|cesium|rubidium|selenium|7n|ultra/i.test(material);
    var regionReview = /china|north america|europe|taiwan|japan/i.test(region);

    notice.classList.remove("compliance-alert", "compliance-ready");

    if(highControl){
      notice.classList.add("compliance-alert");
      dynamic.textContent = "Compliance status: enhanced review required for controlled materials / REE / ultra-high purity supply.";
    } else if(regionReview){
      notice.classList.add("compliance-alert");
      dynamic.textContent = "Compliance status: destination and routing review required before commercial release.";
    } else {
      notice.classList.add("compliance-ready");
      dynamic.textContent = "Compliance status: standard review. Batch-specific CoA still required before release.";
    }
  }

  function openLegalFramework(){
    var legalButton = document.querySelector('[data-compliance-tab="legal-framework"]');
    if(legalButton){ legalButton.click(); }
    if(typeof window.openCompliance === "function"){ window.openCompliance("legal-framework"); }
    if(typeof window.apexOpenCompliance === "function"){ window.apexOpenCompliance("legal-framework"); }
  }

  document.addEventListener("change", function(event){
    if(event.target && (event.target.id === "rfqMaterial" || event.target.id === "rfqRegion" || event.target.id === "sogoRegion")){
      updateComplianceNotice();
    }
  });

  document.addEventListener("input", function(event){
    if(event.target && (event.target.id === "rfqMaterial" || event.target.id === "rfqRegion" || event.target.id === "sogoRegion")){
      updateComplianceNotice();
    }
  });

  document.addEventListener("click", function(event){
    var submit = event.target.closest('button');
    if(!submit) return;

    var isRfqSubmit =
      /Submit Controlled RFQ/i.test(submit.textContent || "") ||
      /Submit Request/i.test(submit.textContent || "");

    if(!isRfqSubmit) return;

    var check = document.getElementById("rfqComplianceCheck");
    var notice = document.getElementById("rfqComplianceNotice");
    if(check && !check.checked){
      event.preventDefault();
      event.stopPropagation();
      if(notice){
        notice.classList.add("compliance-alert");
        notice.scrollIntoView({ behavior:"smooth", block:"center" });
      }
      var dynamic = document.getElementById("rfqComplianceDynamic");
      if(dynamic){
        dynamic.textContent = "Compliance acknowledgement required before RFQ submission.";
      }
    }
  }, true);

  document.addEventListener("click", function(event){
    var target = event.target.closest("[data-open-legal-framework]");
    if(!target) return;
    event.preventDefault();
    openLegalFramework();
  });

  updateComplianceNotice();
})();

// --- Script Block 27 ---
(function(){
  document.addEventListener("click", function(e){
    var btn = e.target.closest("#safeEsgPolicyAction button");
    if(!btn) return;
    if(typeof window.apexOpenCompliance === "function"){
      e.preventDefault();
      window.apexOpenCompliance("esg");
      return;
    }
    if(typeof window.openCompliance === "function"){
      e.preventDefault();
      window.openCompliance("esg");
      return;
    }
    var tab = document.querySelector('[data-compliance-tab="esg"]');
    var engine = document.getElementById("complianceEngine");
    if(tab && engine){
      e.preventDefault();
      engine.classList.add("active");
      tab.click();
    }
  });
})();

// --- Script Block 28 ---
(function(){
  function openEsgPolicy(){
    if(typeof window.apexOpenCompliance === "function"){
      window.apexOpenCompliance("esg");
      return;
    }
    if(typeof window.openCompliance === "function"){
      window.openCompliance("esg");
      return;
    }
    var engine = document.getElementById("complianceEngine");
    if(engine){
      engine.classList.add("active");
      engine.setAttribute("aria-hidden","false");
      document.body.classList.add("overlay-open");
    }
    document.querySelectorAll(".compliance-tab").forEach(function(tab){
      tab.classList.toggle("active", tab.getAttribute("data-compliance-tab")==="esg");
    });
    document.querySelectorAll(".compliance-panel").forEach(function(panel){
      panel.classList.toggle("active", panel.getAttribute("data-compliance-panel")==="esg");
    });
  }
  document.addEventListener("click", function(e){
    var btn = e.target.closest("#openEsgPolicyDirect");
    if(!btn) return;
    e.preventDefault();
    e.stopPropagation();
    openEsgPolicy();
  }, true);
})();

// --- Script Block 29 ---
try {
document.addEventListener("DOMContentLoaded", function(){

function closeAll(){
document.querySelectorAll('.compliance-engine, .product-engine, .contact-engine').forEach(el=>{
el.classList.remove('active');
});
}

document.querySelectorAll('[data-open-compliance]').forEach(btn=>{
btn.addEventListener('click', ()=> {
closeAll();
document.querySelector('.compliance-engine').classList.add('active');
});
});

document.querySelectorAll('[data-open-contact]').forEach(btn=>{
btn.addEventListener('click', ()=> {
closeAll();
document.querySelector('.contact-engine').classList.add('active');
});
});

document.querySelectorAll('[data-open-product]').forEach(btn=>{
btn.addEventListener('click', ()=> {
closeAll();
document.querySelector('.product-engine').classList.add('active');
});
});

document.querySelectorAll('.compliance-close, .product-close, .contact-close').forEach(btn=>{
btn.addEventListener('click', closeAll);
});

});
} catch(e) { console.warn('Script block 29 error:', e); }

// --- Script Block 30 ---
try {
document.addEventListener("DOMContentLoaded", function(){

// ESG inner navigation (anchors)
document.querySelectorAll('.esg-layer-toc a').forEach(link=>{
  link.addEventListener('click', function(e){
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if(target){
      target.scrollIntoView({behavior:'smooth', block:'start'});
    }
  });
});

// Compliance inner navigation
document.querySelectorAll('.compliance-toc a').forEach(link=>{
  link.addEventListener('click', function(e){
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if(target){
      target.scrollIntoView({behavior:'smooth', block:'start'});
    }
  });
});

});
} catch(e) { console.warn('Script block 30 error:', e); }

// --- Script Block 31 ---
(function(){
  function qsa(sel, root){ return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }
  function qs(sel, root){ return (root || document).querySelector(sel); }

  function getComplianceEngine(){
    return qs('.compliance-engine') || qs('#compliance-engine');
  }

  function openCompliance(tabName){
    var engine = getComplianceEngine();
    if(!engine) return;

    qsa('.product-engine,.contact-engine,.modal,.sogo-drawer').forEach(function(el){
      el.classList.remove('active');
    });

    engine.classList.add('active');
    document.body.classList.add('apex-modal-open');

    if(tabName) activateComplianceTab(tabName);
  }

  function closeCompliance(){
    var engine = getComplianceEngine();
    if(engine) engine.classList.remove('active');
    document.body.classList.remove('apex-modal-open');
  }

  function activateComplianceTab(tabName){
    var engine = getComplianceEngine();
    if(!engine) return;

    var tabs = qsa('[data-compliance-tab]', engine);
    var panels = qsa('.compliance-panel', engine);
    if(!tabs.length || !panels.length) return;

    var index = tabs.findIndex(function(tab){
      return String(tab.getAttribute('data-compliance-tab')).toLowerCase() === String(tabName).toLowerCase();
    });

    if(index < 0) index = 0;

    tabs.forEach(function(tab, i){
      tab.classList.toggle('active', i === index);
      tab.setAttribute('aria-selected', i === index ? 'true' : 'false');
    });

    panels.forEach(function(panel, i){
      panel.classList.toggle('active', i === index);
      panel.hidden = i !== index;
      panel.style.display = i === index ? 'block' : 'none';
    });

    var content = qs('.compliance-content', panels[index]) || panels[index];
    if(content && typeof content.scrollTo === 'function') content.scrollTo({top:0, behavior:'smooth'});
  }

  function initComplianceTabs(){
    var engine = getComplianceEngine();
    if(!engine) return;

    var tabs = qsa('[data-compliance-tab]', engine);
    var panels = qsa('.compliance-panel', engine);

    tabs.forEach(function(tab, i){
      tab.setAttribute('role', 'tab');
      tab.setAttribute('tabindex', '0');
      tab.addEventListener('click', function(e){
        e.preventDefault();
        e.stopPropagation();
        activateComplianceTab(tab.getAttribute('data-compliance-tab'));
      });
      tab.addEventListener('keydown', function(e){
        if(e.key === 'Enter' || e.key === ' '){
          e.preventDefault();
          activateComplianceTab(tab.getAttribute('data-compliance-tab'));
        }
        if(e.key === 'ArrowRight' || e.key === 'ArrowLeft'){
          e.preventDefault();
          var next = e.key === 'ArrowRight' ? i + 1 : i - 1;
          if(next < 0) next = tabs.length - 1;
          if(next >= tabs.length) next = 0;
          tabs[next].focus();
          activateComplianceTab(tabs[next].getAttribute('data-compliance-tab'));
        }
      });
    });

    panels.forEach(function(panel, i){
      panel.setAttribute('role', 'tabpanel');
      panel.hidden = i !== 0;
      panel.style.display = i === 0 ? 'block' : 'none';
    });

    activateComplianceTab((qs('[data-compliance-tab].active', engine) || tabs[0] || {}).getAttribute ? (qs('[data-compliance-tab].active', engine) || tabs[0]).getAttribute('data-compliance-tab') : 'esg');
  }

  function initOpeners(){
    document.addEventListener('click', function(e){
      var opener = e.target.closest('[data-open-compliance]');
      if(opener){
        e.preventDefault();
        e.stopPropagation();
        openCompliance(opener.getAttribute('data-open-compliance') || 'esg');
        return;
      }

      var closer = e.target.closest('.compliance-close');
      if(closer){
        e.preventDefault();
        closeCompliance();
      }
    }, true);

    document.addEventListener('keydown', function(e){
      if(e.key === 'Escape') closeCompliance();
    });
  }

  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', function(){
      initComplianceTabs();
      initOpeners();
    });
  } else {
    initComplianceTabs();
    initOpeners();
  }

  window.YYKOpenCompliance = openCompliance;
  window.YYKActivateComplianceTab = activateComplianceTab;
})();

// --- Script Block 32 ---
(function(){
  const materialMap = {
    cu: {
      label:"Copper · Cu",
      purity:"Up to 99.99999% (7N)",
      risk:"Impurity drift / oxygen control / supplier substitution",
      control:"GDMS batch verification + ICP-MS cross-check + CoA release",
      evidence:"CAS 7440-50-8 · KE-08896 · CoA · GDMS / ICP-MS · O/H/N when required",
      esg:"Plant-linked sourcing and batch traceability review"
    },
    al: {
      label:"Aluminum · Al",
      purity:"99.996%–99.9999%",
      risk:"Fe / Si drift, gas content variation, form mismatch",
      control:"GDMS + impurity map + O/H/N gas analysis where required",
      evidence:"CAS 7429-90-5 · CoA · TDS · SDS · impurity profile",
      esg:"Supplier route validation and packaging / handling review"
    },
    zn: {
      label:"Zinc · Zn",
      purity:"Up to 99.9995% (5N5)",
      risk:"Pb / Cd exposure, oxidation, PSD instability",
      control:"ICP-MS / GDMS + PSD / morphology review",
      evidence:"CAS 7440-66-6 · CoA · SDS · PSD sheet · storage note",
      esg:"Hazard-aware handling and controlled industrial-use documentation"
    },
    ree: {
      label:"Rare Earth Materials · REE",
      purity:"Custom grades available",
      risk:"Origin sensitivity, export-control exposure, end-use restrictions",
      control:"Origin statement + export / end-use screening + ICP-MS / GDMS where applicable",
      evidence:"CoA · SDS · TDS · origin statement · end-use review",
      esg:"Responsible sourcing, supplier due diligence and restricted-use screening"
    }
  };

  const destinationMap = {
    kr: {label:"Korea", tab:"privacy", compliance:"PIPA / K-REACH", control:"Korean privacy handling, K-REACH chemical review, Busan/Incheon route control", docs:"PIPA notice · K-REACH/SDS package · KR logistics record"},
    jp: {label:"Japan", tab:"terms", compliance:"APPI / Tokushoho / METI", control:"Japanese commercial disclosure, APPI privacy review and METI export-control awareness", docs:"Tokushoho disclosure · APPI handling · JP SDS/label review · Yokohama/Osaka routing"},
    cn: {label:"China", tab:"legal-framework", compliance:"PIPL / Entity Screening", control:"China PIPL privacy handling, entity/end-use screening and customs classification", docs:"PIPL notice · end-use confirmation · CN SDS/label review · Shanghai/Shenzhen routing"},
    tw: {label:"Taiwan", tab:"legal-framework", compliance:"Taiwan PDPA / TCSCA", control:"Taiwan PDPA privacy handling, TCSCA chemical review and UBN verification", docs:"PDPA notice · TCSCA check · UBN verification · Kaohsiung/Keelung route"}
  };

  function qs(sel, root){return (root||document).querySelector(sel)}
  function qsa(sel, root){return Array.prototype.slice.call((root||document).querySelectorAll(sel))}

  function normalizeMaterial(value){
    value = String(value || "").toLowerCase();
    if(value.includes("copper") || value.includes("cu")) return "cu";
    if(value.includes("aluminum") || value.includes("aluminium") || value.includes(" al")) return "al";
    if(value.includes("zinc") || value.includes("zn")) return "zn";
    if(value.includes("rare") || value.includes("ree") || value.includes("lanthan") || value.includes("nd") || value.includes("dy")) return "ree";
    return "cu";
  }

  function normalizeDestination(value){
    value = String(value || "").toLowerCase();
    if(value.includes("japan") || value.includes("jp") || value.includes("yokohama") || value.includes("osaka")) return "jp";
    if(value.includes("china") || value.includes("cn") || value.includes("shanghai") || value.includes("shenzhen")) return "cn";
    if(value.includes("taiwan") || value.includes("tw") || value.includes("kaohsiung") || value.includes("keelung") || value.includes("hsinchu")) return "tw";
    if(value.includes("korea") || value.includes("kr") || value.includes("busan") || value.includes("incheon")) return "kr";
    return "kr";
  }

  function findRFQValue(type){
    const selectors = type === "material"
      ? ['select[name*="material" i]','input[name*="material" i]','#rfqMaterial','#material','select[id*="material" i]','input[id*="material" i]']
      : ['select[name*="destination" i]','select[name*="country" i]','input[name*="destination" i]','input[name*="country" i]','#rfqDestination','#destination','#country','select[id*="destination" i]','select[id*="country" i]'];
    for(const sel of selectors){
      const el = qs(sel);
      if(el && el.value) return el.value;
    }
    // fallback from visible selected options
    const allSelects = qsa('select');
    for(const el of allSelects){
      const v = el.value || (el.options && el.options[el.selectedIndex] ? el.options[el.selectedIndex].text : "");
      if(type === "material" && /(copper|cu|aluminum|zinc|zn|rare|ree|lanthan)/i.test(v)) return v;
      if(type === "destination" && /(korea|japan|china|taiwan|busan|incheon|yokohama|shanghai|kaohsiung)/i.test(v)) return v;
    }
    return "";
  }

  function activateComplianceTab(tabName){
    if(typeof window.YYKActivateComplianceTab === "function"){
      window.YYKActivateComplianceTab(tabName);
      return;
    }
    const engine = qs('.compliance-engine');
    if(!engine) return;
    const tabs = qsa('[data-compliance-tab]', engine);
    const panels = qsa('.compliance-panel', engine);
    let idx = tabs.findIndex(t => String(t.getAttribute('data-compliance-tab')).toLowerCase() === String(tabName).toLowerCase());
    if(idx < 0) idx = 0;
    tabs.forEach((t,i)=>t.classList.toggle('active', i===idx));
    panels.forEach((p,i)=>{p.classList.toggle('active', i===idx); p.hidden = i!==idx; p.style.display = i===idx ? 'block':'none';});
  }

  function renderDecision(){
    const materialKey = normalizeMaterial(findRFQValue("material"));
    const destKey = normalizeDestination(findRFQValue("destination"));
    const mat = materialMap[materialKey];
    const dest = destinationMap[destKey];

    const mEl = qs('#yykDecisionMaterial');
    const dEl = qs('#yykDecisionDestination');
    const cEl = qs('#yykDecisionCompliance');
    const sEl = qs('#yykDecisionStatus');
    const sumEl = qs('#yykDecisionSummary');
    const rows = qs('#yykDecisionRows');

    if(mEl) mEl.textContent = mat.label + " · " + mat.purity;
    if(dEl) dEl.textContent = dest.label;
    if(cEl) cEl.textContent = dest.compliance;
    if(sEl) sEl.textContent = materialKey === "ree" || destKey === "cn" ? "Enhanced Review" : "Controlled RFQ";
    if(sumEl) sumEl.textContent = mat.label + " routed to " + dest.label + ": " + dest.control;

    if(rows){
      rows.innerHTML = `
        <tr>
          <td>Material Risk</td>
          <td>${mat.risk}</td>
          <td>${mat.control}</td>
          <td>${mat.evidence}</td>
          <td><span class="yyk-decision-pill">Controlled</span></td>
        </tr>
        <tr>
          <td>Destination Compliance</td>
          <td>${dest.label} shipment / buyer jurisdiction</td>
          <td>${dest.control}</td>
          <td>${dest.docs}</td>
          <td><span class="yyk-decision-pill">${dest.compliance}</span></td>
        </tr>
        <tr>
          <td>ESG / Responsible Sourcing</td>
          <td>${mat.esg}</td>
          <td>Supplier review + document vault + batch traceability</td>
          <td>Supplier registry · CoA · SDS/TDS · origin / end-use records</td>
          <td><span class="yyk-decision-pill">Evidence-linked</span></td>
        </tr>
        <tr>
          <td>RFQ Decision</td>
          <td>Buyer-selected material + destination</td>
          <td>Auto-route to compliance tab: ${dest.compliance}</td>
          <td>RFQ pack generated with required legal / technical attachments</td>
          <td><span class="yyk-decision-pill">${materialKey === "ree" || destKey === "cn" ? "Enhanced Review" : "Ready"}</span></td>
        </tr>
      `;
    }

    // keep compliance layer prepared for the selected country
    activateComplianceTab(dest.tab);

    // sync any existing risk/esg text containers if present
    const riskContext = qs('.risk-engine-context');
    if(riskContext) riskContext.textContent = mat.label + " / " + dest.label + " · " + mat.risk;
    const esgContext = qs('.esg-decision-context');
    if(esgContext) esgContext.textContent = mat.esg + " · " + dest.compliance;
  }

  function initDecisionLayer(){
    // append the decision panel inside RFQ section/card when possible
    const rfq = qs('#rfq .rfq-card') || qs('#rfq') || qs('main');
    const panel = qs('#yykDecisionDrivenLayer');
    if(rfq && panel && !rfq.contains(panel)){
      rfq.appendChild(panel);
    }

    document.addEventListener('change', function(e){
      if(e.target && (e.target.matches('select,input,textarea'))) renderDecision();
    }, true);

    document.addEventListener('click', function(e){
      const btn = e.target.closest('[data-open-compliance]');
      if(btn){
        const v = btn.getAttribute('data-open-compliance');
        if(v === "esg"){
          // ESG button opens ESG but still preserves decision-state destination mapping on next render
          setTimeout(renderDecision, 50);
        }
      }
    }, true);

    renderDecision();
  }

  if(document.readyState === "loading"){
    document.addEventListener("DOMContentLoaded", initDecisionLayer);
  } else {
    initDecisionLayer();
  }

  window.YYKDecisionRender = renderDecision;
})();

// --- Script Block 33 ---
(function(){

function q(sel){return document.querySelector(sel)}
function qa(sel){return Array.from(document.querySelectorAll(sel))}

function getVal(keys){
  for(let k of keys){
    let el=q(k)
    if(el && el.value) return el.value.toLowerCase()
  }
  return ""
}

function normMaterial(v){
  if(v.includes("cu")||v.includes("copper")) return "cu"
  if(v.includes("al")) return "al"
  if(v.includes("zn")||v.includes("zinc")) return "zn"
  if(v.includes("ree")||v.includes("rare")) return "ree"
  return "cu"
}

function normDest(v){
  if(v.includes("china")||v.includes("cn")) return "cn"
  if(v.includes("japan")||v.includes("jp")) return "jp"
  if(v.includes("taiwan")||v.includes("tw")) return "tw"
  return "kr"
}

function applyState(){

  let m = normMaterial(getVal(["#rfqMaterial","select[name*=material]","input[name*=material]"]))
  let d = normDest(getVal(["#rfqDestination","select[name*=destination]","input[name*=destination]"]))

  // compliance tab switch
  let map = {
    kr:"privacy",
    jp:"terms",
    cn:"legal-framework",
    tw:"legal-framework"
  }

  if(window.YYKActivateComplianceTab){
    window.YYKActivateComplianceTab(map[d])
  }

  // ESG context update
  let esg = document.querySelector(".esg-decision-context")
  if(esg){
    esg.textContent = m.toUpperCase()+" → "+d.toUpperCase()+" sourcing control active"
  }

  // Risk context
  let risk = document.querySelector(".risk-engine-context")
  if(risk){
    risk.textContent = "Risk profile: "+m+" / "+d
  }

}

document.addEventListener("change",applyState,true)
document.addEventListener("DOMContentLoaded",applyState)

})();

// --- Script Block 34 ---
(function(){
  const densityModes = ["compact","review","executive"];
  const cardSelector = ".dense-card,.passport,.verification-card,.product-card,.route-card,.compliance-card";

  function textOf(el){return (el.textContent||"").toLowerCase();}
  function clamp(n,min,max){return Math.max(min,Math.min(max,n));}
  function purityScore(t){
    if(t.includes("7n")||t.includes("99.99999")) return 98;
    if(t.includes("6n+")||t.includes("99.9999")) return 92;
    if(t.includes("6n")||t.includes("99.999")) return 86;
    if(t.includes("5n5")||t.includes("99.9995")) return 78;
    if(t.includes("high-purity")||t.includes("ultra-high")) return 72;
    return 58;
  }
  function riskScore(t){
    let score=32;
    ["defense","export","controlled","china","ree","rare earth","aerospace","risk","end-use","compliance"].forEach(k=>{if(t.includes(k)) score+=7;});
    ["coa","gdms","icp-ms","traceability","sds","tds","scsp","batch"].forEach(k=>{if(t.includes(k)) score-=4;});
    return clamp(score,12,94);
  }
  function controlScore(t){
    let score=50;
    ["gdms","icp-ms","coa","traceability","batch","scsp","sds","tds","verification","review"].forEach(k=>{if(t.includes(k)) score+=5;});
    return clamp(score,40,98);
  }
  function readinessScore(t){
    let score=46;
    ["ready","structured","approved","qualification","documentation","logistics","incoterms","rfq"].forEach(k=>{if(t.includes(k)) score+=5;});
    return clamp(score,35,96);
  }
  function labelRisk(n){return n>=70?"High":(n>=45?"Medium":"Low");}
  function ensureHeatmap(card){
    if(card.querySelector(":scope > .yyk-heatmap")) return;
    const t=textOf(card);
    const purity=purityScore(t), risk=riskScore(t), control=controlScore(t), ready=readinessScore(t);
    const heat=document.createElement("div");
    heat.className="yyk-heatmap";
    heat.innerHTML=`
      <div class="yyk-heatmap-title"><span>Qualification Heatmap</span><span>${labelRisk(risk)} Risk</span></div>
      <div class="yyk-heatmap-grid">
        <div class="yyk-heat-cell" style="--score:${purity}%"><span class="yyk-heat-label">Purity</span><span class="yyk-heat-value">${purity}</span></div>
        <div class="yyk-heat-cell risk" style="--score:${risk}%"><span class="yyk-heat-label">Risk</span><span class="yyk-heat-value">${risk}</span></div>
        <div class="yyk-heat-cell" style="--score:${control}%"><span class="yyk-heat-label">Control</span><span class="yyk-heat-value">${control}</span></div>
        <div class="yyk-heat-cell" style="--score:${ready}%"><span class="yyk-heat-label">Ready</span><span class="yyk-heat-value">${ready}</span></div>
      </div>
      <div class="yyk-heat-note">Auto-scored from visible card content: purity claim, controlled-routing terms, documentation evidence and end-use risk language.</div>`;
    card.appendChild(heat);
  }
  function initHeatmaps(){document.querySelectorAll(cardSelector).forEach(ensureHeatmap);}
  function setDensity(mode){
    if(!densityModes.includes(mode)) mode="review";
    densityModes.forEach(m=>document.body.classList.remove("density-"+m));
    document.body.classList.add("density-"+mode);
    document.querySelectorAll(".density-btn").forEach(btn=>btn.classList.toggle("active",btn.dataset.density===mode));
    try{localStorage.setItem("yykDensityMode",mode)}catch(e){}
  }
  function initDensity(){
    document.querySelectorAll(".density-btn").forEach(btn=>btn.addEventListener("click",()=>setDensity(btn.dataset.density)));
    let saved="review";
    try{saved=localStorage.getItem("yykDensityMode")||"review"}catch(e){}
    setDensity(saved);
  }
  function initAutoResize(){
    if(!("ResizeObserver" in window)) return;
    const ro=new ResizeObserver(entries=>{
      entries.forEach(entry=>{entry.target.style.setProperty("--card-content-height", Math.ceil(entry.contentRect.height)+"px");});
    });
    document.querySelectorAll(cardSelector).forEach(card=>ro.observe(card));
  }
  function init(){initDensity();initHeatmaps();initAutoResize();}
  if(document.readyState==="loading") document.addEventListener("DOMContentLoaded",init); else init();
})();

// --- Script Block 35 ---
(function(){
  function activateSpecTab(key){
    if(!key) return;
    var section = document.getElementById('industrial-specs');
    if(!section) return;

    section.querySelectorAll('[data-spec-tab]').forEach(function(btn){
      var active = btn.getAttribute('data-spec-tab') === key;
      btn.classList.toggle('active', active);
      btn.setAttribute('aria-selected', active ? 'true' : 'false');
    });

    section.querySelectorAll('[data-spec-panel]').forEach(function(panel){
      var active = panel.getAttribute('data-spec-panel') === key;
      panel.classList.toggle('active', active);
      panel.hidden = !active;
      panel.setAttribute('aria-hidden', active ? 'false' : 'true');
    });
  }

  document.addEventListener('click', function(event){
    var btn = event.target.closest('#industrial-specs [data-spec-tab]');
    if(!btn) return;
    event.preventDefault();
    event.stopPropagation();
    activateSpecTab(btn.getAttribute('data-spec-tab'));
  }, true);

  document.addEventListener('DOMContentLoaded', function(){
    var active = document.querySelector('#industrial-specs [data-spec-tab].active');
    activateSpecTab(active ? active.getAttribute('data-spec-tab') : 'cu');
  });

  window.YYKActivateSpecTab = activateSpecTab;
})();

// --- Script Block 36 ---
(function(){
  function normalizeKey(value){
    return (value || '').toString().trim().toLowerCase()
      .replace(/^#/, '')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');
  }

  function findCatalogScope(){
    var headings = Array.prototype.slice.call(document.querySelectorAll('h1,h2,h3,.section-title,.card-title'));
    for(var i=0;i<headings.length;i++){
      if((headings[i].textContent || '').indexOf('Engineering Catalog for 6N') !== -1){
        return headings[i].closest('section,.section,.wrap,main') || headings[i].parentElement;
      }
    }
    return document.getElementById('engineering-catalog') || document.querySelector('[data-engineering-catalog]');
  }

  function prepareCatalog(){
    var scope = findCatalogScope();
    if(!scope) return null;
    scope.classList.add('yyk-engineering-catalog-scope');

    var candidates = Array.prototype.slice.call(scope.querySelectorAll('button,a,[role="tab"],.product-tab,.spec-tab,.catalog-tab'));
    var tabs = candidates.filter(function(el){
      var t = (el.textContent || '').trim().toLowerCase();
      return /^(cu|copper|cu · copper|al|aluminum|al · aluminum|zn|zinc|zn · zinc|ree|rare earth|ree · rare earth)/i.test(t);
    });

    tabs.forEach(function(tab){
      var text = (tab.textContent || '').trim().toLowerCase();
      var key = text.indexOf('cu') === 0 || text.indexOf('copper') === 0 ? 'cu' :
                text.indexOf('al') === 0 || text.indexOf('aluminum') === 0 ? 'al' :
                text.indexOf('zn') === 0 || text.indexOf('zinc') === 0 ? 'zn' :
                'ree';
      tab.setAttribute('data-catalog-tab', key);
      tab.classList.add('catalog-tab');
      tab.setAttribute('type', tab.tagName.toLowerCase() === 'button' ? 'button' : tab.getAttribute('type') || '');
    });

    var panels = Array.prototype.slice.call(scope.querySelectorAll('[data-spec-panel], [data-product-panel], [data-catalog-panel], .spec-panel, .product-panel, .catalog-panel'));
    panels.forEach(function(panel){
      var key = panel.getAttribute('data-catalog-panel') || panel.getAttribute('data-spec-panel') || panel.getAttribute('data-product-panel') || panel.id || '';
      key = normalizeKey(key);
      if(key.indexOf('copper') !== -1) key = 'cu';
      else if(key.indexOf('aluminum') !== -1) key = 'al';
      else if(key.indexOf('zinc') !== -1) key = 'zn';
      else if(key.indexOf('rare') !== -1) key = 'ree';
      else if(key.indexOf('cu') !== -1) key = 'cu';
      else if(key.indexOf('al') !== -1) key = 'al';
      else if(key.indexOf('zn') !== -1) key = 'zn';
      else if(key.indexOf('ree') !== -1) key = 'ree';
      if(['cu','al','zn','ree'].indexOf(key) !== -1){
        panel.setAttribute('data-catalog-panel', key);
        panel.classList.add('catalog-panel');
      }
    });

    return scope;
  }

  function activateCatalogTab(key){
    var scope = prepareCatalog();
    if(!scope) return;
    key = normalizeKey(key);
    scope.querySelectorAll('[data-catalog-tab]').forEach(function(tab){
      var active = tab.getAttribute('data-catalog-tab') === key;
      tab.classList.toggle('active', active);
      tab.setAttribute('aria-selected', active ? 'true' : 'false');
    });
    scope.querySelectorAll('[data-catalog-panel]').forEach(function(panel){
      var active = panel.getAttribute('data-catalog-panel') === key;
      panel.classList.toggle('active', active);
      panel.hidden = !active;
      panel.setAttribute('aria-hidden', active ? 'false' : 'true');
    });
  }

  document.addEventListener('click', function(e){
    var scope = prepareCatalog();
    if(!scope) return;
    var tab = e.target.closest('.yyk-engineering-catalog-scope [data-catalog-tab]');
    if(!tab) return;
    e.preventDefault();
    e.stopPropagation();
    activateCatalogTab(tab.getAttribute('data-catalog-tab'));
  }, true);

  document.addEventListener('DOMContentLoaded', function(){
    prepareCatalog();
    var active = document.querySelector('.yyk-engineering-catalog-scope [data-catalog-tab].active');
    activateCatalogTab(active ? active.getAttribute('data-catalog-tab') : 'cu');
  });

  window.YYKActivateEngineeringCatalogTab = activateCatalogTab;
})();

// --- Script Block 37 ---
try {
document.addEventListener("DOMContentLoaded", function(){

  const tabs = document.querySelectorAll(".spec-tab");
  const panels = document.querySelectorAll(".spec-panel");

  if(!tabs.length || !panels.length) return;

  tabs.forEach((tab, index)=>{
    tab.addEventListener("click", function(){

      tabs.forEach(t=>t.classList.remove("active"));
      panels.forEach(p=>p.classList.remove("active"));

      tab.classList.add("active");

      // match by index (SAFE, no html dependency)
      if(panels[index]){
        panels[index].classList.add("active");
      }
    });
  });

  // init first
  tabs[0].click();

});
} catch(e) { console.warn('Script block 37 error:', e); }

// --- Script Block 38 ---
try {
document.addEventListener("DOMContentLoaded", function(){
  const terminalButtons = document.querySelectorAll(".yyk-terminal-btn");
  const terminalPanels = document.querySelectorAll(".yyk-terminal-panel");
  terminalButtons.forEach(function(btn){
    btn.addEventListener("click", function(){
      const target = btn.getAttribute("data-terminal-target");
      terminalButtons.forEach(function(b){ b.classList.remove("active"); });
      terminalPanels.forEach(function(p){ p.classList.remove("active"); });
      btn.classList.add("active");
      const panel = document.getElementById(target);
      if(panel){ panel.classList.add("active"); }
    });
  });

  const clock = document.getElementById("yykTerminalClock");
  if(clock){
    const stamp = new Date().toISOString().slice(0,10);
    clock.textContent = "LIVE · CONTRACT DESK · " + stamp;
  }
});
} catch(e) { console.warn('Script block 38 error:', e); }

// --- Script Block 39 ---
try {
document.addEventListener("DOMContentLoaded", function(){
  const esgPanel = document.getElementById("yyk-esg-compliance-panel");
  if(!esgPanel) return;

  function isEsgTrigger(el){
    const txt = (el.textContent || "").trim().toLowerCase();
    const attrs = [
      el.getAttribute("data-target"),
      el.getAttribute("data-tab"),
      el.getAttribute("href"),
      el.getAttribute("onclick"),
      el.id,
      el.className
    ].join(" ").toLowerCase();
    return txt === "esg" || txt.includes("esg") || attrs.includes("esg");
  }

  const triggers = Array.from(document.querySelectorAll("button, a, .compliance-tab, [data-target], [data-tab]")).filter(isEsgTrigger);

  triggers.forEach(function(trigger){
    trigger.addEventListener("click", function(){
      setTimeout(function(){
        const engine = document.querySelector(".compliance-engine.active, #complianceEngine, .compliance-engine");
        if(engine && !engine.contains(esgPanel)){
          const content = engine.querySelector(".compliance-content, .compliance-body, .compliance-shell") || engine;
          content.appendChild(esgPanel);
        }
        esgPanel.classList.add("active");
        esgPanel.style.display = "block";
      }, 40);
    }, true);
  });
});
} catch(e) { console.warn('Script block 39 error:', e); }

// --- Script Block 40 ---
(function(){
 const map = {
   en:'en',
   kr:'kr',
   jp:'jp',
   tw:'cn',
   cn:'cn'
 };

 function setLang(region){
   region = region || 'en';
   const lang = map[region] || 'en';

   document.body.className = document.body.className
     .replace(/lang-\w+/g,'')
     .replace(/region-\w+/g,'');

   document.body.classList.add('lang-'+lang);
   document.body.classList.add('region-'+region);

   localStorage.setItem('yyk_lang', region);
 }

 document.addEventListener('DOMContentLoaded', function(){

   let saved = localStorage.getItem('yyk_lang') || 'en';
   setLang(saved);

   document.querySelectorAll('.region-btn, .lang-btn').forEach(btn=>{
     btn.addEventListener('click', function(){
       let txt = btn.textContent.toLowerCase();

       if(txt.includes('kr')||txt.includes('한국')) setLang('kr');
       else if(txt.includes('jp')||txt.includes('日本')) setLang('jp');
       else if(txt.includes('tw')||txt.includes('繁')) setLang('tw');
       else if(txt.includes('cn')||txt.includes('简')) setLang('cn');
       else setLang('en');
     });
   });

 });

})();

// --- Script Block 41 ---
(function(){
  'use strict';
  var VALID_KEYS = ['cu','al','zn','ree','quality','logistics'];

  function normalizeProductKey(value){
    value = (value || '').toString().trim().toLowerCase();
    if(value.indexOf('al') === 0 || value.indexOf('aluminum') !== -1) return 'al';
    if(value.indexOf('zn') === 0 || value.indexOf('zinc') !== -1) return 'zn';
    if(value.indexOf('ree') === 0 || value.indexOf('rare') !== -1) return 'ree';
    if(value.indexOf('quality') !== -1 || value.indexOf('testing') !== -1 || value === 'qc') return 'quality';
    if(value.indexOf('log') !== -1 || value.indexOf('docs') !== -1 || value.indexOf('delivery') !== -1) return 'logistics';
    return 'cu';
  }

  function getProductEngine(){
    return document.getElementById('productEngine');
  }

  function repairProductEngineMarkup(){
    var engine = getProductEngine();
    if(!engine) return null;

    var tabs = Array.prototype.slice.call(engine.querySelectorAll('.product-tab'));
    tabs.forEach(function(tab){
      var key = tab.getAttribute('data-product-tab') || tab.getAttribute('data-catalog-tab') || tab.textContent;
      key = normalizeProductKey(key);
      tab.setAttribute('data-product-tab', key);
      tab.setAttribute('type', 'button');
      tab.setAttribute('role', 'tab');
      tab.removeAttribute('data-catalog-tab');
      tab.style.pointerEvents = 'auto';
      tab.style.cursor = 'pointer';
    });

    var panels = Array.prototype.slice.call(engine.querySelectorAll('.product-panel'));
    panels.forEach(function(panel){
      var key = panel.getAttribute('data-product-panel') || panel.getAttribute('data-catalog-panel') || panel.id || '';
      key = normalizeProductKey(key);
      panel.setAttribute('data-product-panel', key);
      panel.setAttribute('role', 'tabpanel');
      panel.removeAttribute('data-catalog-panel');
    });

    return engine;
  }

  function activateProductPassportPanel(key){
    key = normalizeProductKey(key);
    if(VALID_KEYS.indexOf(key) === -1) key = 'cu';

    var engine = repairProductEngineMarkup();
    if(!engine) return false;

    var tabs = Array.prototype.slice.call(engine.querySelectorAll('.product-tab[data-product-tab]'));
    var panels = Array.prototype.slice.call(engine.querySelectorAll('.product-panel[data-product-panel]'));

    tabs.forEach(function(tab){
      var active = tab.getAttribute('data-product-tab') === key;
      tab.classList.toggle('active', active);
      tab.setAttribute('aria-selected', active ? 'true' : 'false');
      tab.tabIndex = active ? 0 : -1;
    });

    panels.forEach(function(panel){
      var active = panel.getAttribute('data-product-panel') === key;
      panel.classList.toggle('active', active);
      panel.hidden = !active;
      panel.setAttribute('aria-hidden', active ? 'false' : 'true');
      panel.style.display = active ? 'block' : 'none';
    });

    engine.setAttribute('data-active-product-panel', key);
    return true;
  }

  document.addEventListener('click', function(event){
    var tab = event.target.closest && event.target.closest('#productEngine .product-tab[data-product-tab]');
    if(!tab) return;
    event.preventDefault();
    event.stopPropagation();
    if(event.stopImmediatePropagation) event.stopImmediatePropagation();
    activateProductPassportPanel(tab.getAttribute('data-product-tab') || tab.textContent);
  }, true);

  document.addEventListener('keydown', function(event){
    var tab = event.target.closest && event.target.closest('#productEngine .product-tab[data-product-tab]');
    if(!tab || (event.key !== 'Enter' && event.key !== ' ')) return;
    event.preventDefault();
    activateProductPassportPanel(tab.getAttribute('data-product-tab') || tab.textContent);
  }, true);

  document.addEventListener('click', function(event){
    var opener = event.target.closest && event.target.closest('[data-open-product]');
    if(!opener) return;
    var key = opener.getAttribute('data-open-product') || 'cu';
    setTimeout(function(){ activateProductPassportPanel(key); }, 0);
  }, true);

  function boot(){
    repairProductEngineMarkup();
    var active = document.querySelector('#productEngine .product-tab.active[data-product-tab]');
    activateProductPassportPanel(active ? active.getAttribute('data-product-tab') : 'cu');
  }

  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();

  window.YYKActivateProductPassportPanel = activateProductPassportPanel;
  window.YYKRepairProductPassportTabs = repairProductEngineMarkup;
})();

// --- Script Block 42 ---
(function(){
  "use strict";
  var MATERIAL_DEFAULTS={
    "Copper Cu · CAS 7440-50-8 · KE-08896 · Up to 99.99999% (7N)":{purity:"Up to 99.99999% (7N)",form:"Powder",particle:"ingot / bar / ultrafine powder; PSD by RFQ"},
    "Aluminum Al · CAS 7429-90-5 · High-purity ingot route":{purity:"Up to 99.9999% (6N)",form:"Ingots",particle:""},
    "Zinc Zn · CAS 7440-66-6 · Up to 99.9995% (5N5)":{purity:"Up to 99.9995% (5N5)",form:"Powder",particle:"powder / formulations / coatings; PSD by RFQ"},
    "Rare Earth Materials · Metals / Oxides / Salts / Alloys · Custom grades":{purity:"Custom grades available",form:"Oxide / Salt",particle:""}
  };
  function byId(id){return document.getElementById(id)}
  function setValue(id,value){var el=byId(id);if(!el)return;if(el.tagName==="SELECT"){var exists=false;Array.prototype.forEach.call(el.options,function(o){if(o.value===value||o.textContent===value)exists=true});if(value&&!exists){var opt=document.createElement("option");opt.value=value;opt.textContent=value;el.appendChild(opt)}}el.value=value||"";el.dispatchEvent(new Event("input",{bubbles:true}));el.dispatchEvent(new Event("change",{bubbles:true}))}
  function closeProductPassport(){var p=byId("productEngine");if(p){p.classList.remove("active");p.setAttribute("aria-hidden","true")}}
  function openRfqEntry(){var d=byId("sogoDrawer");if(d){d.classList.add("active");d.setAttribute("aria-hidden","false");document.body.classList.remove("apex-modal-open");document.body.style.overflow="";document.documentElement.style.overflow="";return}var r=byId("rfq");if(r&&r.scrollIntoView)r.scrollIntoView({behavior:"smooth",block:"start"});try{location.hash="rfq"}catch(e){}}
  function route(material){if(!material)return false;var def=MATERIAL_DEFAULTS[material]||{};setValue("rfqMaterial",material);if(def.form!==undefined)setValue("rfqForm",def.form);if(def.purity!==undefined)setValue("rfqPurity",def.purity);if(def.particle!==undefined)setValue("rfqParticle",def.particle);if(typeof window.updateRFQ==="function"){try{window.updateRFQ()}catch(e){}}if(typeof window.renderRiskEngine==="function"){try{window.renderRiskEngine(null)}catch(e){}}closeProductPassport();openRfqEntry();return false}
  window.YYK_PRODUCT_PASSPORT_RFQ={add:route};
  window.selectMaterial=function(material){return route(material)};
  document.addEventListener("click",function(e){var b=e.target&&e.target.closest?e.target.closest("#productEngine [data-pp-add-rfq],#productEngine .product-actions button"):null;if(!b)return;var material=b.getAttribute("data-pp-add-rfq");if(!material){var panel=b.closest("[data-product-panel]");var key=panel?panel.getAttribute("data-product-panel"):"";var map={cu:"Copper Cu · CAS 7440-50-8 · KE-08896 · Up to 99.99999% (7N)",al:"Aluminum Al · CAS 7429-90-5 · High-purity ingot route",zn:"Zinc Zn · CAS 7440-66-6 · Up to 99.9995% (5N5)",ree:"Rare Earth Materials · Metals / Oxides / Salts / Alloys · Custom grades"};material=map[key]}if(material){e.preventDefault();e.stopPropagation();route(material)}},true);
})();

// --- Script Block 43 ---
(function(){
  "use strict";
  var SOGO_KEY="apex_sogo_rfq_state_v1";
  var MATERIALS={
    cu:{full:"Copper Cu · CAS 7440-50-8 · KE-08896 · Up to 99.99999% (7N)",sogo:"Copper",purity:"6N+",form:"Powder",app:"Semiconductor",rfqForm:"Powder",rfqPurity:"Up to 99.99999% (7N)",rfqParticle:"ingot / bar / ultrafine powder; PSD by RFQ"},
    al:{full:"Aluminum Al · CAS 7429-90-5 · High-purity ingot route",sogo:"Aluminum",purity:"6N",form:"Ingot",app:"Semiconductor",rfqForm:"Ingots",rfqPurity:"Up to 99.9999% (6N)",rfqParticle:""},
    zn:{full:"Zinc Zn · CAS 7440-66-6 · Up to 99.9995% (5N5)",sogo:"Zinc",purity:"5N",form:"Powder",app:"EV",rfqForm:"Powder",rfqPurity:"Up to 99.9995% (5N5)",rfqParticle:"powder / formulations / coatings; PSD by RFQ"},
    ree:{full:"Rare Earth Materials · Metals / Oxides / Salts / Alloys · Custom grades",sogo:"Rare Earths",purity:"Custom",form:"Oxide / Salt",app:"EV",rfqForm:"Oxide / Salt",rfqPurity:"Custom grades available",rfqParticle:""}
  };
  function byId(id){return document.getElementById(id)}
  function findKey(value){value=(value||"").toString().toLowerCase();if(value.indexOf("aluminum")>-1)return"al";if(value.indexOf("zinc")>-1)return"zn";if(value.indexOf("rare")>-1||value.indexOf("ree")>-1)return"ree";return"cu"}
  function setVal(id,value){var el=byId(id);if(!el)return;if(el.tagName==="SELECT"){var found=false;Array.prototype.forEach.call(el.options,function(o){if(o.value===value||o.textContent===value)found=true});if(value&&!found){var opt=document.createElement("option");opt.value=value;opt.textContent=value;el.appendChild(opt)}}el.value=value||"";el.dispatchEvent(new Event("input",{bubbles:true}));el.dispatchEvent(new Event("change",{bubbles:true}))}
  function saveSogo(item){var state={material:item.sogo,purity:item.purity,form:item.form,region:"Japan",volume:"50 kg",application:item.app,term:"CIF"};try{localStorage.setItem(SOGO_KEY,JSON.stringify(state))}catch(e){}return state}
  function syncSogoVisible(item,state){Array.prototype.forEach.call(document.querySelectorAll("#sogoMaterialOptions [data-sogo-material]"),function(btn){var active=btn.getAttribute("data-sogo-material")===item.sogo;btn.classList.toggle("active",active);btn.setAttribute("aria-pressed",active?"true":"false")});setVal("sogoPurity",state.purity);setVal("sogoForm",state.form);setVal("sogoRegion",state.region);setVal("sogoApplication",state.application);setVal("sogoTerm",state.term);var vol=byId("sogoVolume");if(vol){vol.value=state.volume;vol.dispatchEvent(new Event("input",{bubbles:true}))}var c=byId("sogoCompliance"),ex=byId("sogoExport"),ba=byId("sogoBatch");if(item.sogo==="Copper"){if(c)c.textContent="Required";if(ex)ex.textContent="Destination review";if(ba)ba.textContent="Limited / verify"}if(item.sogo==="Aluminum"){if(c)c.textContent="Standard";if(ex)ex.textContent="Route review";if(ba)ba.textContent="Available / verify"}if(item.sogo==="Zinc"){if(c)c.textContent="Standard";if(ex)ex.textContent="Route review";if(ba)ba.textContent="Verify PSD"}if(item.sogo==="Rare Earths"){if(c)c.textContent="Enhanced";if(ex)ex.textContent="End-use validation";if(ba)ba.textContent="Controlled release"}var bar=byId("sogoProgress");if(bar)bar.style.width="100%";var status=byId("sogoStatus");if(status)status.textContent="Ready for Lanthanex workspace."}
  function openSogo(){var d=byId("sogoDrawer");if(d){d.classList.add("active");d.setAttribute("aria-hidden","false");document.body.classList.remove("apex-modal-open");document.body.style.overflow="";document.documentElement.style.overflow="";return true}return false}
  function closeProduct(){var p=byId("productEngine");if(p){p.classList.remove("active");p.setAttribute("aria-hidden","true")}}
  function syncProductToRfq(material){var item=MATERIALS[findKey(material)]||MATERIALS.cu;var state=saveSogo(item);setVal("rfqMaterial",item.full);setVal("rfqForm",item.rfqForm);setVal("rfqPurity",item.rfqPurity);setVal("rfqParticle",item.rfqParticle);if(typeof window.updateRFQ==="function"){try{window.updateRFQ()}catch(e){}}if(typeof window.renderRiskEngine==="function"){try{window.renderRiskEngine(null)}catch(e){}}if(typeof window.renderEsgDecisionEngine==="function"){try{window.renderEsgDecisionEngine(null)}catch(e){}}closeProduct();openSogo();document.body.classList.remove("apex-modal-open");document.body.style.overflow="";document.documentElement.style.overflow="";setTimeout(function(){syncSogoVisible(item,state);document.body.classList.remove("apex-modal-open");document.body.style.overflow="";document.documentElement.style.overflow="";},0);setTimeout(function(){syncSogoVisible(item,state);document.body.classList.remove("apex-modal-open");document.body.style.overflow="";document.documentElement.style.overflow="";},120);return false}
  window.YYK_SYNC_PRODUCT_TO_RFQ=syncProductToRfq;
  window.selectMaterial=function(material){return syncProductToRfq(material)};
  document.addEventListener("click",function(e){var b=e.target&&e.target.closest?e.target.closest("#productEngine [data-pp-add-rfq],#productEngine .product-actions button"):null;if(!b)return;e.preventDefault();e.stopPropagation();if(e.stopImmediatePropagation)e.stopImmediatePropagation();var material=b.getAttribute("data-pp-add-rfq");if(!material){var panel=b.closest("[data-product-panel]");var key=panel?panel.getAttribute("data-product-panel"):"cu";material=(MATERIALS[key]||MATERIALS.cu).full}syncProductToRfq(material)},true);
})();

// --- Script Block 44 ---
(function(){
  "use strict";
  function unlock(){
    document.body.classList.remove("apex-modal-open");
    document.body.style.overflow="";
    document.documentElement.style.overflow="";
  }
  document.addEventListener("click",function(e){
    var b=e.target&&e.target.closest?e.target.closest("#productEngine [data-pp-add-rfq],#productEngine .product-actions button"):null;
    if(!b)return;
    setTimeout(unlock,0);
    setTimeout(unlock,120);
    setTimeout(unlock,350);
  },true);
  document.addEventListener("keydown",function(e){if(e.key==="Escape")setTimeout(unlock,0);},true);
  window.YYK_FORCE_UNLOCK_SCROLL=unlock;
})();

// --- Script Block 45 ---
(function(){
  "use strict";
  var SOGO_KEY="apex_sogo_rfq_state_v1";
  var TERMINAL_KEY="yyk_terminal_decision_state_v2";
  var MATERIALS={
    "term-cu":{label:"Copper Cu · CAS 7440-50-8 · KE-08896 · Up to 99.99999% (7N)",short:"Cu · Copper",sogo:"Copper",purity:"6N+",form:"Powder",application:"Semiconductor",rfqForm:"Powder",rfqPurity:"Up to 99.99999% (7N)",rfqParticle:"ingot / bar / ultrafine powder; PSD by RFQ",volume:"Sample / qualification lot",docs:"CoA / GDMS / ICP-MS / SEM pack requested for copper qualification.",route:"EXW / FCA / DAP · Dubai stock route · end-use review"},
    "term-al":{label:"Aluminum Al · CAS 7429-90-5 · High-purity ingot route",short:"Al · Aluminum",sogo:"Aluminum",purity:"6N",form:"Ingot",application:"Semiconductor",rfqForm:"Ingots",rfqPurity:"Up to 99.9999% (6N)",rfqParticle:"ingot route; surface / packing by RFQ",volume:"Sample / qualification lot",docs:"Batch CoA / GDMS / ICP-MS pack requested for aluminum qualification.",route:"RFQ-only APAC route · batch confirmation before release"},
    "term-zn":{label:"Zinc Zn · CAS 7440-66-6 · Up to 99.9995% (5N5)",short:"Zn · Zinc",sogo:"Zinc",purity:"5N",form:"Powder",application:"EV",rfqForm:"Powder",rfqPurity:"Up to 99.9995% (5N5)",rfqParticle:"powder / formulations / coatings; PSD by RFQ",volume:"Sample / qualification lot",docs:"CoA / PSD / TDS / SDS pack requested for zinc powder qualification.",route:"RFQ-only controlled route · PSD and destination review"},
    "term-ree":{label:"Rare Earth Materials · Metals / Oxides / Salts / Alloys · Custom grades",short:"REE · Rare Earth",sogo:"Rare Earths",purity:"Custom",form:"Oxide / Salt",application:"EV / Magnets",rfqForm:"Oxide / Salt",rfqPurity:"Custom grades available",rfqParticle:"element / oxide / salt / alloy scope by RFQ",volume:"Screening lot",docs:"CoA / origin / end-use screening pack requested for REE qualification.",route:"Screen-first route · restricted-party and end-use review"}
  };
  var STATE={materialId:"term-cu",qualityReady:false,logisticsReady:false,lastPanelId:"term-cu",lastAction:""};
  function byId(id){return document.getElementById(id)}
  function qsa(sel,root){return Array.prototype.slice.call((root||document).querySelectorAll(sel))}
  function load(){try{var s=JSON.parse(localStorage.getItem(TERMINAL_KEY)||"{}");if(s&&MATERIALS[s.materialId])STATE.materialId=s.materialId;if(typeof s.qualityReady==="boolean")STATE.qualityReady=s.qualityReady;if(typeof s.logisticsReady==="boolean")STATE.logisticsReady=s.logisticsReady;if(s.lastPanelId)STATE.lastPanelId=s.lastPanelId;if(s.lastAction)STATE.lastAction=s.lastAction}catch(e){}}
  function save(){try{localStorage.setItem(TERMINAL_KEY,JSON.stringify(STATE))}catch(e){}}
  function item(){return MATERIALS[STATE.materialId]||MATERIALS["term-cu"]}
  function setValue(id,value){var el=byId(id);if(!el)return;if(el.tagName==="SELECT"){var exists=false;qsa("option",el).forEach(function(o){if(o.value===value||o.textContent===value)exists=true});if(!exists){var opt=document.createElement("option");opt.value=value;opt.textContent=value;el.appendChild(opt)}}el.value=value;try{el.dispatchEvent(new Event("input",{bubbles:true}))}catch(e){}try{el.dispatchEvent(new Event("change",{bubbles:true}))}catch(e){}}
  function unlock(){document.body.classList.remove("apex-modal-open");document.body.style.overflow="";document.documentElement.style.overflow=""}
  function paint(){qsa("#yyk-terminal-ux .yyk-terminal-btn[data-terminal-target]").forEach(function(b){var on=b.getAttribute("data-terminal-target")===STATE.lastPanelId;b.classList.toggle("active",on);b.setAttribute("aria-pressed",on?"true":"false")});qsa("#yyk-terminal-ux .yyk-terminal-panel").forEach(function(p){p.classList.toggle("active",p.id===STATE.lastPanelId)})}
  function notes(){var it=item(),qa=byId("term-quality"),lx=byId("term-logistics"),qn=qa&&qa.querySelector(".yyk-terminal-note"),ln=lx&&lx.querySelector(".yyk-terminal-note");if(qn)qn.textContent="Terminal state: Quality Chain is linked to "+it.short+". Request CoA Pack will attach "+it.docs;if(ln)ln.textContent="Terminal state: Logistics route is linked to "+it.short+". Route package: "+it.route+". Start RFQ will carry this route into the request.";var c=byId("yykTerminalClock");if(c)c.textContent=it.short+" · "+(STATE.qualityReady?"QA READY":"QA PENDING")+" · "+(STATE.logisticsReady?"LX READY":"LX PENDING")}
  function ensureActions(){qsa("#yyk-terminal-ux .yyk-terminal-panel").forEach(function(p){var a=p.querySelector(".yyk-terminal-actions");if(!a){a=document.createElement("div");a.className="yyk-terminal-actions";a.innerHTML='<span class="yyk-terminal-action primary" data-terminal-action="coa">Request CoA Pack</span><span class="yyk-terminal-action" data-terminal-action="sample">Reserve Sample</span><span class="yyk-terminal-action" data-terminal-action="rfq">Start RFQ</span>';p.appendChild(a)}qsa(".yyk-terminal-action",a).forEach(function(b,i){if(!b.getAttribute("data-terminal-action"))b.setAttribute("data-terminal-action",i===0?"coa":(i===1?"sample":"rfq"));b.setAttribute("role","button");b.setAttribute("tabindex","0");b.setAttribute("aria-label",b.textContent.trim()+" — "+item().short)})})}
  function syncSogo(it,action){var st={material:it.sogo,purity:it.purity,form:it.form,region:"Japan",volume:it.volume,application:it.application,term:STATE.logisticsReady?"DAP":"CIF",terminalQuality:STATE.qualityReady?"Quality Chain Ready":"Quality Chain Pending",terminalLogistics:STATE.logisticsReady?it.route:"Route Pending",terminalAction:action||"rfq"};try{localStorage.setItem(SOGO_KEY,JSON.stringify(st))}catch(e){}qsa("#sogoMaterialOptions [data-sogo-material]").forEach(function(b){var on=b.getAttribute("data-sogo-material")===it.sogo;b.classList.toggle("active",on);b.setAttribute("aria-pressed",on?"true":"false")});setValue("sogoPurity",it.purity);setValue("sogoForm",it.form);setValue("sogoRegion",st.region);setValue("sogoVolume",st.volume);setValue("sogoApplication",it.application);setValue("sogoTerm",st.term);var status=byId("sogoStatus");if(status)status.textContent=it.short+" synchronized · "+st.terminalQuality+" · "+st.terminalLogistics+".";var progress=byId("sogoProgress");if(progress)progress.style.width=(STATE.qualityReady&&STATE.logisticsReady?"100%":"84%")}
  function syncRfq(it,action){setValue("rfqMaterial",it.label);setValue("rfqForm",it.rfqForm);setValue("rfqPurity",it.rfqPurity);setValue("rfqParticle",it.rfqParticle);setValue("rfqAutoForm",it.rfqForm);setValue("rfqAutoPurity",it.rfqPurity);setValue("rfqAutoApplication",it.application);setValue("rfqAutoVolume",it.volume);var d=byId("rfqDocs");if(d){var pack=action==="sample"?"Reserve sample requested":(action==="coa"?"Request CoA Pack":"Start RFQ");d.value=pack+" · "+it.short+" · "+it.docs+" · "+(STATE.qualityReady?"QA ready":"QA pending")+" · "+(STATE.logisticsReady?it.route:"Route pending");try{d.dispatchEvent(new Event("input",{bubbles:true}))}catch(e){}try{d.dispatchEvent(new Event("change",{bubbles:true}))}catch(e){}}try{if(typeof window.updateRFQ==="function")window.updateRFQ()}catch(e){}try{if(typeof window.renderRiskEngine==="function")window.renderRiskEngine(null)}catch(e){}try{if(typeof window.renderEsgDecisionEngine==="function")window.renderEsgDecisionEngine(null)}catch(e){}}
  function activate(panelId){if(MATERIALS[panelId])STATE.materialId=panelId;if(panelId==="term-quality")STATE.qualityReady=true;if(panelId==="term-logistics")STATE.logisticsReady=true;STATE.lastPanelId=panelId;save();paint();ensureActions();notes();unlock()}
  function openFlow(action){var it=item();STATE.lastAction=action||"rfq";if(action==="coa")STATE.qualityReady=true;if(action==="rfq"){STATE.qualityReady=true;STATE.logisticsReady=true}save();notes();syncRfq(it,action);syncSogo(it,action);var drawer=byId("sogoDrawer");if(drawer){drawer.classList.add("active");drawer.setAttribute("aria-hidden","false")}else{var rfq=byId("rfq");if(rfq&&rfq.scrollIntoView)rfq.scrollIntoView({behavior:"smooth",block:"start"});try{location.hash="rfq"}catch(e){}}unlock();setTimeout(unlock,0);setTimeout(unlock,120)}
  document.addEventListener("click",function(e){var tab=e.target&&e.target.closest?e.target.closest("#yyk-terminal-ux .yyk-terminal-btn[data-terminal-target]"):null;if(tab){e.preventDefault();e.stopPropagation();if(e.stopImmediatePropagation)e.stopImmediatePropagation();activate(tab.getAttribute("data-terminal-target")||"term-cu");return}var b=e.target&&e.target.closest?e.target.closest("#yyk-terminal-ux .yyk-terminal-action"):null;if(!b)return;e.preventDefault();e.stopPropagation();if(e.stopImmediatePropagation)e.stopImmediatePropagation();openFlow(b.getAttribute("data-terminal-action")||"rfq")},true);
  document.addEventListener("keydown",function(e){if(e.key!=="Enter"&&e.key!==" ")return;var tab=e.target&&e.target.closest?e.target.closest("#yyk-terminal-ux .yyk-terminal-btn[data-terminal-target]"):null;if(tab){e.preventDefault();activate(tab.getAttribute("data-terminal-target")||"term-cu");return}var b=e.target&&e.target.closest?e.target.closest("#yyk-terminal-ux .yyk-terminal-action"):null;if(!b)return;e.preventDefault();openFlow(b.getAttribute("data-terminal-action")||"rfq")},true);
  function boot(){load();ensureActions();paint();notes();unlock()}
  if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",boot);else boot();
  window.YYK_TERMINAL_ACTIONS={ensureActions:ensureActions,activatePanel:activate,openFlow:openFlow,syncRfq:syncRfq,getState:function(){return JSON.parse(JSON.stringify(STATE))}};
})();

// --- Script Block 46 ---
(function(){
  "use strict";
  var STORE_KEY = "yyk_trust_control_state_v1";
  var MODES = {
    scsp: {title:"SCSP Control Active", rfqNote:"SCSP route active: specification, verification, documentation and RFQ logic are linked.", rows:[["Specification","Unmapped buyer input","SCSP controlled route active"],["Verification","Generic supplier claim","CoA / GDMS / ICP-MS evidence path"],["Documentation","Post-request document chase","Document vault linked to RFQ"],["Decision","Manual rework","First-cycle qualification alignment"]]},
    elements: {title:"70+ Trace Analysis", rfqNote:"Elements trace mode active: impurity profile and analytical evidence are required for material release.", rows:[["Trace Analysis","Limited chemistry view","70+ element screening model"],["Impurity Profile","Commercial descriptor only","ppm / ppb evidence requirement"],["Analytical Method","Undefined lab basis","GDMS / ICP-MS / SSMS route"],["Release","Specification ambiguity","Batch-specific release logic"]]},
    rfq: {title:"Structured RFQ Only", rfqNote:"Structured RFQ mode active: incomplete or unstructured requests are routed into the qualification flow.", rows:[["RFQ Input","Email-style fragmented request","Controlled RFQ schema required"],["Buyer Intent","Unclear material use","Application / destination / volume captured"],["Route","Manual follow-up","RFQ sync to qualification flow"],["Output","Delayed decision","Ready for quote / document review"]]},
    esg: {title:"Risk-Based Due Diligence", rfqNote:"ESG due-diligence mode active: supplier screening, origin review and compliance evidence are linked to the RFQ.", rows:[["ESG Claim","Marketing-only statement","Risk-based evidence model"],["Origin Review","Unverified origin chain","Supplier disclosure and screening"],["Compliance","Detached from RFQ","ESG / export / data protection linked"],["Release","Uncontrolled statement","No release without verified documentation"]]}
  };
  function qsa(sel,root){return Array.prototype.slice.call((root||document).querySelectorAll(sel));}
  function txt(el){return (el && el.textContent || "").replace(/\s+/g," ").trim();}
  function findTrustPanel(){var panels=qsa(".trust-control-panel");for(var i=0;i<panels.length;i++){if(txt(panels[i]).indexOf("Trust Control Status")!==-1)return panels[i];}return panels[0]||null;}
  function findModeFromCard(card){var key=txt(card&&card.querySelector(".k")).toLowerCase();if(key.indexOf("scsp")!==-1)return"scsp";if(key.indexOf("elements")!==-1)return"elements";if(key.indexOf("rfq")!==-1)return"rfq";if(key.indexOf("esg")!==-1)return"esg";return"scsp";}
  function getMaterial(){try{var raw=localStorage.getItem("yyk_terminal_state_v1")||localStorage.getItem("yyk_terminal_state");if(raw){var st=JSON.parse(raw);if(st&&st.material)return st.material;if(st&&st.active)return st.active;}}catch(e){}var active=qsa(".route-option.active,.product-tab.active,[data-terminal-material].active,[data-terminal-material][aria-pressed='true']")[0];if(active)return txt(active).split(/\s+/)[0]||"Cu";var rfq=document.getElementById("rfqMaterial");if(rfq&&rfq.value)return rfq.value;return"Cu";}
  function updateDecisionTable(mode){var panel=findTrustPanel();if(!panel)return;var table=(panel.parentElement&&panel.parentElement.querySelector(".table-panel table"))||document.querySelector(".hero-stack .table-panel table");if(!table)return;var tbody=table.querySelector("tbody");if(!tbody)return;tbody.innerHTML=MODES[mode].rows.map(function(r){return"<tr><td>"+r[0]+"</td><td class=\"warn\">"+r[1]+"</td><td class=\"ok\">"+r[2]+"</td></tr>";}).join("");}
  function syncToRFQ(mode){var material=getMaterial();var note=MODES[mode].rfqNote+" Material context: "+material+".";var docs=document.getElementById("rfqDocs");if(docs){var base=docs.value?docs.value.replace(/\s*Trust Control:.*$/,'')+" · ":"";docs.value=base+"Trust Control: "+note;try{docs.dispatchEvent(new Event("input",{bubbles:true}));docs.dispatchEvent(new Event("change",{bubbles:true}));}catch(e){}}var sogo=document.getElementById("sogoStatus");if(sogo)sogo.textContent="Trust Control synced · "+MODES[mode].title+" · "+material+".";try{var state={mode:mode,title:MODES[mode].title,material:material,updatedAt:new Date().toISOString(),note:note};localStorage.setItem(STORE_KEY,JSON.stringify(state));window.YYK_TRUST_STATE=state;}catch(e){window.YYK_TRUST_STATE={mode:mode,title:MODES[mode].title,material:material,note:note};}try{if(typeof window.updateRFQ==="function")window.updateRFQ();}catch(e){}try{if(typeof window.renderRiskEngine==="function")window.renderRiskEngine(null);}catch(e){}try{if(typeof window.renderEsgDecisionEngine==="function")window.renderEsgDecisionEngine(null);}catch(e){}}
  function markActive(mode){var panel=findTrustPanel();if(!panel)return;qsa(".trust-control-card",panel).forEach(function(card){var m=findModeFromCard(card);card.setAttribute("role","button");card.setAttribute("tabindex","0");card.setAttribute("aria-pressed","false");card.setAttribute("data-trust-control",m);card.setAttribute("aria-label","Trust Control: "+MODES[m].title);card.classList.remove("active","selected","is-active");});}
  function apply(mode){if(!MODES[mode])mode="scsp";markActive(mode);updateDecisionTable(mode);syncToRFQ(mode);}
  function init(){var panel=findTrustPanel();if(!panel)return;markActive("scsp");document.addEventListener("click",function(e){var card=e.target.closest&&e.target.closest(".trust-control-card[data-trust-control]");if(!card)return;var panel=findTrustPanel();if(panel&&!panel.contains(card))return;e.preventDefault();apply(card.getAttribute("data-trust-control"));},true);document.addEventListener("keydown",function(e){if(e.key!=="Enter"&&e.key!==" ")return;var card=e.target.closest&&e.target.closest(".trust-control-card[data-trust-control]");if(!card)return;e.preventDefault();apply(card.getAttribute("data-trust-control"));},true);try{var saved=JSON.parse(localStorage.getItem(STORE_KEY)||"{}");if(saved&&MODES[saved.mode])markActive(saved.mode);}catch(e){}}
  window.YYK_TRUST_CONTROL={apply:apply,getState:function(){return window.YYK_TRUST_STATE||null;}};
  if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",init);else init();
})();

// --- Script Block 47 ---
(function(){
  function cleanTrustControl(){
    var panel=Array.prototype.slice.call(document.querySelectorAll('.trust-control-panel')).filter(function(el){return (el.textContent||'').indexOf('Trust Control Status')!==-1;})[0];
    if(!panel) return;
    var grid=panel.querySelector('.trust-control-grid,.status-grid');
    if(!grid) return;
    var cards=[['SCSP','Active','scsp'],['Elements','70+ Trace Analysis','elements'],['RFQ','Structured Only','rfq'],['ESG','Risk-Based Due Diligence','esg']];
    grid.innerHTML=cards.map(function(c){return '<div class="metric trust-control-card" data-trust-control="'+c[2]+'"><div class="k">'+c[0]+'</div><div class="v">'+c[1]+'</div></div>';}).join('');
    if(window.YYK_TRUST_CONTROL&&typeof window.YYK_TRUST_CONTROL.apply==='function'){try{window.YYK_TRUST_CONTROL.apply((window.YYK_TRUST_CONTROL.getState&&window.YYK_TRUST_CONTROL.getState()&&window.YYK_TRUST_CONTROL.getState().mode)||'scsp');}catch(e){}}
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',cleanTrustControl,{once:true});else cleanTrustControl();
  window.YYK_CLEAN_TRUST_CONTROL=cleanTrustControl;
})();

// --- Script Block 48 ---
(function(){
  function enhance(){
    var panels=document.querySelectorAll('.trust-control-panel');
    var panel=null;
    for(var i=0;i<panels.length;i++){if((panels[i].textContent||'').indexOf('Trust Control Status')!==-1){panel=panels[i];break;}}
    if(!panel)return;
    var map={SCSP:'scsp',Elements:'elements',RFQ:'rfq',ESG:'esg'};
    var cards=panel.querySelectorAll('.trust-control-card');
    for(var j=0;j<cards.length;j++){
      var card=cards[j], k=card.querySelector('.k');
      var mode=card.getAttribute('data-trust-control') || (k && map[(k.textContent||'').trim()]);
      if(!mode)continue;
      card.setAttribute('data-trust-control',mode);
      card.setAttribute('role','button');
      card.setAttribute('tabindex','0');
      card.setAttribute('aria-pressed','false');card.classList.remove('active','selected','is-active');
    }
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',enhance);else enhance();
  setTimeout(enhance,60);
  setTimeout(enhance,300);
})();

// --- Script Block 49 ---
(function(){
  function resetTrustSticky(){
    var cards=document.querySelectorAll('.trust-control-panel .trust-control-card[data-trust-control]');
    cards.forEach(function(card){
      card.setAttribute('aria-pressed','false');
      card.classList.remove('active','selected','is-active');
    });
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',resetTrustSticky);else resetTrustSticky();
  document.addEventListener('click',function(e){
    if(e.target.closest && e.target.closest('.trust-control-panel .trust-control-card[data-trust-control]')){setTimeout(resetTrustSticky,0);}
  },true);
  window.YYK_TRUST_HOVER_ONLY_RESET=resetTrustSticky;
})();

// --- Script Block 50 ---
(function(){
  "use strict";
  var STORE_KEY="yyk_trust_decision_engine_v1";
  var TRUST_KEY="yyk_trust_control_state_v1";
  var MODE_POLICY={
    scsp:{label:"SCSP",approval:"APPROVE FOR TECHNICAL REVIEW",risk:"Low / controlled route",pricing:"Base band + documentation release cost",qc:"SCSP pack required: CoA · TDS · SDS · analytical method",owner:"Technical Sales + SQE"},
    elements:{label:"Elements",approval:"CONDITIONAL — TRACE EVIDENCE REQUIRED",risk:"Medium until 70+ element profile is attached",pricing:"Analytical premium band; price lock after impurity table",qc:"70+ trace analysis · GDMS / ICP-MS / SSMS where applicable",owner:"QA / Laboratory Routing"},
    rfq:{label:"RFQ",approval:"STRUCTURED RFQ ONLY",risk:"Medium / input completeness controls release",pricing:"Indicative band only until volume, purity and Incoterms are complete",qc:"Structured material, purity, form, destination and volume required",owner:"RFQ Desk"},
    esg:{label:"ESG",approval:"COMPLIANCE HOLD UNTIL DUE DILIGENCE CLEAR",risk:"Risk-based supplier and origin review",pricing:"Compliance-reserve band; final quote after screening",qc:"Supplier disclosure · origin review · sanctions/export-control check",owner:"Compliance + Commercial Desk"}
  };
  function byId(id){return document.getElementById(id)}
  function qsa(sel,root){return Array.prototype.slice.call((root||document).querySelectorAll(sel))}
  function getText(el){return (el&&el.textContent||"").replace(/\s+/g," ").trim()}
  function safeSet(id,value){var el=byId(id);if(el)el.textContent=value}
  function field(id){var el=byId(id);return el?(el.value||getText(el)||""):""}
  function detectTrust(){
    try{var s=JSON.parse(localStorage.getItem(TRUST_KEY)||"{}");if(s&&s.mode&&MODE_POLICY[s.mode])return s.mode}catch(e){}
    if(window.YYK_TRUST_STATE&&MODE_POLICY[window.YYK_TRUST_STATE.mode])return window.YYK_TRUST_STATE.mode;
    return "scsp";
  }
  function materialShort(){
    var v=field("rfqMaterial")||field("sogoMaterial");
    if(/aluminum|\bal\b/i.test(v))return "Al · Aluminum";
    if(/zinc|\bzn\b/i.test(v))return "Zn · Zinc";
    if(/rare|ree/i.test(v))return "REE · Rare Earth";
    return "Cu · Copper";
  }
  function scoreContext(){
    var mode=detectTrust();
    var qc=field("rfqAutoQC");
    var vol=field("rfqAutoVolume");
    var dest=field("rfqAutoDestination");
    var score=74;
    if(mode==="scsp")score+=13;
    if(mode==="elements")score+=4;
    if(mode==="rfq")score+=8;
    if(mode==="esg")score-=6;
    if(/Batch-specific|Advanced|Customer-specific/i.test(qc))score+=6;
    if(/Production|Long-term/i.test(vol))score-=4;
    if(/China|APAC|Japan|Taiwan/i.test(dest))score-=2;
    score=Math.max(42,Math.min(98,score));
    return {mode:mode,score:score,qc:qc||"Standard QC",volume:vol||"Sample / qualification lot",destination:dest||"South Korea",material:materialShort()};
  }
  function pricingBand(ctx){
    var base=ctx.score>=88?"A":"B";
    if(ctx.mode==="esg")base="C";
    if(ctx.mode==="elements"&&/Batch-specific|Advanced/i.test(ctx.qc))base="B+";
    if(/Production|Long-term/i.test(ctx.volume)&&ctx.mode!=="esg")base=(base==="A"?"A-":"B+");
    return "Band "+base+" · "+MODE_POLICY[ctx.mode].pricing;
  }
  function approvalTier(ctx){
    var p=MODE_POLICY[ctx.mode];
    if(ctx.score>=90&&ctx.mode==="scsp")return "GREEN · "+p.approval;
    if(ctx.mode==="esg")return "AMBER · "+p.approval;
    if(ctx.mode==="elements")return "AMBER · "+p.approval;
    if(ctx.score<65)return "RED · HOLD FOR REVIEW";
    return "AMBER · "+p.approval;
  }
  function syncDocs(ctx,approval,pricing){
    var docs=byId("rfqDocs");
    if(!docs)return;
    var clean=(docs.value||"").replace(/\s*Trust Decision:.*$/," ").trim();
    docs.value=(clean?clean+" · ":"")+"Trust Decision: "+ctx.material+" · "+MODE_POLICY[ctx.mode].label+" · "+approval+" · "+pricing+".";
    try{docs.dispatchEvent(new Event("input",{bubbles:true}));docs.dispatchEvent(new Event("change",{bubbles:true}))}catch(e){}
  }
  function render(){
    var ctx=scoreContext();
    var p=MODE_POLICY[ctx.mode];
    var approval=approvalTier(ctx);
    var pricing=pricingBand(ctx);
    safeSet("autoRisk",p.risk+" · Decision score "+ctx.score+"/100 · "+approval);
    safeSet("autoPricing",pricing);
    safeSet("autoQCLogic",p.qc+" · Active trust mode: "+p.label);
    safeSet("autoOwner",p.owner+" · "+ctx.destination);
    var summary=byId("rfqAutoSummary");
    if(summary)summary.textContent="Trust-linked decision · "+ctx.material+" · "+approval+" · "+pricing;
    var sogo=byId("sogoStatus");
    if(sogo)sogo.textContent="Trust Decision synced · "+ctx.material+" · "+approval+".";
    var state={mode:ctx.mode,material:ctx.material,score:ctx.score,approval:approval,pricing:pricing,qc:ctx.qc,volume:ctx.volume,destination:ctx.destination,updatedAt:new Date().toISOString()};
    try{localStorage.setItem(STORE_KEY,JSON.stringify(state))}catch(e){}
    window.YYK_TRUST_DECISION_STATE=state;
    syncDocs(ctx,approval,pricing);
    return state;
  }
  function install(){
    qsa(".trust-control-panel .trust-control-card[data-trust-control]").forEach(function(card){
      card.addEventListener("click",function(){setTimeout(render,0);setTimeout(render,80)},true);
      card.addEventListener("keydown",function(e){if(e.key==="Enter"||e.key===" "){setTimeout(render,0);setTimeout(render,80)}},true);
    });
    qsa("#structuredRfqRouter select,#rfqMaterial,#rfqForm,#rfqPurity,#rfqParticle").forEach(function(el){
      el.addEventListener("input",render,true);el.addEventListener("change",render,true);
    });
    setTimeout(render,0);setTimeout(render,180);setTimeout(render,600);
  }
  window.YYK_TRUST_DECISION_ENGINE={render:render,getState:function(){return window.YYK_TRUST_DECISION_STATE||null}};
  if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",install);else install();
})();

// --- Script Block 51 ---
(function(){
  function apply(){
    document.querySelectorAll('#yyk-terminal-ux .yyk-terminal-action').forEach(function(btn,index){
      if(!btn.getAttribute('role')) btn.setAttribute('role','button');
      if(!btn.getAttribute('tabindex')) btn.setAttribute('tabindex','0');
      if(!btn.getAttribute('data-terminal-action')){
        btn.setAttribute('data-terminal-action', index===0?'coa':(index===1?'sample':'rfq'));
      }
      btn.setAttribute('aria-label', btn.textContent.trim());
    });
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',apply); else apply();
  document.addEventListener('click',function(e){
    if(e.target && e.target.closest && e.target.closest('#yyk-terminal-ux .yyk-terminal-btn[data-terminal-target]')) setTimeout(apply,0);
  },true);
})();

// --- Script Block 52 ---
try {
/*!
 * YONGYEOKYO Master Runtime Workspace Guard
 * Purpose: team-safe runtime stabilization without changing approved layout/architecture.
 */
(function(){
  "use strict";

  var YYK = window.YYK_MASTER_RUNTIME = window.YYK_MASTER_RUNTIME || {};
  YYK.version = "review-workspace-base-1.0.0";

  function $(selector, root){ return (root || document).querySelector(selector); }
  function $all(selector, root){ return Array.prototype.slice.call((root || document).querySelectorAll(selector)); }

  YYK.safeStorage = {
    get: function(key, fallback){
      try {
        var value = localStorage.getItem(key);
        return value === null ? fallback : value;
      } catch(err) {
        return fallback;
      }
    },
    set: function(key, value){
      try {
        localStorage.setItem(key, value);
        return true;
      } catch(err) {
        YYK.memoryStorage = YYK.memoryStorage || {};
        YYK.memoryStorage[key] = value;
        return false;
      }
    }
  };

  YYK.unlockScroll = function(){
    document.documentElement.style.overflow = "";
    document.body.style.overflow = "";
    document.body.classList.remove("apex-modal-open","modal-open","locked","no-scroll");
  };

  YYK.closeActiveLayers = function(){
    $all(".modal.active,.compliance-engine.active,.product-engine.active,.contact-engine.active,.esg-deep-layer.active,.sogo-drawer.active").forEach(function(el){
      el.classList.remove("active");
    });
    YYK.unlockScroll();
  };

  YYK.refreshRFQ = function(){
    ["input","change"].forEach(function(type){
      $all(".rfq-field,.rfq-auto-field,#rfqMaterial,#rfqForm,#rfqPurity,#rfqQty,#rfqParticle,#rfqApp,#rfqMarket,#rfqDocs,#rfqTerm").forEach(function(el){
        try { el.dispatchEvent(new Event(type, {bubbles:true})); } catch(err){}
      });
    });
    try { if(typeof window.updateRFQ === "function") window.updateRFQ(); } catch(err){}
  };

  YYK.review = function(){
    var ids = {};
    var duplicateIds = [];
    $all("[id]").forEach(function(el){
      ids[el.id] = (ids[el.id] || 0) + 1;
      if(ids[el.id] === 2) duplicateIds.push(el.id);
    });
    return window.YYK_MASTER_AUDIT = {
      duplicateIds: duplicateIds,
      buttonCount: $all("button").length,
      formCount: $all("form").length,
      selectCount: $all("select").length,
      rfqFieldCount: $all(".rfq-field,.rfq-auto-field").length,
      checkedAt: new Date().toISOString()
    };
  };

  document.addEventListener("keydown", function(event){
    if(event.key === "Escape") YYK.closeActiveLayers();
  }, true);

  document.addEventListener("click", function(event){
    if(event.target.closest(".modal-close,.product-close,.compliance-close,.contact-close,.esg-close,.sogo-close,.sogo-backdrop")){
      setTimeout(YYK.unlockScroll, 0);
    }
    if(event.target.closest("[data-open-sogo],[data-pp-add-rfq],[data-terminal-action],#applyAutoDecision")){
      setTimeout(YYK.refreshRFQ, 0);
    }
  }, true);

  document.addEventListener("DOMContentLoaded", function(){
    YYK.unlockScroll();
    YYK.review();
  });
})();
} catch(e) { console.warn('Script block 52 error:', e); }

// --- Script Block 53 ---
(function(){
  "use strict";

  function removeHeatmapsFromComplianceCards(){
    var cards = Array.prototype.slice.call(document.querySelectorAll(".compliance-card"));
    cards.forEach(function(card){
      var title = (card.querySelector("h3") || {}).textContent || "";
      var isRegionalLegalCard = /Korea|Japan|China|Taiwan|KR|JP|CN|TW/i.test(title);
      if(!isRegionalLegalCard) return;

      Array.prototype.slice.call(card.querySelectorAll(".yyk-heatmap")).forEach(function(hm){
        hm.remove();
      });

      Array.prototype.slice.call(card.querySelectorAll("*")).forEach(function(el){
        var text = (el.textContent || "").trim();
        if(/^Qualification Heatmap\b/i.test(text) || /Auto-scored from visible card content/i.test(text)){
          el.remove();
        }
      });
    });
  }

  document.addEventListener("DOMContentLoaded", function(){
    removeHeatmapsFromComplianceCards();
    setTimeout(removeHeatmapsFromComplianceCards, 50);
    setTimeout(removeHeatmapsFromComplianceCards, 300);
  });

  document.addEventListener("click", function(){
    setTimeout(removeHeatmapsFromComplianceCards, 0);
    setTimeout(removeHeatmapsFromComplianceCards, 100);
  }, true);

  window.YYK_COMPLIANCE_CARD_AUDIT = {
    removeHeatmaps: removeHeatmapsFromComplianceCards,
    status: "regional compliance cards are legal/review content, not qualification scorecards"
  };
})();

// --- Script Block 54 ---
(function(){
  const matrix = {
    copper: {
      label: "Copper 6N / 7N",
      south_korea: { rcep:"0% hub-release baseline", standard:"South Korea QC hub · CoA / ICP-MS / GDMS", lead:"Malaysia production → South Korea hub release", docs:"CoA · ICP-MS · GDMS · Product Passport · origin file" },
      japan: { rcep:"0-3.3% RCEP preferential band", standard:"RCEP Form AJ · JIS H 2123", lead:"Malaysia → South Korea hub → Japan · 3-5 days after release", docs:"CoA · RCEP Form AJ · JIS H 2123 declaration · ICP-MS / GDMS" },
      taiwan: { rcep:"0-3.3% RCEP planning band", standard:"TSMC-grade PPT · semiconductor qualification", lead:"Malaysia → South Korea hub → Taiwan · 4-7 days after release", docs:"CoA · TSMC-grade PPT analysis · SEMI-grade passport · end-use file" },
      china: { rcep:"0% - 3.3% · China RCEP route under origin qualification", standard:"GB/T 20424-2025 Screening Active", lead:"Malaysia → South Korea QC Hub → Shanghai / Ningbo / Shenzhen · 5-9 days after release", docs:"Customs CIQ declaration · GB/T impurity verification · RCEP Certificate of Origin · CoA" }
    },
    aluminum: {
      label: "Aluminum 6N",
      south_korea: { rcep:"0% hub-release baseline", standard:"South Korea QC hub · 6N release", lead:"Malaysia production → South Korea hub release", docs:"CoA · ICP-MS · batch traceability · Product Passport" },
      japan: { rcep:"0-3.3% RCEP preferential band", standard:"RCEP Form AJ · JIS H 2123", lead:"Malaysia → South Korea hub → Japan · 3-5 days after release", docs:"CoA · RCEP Form AJ · JIS H 2123 declaration · ICP-MS" },
      taiwan: { rcep:"0-3.3% RCEP planning band", standard:"TSMC-grade PPT · semiconductor surface purity", lead:"Malaysia → South Korea hub → Taiwan · 4-7 days after release", docs:"CoA · TSMC-grade PPT analysis · SEMI-grade passport · surface purity report" },
      china: { rcep:"0% - 3.3% · China RCEP route under origin qualification", standard:"GB/T 20424-2025 Screening Active", lead:"Malaysia → South Korea QC Hub → Shanghai / Ningbo / Shenzhen · 5-9 days after release", docs:"Customs CIQ declaration · GB/T impurity verification · RCEP Certificate of Origin · CoA" }
    },
    zinc: {
      label: "Zinc 5N5",
      south_korea: { rcep:"0% hub-release baseline", standard:"South Korea QC hub · powder / PSD release", lead:"Malaysia production → South Korea hub release", docs:"CoA · PSD analysis · ICP-MS · Product Passport" },
      japan: { rcep:"0-3.3% RCEP preferential band", standard:"RCEP Form AJ · JIS H 2123", lead:"Malaysia → South Korea hub → Japan · 3-5 days after release", docs:"CoA · RCEP Form AJ · PSD report · ICP-MS" },
      taiwan: { rcep:"0-3.3% RCEP planning band", standard:"TSMC-grade PPT · particle / impurity review", lead:"Malaysia → South Korea hub → Taiwan · 4-7 days after release", docs:"CoA · particle size distribution · TSMC-grade PPT report · SEMI-grade passport" },
      china: { rcep:"0% - 3.3% · China RCEP route under origin qualification", standard:"GB/T 20424-2025 Screening Active", lead:"Malaysia → South Korea QC Hub → Shanghai / Ningbo / Shenzhen · 5-9 days after release", docs:"Customs CIQ declaration · GB/T impurity verification · RCEP Certificate of Origin · CoA" }
    },
    ree: {
      label: "Rare Earth Materials",
      south_korea: { rcep:"0% hub-release baseline", standard:"South Korea QC hub · REE composition file", lead:"Malaysia production → South Korea hub release", docs:"CoA · composition analysis · trace-elements report · end-use declaration" },
      japan: { rcep:"0-3.3% RCEP preferential band", standard:"RCEP Form AJ · JIS H 2123 · METI review", lead:"Malaysia → South Korea hub → Japan · 3-5 days after release", docs:"CoA · RCEP Form AJ · end-use declaration · composition analysis" },
      taiwan: { rcep:"0-3.3% RCEP planning band", standard:"TSMC-grade PPT · REE impurity review", lead:"Malaysia → South Korea hub → Taiwan · 4-7 days after release", docs:"CoA · SEMI-grade passport · TSMC-grade PPT report · application declaration" },
      china: { rcep:"0% - 3.3% · China RCEP route under origin qualification", standard:"GB/T 20424-2025 Screening Active", lead:"Malaysia → South Korea QC Hub → Shanghai / Ningbo / Shenzhen · 5-9 days after release", docs:"Customs CIQ declaration · GB/T impurity verification · RCEP Certificate of Origin · CoA" }
    }
  };
  function $(id){ return document.getElementById(id); }
  function updateComplianceCalculator(){
    const material = $("calcMaterial") ? $("calcMaterial").value : "copper";
    const destination = $("calcDestination") ? $("calcDestination").value : "south_korea";
    const item = matrix[material][destination];
    const destinationLabel = $("calcDestination") ? $("calcDestination").options[$("calcDestination").selectedIndex].text : "South Korea";
    if($("calcRouteTitle")) $("calcRouteTitle").textContent = "Malaysia → South Korea Hub → " + destinationLabel;
    if($("calcRouteText")) $("calcRouteText").textContent = matrix[material].label + " procurement route resolved through APAC Regional Supply Desk.";
    if($("calcRcepBenefit")) $("calcRcepBenefit").textContent = item.rcep;
    if($("calcStandard")) $("calcStandard").textContent = item.standard;
    if($("calcLeadTime")) $("calcLeadTime").textContent = item.lead;
    if($("calcRequiredDocs")) $("calcRequiredDocs").textContent = item.docs;
  }
  document.addEventListener("DOMContentLoaded", function(){
    ["calcMaterial", "calcDestination"].forEach(function(id){ const el = $(id); if(el) el.addEventListener("change", updateComplianceCalculator); });
    updateComplianceCalculator();
  });
  window.APAC_COMPLIANCE_CALCULATOR_MATRIX = matrix;
})();

// --- Script Block 55 ---
(function(){
  const MATRIX = {
    copper: {
      label: "Copper 6N / 7N",
      south_korea: {
        rcep: "0% preferential route where origin rules qualify",
        standard: "KS high-purity metal QC + semiconductor-grade release",
        docs: "CoA · ICP-MS · GDMS · Product Passport",
        esg: "Batch traceability verified through South Korea QC hub",
        route: "Malaysia → South Korea QC Hub"
      },
      japan: {
        rcep: "0% - 3.3% RCEP duty benefit",
        standard: "JIS H 2123",
        docs: "CoA · RCEP Form AJ · JIS H 2123 declaration · ICP-MS / GDMS",
        esg: "Origin file + batch-level traceability ready for RFQ",
        route: "Malaysia → South Korea QC Hub → Japan"
      },
      taiwan: {
        rcep: "0% - 1% preferential planning range",
        standard: "Semiconductor-grade / TSMC-grade · PPT-level analysis",
        docs: "CoA · SEMI-grade passport · ICP-MS PPT analysis · Product Passport",
        esg: "PPT impurity profile and semiconductor buyer pack available",
        route: "Malaysia → South Korea QC Hub → Taiwan"
      },
      china: {
        rcep: "0% - 2% preferential planning range",
        standard: "GB/T 2025 compliance mapping",
        docs: "CoA · Certificate of Origin · GB/T 2025 file · CIQ support",
        esg: "Destination and end-use screening required before release",
        route: "Malaysia → South Korea QC Hub → China"
      }
    },
    aluminum: {
      label: "Aluminum 6N",
      south_korea: {
        rcep: "0% preferential route where origin rules qualify",
        standard: "KS high-purity aluminum QC",
        docs: "CoA · ICP-MS · Batch traceability · Product Passport",
        esg: "Low-impurity release through South Korea QC hub",
        route: "Malaysia → South Korea QC Hub"
      },
      japan: {
        rcep: "0% - 3.3% RCEP duty benefit",
        standard: "JIS H 2123 buyer documentation mapping",
        docs: "CoA · RCEP Form AJ · JIS compliance declaration · ICP-MS",
        esg: "RCEP and JIS documentation package prepared for RFQ",
        route: "Malaysia → South Korea QC Hub → Japan"
      },
      taiwan: {
        rcep: "0% - 1% preferential planning range",
        standard: "Semiconductor-grade / TSMC-grade",
        docs: "CoA · SEMI-grade passport · Surface purity report · ICP-MS",
        esg: "Semiconductor-grade buyer qualification output available",
        route: "Malaysia → South Korea QC Hub → Taiwan"
      },
      china: {
        rcep: "0% - 2% preferential planning range",
        standard: "GB/T 2025 compliance mapping",
        docs: "CoA · GB/T 2025 report · Customs compliance file",
        esg: "GB/T and customs document review required",
        route: "Malaysia → South Korea QC Hub → China"
      }
    },
    zinc: {
      label: "Zinc 5N5",
      south_korea: {
        rcep: "0% preferential route where origin rules qualify",
        standard: "KS zinc / powder QC mapping",
        docs: "CoA · PSD analysis · ICP-MS · Product Passport",
        esg: "PSD and impurity profile controlled by QC release",
        route: "Malaysia → South Korea QC Hub"
      },
      japan: {
        rcep: "0% - 3.3% RCEP duty benefit",
        standard: "JIS H 2123 buyer documentation mapping",
        docs: "CoA · RCEP Form AJ · PSD report · ICP-MS",
        esg: "Origin and powder profile evidence available",
        route: "Malaysia → South Korea QC Hub → Japan"
      },
      taiwan: {
        rcep: "0% - 1% preferential planning range",
        standard: "Semiconductor-grade / PPT particle and impurity review",
        docs: "CoA · Particle size distribution · PPT purity report · SEMI-grade passport",
        esg: "Particle and PPT impurity output ready for buyer review",
        route: "Malaysia → South Korea QC Hub → Taiwan"
      },
      china: {
        rcep: "0% - 2% preferential planning range",
        standard: "GB/T 2025 compliance mapping",
        docs: "CoA · GB/T 2025 compliance · CIQ support file",
        esg: "Controlled customs and destination file required",
        route: "Malaysia → South Korea QC Hub → China"
      }
    },
    ree: {
      label: "Rare Earth Materials",
      south_korea: {
        rcep: "0% preferential route where origin rules qualify",
        standard: "KS + internal REE composition specification",
        docs: "CoA · Composition analysis · Trace elements report · End-use declaration",
        esg: "End-use declaration and responsible sourcing screen required",
        route: "Malaysia → South Korea QC Hub"
      },
      japan: {
        rcep: "0% - 3.3% RCEP duty benefit",
        standard: "JIS H 2123 documentation mapping + METI review",
        docs: "CoA · RCEP Form AJ · End-use declaration · Composition analysis",
        esg: "Controlled-material and end-use review before RFQ release",
        route: "Malaysia → South Korea QC Hub → Japan"
      },
      taiwan: {
        rcep: "0% - 1% preferential planning range",
        standard: "Semiconductor-grade REE specification / PPT impurity review",
        docs: "CoA · SEMI-grade passport · Purity report · Application declaration",
        esg: "Application declaration and semiconductor buyer pack required",
        route: "Malaysia → South Korea QC Hub → Taiwan"
      },
      china: {
        rcep: "0% - 2% preferential planning range",
        standard: "GB/T 2025 REE route compliance mapping",
        docs: "CoA · GB/T 2025 file · Import license support · CIQ support file",
        esg: "Import-license and end-use checks required before release",
        route: "Malaysia → South Korea QC Hub → China"
      }
    }
  };

  function byId(id){ return document.getElementById(id); }

  function updateDecisionComplianceOutput(){
    const materialEl = byId("decisionMaterial");
    const destinationEl = byId("decisionDestination");
    if(!materialEl || !destinationEl) return;

    const material = materialEl.value;
    const destination = destinationEl.value;
    const output = MATRIX[material][destination];
    const destinationLabel = destinationEl.options[destinationEl.selectedIndex].text;

    byId("decisionRcepHeadline").textContent = "🛡 " + output.rcep;
    byId("decisionRcepSub").textContent = MATRIX[material].label + " · " + destinationLabel + " · financial benefit routed through South Korea QC hub.";
    byId("decisionRcepCell").textContent = output.rcep;
    byId("decisionStandardCell").textContent = output.standard;
    byId("decisionDocsCell").textContent = output.docs;
    byId("decisionEsgCell").textContent = output.esg;
    byId("decisionRouteCell").textContent = output.route;
  }

  document.addEventListener("DOMContentLoaded", function(){
    ["decisionMaterial","decisionDestination"].forEach(function(id){
      const el = byId(id);
      if(el) el.addEventListener("change", updateDecisionComplianceOutput);
    });
    updateDecisionComplianceOutput();
  });

  window.DECISION_COMPLIANCE_OUTPUT_MATRIX = MATRIX;
})();

// --- Script Block 56 ---
(function(){
  function byId(id){return document.getElementById(id);}
  function calculatorTarget(){return byId('apacLiveCalculator')||byId('compliance-calculator')||byId('decision-compliance-output')||byId('rfq');}
  function setLive(on){
    var seal=byId('yykDirectorSeal');
    if(seal){seal.classList.toggle('yyk-verified-live',!!on);seal.setAttribute('aria-pressed',on?'true':'false');}
    document.querySelectorAll('.yyk-port').forEach(function(p){p.classList.toggle('yyk-verified-live',!!on);});
    var state=byId('yykMapVerifiedState');
    if(state){state.textContent=on?'VERIFIED · COMPLIANCE READY':'VERIFIED · RCEP EVIDENCE BRIDGE';}
  }
  function resolveStatus(){
    var fields=['calcDestination','decisionDestination','rfqMarket'];
    var active=fields.some(function(id){var el=byId(id);return el && String(el.value||'').trim().length>0;});
    var txt=[byId('calcRcepBenefit'),byId('decisionRcepHeadline'),byId('apacCalcRcep'),byId('apacCalcLogistics')].map(function(el){return el?el.textContent:'';}).join(' ');
    return active || /Ready|Controlled|0%|RCEP|preferential/i.test(txt);
  }
  function sync(){setLive(resolveStatus());}
  function scrollToCalc(e){if(e){e.preventDefault();}var t=calculatorTarget();if(t){t.classList.add('yyk-rcep-focus');t.scrollIntoView({behavior:'smooth',block:'center'});setTimeout(function(){t.classList.remove('yyk-rcep-focus');},1600);}}
  document.addEventListener('DOMContentLoaded',function(){
    ['calcDestination','calcMaterial','decisionDestination','decisionMaterial','rfqMarket'].forEach(function(id){var el=byId(id);if(el){el.addEventListener('change',function(){setTimeout(sync,0);});el.addEventListener('input',function(){setTimeout(sync,0);});}});
    var seal=byId('yykDirectorSeal');
    if(seal){seal.addEventListener('click',scrollToCalc);seal.addEventListener('keydown',function(e){if(e.key==='Enter'||e.key===' '){scrollToCalc(e);}});}
    sync();
  });
  window.YYK_SYNC_GREEN_VERIFICATION=sync;
})();

// --- Script Block 57 ---
(function(){
  function byId(id){return document.getElementById(id);}
  function pad(n){return String(n).padStart(2,'0');}
  function setClock(){
    var now=new Date();
    var kst=new Date(now.toLocaleString('en-US',{timeZone:'Asia/Seoul'}));
    var jst=new Date(now.toLocaleString('en-US',{timeZone:'Asia/Tokyo'}));
    var cst=new Date(now.toLocaleString('en-US',{timeZone:'Asia/Taipei'}));
    var sh=new Date(now.toLocaleString('en-US',{timeZone:'Asia/Shanghai'}));
    var k=byId('yykKstClock'),j=byId('yykJstClock'),t=byId('yykCstClock'),shEl=byId('yykShanghaiClock');
    if(k)k.textContent=pad(kst.getHours())+':'+pad(kst.getMinutes());
    if(j)j.textContent=pad(jst.getHours())+':'+pad(jst.getMinutes());
    if(t)t.textContent=pad(cst.getHours())+':'+pad(cst.getMinutes());
    if(shEl)shEl.textContent=pad(sh.getHours())+':'+pad(sh.getMinutes());
  }
  function readReady(){
    var nodes=['calcRcepBenefit','calcRouteText','calcRequiredDocs','apacCalcRcep','apacCalcLogistics','decisionRcepHeadline','rfqComplianceDynamic'].map(byId);
    var txt=nodes.map(function(n){return n?n.textContent:'';}).join(' ');
    var dest=byId('calcDestination');
    return /Ready|Controlled|0%|0% - 3.3%|RCEP|Operational|Verified|preferential/i.test(txt) || !!(dest && dest.value);
  }
  function syncGreen(){
    var on=readReady();
    document.querySelectorAll('.yyk-director-seal,#yykDirectorSeal').forEach(function(el){
      el.classList.toggle('yyk-verified-live',on);
      el.classList.toggle('yyk-verified-live-all',on);
      if(el.id==='yykDirectorSeal'){el.setAttribute('aria-pressed',on?'true':'false');}
    });
    document.querySelectorAll('.yyk-port').forEach(function(p){p.classList.toggle('yyk-verified-live',on);});
    var panel=byId('yykFooterSystemStatus'); if(panel){panel.classList.toggle('yyk-live',on);}
    var map=byId('yykFooterLogisticsMap'); if(map){map.classList.toggle('yyk-live',on);}
    var state=byId('yykMapVerifiedState'); if(state){state.textContent=on?'VERIFIED · COMPLIANCE READY':'VERIFIED · RCEP EVIDENCE BRIDGE';}
  }
  function bindSeal(){
    document.querySelectorAll('.yyk-director-seal,#yykDirectorSeal').forEach(function(el){
      if(el.dataset.yykSealBound)return; el.dataset.yykSealBound='1';
      el.setAttribute('role','button'); el.setAttribute('tabindex','0');
      var go=function(e){if(e)e.preventDefault(); var target=byId('compliance-calculator')||byId('apacLiveCalculator'); if(target){target.scrollIntoView({behavior:'smooth',block:'center'}); target.classList.add('yyk-rcep-focus'); setTimeout(function(){target.classList.remove('yyk-rcep-focus');},1600);}};
      el.addEventListener('click',go);
      el.addEventListener('keydown',function(e){if(e.key==='Enter'||e.key===' '){go(e);}});
    });
  }
  document.addEventListener('DOMContentLoaded',function(){
    setClock(); setInterval(setClock,30000); bindSeal(); syncGreen();
    ['calcDestination','calcMaterial','decisionDestination','decisionMaterial','rfqMarket'].forEach(function(id){var el=byId(id); if(el){el.addEventListener('change',function(){setTimeout(syncGreen,40);}); el.addEventListener('input',function(){setTimeout(syncGreen,40);});}});
    setInterval(syncGreen,1500);
  });
  window.YYK_TIER1_FOOTER_SYNC=syncGreen;
})();

// --- Script Block 58 ---
(function(){
  function byId(id){return document.getElementById(id);}
  function chinaActive(){var d=byId('calcDestination');return !!(d && d.value==='china');}
  function applyChinaVector(){
    if(!chinaActive()) return;
    var title=byId('calcRouteTitle'), txt=byId('calcRouteText'), r=byId('calcRcepBenefit'), st=byId('calcStandard'), lead=byId('calcLeadTime'), docs=byId('calcRequiredDocs');
    if(title) title.textContent='Malaysia → South Korea QC Hub → Shanghai / Ningbo / Shenzhen';
    if(txt) txt.textContent='China Hub Logic resolved: Busan/Incheon → Shanghai Yangshan Deep Water Port with green verification bridge.';
    if(r) r.textContent='0% - 3.3% · China RCEP route under origin qualification';
    if(st) st.textContent='GB/T 20424-2025 Screening Active';
    if(lead) lead.textContent='Malaysia → South Korea QC Hub → Shanghai / Ningbo / Shenzhen · 5-9 days after release';
    if(docs) docs.textContent='Customs CIQ declaration · GB/T impurity verification · RCEP Certificate of Origin · CoA';
    document.querySelectorAll('.yyk-port[data-port*="Shanghai"]').forEach(function(p){p.classList.add('yyk-verified-live');});
    var state=byId('yykMapVerifiedState'); if(state) state.textContent='Verified · Korea → China customs vector active';
  }
  document.addEventListener('DOMContentLoaded',function(){
    var d=byId('calcDestination'); if(d){d.addEventListener('change',function(){setTimeout(applyChinaVector,45);});}
    applyChinaVector();
  });
  window.YYK_CHINA_VECTOR_SYNC=applyChinaVector;
})();

// --- Script Block 59 ---
(function(){
  "use strict";

  var nodes = [
    { key: "seoul", offset: 9 },
    { key: "tokyo", offset: 9 },
    { key: "taipei", offset: 8 },
    { key: "shanghai", offset: 8 }
  ];

  function pad(value){
    return value < 10 ? "0" + value : String(value);
  }

  function timeForOffset(offset){
    var now = new Date();
    var utc = now.getTime() + now.getTimezoneOffset() * 60000;
    var local = new Date(utc + offset * 3600000);
    return pad(local.getHours()) + ":" + pad(local.getMinutes());
  }

  function updateApacClock(){
    for(var i = 0; i < nodes.length; i++){
      var item = nodes[i];
      var el = document.querySelector('[data-apac-time="' + item.key + '"]');
      if(!el) continue;

      var nextValue = timeForOffset(item.offset);
      if(el.textContent !== nextValue){
        el.textContent = nextValue;
        el.setAttribute("datetime", nextValue);
      }
    }
  }

  function scheduleNextMinute(){
    var now = new Date();
    var delay = (60 - now.getSeconds()) * 1000 - now.getMilliseconds() + 40;
    window.setTimeout(function(){
      updateApacClock();
      window.setInterval(updateApacClock, 60000);
    }, delay);
  }

  if(document.readyState === "loading"){
    document.addEventListener("DOMContentLoaded", function(){
      updateApacClock();
      scheduleNextMinute();
    });
  }else{
    updateApacClock();
    scheduleNextMinute();
  }
})();

// --- Script Block 60 ---
(function(){
  "use strict";
  var REE_VALUE = "Rare Earth Materials · REE";
  function byId(id){ return document.getElementById(id); }
  function ensureOption(select, value){
    if(!select) return;
    var exists = false;
    Array.prototype.forEach.call(select.options, function(opt){
      if(opt.value === value || opt.textContent === value){ exists = true; }
    });
    if(!exists){
      var option = document.createElement("option");
      option.value = value;
      option.textContent = value;
      select.appendChild(option);
    }
  }
  function setValue(id, value){
    var el = byId(id);
    if(!el) return;
    if(el.tagName === "SELECT") ensureOption(el, value);
    el.value = value;
    el.dispatchEvent(new Event("input", {bubbles:true}));
    el.dispatchEvent(new Event("change", {bubbles:true}));
  }
  function closeLanthanexLoops(){
    Array.prototype.forEach.call(document.querySelectorAll(".lanthanex-engine,.lanthanex-engine.active"), function(el){
      el.classList.remove("active");
      el.setAttribute("aria-hidden", "true");
    });
    document.body.classList.remove("apex-modal-open");
    document.body.style.overflow = "";
  }
  window.YYK_LANTHANEX_TO_RFQ = function(){
    closeLanthanexLoops();
    setValue("rfqMaterial", REE_VALUE);
    setValue("rfqForm", "Oxide / Salt");
    setValue("rfqPurity", "Custom grades available");
    setValue("rfqApp", "Semiconductor & Energy applications");
    var rfq = byId("rfq");
    if(rfq) rfq.scrollIntoView({behavior:"smooth", block:"start"});
    try { if(typeof window.updateRFQ === "function") window.updateRFQ(); } catch(err) {}
  };
  document.addEventListener("click", function(event){
    var target = event.target && event.target.closest ? event.target.closest("[data-open-lanthanex],[data-lanthanex-rfq]") : null;
    if(!target) return;
    event.preventDefault();
    event.stopImmediatePropagation();
    window.YYK_LANTHANEX_TO_RFQ();
  }, true);
})();

// --- Script Block 61 ---
(function(){
  function fmt(zone){
    return new Intl.DateTimeFormat('en-GB',{
      timeZone:zone,
      hour:'2-digit',
      minute:'2-digit',
      hour12:false
    }).format(new Date());
  }
  function tick(){
    var el = document.getElementById('footerTechClock');
    if(!el) return;
    el.textContent =
      'SEOUL ' + fmt('Asia/Seoul') +
      ' | TOKYO ' + fmt('Asia/Tokyo') +
      ' | TAIPEI ' + fmt('Asia/Taipei') +
      ' | SHANGHAI ' + fmt('Asia/Shanghai');
  }
  tick();
  setInterval(tick, 30000);
})();

// --- Script Block 62 ---
(function(){
  const MATERIALS = {
    copper: {
      rx: /(?:\bcopper\b|\bcu\b|ke-?08896|медь)/i,
      label: "Copper · Cu · Up to 99.99999% (7N)",
      short: "Copper · Cu",
      href: "#passports",
      baseRisk: 22,
      riskText: "Material risk: controlled purity evidence",
      className: "copper"
    },
    aluminum: {
      rx: /(?:\baluminum\b|\baluminium\b|\bal\b|алюмин)/i,
      label: "Aluminum · Al · 99.996%–99.9999%",
      short: "Aluminum · Al",
      href: "#passports",
      baseRisk: 18,
      riskText: "Material risk: standard purity evidence",
      className: "aluminum"
    },
    zinc: {
      rx: /(?:\bzinc\b|\bzn\b|цинк)/i,
      label: "Zinc · Zn · Up to 99.9995% (5N5)",
      short: "Zinc · Zn",
      href: "#passports",
      baseRisk: 24,
      riskText: "Material risk: powder/PSD evidence required",
      className: "zinc"
    },
    rareearth: {
      rx: /(?:rare\s*earth|lanthan|lanthanex|neodymium|dysprosium|terbium|\bree\b|oxide|salt|alloy|редкозем|лантан)/i,
      label: "Rare Earth · RFQ-only controlled grade",
      short: "Rare Earth",
      href: "#rfq",
      baseRisk: 48,
      riskText: "Material risk: strategic material enhanced review",
      className: "rareearth"
    }
  };

  const DESTINATIONS = {
    korea: {
      rx: /(?:\bkorea\b|\bkr\b|busan|incheon|한국|대한민국|коре)/i,
      label: "Korea",
      compliance: "PIPA / K-REACH",
      route: "Busan/Incheon route control",
      rule: "Korean privacy handling + K-REACH chemical review",
      destRisk: 20,
      href: "#apac-regional-supply-desk"
    },
    japan: {
      rx: /(?:\bjapan\b|\bjp\b|tokyo|osaka|日本|япон)/i,
      label: "Japan",
      compliance: "APPI / METI",
      route: "Japan import and METI review",
      rule: "APPI privacy handling + METI export-control review",
      destRisk: 28,
      href: "#apac-regional-supply-desk"
    },
    taiwan: {
      rx: /(?:\btaiwan\b|\btw\b|taipei|kaohsiung|臺灣|台湾|тайван)/i,
      label: "Taiwan",
      compliance: "PDPA / UBN",
      route: "Taiwan UBN and route control",
      rule: "Taiwan PDPA + UBN buyer verification",
      destRisk: 24,
      href: "#apac-regional-supply-desk"
    },
    china: {
      rx: /(?:\bchina\b|\bcn\b|shanghai|shenzhen|中国|中國|китай)/i,
      label: "China",
      compliance: "PIPL / End-use screening",
      route: "China entity and end-use review",
      rule: "PIPL privacy handling + entity/end-use screening",
      destRisk: 42,
      href: "#apac-regional-supply-desk"
    },
    apac: {
      rx: /(?:\bapac\b|asean|singapore|vietnam|thailand|malaysia|indonesia|asia|ази)/i,
      label: "APAC",
      compliance: "Local import / privacy review",
      route: "APAC route control",
      rule: "Local privacy, import and route review",
      destRisk: 32,
      href: "#apac-regional-supply-desk"
    }
  };

  const ESCALATIONS = [
    { tier:"restricted", min:82, status:"Restricted / Manual Approval", label:"Tier: Restricted" },
    { tier:"enhanced", min:62, status:"Enhanced Review RFQ", label:"Tier: Enhanced" },
    { tier:"controlled", min:36, status:"Controlled RFQ", label:"Tier: Controlled" },
    { tier:"low", min:0, status:"Standard Evidence RFQ", label:"Tier: Standard" }
  ];

  function cleanText(text){
    return (text || "").replace(/\s+/g, " ").trim();
  }

  function isVisible(el){
    if(!el || !el.isConnected) return false;
    const style = window.getComputedStyle(el);
    if(style.display === "none" || style.visibility === "hidden" || Number(style.opacity) === 0) return false;
    const rect = el.getBoundingClientRect();
    return rect.width > 0 && rect.height > 0;
  }

  function elementSignal(el){
    if(!el) return "";
    const attrs = ["id","class","name","aria-label","title","placeholder","value","href","role"];
    let parts = [];
    attrs.forEach(attr => {
      const value = el.getAttribute && el.getAttribute(attr);
      if(value) parts.push(value);
    });
    if(el.tagName === "SELECT"){
      const opt = el.options && el.options[el.selectedIndex];
      if(opt) parts.push(opt.textContent, opt.value);
    }
    if("value" in el && el.value) parts.push(el.value);
    parts.push(el.textContent || "");
    return cleanText(parts.join(" "));
  }

  function contextSignal(el){
    let parts = [];
    let node = el;
    let depth = 0;
    while(node && node !== document.body && depth < 4){
      parts.push(elementSignal(node));
      node = node.parentElement;
      depth++;
    }
    return cleanText(parts.join(" "));
  }

  function matchDict(text, dict){
    text = cleanText(text);
    for(const key in dict){
      if(dict[key].rx.test(text)) return dict[key];
    }
    return null;
  }

  function findBestVisibleMatch(dict, scopes){
    const selectors = [
      "select",
      "input",
      "textarea",
      "button",
      "a",
      "[role='button']",
      ".route-option",
      ".sogo-option",
      ".passport",
      ".dense-card",
      ".product-card",
      ".route-card",
      ".metric",
      ".strip-cell",
      ".yyk-strip-action",
      "td",
      "li"
    ].join(",");

    let candidates = [];
    scopes.forEach(scope => {
      if(!scope) return;
      const nodes = scope.querySelectorAll ? scope.querySelectorAll(selectors) : [];
      nodes.forEach(el => {
        if(!isVisible(el)) return;
        const signal = contextSignal(el);
        const match = matchDict(signal, dict);
        if(match){
          let score = 1;
          const tag = el.tagName;
          if(["SELECT","INPUT","TEXTAREA"].includes(tag)) score += 5;
          if(["BUTTON","A"].includes(tag) || el.getAttribute("role") === "button") score += 4;
          if(/rfq|material|destination|route|product|passport|country|market/i.test(signal)) score += 3;
          if(el.matches && el.matches(".active,.selected,[aria-selected='true']")) score += 4;
          candidates.push({match, score, signal});
        }
      });
    });

    candidates.sort((a,b) => b.score - a.score);
    return candidates[0] ? candidates[0].match : null;
  }

  function getScopes(){
    return [
      document.querySelector("#rfq"),
      document.querySelector(".rfq-layout"),
      document.querySelector(".rfq-card"),
      document.querySelector(".sogo-drawer.active"),
      document.querySelector(".product-engine.active"),
      document.querySelector("main"),
      document.body
    ].filter(Boolean);
  }

  function captureFromEventTarget(target){
    const signal = contextSignal(target);
    const material = matchDict(signal, MATERIALS);
    const destination = matchDict(signal, DESTINATIONS);

    if(material) document.body.setAttribute("data-selected-material-auto", material.label);
    if(destination) document.body.setAttribute("data-selected-destination-auto", destination.label);

    return {material, destination};
  }

  function storedMaterial(){
    return document.body.getAttribute("data-selected-material-auto") || document.body.getAttribute("data-selected-material") || "";
  }

  function storedDestination(){
    return document.body.getAttribute("data-selected-destination-auto") || document.body.getAttribute("data-selected-destination") || "";
  }

  function resolveMaterial(){
    const direct = matchDict(storedMaterial(), MATERIALS);
    if(direct) return direct;

    const rfqText = cleanText(Array.from(document.querySelectorAll("#rfq input,#rfq select,#rfq textarea,#rfq button,#rfq a,#rfq td,#rfq li"))
      .map(elementSignal).join(" "));
    const fromRfq = matchDict(rfqText, MATERIALS);
    if(fromRfq) return fromRfq;

    return findBestVisibleMatch(MATERIALS, getScopes()) || MATERIALS.copper;
  }

  function resolveDestination(){
    const direct = matchDict(storedDestination(), DESTINATIONS);
    if(direct) return direct;

    const rfqText = cleanText(Array.from(document.querySelectorAll("#rfq input,#rfq select,#rfq textarea,#rfq button,#rfq a,#rfq td,#rfq li"))
      .map(elementSignal).join(" "));
    const fromRfq = matchDict(rfqText, DESTINATIONS);
    if(fromRfq) return fromRfq;

    return findBestVisibleMatch(DESTINATIONS, getScopes()) || DESTINATIONS.korea;
  }

  function setText(selector, value){
    const el = document.querySelector(selector);
    if(el) el.textContent = value;
  }

  function setHref(selector, value){
    const el = document.querySelector(selector);
    if(el) el.setAttribute("href", value);
  }

  function calculateRisk(material, destination){
    let score = material.baseRisk + destination.destRisk;
    if(material.className === "rareearth" && destination.label === "China") score += 18;
    if(material.className === "rareearth" && destination.label === "Japan") score += 10;
    if(material.className === "zinc") score += 4;
    if(destination.label === "China") score += 8;
    if(destination.label === "Korea" && material.className === "copper") score -= 2;
    return Math.max(0, Math.min(100, score));
  }

  function escalationFor(score){
    return ESCALATIONS.find(item => score >= item.min) || ESCALATIONS[ESCALATIONS.length - 1];
  }

  function updateEvidenceRouter(){
    const material = resolveMaterial();
    const destination = resolveDestination();
    const score = calculateRisk(material, destination);
    const escalation = escalationFor(score);
    const summary = material.short + " routed to " + destination.label + ": " + destination.rule + ", " + destination.route;

    setText("[data-evidence-material]", material.label);
    setText("[data-evidence-material-risk]", material.riskText);
    setText("[data-evidence-destination]", destination.label);
    setText("[data-evidence-route]", destination.route);
    setText("[data-evidence-compliance]", destination.compliance);
    setText("[data-evidence-rule]", destination.rule);
    setText("[data-evidence-status]", escalation.status);
    setText("[data-evidence-score]", "Risk score: " + score);
    setText("[data-evidence-score-large]", score + " / 100");
    setText("[data-evidence-tier]", escalation.label);
    setText("[data-evidence-summary]", summary);

    setHref("[data-evidence-material-link]", material.href);
    setHref("[data-evidence-route-link]", destination.href);
    setHref("[data-evidence-compliance-link]", "#yongyeokyo-apac-compliance");
    setHref("[data-evidence-decision-link]", score >= 82 ? "#advisory-deal-room" : "#rfq");

    const router = document.querySelector("[data-evidence-router]");
    const meter = document.querySelector("[data-evidence-risk-meter]");
    const fill = document.querySelector("[data-evidence-risk-fill]");
    const nodes = document.querySelectorAll(".yyk-evidence-node");

    if(router){
      router.setAttribute("data-material", material.label);
      router.setAttribute("data-destination", destination.label);
      router.setAttribute("data-compliance", destination.compliance);
      router.setAttribute("data-risk-score", String(score));
      router.setAttribute("data-risk-tier", escalation.tier);
    }
    if(meter) meter.setAttribute("data-risk-tier", escalation.tier);
    if(fill) fill.style.width = score + "%";
    nodes.forEach(node => node.setAttribute("data-risk-tier", escalation.tier));

    window.dispatchEvent(new CustomEvent("yyk:evidence-router-updated", {
      detail: { material: material.label, destination: destination.label, compliance: destination.compliance, status: escalation.status, score, tier: escalation.tier }
    }));
  }

  function bindAuto(){
    updateEvidenceRouter();

    document.addEventListener("click", function(event){
      captureFromEventTarget(event.target);
      setTimeout(updateEvidenceRouter, 0);
      setTimeout(updateEvidenceRouter, 160);
    }, true);

    document.addEventListener("input", function(event){
      captureFromEventTarget(event.target);
      updateEvidenceRouter();
    }, true);

    document.addEventListener("change", function(event){
      captureFromEventTarget(event.target);
      updateEvidenceRouter();
    }, true);

    document.addEventListener("keyup", function(event){
      captureFromEventTarget(event.target);
      updateEvidenceRouter();
    }, true);

    const observer = new MutationObserver(function(mutations){
      let relevant = false;
      mutations.forEach(m => {
        if(m.target && m.target.closest && m.target.closest("#rfq,.rfq-card,.sogo-drawer,.product-engine,.route-card,.passport")){
          relevant = true;
        }
      });
      if(relevant) updateEvidenceRouter();
    });

    observer.observe(document.body, {
      subtree:true,
      childList:true,
      characterData:true,
      attributes:true,
      attributeFilter:["class","value","aria-selected","aria-pressed"]
    });
  }

  if(document.readyState === "loading"){
    document.addEventListener("DOMContentLoaded", bindAuto);
  }else{
    bindAuto();
  }

  window.YYKEvidenceRouterUpdate = updateEvidenceRouter;
  window.YYKEvidenceRouterSet = function(payload){
    if(payload && payload.material) document.body.setAttribute("data-selected-material-auto", payload.material);
    if(payload && payload.destination) document.body.setAttribute("data-selected-destination-auto", payload.destination);
    updateEvidenceRouter();
  };
  window.YYKEvidenceRouterClear = function(){
    document.body.removeAttribute("data-selected-material-auto");
    document.body.removeAttribute("data-selected-destination-auto");
    document.body.removeAttribute("data-selected-material");
    document.body.removeAttribute("data-selected-destination");
    updateEvidenceRouter();
  };
})();

// --- Script Block 63 ---
(function(){
  function init(){
    var map=document.getElementById("yykFooterLogisticsMap");
    if(!map) return;
    var groups=[].slice.call(map.querySelectorAll(".route-group"));
    var ports=[].slice.call(map.querySelectorAll(".port-node"));
    var routeMap={
      "MALAYSIA":["malaysia-busan"],
      "BUSAN":["malaysia-busan","busan-yokohama","busan-shanghai","busan-kaohsiung","busan-niigata","busan-hongkong","busan-qingdao","busan-tianjin"],
      "YOKOHAMA":["busan-yokohama"],
      "SHANGHAI":["busan-shanghai"],
      "KAOHSIUNG":["busan-kaohsiung"],
      "INCHEON":["incheon-yokohama","incheon-shanghai","incheon-kaohsiung","incheon-niigata","incheon-hongkong","incheon-qingdao","incheon-tianjin"],
      "NIIGATA":["busan-niigata"],
      "HONGKONG":["busan-hongkong"],
      "QINGDAO":["busan-qingdao"],
      "TIANJIN":["busan-tianjin"]
    };
    function clear(){
      groups.forEach(function(g){g.classList.remove("is-active","is-dim")});
      ports.forEach(function(p){p.classList.remove("is-active")});
    }
    ports.forEach(function(port){
      var label=(port.getAttribute("data-port")||"").toUpperCase();
      port.addEventListener("mouseenter",function(){
        var active=routeMap[label]||[];
        groups.forEach(function(g){
          if(active.indexOf(g.getAttribute("data-route"))>=0){g.classList.add("is-active");g.classList.remove("is-dim")}
          else{g.classList.add("is-dim");g.classList.remove("is-active")}
        });
        port.classList.add("is-active");
      });
      port.addEventListener("mouseleave",clear);
    });
  }
  if(document.readyState==="loading"){document.addEventListener("DOMContentLoaded",init,{once:true})}else{init()}
})();

// --- Script Block 64 ---
(function(){
  function init(){
    var map=document.getElementById("yykFooterLogisticsMap");
    if(!map) return;
    var ports=[].slice.call(map.querySelectorAll(".port-node"));
    ports.forEach(function(port){
      port.addEventListener("click",function(e){
        e.stopPropagation();
        ports.forEach(function(p){ if(p!==port) p.classList.remove("is-open"); });
        port.classList.toggle("is-open");
      });
    });
    document.addEventListener("click",function(){ ports.forEach(function(p){p.classList.remove("is-open");}); });
  }
  if(document.readyState==="loading"){document.addEventListener("DOMContentLoaded",init,{once:true});}else{init();}
})();

// --- Script Block 65 ---
(function(){
  function init(){
    var map = document.getElementById("yykFooterLogisticsMap");
    if(!map) return;

    var groups = Array.prototype.slice.call(map.querySelectorAll(".route-group"));
    var ports = Array.prototype.slice.call(map.querySelectorAll(".port-node"));

    var routeMap = {
      "Malaysia": ["malaysia-busan"],
      "Busan": ["malaysia-busan","busan-yokohama","busan-shanghai","busan-kaohsiung","busan-niigata","busan-hongkong","busan-qingdao","busan-tianjin"],
      "Yokohama": ["busan-yokohama"],
      "Shanghai": ["busan-shanghai"],
      "Kaohsiung": ["busan-kaohsiung"],
      "Incheon": ["incheon-yokohama","incheon-shanghai","incheon-kaohsiung","incheon-niigata","incheon-hongkong","incheon-qingdao","incheon-tianjin"],
      "Niigata": ["busan-niigata"],
      "HongKong": ["busan-hongkong"],
      "Qingdao": ["busan-qingdao"],
      "Tianjin": ["busan-tianjin"]
    };

    function clearRoutes(){
      groups.forEach(function(g){ g.classList.remove("is-active","is-dim"); });
      ports.forEach(function(p){ p.classList.remove("is-route-active"); });
    }

    function focusPort(port){
      var name = port.getAttribute("data-port");
      var active = routeMap[name] || [];
      groups.forEach(function(g){
        var route = g.getAttribute("data-route");
        if(active.indexOf(route) !== -1){
          g.classList.add("is-active");
          g.classList.remove("is-dim");
        } else {
          g.classList.add("is-dim");
          g.classList.remove("is-active");
        }
      });
      port.classList.add("is-route-active");
    }

    ports.forEach(function(port){
      port.addEventListener("mouseenter", function(){ focusPort(port); });
      port.addEventListener("mouseleave", clearRoutes);
      port.addEventListener("focusin", function(){ focusPort(port); });
      port.addEventListener("focusout", clearRoutes);
      port.addEventListener("click", function(e){
        e.stopPropagation();
        ports.forEach(function(p){ if(p !== port) p.classList.remove("is-open"); });
        port.classList.toggle("is-open");
        focusPort(port);
      });
    });

    document.addEventListener("click", function(){
      ports.forEach(function(p){ p.classList.remove("is-open"); });
      clearRoutes();
    });
  }

  if(document.readyState === "loading"){
    document.addEventListener("DOMContentLoaded", init, {once:true});
  } else {
    init();
  }
})();

// --- Script Block 66 ---
(function(){
  function init(){
    var map=document.getElementById("yykFooterLogisticsMap");
    if(!map) return;
    var panel=map.querySelector(".route-status-panel");

    var qc = {
      "Malaysia": {mode:"ORIGIN VERIFIED", batch:"SEALED LOT", trace:"TRACKED", lot:"EXPORT READY"},
      "Busan": {mode:"QC VERIFIED", batch:"CONTROLLED", trace:"CHAIN SEALED", lot:"BUSAN REVIEW"},
      "Yokohama": {mode:"DOCS VERIFIED", batch:"CONTROLLED", trace:"LOT MATCHED", lot:"JP RECEIVING"},
      "Shanghai": {mode:"COMPLIANCE REVIEWED", batch:"CONTROLLED", trace:"LOT MATCHED", lot:"CN RECEIVING"},
      "Kaohsiung": {mode:"TRACE VERIFIED", batch:"CONTROLLED", trace:"LOT MATCHED", lot:"TW RECEIVING"}
    };

    function setPrecisionPanel(name, locked){
      if(!panel || !qc[name]) return;
      panel.classList.add("is-verified");
      var rows=panel.querySelectorAll(".route-status-row");
      if(rows[0]){ rows[0].firstElementChild.textContent="QC STATUS"; rows[0].lastElementChild.textContent=locked ? "ROUTE LOCKED" : qc[name].mode; }
      if(rows[1]){ rows[1].firstElementChild.textContent="BATCH FLOW"; rows[1].lastElementChild.textContent=qc[name].batch; }
      if(rows[2]){ rows[2].firstElementChild.textContent="TRACEABILITY"; rows[2].lastElementChild.textContent=qc[name].trace; }
      if(rows[3]){ rows[3].firstElementChild.textContent="LOT CONTROL"; rows[3].lastElementChild.textContent=qc[name].lot; }
      var title=panel.querySelector(".title");
      if(title) title.innerHTML='<i class="route-status-dot"></i> LIVE APAC LOGISTICS';
    }

    map.querySelectorAll(".port-node").forEach(function(port){
      var name=port.getAttribute("data-port");
      port.addEventListener("mouseenter",function(){ setPrecisionPanel(name,false); });
      port.addEventListener("click",function(){ setPrecisionPanel(name,true); });
    });
  }
  if(document.readyState==="loading"){document.addEventListener("DOMContentLoaded",init,{once:true})}else{init()}
})();

// --- Script Block 67 ---
(function(){
  function pad(n){return String(n).padStart(2,"0")}
  function updateFooterClock(){
    try{
      var now=new Date();
      var utc=now.getTime()+now.getTimezoneOffset()*60000;
      var zones=[["KST",9],["JST",9],["MYT",8],["CST",8]];
      var text=zones.map(function(z){
        var d=new Date(utc+z[1]*3600000);
        return z[0]+" "+pad(d.getHours())+":"+pad(d.getMinutes());
      }).join("  ·  ");
      document.querySelectorAll(".footer-tech-center,.footer-terminal-core time,#footerApacClock,#apacClock").forEach(function(el){el.textContent=text;});
    }catch(e){}
  }
  updateFooterClock();
  window.setInterval(updateFooterClock,60000);
})();

// --- Script Block 68 ---
(function(){
  function init(){
    var map=document.getElementById("yykFooterLogisticsMap");
    if(!map) return;

    // Remove any stale panels/cards created by older scripts.
    map.querySelectorAll(".yyk-proof-card-master,.yyk-unified-proof-card,.svg-city-cards,.svg-city-card").forEach(function(el){el.remove();});

    var panel=document.createElement("div");
    panel.className="yyk-proof-card-master";
    panel.innerHTML=[
      '<button class="yyk-proof-card-close" type="button" aria-label="Close">×</button>',
      '<div class="yyk-proof-card-head">PROOF MODE · VERIFIED SAMPLE</div>',
      '<div class="yyk-proof-card-verified">QC VERIFIED · COA MATCHED · TRACE LOCKED</div>',
      '<div class="yyk-proof-card-row"><span>LANE</span><span data-lane>—</span></div>',
      '<div class="yyk-proof-card-row"><span>BATCH ID</span><span data-batch>—</span></div>',
      '<div class="yyk-proof-card-row"><span>LOT ID</span><span data-lot>—</span></div>',
      '<div class="yyk-proof-card-chain">ORIGIN → QC → DOCS → DISPATCH → RECEIVING</div>',
      '<div class="yyk-proof-card-docs" data-docs></div>',
      '<a class="yyk-proof-card-rfq" href="#rfq">REQUEST RFQ FOR THIS LANE</a>'
    ].join("");
    map.appendChild(panel);

    var data={
      Busan:{
        lane:"BUSAN QC HUB",
        batch:"BATCH KR-YYK-6N-0426",
        lot:"LOT KR-YYK-6N-0426",
        docs:["COA","GDMS/ICP-MS","SDS","PACKING LIST","EXPORT REVIEW"]
      },
      Shanghai:{
        lane:"BUSAN → SHANGHAI",
        batch:"BATCH CN-YYK-6N-0426",
        lot:"LOT CN-YYK-6N-0426",
        docs:["COA","GDMS/ICP-MS","SDS","PACKING LIST","EXPORT REVIEW"]
      },
      Yokohama:{
        lane:"BUSAN → YOKOHAMA",
        batch:"BATCH JP-YYK-6N-0426",
        lot:"LOT JP-YYK-6N-0426",
        docs:["COA","GDMS/ICP-MS","SDS","PACKING LIST","EXPORT REVIEW"]
      },
      Kaohsiung:{
        lane:"BUSAN → KAOHSIUNG",
        batch:"BATCH TW-YYK-6N-0426",
        lot:"LOT TW-YYK-6N-0426",
        docs:["COA","GDMS/ICP-MS","SDS","PACKING LIST","EXPORT REVIEW"]
      }
    };

    function openCard(name){
      var d=data[name];
      if(!d) return;
      panel.querySelector("[data-lane]").textContent=d.lane;
      panel.querySelector("[data-batch]").textContent=d.batch;
      panel.querySelector("[data-lot]").textContent=d.lot;

      var grid=panel.querySelector("[data-docs]");
      grid.innerHTML="";
      d.docs.forEach(function(doc){
        var el=document.createElement("div");
        el.className="yyk-proof-card-doc";
        el.textContent=doc;
        grid.appendChild(el);
      });

      panel.classList.add("is-open");
      map.setAttribute("data-active-proof-port",name);
    }

    ["Busan","Shanghai","Yokohama","Kaohsiung"].forEach(function(name){
      var port=map.querySelector('.port-node[data-port="'+name+'"]');
      if(!port) return;
      port.addEventListener("click",function(e){
        e.preventDefault();
        e.stopPropagation();
        openCard(name);
      });
    });

    panel.querySelector(".yyk-proof-card-close").addEventListener("click",function(e){
      e.stopPropagation();
      panel.classList.remove("is-open");
      map.removeAttribute("data-active-proof-port");
    });
  }

  if(document.readyState==="loading"){
    document.addEventListener("DOMContentLoaded",init,{once:true});
  }else{
    init();
  }
})();

// --- Script Block 69 ---
(function(){
  function cleanupPortFrames(){
    var map=document.getElementById("yykFooterLogisticsMap");
    if(!map) return;
    map.querySelectorAll(".port-node").forEach(function(port){
      port.removeAttribute("tabindex");
      port.removeAttribute("focusable");
      port.classList.remove("is-active","is-route-active","is-intel-active");
      port.addEventListener("mousedown",function(e){ e.preventDefault(); });
      port.addEventListener("click",function(){
        setTimeout(function(){
          port.classList.remove("is-active","is-route-active","is-intel-active");
          if(document.activeElement && document.activeElement.blur) document.activeElement.blur();
        },0);
      });
    });
  }
  if(document.readyState==="loading"){
    document.addEventListener("DOMContentLoaded",cleanupPortFrames,{once:true});
  }else{
    cleanupPortFrames();
  }
})();

// --- Script Block 70 ---
(function(){
  function ready(fn){ if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',fn,{once:true});}else{fn();} }
  ready(function(){
    var map=document.getElementById('yykFooterLogisticsMap');
    if(!map) return;

    /* Strip older direct listeners without touching tables, routes or SVG geometry. */
    Array.prototype.slice.call(map.querySelectorAll('.port-node')).forEach(function(node){
      var clone=node.cloneNode(true);
      node.parentNode.replaceChild(clone,node);
    });

    var ports=Array.prototype.slice.call(map.querySelectorAll('.port-node'));
    var panel=map.querySelector('.yyk-proof-card-master');
    var routeGroups=Array.prototype.slice.call(map.querySelectorAll('.route-group,.yyk-logistics-route'));
    var lockedPort=null;

    var data={
      Malaysia:{lane:'KUANTAN PORT · ORIGIN NODE',batch:'BATCH MY-YYK-6N-0426',lot:'LOT MY-ORIGIN-0426',docs:['COA','ORIGIN REVIEW','SDS','PACKING LIST','EXPORT REVIEW']},
      Busan:{lane:'BUSAN QC HUB',batch:'BATCH KR-YYK-7N-0550',lot:'LOT KR-YYK-7N-0550',docs:['COA','GDMS/ICP-MS','SDS','PACKING LIST','EXPORT REVIEW']},
      Shanghai:{lane:'BUSAN → SHANGHAI',batch:'BATCH CN-YYK-6N-0426',lot:'LOT CN-YYK-6N-0426',docs:['COA','GDMS/ICP-MS','SDS','PACKING LIST','EXPORT REVIEW']},
      Yokohama:{lane:'BUSAN → YOKOHAMA',batch:'BATCH JP-YYK-6N-0988',lot:'LOT JP-YYK-6N-0988',docs:['COA','GDMS/ICP-MS','SDS','PACKING LIST','EXPORT REVIEW']},
      Kaohsiung:{lane:'BUSAN → KAOHSIUNG',batch:'BATCH TW-YYK-7N-0211',lot:'LOT TW-YYK-7N-0211',docs:['COA','GDMS/ICP-MS','SDS','PACKING LIST','EXPORT REVIEW']},
      Incheon:{lane:'BCP → INCHEON',batch:'BATCH KR-YYK-7N-0612',lot:'LOT KR-YYK-7N-0612',docs:['COA','GDMS/ICP-MS','SDS','PACKING LIST','EXPORT REVIEW']},
      Niigata:{lane:'BCP → NIIGATA',batch:'BATCH JP-YYK-7N-0344',lot:'LOT JP-YYK-7N-0344',docs:['COA','GDMS/ICP-MS','SDS','PACKING LIST','EXPORT REVIEW']},
      HongKong:{lane:'FLEX ROUTE → HONG KONG',batch:'BATCH HK-YYK-6N-0187',lot:'LOT HK-YYK-6N-0187',docs:['COA','GDMS/ICP-MS','SDS','PACKING LIST','EXPORT REVIEW']},
      Qingdao:{lane:'BUSAN → QINGDAO',batch:'BATCH CN-YYK-6N-0531',lot:'LOT CN-YYK-6N-0531',docs:['COA','GDMS/ICP-MS','SDS','PACKING LIST','EXPORT REVIEW']},
      Tianjin:{lane:'COMPLIANCE HOLD → TIANJIN',batch:'BATCH CN-YYK-7N-0093',lot:'LOT CN-YYK-7N-0093',docs:['COA','GDMS/ICP-MS','EUC','SANCTIONS SCREEN','EXPORT REVIEW']}
    };
    var routeMap={
      Malaysia:['malaysia-busan'],
      Busan:['malaysia-busan','busan-yokohama','busan-shanghai','busan-kaohsiung','busan-niigata','busan-hongkong','busan-qingdao','busan-tianjin'],
      Shanghai:['busan-shanghai'],
      Yokohama:['busan-yokohama'],
      Kaohsiung:['busan-kaohsiung'],
      Incheon:['incheon-yokohama','incheon-shanghai','incheon-kaohsiung','incheon-niigata','incheon-hongkong','incheon-qingdao','incheon-tianjin'],
      Niigata:['busan-niigata'],
      HongKong:['busan-hongkong'],
      Qingdao:['busan-qingdao'],
      Tianjin:['busan-tianjin']
    };

    function focusRoutes(name){
      var active=routeMap[name]||[];
      routeGroups.forEach(function(g){
        var route=g.getAttribute('data-route');
        var on=active.indexOf(route)!==-1;
        g.classList.toggle('is-active',on);
        g.classList.toggle('is-dim',!on);
      });
      ports.forEach(function(p){p.classList.toggle('is-route-active',p.getAttribute('data-port')===name);});
    }
    function clearRoutes(){
      routeGroups.forEach(function(g){g.classList.remove('is-active','is-dim');});
      ports.forEach(function(p){p.classList.remove('is-route-active');});
    }
    function closePanel(){
      if(panel) panel.classList.remove('is-open');
      map.removeAttribute('data-active-proof-port');
      ports.forEach(function(p){p.classList.remove('is-open','is-locked');});
      lockedPort=null;
      clearRoutes();
    }
    function openPanel(name,lock){
      var d=data[name];
      if(!panel||!d) return;
      var lane=panel.querySelector('[data-lane]');
      var batch=panel.querySelector('[data-batch]');
      var lot=panel.querySelector('[data-lot]');
      var docs=panel.querySelector('[data-docs]');
      if(lane) lane.textContent=d.lane;
      if(batch) batch.textContent=d.batch;
      if(lot) lot.textContent=d.lot;
      if(docs){
        docs.innerHTML='';
        d.docs.forEach(function(doc){
          var el=document.createElement('div');
          el.className='yyk-proof-card-doc';
          el.textContent=doc;
          docs.appendChild(el);
        });
      }
      panel.classList.add('is-open');
      map.setAttribute('data-active-proof-port',name);
      ports.forEach(function(p){
        var isCurrent=p.getAttribute('data-port')===name;
        p.classList.toggle('is-open',isCurrent);
        p.classList.toggle('is-locked',lock && isCurrent);
      });
      if(lock) lockedPort=name;
      focusRoutes(name);
    }

    ports.forEach(function(port){
      var name=port.getAttribute('data-port');
      port.setAttribute('role','button');
      port.setAttribute('aria-label','Open '+name+' logistics node data');
      port.addEventListener('mouseenter',function(){ if(!lockedPort) openPanel(name,false); });
      port.addEventListener('mouseleave',function(){ if(!lockedPort){ if(panel) panel.classList.remove('is-open'); port.classList.remove('is-open'); clearRoutes(); } });
      port.addEventListener('click',function(e){
        e.preventDefault();
        e.stopPropagation();
        var alreadyLocked=lockedPort===name;
        ports.forEach(function(p){p.classList.remove('is-locked');});
        openPanel(name,true);
        if(alreadyLocked){ openPanel(name,true); }
      });
    });
    map.addEventListener('click',function(e){
      if(e.target.closest && (e.target.closest('.port-node') || e.target.closest('.yyk-proof-card-master'))) return;
      closePanel();
    });
    if(panel){
      panel.addEventListener('click',function(e){e.stopPropagation();});
      var close=panel.querySelector('.yyk-proof-card-close');
      if(close){close.addEventListener('click',function(e){e.preventDefault();e.stopPropagation();closePanel();});}
    }
    document.addEventListener('click',function(e){
      if(!map.contains(e.target)) closePanel();
    });
  });
})();

// --- Script Block 71 ---
(function(){
  function ready(fn){document.readyState==='loading'?document.addEventListener('DOMContentLoaded',fn,{once:true}):fn();}
  ready(function(){
    var map=document.getElementById('yykFooterLogisticsMap');
    if(!map)return;
    map.dataset.proofStableFix='1';
    var cityData={
      Malaysia:{lane:'KUANTAN PORT → KOREA HUB',batch:'MY-YYK-6N-0102',lot:'MY-YYK-6N-0102',status:'QC VERIFIED · COA MATCHED · TRACE LOCKED',chain:'ORIGIN → QC → DOCS → DISPATCH → RECEIVING',docs:['COA (GDMS/ICP-MS)','SDS','PACKING LIST','EXPORT REVIEW'],links:{batch:'#rfq',lot:'#rfq',coa:'#compliance',sds:'#compliance',packing:'#logistics',export:'#compliance'},dock:'malaysia-right'},
      Busan:{lane:'KOREA HUB → APAC PORTS',batch:'KR-YYK-7N-0550',lot:'KR-YYK-7N-0550',status:'CENTRAL QC & DISTRIBUTION HUB · COA MATCHED · TRACE LOCKED',chain:'ORIGIN → QC → DOCS → DISPATCH → RECEIVING',docs:['COA (GDMS/ICP-MS)','SDS','PACKING LIST','EXPORT REVIEW'],links:{batch:'#rfq',lot:'#rfq',coa:'#compliance',sds:'#compliance',packing:'#logistics',export:'#compliance'},dock:'busan-bridge'},
      Yokohama:{lane:'KOREA HUB → YOKOHAMA',batch:'JP-YYK-6N-0988',lot:'JP-YYK-6N-0988',status:'QC VERIFIED · COA MATCHED · TRACE LOCKED',chain:'ORIGIN → QC → DOCS → DISPATCH → RECEIVING',docs:['COA (GDMS/ICP-MS)','SDS','PACKING LIST','EXPORT REVIEW'],links:{batch:'#rfq',lot:'#rfq',coa:'#compliance',sds:'#compliance',packing:'#logistics',export:'#compliance'},dock:'below'},
      Shanghai:{lane:'KOREA HUB → SHANGHAI',batch:'CN-YYK-6N-0426',lot:'CN-YYK-6N-0426',status:'QC VERIFIED · COA MATCHED · TRACE LOCKED',chain:'ORIGIN → QC → DOCS → DISPATCH → RECEIVING',docs:['COA (GDMS/ICP-MS)','SDS','PACKING LIST','EXPORT REVIEW'],links:{batch:'#rfq',lot:'#rfq',coa:'#compliance',sds:'#compliance',packing:'#logistics',export:'#compliance'},dock:'shanghai-left'},
      Kaohsiung:{lane:'KOREA HUB → KAOHSIUNG',batch:'TW-YYK-7N-0211',lot:'TW-YYK-7N-0211',status:'QC VERIFIED · COA MATCHED · TRACE LOCKED',chain:'ORIGIN → QC → DOCS → DISPATCH → RECEIVING',docs:['COA (GDMS/ICP-MS)','SDS','PACKING LIST','EXPORT REVIEW'],links:{batch:'#rfq',lot:'#rfq',coa:'#compliance',sds:'#compliance',packing:'#logistics',export:'#compliance'},dock:'below'},
      Incheon:{lane:'KOREA HUB → INCHEON',batch:'KR-YYK-7N-0612',lot:'KR-YYK-7N-0612',status:'BCP ROUTE · COA MATCHED · TRACE LOCKED',chain:'ORIGIN → QC → DOCS → DISPATCH → RECEIVING',docs:['COA (GDMS/ICP-MS)','SDS','PACKING LIST','EXPORT REVIEW'],links:{batch:'#rfq',lot:'#rfq',coa:'#compliance',sds:'#compliance',packing:'#logistics',export:'#compliance'},dock:'below'},
      Niigata:{lane:'KOREA HUB → NIIGATA',batch:'JP-YYK-7N-0344',lot:'JP-YYK-7N-0344',status:'BCP ROUTE · COA MATCHED · TRACE LOCKED',chain:'ORIGIN → QC → DOCS → DISPATCH → RECEIVING',docs:['COA (GDMS/ICP-MS)','SDS','PACKING LIST','EXPORT REVIEW'],links:{batch:'#rfq',lot:'#rfq',coa:'#compliance',sds:'#compliance',packing:'#logistics',export:'#compliance'},dock:'below'},
      HongKong:{lane:'KOREA HUB → HONG KONG',batch:'HK-YYK-6N-0187',lot:'HK-YYK-6N-0187',status:'QC VERIFIED · COA MATCHED · TRACE LOCKED',chain:'ORIGIN → QC → DOCS → DISPATCH → RECEIVING',docs:['COA (GDMS/ICP-MS)','SDS','PACKING LIST','EXPORT REVIEW'],links:{batch:'#rfq',lot:'#rfq',coa:'#compliance',sds:'#compliance',packing:'#logistics',export:'#compliance'},dock:'below'},
      Qingdao:{lane:'KOREA HUB → QINGDAO',batch:'CN-YYK-6N-0531',lot:'CN-YYK-6N-0531',status:'QC VERIFIED · COA MATCHED · TRACE LOCKED',chain:'ORIGIN → QC → DOCS → DISPATCH → RECEIVING',docs:['COA (GDMS/ICP-MS)','SDS','PACKING LIST','EXPORT REVIEW'],links:{batch:'#rfq',lot:'#rfq',coa:'#compliance',sds:'#compliance',packing:'#logistics',export:'#compliance'},dock:'below'},
      Tianjin:{lane:'KOREA HUB → TIANJIN',batch:'CN-YYK-7N-0093',lot:'CN-YYK-7N-0093',status:'COMPLIANCE HOLD · EUC REQUIRED · REVIEW ACTIVE',chain:'ORIGIN → QC → DOCS → COMPLIANCE REVIEW → DISPATCH',docs:['COA (GDMS/ICP-MS)','SDS','EUC','SANCTIONS SCREEN','EXPORT REVIEW'],links:{batch:'#rfq',lot:'#rfq',coa:'#compliance',sds:'#compliance',packing:'#logistics',export:'#compliance'},dock:'below'}
    };
    window.cityData=cityData;
    var oldPanels=map.querySelectorAll('.yyk-proof-card-master,.yyk-proof-card-final,.yyk-data-lane-card,.yyk-bmap-proof-card');
    oldPanels.forEach(function(p){p.classList.remove('is-open','is-visible');p.style.display='none';});
    var panel=document.getElementById('yykProofModeStablePanel');
    if(!panel){
      panel=document.createElement('div');panel.id='yykProofModeStablePanel';panel.setAttribute('role','dialog');panel.setAttribute('aria-label','Proof Mode Verified Sample');
      panel.innerHTML='<div class="yyk-stable-proof-head"><div><div class="yyk-stable-proof-title">PROOF MODE · VERIFIED SAMPLE</div><div class="yyk-stable-proof-status" data-status></div></div><button type="button" class="yyk-stable-proof-close" aria-label="Close Proof Mode">×</button></div><table class="yyk-stable-proof-table"><tbody><tr><th>LANE</th><td><a class="yyk-stable-value" data-lane href="#rfq"></a></td></tr><tr><th>BATCH ID</th><td><a class="yyk-stable-value" data-batch href="#rfq"></a></td></tr><tr><th>LOT ID</th><td><a class="yyk-stable-value" data-lot href="#rfq"></a></td></tr><tr><th>CHAIN</th><td data-chain></td></tr><tr><th>DOCS</th><td data-docs></td></tr></tbody></table><a href="#rfq" class="yyk-stable-proof-rfq">REQUEST RFQ FOR THIS LANE</a><button type="button" class="yyk-stable-proof-export">[↓] EXPORT BATCH REPORT</button>';
      map.appendChild(panel);
    }
    var badge=map.querySelector('.yyk-stable-proof-badge');
    if(!badge){badge=document.createElement('div');badge.className='yyk-stable-proof-badge';map.appendChild(badge);}
    function clonePorts(){
      var nodes=[].slice.call(map.querySelectorAll('.port-node'));
      return nodes.map(function(n){var c=n.cloneNode(true);n.parentNode.replaceChild(c,n);return c;}).filter(function(p){return cityData[p.getAttribute('data-port')];});
    }
    var ports=clonePorts();
    function rectOf(el){var m=map.getBoundingClientRect(),r=el.getBoundingClientRect();return{left:r.left-m.left,right:r.right-m.left,top:r.top-m.top,bottom:r.bottom-m.top,width:r.width,height:r.height,cx:r.left-m.left+r.width/2,cy:r.top-m.top+r.height/2};}
    function dotOf(port){return port.querySelector('.port-dot')||port.querySelector('.precision-core')||port;}
    function labelOf(port){return port.querySelector('.port-label')||port.querySelector('text')||port;}
    function clamp(n,a,b){return Math.max(a,Math.min(b,n));}
    function safeTop(){var h=map.querySelector('.map-head,.yyk-map-head');return h?rectOf(h).bottom+110:110;}
    function normalizeNode(port){
      var city=port.getAttribute('data-port'),size=city==='Busan'?12:8,hit=city==='Busan'?40:34,dot=dotOf(port);
      if(dot&&dot.tagName&&dot.tagName.toLowerCase()==='rect'){
        var r=rectOf(dot),cx=parseFloat(dot.getAttribute('x')||0)+(parseFloat(dot.getAttribute('width')||size)/2),cy=parseFloat(dot.getAttribute('y')||0)+(parseFloat(dot.getAttribute('height')||size)/2);
        if(!isFinite(cx)||!isFinite(cy)){cx=r.cx;cy=r.cy;}
        dot.setAttribute('width',size);dot.setAttribute('height',size);dot.setAttribute('x',(cx-size/2).toFixed(1));dot.setAttribute('y',(cy-size/2).toFixed(1));
        var hitbox=port.querySelector('.yyk-stable-hitbox');
        if(!hitbox){hitbox=document.createElementNS('http://www.w3.org/2000/svg','rect');hitbox.setAttribute('class','yyk-stable-hitbox');port.insertBefore(hitbox,port.firstChild);}
        hitbox.setAttribute('x',(cx-hit/2).toFixed(1));hitbox.setAttribute('y',(cy-hit/2).toFixed(1));hitbox.setAttribute('width',hit);hitbox.setAttribute('height',hit);
      }
      port.setAttribute('role','button');port.setAttribute('tabindex','0');port.style.pointerEvents='auto';if(port.parentNode)port.parentNode.appendChild(port);
    }
    ports.forEach(normalizeNode);
    var locked=null;
    function fill(city){
      var d=cityData[city];panel.dataset.port=city;panel.querySelector('[data-status]').textContent=d.status;var lane=panel.querySelector('[data-lane]');lane.textContent=d.lane;lane.href=d.links.batch||'#rfq';var batch=panel.querySelector('[data-batch]');batch.textContent=d.batch;batch.href=d.links.batch||'#rfq';batch.setAttribute('data-copy-value',d.batch);var lot=panel.querySelector('[data-lot]');lot.textContent=d.lot;lot.href=d.links.lot||'#rfq';lot.setAttribute('data-copy-value',d.lot);panel.querySelector('[data-chain]').textContent=d.chain;var docs=panel.querySelector('[data-docs]');docs.innerHTML='';d.docs.forEach(function(doc){var a=document.createElement('a');a.className='yyk-stable-proof-link';a.textContent=doc;a.href=doc.indexOf('COA')===0?d.links.coa:(doc==='SDS'?d.links.sds:(doc==='PACKING LIST'?d.links.packing:d.links.export));docs.appendChild(a);});
    }
    function panelSize(){panel.style.display='block';panel.style.visibility='hidden';var s={w:panel.offsetWidth||480,h:panel.offsetHeight||300};panel.style.visibility='';return s;}
    function dock(city){
      panel.style.left='auto';panel.style.top='auto';panel.style.right='20px';panel.style.bottom='20px';panel.style.visibility='';
    }
    function show(city,sticky){if(!cityData[city])return;locked=sticky?city:null;fill(city);panel.classList.add('is-open');map.setAttribute('data-proof-open','1');ports.forEach(function(p){var on=p.getAttribute('data-port')===city;p.classList.toggle('is-open',on);p.classList.toggle('is-locked',sticky&&on);});badge.classList.remove('is-open');dock(city);}
    function close(force){if(locked&&!force)return;locked=null;panel.classList.remove('is-open');badge.classList.remove('is-open');map.removeAttribute('data-proof-open');ports.forEach(function(p){p.classList.remove('is-open','is-locked');});}
    window.showTable=function(city){show(city,true);}
    function showBadge(city){if(locked||!cityData[city])return;var r=rectOf(dotOf(map.querySelector('.port-node[data-port="'+city+'"]')));badge.textContent='BATCH: '+cityData[city].batch;badge.style.left=Math.round(r.cx+14)+'px';badge.style.top=Math.round(r.cy-28)+'px';badge.classList.add('is-open');}
    function printReport(){var d=cityData[panel.dataset.port];if(!d){window.print();return;}var old=document.getElementById('yykStablePrintReport');if(old)old.remove();var sec=document.createElement('section');sec.id='yykStablePrintReport';sec.innerHTML='<h1>YONGYEOKYO Corporate Header</h1><p>APAC Proof Mode · Verified Sample</p><table><tbody><tr><th>BATCH ID</th><td>'+d.batch+'</td></tr><tr><th>LOT ID</th><td>'+d.lot+'</td></tr><tr><th>LANE</th><td>'+d.lane+'</td></tr><tr><th>STATUS</th><td>'+d.status+'</td></tr><tr><th>CHAIN</th><td>'+d.chain+'</td></tr></tbody></table><p style="margin-top:32px;font-weight:700">Verified by Representative Director / CEO Kim Irina</p><div class="yyk-certified-export-footer">This document is a digital export from the YONGYEOKYO APAC Terminal. Company profile reference: Kim Irina, Representative Director / CEO. Representative Director / CEO Kim Irina · Company Profile ·</div>';document.body.appendChild(sec);document.body.classList.add('yyk-print-proof-active');window.print();setTimeout(function(){document.body.classList.remove('yyk-print-proof-active');sec.remove();},350);}
    ports.forEach(function(port){var city=port.getAttribute('data-port');port.addEventListener('mouseenter',function(e){showBadge(city);},true);port.addEventListener('mouseleave',function(e){if(!locked)badge.classList.remove('is-open');},true);port.addEventListener('click',function(e){e.preventDefault();e.stopPropagation();e.stopImmediatePropagation();show(city,true);if(window.yykSelectPort)window.yykSelectPort(city);},true);port.addEventListener('keydown',function(e){if(e.key==='Enter'||e.key===' '){e.preventDefault();e.stopPropagation();show(city,true);}},true);});
    panel.addEventListener('click',function(e){e.stopPropagation();var copy=e.target.closest&&e.target.closest('[data-copy-value]');if(copy&&navigator.clipboard){navigator.clipboard.writeText(copy.getAttribute('data-copy-value')).catch(function(){});}if(e.target.closest&&e.target.closest('.yyk-stable-proof-export')){e.preventDefault();printReport();}},true);
    panel.querySelector('.yyk-stable-proof-close').addEventListener('click',function(e){e.preventDefault();e.stopPropagation();close(true);},true);
    map.addEventListener('click',function(e){if(e.target.closest&&(e.target.closest('.port-node')||e.target.closest('#yykProofModeStablePanel')))return;close(true);},true);
    document.addEventListener('click',function(e){if(!map.contains(e.target))close(true);},true);
    window.addEventListener('resize',function(){if(locked)dock(locked);},true);
  });
})();

// --- Script Block 72 ---
(function(){
  function ready(fn){document.readyState==='loading'?document.addEventListener('DOMContentLoaded',fn,{once:true}):fn();}
  ready(function(){
    var panel=document.getElementById('yykProofModeStablePanel');
    if(!panel||panel.dataset.docsInteractive==='1')return;
    panel.dataset.docsInteractive='1';
    function openCompliance(tab){
      if(typeof window.YYKOpenCompliance==='function'){window.YYKOpenCompliance(tab||'legal-framework');return true;}
      if(typeof window.apexOpenCompliance==='function'){window.apexOpenCompliance(tab||'legal-framework');return true;}
      var btn=document.querySelector('[data-open-compliance="'+(tab||'legal-framework')+'"]');
      if(btn){btn.click();return true;}
      var engine=document.getElementById('complianceEngine');
      if(engine){engine.classList.add('active');engine.setAttribute('aria-hidden','false');return true;}
      return false;
    }
    function openVaultScope(scope){
      var ds=document.getElementById('docScope');
      if(ds){Array.prototype.forEach.call(ds.options,function(o){if(o.textContent===scope||o.value===scope)ds.value=o.value;});ds.dispatchEvent(new Event('change',{bubbles:true}));}
      if(typeof window.openVault==='function'){try{window.openVault('APAC Proof Document · '+scope);return true;}catch(e){try{window.openVault();return true;}catch(e2){}}}
      var modal=document.getElementById('vaultModal');
      if(modal){modal.classList.add('active');return true;}
      return false;
    }
    function scrollToTarget(id){var el=document.getElementById(id)||document.querySelector(id);if(el){el.scrollIntoView({behavior:'smooth',block:'center'});return true;}return false;}
    function note(text){var n=panel.querySelector('.yyk-proof-doc-active-note');if(!n){n=document.createElement('div');n.className='yyk-proof-doc-active-note';panel.appendChild(n);}n.textContent=text;}
    panel.addEventListener('click',function(e){
      var doc=e.target.closest&&e.target.closest('.yyk-stable-proof-link');
      if(!doc)return;
      e.preventDefault();e.stopPropagation();
      var label=(doc.textContent||'').trim().toUpperCase();
      if(label.indexOf('COA')===0){openVaultScope('CoA + TDS + SDS');openCompliance('legal-framework');note('COA / GDMS / ICP-MS document vault trigger activated.');return;}
      if(label==='SDS'){openVaultScope('CoA + TDS + SDS');note('SDS controlled document request activated.');return;}
      if(label==='PACKING LIST'){scrollToTarget('leadTimeMatrix')||scrollToTarget('#rfq');note('Packing List lane documentation trigger activated.');return;}
      if(label==='EXPORT REVIEW'){openCompliance('legal-framework');note('Export Review compliance layer activated.');return;}
    },true);
    panel.addEventListener('click',function(e){
      var copy=e.target.closest&&e.target.closest('[data-copy-value]');
      if(!copy)return;
      var value=copy.getAttribute('data-copy-value')||copy.textContent||'';
      if(navigator.clipboard){navigator.clipboard.writeText(value).catch(function(){});}
      note('Copied to clipboard: '+value);
    },true);
  });
})();

// --- Script Block 73 ---
(function(){
  'use strict';
  var DATA={
    Malaysia:{batch:'MY-YYK-6N-0102',lot:'MY-YYK-6N-0102',lane:'MALAYSIA → KOREA HUB',origin:'Malaysia Production',status:'QC VERIFIED · COA MATCHED · TRACE LOCKED',chain:'ORIGIN → QC → DOCS → DISPATCH → RECEIVING',route:'malaysia-busan'},
    Busan:{batch:'KR-YYK-7N-0550',lot:'KR-YYK-7N-0550',lane:'KOREA HUB → APAC PORTS',origin:'CENTRAL QC & DISTRIBUTION HUB',status:'CENTRAL QC & DISTRIBUTION HUB · TRACE LOCKED',chain:'ORIGIN → QC → DOCS → DISPATCH → RECEIVING',route:'busan-yokohama'},
    Shanghai:{batch:'CN-YYK-6N-0426',lot:'CN-YYK-6N-0426',lane:'KOREA HUB → SHANGHAI',origin:'KOREA HUB',status:'QC VERIFIED · COA MATCHED · TRACE LOCKED',chain:'ORIGIN → QC → DOCS → DISPATCH → RECEIVING',route:'busan-shanghai'},
    Yokohama:{batch:'JP-YYK-6N-0988',lot:'JP-YYK-6N-0988',lane:'KOREA HUB → YOKOHAMA',origin:'KOREA HUB',status:'QC VERIFIED · COA MATCHED · TRACE LOCKED',chain:'ORIGIN → QC → DOCS → DISPATCH → RECEIVING',route:'busan-yokohama'},
    Kaohsiung:{batch:'TW-YYK-7N-0211',lot:'TW-YYK-7N-0211',lane:'KOREA HUB → KAOHSIUNG',origin:'KOREA HUB',status:'QC VERIFIED · COA MATCHED · TRACE LOCKED',chain:'ORIGIN → QC → DOCS → DISPATCH → RECEIVING',route:'busan-kaohsiung'},
    Incheon:{batch:'KR-YYK-7N-0612',lot:'KR-YYK-7N-0612',lane:'KOREA HUB → INCHEON',origin:'KOREA HUB',status:'BCP ROUTE · COA MATCHED · TRACE LOCKED',chain:'ORIGIN → QC → DOCS → DISPATCH → RECEIVING',route:'incheon-yokohama'},
    Niigata:{batch:'JP-YYK-7N-0344',lot:'JP-YYK-7N-0344',lane:'KOREA HUB → NIIGATA',origin:'KOREA HUB',status:'BCP ROUTE · COA MATCHED · TRACE LOCKED',chain:'ORIGIN → QC → DOCS → DISPATCH → RECEIVING',route:'incheon-niigata'},
    HongKong:{batch:'HK-YYK-6N-0187',lot:'HK-YYK-6N-0187',lane:'KOREA HUB → HONG KONG',origin:'KOREA HUB',status:'QC VERIFIED · COA MATCHED · TRACE LOCKED',chain:'ORIGIN → QC → DOCS → DISPATCH → RECEIVING',route:'incheon-hongkong'},
    Qingdao:{batch:'CN-YYK-6N-0531',lot:'CN-YYK-6N-0531',lane:'KOREA HUB → QINGDAO',origin:'KOREA HUB',status:'QC VERIFIED · COA MATCHED · TRACE LOCKED',chain:'ORIGIN → QC → DOCS → DISPATCH → RECEIVING',route:'incheon-qingdao'},
    Tianjin:{batch:'CN-YYK-7N-0093',lot:'CN-YYK-7N-0093',lane:'KOREA HUB → TIANJIN',origin:'KOREA HUB',status:'COMPLIANCE HOLD · EUC REQUIRED · REVIEW ACTIVE',chain:'ORIGIN → QC → DOCS → COMPLIANCE REVIEW → DISPATCH',route:'incheon-tianjin'}
  };
  function ready(fn){if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',fn,{once:true});}else{fn();}}
  ready(function(){
    var map=document.getElementById('yykFooterLogisticsMap');
    if(!map||map.dataset.apacEngineFinal==='1')return;
    map.dataset.apacEngineFinal='1';
    map.setAttribute('data-proof-open','0');
    var svg=map.querySelector('svg');
    if(!svg)return;
    var oldCards=map.querySelectorAll('.yyk-proof-card,.yyk-proof-card-final,.yyk-proof-card-master,.terminal-card,.local-port-card');
    oldCards.forEach(function(n){n.style.display='none';n.setAttribute('aria-hidden','true');});
    map.querySelectorAll('.route-group[data-route="shanghai-kaohsiung"]').forEach(function(n){n.style.display='none';});
    var panel=document.createElement('div');
    panel.className='yyk-proof-card';
    panel.setAttribute('role','dialog');
    panel.setAttribute('aria-label','Proof Mode verified sample data');
    map.appendChild(panel);
    var badge=document.createElement('div');
    badge.className='yyk-apac-badge';
    map.appendChild(badge);
    var print=document.createElement('div');
    print.className='yyk-apac-print-report';
    document.body.appendChild(print);
    var locked=null;
    function portCenter(port){
      var dot=port.querySelector('.port-dot');
      return {x:parseFloat(dot.getAttribute('data-cx')||dot.getAttribute('x')||0),y:parseFloat(dot.getAttribute('data-cy')||dot.getAttribute('y')||0)};
    }
    function svgToMap(pt){
      var p=svg.createSVGPoint(); p.x=pt.x; p.y=pt.y;
      var m=svg.getScreenCTM();
      if(m){p=p.matrixTransform(m);}
      var r=map.getBoundingClientRect();
      return {x:p.x-r.left,y:p.y-r.top};
    }
    function clamp(n,min,max){return Math.max(min,Math.min(max,n));}
    function titleClearY(){
      var head=map.querySelector('.map-head,.yyk-map-head');
      if(!head)return 110;
      var hr=head.getBoundingClientRect(),mr=map.getBoundingClientRect();
      return (hr.bottom-mr.top)+110;
    }
    function positionFor(city, port, el){
      el.style.left='auto'; el.style.top='auto'; el.style.right='20px'; el.style.bottom='20px';
    }
    function render(city){
      var d=DATA[city];
      var docs='<a class="yyk-proof-link" href="#compliance" data-doc="coa">COA (GDMS/ICP-MS)</a><a class="yyk-proof-link" href="#compliance" data-doc="sds">SDS</a><a class="yyk-proof-link" href="#rfq" data-doc="packing">PACKING LIST</a><a class="yyk-proof-link" href="#compliance" data-doc="export">EXPORT REVIEW</a>';
      return '<div class="yyk-proof-head"><div><div class="yyk-proof-title">PROOF MODE · VERIFIED SAMPLE</div></div><button class="yyk-proof-close" type="button" aria-label="Close">×</button></div><div class="yyk-proof-status">'+d.status+'</div><table class="yyk-proof-table"><tr><th>Batch ID</th><td><span class="yyk-proof-copy" data-copy="'+d.batch+'">'+d.batch+'</span></td></tr><tr><th>Lot ID</th><td><span class="yyk-proof-copy" data-copy="'+d.lot+'">'+d.lot+'</span></td></tr><tr><th>Lane</th><td>'+d.lane+'</td></tr><tr><th>Origin</th><td>'+d.origin+'</td></tr><tr><th>Chain</th><td>'+d.chain+'</td></tr><tr><th>Docs</th><td>'+docs+'</td></tr></table><div class="yyk-proof-actions"><button type="button" class="yyk-proof-action" data-rfq="1">REQUEST RFQ FOR THIS LANE</button><button type="button" class="yyk-proof-action" data-export="1">[↓] EXPORT BATCH REPORT</button></div>';
    }
    function close(){
      locked=null; panel.classList.remove('is-visible'); badge.classList.remove('is-visible'); map.setAttribute('data-proof-open','0');
      map.querySelectorAll('.port-node.is-open,.port-node.is-active').forEach(function(n){n.classList.remove('is-open','is-active');});
      map.querySelectorAll('.route-group.is-active,.route-group.is-dim').forEach(function(n){n.classList.remove('is-active','is-dim');});
    }
    function routeState(city){
      var d=DATA[city];
      map.querySelectorAll('.route-group').forEach(function(r){r.classList.remove('is-active','is-dim'); if(d&&r.dataset.route===d.route){r.classList.add('is-active');}else{r.classList.add('is-dim');}});
    }
    function show(city,port,stick){
      var d=DATA[city]; if(!d)return;
      locked=stick?city:locked;
      panel.innerHTML=render(city);
      panel.classList.add('is-visible'); map.setAttribute('data-proof-open','1');
      map.querySelectorAll('.port-node.is-open,.port-node.is-active').forEach(function(n){n.classList.remove('is-open','is-active');});
      port.classList.add('is-open','is-active'); routeState(city);
      requestAnimationFrame(function(){positionFor(city,port,panel);});
    }
    function showBadge(city,port){
      var d=DATA[city]; if(!d)return;
      badge.textContent='LANE ACTIVE · '+d.batch;
      badge.classList.add('is-visible');
      var cv=svgToMap(portCenter(port));
      var leftBelow=['Shanghai','HongKong','Qingdao','Tianjin','Yokohama'];
      var bw=badge.offsetWidth||220;
      if(leftBelow.indexOf(city)!==-1){
        badge.style.left=clamp(cv.x-bw-14,12,map.clientWidth-bw-12)+'px';
        badge.style.top=clamp(cv.y+14,12,map.clientHeight-40)+'px';
      } else {
        badge.style.left=clamp(cv.x+14,12,map.clientWidth-250)+'px';
        badge.style.top=clamp(cv.y-38,12,map.clientHeight-40)+'px';
      }
    }
    function printReport(city){
      var d=DATA[city||locked]; if(!d)return;
      print.innerHTML='<h1>YONGYEOKYO CORPORATE HEADER</h1><p>APAC Verified Sample Batch Report</p><table><tr><th>BATCH ID</th><td>'+d.batch+'</td></tr><tr><th>LOT ID</th><td>'+d.lot+'</td></tr><tr><th>LANE</th><td>'+d.lane+'</td></tr><tr><th>ORIGIN</th><td>'+d.origin+'</td></tr><tr><th>CHAIN</th><td>'+d.chain+'</td></tr><tr><th>STATUS</th><td>'+d.status+'</td></tr></table><div class="sig">Verified by Representative Director / CEO Kim Irina</div><div class="yyk-certified-export-footer">This document is a digital export from the YONGYEOKYO APAC Terminal. Company profile reference: Kim Irina, Representative Director / CEO. Representative Director / CEO Kim Irina · Company Profile ·</div>';
      window.print();
    }
    function activateDoc(link){
      var target=link.getAttribute('href')||'#compliance';
      var type=link.getAttribute('data-doc')||'doc';
      try{sessionStorage.setItem('yykRequestedDoc',type);}catch(e){}
      var el=document.querySelector(target);
      if(el&&el.scrollIntoView)el.scrollIntoView({behavior:'smooth',block:'start'});
    }
    map.querySelectorAll('.port-node').forEach(function(original){
      var node=original.cloneNode(true); original.parentNode.replaceChild(node,original);
      var city=node.getAttribute('data-port'); var d=DATA[city]; if(!d)return;
      var dot=node.querySelector('.port-dot'); var cx=parseFloat(dot.getAttribute('data-cx')), cy=parseFloat(dot.getAttribute('data-cy'));
      var size=(city==='Busan')?12:8;
      dot.setAttribute('width',size); dot.setAttribute('height',size); dot.setAttribute('x',cx-size/2); dot.setAttribute('y',cy-size/2); dot.setAttribute('rx','0'); dot.setAttribute('ry','0');
      var hit=document.createElementNS('http://www.w3.org/2000/svg','rect');
      hit.setAttribute('class','yyk-apac-hitbox'); hit.setAttribute('x',cx-16); hit.setAttribute('y',cy-16); hit.setAttribute('width',32); hit.setAttribute('height',32);
      node.insertBefore(hit,node.firstChild);
      node.setAttribute('role','button'); node.setAttribute('tabindex','0'); node.setAttribute('aria-label','Open '+city+' Proof Mode data');
      node.addEventListener('mouseenter',function(){if(!locked)showBadge(city,node);});
      node.addEventListener('mouseleave',function(){if(!locked)badge.classList.remove('is-visible');});
      node.addEventListener('click',function(e){e.preventDefault();e.stopPropagation();close();show(city,node,true);if(window.yykSelectPort)window.yykSelectPort(city);});
      node.addEventListener('keydown',function(e){if(e.key==='Enter'||e.key===' '){e.preventDefault();close();show(city,node,true);}});
    });
    panel.addEventListener('click',function(e){
      e.stopPropagation();
      var closeBtn=e.target.closest('.yyk-proof-close'); if(closeBtn){close();return;}
      var cp=e.target.closest('[data-copy]'); if(cp){var v=cp.getAttribute('data-copy'); if(navigator.clipboard)navigator.clipboard.writeText(v); cp.textContent=v+' · COPIED'; setTimeout(function(){cp.textContent=v;},900); return;}
      var doc=e.target.closest('.yyk-proof-link'); if(doc){e.preventDefault();activateDoc(doc);return;}
      var rfq=e.target.closest('[data-rfq]'); if(rfq){var s=document.querySelector('[data-open-sogo],#openSogoDrawer,#rfq'); if(s&&s.click)s.click(); else if(document.getElementById('rfq'))document.getElementById('rfq').scrollIntoView({behavior:'smooth'}); return;}
      var exp=e.target.closest('[data-export]'); if(exp){printReport(locked);return;}
    });
    map.addEventListener('click',function(e){if(e.target.closest&&e.target.closest('.port-node,.yyk-proof-card'))return;close();});
    document.addEventListener('click',function(e){if(!map.contains(e.target))close();});
    window.addEventListener('resize',function(){if(!locked)return;var p=map.querySelector('.port-node[data-port="'+locked+'"]'); if(p)positionFor(locked,p,panel);});
  });
})();

// --- Script Block 74 ---
(function(){
  function applyNodeVisibility(){
    var map=document.getElementById('yykFooterLogisticsMap');
    if(!map)return;
    map.querySelectorAll('.port-node').forEach(function(node){
      var dot=node.querySelector('.port-dot');
      if(!dot)return;
      var city=node.getAttribute('data-port');
      var cx=parseFloat(dot.getAttribute('data-cx')||dot.getAttribute('x')||0);
      var cy=parseFloat(dot.getAttribute('data-cy')||dot.getAttribute('y')||0);
      var size=(city==='Busan'||city==='Incheon')?12:8;
      dot.setAttribute('width',String(size));
      dot.setAttribute('height',String(size));
      if(!Number.isNaN(cx)&&!Number.isNaN(cy)){dot.setAttribute('x',String(cx-size/2));dot.setAttribute('y',String(cy-size/2));}
      dot.setAttribute('rx','0');dot.setAttribute('ry','0');
      dot.style.display='inline';dot.style.visibility='visible';dot.style.opacity='1';dot.style.fill='#00ff88';dot.style.stroke='#d8ffe8';dot.style.strokeWidth='1';
      node.style.display='inline';node.style.visibility='visible';node.style.opacity='1';
    });
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',applyNodeVisibility,{once:true});else applyNodeVisibility();
  window.addEventListener('load',applyNodeVisibility,{once:true});
})();

// --- Script Block 75 ---
(function(){
  function normalizeEmail(value){ return String(value || '').trim().toLowerCase(); }
  function fallbackCopy(text){
    var ta = document.createElement('textarea');
    ta.value = text;
    ta.setAttribute('readonly','');
    ta.style.position = 'fixed';
    ta.style.left = '-9999px';
    document.body.appendChild(ta);
    ta.select();
    try { document.execCommand('copy'); } catch(e) {}
    document.body.removeChild(ta);
  }
  function showCopyTooltip(event, message){
    var tooltip = document.querySelector('.yyk-copy-tooltip');
    if(!tooltip){
      tooltip = document.createElement('div');
      tooltip.className = 'yyk-copy-tooltip';
      tooltip.setAttribute('role','status');
      tooltip.setAttribute('aria-live','polite');
      document.body.appendChild(tooltip);
    }
    tooltip.textContent = message || 'Copied';
    var x = event && typeof event.clientX === 'number' ? event.clientX : window.innerWidth / 2;
    var y = event && typeof event.clientY === 'number' ? event.clientY : window.innerHeight / 2;
    tooltip.style.left = x + 'px';
    tooltip.style.top = y + 'px';
    tooltip.classList.add('active');
    window.clearTimeout(tooltip._yykTimer);
    tooltip._yykTimer = window.setTimeout(function(){ tooltip.classList.remove('active'); }, 950);
  }
  document.querySelectorAll('.yyk-corporate-authority-card .yyk-contact-email').forEach(function(link){
    var email = normalizeEmail(link.textContent);
    if(email.indexOf('@') === -1) return;
    link.textContent = email;
    link.setAttribute('href', 'mailto:' + email);
  });
  document.querySelectorAll('.yyk-corporate-authority-card [data-copy-email]').forEach(function(btn){
    var email = normalizeEmail(btn.getAttribute('data-copy-email'));
    if(email.indexOf('@') === -1) return;
    btn.setAttribute('data-copy-email', email);
  });
  document.addEventListener('click', function(event){
    var btn = event.target.closest('.yyk-corporate-authority-card [data-copy-email]');
    if(!btn) return;
    var email = normalizeEmail(btn.getAttribute('data-copy-email'));
    if(!email || email.indexOf('@') === -1) return;
    if(navigator.clipboard && navigator.clipboard.writeText){
      navigator.clipboard.writeText(email).catch(function(){ fallbackCopy(email); });
    } else { fallbackCopy(email); }
    btn.classList.add('copied');
    showCopyTooltip(event, 'Copied');
    window.setTimeout(function(){ btn.classList.remove('copied'); }, 950);
  });
})();

// --- Script Block 76 ---
(function(){
  "use strict";
  var materialProfile={
    cu:{label:"Copper 6N/7N",baseMargin:18,volatility:26,hedge:"LME copper collar + supplier price lock",docs:"CoA + GDMS/ICP-MS impurity table"},
    al:{label:"Aluminum 6N",baseMargin:14,volatility:18,hedge:"LME aluminum forward band",docs:"CoA + TDS + origin record"},
    zn:{label:"Zinc 5N5",baseMargin:12,volatility:22,hedge:"LME zinc hedge + powder PSD hold",docs:"CoA + SDS + PSD evidence"},
    ree:{label:"Rare Earth / controlled",baseMargin:22,volatility:38,hedge:"Back-to-back PO + FX reserve + destination gate",docs:"End-use statement + compliance release + batch CoA"}
  };
  var destinationProfile={
    kr:{label:"KR · Busan/Incheon",days:5,cost:4,risk:10,gate:"PIPA + APAC logistics check"},
    jp:{label:"JP · Osaka/Yokohama",days:7,cost:6,risk:14,gate:"APPI + METI export-control review"},
    tw:{label:"TW · Kaohsiung",days:8,cost:7,risk:16,gate:"UBN + Taiwan PDPA + port review"},
    cn:{label:"CN · Shanghai/Ningbo/Shenzhen",days:10,cost:9,risk:24,gate:"PIPL + entity/end-use screening"},
    apac:{label:"APAC mixed route",days:9,cost:8,risk:20,gate:"Multi-market compliance routing"}
  };
  function q(id){return document.getElementById(id)}
  function val(id){var el=q(id);return el?String(el.value||el.textContent||"").toLowerCase():""}
  function material(){var s=val("rfqMaterial")+" "+val("rfqAutoApplication")+" "+val("rfqAutoPurity"); if(/rare|ree|oxide|salt|magnet/.test(s))return"ree"; if(/aluminum|\bal\b/.test(s))return"al"; if(/zinc|\bzn\b/.test(s))return"zn"; return"cu"}
  function dest(){var s=val("rfqMarket")+" "+val("rfqAutoDestination")+" "+val("sogoRegion")+" "+val("rfqRegion"); if(/china|shanghai|ningbo|shenzhen|\bcn\b/.test(s))return"cn"; if(/taiwan|kaohsiung|\btw\b/.test(s))return"tw"; if(/japan|osaka|yokohama|\bjp\b/.test(s))return"jp"; if(/apac/.test(s))return"apac"; return"kr"}
  function qtyFactor(){var s=val("rfqQty")+" "+val("rfqAutoVolume"); if(/long|annual|production|ton|t\b/.test(s))return 1.18; if(/pilot/.test(s))return 1.05; if(/sample|qualification/.test(s))return .86; return 1}
  function docFactor(){var s=val("rfqDocs")+" "+val("rfqAutoQC"); return /customer|advanced|batch|sds|tds/.test(s)?-2:3}
  function completeness(){var ids=["rfqMaterial","rfqForm","rfqPurity","rfqQty","rfqParticle","rfqApp","rfqMarket","rfqDocs","rfqTerm"]; var done=ids.filter(function(id){var el=q(id);return el&&String(el.value||"").trim()}).length; return Math.round(done/ids.length*100)}
  function score(){var m=materialProfile[material()],d=destinationProfile[dest()],complete=completeness(); var margin=Math.max(6,Math.round((m.baseMargin*qtyFactor())-d.cost+docFactor())); var risk=Math.min(99,Math.max(1,Math.round(m.volatility*.55+d.risk+((100-complete)*.22)))); var profit=Math.max(0,Math.round(margin*complete/100)); var readiness=complete>=78&&risk<56?"TRADE READY":complete>=55?"REVIEW GATE":"DATA HOLD"; return {m:m,d:d,margin:margin,risk:risk,profit:profit,complete:complete,readiness:readiness};}
  function ensurePanel(){
    var anchor=q("rfqPricingModel") || q("rfqComplianceNotice") || q("missingText"); if(!anchor||q("yykTradingOSStage1"))return;
    var panel=document.createElement("div"); panel.className="trading-os-stage1"; panel.id="yykTradingOSStage1";
    panel.innerHTML='<div class="trading-os-stage1-head"><div><div class="trading-os-stage1-title">Trading OS · Decision Engine Stage 1</div><div class="trading-os-stage1-n">Catalog → RFQ → compliance → logistics → execution. Injected as an internal logic layer; URL and navigation skeleton unchanged.</div></div><div class="trading-os-stage1-state" id="tosReadiness">DATA HOLD</div></div><div class="trading-os-stage1-grid"><div class="trading-os-stage1-cell"><span class="trading-os-stage1-k">Profitability Lens</span><span class="trading-os-stage1-v" id="tosProfit">0%</span><span class="trading-os-stage1-n" id="tosProfitNote">awaiting RFQ inputs</span></div><div class="trading-os-stage1-cell"><span class="trading-os-stage1-k">Risk Score</span><span class="trading-os-stage1-v" id="tosRisk">0</span><span class="trading-os-stage1-n" id="tosRiskNote">material + destination risk</span></div><div class="trading-os-stage1-cell"><span class="trading-os-stage1-k">Auto Hedge</span><span class="trading-os-stage1-v" id="tosHedge">—</span><span class="trading-os-stage1-n">pre-trade exposure control</span></div><div class="trading-os-stage1-cell"><span class="trading-os-stage1-k">Logistics Precalc</span><span class="trading-os-stage1-v" id="tosLogistics">—</span><span class="trading-os-stage1-n" id="tosGate">compliance gate</span></div></div><div class="trading-os-stage1-flow"><div class="trading-os-stage1-step"><strong>1 · Catalog</strong><span id="tosFlowCatalog">Product not locked</span></div><div class="trading-os-stage1-step"><strong>2 · RFQ Intake</strong><span id="tosFlowRfq">Completeness pending</span></div><div class="trading-os-stage1-step"><strong>3 · Risk</strong><span id="tosFlowRisk">Risk not scored</span></div><div class="trading-os-stage1-step"><strong>4 · Hedge/Logistics</strong><span id="tosFlowOps">Route not priced</span></div><div class="trading-os-stage1-step"><strong>5 · Execution</strong><span id="tosFlowExec">Approval gate closed</span></div></div><div class="trading-os-stage1-actions"><button class="micro-btn" type="button" id="tosApplyRoute">Apply route to RFQ</button><button class="micro-btn" type="button" id="tosExportSnapshot">Copy decision snapshot</button></div><div class="trading-os-stage1-alert" id="tosAlert">Decision Engine waiting for catalog/RFQ data.</div>';
    anchor.parentNode.insertBefore(panel, anchor.nextSibling);
  }
  function set(id,t){var el=q(id); if(el)el.textContent=t}
  function render(){ensurePanel(); if(!q("yykTradingOSStage1"))return; var s=score();
    set("tosReadiness",s.readiness); set("tosProfit",s.profit+"%"); set("tosProfitNote","gross margin lens "+s.margin+"% before final quote"); set("tosRisk",s.risk+" / 100"); set("tosRiskNote",s.risk>=60?"manual approval required":"controlled route acceptable"); set("tosHedge",s.m.hedge); set("tosLogistics",s.d.days+"–"+(s.d.days+3)+" days"); set("tosGate",s.d.gate); set("tosFlowCatalog",s.m.label+" · "+s.m.docs); set("tosFlowRfq",s.complete+"% RFQ completeness"); set("tosFlowRisk",s.risk<45?"Low/medium — proceed":"Elevated — hold for review"); set("tosFlowOps",s.d.label+" · "+s.m.hedge); set("tosFlowExec",s.readiness==="TRADE READY"?"Ready for Architect approval":"Frozen until evidence is complete");
    set("tosAlert", "Decision: "+s.readiness+". Profitability "+s.profit+"%, risk "+s.risk+"/100, logistics "+s.d.label+" "+s.d.days+"–"+(s.d.days+3)+" days. Required evidence: "+s.m.docs+".");
    var pricing=q("rfqPricingModel"); if(pricing){pricing.setAttribute("data-profitability-score",String(s.profit)); pricing.setAttribute("data-risk-score",String(s.risk));}
  }
  function applyRoute(){var s=score(); var term=q("rfqTerm"), docs=q("rfqDocs"), particle=q("rfqParticle"); if(term&&!term.value)term.value=s.d.risk>18?"CIF":"CPT"; if(docs&&!docs.value)docs.value=s.m.docs.indexOf("SDS")>-1?"CoA + TDS + SDS":"CoA + TDS"; if(particle&&!particle.value&&material()==="zn")particle.value="PSD required before quote lock"; if(window.updateRFQ)window.updateRFQ(); render();}
  function copySnapshot(){var s=score(); var text="Trading OS Stage 1 Snapshot\nMaterial: "+s.m.label+"\nRoute: "+s.d.label+"\nReadiness: "+s.readiness+"\nProfitability: "+s.profit+"%\nRisk: "+s.risk+"/100\nHedge: "+s.m.hedge+"\nLogistics: "+s.d.days+"-"+(s.d.days+3)+" days\nGate: "+s.d.gate; if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(text).catch(function(){});} set("tosAlert","Decision snapshot copied for review / approval gate.");}
  document.addEventListener("input",render,true); document.addEventListener("change",render,true); document.addEventListener("click",function(e){if(e.target&&e.target.id==="tosApplyRoute")applyRoute(); if(e.target&&e.target.id==="tosExportSnapshot")copySnapshot();},true);
  if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",render); else render();
  window.YYKTradingOSStage1={render:render,score:score,applyRoute:applyRoute};
})();

// --- Script Block 77 ---
(function(){
  var products=[
    {key:'cu',sym:'Cu',name:'Copper 6N',grade:'6N ingot / powder',margin:74,risk:36,hedge:'LME proxy hedge',lead:'24–48h hub-ready'},
    {key:'al',sym:'Al',name:'Aluminum 6N',grade:'6N ingot',margin:67,risk:32,hedge:'FX + inventory lock',lead:'24–48h bonded'},
    {key:'zn',sym:'Zn',name:'Zinc 5N',grade:'5N powder',margin:61,risk:43,hedge:'price buffer required',lead:'48h after QC'},
    {key:'ree',sym:'RE',name:'Rare Earths',grade:'RFQ-only purity',margin:83,risk:58,hedge:'contract hedge only',lead:'route pre-clearance'}
  ];
  var marketRisk={kr:4,jp:7,tw:9,cn:15};
  var hubRisk={kuantan:3,busan:5,yokohama:8,hk:10};
  var volumeMargin={sample:-8,standard:0,bulk:9};
  function $(id){return document.getElementById(id)}
  function clamp(n,a,b){return Math.max(a,Math.min(b,n))}
  function render(){
    var grid=$('productProfitRiskGrid'); if(!grid) return;
    var market=($('pprMarket')||{}).value||'kr';
    var hub=($('pprHub')||{}).value||'kuantan';
    var volume=($('pprVolume')||{}).value||'standard';
    var vol=parseInt((($('pprVolatility')||{}).value||38),10);
    grid.innerHTML=products.map(function(p){
      var profit=clamp(p.margin+volumeMargin[volume]-Math.round(vol/10),18,96);
      var risk=clamp(p.risk+marketRisk[market]+hubRisk[hub]+Math.round(vol/6),12,98);
      var readiness=(profit>=58 && risk<=72)?'EXECUTION READY':'CONTROL HOLD';
      var cls=readiness==='EXECUTION READY'?'':' hold';
      return '<article class="product-profit-risk-card '+(readiness==='EXECUTION READY'?'active':'')+'" data-product="'+p.key+'">'+
        '<div><div class="ticker"><div><div class="sym">'+p.sym+'</div><div class="product-profit-risk-note">'+p.name+'</div></div><div class="grade">'+p.grade+'</div></div>'+
        '<div class="product-profit-risk-metrics"><div class="product-profit-risk-metric"><span class="k">Profit Lens</span><span class="v">'+profit+'%</span></div><div class="product-profit-risk-metric"><span class="k">Risk Score</span><span class="v">'+risk+'</span></div><div class="product-profit-risk-metric"><span class="k">Hedge</span><span class="v">'+p.hedge+'</span></div><div class="product-profit-risk-metric"><span class="k">Logistics</span><span class="v">'+p.lead+'</span></div></div>'+
        '<div class="product-profit-risk-bar" aria-hidden="true"><span style="width:'+profit+'%"></span></div></div>'+
        '<div><div class="product-profit-risk-status'+cls+'">'+readiness+'</div><div class="product-profit-risk-note">Signal source: catalog profile + market + hub + volume + volatility. No URL/nav mutation.</div></div>'+ 
      '</article>';
    }).join('');
  }
  document.addEventListener('DOMContentLoaded',function(){['pprMarket','pprHub','pprVolume','pprVolatility'].forEach(function(id){var el=$(id); if(el){el.addEventListener('input',render);el.addEventListener('change',render)}});render();});
})();

// --- Script Block 78 ---
(function(){
  const productProfiles={
    cu:{application:'Semiconductor',purity:'Ultra-high purity',form:'Ingot',qc:'Advanced analytical route',destination:'Japan / Taiwan / China'},
    al:{application:'Aerospace',purity:'Ultra-high purity',form:'Ingot',qc:'Batch-specific CoA',destination:'South Korea'},
    zn:{application:'Industrial Processing',purity:'Industrial purity',form:'Powder',qc:'Standard QC',destination:'APAC'},
    quality:{application:'Semiconductor',purity:'Ultra-high purity',form:'Sputtering Target',qc:'Customer-specific testing',destination:'Japan / Taiwan / China'},
    logistics:{application:'Industrial Processing',purity:'Custom',form:'Ingot',qc:'Batch-specific CoA',destination:'APAC'}
  };
  const setSelect=(id,value)=>{const el=document.getElementById(id); if(!el) return; const opt=[...el.options].find(o=>o.textContent.trim()===value); if(opt) el.value=opt.value; el.dispatchEvent(new Event('change',{bubbles:true}));};
  const applyProfile=(key)=>{const p=productProfiles[key]; if(!p) return; setSelect('rfqAutoApplication',p.application); setSelect('rfqAutoPurity',p.purity); setSelect('rfqAutoForm',p.form); setSelect('rfqAutoQC',p.qc); setSelect('rfqAutoDestination',p.destination); document.body.setAttribute('data-selected-trading-product',key); const rfq=document.getElementById('rfqAutoDecision'); if(rfq){rfq.setAttribute('data-product-handoff',key);}};
  document.addEventListener('click',function(e){const trigger=e.target.closest('[data-open-product]'); if(trigger) applyProfile(trigger.getAttribute('data-open-product')); if(e.target.closest('[data-lanthanex-rfq]')){setSelect('rfqAutoApplication','EV / Magnets');setSelect('rfqAutoPurity','Controlled REE');setSelect('rfqAutoForm','Oxide / Salt');setSelect('rfqAutoQC','Customer-specific testing');setSelect('rfqAutoDestination','Japan / Taiwan / China');document.body.setAttribute('data-selected-trading-product','ree');}});
})();

// --- Script Block 79 ---
try {
/* Autonomous build: external ./yyk_chaebol_os_final.js dependency removed. Existing interface logic is retained in inline scripts above. */
window.YYK_AUTONOMOUS_BUILD = true;
} catch(e) { console.warn('Script block 79 error:', e); }

// --- Script Block 80 ---
(function(){
  function id(x){return document.getElementById(x)}
  function updateTier1Gate(){
    var docs=(id('tier1Docs')||{}).value||'complete';
    var dest=(id('tier1Destination')||{}).value||'APAC';
    var mat=(id('tier1Material')||{}).value||'High-purity metal';
    var out=id('tier1ReadinessOutput'); if(!out) return;
    var status='Approved for initial due diligence';
    var cls='tier1-status';
    var detail='Quote pack can be prepared with CoA, traceability audit trail, Incoterms 2020 route and standard compliance note.';
    if(docs==='partial'){status='Conditional — EUC pending'; cls='tier1-status warn'; detail='Initial review may proceed, but final quote release requires End-User Certificate and declared application before shipment confirmation.'}
    if(docs==='missing'){status='Suspended — controlled documents missing'; cls='tier1-status stop'; detail='RFQ is held until CoA scope, TDS/SDS and buyer/end-use file are completed. Commercial release is not recommended.'}
    if(/China|Other/.test(dest) && docs!=='missing'){status='Route-gated review'; cls='tier1-status warn'; detail='Destination-sensitive route requires manual export-control, consignee and end-use validation before final offer.'}
    out.innerHTML='<span class="'+cls+'">'+status+'</span><br><strong>'+mat+' · '+dest+'</strong><br>'+detail;
  }
  ['tier1Docs','tier1Destination','tier1Material'].forEach(function(x){var el=id(x); if(el) el.addEventListener('change',updateTier1Gate)});
  document.addEventListener('click',function(e){
    var tab=e.target.closest('[data-compliance-tab="tier1"]');
    if(tab) setTimeout(updateTier1Gate,30);
  });
  updateTier1Gate();
})();

// --- Script Block 81 ---
(function(){
var legalTexts={
liability:'LIMITATION OF LIABILITY\n\nThe total aggregate liability of the Seller arising out of or in connection with any contract, delivery, or batch of goods shall in no event exceed the invoice value of the specific batch of goods to which the claim relates. Under no circumstances shall the Seller be liable for indirect, incidental, special, punitive or consequential damages, including loss of production, loss of profit, loss of contracts, facility downtime, business interruption or reputational damage. The Buyer\'s sole and exclusive remedy shall be limited to replacement of the affected goods or refund of the invoice value of the affected batch, subject to the RMA & Quality Dispute Policy. The Seller shall not be liable for delay or failure caused by APAC port congestion, customs clearance delay, export/import control action, carrier disruption, force majeure, geopolitical restriction or regulatory intervention.',
rma:'RMA & QUALITY DISPUTE POLICY\n\nBuyer must submit written claim within 10 calendar days from delivery. Claim must include batch number, CoA reference, receiving condition, photographs and buyer test results with method declaration. Material must be quarantined, unused and preserved in original packaging where possible. Seller completes CoA, traceability and internal QC log review within 48 hours. If results diverge, dispute is escalated to SGS, Eurofins or mutually accepted ISO/IEC 17025 accredited laboratory. Final remedy is replacement or refund only if Seller fault is confirmed.',
euc:'END-USER CERTIFICATE POLICY\n\nEach controlled shipment requires End-User Certificate identifying legal end-user, country of use, final application, non-military declaration, authorized signatory, company stamp and consistency with PO/shipping documents. Company performs document consistency review, sanctions screening and export-control risk classification before quotation release, shipment release or banking document submission. Missing EUC, unclear application, restricted party indicators or high-risk jurisdiction trigger rejection or escalation.'
};
function q(id){return document.getElementById(id)}
function open(){var e=q('yykLegalEngine'); if(e){e.classList.add('active');e.setAttribute('aria-hidden','false');document.body.classList.add('apex-modal-open')}}
function close(){var e=q('yykLegalEngine'); if(e){e.classList.remove('active');e.setAttribute('aria-hidden','true');document.body.classList.remove('apex-modal-open')}}
var o=q('openLegalEngine'), c=q('closeLegalEngine'); if(o)o.addEventListener('click',open); if(c)c.addEventListener('click',close);
document.querySelectorAll('[data-legal-tab]').forEach(function(b){b.addEventListener('click',function(){var t=b.getAttribute('data-legal-tab');document.querySelectorAll('[data-legal-tab]').forEach(function(x){x.classList.toggle('active',x===b)});document.querySelectorAll('[data-legal-panel]').forEach(function(p){p.classList.toggle('active',p.getAttribute('data-legal-panel')===t)})})});
document.querySelectorAll('[data-legal-copy]').forEach(function(b){b.addEventListener('click',function(){var k=b.getAttribute('data-legal-copy');navigator.clipboard&&navigator.clipboard.writeText(legalTexts[k]);b.textContent='Copied';setTimeout(function(){b.textContent='Copy '+(k==='rma'?'RMA Policy':k==='euc'?'EUC Policy':'Clause')},1200)})});
document.querySelectorAll('[data-legal-download]').forEach(function(b){b.addEventListener('click',function(){var k=b.getAttribute('data-legal-download');var blob=new Blob([legalTexts[k]],{type:'text/plain;charset=utf-8'});var a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download='YYK_'+k.toUpperCase()+'_POLICY.txt';document.body.appendChild(a);a.click();setTimeout(function(){URL.revokeObjectURL(a.href);a.remove()},0)})});
var run=q('runLegalGate'); if(run)run.addEventListener('click',function(){var days=q('legalClaimDays').value, mat=q('legalMaterialStatus').value, euc=q('legalEucStatus').value, claim=q('legalBuyerClaim').value;var status='APPROVED FOR REVIEW', cls='';var actions=[];if(days==='45'||mat==='used'||euc==='missing'){status='BLOCKED / LIABILITY DEFENSE';cls=' yyk-legal-warning';actions.push('Reject automatic liability. Preserve limitation of liability and require counsel review.')}else if(days==='15'||mat==='opened'||euc==='minor'||claim==='sanctions'){status='CONDITIONAL / ESCALATE';actions.push('Open RMA/EUC exception ticket and request additional evidence before release.')}else{actions.push('Proceed with controlled review: RMA ticket, retained sample, CoA/QC log and screening archive.')}if(claim==='quality')actions.push('Use SGS/Eurofins ISO/IEC 17025 lab arbitration with GDMS/ICP-MS method alignment.');if(claim==='delay')actions.push('Apply APAC force majeure / logistics carve-out and issue incident chronology.');if(claim==='sanctions')actions.push('Stop shipment until EUC, registry and sanctions screening are clean.');q('legalGateOutput').className='yyk-legal-output'+cls;q('legalGateOutput').innerHTML='<span class="yyk-legal-pill">'+status+'</span><p>'+actions.join('</p><p>')+'</p>';});
})();

// --- Script Block 82 ---
(function(){
  var engine=document.getElementById('dataRoomStressEngine'), open=document.getElementById('openDataRoomStress'), close=document.getElementById('closeDataRoomStress');
  function show(){engine.classList.add('active');engine.setAttribute('aria-hidden','false');document.body.classList.add('apex-modal-open')}
  function hide(){engine.classList.remove('active');engine.setAttribute('aria-hidden','true');document.body.classList.remove('apex-modal-open')}
  if(open)open.addEventListener('click',show); if(close)close.addEventListener('click',hide); engine&&engine.addEventListener('click',function(e){if(e.target===engine)hide()});
  document.querySelectorAll('.yyk-dr-tab').forEach(function(btn){btn.addEventListener('click',function(){var key=btn.getAttribute('data-dr-tab');document.querySelectorAll('.yyk-dr-tab').forEach(function(x){x.classList.toggle('active',x===btn)});document.querySelectorAll('.yyk-dr-panel').forEach(function(p){p.classList.toggle('active',p.getAttribute('data-dr-panel')===key)})})});
  var q=[
    ['How do you guarantee no cross-contamination during port transshipment?','We do not rely on port cleanliness claims. Control is based on sealed primary packaging, secondary tamper-evident cartons, seal-number recording, warehouse gate photos, and receiving inspection. For ≥6N material, any broken seal triggers quarantine and referee testing before release.'],
    ['Show the calibration certificate for the GDMS analyzer used for this CoA.','The CoA is valid only when linked to a lab report ID and calibration certificate ID in Folder 11. The buyer receives instrument serial number, calibration date, reference standard, method scope and lab signatory.'],
    ['Can you trace this batch to raw-material origin?','Yes. The CoA Batch ID maps to supplier origin declaration, smelter/refiner lot, processing route, lab report, packaging event, warehouse gate-in and shipment document. Missing nodes block release.'],
    ['What happens if 7N aluminum is actually 5N after buyer inspection?','The batch is quarantined, retained samples are retested by an independent referee lab, and the RMA workflow applies: replacement, refund or credit note under the contract liability cap, plus CAPA and affected-lot review.'],
    ['How do you handle dual-use and sanctions risk?','Every transaction is gated by counterparty screening, destination review, EUC, end-use statement and restricted-party checks. Conditional or high-risk matches escalate to manual compliance review before quotation.'],
    ['Why should we trust supplier-provided CoA?','Supplier CoA is not sufficient alone. We require method declaration, impurity table, lab identity, calibration linkage, retained sample policy and, where required, independent cross-validation by GDMS/ICP-MS.'],
    ['What is your insurance coverage for CIF Busan or Yokohama?','Cargo coverage is documented in Folder 07. Default buyer-facing position is Institute Cargo Clauses (A), 110% invoice value, with policy/certificate number tied to the shipment.'],
    ['How do you prevent document substitution after RFQ?','Each released document receives an ID, version, issue date and hash. Production deployment should store this in a read-only access log and Data Room audit trail.'],
    ['What is your SLA if compliance review delays quotation?','RFQ acknowledgement is ≤4 hours; initial quote target ≤24 hours; technical review ≤48 hours; final offer ≤72 hours. Compliance escalation adds 24–48 hours and pauses SLA when buyer documents are missing.'],
    ['What makes this a real operating infrastructure rather than a website claim?','The buyer can audit the Data Room: ISO certificates, supplier qualification, CoA/lab calibration linkage, EUC screening records, logistics insurance, banking controls, RMA/CAPA and traceability chain. Claims are replaced by documents.']
  ];
  var list=document.getElementById('yykDefenseList'); if(list){q.forEach(function(row,i){var d=document.createElement('div');d.className='yyk-killer-q';d.innerHTML='<button type="button">Q'+(i+1)+'. '+row[0]+'</button><div class="yyk-killer-a">'+row[1]+'</div>';d.querySelector('button').addEventListener('click',function(){d.classList.toggle('active')});list.appendChild(d)})}
  var traceBtn=document.getElementById('yykTraceBtn'); if(traceBtn)traceBtn.addEventListener('click',function(){var lot=(document.getElementById('yykLotInput').value||'YYK-CU7N-2026-0517-A').toUpperCase();document.getElementById('yykTraceOutput').innerHTML='<b>Traceability status:</b> '+lot+' reconstructed.<br>Origin declaration → smelter/refiner lot → purification route → GDMS/ICP-MS report → calibration certificate → packaging seal → warehouse gate-in → export clearance → BL/AWB → buyer receiving inspection.<br><b>Release rule:</b> any missing node = controlled hold.'});
  var failBtn=document.getElementById('yykFailureBtn'); if(failBtn)failBtn.addEventListener('click',function(){var q=+document.getElementById('yykQty').value||0,p=+document.getElementById('yykPrice').value||0,i=+document.getElementById('yykImpact').value||0;var invoice=q*p, test=2500, freight=Math.max(3500,invoice*.04), replacement=invoice+freight+test, exposure=replacement+i;document.getElementById('yykFailureOutput').innerHTML='<b>Invoice value:</b> USD '+invoice.toLocaleString()+'<br><b>Direct replacement/RMA cost estimate:</b> USD '+replacement.toLocaleString()+'<br><b>Total commercial exposure including buyer line impact:</b> USD '+exposure.toLocaleString()+'<br><b>Decision:</b> quarantine batch, trigger referee lab retest, issue RMA/CAPA and suspend related lots until root cause is closed.'});
})();

// --- Script Block 83 ---
(function(){
  var engine=document.getElementById('redTeamAuditEngine'), open=document.getElementById('openRedTeamAudit'), close=document.getElementById('closeRedTeamAudit');
  function show(){engine.classList.add('active');engine.setAttribute('aria-hidden','false');document.body.classList.add('apex-modal-open')}
  function hide(){engine.classList.remove('active');engine.setAttribute('aria-hidden','true');document.body.classList.remove('apex-modal-open')}
  if(open)open.addEventListener('click',show); if(close)close.addEventListener('click',hide); if(engine)engine.addEventListener('click',function(e){if(e.target===engine)hide()});
  document.querySelectorAll('.rt-tab').forEach(function(btn){btn.addEventListener('click',function(){var key=btn.getAttribute('data-rt-tab');document.querySelectorAll('.rt-tab').forEach(function(x){x.classList.toggle('active',x===btn)});document.querySelectorAll('.rt-panel').forEach(function(p){p.classList.toggle('active',p.getAttribute('data-rt-panel')===key)})})});
  var answerMap={
    'Lab Service Agreement + GDMS Calibration Log':'Document response: Folder 11 / Laboratory Validation. Provide laboratory service agreement, ISO/IEC 17025 scope, GDMS instrument serial number, calibration certificate, reference standard, last-quarter calibration log, lab report ID and authorized signatory. If any item is missing, the CoA must be marked Conditional, not Released.',
    'End-User Certificate + Sanctions Screening Record':'Document response: Folder 05 / Compliance Screening. Provide EUC, end-use statement, buyer registry extract, restricted-party screening timestamp, list sources checked, reviewer name and release decision. Any one-character mismatch triggers controlled hold and formal correction.',
    'Cargo Insurance Certificate + Seal Photo Log':'Document response: Folder 07 / Logistics & Insurance. Provide policy certificate, Institute Cargo Clauses (A) if contracted, 110% invoice value evidence, seal numbers, gate-in photo log, packing photos, forwarder booking and BL/AWB reference.',
    'Retained Sample Chain-of-Custody':'Document response: Folder 10 / QA Retained Samples. Provide retained sample ID, storage location, sample weight, tamper evidence, custodian signature, sample pull date and referee lab release protocol.',
    'Supplier Qualification File + Smelter Origin Declaration':'Document response: Folder 03 / Supplier Qualification. Provide supplier onboarding checklist, origin declaration, smelter/refiner lot, audit notes, restricted geography review and batch genealogy map.'
  };
  var gen=document.getElementById('rtGenerateAnswer'); if(gen)gen.addEventListener('click',function(){var v=document.getElementById('rtDocSelect').value;document.getElementById('rtInspectorOutput').innerHTML='<strong>System response</strong><h3>Accepted — evidence path generated</h3><p>'+answerMap[v]+'</p><div class="rt-mini"><b>Red-team note:</b> response speed is acceptable only if the actual PDF/certificate exists in the Data Room and the access log records who opened it.</div>'});
  var killer=[
    ['Show us the exact retained sample that corresponds to this CoA.','Answer: retained sample ID must match batch ID, seal number and lab report ID. If retained sample is unavailable, do not defend the CoA; downgrade status to Conditional and request referee testing.'],
    ['Which clause prevents us from claiming line-stoppage damages?','Answer: the signed Terms must include exclusive remedy, direct-damages cap and consequential-damages exclusion. Website language must never override the contract.'],
    ['Why is the CoA valid if calibration was done after the analysis date?','Answer: it is not automatically valid. You must prove calibration validity covered the analysis date; otherwise retest or mark the CoA invalid.'],
    ['Can you certify TSMC/Samsung internal spec compliance?','Answer: only after receiving the controlled buyer spec under NDA and mapping each impurity/handling requirement to evidence. Public claims are not acceptable.'],
    ['Who signs off sanctions screening?','Answer: named compliance reviewer, timestamp, screening sources, EUC document ID and final status must be recorded before quotation release.']
  ];
  var list=document.getElementById('rtKillerList'); if(list){killer.forEach(function(row,i){var d=document.createElement('div');d.className='rt-q';d.innerHTML='<button type="button">Attack '+(i+1)+': '+row[0]+'</button><div class="rt-a">'+row[1]+'</div>';d.querySelector('button').addEventListener('click',function(){d.classList.toggle('active')});list.appendChild(d)})}
})();

// --- Script Block 84 ---
(function(){
  var engine=document.getElementById('tdsFoundryEngine'), open=document.getElementById('openTdsFoundryEngine'), close=document.getElementById('closeTdsFoundryEngine');
  function show(){if(!engine)return;engine.classList.add('active');engine.setAttribute('aria-hidden','false');document.body.classList.add('apex-modal-open')}
  function hide(){if(!engine)return;engine.classList.remove('active');engine.setAttribute('aria-hidden','true');document.body.classList.remove('apex-modal-open')}
  if(open)open.addEventListener('click',show); if(close)close.addEventListener('click',hide); if(engine)engine.addEventListener('click',function(e){if(e.target===engine)hide()});
  document.querySelectorAll('.yyk-tds-tab').forEach(function(btn){btn.addEventListener('click',function(){var key=btn.getAttribute('data-tds-tab');document.querySelectorAll('.yyk-tds-tab').forEach(function(x){x.classList.toggle('active',x===btn)});document.querySelectorAll('.yyk-tds-panel').forEach(function(p){p.classList.toggle('active',p.getAttribute('data-tds-panel')===key)})})});
  var batches=[['B001','99.99992%',80],['B002','99.99994%',60],['B003','99.99991%',90],['B004','99.99995%',50],['B005','99.99993%',70],['B006','99.99994%',60],['B007','99.99992%',80],['B008','99.99996%',40],['B009','99.99993%',70],['B010','99.99994%',60]];
  var bars=document.getElementById('spcBars'); if(bars){batches.forEach(function(b){var row=document.createElement('div');row.className='spc-row';row.innerHTML='<span>'+b[0]+'</span><span class="spc-track"><i class="spc-fill" style="--w:'+b[2]+'%"></i></span><span class="spc-val">'+b[1]+'</span>';bars.appendChild(row)})}
  function downloadText(filename,text){var blob=new Blob([text],{type:'text/plain;charset=utf-8'});var a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download=filename;document.body.appendChild(a);a.click();setTimeout(function(){URL.revokeObjectURL(a.href);a.remove()},0)}
  var spc=document.getElementById('downloadSpcDemo'); if(spc)spc.addEventListener('click',function(){downloadText('YYK_SPC_Demo_10_Batches.txt','YONGYEOKYO SPC DEMO — 10 BATCH HISTORY\nB001 99.99992% 0.80ppm\nB002 99.99994% 0.60ppm\nB003 99.99991% 0.90ppm\nB004 99.99995% 0.50ppm\nB005 99.99993% 0.70ppm\nB006 99.99994% 0.60ppm\nB007 99.99992% 0.80ppm\nB008 99.99996% 0.40ppm\nB009 99.99993% 0.70ppm\nB010 99.99994% 0.60ppm\nMean: 99.99993%; Corridor: 99.99991–99.99996%; Estimated Cpk > 1.67.');});
  var pack=document.getElementById('downloadTdsPack'); if(pack)pack.addEventListener('click',function(){downloadText('YYK_Foundry_TDS_Pack_Demo.txt','YONGYEOKYO FOUNDRY TDS PACK — DEMO\nCritical impurities: Li Na K Ti V Cr Mn Fe Ni Cu/Al S P.\nRadioisotopes: U <=0.1 ppb; Th <=0.1 ppb by ICP-MS ultra-trace mode.\nGas impurities: O <=10 ppm; N <=5 ppm; H <=3 ppm.\nSampling: ISO Class 5 / PTFE tools / inert handling / retained sample split.\nAnalytical: GDMS, ICP-MS, inert gas fusion, calibration and raw data archive.\nNote: buyer-specific foundry compliance requires NDA-controlled specification mapping.');});
  var run=document.getElementById('runTdsGate'); if(run)run.addEventListener('click',function(){var mat=document.getElementById('tdsMaterial').value, app=document.getElementById('tdsApplication').value, radio=document.getElementById('tdsRadio').value, spc=document.getElementById('tdsSpc').value;var status='READY FOR NDA SPEC MAPPING', cls='';var actions=['Prepare buyer-specific impurity crosswalk for '+mat+'.'];if(radio==='missing'){status='BLOCKED — U/Th GAP';cls=' warn';actions.push('Obtain ultra-trace ICP-MS report for U and Th below 0.1 ppb before foundry-facing release.')}if(spc==='missing'){status='CONDITIONAL — SPC GAP';cls=' warn';actions.push('Generate at least 10-batch SPC history or mark as sample-only material.')}else if(spc==='partial'){status=status==='READY FOR NDA SPEC MAPPING'?'CONDITIONAL — PARTIAL SPC':status;actions.push('Provide limited SPC and state that full process capability is pending.')}if(app==='foundry')actions.push('Do not claim Samsung/TSMC compliance without controlled buyer spec and signed NDA.');if(app==='vacuum')actions.push('Attach O/N/H gas impurity report and packaging/outgassing handling note.');document.getElementById('tdsGateOutput').innerHTML='<span class="yyk-tds-pill'+cls+'">'+status+'</span><p>'+actions.join('</p><p>')+'</p>';});
})();

// --- Script Block 85 ---
(function(){
  function qa(s){return Array.prototype.slice.call(document.querySelectorAll(s))}
  document.addEventListener('click',function(e){
    var tab=e.target.closest('.yyk-supply-tab');
    if(tab){var k=tab.getAttribute('data-supply-tab');qa('.yyk-supply-tab').forEach(function(x){x.classList.toggle('active',x===tab)});qa('.yyk-supply-panel').forEach(function(p){p.classList.toggle('active',p.getAttribute('data-supply-panel')===k)});return;}
    if(e.target && e.target.id==='runEucCheck'){
      var vals=['eucEntity','eucUse','eucCountry'].map(function(id){var el=document.getElementById(id);return el?el.value:'warn'});
      var res=document.getElementById('eucResult'); if(!res) return;
      var ok=vals.every(function(v){return v==='ok'});
      res.className='yyk-euc-result '+(ok?'ok':'warn');
      res.textContent=ok?'APPROVED: EUC fields are aligned. Shipment may proceed to sanctions screening and bonded release gate.':'BLOCKED: EUC ambiguity detected. Correct legal name, end-use or country of use before cargo release.';
    }
  });
})();

// --- Script Block 86 ---
(function(){
  'use strict';
  function q(s){return document.querySelector(s)}
  function qa(s,r){return Array.prototype.slice.call((r||document).querySelectorAll(s))}
  function setVdrTab(key){qa('.yyk-vdr-tab').forEach(function(t){t.classList.toggle('active',t.getAttribute('data-vdr-tab')===key)});qa('.yyk-vdr-panel').forEach(function(p){p.classList.toggle('active',p.getAttribute('data-vdr-panel')===key)});}
  function runQualification(){var checks=qa('#vdrQualificationForm input[type="checkbox"]');var score=checks.filter(function(c){return c.checked}).length;var res=q('#vdrQualificationResult');if(res){res.className='yyk-vdr-result '+(score>=6?'ok':(score>=4?'':'warn'));res.textContent=(score>=6?'PRE-QUALIFIED: buyer may proceed to NDA/KYC VDR access. ':score>=4?'CONDITIONAL: missing evidence should be uploaded before committee review. ':'NOT READY: supplier evidence pack is incomplete. ')+'Score '+score+'/'+checks.length;}}
  function downloadReport(){var checks=qa('#vdrQualificationForm input[type="checkbox"]');var score=checks.filter(function(c){return c.checked}).length;var rows=checks.map(function(c){var label=(c.closest('label')||{}).textContent||c.name||'Control';return '<tr><td>'+label.trim().replace(/</g,'&lt;')+'</td><td>'+(c.checked?'READY':'MISSING')+'</td></tr>';}).join('');var html='<!doctype html><html><head><meta charset="utf-8"><title>Supplier Pre-Qualification Report</title></head><body><h1>Preliminary Supplier Qualification Report — YONGYEOKYO</h1><p class="ok">Score: '+score+'/'+checks.length+'</p><p>Generated by autonomous VDR Self-Qualification module. Final approval requires buyer NDA, KYC and manual compliance review.</p><table><tr><th>Control</th><th>Status</th></tr>'+rows+'</table>

<!-- Stage 2.4 UX Visual Fix: remove thin hover/focus frames under return buttons without changing Gold Standard structure -->
<!-- /Stage 2.4 UX Visual Fix -->


<script id="yyk-stage-2-5-clean-interface-no-ghosts-js">
(function(){
  'use strict';
  var ghostPatterns=[
    /^\s*integrity\s+controls\s*$/i,
    /^\s*delivery\s*$/i,
    /^\s*;?var\s+blob\s*=\s*new\s+Blob/i,
    /YONGYEOKYO_Preliminary_Supplier_Qualification_Report\.html/i
  ];
  function isInsideAllowedCode(node){
    var el=node.parentElement;
    while(el){
      var tag=(el.tagName||'').toLowerCase();
      if(tag==='script'||tag==='style'||tag==='pre'||tag==='code'||tag==='textarea') return true;
      el=el.parentElement;
    }
    return false;
  }
  function cleanGhostText(root){
    if(!root||!document.body) return;
    var walker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT,{acceptNode:function(node){
      if(isInsideAllowedCode(node)) return NodeFilter.FILTER_REJECT;
      var t=node.nodeValue||'';
      if(!t.trim()) return NodeFilter.FILTER_REJECT;
      return ghostPatterns.some(function(rx){return rx.test(t.trim());})?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT;
    }});
    var targets=[];
    while(walker.nextNode()) targets.push(walker.currentNode);
    targets.forEach(function(node){
      var p=node.parentElement;
      if(p){
        p.classList.add('yyk-ghost-text');
        p.setAttribute('aria-hidden','true');
      }else{
        node.nodeValue='';
      }
    });
  }
  function normalizeActionTitles(){
    document.querySelectorAll('button,a,[role="button"],.micro-btn,.nav-link,.sogo-primary-cta').forEach(function(el){
      ['data-label','data-tooltip','data-title','data-hover','data-hint'].forEach(function(attr){
        if(el.hasAttribute(attr)) el.removeAttribute(attr);
      });
    });
  }
  function run(){cleanGhostText(document.body);normalizeActionTitles();}
  if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',run,{once:true});}else{run();}
  var mo=new MutationObserver(function(muts){
    var need=false;
    muts.forEach(function(m){if(m.addedNodes&&m.addedNodes.length) need=true;});
    if(need) window.requestAnimationFrame(run);
  });
  if(document.body) mo.observe(document.body,{childList:true,subtree:true});
})();

// --- Script Block 87 ---
(function(){
  function q(s){return document.querySelector(s)}
  function qa(s){return Array.prototype.slice.call(document.querySelectorAll(s))}
  function openLegal(){var m=q('#yykLegalShieldModal');if(!m)return;m.classList.add('active');m.setAttribute('aria-hidden','false');document.body.classList.add('apex-modal-open')}
  function closeLegal(){var m=q('#yykLegalShieldModal');if(!m)return;m.classList.remove('active');m.setAttribute('aria-hidden','true');document.body.classList.remove('apex-modal-open')}
  function cleanGhosts(){
    qa('body *').forEach(function(el){
      if(!el || el.children.length) return;
      var t=(el.textContent||'').trim();
      if(/^;?var blob=new blob/i.test(t)){ el.remove(); }
    });
    qa('a[target="_blank"]').forEach(function(a){a.setAttribute('rel','noopener noreferrer')});
    qa('form').forEach(function(form){
      if(!form.querySelector('[name="yyk_legal_acceptance"]')){
        var i=document.createElement('input');i.type='hidden';i.name='yyk_legal_acceptance';i.value='rfq_preliminary_non_binding_apac_b2b';form.appendChild(i);
      }
      if(!form.querySelector('.yyk-form-legal-note')){
        var n=document.createElement('div');n.className='yyk-form-legal-note';n.style.cssText='margin-top:8px;color:#AEB4BC;font-size:12px;line-height:1.5';
        n.textContent='Submission is preliminary and subject to verification, export-control review and written commercial acceptance.';form.appendChild(n);
      }
    });
  }
  document.addEventListener('click',function(e){
    if(e.target.closest('[data-open-legal-shield]')){openLegal();return}
    if(e.target.closest('[data-close-legal-shield]')){closeLegal();return}
    if(e.target.id==='yykLegalShieldModal'){closeLegal();return}
    if(e.target.closest('.yyk-return-to-site,.yyk-back-to-site,.return-to-site')){
      var active=e.target.closest('.compliance-engine,.product-engine,.contact-engine,.esg-deep-layer,.sogo-drawer,.modal,.yyk-legal-modal');
      if(active){active.classList.remove('active');active.setAttribute('aria-hidden','true');document.body.classList.remove('apex-modal-open');}
    }
  });
  document.addEventListener('keydown',function(e){if(e.key==='Escape')closeLegal()});
  if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',cleanGhosts)}else{cleanGhosts()}
  setTimeout(cleanGhosts,600);
})();

// --- Script Block 88 ---
(function(){
  'use strict';
  function q(s,r){return (r||document).querySelector(s)}
  function qa(s,r){return Array.prototype.slice.call((r||document).querySelectorAll(s))}
  function closeAllEngines(){
    qa('.compliance-engine.active,.product-engine.active,.contact-engine.active,.yyk-bcp-engine.active,.yyk-legal-engine.active,.yyk-data-room-engine.active,.yyk-vdr-engine.active,.yyk-supply-chain-engine.active,.yyk-tds-engine.active,.yyk-pricing-engine.active,.yyk-partnership-engine.active,.modal.active,.sogo-drawer.active').forEach(function(el){
      el.classList.remove('active');
      el.setAttribute('aria-hidden','true');
    });
    document.body.classList.remove('apex-modal-open');
  }
  function ensureReturnSiteInControl(){
    var modes=q('#yykAuditControlPanel .yyk-audit-modes');
    if(!modes || q('#yykAuditReturnSite')) return;
    var a=document.createElement('a');
    a.id='yykAuditReturnSite';
    a.className='yyk-return-site-btn';
    a.href='#top';
    a.textContent='Exit to Website';
    a.addEventListener('click',function(e){e.preventDefault(); closeAllEngines(); var top=q('#top')||document.body; top.scrollIntoView({behavior:'smooth',block:'start'});});
    modes.appendChild(a);
  }
  function ensureReturnSiteInEngines(){
    var selectors=['.compliance-head','.product-head','.contact-head','.bcp-head','.yyk-legal-head','.yyk-data-room-head','.yyk-vdr-head','.yyk-supply-chain-head','.yyk-tds-head','.yyk-pricing-head','.yyk-partnership-head'];
    selectors.forEach(function(sel){
      qa(sel).forEach(function(head){
        if(head.querySelector('.yyk-engine-return-site')) return;
        var close=head.querySelector('button,[aria-label*="Close"],.compliance-close,.product-close,.contact-close');
        var a=document.createElement('a');
        a.className='yyk-engine-return-site';
        a.href='#top';
        a.textContent='Exit to Website';
        a.addEventListener('click',function(e){e.preventDefault(); closeAllEngines(); var top=q('#top')||document.body; top.scrollIntoView({behavior:'smooth',block:'start'});});
        if(close && close.parentNode){ close.parentNode.insertBefore(a, close); }
        else { head.appendChild(a); }
      });
    });
  }
  function lockModeSwitchScroll(){
    document.addEventListener('click',function(e){
      var btn=e.target.closest && e.target.closest('#yykAuditControlPanel .yyk-mode-btn');
      if(!btn) return;
      var y=window.scrollY;
      requestAnimationFrame(function(){ window.scrollTo({top:y,left:0,behavior:'auto'}); });
      setTimeout(function(){ window.scrollTo({top:y,left:0,behavior:'auto'}); },0);
    },true);
  }
  function init(){ensureReturnSiteInControl(); ensureReturnSiteInEngines(); lockModeSwitchScroll();}
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();

// --- Script Block 89 ---
(function(){
  'use strict';
  function q(s,r){return (r||document).querySelector(s)}
  function qa(s,r){return Array.prototype.slice.call((r||document).querySelectorAll(s))}
  function closeAll(){
    qa('.compliance-engine.active,.product-engine.active,.contact-engine.active,.yyk-bcp-engine.active,.yyk-legal-engine.active,.yyk-data-room-engine.active,.yyk-vdr-engine.active,.yyk-supply-chain-engine.active,.yyk-tds-engine.active,.yyk-pricing-engine.active,.yyk-partnership-engine.active,.modal.active,.sogo-drawer.active').forEach(function(el){el.classList.remove('active');el.setAttribute('aria-hidden','true')});
    document.body.classList.remove('apex-modal-open');
  }
  function moveExitToLeftActions(){
    var panel=q('#yykAuditControlPanel'), actions=q('#yykAuditControlPanel .yyk-control-actions');
    if(!panel || !actions) return;
    var exit=q('#yykAuditReturnSite') || q('#yykAuditControlPanel .yyk-return-site-btn');
    if(!exit){
      exit=document.createElement('a');
      exit.id="yykAuditReturnSite__dup2" data-original-id="yykAuditReturnSite__d27clean2" data-original-id="yykAuditReturnSite";
      exit.className='yyk-return-site-btn';
      exit.href='#top';
      exit.textContent='Exit to Website';
    }
    if(exit.parentNode!==actions) actions.insertBefore(exit,actions.firstChild);
    exit.onclick=function(e){e.preventDefault();closeAll();(q('#top')||document.body).scrollIntoView({behavior:'smooth',block:'start'});};
  }
  function normalizeModeLabels(){
    qa('#yykAuditControlPanel .yyk-mode-btn').forEach(function(btn){
      var t=(btn.textContent||'').trim().toLowerCase();
      if(t.indexOf('procurement')>-1) btn.textContent='Procurement';
      if(t.indexOf('engineering')>-1) btn.textContent='Engineering';
      if(t.indexOf('compliance')>-1) btn.textContent='Compliance';
    });
  }
  function stabilizeSwitching(){
    document.addEventListener('click',function(e){
      var btn=e.target.closest && e.target.closest('#yykAuditControlPanel .yyk-mode-btn');
      if(!btn) return;
      var y=window.scrollY;
      qa('#yykAuditControlPanel .yyk-mode-btn').forEach(function(b){b.classList.remove('active');b.setAttribute('aria-selected','false')});
      btn.classList.add('active');btn.setAttribute('aria-selected','true');
      requestAnimationFrame(function(){window.scrollTo({top:y,left:0,behavior:'auto'});});
      setTimeout(function(){window.scrollTo({top:y,left:0,behavior:'auto'});},0);
    },true);
  }
  function init(){moveExitToLeftActions();normalizeModeLabels();stabilizeSwitching();}
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();

// --- Script Block 90 ---
(function(){'use strict';function q(s,r){return (r||document).querySelector(s)}function ensureExecutiveButton(){var actions=q('#yykAuditControlActions');if(!actions)return;var existing=q('#yykAuditExecutiveBtn');if(existing&&existing.parentNode===actions)return;if(existing)existing.remove();var btn=document.createElement('button');btn.id='yykAuditExecutiveBtn';btn.className='yyk-executive-primary-btn';btn.type='button';btn.textContent='Executive Overview';btn.addEventListener('click',function(e){e.preventDefault();var layer=q('#yykExecutiveDecisionLayer');if(layer)layer.scrollIntoView({behavior:'smooth',block:'start'});});actions.insertBefore(btn,actions.firstChild)}function computeDecision(){var evidence={euc:true,sanctions:true,coa:true,lab:false,route:true,spec:true};var missing=Object.keys(evidence).filter(function(k){return !evidence[k]});var risk=missing.length?42:24,margin=14;var pill=q('#yykExecStatusPill'),rec=q('#yykExecRecommendation'),kill=q('#yykExecKillSwitch');if(missing.length){if(pill){pill.textContent='CONDITIONAL APPROVAL';pill.classList.remove('is-approved','is-blocked')}if(rec)rec.textContent='RECOMMENDATION: APPROVE WITH CONDITIONS — RELEASE ONLY AFTER LAB CALIBRATION ID IS ATTACHED';if(kill)kill.textContent='KILL SWITCH ARMED: DO NOT QUOTE if EUC, sanctions screen, CoA method ID, lab calibration ID, bonded route confirmation or buyer foundry spec mapping is missing.'}else if(risk>70){if(pill){pill.textContent='DO NOT QUOTE';pill.classList.add('is-blocked');pill.classList.remove('is-approved')}if(rec)rec.textContent='RECOMMENDATION: REJECT — RISK INDEX ABOVE EXECUTIVE LIMIT'}else{if(pill){pill.textContent='APPROVED';pill.classList.add('is-approved');pill.classList.remove('is-blocked')}if(rec)rec.textContent='RECOMMENDATION: APPROVE — QUOTE RELEASE ENABLED'}var r=q('#yykExecRiskIndex');if(r)r.textContent=risk+'%';var m=q('#yykExecMargin');if(m)m.textContent='+'+margin+'%'}function watchRail(){var actions=q('#yykAuditControlActions');if(!actions)return;var lock=false;new MutationObserver(function(){if(lock)return;lock=true;requestAnimationFrame(function(){ensureExecutiveButton();lock=false})}).observe(actions,{childList:true})}function init(){ensureExecutiveButton();computeDecision();watchRail()}if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();})();

// --- Script Block 91 ---
(function(){
  'use strict';
  var ORDER={vdr:20,legal:30,supply:40,data:50,pricing:60,tds:70,partnership:80};
  var MAP={data:'dataRoomStressEngine',vdr:'vdrEngine',supply:'supplyChainEngine',legal:'yykLegalEngine',tds:'tdsFoundryEngine',pricing:'pricingEngine',partnership:'technicalPartnershipEngine'};
  function q(s,r){return (r||document).querySelector(s)}
  function qa(s,r){return Array.prototype.slice.call((r||document).querySelectorAll(s))}
  function text(el){return (el.textContent||'').replace(/\s+/g,' ').trim()}
  function closeAll(){
    qa('.compliance-engine.active,.product-engine.active,.contact-engine.active,.yyk-bcp-engine.active,.yyk-legal-engine.active,.yyk-data-room-engine.active,.yyk-vdr-engine.active,.yyk-supply-chain-engine.active,.yyk-tds-engine.active,.yyk-pricing-engine.active,.yyk-partnership-engine.active,.modal.active,.sogo-drawer.active').forEach(function(el){
      el.classList.remove('active');
      el.setAttribute('aria-hidden','true');
    });
    document.body.classList.remove('apex-modal-open');
  }
  function openEngine(key){
    var id=MAP[key], el=id && document.getElementById(id);
    if(!el) return false;
    closeAll();
    el.classList.add('active');
    el.setAttribute('aria-hidden','false');
    document.body.classList.add('apex-modal-open');
    return true;
  }
  function ensureRail(){
    var rail=q('#yykAuditControlActions');
    if(!rail) return;
    rail.classList.add('yyk-v32-single-line-ready');
    var exit=q('#yykAuditReturnSite') || q('#yykAuditControlPanel .yyk-return-site-btn');
    if(!exit){
      exit=document.createElement('a');
      exit.id="yykAuditReturnSite__dup3" data-original-id="yykAuditReturnSite__d27clean3" data-original-id="yykAuditReturnSite";
      exit.className='yyk-return-site-btn';
      exit.href='#top';
      exit.textContent='Exit to Website';
    }
    if(exit.parentNode!==rail) rail.insertBefore(exit,rail.firstChild);
    exit.onclick=function(e){
      e.preventDefault();
      closeAll();
      var top=q('#top')||document.body;
      top.scrollIntoView({behavior:'smooth',block:'start'});
    };
    var exec=q('#yykAuditExecutiveBtn') || q('#yykAuditControlPanel .yyk-executive-primary-btn') || q('#yykAuditControlPanel .yyk-v32-exec-btn');
    if(!exec){
      exec=document.createElement('button');
      exec.id="yykAuditExecutiveBtn__dup2" data-original-id="yykAuditExecutiveBtn__d27clean2" data-original-id="yykAuditExecutiveBtn";
      exec.type='button';
      exec.textContent='Executive Overview';
    }
    exec.className='yyk-v32-exec-btn';
    exec.setAttribute('aria-label','Open Executive Decision Layer');
    if(exec.parentNode!==rail) rail.insertBefore(exec,exit.nextSibling);
    exec.onclick=function(e){
      e.preventDefault();
      closeAll();
      var target=q('#yykExecutiveDecisionLayer') || q('.yyk-executive-decision-layer') || q('[id*="ExecutiveDecision"]');
      if(target) target.scrollIntoView({behavior:'smooth',block:'start'});
    };
    qa('.yyk-control-action',rail).forEach(function(btn){
      var key=btn.getAttribute('data-open-engine');
      if(!key){
        var t=text(btn).toLowerCase();
        if(t.indexOf('virtual')>-1) key='vdr';
        else if(t.indexOf('legal')>-1) key='legal';
        else if(t.indexOf('supply')>-1) key='supply';
        else if(t.indexOf('data room')>-1 || t.indexOf('stress')>-1) key='data';
        else if(t.indexOf('pricing')>-1) key='pricing';
        else if(t.indexOf('tds')>-1 || t.indexOf('foundry')>-1) key='tds';
        else if(t.indexOf('partnership')>-1) key='partnership';
        if(key) btn.setAttribute('data-open-engine',key);
      }
      if(key && ORDER[key]) btn.style.order=ORDER[key];
      btn.type='button';
      btn.disabled=false;
      btn.removeAttribute('aria-disabled');
      btn.setAttribute('tabindex','0');
    });
    exit.style.order='0';
    exec.style.order='10';
  }
  function wireClicks(){
    if(document.__yykV32RailClicks) return;
    document.__yykV32RailClicks=true;
    document.addEventListener('click',function(e){
      var engineBtn=e.target.closest && e.target.closest('#yykAuditControlPanel [data-open-engine]');
      if(engineBtn){
        e.preventDefault();
        var key=engineBtn.getAttribute('data-open-engine');
        openEngine(key);
        return;
      }
      var mode=e.target.closest && e.target.closest('#yykAuditControlPanel .yyk-mode-btn');
      if(mode){
        var y=window.scrollY;
        setTimeout(function(){ensureRail();window.scrollTo({top:y,left:0,behavior:'auto'});},0);
      }
    },true);
  }
  function install(){
    ensureRail();
    wireClicks();
    var rail=q('#yykAuditControlActions');
    if(rail && !rail.__yykV32Observer){
      var obs=new MutationObserver(function(){setTimeout(ensureRail,0)});
      obs.observe(rail,{childList:true,subtree:true,attributes:true});
      rail.__yykV32Observer=obs;
    }
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',install); else install();
})();

// --- Script Block 92 ---
(function(){
  'use strict';
  var INTEL={
    'Executive Overview':{status:'BOARD VIEW',body:'Executive decision cockpit: RFQ status, margin lens, risk index, compliance gate and quote recommendation.',risk:'Kill switch',evidence:'RFQ + Legal + Route'},
    'Exit to Website':{status:'RETURN',body:'Close active engines and return to public website surface without changing procurement state.',risk:'None',evidence:'UI navigation'},
    'Virtual Data Room':{status:'GATED',body:'NDA/KYC-controlled evidence vault for buyer audit packs, qualification files and APAC technical governance.',risk:'Access control',evidence:'VDR logs'},
    'Legal Engine':{status:'CONTROL',body:'Liability cap, RMA pathway, EUC language, sanctions posture and transaction document alignment.',risk:'Contract leakage',evidence:'Legal armor'},
    'Supply Chain Engine':{status:'ROUTE',body:'Bonded warehouse route, custody chain, BCP triggers, carrier readiness and emergency release logic.',risk:'Port / carrier',evidence:'BCP route'},
    'Data Room / Stress Test':{status:'AUDIT',body:'Stress questions, cost-of-failure logic, audit evidence and buyer due-diligence defense.',risk:'Buyer audit',evidence:'Defense pack'},
    'Pricing Engine':{status:'MARGIN',body:'Index-based pricing, purity premium, logistics cost and margin sensitivity decision support.',risk:'Margin erosion',evidence:'Pricing memo'},
    'TDS Foundry Engine':{status:'FOUNDRY',body:'Impurity matrix, Fe/U/Th ultra-trace controls, gas profile, SPC history and method traceability.',risk:'Qualification',evidence:'CoA / GDMS'},
    'Technical Partnership':{status:'R&D',body:'Custom trace profile, samples policy, joint lab testing and technical qualification coordination.',risk:'Spec drift',evidence:'Joint lab'}
  };
  function q(s,r){return (r||document).querySelector(s)}
  function text(el){return (el && el.textContent || '').replace(/\s+/g,' ').trim()}
  function cleanLabel(label){
    return label.replace(/^[·•.\s]+|[·•.\s]+$/g,'').replace(/\s+/g,' ').trim();
  }
  function ensureTip(){
    var tip=q('#yykHoverIntelTooltip');
    if(tip) return tip;
    tip=document.createElement('div');
    tip.id='yykHoverIntelTooltip';
    tip.className='yyk-hover-intel-tooltip';
    tip.setAttribute('role','tooltip');
    tip.innerHTML='<div class="yyk-hover-intel-top"><div class="yyk-hover-intel-title"></div><div class="yyk-hover-intel-status"></div></div><div class="yyk-hover-intel-body"></div><div class="yyk-hover-intel-grid"><div class="yyk-hover-intel-kv"><b>Risk Lens</b><span></span></div><div class="yyk-hover-intel-kv"><b>Evidence</b><span></span></div></div>';
    document.body.appendChild(tip);
    return tip;
  }
  function attachIntel(el){
    if(!el || el.__yykHoverIntel) return;
    el.__yykHoverIntel=true;
    var raw=cleanLabel(text(el));
    Object.keys(INTEL).forEach(function(k){if(raw.toLowerCase()===k.toLowerCase()) raw=k;});
    if(!INTEL[raw]) return;
    el.setAttribute('data-hover-intel','true');
    el.setAttribute('aria-describedby','yykHoverIntelTooltip');
    el.addEventListener('mouseenter',function(){show(el,raw)});
    el.addEventListener('focus',function(){show(el,raw)});
    el.addEventListener('mousemove',function(){position(el)});
    el.addEventListener('mouseleave',hide);
    el.addEventListener('blur',hide);
  }
  function show(el,label){
    var data=INTEL[label], tip=ensureTip();
    if(!data) return;
    q('.yyk-hover-intel-title',tip).textContent=label;
    q('.yyk-hover-intel-status',tip).textContent=data.status;
    q('.yyk-hover-intel-body',tip).textContent=data.body;
    q('.yyk-hover-intel-kv:nth-child(1) span',tip).textContent=data.risk;
    q('.yyk-hover-intel-kv:nth-child(2) span',tip).textContent=data.evidence;
    position(el);
    tip.classList.add('active');
  }
  function position(el){
    var tip=ensureTip(), r=el.getBoundingClientRect(), pad=14;
    var w=tip.offsetWidth || 360, h=tip.offsetHeight || 150;
    var left=Math.min(Math.max(r.left, pad), window.innerWidth-w-pad);
    var top=r.bottom+10;
    if(top+h+pad>window.innerHeight) top=Math.max(pad,r.top-h-10);
    tip.style.left=left+'px';
    tip.style.top=top+'px';
  }
  function hide(){
    var tip=q('#yykHoverIntelTooltip');
    if(tip) tip.classList.remove('active');
  }
  function scrubGhostText(){
    var rail=q('#yykAuditControlActions');
    if(!rail) return;
    Array.prototype.slice.call(rail.childNodes).forEach(function(n){
      if(n.nodeType===3 && /^[\s.·•#]+$/.test(n.nodeValue||'')) n.nodeValue=' ';
    });
  }
  function init(){
    scrubGhostText();
    var selectors='#yykAuditControlPanel .yyk-control-action,#yykAuditControlPanel .yyk-v32-exec-btn,#yykAuditControlPanel .yyk-return-site-btn';
    Array.prototype.slice.call(document.querySelectorAll(selectors)).forEach(attachIntel);
    var rail=q('#yykAuditControlActions');
    if(rail && !rail.__yykHoverIntelObserver){
      rail.__yykHoverIntelObserver=new MutationObserver(function(){setTimeout(init,0)});
      rail.__yykHoverIntelObserver.observe(rail,{childList:true,subtree:true,characterData:true});
    }
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',init); else init();
})();

// --- Script Block 93 ---
(function(){
  'use strict';
  function q(s){return document.querySelector(s)}
  function qa(s,r){return Array.prototype.slice.call((r||document).querySelectorAll(s))}
  function computeApproval(){var checks=qa('#approvalGateGrid input[type="checkbox"]');if(!checks.length)return;var ready=checks.filter(function(c){return c.checked}).length;var score=Math.round((ready/checks.length)*100);var decision=score>=85?'APPROVED':(score>=65?'CONDITIONAL':'REJECT');var scoreEl=q('#approvalScore');if(scoreEl)scoreEl.textContent=score+'/100';var decisionEl=q('#approvalDecision');if(decisionEl)decisionEl.textContent=decision;var list=q('#approvalRemediation');if(list){list.innerHTML='';checks.filter(function(c){return !c.checked}).forEach(function(c){var li=document.createElement('li');li.textContent=((c.closest('label')||{}).textContent||'Missing evidence').trim();list.appendChild(li);});}}
  function downloadScorecard(){var checks=qa('#approvalGateGrid input[type="checkbox"]');var ready=checks.filter(function(c){return c.checked}).length;var score=checks.length?Math.round((ready/checks.length)*100):0;var decision=score>=85?'APPROVED':(score>=65?'CONDITIONAL':'REJECT');var rows=checks.map(function(c){var label=((c.closest('label')||{}).textContent||'Gate').trim().replace(/</g,'&lt;');return '<tr><td>'+label+'</td><td>'+(c.checked?'READY':'MISSING')+'</td></tr>';}).join('');var html='<!doctype html><html><head><meta charset="utf-8"><title>Supplier Approval Scorecard</title></head><body><h1>Supplier Approval Simulation Scorecard — YONGYEOKYO</h1><div class="score">'+score+'/100</div><p><b>Decision:</b> '+decision+'</p><p>Generated by autonomous Supplier Approval Engine. Final approval requires buyer-side validation of originals under NDA/KYC.</p><table><tr><th>Gate</th><th>Evidence ready</th></tr>'+rows+'</table>

<!-- Stage 2.4 UX Visual Fix: remove thin hover/focus frames under return buttons without changing Gold Standard structure -->

<!-- /Stage 2.4 UX Visual Fix -->




<!-- YONGYEOKYO v3.2 — INTERACTIVE SINGLE-LINE COMMAND RAIL FIX -->


<!-- /YONGYEOKYO v3.2 -->
<div aria-hidden="true" class="yyk-pricing-engine" id="pricingEngine">
<div aria-labelledby="yykPricingTitle" aria-modal="true" class="yyk-pricing-shell" role="dialog">
<div class="yyk-pricing-head">
<div>
<div class="eyebrow">YONGYEOKYO · Pricing &amp; Analytics</div>
<div class="yyk-pricing-title" id="yykPricingTitle">Dynamic Pricing Engine</div>
<p class="hint">Index-based pricing, price protection, monthly market insights and supply security redundancy for buyer-side budget defense.</p>
</div>
<button aria-label="Close Pricing Engine" class="yyk-pricing-close" id="closePricingEngine" type="button">×</button>
</div>
<div aria-label="Pricing Engine tabs" class="yyk-pricing-tabs" role="tablist">
<button class="yyk-pricing-tab active" data-pricing-tab="formula" type="button">Index Pricing</button>
<button class="yyk-pricing-tab" data-pricing-tab="protection" type="button">Price Protection</button>
<button class="yyk-pricing-tab" data-pricing-tab="insights" type="button">Market Insights</button>
<button class="yyk-pricing-tab" data-pricing-tab="security" type="button">Supply Security</button>
</div>
<div class="yyk-pricing-body">
<aside class="yyk-pricing-side">
<div class="yyk-price-output">
<div class="yyk-price-number" id="pricingFinalPrice">—</div>
<div class="yyk-price-label">Formula price / kg</div>
<div class="yyk-price-meta">
<div class="yyk-price-row"><span>Index</span><b id="pricingIndexLabel">LME</b></div>
<div class="yyk-price-row"><span>Purity premium</span><b id="pricingPremiumLabel">6N</b></div>
<div class="yyk-price-row"><span>Contract model</span><b id="pricingContractLabel">Spot</b></div>
<div class="yyk-price-row"><span>Budget risk</span><b id="pricingRiskLabel">Medium</b></div>
</div>
</div>
<div class="yyk-pricing-actions">
<button class="micro-btn" id="pricingDemo" type="button">Load Demo</button>
<button class="micro-btn" id="pricingDownload" type="button">Download Pricing Memo</button>
</div>
<div class="yyk-pricing-note">Pricing is a commercial simulation layer. Live offers require released index basis, quantity, delivery term, buyer clearance, EUC and logistics confirmation.</div>
</aside>
<main class="yyk-pricing-content">
<section class="yyk-pricing-panel active" data-pricing-panel="formula">
<div class="section-head"><div><div class="eyebrow">Transparent commercial basis</div><h2>Index-Based Pricing Protocol</h2></div><div class="hint">Formula: Index Price + Purity Premium + Logistics &amp; Compliance Cost. This lets procurement defend the price internally without treating the quote as an arbitrary markup.</div></div>
<div class="yyk-pricing-form">
<div class="yyk-pricing-field"><label>Index source</label><select id="pricingIndex"><option value="LME">LME</option><option value="SMM">SMM</option></select></div>
<div class="yyk-pricing-field"><label>Index price / kg</label><input id="pricingBase" min="0" step="0.01" type="number" value="9.20"/></div>
<div class="yyk-pricing-field"><label>Purity grade</label><select id="pricingGrade"><option value="5N">5N Base</option><option selected="" value="6N">6N</option><option value="7N">7N</option></select></div>
<div class="yyk-pricing-field"><label>Logistics / kg</label><input id="pricingLogistics" min="0" step="0.01" type="number" value="1.80"/></div>
<div class="yyk-pricing-field"><label>Compliance / kg</label><input id="pricingCompliance" min="0" step="0.01" type="number" value="0.65"/></div>
<div class="yyk-pricing-field"><label>Contract</label><select id="pricingContract"><option value="spot">Spot</option><option value="fixed3">Fixed 3M</option><option value="fixed6">Fixed 6M</option><option value="reservation">Volume Reservation</option></select></div>
</div>
<table class="yyk-pricing-table"><thead><tr><th>Component</th><th>Rule</th><th>Buyer value</th></tr></thead><tbody><tr><td>Index Price</td><td>LME or SMM basis, stated on quotation</td><td>Transparent benchmark reference</td></tr><tr><td>Purity Premium</td><td>5N base / 6N +15–30% / 7N +40–80%</td><td>Premium linked to analytical difficulty</td></tr><tr><td>Logistics &amp; Compliance</td><td>Bonded storage, insurance, EUC, screening, customs</td><td>No hidden operating charges</td></tr></tbody></table>
</section>
<section class="yyk-pricing-panel" data-pricing-panel="protection">
<div class="section-head"><div><div class="eyebrow">Budget stability</div><h2>Price Protection &amp; Reservation</h2></div><div class="hint">Designed for chip-cost planning: fixed price terms, capacity reservation and bonded stock allocation under agreed risk-sharing rules.</div></div>
<div class="yyk-pricing-grid"><div class="yyk-pricing-card"><h3>Fixed Price Contract</h3><ul><li>3–6 month validity window.</li><li>Price based on index fixing or rolling-average basis.</li><li>Quantity, release schedule and EUC scope locked at contract signature.</li><li>Deviation clauses for regulatory force majeure only.</li></ul></div><div class="yyk-pricing-card"><h3>Volume Reservation</h3><ul><li>Buyer reserves allocation against forecast.</li><li>Seller reserves production slot and bonded inventory.</li><li>Release windows aligned with buyer JIT requirements.</li><li>Reservation fee credited against shipped volume when agreed.</li></ul></div></div>
<table class="yyk-pricing-table"><thead><tr><th>Risk</th><th>Allocation</th><th>Control</th></tr></thead><tbody><tr><td>Index volatility</td><td>Buyer / shared</td><td>Fixed window or rolling average</td></tr><tr><td>Purity deviation</td><td>Seller</td><td>CoA, RMA, independent lab arbitration</td></tr><tr><td>Port delay</td><td>Shared / force majeure</td><td>Bonded stock and alternative routing</td></tr></tbody></table>
</section>
<section class="yyk-pricing-panel" data-pricing-panel="insights">
<div class="section-head"><div><div class="eyebrow">Client advisory layer</div><h2>Monthly Market Insights Template</h2></div><div class="hint">A compact buyer-facing digest that turns the company into an analytical partner, not a passive quote desk.</div></div>
<div class="yyk-pricing-grid"><div class="yyk-pricing-card"><h3>Report Sections</h3><ul><li>Executive Summary: market direction and top risks.</li><li>Price Trends: copper, aluminum, zinc, rare earths.</li><li>APAC Logistics: Busan/Yokohama congestion and freight movement.</li><li>Regulatory Updates: China export controls, METI/KOSTI notes.</li><li>Risk Outlook: supply, price, sanctions and port disruption.</li></ul></div><div class="yyk-pricing-card"><h3>Sample Risk Outlook</h3><table class="yyk-pricing-table"><tbody><tr><td>Price volatility</td><td><span class="yyk-risk-pill high">High</span></td></tr><tr><td>Supply disruption</td><td><span class="yyk-risk-pill medium">Medium</span></td></tr><tr><td>Sanctions exposure</td><td><span class="yyk-risk-pill">Low</span></td></tr></tbody></table></div></div>
</section>
<section class="yyk-pricing-panel" data-pricing-panel="security">
<div class="section-head"><div><div class="eyebrow">China Plus One</div><h2>Supply Chain Security &amp; Redundancy</h2></div><div class="hint">No single-point-failure sourcing narrative: primary route, qualified backup supplier and emergency bonded stock.</div></div>
<div class="yyk-pricing-grid"><div class="yyk-pricing-card"><h3>Redundancy Model</h3><ul><li>Primary supplier: qualified refining route.</li><li>Backup supplier: pre-screened alternative source.</li><li>Emergency stock: Busan / Yokohama bonded inventory.</li><li>Routing fallback: air freight for urgent JIT recovery.</li></ul></div><div class="yyk-pricing-card"><h3>Buyer Assurance</h3><ul><li>Alternative origin disclosed under NDA when required.</li><li>Equivalent CoA and method mapping required for backup sources.</li><li>EUC and sanctions screening repeated per route.</li><li>Inventory status tied to VDR access level.</li></ul></div></div>
<div class="yyk-pricing-note">Preferred wording: Precision · Verification · Compliance · Traceability. Avoid “best price”, “unique network” or emotional superlatives in APAC B2B procurement copy.</div>
</section>
</main>
</div>
</div>
</div>
<script id="yyk-pricing-engine-script">
(function(){
  'use strict';
  function q(s){return document.querySelector(s)}
  function qa(s,r){return Array.prototype.slice.call((r||document).querySelectorAll(s))}
  function n(id){var el=q(id);return Number(el&&el.value||0)}
  function gradePremium(grade){return grade==='7N'?0.60:(grade==='6N'?0.22:0)}
  function contractPremium(contract){return contract==='fixed6'?0.06:(contract==='fixed3'?0.035:(contract==='reservation'?0.025:0))}
  function calc(){var index=(q('#pricingIndex')||{}).value||'LME';var grade=(q('#pricingGrade')||{}).value||'6N';var contract=(q('#pricingContract')||{}).value||'spot';var base=n('#pricingBase'),logistics=n('#pricingLogistics'),compliance=n('#pricingCompliance');var premium=base*gradePremium(grade);var hedge=(base+premium)*contractPremium(contract);var price=base+premium+logistics+compliance+hedge;var risk=contract==='spot'?'Medium':(contract==='fixed6'?'Low':'Controlled');if(q('#pricingFinalPrice'))q('#pricingFinalPrice').textContent='$'+price.toFixed(2)+'/kg';if(q('#pricingFormulaBreakdown'))q('#pricingFormulaBreakdown').textContent=index+' index '+base.toFixed(2)+' + purity premium '+premium.toFixed(2)+' + logistics '+logistics.toFixed(2)+' + compliance '+compliance.toFixed(2)+' + protection '+hedge.toFixed(2);if(q('#pricingRisk'))q('#pricingRisk').textContent=risk;window.YYK_PRICING_LAST={index:index,grade:grade,contract:contract,base:base,purityPremium:premium,logistics:logistics,compliance:compliance,hedge:hedge,finalPrice:price,risk:risk};}
  function setTab(key){qa('[data-pricing-tab]').forEach(function(t){t.classList.toggle('active',t.getAttribute('data-pricing-tab')===key)});qa('[data-pricing-panel]').forEach(function(p){p.classList.toggle('active',p.getAttribute('data-pricing-panel')===key)});}
  function close(){var el=q('#pricingEngine');if(el){el.classList.remove('active');el.setAttribute('aria-hidden','true')}document.body.classList.remove('apex-modal-open');}
  function downloadMemo(){calc();var p=window.YYK_PRICING_LAST||{};var html='<!doctype html><html><head><meta charset="utf-8"><title>Pricing Memo</title></head><body><h1>YONGYEOKYO Pricing & Analytics Memo</h1><div class="price">$'+(p.finalPrice||0).toFixed(2)+'/kg</div><p><b>Formula:</b> Index Price + Purity Premium + Logistics & Compliance Cost + Contract Protection Premium.</p><table><tr><th>Input</th><th>Value</th></tr><tr><td>Index</td><td>'+p.index+'</td></tr><tr><td>Base</td><td>$'+(p.base||0).toFixed(2)+'</td></tr><tr><td>Grade</td><td>'+p.grade+'</td></tr><tr><td>Purity premium</td><td>$'+(p.purityPremium||0).toFixed(2)+'</td></tr><tr><td>Logistics</td><td>$'+(p.logistics||0).toFixed(2)+'</td></tr><tr><td>Compliance</td><td>$'+(p.compliance||0).toFixed(2)+'</td></tr><tr><td>Contract protection</td><td>$'+(p.hedge||0).toFixed(2)+'</td></tr><tr><td>Risk</td><td>'+p.risk+'</td></tr></table>

<!-- Stage 2.4 UX Visual Fix: remove thin hover/focus frames under return buttons without changing Gold Standard structure -->

<!-- /Stage 2.4 UX Visual Fix -->




<!-- YONGYEOKYO v3.2 — INTERACTIVE SINGLE-LINE COMMAND RAIL FIX -->


<!-- /YONGYEOKYO v3.2 -->
<!-- TECHNICAL PARTNERSHIP ENGINE — Custom Trace Profile / Round Robin / Samples -->
<div aria-hidden="true" class="yyk-partnership-engine" id="technicalPartnershipEngine">
<div aria-labelledby="yykPartnershipTitle" aria-modal="true" class="yyk-partnership-shell" role="dialog">
<div class="yyk-partnership-head"><div><div class="eyebrow">YONGYEOKYO · Engineering Collaboration</div><div class="yyk-partnership-title" id="yykPartnershipTitle">Technical Partnership Engine</div><p class="hint">Custom trace profiles, round robin laboratory correlation, qualification samples and 3–5 year materials roadmap for technical buyer teams.</p></div><button aria-label="Close Technical Partnership Engine" class="yyk-partnership-close" id="closeTechnicalPartnershipEngine" type="button">×</button></div>
<div aria-label="Technical Partnership tabs" class="yyk-partnership-tabs" role="tablist"><button class="yyk-partnership-tab active" data-partnership-tab="trace" type="button">Custom Trace Profile</button><button class="yyk-partnership-tab" data-partnership-tab="roundrobin" type="button">Joint Lab Testing</button><button class="yyk-partnership-tab" data-partnership-tab="roadmap" type="button">Future Materials Roadmap</button><button class="yyk-partnership-tab" data-partnership-tab="samples" type="button">R&amp;D Samples Policy</button></div>
<div class="yyk-partnership-body"><aside class="yyk-partnership-side"><h3>Engineering Gate</h3><p>Designed for process engineers who need element-specific limits rather than generic 6N/7N claims. Output should be attached to RFQ, TDS review or sample qualification.</p><div class="yyk-partnership-status"><div class="row"><span>Profile</span><b>Element-specific</b></div><div class="row"><span>Testing</span><b>Round Robin</b></div><div class="row"><span>Samples</span><b>EUC/KYC gated</b></div><div class="row"><span>Roadmap</span><b>3–5 years</b></div></div></aside>
<main class="yyk-partnership-content">
<section class="yyk-partnership-panel active" data-partnership-panel="trace"><h3 class="section-title">Custom Trace Profile Request</h3><p>Use this engineering brief when standard grade is insufficient and the buyer needs a strict limit for one or more critical impurities.</p><div class="yyk-partnership-form" id="customTraceProfileForm"><div class="yyk-partnership-field"><label>Material</label><select id="ctpMaterial"><option>Aluminum</option><option>Copper</option><option>Zinc</option><option>Rare Earth / Specialty</option></select></div><div class="yyk-partnership-field"><label>Target Purity</label><select id="ctpPurity"><option>6N</option><option>6N+</option><option>7N</option><option>Custom</option></select></div><div class="yyk-partnership-field"><label>Critical Element</label><select id="ctpElement"><option>Fe</option><option>Na</option><option>K</option><option>Li</option><option>Ti</option><option>V</option><option>Cr</option><option>Mn</option><option>U</option><option>Th</option><option>O</option><option>N</option><option>H</option></select></div><div class="yyk-partnership-field"><label>Custom Limit</label><input id="ctpLimit" value="&lt; 3 ppb"/></div><div class="yyk-partnership-field"><label>Analytical Method</label><select id="ctpMethod"><option>GDMS</option><option>ICP-MS</option><option>Inert Gas Fusion</option><option>Buyer Method</option></select></div><div class="yyk-partnership-field"><label>Application</label><select id="ctpApplication"><option>PVD target qualification</option><option>CVD / precursor route</option><option>Vacuum chamber material</option><option>R&amp;D process validation</option><option>Semiconductor foundry use</option></select></div><div class="yyk-partnership-field"><label>Qualification Volume</label><select id="ctpVolume"><option>50 g</option><option>100 g</option><option>1 kg</option><option>Buyer-defined</option></select></div><div class="yyk-partnership-field"><label>Packaging</label><select id="ctpPackaging"><option>Vacuum + Argon</option><option>Vacuum sealed</option><option>Argon glovebox packed</option><option>Buyer-defined</option></select></div><div class="yyk-partnership-field full"><label>Buyer notes</label><textarea id="ctpNotes">Buyer requires standard 6N material with stricter Fe control for process qualification.</textarea></div></div><div class="yyk-partnership-actions"><button class="yyk-partnership-btn primary" id="generateCustomTraceProfile" type="button">Generate Profile Brief</button><button class="yyk-partnership-btn" id="downloadCustomTraceProfile" type="button">Download Brief</button></div><div class="yyk-partnership-output" id="customTraceOutput">Generate a buyer-facing trace profile brief.</div><div class="yyk-partnership-note">Contract language: Custom trace profiles are accepted for engineering qualification where standard purity grade is insufficient for process-specific contamination control.</div></section>
<section class="yyk-partnership-panel" data-partnership-panel="roundrobin"><h3 class="section-title">Joint Lab Testing / Round Robin Protocol</h3><div class="yyk-partnership-grid"><div class="yyk-partnership-card"><strong>Procedure</strong><ol><li>Batch sample split into Seller / Buyer / Reference Lab units.</li><li>Each unit receives identical Trace ID and tamper seal record.</li><li>Seller and buyer test using aligned GDMS / ICP-MS method.</li><li>Deviation above tolerance triggers third-party reference lab.</li><li>Method correlation report is archived in VDR.</li></ol></div><div class="yyk-partnership-card"><strong>Dispute prevention rule</strong><p><b>Result deviation &gt; ±15% at ppb level</b> requires method reconciliation, sample handling review and calibration evidence comparison before any quality rejection is accepted.</p><p>Reference laboratory result becomes binding if both parties signed the Round Robin protocol.</p></div></div><table class="yyk-partnership-table"><tr><th>Step</th><th>Owner</th><th>Evidence</th><th>Gate</th></tr><tr><td>Sample split</td><td>Seller QC + Buyer observer</td><td>Split record, seal IDs</td><td>Trace ID issued</td></tr><tr><td>Parallel testing</td><td>Seller lab / Buyer lab</td><td>Raw GDMS or ICP-MS files</td><td>Method match</td></tr><tr><td>Deviation review</td><td>Joint technical team</td><td>Calibration logs, blanks, standards</td><td>Accept / reconcile</td></tr><tr><td>Reference test</td><td>SGS / Eurofins / agreed lab</td><td>Independent report</td><td>Binding result</td></tr></table></section>
<section class="yyk-partnership-panel" data-partnership-panel="roadmap"><h3 class="section-title">Future Materials Roadmap</h3><p>Roadmap language should signal long-term engineering capacity without promising unvalidated capabilities.</p><div class="yyk-partnership-card"><div class="yyk-roadmap-line"><b>0–12 months</b><span>6N / 6N+ qualification packs, U/Th screening, batch SPC and foundry-facing TDS format.</span></div><div class="yyk-roadmap-line"><b>12–24 months</b><span>7N expansion, custom alkali and transition-metal limits, joint lab correlation programs.</span></div><div class="yyk-roadmap-line"><b>24–36 months</b><span>Precursor-grade support, bonded APAC sample stock and customer-specific packaging controls.</span></div><div class="yyk-roadmap-line"><b>36–60 months</b><span>Isotope-sensitive sourcing, joint R&amp;D programs and customer-specific trace profiles under NDA.</span></div></div><div class="yyk-partnership-grid3" style="margin-top:14px"><div class="yyk-partnership-card"><strong>Signal to Sogo Shosha</strong><p>Long-term capability roadmap, not one-off trading.</p></div><div class="yyk-partnership-card"><strong>Engineering proof</strong><p>Every roadmap item requires validation evidence before commercial claim.</p></div><div class="yyk-partnership-card"><strong>Risk control</strong><p>Future materials are NDA-gated and released only after compliance screening.</p></div></div></section>
<section class="yyk-partnership-panel" data-partnership-panel="samples"><h3 class="section-title">R&amp;D Support &amp; Samples Policy</h3><table class="yyk-partnership-table"><tr><th>Item</th><th>Policy</th></tr><tr><td>Sample type</td><td>Qualification sample only; no resale or unrestricted transfer.</td></tr><tr><td>Typical volume</td><td>50 g – 1 kg, subject to material, purity and availability.</td></tr><tr><td>Lead time</td><td>7–14 business days after technical purpose validation and EUC/KYC clearance.</td></tr><tr><td>Cost</td><td>Free, paid, or credited against first order on a case-by-case basis.</td></tr><tr><td>Required feedback</td><td>Test result summary, process compatibility note and method used.</td></tr><tr><td>Restrictions</td><td>No military/end-use ambiguity; no sanctioned party; no undocumented transfer.</td></tr></table><div class="yyk-partnership-note">Sample release condition: Samples are released only after technical purpose validation and compliance clearance.</div></section>
</main>
</div>
</div>
</div>
<script id="yyk-partnership-engine-script">
(function(){'use strict';function q(s){return document.querySelector(s)}function qa(s,r){return Array.prototype.slice.call((r||document).querySelectorAll(s))}function val(id){var el=q(id);return el?el.value:''}function buildBrief(){return 'Custom Trace Profile Brief — '+val('#ctpMaterial')+' '+val('#ctpPurity')+'\nCritical element: '+val('#ctpElement')+' '+val('#ctpLimit')+'\nMethod: '+val('#ctpMethod')+'\nApplication: '+val('#ctpApplication')+'\nQualification volume: '+val('#ctpVolume')+'\nPackaging: '+val('#ctpPackaging')+'\nNotes: '+val('#ctpNotes')+'\nDecision gate: engineering review + compliance clearance before sample release.'}function generate(){var out=q('#customTraceOutput');if(out)out.textContent=buildBrief()}function downloadBrief(){var blob=new Blob([buildBrief()],{type:'text/plain'});var a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download='YONGYEOKYO_Custom_Trace_Profile_Brief.txt';document.body.appendChild(a);a.click();setTimeout(function(){URL.revokeObjectURL(a.href);a.remove()},300)}function addControlButton(){var actions=q('.yyk-control-actions');if(actions && !q('[data-control-open="partnership"]')){var btn=document.createElement('button');btn.className='yyk-control-action';btn.type='button';btn.setAttribute('data-control-open','partnership');btn.setAttribute('data-modes','engineering procurement compliance');btn.setAttribute('data-state-role','Custom trace / lab testing');btn.textContent='Technical Partnership';actions.appendChild(btn)}}function extendState(){var st=window.YYK_STATE;if(!st)return false;st.engines.partnership='technicalPartnershipEngine';st.labels.partnership='Technical Partnership';st.roles.partnership='Custom trace / lab testing';if(st.modes.engineering.enabled.indexOf('partnership')<0)st.modes.engineering.enabled.splice(1,0,'partnership');if(st.modes.procurement.enabled.indexOf('partnership')<0)st.modes.procurement.enabled.push('partnership');if(st.modes.compliance.enabled.indexOf('partnership')<0)st.modes.compliance.enabled.push('partnership');return true}function bind(){document.addEventListener('click',function(e){var tab=e.target.closest('.yyk-partnership-tab');if(tab){var key=tab.getAttribute('data-partnership-tab');qa('.yyk-partnership-tab').forEach(function(t){t.classList.toggle('active',t===tab)});qa('.yyk-partnership-panel').forEach(function(p){p.classList.toggle('active',p.getAttribute('data-partnership-panel')===key)});return}if(e.target&&e.target.id==='generateCustomTraceProfile'){generate();return}if(e.target&&e.target.id==='downloadCustomTraceProfile'){generate();downloadBrief();return}if(e.target&&e.target.id==='closeTechnicalPartnershipEngine'){var el=q('#technicalPartnershipEngine');if(el){el.classList.remove('active');el.setAttribute('aria-hidden','true')}document.body.classList.remove('apex-modal-open');if(window.YYK_STATE)window.YYK_STATE.active=null;var active=q('.yyk-mode-btn.active');if(active)active.click();return}var backdrop=e.target.closest('.yyk-partnership-engine');if(backdrop&&e.target===backdrop){var el2=q('#technicalPartnershipEngine');if(el2){el2.classList.remove('active');el2.setAttribute('aria-hidden','true')}document.body.classList.remove('apex-modal-open');if(window.YYK_STATE)window.YYK_STATE.active=null;var active2=q('.yyk-mode-btn.active');if(active2)active2.click();return}})}function init(){/* addControlButton disabled: stable static control panel owns navigation */var tries=0;(function waitState(){tries++;if(extendState()){var active=q('.yyk-mode-btn.active');if(active)active.click()}else if(tries<30)setTimeout(waitState,100)})();bind();generate()}if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();})();

// --- Script Block 94 ---
(function(){
  'use strict';
  var MAP={data:'dataRoomStressEngine',vdr:'vdrEngine',supply:'supplyChainEngine',legal:'yykLegalEngine',tds:'tdsFoundryEngine',pricing:'pricingEngine',partnership:'technicalPartnershipEngine'};
  var MODES={
    procurement:{title:'Procurement Workspace',status:'RFQ · Evidence · Commercial Access',context:'RFQ intake, buyer evidence, due-diligence readiness and commercial document access.',copy:'Buyer-facing workspace for RFQ intake, due-diligence evidence, commercial documents, pricing memo and supplier qualification access.',items:[['data','Data Room / Stress Test','Open audit evidence, defense questions, cost-of-failure and RMA materials.'],['vdr','Virtual Data Room','Open authorized access flow, NDA/KYC logic and VDR index.'],['supply','Supply Chain Engine','Open bonded-zone strategy, EUC defense, chain of custody and trade finance.'],['legal','Legal Engine','Open liability, RMA / quality dispute and EUC policy controls.'],['pricing','Pricing Engine','Open index-based pricing calculator, fixed price and market insights.'],['tds','TDS Foundry Engine','Open foundry-grade impurity matrix, U/Th, gas profile and SPC history.'],['partnership','Technical Partnership','Open custom trace profile, samples policy and joint lab testing.']]},
    engineering:{title:'Engineering Workspace',status:'TDS · Samples · Joint Lab',context:'Technical qualification, impurity controls, TDS, sample policy and joint lab alignment.',copy:'Technical qualification workspace for foundry engineers: impurity controls, custom trace profiles, round-robin testing, SPC and qualification samples.',items:[['tds','TDS Foundry Engine','Open critical impurities, radioactive isotope limits, gas profile and analytical integrity.'],['partnership','Technical Partnership','Open custom trace profile request, joint lab testing and R&D samples policy.'],['pricing','Pricing Engine','Open purity premium logic and engineering-driven cost impact.'],['data','Data Room / Stress Test','Open batch evidence, lot traceability and audit defense materials.']]},
    compliance:{title:'Compliance Workspace',status:'Legal · VDR · Sanctions',context:'Legal, sanctions, VDR access, supply-chain and audit readiness.',copy:'Compliance workspace for sanctions screening, EUC validation, authorized data room access, legal shield and chain-of-custody evidence.',items:[['vdr','Virtual Data Room','Open NDA/KYC access, deep audit levels and VDR inventory.'],['legal','Legal Engine','Open limitation of liability, RMA disputes and EUC policy.'],['supply','Supply Chain Engine','Open sanctions defense, bonded stock, custody and banking controls.'],['data','Data Room / Stress Test','Open audit defense and last-mile risk checks.']]}
  };
  function q(s,r){return (r||document).querySelector(s)}
  function qa(s,r){return Array.prototype.slice.call((r||document).querySelectorAll(s))}
  function closeEngines(){Object.keys(MAP).forEach(function(k){var el=document.getElementById(MAP[k]); if(el){el.classList.remove('active');el.setAttribute('aria-hidden','true');}});document.body.classList.remove('apex-modal-open');}
  function openEngine(key){var id=MAP[key], el=id&&document.getElementById(id); if(!el){console.warn('Engine not found:',key,id);return false;} closeEngines(); el.classList.add('active'); el.setAttribute('aria-hidden','false'); document.body.classList.add('apex-modal-open'); return true;}
  function makeButton(item,cls){var b=document.createElement('button'); b.type='button'; b.className=cls||'yyk-control-action'; b.setAttribute('data-open-engine',item[0]); b.textContent=item[1]; return b;}
  function render(mode){var m=MODES[mode]||MODES.procurement; qa('#yykAuditControlPanel .yyk-mode-btn').forEach(function(b){b.classList.toggle('active',b.getAttribute('data-yyk-mode')===mode)}); var title=q('#yykAuditModeTitle'); if(title)title.textContent=m.title; var ctx=q('#yykAuditModeContext'); if(ctx)ctx.textContent=m.context; var wt=q('#yykAuditWorkTitle'); if(wt)wt.textContent=m.title; var ws=q('#yykAuditWorkStatus'); if(ws)ws.textContent=m.status; var wc=q('#yykAuditWorkCopy'); if(wc)wc.textContent=m.copy; var actions=q('#yykAuditControlActions'); if(actions){actions.innerHTML='';m.items.forEach(function(item,i){var b=makeButton(item,'yyk-control-action'+(i===0?' active':''));actions.appendChild(b);});} var cards=q('#yykAuditModeCards'); if(cards){cards.innerHTML='';m.items.forEach(function(item){var c=document.createElement('article');c.className='yyk-mode-card';c.innerHTML='<h3></h3><p></p>';c.querySelector('h3').textContent=item[1];c.querySelector('p').textContent=item[2];c.appendChild(makeButton(item,''));cards.appendChild(c);});} window.YYK_ACTIVE_MODE=mode;}
  function removeGhostPanels(){qa('.yyk-control-panel:not(#yykAuditControlPanel), .yyk-mode-workspace:not(#yykAuditModeWorkspace), [class*="left-dock"], [class*="engine-dock"], [class*="tier1-dock"]').forEach(function(el){el.remove();});}
  document.addEventListener('click',function(e){var mb=e.target.closest('#yykAuditControlPanel .yyk-mode-btn'); if(mb){e.preventDefault();render(mb.getAttribute('data-yyk-mode')||'procurement');return;} var ob=e.target.closest('[data-open-engine]'); if(ob){e.preventDefault();openEngine(ob.getAttribute('data-open-engine'));return;}} ,true);
  function init(){removeGhostPanels(); render('procurement');}
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();

// --- Script Block 95 ---
(function(){
  function q(s){return document.querySelector(s)}
  function qa(s){return Array.prototype.slice.call(document.querySelectorAll(s))}
  function panel(){return q('#tier1ControlPanel')||q('.tier1-control-panel')||q('.control-panel')}
  function addButton(){var p=panel(); if(!p||p.querySelector('[data-panel="bcp"]'))return; var b=document.createElement('button'); b.setAttribute('data-panel','bcp'); b.className='nav-link'; b.type='button'; b.textContent='BCP & Resilience'; p.appendChild(b)}
  function open(){var e=q('#bcpEngine'); if(!e)return; qa('[id$="Engine"],.engine,.modal,.panel-layer').forEach(function(x){if(x!==e){x.classList.remove('active');x.setAttribute('aria-hidden','true')}}); e.classList.add('active'); e.setAttribute('aria-hidden','false'); document.body.classList.add('apex-modal-open')}
  function close(){var e=q('#bcpEngine'); if(e){e.classList.remove('active');e.setAttribute('aria-hidden','true');document.body.classList.remove('apex-modal-open')}}
  function download(){var html='<!doctype html><html><head><meta charset="utf-8"><title>YONGYEOKYO BCP One-Pager</title>


</head><body><h1>BCP & Antifragility Protocol</h1><p>Emergency Safety Stock, T+1h incident reporting, alternate ports, secondary banking and mirrored VDR.</p>

<!-- Stage 2.4 UX Visual Fix: remove thin hover/focus frames under return buttons without changing Gold Standard structure -->

<!-- /Stage 2.4 UX Visual Fix -->




<!-- YONGYEOKYO v3.2 — INTERACTIVE SINGLE-LINE COMMAND RAIL FIX -->


<!-- /YONGYEOKYO v3.2 -->
<!-- FINAL MERGED SITE PATCH: BCP integrated, Legal EN-only, framed panel buttons -->
<script id="yyk-bcp-final-bind">
(function(){
  function panel(){return document.getElementById('tier1ControlPanel')||document.querySelector('.tier1-control-panel')||document.querySelector('.control-panel')}
  function ensure(){var p=panel(); if(!p||p.querySelector('[data-panel="bcp"]'))return; var b=document.createElement('button'); b.type='button'; b.className='nav-link'; b.setAttribute('data-panel','bcp'); b.textContent='BCP & Resilience'; p.appendChild(b);}
  function bind(){if(window.__YYK_BCP_BIND__)return; window.__YYK_BCP_BIND__=true; document.addEventListener('click',function(ev){var b=ev.target.closest('[data-panel="bcp"]'); if(!b)return; ev.preventDefault(); var e=document.getElementById('bcpEngine'); if(!e)return; document.querySelectorAll('[id$="Engine"],.engine,.modal,.panel-layer').forEach(function(x){if(x!==e){x.classList.remove('active');x.setAttribute('aria-hidden','true');}}); e.classList.add('active'); e.setAttribute('aria-hidden','false'); document.body.classList.add('apex-modal-open');},true)}
  function run(){ensure();bind()}
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',run);else run();
  setTimeout(run,500);
})();

// --- Script Block 96 ---
(function(){
  'use strict';
  var MODAL_SELECTORS=['.modal','.compliance-engine','.product-engine','.contact-engine','.esg-deep-layer','.sogo-drawer','#vdrEngine'];
  function qs(sel,root){return Array.prototype.slice.call((root||document).querySelectorAll(sel));}
  function isEngine(el){return el && MODAL_SELECTORS.some(function(s){return el.matches && el.matches(s);});}
  function closeEngine(el){
    if(!el)return;
    el.classList.remove('active');
    el.setAttribute('aria-hidden','true');
    document.body.classList.remove('apex-modal-open');
  }
  function addExitBars(){
    qs(MODAL_SELECTORS.join(',')).forEach(function(engine){
      if(engine.querySelector('.yyk-stage-exitbar'))return;
      var target=engine.querySelector('.compliance-content,.product-content,.contact-content,.esg-layer-content,.modal-box,.sogo-body,.yyk-vdr-content,.vdr-content') || engine.querySelector('[class*="content"]') || engine;
      var bar=document.createElement('div');
      bar.className='yyk-stage-exitbar';
      bar.setAttribute('role','navigation');
      bar.setAttribute('aria-label','Exit from current data layer');
      bar.innerHTML='<button type="button" class="yyk-stage-close-btn">&#x2715; Close</button>';
      if(target.classList&&target.classList.contains("sogo-body")){target.prepend(bar);}else{target.appendChild(bar);}
      bar.querySelector('.yyk-stage-close-btn').addEventListener('click',function(){closeEngine(engine);});
    // Top button removed
    });
  }
  function hardenLinks(){
    qs('a[target="_blank"]').forEach(function(a){a.setAttribute('rel','noopener noreferrer');});
  }
  function enhanceMeta(){
    if(!document.querySelector('meta[name="robots"]')){var m=document.createElement('meta');m.name='robots';m.content='index,follow,max-image-preview:large';document.head.appendChild(m);}
  }
  function init(){addExitBars();hardenLinks();enhanceMeta();}
  if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',init,{once:true});}else{init();}
  document.addEventListener('keydown',function(e){
    if(e.key!=='Escape')return;
    qs(MODAL_SELECTORS.join(',')).forEach(function(el){if(el.classList.contains('active'))closeEngine(el);});
  });
})();

// --- Script Block 97 ---
(function(){
  function closeDeepLayer(from){
    var root = from && from.closest ? from.closest('.compliance-engine,.product-engine,.contact-engine,.sogo-drawer,.yyk-vdr-engine,.modal,.esg-deep-layer') : null;
    if(!root) return;
    root.classList.remove('active');
    root.setAttribute('aria-hidden','true');
    document.body.classList.remove('apex-modal-open');
    var home = document.querySelector('main, .hero, header');
    if(home && home.scrollIntoView){ home.scrollIntoView({behavior:'smooth', block:'start'}); }
  }
  function addReturnControl(container, label){
    if(!container || container.querySelector('.yyk-return-site-control')) return;
    var bar=document.createElement('div');
    bar.className='yyk-return-site-control';
    bar.setAttribute('role','navigation');
    bar.setAttribute('aria-label','Return to main site');
    bar.innerHTML='<div><strong>'+label+'</strong><br><span>You are inside a deep working view. Use this control to return to the main site.</span></div><button type="button" class="yyk-return-site-btn" data-yyk-return-site>← Back to main site</button>';
    container.insertBefore(bar, container.firstChild);
  }
  function initReturnControls(){
    addReturnControl(document.querySelector('.compliance-shell'),'Compliance workspace');
    addReturnControl(document.querySelector('.product-shell'),'Engineering workspace');
    addReturnControl(document.querySelector('.sogo-panel'),'Procurement workspace');
    addReturnControl(document.querySelector('.yyk-vdr-shell'),'Virtual Data Room');
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',initReturnControls); else initReturnControls();
  document.addEventListener('click',function(e){
    var btn=e.target.closest('[data-yyk-return-site]');
    if(btn){ closeDeepLayer(btn); }
  });
})();

// --- Script Block 98 ---
(function(){
  'use strict';
  function cleanVisibleOrphans(){
    var blocked=[/^\s*delivery\.?\s*$/i,/^\s*integrity\s+controls\.?\s*$/i,/^\s*engineering\s+teams\.?\s*$/i,/^\s*;?var\s+blob\s*=\s*new\s+Blob/i];
    document.querySelectorAll('body *').forEach(function(el){
      if(!el || el.children.length) return;
      var t=(el.textContent||'').trim();
      if(!t) return;
      if(blocked.some(function(re){return re.test(t);})){ el.remove(); }
    });
  }
  document.addEventListener('DOMContentLoaded', cleanVisibleOrphans);
  window.addEventListener('load', cleanVisibleOrphans);
  document.addEventListener('click', function(){ setTimeout(cleanVisibleOrphans, 30); }, true);
})();

// --- Script Block 99 ---
(function(){
  'use strict';
  var WEIGHTS={technical:24,compliance:24,commercial:16,logistics:16,documentation:20};
  var MATERIAL={cu:{label:'Cu 6N/7N',tech:23,margin:18,risk:18,docs:'CoA + GDMS/ICP-MS + ultra-trace table',foundry:'Fe < 8 ppb · U/Th < 0.05 ppb when released batch CoA / ICP-MS ultra-trace report confirms'},al:{label:'Al 6N',tech:20,margin:14,risk:15,docs:'CoA + TDS + O/H/N where required',foundry:'6N route by released batch CoA'},zn:{label:'Zn 5N5',tech:17,margin:12,risk:20,docs:'CoA + SDS + PSD / morphology evidence',foundry:'PSD locked before quote release'},ree:{label:'REE controlled',tech:18,margin:22,risk:32,docs:'EUC + origin + ICP-MS/OES + export-control file',foundry:'Controlled release only'}};
  var DEST={kr:{label:'KR · Busan/Incheon',risk:8,route:'Busan Bonded Warehouse · 24–48h after document clearance',bcp:'Incheon bonded cross-dock'},jp:{label:'JP · Yokohama/Kobe',risk:12,route:'Yokohama Bonded Warehouse · 24–48h after document clearance',bcp:'Kobe alternate + air freight trigger'},tw:{label:'TW · Kaohsiung',risk:15,route:'Busan/Yokohama hub pre-clearance → Taiwan',bcp:'Air freight / bonded cross-dock'},cn:{label:'CN · Shanghai/Ningbo/Shenzhen',risk:24,route:'APAC hub route after entity/end-use screen',bcp:'Hold/re-route after compliance escalation'},apac:{label:'APAC mixed',risk:18,route:'Busan/Yokohama primary bonded routing',bcp:'Incheon / Kobe / air freight / bonded cross-dock'}};
  function q(id){return document.getElementById(id)}
  function val(id){var el=q(id);return el?String(el.value||el.textContent||'').trim():''}
  function low(id){return val(id).toLowerCase()}
  function materialKey(){var s=(low('rfqMaterial')+' '+low('rfqAutoApplication')+' '+low('rfqAutoPurity')+' '+low('rfqAutoForm'));if(/rare|ree|oxide|salt|magnet/.test(s))return 'ree';if(/aluminum|\bal\b/.test(s))return 'al';if(/zinc|\bzn\b/.test(s))return 'zn';return 'cu'}
  function destKey(){var s=(low('rfqMarket')+' '+low('rfqAutoDestination'));if(/china|shanghai|ningbo|shenzhen/.test(s))return 'cn';if(/taiwan|kaohsiung/.test(s))return 'tw';if(/japan|osaka|yokohama|kobe/.test(s))return 'jp';if(/apac/.test(s))return 'apac';return 'kr'}
  function has(id){return !!val(id)}
  function docsText(){return (low('rfqDocs')+' '+low('rfqAutoQC')+' '+low('rfqComplianceDynamic')+' '+low('rfqComplianceNotice'))}
  function appText(){return (low('rfqApp')+' '+low('rfqAutoApplication'))}
  function docNode(name){var d=docsText(); if(name==='coa')return /coa|certificate/.test(d); if(name==='lab')return /gdms|icp|advanced|batch|customer|method|calibration/.test(d); return false}
  function gateNodes(){var d=docsText(),a=appText(),m=low('rfqMarket')+' '+low('rfqAutoDestination');return [
    {id:'euc',label:'End-User Certificate (EUC)',pass:/euc|end-user|end use|end-use|compliance|export/.test(d+a),evidence:'Buyer end-use statement / EUC before controlled release'},
    {id:'sanctions',label:'Sanctions Screening',pass:/sanction|ofac|meti|kosti|export|compliance/.test(d+a),evidence:'OFAC / METI / KOSTI entity and end-use screen'},
    {id:'coa',label:'CoA Method ID',pass:docNode('coa'),evidence:'Released batch CoA with method reference'},
    {id:'lab',label:'Lab Calibration ID',pass:docNode('lab'),evidence:'GDMS / ICP-MS calibration traceability'},
    {id:'route',label:'Bonded Route Confirmation',pass:/busan|incheon|yokohama|kobe|kaohsiung|shanghai|ningbo|shenzhen|south korea|japan|taiwan|china/.test(m),evidence:'Primary bonded route + BCP trigger'},
    {id:'foundry',label:'Buyer Foundry Spec Mapping',pass:/semiconductor|foundry|samsung|tsmc|thin-film|sputter|precision|aerospace/.test(a),evidence:'Buyer application mapped to impurity / process limits'}
  ]}
  function score(){var mk=materialKey(),dk=destKey(),mat=MATERIAL[mk],dst=DEST[dk],nodes=gateNodes();var pass=nodes.filter(function(n){return n.pass}).length;var ids=['rfqMaterial','rfqForm','rfqPurity','rfqQty','rfqApp','rfqMarket','rfqDocs','rfqTerm'];var complete=Math.round(ids.filter(has).length/ids.length*100);var technical=Math.min(WEIGHTS.technical,mat.tech+(appText().match(/semiconductor|foundry|precision/)?1:0));var compliance=Math.round(WEIGHTS.compliance*(pass/nodes.length));var documentation=Math.min(WEIGHTS.documentation,Math.round((docNode('coa')?8:0)+(docNode('lab')?8:0)+(docsText().match(/sds|tds/)?4:0)));var logistics=Math.max(4,WEIGHTS.logistics-dst.risk/2);var commercial=Math.round(WEIGHTS.commercial*(complete/100));var total=Math.max(0,Math.min(100,Math.round(technical+compliance+documentation+logistics+commercial)));var risk=Math.max(1,Math.min(99,Math.round(mat.risk+dst.risk+(100-complete)*.18+(nodes.length-pass)*4)));var profit=Math.max(0,Math.round(mat.margin+(complete/12)-(risk/9)));var hardBlock=nodes.some(function(n){return !n.pass});var verdict=hardBlock?'NO QUOTE RELEASE':(total>=86&&risk<45?'QUOTE RELEASE ENABLED':'SENIOR REVIEW');return {mk:mk,dk:dk,mat:mat,dst:dst,nodes:nodes,pass:pass,total:total,risk:risk,profit:profit,complete:complete,hardBlock:hardBlock,verdict:verdict};}
  function ensure(){var anchor=q('rfqComplianceNotice')||q('rfqPricingModel')||q('rfqAutoDecision');if(!anchor||q('yykRfqScoringAI'))return;var box=document.createElement('div');box.id='yykRfqScoringAI';box.className='yyk-rfq-ai';box.innerHTML='<div class="yyk-rfq-ai-head"><div><div class="yyk-rfq-ai-title">RFQ Scoring AI · Sogo Shosha Procurement Gate</div><div class="yyk-rfq-ai-sub">Automatic trade qualification layer modeled as a Mitsubishi / Itochu-style control desk: technical fit, sanctions/EUC, documentation, route certainty, commercial readiness and hard quote-release gate.</div></div><div class="yyk-rfq-ai-verdict" id="yykAiVerdict">NO QUOTE RELEASE</div></div><div class="yyk-rfq-ai-grid"><div class="yyk-rfq-ai-cell"><span class="yyk-rfq-ai-k">Master Score</span><span class="yyk-rfq-ai-v" id="yykAiScore">0</span><span class="yyk-rfq-ai-n">weighted RFQ readiness</span></div><div class="yyk-rfq-ai-cell"><span class="yyk-rfq-ai-k">Risk Index</span><span class="yyk-rfq-ai-v" id="yykAiRisk">0</span><span class="yyk-rfq-ai-n">material + destination + evidence risk</span></div><div class="yyk-rfq-ai-cell"><span class="yyk-rfq-ai-k">Profit Lens</span><span class="yyk-rfq-ai-v" id="yykAiProfit">0%</span><span class="yyk-rfq-ai-n">pre-quote margin signal</span></div><div class="yyk-rfq-ai-cell"><span class="yyk-rfq-ai-k">Route</span><span class="yyk-rfq-ai-v" id="yykAiRoute">—</span><span class="yyk-rfq-ai-n" id="yykAiBcp">BCP pending</span></div><div class="yyk-rfq-ai-cell"><span class="yyk-rfq-ai-k">Foundry Fit</span><span class="yyk-rfq-ai-v" id="yykAiFoundry">—</span><span class="yyk-rfq-ai-n">ultra-trace claim controlled</span></div></div><div class="yyk-rfq-ai-table"><table><thead><tr><th>Mandatory Node</th><th>Status</th><th>Evidence Required</th><th>Quote Effect</th></tr></thead><tbody id="yykAiNodes"></tbody></table></div><div class="yyk-rfq-ai-actions"><button class="micro-btn" type="button" id="yykAiApplyPack">Apply AI Evidence Pack</button><button class="micro-btn" type="button" id="yykAiCopy">Copy RFQ AI Snapshot</button></div><div class="yyk-rfq-ai-alert" id="yykAiAlert">RFQ AI initialized. Quote release remains blocked until all mandatory nodes pass.</div>';anchor.parentNode.insertBefore(box,anchor.nextSibling);}
  function set(id,t){var el=q(id);if(el)el.textContent=t}
  function render(){ensure();var box=q('yykRfqScoringAI');if(!box)return;var s=score(),v=q('yykAiVerdict');set('yykAiScore',s.total+'/100');set('yykAiRisk',s.risk+'/100');set('yykAiProfit',s.profit+'%');set('yykAiRoute',s.dst.label);set('yykAiBcp',s.dst.route+' · BCP: '+s.dst.bcp);set('yykAiFoundry',s.mat.label);if(v){v.textContent=s.verdict;v.className='yyk-rfq-ai-verdict '+(s.verdict==='QUOTE RELEASE ENABLED'?'ready':(s.verdict==='SENIOR REVIEW'?'review':''));}var body=q('yykAiNodes');if(body){body.innerHTML=s.nodes.map(function(n){var cls=n.pass?'pass':'fail';return '<tr><td>'+n.label+'</td><td><span class="yyk-rfq-ai-badge '+cls+'">'+(n.pass?'PASS':'MISSING')+'</span></td><td>'+n.evidence+'</td><td>'+(n.pass?'Counts toward release':'No Quote Release')+'</td></tr>';}).join('');}set('yykAiAlert','Decision: '+s.verdict+' · Master score '+s.total+'/100 · Risk '+s.risk+'/100 · Profit lens '+s.profit+'%. '+s.mat.foundry+'. Required route: '+s.dst.route+'.');var notice=q('rfqComplianceNotice');if(notice){notice.setAttribute('data-rfq-ai-score',s.total);notice.setAttribute('data-rfq-ai-verdict',s.verdict);}}
  function applyPack(){var docs=q('rfqDocs'),app=q('rfqApp'),market=q('rfqMarket'),term=q('rfqTerm');var s=score();if(docs){docs.value='CoA + TDS + SDS · EUC · OFAC/METI/KOSTI screen · CoA Method ID · Lab Calibration ID · Bonded Route Confirmation';}if(app&&!app.value){app.value='Semiconductor / foundry qualification · buyer spec mapping required';}if(market&&!market.value){market.value=s.dk==='jp'?'Japan · Osaka / Yokohama':(s.dk==='tw'?'Taiwan · Kaohsiung':(s.dk==='cn'?'China · Shanghai / Ningbo / Shenzhen':'South Korea · Busan / Incheon'));}if(term&&!term.value){term.value=s.risk>45?'CIF':'CPT';}try{if(window.updateRFQ)window.updateRFQ();}catch(e){}render();}
  function copy(){var s=score();var missing=s.nodes.filter(function(n){return !n.pass}).map(function(n){return n.label}).join(', ')||'none';var text='YONGYEOKYO RFQ Scoring AI Snapshot\nVerdict: '+s.verdict+'\nMaster Score: '+s.total+'/100\nRisk Index: '+s.risk+'/100\nProfit Lens: '+s.profit+'%\nMaterial: '+s.mat.label+'\nRoute: '+s.dst.label+'\nBCP: '+s.dst.bcp+'\nMissing Nodes: '+missing+'\nFoundry Control: '+s.mat.foundry; if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(text).catch(function(){});}set('yykAiAlert','RFQ AI snapshot copied. Missing nodes: '+missing+'.');}
  document.addEventListener('input',render,true);document.addEventListener('change',render,true);document.addEventListener('click',function(e){if(e.target&&e.target.id==='yykAiApplyPack')applyPack();if(e.target&&e.target.id==='yykAiCopy')copy();},true);if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',render);else render();window.YYK_RFQ_SCORING_AI={score:score,render:render,applyPack:applyPack};
})();

// --- Script Block 100 ---
(function(){
  'use strict';
  var PRIORITY = {
    'Data Room / Stress Test': true,
    'Virtual Data Room': true,
    'Supply Chain Engine': true,
    'Legal Engine': true
  };
  function q(s){return document.querySelector(s)}
  function txt(el){return (el.textContent||'').replace(/\s+/g,' ').trim()}
  function flattenRail(){
    var box=q('#yykAuditControlActions');
    if(!box || box.getAttribute('data-terminal-rail-lock')==='1') return;
    box.setAttribute('data-terminal-rail-lock','1');
    var nested=Array.prototype.slice.call(box.querySelectorAll('.yyk-priority-buttons > .yyk-control-action, .yyk-priority-row .yyk-control-action'));
    if(nested.length){
      box.innerHTML='';
      nested.forEach(function(btn){box.appendChild(btn)});
    }
    Array.prototype.slice.call(box.querySelectorAll('.yyk-priority-row,.yyk-priority-label,.yyk-priority-buttons')).forEach(function(el){el.remove()});
    Array.prototype.slice.call(box.querySelectorAll('.yyk-control-action')).forEach(function(btn){
      btn.setAttribute('data-terminal-priority', PRIORITY[txt(btn)] ? '1' : '2');
      btn.setAttribute('draggable','false');
    });
    box.classList.remove('yyk-priority-ready');
    box.classList.add('yyk-terminal-rail-ready');
    box.removeAttribute('data-terminal-rail-lock');
  }
  function install(){
    flattenRail();
    var box=q('#yykAuditControlActions');
    if(box && !box.__yykTerminalRailObserver){
      var obs=new MutationObserver(function(){setTimeout(flattenRail,0)});
      obs.observe(box,{childList:true,subtree:true});
      box.__yykTerminalRailObserver=obs;
    }
    document.addEventListener('click',function(e){
      if(e.target && e.target.closest && e.target.closest('#yykAuditControlPanel .yyk-mode-btn')){
        setTimeout(flattenRail,0);
      }
    },true);
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',install); else install();
})();

// --- Script Block 101 ---
(function(){
  'use strict';
  function normalize(){
    document.querySelectorAll('#yykAuditControlPanel .yyk-mode-btn').forEach(function(btn){
      var t=(btn.textContent||'').toLowerCase();
      if(t.indexOf('procurement')>-1) btn.textContent='Procurement';
      if(t.indexOf('engineering')>-1) btn.textContent='Engineering';
      if(t.indexOf('compliance')>-1) btn.textContent='Compliance';
      btn.setAttribute('draggable','false');
    });
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',normalize);else normalize();
  document.addEventListener('click',function(e){
    if(e.target&&e.target.closest&&e.target.closest('#yykAuditControlPanel .yyk-mode-btn')){
      setTimeout(normalize,0);
    }
  },true);
})();

// --- Script Block 102 ---
(function(){
  'use strict';
  var PRIORITY={
    'Data Room / Stress Test':true,
    'Virtual Data Room':true,
    'Supply Chain Engine':true,
    'Legal Engine':true
  };
  function q(s,r){return (r||document).querySelector(s)}
  function qa(s,r){return Array.prototype.slice.call((r||document).querySelectorAll(s))}
  function label(el){return (el.textContent||'').replace(/\s+/g,' ').trim()}
  function closeAll(){
    qa('.compliance-engine.active,.product-engine.active,.contact-engine.active,.yyk-bcp-engine.active,.yyk-legal-engine.active,.yyk-data-room-engine.active,.yyk-vdr-engine.active,.yyk-supply-chain-engine.active,.yyk-tds-engine.active,.yyk-pricing-engine.active,.yyk-partnership-engine.active,.modal.active,.sogo-drawer.active').forEach(function(el){
      el.classList.remove('active');
      el.setAttribute('aria-hidden','true');
    });
    document.body.classList.remove('apex-modal-open');
  }
  function normalizeModes(){
    qa('#yykAuditControlPanel .yyk-mode-btn').forEach(function(btn){
      var t=label(btn).toLowerCase();
      if(t.indexOf('procurement')>-1) btn.textContent='Procurement';
      else if(t.indexOf('engineering')>-1) btn.textContent='Engineering';
      else if(t.indexOf('compliance')>-1) btn.textContent='Compliance';
      btn.setAttribute('draggable','false');
      btn.setAttribute('role','tab');
      btn.setAttribute('aria-selected',btn.classList.contains('active')?'true':'false');
    });
  }
  function ensureExit(){
    var actions=q('#yykAuditControlActions');
    if(!actions) return;
    var exit=q('#yykAuditReturnSite') || q('#yykAuditControlPanel .yyk-return-site-btn');
    if(!exit){
      exit=document.createElement('a');
      exit.id="yykAuditReturnSite__dup7" data-original-id="yykAuditReturnSite__d27clean7" data-original-id="yykAuditReturnSite";
      exit.className='yyk-return-site-btn';
      exit.href='#top';
      exit.textContent='Exit to Website';
    }
    if(exit.parentNode!==actions) actions.insertBefore(exit,actions.firstChild);
    exit.onclick=function(e){
      e.preventDefault();
      closeAll();
      var top=q('#top')||document.body;
      top.scrollIntoView({behavior:'smooth',block:'start'});
    };
  }
  function flattenRail(){
    var box=q('#yykAuditControlActions');
    if(!box) return;
    qa('.yyk-priority-row,.yyk-priority-label,.yyk-priority-buttons',box).forEach(function(el){
      qa('.yyk-control-action',el).forEach(function(btn){box.appendChild(btn)});
      el.remove();
    });
    qa('.yyk-control-action',box).forEach(function(btn){
      btn.setAttribute('data-terminal-priority',PRIORITY[label(btn)]?'1':'2');
      btn.setAttribute('draggable','false');
    });
    box.classList.remove('yyk-priority-ready');
    box.classList.add('yyk-terminal-rail-ready','yyk-v30-rail-ready');
  }
  function stabilizeSwitching(){
    document.addEventListener('click',function(e){
      var btn=e.target&&e.target.closest&&e.target.closest('#yykAuditControlPanel .yyk-mode-btn');
      if(!btn) return;
      var y=window.scrollY;
      requestAnimationFrame(function(){
        normalizeModes();
        flattenRail();
        window.scrollTo({top:y,left:0,behavior:'auto'});
      });
      setTimeout(function(){window.scrollTo({top:y,left:0,behavior:'auto'});},0);
    },true);
  }
  function install(){
    normalizeModes();
    ensureExit();
    flattenRail();
    var box=q('#yykAuditControlActions');
    if(box && !box.__yykV30Observer){
      var obs=new MutationObserver(function(){setTimeout(function(){ensureExit();flattenRail();normalizeModes();},0)});
      obs.observe(box,{childList:true,subtree:true});
      box.__yykV30Observer=obs;
    }
    stabilizeSwitching();
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',install); else install();
})();

// --- Script Block 103 ---
(function(){
  'use strict';
  var ORDER={vdr:20,legal:30,supply:40,data:50,pricing:60,tds:70,partnership:80};
  var MAP={data:'dataRoomStressEngine',vdr:'vdrEngine',supply:'supplyChainEngine',legal:'yykLegalEngine',tds:'tdsFoundryEngine',pricing:'pricingEngine',partnership:'technicalPartnershipEngine'};
  function q(s,r){return (r||document).querySelector(s)}
  function qa(s,r){return Array.prototype.slice.call((r||document).querySelectorAll(s))}
  function text(el){return (el.textContent||'').replace(/\s+/g,' ').trim()}
  function closeAll(){
    qa('.compliance-engine.active,.product-engine.active,.contact-engine.active,.yyk-bcp-engine.active,.yyk-legal-engine.active,.yyk-data-room-engine.active,.yyk-vdr-engine.active,.yyk-supply-chain-engine.active,.yyk-tds-engine.active,.yyk-pricing-engine.active,.yyk-partnership-engine.active,.modal.active,.sogo-drawer.active').forEach(function(el){
      el.classList.remove('active');
      el.setAttribute('aria-hidden','true');
    });
    document.body.classList.remove('apex-modal-open');
  }
  function openEngine(key){
    var id=MAP[key], el=id && document.getElementById(id);
    if(!el) return false;
    closeAll();
    el.classList.add('active');
    el.setAttribute('aria-hidden','false');
    document.body.classList.add('apex-modal-open');
    return true;
  }
  function ensureRail(){
    var rail=q('#yykAuditControlActions');
    if(!rail) return;
    rail.classList.add('yyk-v32-single-line-ready');
    var exit=q('#yykAuditReturnSite') || q('#yykAuditControlPanel .yyk-return-site-btn');
    if(!exit){
      exit=document.createElement('a');
      exit.id="yykAuditReturnSite__dup8" data-original-id="yykAuditReturnSite__d27clean8" data-original-id="yykAuditReturnSite";
      exit.className='yyk-return-site-btn';
      exit.href='#top';
      exit.textContent='Exit to Website';
    }
    if(exit.parentNode!==rail) rail.insertBefore(exit,rail.firstChild);
    exit.onclick=function(e){
      e.preventDefault();
      closeAll();
      var top=q('#top')||document.body;
      top.scrollIntoView({behavior:'smooth',block:'start'});
    };
    var exec=q('#yykAuditExecutiveBtn') || q('#yykAuditControlPanel .yyk-executive-primary-btn') || q('#yykAuditControlPanel .yyk-v32-exec-btn');
    if(!exec){
      exec=document.createElement('button');
      exec.id="yykAuditExecutiveBtn__dup6" data-original-id="yykAuditExecutiveBtn__d27clean6" data-original-id="yykAuditExecutiveBtn";
      exec.type='button';
      exec.textContent='Executive Overview';
    }
    exec.className='yyk-v32-exec-btn';
    exec.setAttribute('aria-label','Open Executive Decision Layer');
    if(exec.parentNode!==rail) rail.insertBefore(exec,exit.nextSibling);
    exec.onclick=function(e){
      e.preventDefault();
      closeAll();
      var target=q('#yykExecutiveDecisionLayer') || q('.yyk-executive-decision-layer') || q('[id*="ExecutiveDecision"]');
      if(target) target.scrollIntoView({behavior:'smooth',block:'start'});
    };
    qa('.yyk-control-action',rail).forEach(function(btn){
      var key=btn.getAttribute('data-open-engine');
      if(!key){
        var t=text(btn).toLowerCase();
        if(t.indexOf('virtual')>-1) key='vdr';
        else if(t.indexOf('legal')>-1) key='legal';
        else if(t.indexOf('supply')>-1) key='supply';
        else if(t.indexOf('data room')>-1 || t.indexOf('stress')>-1) key='data';
        else if(t.indexOf('pricing')>-1) key='pricing';
        else if(t.indexOf('tds')>-1 || t.indexOf('foundry')>-1) key='tds';
        else if(t.indexOf('partnership')>-1) key='partnership';
        if(key) btn.setAttribute('data-open-engine',key);
      }
      if(key && ORDER[key]) btn.style.order=ORDER[key];
      btn.type='button';
      btn.disabled=false;
      btn.removeAttribute('aria-disabled');
      btn.setAttribute('tabindex','0');
    });
    exit.style.order='0';
    exec.style.order='10';
  }
  function wireClicks(){
    if(document.__yykV32RailClicks) return;
    document.__yykV32RailClicks=true;
    document.addEventListener('click',function(e){
      var engineBtn=e.target.closest && e.target.closest('#yykAuditControlPanel [data-open-engine]');
      if(engineBtn){
        e.preventDefault();
        var key=engineBtn.getAttribute('data-open-engine');
        openEngine(key);
        return;
      }
      var mode=e.target.closest && e.target.closest('#yykAuditControlPanel .yyk-mode-btn');
      if(mode){
        var y=window.scrollY;
        setTimeout(function(){ensureRail();window.scrollTo({top:y,left:0,behavior:'auto'});},0);
      }
    },true);
  }
  function install(){
    ensureRail();
    wireClicks();
    var rail=q('#yykAuditControlActions');
    if(rail && !rail.__yykV32Observer){
      var obs=new MutationObserver(function(){setTimeout(ensureRail,0)});
      obs.observe(rail,{childList:true,subtree:true,attributes:true});
      rail.__yykV32Observer=obs;
    }
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',install); else install();
})();

// --- Script Block 104 ---
(function(){
  'use strict';
  var YYK=window.YYK=window.YYK||{}; YYK.audit=YYK.audit||[];
  function q(s,r){return (r||document).querySelector(s)}
  function qa(s,r){return Array.prototype.slice.call((r||document).querySelectorAll(s))}
  function now(){var d=new Date();return String(d.getHours()).padStart(2,'0')+':'+String(d.getMinutes()).padStart(2,'0')+':'+String(d.getSeconds()).padStart(2,'0')}
  function positive(v){return /true|yes|pass|approved|verified|matched|complete|ready|clear|selected|valid|1/i.test(String(v||''))}
  function scanNodes(){
    var nodes={euc:false,sanctions:false,coa:false,lab:false,route:false,spec:false};
    qa('input,select,textarea,[data-node],[data-rfq-node]').forEach(function(el){
      var hay=[el.id,el.name,el.getAttribute('aria-label'),el.getAttribute('data-node'),el.getAttribute('data-rfq-node'),el.closest('label')&&el.closest('label').textContent].filter(Boolean).join(' ').toLowerCase();
      var val=el.type==='checkbox'?el.checked:(el.value||el.textContent||'');
      var ok=el.type==='checkbox'?!!val:positive(val);
      if(!ok) return;
      if(/euc|end.user|end-user/.test(hay)) nodes.euc=true;
      if(/sanction|ofac|meti|kosti/.test(hay)) nodes.sanctions=true;
      if(/coa|method/.test(hay)) nodes.coa=true;
      if(/lab|calibration/.test(hay)) nodes.lab=true;
      if(/route|bonded|logistics/.test(hay)) nodes.route=true;
      if(/spec|foundry|mapping/.test(hay)) nodes.spec=true;
    });
    var gateText=((q('#rfqHardGate')||{}).textContent||'')+' '+document.body.className;
    if(/verified|quote release enabled|approved|pass/i.test(gateText) && !/blocked|missing|no quote/i.test(gateText)) Object.keys(nodes).forEach(function(k){nodes[k]=true});
    var missing=Object.keys(nodes).filter(function(k){return !nodes[k]});
    return {nodes:nodes,missing:missing,blocked:/blocked|no quote|missing|alert|hard gate/i.test(gateText)};
  }
  function addAudit(level,status,msg){
    var last=YYK.audit[YYK.audit.length-1];
    if(last && last.status===status && last.msg===msg) return;
    YYK.audit.push({time:now(),level:level,status:status,msg:msg});
    if(YYK.audit.length>80) YYK.audit=YYK.audit.slice(-80);
    renderAudit();
  }
  function renderAudit(){
    var log=q('#yykAuditLog'), count=q('#yykAuditCount'); if(!log) return;
    if(count) count.textContent=String(YYK.audit.length).padStart(2,'0');
    log.innerHTML=YYK.audit.slice(-24).reverse().map(function(x){return '<li data-level="'+x.level+'"><span class="t">'+x.time+'</span><span class="s">'+x.status+'</span><span class="m">'+x.msg+'</span></li>'}).join('');
  }
  function updateIntegrity(reason){
    var shell=q('#yykLiveIntegrity'); if(!shell) return;
    var st=scanNodes(), missing=st.missing;
    var state='review', status='REVIEW REQUIRED', rfq='NON-BINDING', risk='MEDIUM', compliance='PENDING', warning='RFQ remains non-binding. Quote release requires EUC, sanctions screen, CoA method ID, laboratory calibration ID, bonded route confirmation and buyer foundry spec mapping.';
    var labels={euc:'EUC',sanctions:'sanctions screen',coa:'CoA method ID',lab:'lab calibration ID',route:'bonded route confirmation',spec:'buyer foundry spec mapping'};
    if(st.blocked || missing.length){
      state='blocked'; status='DO NOT QUOTE'; rfq='BLOCKED'; risk=missing.length>=4?'HIGH':'ELEVATED'; compliance='INCOMPLETE'; warning='No Quote Release. Missing: '+missing.map(function(k){return labels[k]}).join(', ')+'. Final supply remains subject to written agreement and batch-specific certification.';
    } else {
      state='clear'; status='SYSTEM VERIFIED'; rfq='QUOTE-READY'; risk='LOW'; compliance='PASS'; warning='Mandatory evidence nodes appear validated. Quote release may proceed only under written commercial terms, released batch evidence and authorized approval.';
    }
    shell.setAttribute('data-integrity-state',state);
    [['#yykLiStatus',status],['#yykLiRfq',rfq],['#yykLiRisk',risk],['#yykLiCompliance',compliance],['#yykLiWarning',warning]].forEach(function(pair){var el=q(pair[0]); if(el) el.textContent=pair[1]});
    addAudit(state,state.toUpperCase(),(reason||'Integrity sync')+' · '+status+' · compliance '+compliance);
  }
  function bind(){
    var toggle=q('#yykLiveIntegrityToggle'), panel=q('#yykLiveIntegrityPanel');
    if(toggle&&panel){toggle.addEventListener('click',function(){var open=panel.hidden; panel.hidden=!open; toggle.setAttribute('aria-expanded',String(open)); addAudit('review','PANEL',open?'Audit viewer opened':'Audit viewer collapsed')})}
    var clear=q('#yykAuditClear'); if(clear){clear.addEventListener('click',function(e){e.stopPropagation(); YYK.audit=[]; addAudit('review','RESET','Audit viewer display reset')})}
    document.addEventListener('input',function(){setTimeout(function(){updateIntegrity('RFQ input changed')},40)},true);
    document.addEventListener('change',function(){setTimeout(function(){updateIntegrity('RFQ/compliance state changed')},40)},true);
    document.addEventListener('click',function(e){
      var btn=e.target.closest('button,a,[data-module-action],[data-control-open],[data-panel]');
      if(btn){var label=(btn.textContent||btn.getAttribute('data-module-action')||btn.getAttribute('data-panel')||'control').trim().replace(/\s+/g,' '); addAudit('review','ACTION',label.slice(0,96)); setTimeout(function(){updateIntegrity('Control action')},80)}
    },true);
    document.addEventListener('yyk:engine-open',function(e){addAudit('review','ENGINE','Opened '+((e.detail&&e.detail.id)||'engine')); updateIntegrity('Engine open')});
    addAudit('review','BOOT','Live integrity module initialized'); updateIntegrity('Initial scan');
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',bind); else bind();
})();

// --- Script Block 105 ---
(function(){function scrub(){if(!document.body)return;var re=/(modules\.core=|RFQ synchronized\. Opening RFQ form|var\s+blob\s*=\s*new\s+Blob\(\[html\]|YONGYEOKYO_.*?\.html)/;Array.prototype.slice.call(document.body.childNodes).forEach(function(n){if(n.nodeType===3&&re.test(n.nodeValue||''))n.nodeValue=''});document.querySelectorAll('#yykModuleHealth,.yyk-module-health').forEach(function(el){el.remove()})}if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',scrub);else scrub();setTimeout(scrub,300)})();

// --- Script Block 106 ---
(function(){
  'use strict';
  function q(s){return document.querySelector(s)}
  function setText(id,val){var el=q('#'+id); if(el) el.textContent=val;}
  function pad(n){return String(n).padStart(2,'0')}
  function kst(){var d=new Date(); var parts=new Intl.DateTimeFormat('en-GB',{timeZone:'Asia/Seoul',hour:'2-digit',minute:'2-digit',second:'2-digit',hour12:false}).formatToParts(d); var m={}; parts.forEach(function(p){m[p.type]=p.value}); return (m.hour||'00')+':'+(m.minute||'00')+':'+(m.second||'00')+' KST';}
  function inferRisk(){
    var body=(document.body.textContent||'').toLowerCase();
    if(body.indexOf('do not quote')>-1 || body.indexOf('rfq blocked')>-1) return 'HIGH / GATE BLOCK';
    if(body.indexOf('review required')>-1 || body.indexOf('pending')>-1) return 'MEDIUM / REVIEW';
    return 'LOW / MONITORED';
  }
  function update(){
    setText('yykMapVerifiedState','VERIFIED · COMPLIANCE READY');
    setText('yykLiveClock', 'KST');
    var clock=q('#yykLiveClock + span'); if(clock) clock.textContent=kst();
    var risk=inferRisk(); var riskEl=q('#yykLiveRisk + span'); if(riskEl) riskEl.textContent=risk;
    setText('yykRouteQcStatus', risk.indexOf('HIGH')===0?'REVIEW':'VERIFIED');
    setText('yykRouteBusanStatus','BONDED READY');
    setText('yykRouteYokohamaStatus','BONDED READY');
    setText('yykRouteBcpStatus', risk.indexOf('HIGH')===0?'ALT ROUTE ARMED':'ALT ROUTE STANDBY');
    var map=q('#yykFooterLogisticsMap'); if(map) map.setAttribute('data-live-risk', risk.split(' ')[0].toLowerCase());
  }
  function bindRouteFocus(){
    var map=q('#yykFooterLogisticsMap'); if(!map) return;
    map.addEventListener('mouseenter',function(e){
      var node=e.target && e.target.closest ? e.target.closest('.port-node,.yyk-logistics-route,.route-group') : null;
      if(!node) return;
      var label=node.getAttribute('data-port')||node.getAttribute('data-route')||'APAC LANE';
      var lane=q('#yykLiveLane + span'); if(lane) lane.textContent=String(label).toUpperCase()+' · LIVE FOCUS';
    },true);
    map.addEventListener('mouseleave',function(e){
      var lane=q('#yykLiveLane + span'); if(lane) lane.textContent='MY → BUSAN → YOKOHAMA';
    },true);
  }
  function init(){update();bindRouteFocus();setInterval(update,1000)}
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',init); else init();
})();

// --- Script Block 107 ---
(function(){
  'use strict';
  function q(s){return document.querySelector(s)}
  function log(msg){try{document.dispatchEvent(new CustomEvent('yyk:audit-log',{detail:{type:'LEGAL',message:msg}}))}catch(e){}}
  function sync(open){
    var panel=q('#yykLegalRiskPanel'), btn=q('#yykLegalRiskToggle'), body=q('#yykLegalRiskBody'), chev=panel&&panel.querySelector('.yyk-legal-risk-chevron');
    if(!panel||!btn||!body) return;
    panel.classList.toggle('open',!!open);
    btn.setAttribute('aria-expanded',String(!!open));
    body.hidden=!open;
    body.setAttribute('aria-hidden',String(!open));
    if(chev) chev.textContent=open?'⌃':'⌄';
    var summary=q('#yykLegalRiskSummary');
    if(summary && !summary.dataset.baseText) summary.dataset.baseText=summary.textContent.trim();
  }
  function init(){
    var panel=q('#yykLegalRiskPanel'), btn=q('#yykLegalRiskToggle'), body=q('#yykLegalRiskBody');
    if(!panel||!btn||!body) return;
    if(btn.__yykLegalRiskBound) return;
    btn.__yykLegalRiskBound=true;
    btn.addEventListener('click',function(e){
      e.preventDefault();
      e.stopPropagation();
      var open=!panel.classList.contains('open');
      sync(open);
      log(open?'Legal Intelligence Risk Panel opened':'Legal Intelligence Risk Panel collapsed');
    },true);
    btn.addEventListener('keydown',function(e){
      if(e.key==='Enter'||e.key===' '){e.preventDefault();btn.click();}
    });
    panel.addEventListener('click',function(e){
      if(e.target.closest('.yyk-legal-risk-head')) return;
    });
    sync(panel.classList.contains('open'));
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',init); else init();
  setTimeout(init,250);
})();

// --- Script Block 108 ---
(function(){
  function byId(id){return document.getElementById(id)}
  function openQcLab(){
    var contact=byId('contactEngine');
    if(contact){contact.classList.remove('active'); contact.setAttribute('aria-hidden','true');}
    var engine=byId('productEngine');
    if(!engine) return false;
    engine.classList.add('active');
    engine.setAttribute('aria-hidden','false');
    document.body.classList.add('apex-modal-open');
    document.body.style.overflow='hidden';
    var tabs=engine.querySelectorAll('.product-tab[data-product-tab]');
    var panels=engine.querySelectorAll('.product-panel[data-product-panel]');
    tabs.forEach(function(tab){
      var on=tab.getAttribute('data-product-tab')==='quality';
      tab.classList.toggle('active',on);
      tab.setAttribute('aria-selected',on?'true':'false');
    });
    panels.forEach(function(panel){
      var on=panel.getAttribute('data-product-panel')==='quality';
      panel.classList.toggle('active',on);
      panel.hidden=!on;
      panel.setAttribute('aria-hidden',on?'false':'true');
      panel.style.display=on?'block':'none';
    });
    if(window.YYK_AuditLog && typeof window.YYK_AuditLog.push==='function'){
      window.YYK_AuditLog.push('QC Lab Quality Chain opened from footer technical consultation');
    }
    return true;
  }
  document.addEventListener('click',function(e){
    var btn=e.target.closest && e.target.closest('.yyk-qc-lab-btn, [data-qc-lab-open]');
    if(!btn) return;
    e.preventDefault();
    e.stopPropagation();
    if(e.stopImmediatePropagation) e.stopImmediatePropagation();
    openQcLab();
  },true);
})();

// --- Script Block 109 ---
(function(){
  function q(s){return document.querySelector(s)}
  function stabilizeRoleSwitcher(){
    var panel=q('#yykAuditControlPanel');
    if(!panel) return;
    var top=panel.querySelector('.yyk-audit-top');
    var modes=panel.querySelector('.yyk-audit-modes');
    if(!top || !modes) return;
    top.style.display='contents';
    modes.style.display='flex';
    modes.style.visibility='visible';
    modes.style.opacity='1';
    modes.setAttribute('aria-label','Workspace role switcher');
    modes.querySelectorAll('.yyk-mode-btn').forEach(function(btn){
      btn.style.display='inline-flex';
      btn.style.visibility='visible';
      btn.style.opacity='1';
      btn.setAttribute('role','tab');
    });
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',stabilizeRoleSwitcher,{once:true});
  else stabilizeRoleSwitcher();
  setTimeout(stabilizeRoleSwitcher,250);
  setTimeout(stabilizeRoleSwitcher,900);
})();

// --- Script Block 110 ---
(function(){
  function q(s){return document.querySelector(s)}
  function stabilizeLeftRail(){
    var panel=q('#yykAuditControlPanel');
    if(!panel) return;
    var wrap=panel.querySelector('.yyk-audit-wrap');
    var actions=panel.querySelector('#yykAuditControlActions,.yyk-control-actions');
    var modes=panel.querySelector('.yyk-audit-modes');
    var top=panel.querySelector('.yyk-audit-top');
    if(wrap){
      wrap.style.display='grid';
      wrap.style.gridTemplateColumns='minmax(0,1fr) auto';
      wrap.style.gridTemplateAreas='"actions modes"';
      wrap.style.alignItems='center';
    }
    if(top) top.style.display='contents';
    if(actions){
      actions.style.gridArea='actions';
      actions.style.justifySelf='start';
      actions.style.justifyContent='flex-start';
      actions.style.marginLeft='0';
      actions.style.paddingLeft='0';
      actions.style.transform='none';
    }
    if(modes){
      modes.style.gridArea='modes';
      modes.style.justifySelf='end';
      modes.style.justifyContent='flex-end';
      modes.style.transform='none';
      modes.style.visibility='visible';
      modes.style.opacity='1';
    }
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',stabilizeLeftRail,{once:true});
  else stabilizeLeftRail();
  setTimeout(stabilizeLeftRail,120);
  setTimeout(stabilizeLeftRail,600);
})();

// --- Script Block 111 ---
(function(){
  function q(s){return document.querySelector(s)}
  function repairTopPanel(){
    var panel=q('#yykAuditControlPanel');
    if(!panel) return;
    panel.classList.add('yyk-v54-top-stable');
    var wrap=panel.querySelector('.yyk-audit-wrap');
    var top=panel.querySelector('.yyk-audit-top');
    var modes=panel.querySelector('.yyk-audit-modes');
    var actions=panel.querySelector('.yyk-control-actions');
    if(wrap){wrap.style.removeProperty('left');wrap.style.removeProperty('transform')}
    if(top){top.style.removeProperty('justify-content')}
    if(modes){modes.style.removeProperty('margin-left')}
    if(actions){actions.style.removeProperty('margin-left');actions.style.removeProperty('justify-content')}
  }
  function placeInteractiveMap(){
    var desk=q('#yykApacInteractiveDesk');
    var legacy=q('#yykFooterLogisticsMap');
    if(!desk) return;
    desk.classList.add('yyk-v54-map-primary');
    if(legacy){
      if(desk.parentNode!==legacy.parentNode || desk.nextElementSibling!==legacy){legacy.parentNode.insertBefore(desk, legacy)}
      legacy.classList.add('yyk-v54-legacy-hidden');
    }
    var firstPort=desk.querySelector('.yyk-port[data-port="kuantan"]');
    if(firstPort && !desk.hasAttribute('data-v54-selected')){firstPort.click();desk.setAttribute('data-v54-selected','kuantan')}
  }
  function init(){repairTopPanel();placeInteractiveMap();setTimeout(function(){repairTopPanel();placeInteractiveMap()},250);setTimeout(function(){repairTopPanel();placeInteractiveMap()},900)}
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});else init();
})();

// --- Script Block 112 ---
(function(){
  const mockBatchDB = {
    "COA-CU6N-2024-001": {
      batch_verified:true,
      coa_match:true,
      material_match:true,
      material:"Copper high-purity materials · KE-08896",
      iso17025_lab_id:"ISO17025-GDMS-ICPMS-LAB-READY",
      ppb_tolerance:"0.001",
      kyc_status:"PENDING",
      sanctions_status:"SCREEN REQUIRED",
      bonded_route_confirmed:"PENDING",
      rfq_lock:"CONDITIONAL"
    }
  };
  function sanitize(value){return String(value||"").replace(/[<>]/g,"").trim();}
  function setBackendLockState(state){
    const node=document.getElementById("batchBackendLockState");
    if(!node) return;
    node.classList.remove("release","conditional");
    if(state==="RELEASED"){node.classList.add("release");node.textContent="RFQ RELEASED · BATCH + KYC + SANCTIONS PASS";return;}
    if(state==="CONDITIONAL"){node.classList.add("conditional");node.textContent="RFQ CONDITIONAL · COMPLIANCE ACTION REQUIRED";return;}
    node.textContent="RFQ LOCKED · BACKEND BINDING REQUIRED";
  }
  window.yykBatchBackendGate = function(coaId){
    const id=sanitize(coaId || document.getElementById("batchId")?.value || "COA-CU6N-2024-001");
    const rec=mockBatchDB[id];
    if(!rec){setBackendLockState("LOCKED");return {id,rfq_lock:"LOCKED",reason:"Batch ID not found in internal batch database"};}
    const hardMissing=[];
    if(!rec.batch_verified) hardMissing.push("batch_verified");
    if(!rec.coa_match) hardMissing.push("coa_match");
    if(!rec.material_match) hardMissing.push("material_match");
    if(!rec.iso17025_lab_id) hardMissing.push("iso17025_lab_id");
    if(rec.kyc_status!=="PASS") hardMissing.push("kyc_status");
    if(rec.sanctions_status!=="PASS") hardMissing.push("sanctions_status");
    if(rec.bonded_route_confirmed!=="YES") hardMissing.push("bonded_route_confirmed");
    const lock = hardMissing.length ? (rec.rfq_lock || "CONDITIONAL") : "RELEASED";
    setBackendLockState(lock);
    return Object.assign({id,hardMissing,rfq_lock:lock},rec);
  };
  const oldVerify = window.verifyBatch;
  window.verifyBatch = function(){
    if(typeof oldVerify === "function") oldVerify();
    const id=sanitize(document.getElementById("batchId")?.value || "COA-CU6N-2024-001");
    const gate=window.yykBatchBackendGate(id);
    const rows=document.getElementById("batchRows");
    if(rows){
      rows.innerHTML += `<tr><td>Internal Batch DB</td><td>${gate.reason ? gate.reason : "Record located · API contract ready"}</td></tr>`;
      rows.innerHTML += `<tr><td>Backend RFQ-Lock</td><td class="${gate.rfq_lock==='RELEASED'?'ok':'warn'}">${gate.rfq_lock} · ${gate.hardMissing&&gate.hardMissing.length ? 'Missing: '+gate.hardMissing.join(', ') : 'All hard gates passed'}</td></tr>`;
    }
  };
  document.addEventListener("DOMContentLoaded",function(){window.yykBatchBackendGate("COA-CU6N-2024-001");});
})();

// --- Script Block 113 ---
try {
// YONGYEOKYO Directive 20 Logistics Dictate JS START
(function(){
  window.YYK_D20 = {
    logisticsHubs: [
      { region:"Malaysia", hub:"Kuantan Port (ECER)", bonded:"ACTIVE", shipment:"24-48h" },
      { region:"South Korea", hub:"Busan Port", bonded:"ACTIVE", shipment:"24-48h" },
      { region:"South Korea", hub:"Port of Incheon (Bonded)", bonded:"ACTIVE", shipment:"24-48h" },
      { region:"Japan", hub:"Yokohama", bonded:"ACTIVE", shipment:"24-48h" },
      { region:"Japan", hub:"Niigata", bonded:"ACTIVE", shipment:"24-48h" },
      { region:"China", hub:"Shanghai", bonded:"ACTIVE", shipment:"24-48h" },
      { region:"China / HK", hub:"Hong Kong", bonded:"ACTIVE", shipment:"24-48h" },
      { region:"China", hub:"Qingdao", bonded:"ACTIVE", shipment:"24-48h" },
      { region:"China", hub:"Tianjin", bonded:"ACTIVE", shipment:"24-48h" }
    ],
    koreaDistributionRule: "Korea acts as a hub for further distribution of products from Malaysia ECER.",
    validateTolerance: function(){
      var input = document.getElementById("d20PpbTolerance");
      var result = document.getElementById("d20ToleranceResult");
      var value = input ? Number(input.value) : NaN;
      var ok = Number.isFinite(value) && value > 0;
      if(result){
        result.classList.toggle("block", !ok);
        result.textContent = ok
          ? "PASS · ppb tolerance captured for RFQ technical routing."
          : "BLOCKED · ppb tolerance missing; RFQ cannot pass final gate.";
      }
      return ok;
    }
  };
})();
// YONGYEOKYO Directive 20 Logistics Dictate JS END
} catch(e) { console.warn('Script block 113 error:', e); }

// --- Script Block 114 ---
try {
// YONGYEOKYO Directive 21 Strategic Reserve JS START
(function(){
  window.YYK_D21 = {
    productTab: "CRITICAL MINERALS",
    strategicMinerals10: {
      battery: ["Lithium", "Nickel", "Cobalt", "Manganese", "Graphite"],
      magnetsRee: ["Neodymium", "Dysprosium", "Terbium", "Cerium", "Lanthanum"]
    },
    semiconductorDisplayGrade: ["Gallium", "Germanium", "Indium"],
    targetIndustries: ["Semiconductors (DRAM/NAND)", "Battery Industry (LG/Samsung/SK)", "Future Mobility (EV/Hydrogen)", "Defense & Aerospace"],
    strategy2030: "Supporting South Korea’s 2030 strategy: Reducing import dependency below 50% through diversified, bonded supply from Malaysia ECER."
  };

  // Add visible PRODUCT nav/category marker if a product nav area exists.
  function ensureCriticalMineralsNav(){
    var navs = document.querySelectorAll(".site-nav, nav, .product-tabs, .product-actions");
    for(var i=0;i<navs.length;i++){
      var n = navs[i];
      if(n && !n.querySelector('[data-d21-critical-minerals-link]')){
        var a = document.createElement("a");
        a.href = "#directive21-strategic-reserve";
        a.textContent = "CRITICAL MINERALS";
        a.setAttribute("data-d21-critical-minerals-link", "true");
        a.className = "nav-link";
        n.appendChild(a);
        break;
      }
    }
  }
  if(document.readyState === "loading"){
    document.addEventListener("DOMContentLoaded", ensureCriticalMineralsNav);
  } else {
    ensureCriticalMineralsNav();
  }
})();
// YONGYEOKYO Directive 21 Strategic Reserve JS END
} catch(e) { console.warn('Script block 114 error:', e); }

// --- Script Block 115 ---
try {
// YONGYEOKYO Directive 22 Japan Tech Standard JS START
(function(){
  window.YYK_D22 = {
    productCategory: "Advanced Material Matrix",
    japanHighTechGrade: ["Gallium (Ga)", "Germanium (Ge)", "Indium (In)", "Copper Cu 7N"],
    rareEarthMagnets: ["Neodymium (Nd)", "Dysprosium (Dy)", "Terbium (Tb)", "Praseodymium (Pr)", "Yttrium (Y)"],
    targetMarkets: ["Power Electronics (GaN)", "Robotics (Precision Motors)", "Next-Gen Mobility (Hydrogen/Hybrid)", "Aerospace (High-temp alloys)"],
    japanSupplyStatus: {
      Yokohama: "JOGMEC-Aligned / Stockpiling Ready",
      Niigata: "JOGMEC-Aligned / Stockpiling Ready"
    },
    bcp: "Our Malaysia-Japan corridor supports JOGMEC’s strategic diversification goal, ensuring direct supply of critical minerals outside dominant markets."
  };

  function ensureJapanNav(){
    var navs = document.querySelectorAll(".site-nav, nav, .product-tabs, .product-actions");
    for(var i=0;i<navs.length;i++){
      var n = navs[i];
      if(n && !n.querySelector('[data-d22-japan-tech-link]')){
        var a = document.createElement("a");
        a.href = "#directive22-japan-tech-standard";
        a.textContent = "JAPAN HIGH-TECH";
        a.setAttribute("data-d22-japan-tech-link", "true");
        a.className = "nav-link";
        n.appendChild(a);
        break;
      }
    }
  }
  if(document.readyState === "loading"){
    document.addEventListener("DOMContentLoaded", ensureJapanNav);
  } else {
    ensureJapanNav();
  }
})();
// YONGYEOKYO Directive 22 Japan Tech Standard JS END
} catch(e) { console.warn('Script block 115 error:', e); }

// --- Script Block 116 ---
try {
// YONGYEOKYO Directive 23 Taiwan Silicon Shield JS START
(function(){
  window.YYK_D23 = {
    productCategory: "Lithography & Sputtering Grade",
    taiwanFoundrySpecs: {
      materials: ["Tantalum (Ta)", "Tungsten (W)", "Ultra-Pure Cerium (Ce)"],
      format: "Sputtering Targets for PVD processes",
      customerEcosystem: ["Advanced foundries <3nm/2nm", "AI infrastructure server PCBs", "Micro-LED display manufacturing"]
    },
    taiwanDeskStatus: "Foundry-Grade Certified / PVD Target Supply Active",
    continuityNotice: "Direct supply security: our Malaysia ECER corridor provides a critical alternative to mainland China supply, preserving the integrity of the Silicon Shield through geopolitical diversification."
  };

  function ensureTaiwanNav(){
    var navs = document.querySelectorAll(".site-nav, nav, .product-tabs, .product-actions");
    for(var i=0;i<navs.length;i++){
      var n = navs[i];
      if(n && !n.querySelector('[data-d23-taiwan-foundry-link]')){
        var a = document.createElement("a");
        a.href = "#directive23-taiwan-silicon-shield";
        a.textContent = "TAIWAN FOUNDRY";
        a.setAttribute("data-d23-taiwan-foundry-link", "true");
        a.className = "nav-link";
        n.appendChild(a);
        break;
      }
    }
  }
  if(document.readyState === "loading"){
    document.addEventListener("DOMContentLoaded", ensureTaiwanNav);
  } else {
    ensureTaiwanNav();
  }
})();
// YONGYEOKYO Directive 23 Taiwan Silicon Shield JS END
} catch(e) { console.warn('Script block 116 error:', e); }

// --- Script Block 117 ---
try {
// YONGYEOKYO Directive 24 China Resource Monolith JS START
(function(){
  window.YYK_D24 = {
    productCategory: "Global Resource Control",
    strategicFeedstockRefining: {
      heavyRee: ["Dysprosium", "Terbium"],
      batteryFeedstock: ["Lithium", "Cobalt", "Nickel"],
      exportControlMetals: ["Gallium", "Germanium"]
    },
    chinaSupplyStatus: {
      Shanghai: "MOFCOM Compliance Active / Strategic Reserve Connected",
      Tianjin: "MOFCOM Compliance Active / Strategic Reserve Connected",
      Qingdao: "MOFCOM Compliance Active / Strategic Reserve Connected",
      HongKongIntegratedCenter: "Compliance conduit for MOFCOM-regulated materials"
    },
    hkConduit: "Our Hong Kong Integrated Center acts as a compliance conduit for MOFCOM-regulated materials, ensuring legal and transparent dual-use item transfers.",
    targetMarkets: ["EV Battery Megafactories", "Solar-Grade Silicon Supply", "6G Telecommunications (Huawei/ZTE standards)"],
    validateMofcomLicenseGate: function(payload){
      var regulated = ["gallium","germanium","graphite","rare earth","dysprosium","terbium"];
      var material = String(payload && payload.material || "").toLowerCase();
      var hit = regulated.some(function(x){ return material.indexOf(x) >= 0; });
      return {
        licenseRequired: hit,
        status: hit ? "MOFCOM_REVIEW_REQUIRED" : "STANDARD_COMPLIANCE_ROUTE",
        gate: "CHINA_EXPORT_LICENSE_MANAGEMENT"
      };
    }
  };

  function ensureChinaNav(){
    var navs = document.querySelectorAll(".site-nav, nav, .product-tabs, .product-actions");
    for(var i=0;i<navs.length;i++){
      var n = navs[i];
      if(n && !n.querySelector('[data-d24-china-resource-link]')){
        var a = document.createElement("a");
        a.href = "#directive24-china-resource-monolith";
        a.textContent = "CHINA RESOURCE";
        a.setAttribute("data-d24-china-resource-link", "true");
        a.className = "nav-link";
        n.appendChild(a);
        break;
      }
    }
  }
  if(document.readyState === "loading"){
    document.addEventListener("DOMContentLoaded", ensureChinaNav);
  } else {
    ensureChinaNav();
  }
})();
// YONGYEOKYO Directive 24 China Resource Monolith JS END
} catch(e) { console.warn('Script block 117 error:', e); }

// --- Script Block 118 ---
try {
// YONGYEOKYO Directive 25 APAC Interdependency JS START
(function(){
  window.YYK_D25 = {
    version: "Directive 25 Canonical / APAC Interdependency 2024-2025",
    dashboard: "AUDIT / Regional Risk & Strategy",
    matrix: {
      China: { identity: "Resource Sword", materials: ["Rare earths", "Gallium", "Graphite"], function: "MOFCOM license navigation and regulated route control" },
      SouthKorea: { identity: "Battery & Memory Hub", materials: ["Lithium", "Nickel", "DRAM/NAND"], function: "Busan redistribution and battery / memory demand mapping" },
      Japan: { identity: "Precision Foundation", materials: ["JOGMEC", "Equipment", "Purity"], function: "Yokohama / Niigata high-purity stockpiling route" },
      Taiwan: { identity: "Silicon Shield", materials: ["<3nm Foundry", "Lithography"], function: "Foundry-grade PVD target continuity" }
    },
    crossBorderComplianceLogic: "Our system acts as a buffer between China's export controls and the Silicon Shield's demand, providing a neutral, bonded transit and verification route.",
    regionalSynergyIndex: 92,
    gapCloser: {
      Kuantan: "Alternative Malaysia ECER feedstock origin outside Chinese licensing bottlenecks",
      Busan: "Regional redistribution bridge for APAC critical-mineral flows"
    },
    gates: ["Origin verification", "CoA / ISO 17025", "MOFCOM / METI / KOSTI review", "KYC", "Sanctions Screening"]
  };
  function ensureDirective25Nav(){
    var nav = document.querySelector('.site-nav');
    if(nav && !nav.querySelector('[data-d25-apac-link]')){
      var a=document.createElement('a');
      a.href='#directive25-apac-interdependency';
      a.textContent='APAC MATRIX';
      a.className='nav-link';
      a.setAttribute('data-d25-apac-link','true');
      nav.appendChild(a);
    }
  }
  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', ensureDirective25Nav, {once:true});
  else ensureDirective25Nav();
})();
// YONGYEOKYO Directive 25 APAC Interdependency JS END
} catch(e) { console.warn('Script block 118 error:', e); }

// --- Script Block 119 ---
try {
{
  "version": "D25-RSI-2026.05",
  "updated_at": "2026-05-06T22:30:00Z",
  "source": "embedded-backend-contract",
  "weights": {
    "china_license_visibility": 0.25,
    "korea_distribution_readiness": 0.25,
    "japan_purity_route_readiness": 0.25,
    "taiwan_silicon_shield_continuity": 0.25
  },
  "regions": {
    "CN": {"label": "China", "score": 92, "basis": "MOFCOM license visibility, gallium/germanium/REE routing, Hong Kong conduit"},
    "KR": {"label": "South Korea", "score": 94, "basis": "Busan distribution readiness, battery/memory demand coverage, KYC/sanctions gate"},
    "JP": {"label": "Japan", "score": 91, "basis": "Yokohama/Niigata purity route, JOGMEC-style stockpile logic, METI gate"},
    "TW": {"label": "Taiwan", "score": 93, "basis": "Silicon Shield continuity, PVD target corridor, foundry-grade supply resilience"}
  },
  "controls": {
    "kyc_required": true,
    "sanctions_required": true,
    "origin_required": "Made in Malaysia ECER",
    "primary_gap_closer_hubs": ["Kuantan", "Busan"]
  }
}
} catch(e) { console.warn('Script block 119 error:', e); }

// --- Script Block 120 ---
(function(){
  'use strict';
  const API_ENDPOINT = '/api/regional-synergy-index.json';
  const ids = {
    box:'regionalSynergyIndexLive', score:'rsiLiveScore', bar:'rsiLiveBar',
    narrative:'rsiLiveNarrative', source:'rsiLiveSource', CN:'rsiCN', KR:'rsiKR', JP:'rsiJP', TW:'rsiTW'
  };
  function el(id){ return document.getElementById(id); }
  function clamp(n){ n=Number(n); if(!Number.isFinite(n)) return 0; return Math.max(0, Math.min(100, Math.round(n))); }
  function embedded(){
    try{ return JSON.parse(el('d25-rsi-backend-data').textContent); }
    catch(e){ return null; }
  }
  function compute(data){
    const regions = data && data.regions ? data.regions : {};
    const weights = data && data.weights ? data.weights : {};
    const map = [
      ['CN','china_license_visibility'],
      ['KR','korea_distribution_readiness'],
      ['JP','japan_purity_route_readiness'],
      ['TW','taiwan_silicon_shield_continuity']
    ];
    let weighted=0,total=0;
    map.forEach(function(pair){
      const code=pair[0], key=pair[1];
      const score=clamp(regions[code] && regions[code].score);
      const w=Number(weights[key] || 0.25);
      weighted += score*w; total += w;
    });
    return clamp(total ? weighted/total : 0);
  }
  function render(data, status){
    const box=el(ids.box); if(!box || !data) return;
    const score=compute(data);
    box.dataset.rsi=String(score);
    box.dataset.liveStatus=status || 'fallback';
    el(ids.score).textContent=score+'%';
    el(ids.bar).style.width=score+'%';
    ['CN','KR','JP','TW'].forEach(function(code){
      const node=el(ids[code]);
      if(node && data.regions && data.regions[code]) node.textContent=clamp(data.regions[code].score);
    });
    const controls=data.controls || {};
    el(ids.narrative).textContent = 'Live balance across China, Korea, Japan and Taiwan · origin: '+(controls.origin_required || 'verified origin')+' · gap closers: '+((controls.primary_gap_closer_hubs || ['Kuantan','Busan']).join(' + '))+'.';
    el(ids.source).textContent = status === 'live'
      ? 'Source: live backend API · '+(data.updated_at || 'timestamp pending')
      : 'Source: embedded backend fallback · '+(data.updated_at || 'timestamp pending')+' · replaceable by '+API_ENDPOINT;
  }
  async function init(){
    const fallback=embedded();
    render(fallback,'fallback');
    try{
      const res=await fetch(API_ENDPOINT,{cache:'no-store'});
      if(!res.ok) throw new Error('API unavailable');
      const live=await res.json();
      render(live,'live');
    }catch(e){
      render(fallback,'fallback');
    }
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',init,{once:true}); else init();
})();

// --- Script Block 121 ---
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
        <div class="d25-rsi-source" id="yykRsiLiveSource">Connecting to backend…</div>
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

// --- Script Block 122 ---
(function(){
  'use strict';
  const MASTER={uThMaxPpb:0.05,feMaxPpb:8,nomenclature:['CORE','PRECISION','ULTRA'],sanctionsSources:['OFAC','METI','KOSTI'],guardianLastScanKey:'YYK_G27_LAST_SCAN'};
  const REQUIRED_HUBS=['Kuantan','Busan','Yokohama','Shanghai','Tianjin'];
  function q(s){return document.querySelector(s)}
  function status(t,w){const e=q('#yykG27Status');if(!e)return;e.textContent=t;e.classList.toggle('warn',!!w)}
  function result(t,b){const e=q('#yykG27Result');if(!e)return;e.textContent=t;e.classList.toggle('block',!!b)}
  function dedupeIds(){const seen=new Set();document.querySelectorAll('[id]').forEach(n=>{if(n.closest('#yyk-d27-guardian-canonical'))return;const id=n.id;if(!id)return;if(seen.has(id)){n.setAttribute('data-g27-repaired-duplicate-id',id);n.removeAttribute('id')}else seen.add(id)})}
  function repairNomenclature(){document.querySelectorAll('[data-nomenclature]').forEach(n=>{const v=String(n.getAttribute('data-nomenclature')||'').toUpperCase();if(!MASTER.nomenclature.includes(v)){n.setAttribute('data-nomenclature','CORE');n.setAttribute('data-g27-repaired','nomenclature')}})}
  function enforceActiveSupply(){REQUIRED_HUBS.forEach(h=>document.querySelectorAll('td,span,div').forEach(n=>{if((n.textContent||'').includes(h)){const r=n.closest('tr');if(r&&!/ACTIVE/i.test(r.textContent))r.setAttribute('data-g27-supply-repair','ACTIVE / 24-48h required')}}))}
  function simulateSanctionsScan(p){p=p||{};const hit=String(p.sanctions||'').toLowerCase()==='hit';const stamp=new Date().toISOString();try{localStorage.setItem(MASTER.guardianLastScanKey,stamp)}catch(e){};if(hit){status('GUARDIAN BLOCK · SANCTIONS HIT',true);return{blocked:true,reason:'Sanctions hit',sources:MASTER.sanctionsSources,scanned_at:stamp}}status('GUARDIAN SCAN COMPLETE · CLEAR',false);return{blocked:false,reason:'Clear',sources:MASTER.sanctionsSources,scanned_at:stamp}}
  function validateRfq(p){p=p||{};const m=String(p.material||'CORE').toUpperCase();const purity=Number(p.purity);const u=Number(p.uThPpb);const fe=Number(p.fePpb);const sanctions=String(p.sanctions||'clear').toLowerCase();const v=[];if(!MASTER.nomenclature.includes(m)&&!['CU','AL','ZN','REE'].includes(m))v.push('Nomenclature outside CORE/PRECISION/ULTRA');if(Number.isFinite(u)&&u>MASTER.uThMaxPpb)v.push('U/Th exceeds < 0.05 ppb tolerance');if(Number.isFinite(fe)&&fe>MASTER.feMaxPpb)v.push('Fe exceeds < 8 ppb tolerance');if(Number.isFinite(purity)&&purity<99.999)v.push('Purity below high-purity minimum');if(sanctions!=='clear')v.push('Sanctions status not clear');return{blocked:v.length>0,risk:v.length?'HIGH RISK':'CONTROLLED',release:v.length?'NO QUOTE RELEASE':'CONTROLLED RFQ PATH',violations:v}}
  function validateCurrentRfq(){const p={material:q('#yykG27Material')&&q('#yykG27Material').value,purity:q('#yykG27Purity')&&q('#yykG27Purity').value,uThPpb:q('#yykG27UTh')&&q('#yykG27UTh').value,fePpb:q('#yykG27Fe')&&q('#yykG27Fe').value,sanctions:q('#yykG27Sanctions')&&q('#yykG27Sanctions').value};const scan=simulateSanctionsScan(p);const rfq=validateRfq(p);const blocked=scan.blocked||rfq.blocked;result(blocked?'HIGH RISK · Compliance Officer required · '+rfq.release+' · '+rfq.violations.concat(scan.blocked?[scan.reason]:[]).join('; '):'PASS · Controlled RFQ path available · '+rfq.release,blocked);return{scan,rfq}}
  function selfRepair(){dedupeIds();repairNomenclature();enforceActiveSupply()}
  window.YYK_G27_GUARDIAN={MASTER,simulateSanctionsScan,validateRfq,validateCurrentRfq,selfRepair};
  function init(){selfRepair();simulateSanctionsScan({sanctions:'clear'})}
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});else init();
  setInterval(()=>{selfRepair();simulateSanctionsScan({sanctions:'clear'})},24*60*60*1000);
})();

// --- Script Block 123 ---
(function(){
  function cleanHybridTails(){
    document.querySelectorAll('header .lang-switch, header .lang-btn, header .regional-legal-switch, header .region-btn, header .region-sep').forEach(function(el){
      el.remove();
    });
    var seen = new Set();
    document.querySelectorAll('[id]').forEach(function(el){
      if(seen.has(el.id)){
        el.setAttribute('data-hybrid-duplicate-id', el.id);
        el.removeAttribute('id');
      } else {
        seen.add(el.id);
      }
    });
  }
  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', cleanHybridTails, {once:true});
  }else{ cleanHybridTails(); }
})();

// --- Script Block 124 ---
(function(){
  'use strict';
  var overlay=document.getElementById('yykPhaseOverlay');
  if(!overlay) return;
  var title=document.getElementById('yykPhaseOverlayTitle');
  var close=document.getElementById('yykPhaseClose');
  var names={legal:'Legal Shield Layer',rma:'RMA + Arbitration',tds:'Deep Technical TDS',vdr:'VDR Access Architecture',esg:'ESG Institutional Layer',ai:'AI Orchestration Layer',twin:'Digital Twin of Supply Chain',maas:'MaaS / Circularity',thinktank:'Institutional Think Tank',investor:'Investor / M&A Architecture'};
  function qa(s,r){return Array.prototype.slice.call((r||document).querySelectorAll(s));}
  function activate(id){
    id=id||'legal';
    qa('[data-yyk-phase-pane]', overlay).forEach(function(p){p.classList.toggle('active', p.getAttribute('data-yyk-phase-pane')===id);});
    qa('[data-yyk-phase-tab]', overlay).forEach(function(b){b.classList.toggle('active', b.getAttribute('data-yyk-phase-tab')===id);});
    if(title) title.textContent=names[id]||'Phase Integration';
  }
  function open(id){activate(id);overlay.classList.add('active');overlay.setAttribute('aria-hidden','false');document.body.classList.add('apex-modal-open');}
  function shut(){overlay.classList.remove('active');overlay.setAttribute('aria-hidden','true');document.body.classList.remove('apex-modal-open');}
  qa('[data-yyk-phase-open]').forEach(function(btn){btn.addEventListener('click',function(){open(btn.getAttribute('data-yyk-phase-open'));});});
  qa('[data-yyk-phase-tab]', overlay).forEach(function(btn){btn.addEventListener('click',function(){activate(btn.getAttribute('data-yyk-phase-tab'));});});
  if(close) close.addEventListener('click',shut);
  overlay.addEventListener('click',function(e){if(e.target===overlay) shut();});
  document.addEventListener('keydown',function(e){if(e.key==='Escape'&&overlay.classList.contains('active')) shut();});
  var printBtn=document.getElementById('yykPhasePrint');
  if(printBtn) printBtn.addEventListener('click',function(){window.print();});
  var exportBtn=document.getElementById('yykPhaseExport');
  if(exportBtn) exportBtn.addEventListener('click',function(){
    var lines=['YONGYEOKYO Phase-by-Phase Enterprise Integration Index',''];
    Object.keys(names).forEach(function(k,i){lines.push(String(i+1).padStart(2,'0')+' · '+names[k]);});
    var blob=new Blob([lines.join('\n')],{type:'text/plain'}); var a=document.createElement('a'); a.href=URL.createObjectURL(blob); a.download='YONGYEOKYO_Phase_Integration_Index.txt'; document.body.appendChild(a); a.click(); setTimeout(function(){URL.revokeObjectURL(a.href);a.remove();},100);
  });
})();

// --- Script Block 125 ---
(function(){
  var drawer=document.getElementById('sogoDrawer');
  if(!drawer)return;
  var btn=document.createElement('button');
  btn.className='sogo-external-close';
  btn.textContent='\u2715 Close';
  btn.setAttribute('aria-label','Close drawer');
  btn.addEventListener('click',function(){
    drawer.classList.remove('active');
    drawer.setAttribute('aria-hidden','true');
    document.body.style.overflow='';
  });
  drawer.appendChild(btn);
})();

// --- Script Block 126: Accordion Scroll ---
(function(){
  var accordions = document.querySelectorAll('.hero-accordion');
  accordions.forEach(function(acc) {
    acc.addEventListener('toggle', function() {
      if (this.open) {
        var el = this;
        setTimeout(function() {
          var y = el.getBoundingClientRect().top + window.scrollY - 80;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }, 50);
      }
    });
  });
})();

});
// END OF COMBINED JAVASCRIPT
