(function(){
  function init(){
    var btn=document.querySelector('.yyk-integrity-toggle');
    var panel=document.getElementById('yykFooterIntegrityPanel');
    if(!btn||!panel) return;
    btn.addEventListener('click',function(){
      var open=panel.hasAttribute('hidden');
      if(open){panel.removeAttribute('hidden');btn.setAttribute('aria-expanded','true');}
      else{panel.setAttribute('hidden','');btn.setAttribute('aria-expanded','false');}
    });
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();
