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
