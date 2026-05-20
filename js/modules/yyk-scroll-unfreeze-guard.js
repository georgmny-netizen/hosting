(function(){
  "use strict";
  function unlock(){
    document.body.classList.remove("apex-modal-open");
    document.body.style.overflow="";
    document.documentElement.style.overflow="";
  }
  document.addEventListener("click",function(e){
    var b=e.target&&e.target.closest?e.target.closest("#productEngine [data-pp-add-rfq],#productEngine .product-actions button"):null;
    if(!b)return;
    setTimeout(unlock,0);
    setTimeout(unlock,120);
    setTimeout(unlock,350);
  },true);
  document.addEventListener("keydown",function(e){if(e.key==="Escape")setTimeout(unlock,0);},true);
  window.YYK_FORCE_UNLOCK_SCROLL=unlock;
})();
