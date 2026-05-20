(function(){
  function cleanTrustControl(){
    var panel=Array.prototype.slice.call(document.querySelectorAll('.trust-control-panel')).filter(function(el){return (el.textContent||'').indexOf('Trust Control Status')!==-1;})[0];
    if(!panel) return;
    var grid=panel.querySelector('.trust-control-grid,.status-grid');
    if(!grid) return;
    var cards=[['SCSP','Active','scsp'],['Elements','70+ Trace Analysis','elements'],['RFQ','Structured Only','rfq'],['ESG','Risk-Based Due Diligence','esg']];
    grid.innerHTML=cards.map(function(c){return '<div class="metric trust-control-card" data-trust-control="'+c[2]+'"><div class="k">'+c[0]+'</div><div class="v">'+c[1]+'</div></div>';}).join('');
    if(window.YYK_TRUST_CONTROL&&typeof window.YYK_TRUST_CONTROL.apply==='function'){try{window.YYK_TRUST_CONTROL.apply((window.YYK_TRUST_CONTROL.getState&&window.YYK_TRUST_CONTROL.getState()&&window.YYK_TRUST_CONTROL.getState().mode)||'scsp');}catch(e){}}
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',cleanTrustControl,{once:true});else cleanTrustControl();
  window.YYK_CLEAN_TRUST_CONTROL=cleanTrustControl;
})();
