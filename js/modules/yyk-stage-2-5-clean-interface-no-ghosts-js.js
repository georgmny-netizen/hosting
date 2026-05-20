(function(){
  'use strict';
  var ghostPatterns=[
    /^\s*integrity\s+controls\s*$/i,
    /^\s*delivery\s*$/i,
    /^\s*;?var\s+blob\s*=\s*new\s+Blob/i,
    /YONGYEOKYO_Preliminary_Supplier_Qualification_Report\.html/i
  ];
  function isInsideAllowedCode(node){
    var el=node.parentElement;
    while(el){
      var tag=(el.tagName||'').toLowerCase();
      if(tag==='script'||tag==='style'||tag==='pre'||tag==='code'||tag==='textarea') return true;
      el=el.parentElement;
    }
    return false;
  }
  function cleanGhostText(root){
    if(!root||!document.body) return;
    var walker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT,{acceptNode:function(node){
      if(isInsideAllowedCode(node)) return NodeFilter.FILTER_REJECT;
      var t=node.nodeValue||'';
      if(!t.trim()) return NodeFilter.FILTER_REJECT;
      return ghostPatterns.some(function(rx){return rx.test(t.trim());})?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT;
    }});
    var targets=[];
    while(walker.nextNode()) targets.push(walker.currentNode);
    targets.forEach(function(node){
      var p=node.parentElement;
      if(p){
        p.classList.add('yyk-ghost-text');
        p.setAttribute('aria-hidden','true');
      }else{
        node.nodeValue='';
      }
    });
  }
  function normalizeActionTitles(){
    document.querySelectorAll('button,a,[role="button"],.micro-btn,.nav-link,.sogo-primary-cta').forEach(function(el){
      ['data-label','data-tooltip','data-title','data-hover','data-hint'].forEach(function(attr){
        if(el.hasAttribute(attr)) el.removeAttribute(attr);
      });
    });
  }
  function run(){cleanGhostText(document.body);normalizeActionTitles();}
  if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',run,{once:true});}else{run();}
  var mo=new MutationObserver(function(muts){
    var need=false;
    muts.forEach(function(m){if(m.addedNodes&&m.addedNodes.length) need=true;});
    if(need) window.requestAnimationFrame(run);
  });
  if(document.body) mo.observe(document.body,{childList:true,subtree:true});
})();
