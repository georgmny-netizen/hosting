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
    
    var exec=q('#yykAuditExecutiveBtn') || q('#yykAuditControlPanel .yyk-executive-primary-btn') || q('#yykAuditControlPanel .yyk-v32-exec-btn');
    if(!exec){
      exec=document.createElement('button');
      exec.id="yykAuditExecutiveBtn";
      exec.type='button';
      exec.textContent='Executive Overview';
    }
    exec.className='yyk-v32-exec-btn';
    exec.setAttribute('aria-label','Open Executive Decision Layer');
    if(typeof attachIntel==='function') attachIntel(exec);
    if(exec.parentNode!==rail) rail.insertBefore(exec, rail.firstChild);
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
