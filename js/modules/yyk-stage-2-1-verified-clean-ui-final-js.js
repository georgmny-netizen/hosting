(function(){
  'use strict';
  function cleanVisibleOrphans(){
    var blocked=[/^\s*delivery\.?\s*$/i,/^\s*integrity\s+controls\.?\s*$/i,/^\s*engineering\s+teams\.?\s*$/i,/^\s*;?var\s+blob\s*=\s*new\s+Blob/i];
    document.querySelectorAll('body *').forEach(function(el){
      if(!el || el.children.length) return;
      var t=(el.textContent||'').trim();
      if(!t) return;
      if(blocked.some(function(re){return re.test(t);})){ el.remove(); }
    });
  }
  document.addEventListener('DOMContentLoaded', cleanVisibleOrphans);
  window.addEventListener('load', cleanVisibleOrphans);
  document.addEventListener('click', function(){ setTimeout(cleanVisibleOrphans, 30); }, true);
})();
