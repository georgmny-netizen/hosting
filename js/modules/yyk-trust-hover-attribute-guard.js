(function(){
  function enhance(){
    var panels=document.querySelectorAll('.trust-control-panel');
    var panel=null;
    for(var i=0;i<panels.length;i++){if((panels[i].textContent||'').indexOf('Trust Control Status')!==-1){panel=panels[i];break;}}
    if(!panel)return;
    var map={SCSP:'scsp',Elements:'elements',RFQ:'rfq',ESG:'esg'};
    var cards=panel.querySelectorAll('.trust-control-card');
    for(var j=0;j<cards.length;j++){
      var card=cards[j], k=card.querySelector('.k');
      var mode=card.getAttribute('data-trust-control') || (k && map[(k.textContent||'').trim()]);
      if(!mode)continue;
      card.setAttribute('data-trust-control',mode);
      card.setAttribute('role','button');
      card.setAttribute('tabindex','0');
      card.setAttribute('aria-pressed','false');card.classList.remove('active','selected','is-active');
    }
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',enhance);else enhance();
  setTimeout(enhance,60);
  setTimeout(enhance,4000);
})();
