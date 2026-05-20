(function(){
  function init(){
    var map=document.getElementById("yykFooterLogisticsMap");
    if(!map) return;
    var ports=[].slice.call(map.querySelectorAll(".port-node"));
    ports.forEach(function(port){
      port.addEventListener("click",function(e){
        e.stopPropagation();
        ports.forEach(function(p){ if(p!==port) p.classList.remove("is-open"); });
        port.classList.toggle("is-open");
      });
    });
    document.addEventListener("click",function(){ ports.forEach(function(p){p.classList.remove("is-open");}); });
  }
  if(document.readyState==="loading"){document.addEventListener("DOMContentLoaded",init,{once:true});}else{init();}
})();
