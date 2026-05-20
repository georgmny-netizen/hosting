(function(){
  function init(){
    var map = document.getElementById("yykFooterLogisticsMap");
    if(!map) return;

    var groups = Array.prototype.slice.call(map.querySelectorAll(".route-group"));
    var ports = Array.prototype.slice.call(map.querySelectorAll(".port-node"));

    var routeMap = {
      "Malaysia": ["malaysia-busan"],
      "Busan": ["malaysia-busan","busan-yokohama","busan-shanghai","busan-kaohsiung","busan-niigata","busan-hongkong","busan-qingdao","busan-tianjin"],
      "Yokohama": ["busan-yokohama"],
      "Shanghai": ["busan-shanghai"],
      "Kaohsiung": ["busan-kaohsiung"],
      "Incheon": ["incheon-yokohama","incheon-shanghai","incheon-kaohsiung","incheon-niigata","incheon-hongkong","incheon-qingdao","incheon-tianjin"],
      "Niigata": ["busan-niigata"],
      "HongKong": ["busan-hongkong"],
      "Qingdao": ["busan-qingdao"],
      "Tianjin": ["busan-tianjin"]
    };

    function clearRoutes(){
      groups.forEach(function(g){ g.classList.remove("is-active","is-dim"); });
      ports.forEach(function(p){ p.classList.remove("is-route-active"); });
    }

    function focusPort(port){
      var name = port.getAttribute("data-port");
      var active = routeMap[name] || [];
      groups.forEach(function(g){
        var route = g.getAttribute("data-route");
        if(active.indexOf(route) !== -1){
          g.classList.add("is-active");
          g.classList.remove("is-dim");
        } else {
          g.classList.add("is-dim");
          g.classList.remove("is-active");
        }
      });
      port.classList.add("is-route-active");
    }

    ports.forEach(function(port){
      port.addEventListener("mouseenter", function(){ focusPort(port); });
      port.addEventListener("mouseleave", clearRoutes);
      port.addEventListener("focusin", function(){ focusPort(port); });
      port.addEventListener("focusout", clearRoutes);
      port.addEventListener("click", function(e){
        e.stopPropagation();
        ports.forEach(function(p){ if(p !== port) p.classList.remove("is-open"); });
        port.classList.toggle("is-open");
        focusPort(port);
      });
    });

    document.addEventListener("click", function(){
      ports.forEach(function(p){ p.classList.remove("is-open"); });
      clearRoutes();
    });
  }

  if(document.readyState === "loading"){
    document.addEventListener("DOMContentLoaded", init, {once:true});
  } else {
    init();
  }
})();
