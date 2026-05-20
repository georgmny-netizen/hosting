(function(){
  function apply(){
    document.querySelectorAll('#yyk-terminal-ux .yyk-terminal-action').forEach(function(btn,index){
      if(!btn.getAttribute('role')) btn.setAttribute('role','button');
      if(!btn.getAttribute('tabindex')) btn.setAttribute('tabindex','0');
      if(!btn.getAttribute('data-terminal-action')){
        btn.setAttribute('data-terminal-action', index===0?'coa':(index===1?'sample':'rfq'));
      }
      btn.setAttribute('aria-label', btn.textContent.trim());
    });
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',apply); else apply();
  document.addEventListener('click',function(e){
    if(e.target && e.target.closest && e.target.closest('#yyk-terminal-ux .yyk-terminal-btn[data-terminal-target]')) setTimeout(apply,0);
  },true);
})();
