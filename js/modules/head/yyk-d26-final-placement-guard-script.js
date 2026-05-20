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
