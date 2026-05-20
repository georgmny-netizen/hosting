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
