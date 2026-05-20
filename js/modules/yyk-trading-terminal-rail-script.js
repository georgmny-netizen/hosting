(function(){
  'use strict';
  var PRIORITY = {
    'Data Room / Stress Test': true,
    'Virtual Data Room': true,
    'Supply Chain Engine': true,
    'Legal Engine': true
  };
  function q(s){return document.querySelector(s)}
  function txt(el){return (el.textContent||'').replace(/\s+/g,' ').trim()}
  function flattenRail(){
    var box=q('#yykAuditControlActions');
    if(!box || box.getAttribute('data-terminal-rail-lock')==='1') return;
    box.setAttribute('data-terminal-rail-lock','1');
    var nested=Array.prototype.slice.call(box.querySelectorAll('.yyk-priority-buttons > .yyk-control-action, .yyk-priority-row .yyk-control-action'));
    if(nested.length){
      box.innerHTML='';
      nested.forEach(function(btn){box.appendChild(btn)});
    }
    Array.prototype.slice.call(box.querySelectorAll('.yyk-priority-row,.yyk-priority-label,.yyk-priority-buttons')).forEach(function(el){el.remove()});
    Array.prototype.slice.call(box.querySelectorAll('.yyk-control-action')).forEach(function(btn){
      btn.setAttribute('data-terminal-priority', PRIORITY[txt(btn)] ? '1' : '2');
      btn.setAttribute('draggable','false');
    });
    box.classList.remove('yyk-priority-ready');
    box.classList.add('yyk-terminal-rail-ready');
    box.removeAttribute('data-terminal-rail-lock');
  }
  function install(){
    flattenRail();
    var box=q('#yykAuditControlActions');
    if(box && !box.__yykTerminalRailObserver){
      var obs=new MutationObserver(function(){setTimeout(flattenRail,0)});
      obs.observe(box,{childList:true,subtree:true});
      box.__yykTerminalRailObserver=obs;
    }
    document.addEventListener('click',function(e){
      if(e.target && e.target.closest && e.target.closest('#yykAuditControlPanel .yyk-mode-btn')){
        setTimeout(flattenRail,0);
      }
    },true);
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',install); else install();
})();
