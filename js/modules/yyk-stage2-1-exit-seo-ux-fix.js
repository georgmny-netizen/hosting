(function(){
  'use strict';
  var MODAL_SELECTORS=['.modal','.compliance-engine','.product-engine','.contact-engine','.esg-deep-layer','.sogo-drawer','#vdrEngine'];
  function qs(sel,root){return Array.prototype.slice.call((root||document).querySelectorAll(sel));}
  function isEngine(el){return el && MODAL_SELECTORS.some(function(s){return el.matches && el.matches(s);});}
  function closeEngine(el){
    if(!el)return;
    el.classList.remove('active');
    el.setAttribute('aria-hidden','true');
    document.body.classList.remove('apex-modal-open');
  }
  function addExitBars(){
    qs(MODAL_SELECTORS.join(',')).forEach(function(engine){
      if(engine.querySelector('.yyk-stage-exitbar'))return;
      var target=engine.querySelector('.compliance-content,.product-content,.contact-content,.esg-layer-content,.modal-box,.sogo-body,.yyk-vdr-content,.vdr-content') || engine.querySelector('[class*="content"]') || engine;
      var bar=document.createElement('div');
      bar.className='yyk-stage-exitbar';
      bar.setAttribute('role','navigation');
      bar.setAttribute('aria-label','Exit from current data layer');
      bar.innerHTML='<button type="button" class="yyk-stage-close-btn">&#x2715; Close</button>';
      if(target.classList&&target.classList.contains("sogo-body")){target.prepend(bar);}else{target.appendChild(bar);}
      bar.querySelector('.yyk-stage-close-btn').addEventListener('click',function(){closeEngine(engine);});
    // Top button removed
    });
  }
  function hardenLinks(){
    qs('a[target="_blank"]').forEach(function(a){a.setAttribute('rel','noopener noreferrer');});
  }
  function enhanceMeta(){
    if(!document.querySelector('meta[name="robots"]')){var m=document.createElement('meta');m.name='robots';m.content='index,follow,max-image-preview:large';document.head.appendChild(m);}
  }
  function init(){addExitBars();hardenLinks();enhanceMeta();}
  if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',init,{once:true});}else{init();}
  document.addEventListener('keydown',function(e){
    if(e.key!=='Escape')return;
    qs(MODAL_SELECTORS.join(',')).forEach(function(el){if(el.classList.contains('active'))closeEngine(el);});
  });
})();
