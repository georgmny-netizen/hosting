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
