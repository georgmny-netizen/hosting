(function(){
  'use strict';
  var MAP={data:'dataRoomStressEngine',vdr:'vdrEngine',supply:'supplyChainEngine',legal:'yykLegalEngine',tds:'tdsFoundryEngine',pricing:'pricingEngine',partnership:'technicalPartnershipEngine',redteam:'redTeamAuditEngine',bcp:'bcpEngine',approval:'supplierApprovalEngine',exec:'vdrEngine'};
  var MODES={
    procurement:{title:'Procurement Workspace',status:'RFQ 夷?Evidence 夷?Commercial Access',context:'RFQ intake, buyer evidence, due-diligence readiness and commercial document access.',copy:'Buyer-facing workspace for RFQ intake, due-diligence evidence, commercial documents, pricing memo and supplier qualification access.',items:[['data','Data Room / Stress Test','Open audit evidence, defense questions, cost-of-failure and RMA materials.'],['vdr','Virtual Data Room','Open authorized access flow, NDA/KYC logic and VDR index.'],['supply','Supply Chain Engine','Open bonded-zone strategy, EUC defense, chain of custody and trade finance.'],['legal','Legal Engine','Open liability, RMA / quality dispute and EUC policy controls.'],['pricing','Pricing Engine','Open index-based pricing calculator, fixed price and market insights.'],['tds','TDS Foundry Engine','Open foundry-grade impurity matrix, U/Th, gas profile and SPC history.'],['partnership','Technical Partnership','Open custom trace profile, samples policy and joint lab testing.']]},
    engineering:{title:'Engineering Workspace',status:'TDS 夷?Samples 夷?Joint Lab',context:'Technical qualification, impurity controls, TDS, sample policy and joint lab alignment.',copy:'Technical qualification workspace for foundry engineers: impurity controls, custom trace profiles, round-robin testing, SPC and qualification samples.',items:[['tds','TDS Foundry Engine','Open critical impurities, radioactive isotope limits, gas profile and analytical integrity.'],['partnership','Technical Partnership','Open custom trace profile request, joint lab testing and R&D samples policy.'],['pricing','Pricing Engine','Open purity premium logic and engineering-driven cost impact.'],['data','Data Room / Stress Test','Open batch evidence, lot traceability and audit defense materials.']]},
    compliance:{title:'Compliance Workspace',status:'Legal 夷?VDR 夷?Sanctions',context:'Legal, sanctions, VDR access, supply-chain and audit readiness.',copy:'Compliance workspace for sanctions screening, EUC validation, authorized data room access, legal shield and chain-of-custody evidence.',items:[['vdr','Virtual Data Room','Open NDA/KYC access, deep audit levels and VDR inventory.'],['legal','Legal Engine','Open limitation of liability, RMA disputes and EUC policy.'],['supply','Supply Chain Engine','Open sanctions defense, bonded stock, custody and banking controls.'],['data','Data Room / Stress Test','Open audit defense and last-mile risk checks.']]}
  };
  function q(s,r){return (r||document).querySelector(s)}
  function qa(s,r){return Array.prototype.slice.call((r||document).querySelectorAll(s))}
  var FORCE_STYLE='position:fixed;top:0;left:0;width:100vw;height:100vh;z-index:999999;display:block;visibility:visible;opacity:1;pointer-events:auto;overflow:auto;background:rgba(5,5,5,.76);backdrop-filter:blur(24px);padding:28px;';
  function closeEngines(){Object.keys(MAP).forEach(function(k){var el=document.getElementById(MAP[k]); if(el){el.classList.remove('active');el.setAttribute('aria-hidden','true');el.style.cssText='';}});document.body.classList.remove('apex-modal-open');document.body.style.overflow='';}
  function openEngine(key){var id=MAP[key], el=id&&document.getElementById(id); if(!el){console.warn('Engine not found:',key,id);return false;} window._yykScrollPos=window.scrollY; closeEngines(); if(el.parentNode!==document.body){document.body.appendChild(el);} el.classList.add('active'); el.setAttribute('aria-hidden','false'); el.style.cssText=FORCE_STYLE; document.body.classList.add('apex-modal-open'); document.body.style.overflow='hidden'; return true;}
  function makeButton(item,cls){var b=document.createElement('button'); b.type='button'; b.className=cls||'yyk-control-action'; b.setAttribute('data-open-engine',item[0]); b.textContent=item[1]; return b;}
  function render(mode){console.log('ROUTER RENDER', mode);var m=MODES[mode]||MODES.procurement; qa('#yykAuditControlPanel .yyk-mode-btn').forEach(function(b){b.classList.toggle('active',b.getAttribute('data-yyk-mode')===mode)}); var title=q('#yykAuditModeTitle'); if(title)title.textContent=m.title; var ctx=q('#yykAuditModeContext'); if(ctx)ctx.textContent=m.context; var wt=q('#yykAuditWorkTitle'); if(wt)wt.textContent=m.title; var ws=q('#yykAuditWorkStatus'); if(ws)ws.textContent=m.status; var wc=q('#yykAuditWorkCopy'); if(wc)wc.textContent=m.copy; var actions=q('#yykAuditControlActions'); if(actions){actions.innerHTML='';m.items.forEach(function(item,i){var b=makeButton(item,'yyk-control-action'+(i===0?' active':''));actions.appendChild(b);});} var cards=q('#yykAuditModeCards'); if(cards){cards.innerHTML='';m.items.forEach(function(item){var c=document.createElement('article');c.className='yyk-mode-card';c.innerHTML='<h3></h3><p></p>';c.querySelector('h3').textContent=item[1];c.querySelector('p').textContent=item[2];c.appendChild(makeButton(item,''));cards.appendChild(c);});} window.YYK_ACTIVE_MODE=mode;}
  function removeGhostPanels(){qa('.yyk-control-panel:not(#yykAuditControlPanel), .yyk-mode-workspace:not(#yykAuditModeWorkspace), [class*="left-dock"], [class*="engine-dock"], [class*="tier1-dock"]').forEach(function(el){el.remove();});}
  /* ── CLOSE MAP: close button ID → engine element ID ── */
  var CLOSE_MAP={
    closeLegalEngine:'yykLegalEngine',
    closeRedTeamAudit:'redTeamAuditEngine',
    closeDataRoomStress:'dataRoomStressEngine',
    closeTdsFoundryEngine:'tdsFoundryEngine',
    closeSupplyChainEngine:'supplyChainEngine',
    closeVdrEngine:'vdrEngine',
    closeApprovalEngine:'supplierApprovalEngine',
    closePricingEngine:'pricingEngine',
    closeTechnicalPartnershipEngine:'technicalPartnershipEngine',
    closeBcpEngine:'bcpEngine'
  };

  /* ── Universal click handler (capture phase) ── */
  document.addEventListener('click',function(e){
    /* 1. Mode switch buttons */
    var mb=e.target.closest('#yykAuditControlPanel .yyk-mode-btn');
    if(mb){e.preventDefault();render(mb.getAttribute('data-yyk-mode')||'procurement');return;}

    /* 2. Open engine buttons */
    var ob=e.target.closest('[data-open-engine]');
    if(ob){e.preventDefault();openEngine(ob.getAttribute('data-open-engine'));return;}

    /* 3. Close engine buttons (by ID) */
    var cb=e.target.closest('[id^="close"]');
    if(cb && CLOSE_MAP[cb.id]){
      e.preventDefault();
      closeEngines();
      return;
    }

    /* 4. Close buttons by class (generic close selectors) */
    var gc=e.target.closest('.yyk-vdr-close,.yyk-legal-close,.yyk-supply-close,.yyk-tds-close,.yyk-pricing-close,.yyk-partnership-close,.yyk-approval-close,.bcp-close,.rt-close,.yyk-dr-close');
    if(gc){e.preventDefault();closeEngines();return;}

    /* 5. Backdrop click — close engine if clicking the dark overlay directly */
    var eng=e.target.closest('.yyk-vdr-engine,.yyk-legal-engine,.yyk-supply-engine,.yyk-data-room-engine,.yyk-tds-engine,.yyk-pricing-engine,.yyk-partnership-engine,.yyk-approval-engine,.yyk-bcp-engine,.red-team-engine');
    if(eng && e.target===eng){e.preventDefault();closeEngines();return;}
  },true);

  /* ── Escape key to close any open engine ── */
  document.addEventListener('keydown',function(e){
    if(e.key==='Escape'){closeEngines();}
  });

  function init(){console.log('ROUTER INIT CALLED');removeGhostPanels(); render('procurement');}
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();
