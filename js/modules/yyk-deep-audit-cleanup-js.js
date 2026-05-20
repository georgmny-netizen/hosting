(function(){
  function cleanupPortFrames(){
    var map=document.getElementById("yykFooterLogisticsMap");
    if(!map) return;
    map.querySelectorAll(".port-node").forEach(function(port){
      port.removeAttribute("tabindex");
      port.removeAttribute("focusable");
      port.classList.remove("is-active","is-route-active","is-intel-active");
      port.addEventListener("mousedown",function(e){ e.preventDefault(); });
      port.addEventListener("click",function(){
        setTimeout(function(){
          port.classList.remove("is-active","is-route-active","is-intel-active");
          if(document.activeElement && document.activeElement.blur) document.activeElement.blur();
        },0);
      });
    });
  }
  if(document.readyState==="loading"){
    document.addEventListener("DOMContentLoaded",cleanupPortFrames,{once:true});
  }else{
    cleanupPortFrames();
  }
})();
