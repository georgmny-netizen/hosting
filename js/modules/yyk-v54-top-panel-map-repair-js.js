(function(){
  function q(s){return document.querySelector(s)}
  function repairTopPanel(){
    var panel=q('#yykAuditControlPanel');
    if(!panel) return;
    panel.classList.add('yyk-v54-top-stable');
    var wrap=panel.querySelector('.yyk-audit-wrap');
    var top=panel.querySelector('.yyk-audit-top');
    var modes=panel.querySelector('.yyk-audit-modes');
    var actions=panel.querySelector('.yyk-control-actions');
    if(wrap){wrap.style.removeProperty('left');wrap.style.removeProperty('transform')}
    if(top){top.style.removeProperty('justify-content')}
    if(modes){modes.style.removeProperty('margin-left')}
    if(actions){actions.style.removeProperty('margin-left');actions.style.removeProperty('justify-content')}
  }
  function placeInteractiveMap(){
    var desk=q('#yykApacInteractiveDesk');
    var legacy=q('#yykFooterLogisticsMap');
    if(!desk) return;
    desk.classList.add('yyk-v54-map-primary');
    if(legacy){
      if(desk.parentNode!==legacy.parentNode || desk.nextElementSibling!==legacy){legacy.parentNode.insertBefore(desk, legacy)}
      legacy.classList.add('yyk-v54-legacy-hidden');
    }
    var firstPort=desk.querySelector('.yyk-port[data-port="kuantan"]');
    if(firstPort && !desk.hasAttribute('data-v54-selected')){firstPort.click();desk.setAttribute('data-v54-selected','kuantan')}
  }
  function init(){repairTopPanel();placeInteractiveMap();setTimeout(function(){repairTopPanel();placeInteractiveMap()},250);setTimeout(function(){repairTopPanel();placeInteractiveMap()},900)}
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});else init();
})();
