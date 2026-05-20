(function(){
  function closeDeepLayer(from){
    var root = from && from.closest ? from.closest('.compliance-engine,.product-engine,.contact-engine,.sogo-drawer,.yyk-vdr-engine,.modal,.esg-deep-layer') : null;
    if(!root) return;
    root.classList.remove('active');
    root.setAttribute('aria-hidden','true');
    document.body.classList.remove('apex-modal-open');
    var home = document.querySelector('main, .hero, header');
    if(home && home.scrollIntoView){ home.scrollIntoView({behavior:'smooth', block:'start'}); }
  }
  function addReturnControl(container, label){
    if(!container || container.querySelector('.yyk-return-site-control')) return;
    var bar=document.createElement('div');
    bar.className='yyk-return-site-control';
    bar.setAttribute('role','navigation');
    bar.setAttribute('aria-label','Return to main site');
    bar.innerHTML='<div><strong>'+label+'</strong><br><span>You are inside a deep working view. Use this control to return to the main site.</span></div><button type="button" class="yyk-return-site-btn" data-yyk-return-site>&larr; Back to main site</button>';
    container.insertBefore(bar, container.firstChild);
  }
  function initReturnControls(){
    addReturnControl(document.querySelector('.compliance-shell'),'Compliance workspace');
    addReturnControl(document.querySelector('.product-shell'),'Engineering workspace');
    addReturnControl(document.querySelector('.sogo-panel'),'Procurement workspace');
    addReturnControl(document.querySelector('.yyk-vdr-shell'),'Virtual Data Room');
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',initReturnControls); else initReturnControls();
  document.addEventListener('click',function(e){
    var btn=e.target.closest('[data-yyk-return-site]');
    if(btn){ closeDeepLayer(btn); }
  });
})();
