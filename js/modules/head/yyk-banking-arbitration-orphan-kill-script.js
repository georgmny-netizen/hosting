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
