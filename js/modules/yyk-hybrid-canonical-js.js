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
