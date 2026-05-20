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
    if(chev) chev.textContent=open?'▲':'▼';
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
