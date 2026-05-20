(function(){
  function init(){
    var map=document.getElementById("yykFooterLogisticsMap");
    if(!map) return;
    var groups=[].slice.call(map.querySelectorAll(".route-group"));
    var ports=[].slice.call(map.querySelectorAll(".port-node"));
    var routeMap={
      "MALAYSIA":["malaysia-busan"],
      "BUSAN":["malaysia-busan","busan-yokohama","busan-shanghai","busan-kaohsiung","busan-niigata","busan-hongkong","busan-qingdao","busan-tianjin"],
      "YOKOHAMA":["busan-yokohama"],
      "SHANGHAI":["busan-shanghai"],
      "KAOHSIUNG":["busan-kaohsiung"],
      "INCHEON":["incheon-yokohama","incheon-shanghai","incheon-kaohsiung","incheon-niigata","incheon-hongkong","incheon-qingdao","incheon-tianjin"],
      "NIIGATA":["busan-niigata"],
      "HONGKONG":["busan-hongkong"],
      "QINGDAO":["busan-qingdao"],
      "TIANJIN":["busan-tianjin"]
    };
    function clear(){
      groups.forEach(function(g){g.classList.remove("is-active","is-dim")});
      ports.forEach(function(p){p.classList.remove("is-active")});
    }
    ports.forEach(function(port){
      var label=(port.getAttribute("data-port")||"").toUpperCase();
      port.addEventListener("mouseenter",function(){
        var active=routeMap[label]||[];
        groups.forEach(function(g){
          if(active.indexOf(g.getAttribute("data-route"))>=0){g.classList.add("is-active");g.classList.remove("is-dim")}
          else{g.classList.add("is-dim");g.classList.remove("is-active")}
        });
        port.classList.add("is-active");
      });
      port.addEventListener("mouseleave",clear);
    });
  }
  if(document.readyState==="loading"){document.addEventListener("DOMContentLoaded",init,{once:true})}else{init()}
})();
