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
