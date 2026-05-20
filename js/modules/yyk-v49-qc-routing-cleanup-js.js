(function(){
  function byId(id){return document.getElementById(id)}
  function openQcLab(){
    var contact=byId('contactEngine');
    if(contact){contact.classList.remove('active'); contact.setAttribute('aria-hidden','true');}
    var engine=byId('productEngine');
    if(!engine) return false;
    engine.classList.add('active');
    engine.setAttribute('aria-hidden','false');
    document.body.classList.add('apex-modal-open');
    document.body.style.overflow='hidden';
    var tabs=engine.querySelectorAll('.product-tab[data-product-tab]');
    var panels=engine.querySelectorAll('.product-panel[data-product-panel]');
    tabs.forEach(function(tab){
      var on=tab.getAttribute('data-product-tab')==='quality';
      tab.classList.toggle('active',on);
      tab.setAttribute('aria-selected',on?'true':'false');
    });
    panels.forEach(function(panel){
      var on=panel.getAttribute('data-product-panel')==='quality';
      panel.classList.toggle('active',on);
      panel.hidden=!on;
      panel.setAttribute('aria-hidden',on?'false':'true');
      panel.style.display=on?'block':'none';
    });
    if(window.YYK_AuditLog && typeof window.YYK_AuditLog.push==='function'){
      window.YYK_AuditLog.push('QC Lab Quality Chain opened from footer technical consultation');
    }
    return true;
  }
  document.addEventListener('click',function(e){
    var btn=e.target.closest && e.target.closest('.yyk-qc-lab-btn, [data-qc-lab-open]');
    if(!btn) return;
    e.preventDefault();
    e.stopPropagation();
    if(e.stopImmediatePropagation) e.stopImmediatePropagation();
    openQcLab();
  },true);
})();
