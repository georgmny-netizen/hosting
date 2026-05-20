(function(){
  function init(){
    var map=document.getElementById("yykFooterLogisticsMap");
    if(!map) return;
    var panel=map.querySelector(".route-status-panel");

    var qc = {
      "Malaysia": {mode:"ORIGIN VERIFIED", batch:"SEALED LOT", trace:"TRACKED", lot:"EXPORT READY"},
      "Busan": {mode:"QC VERIFIED", batch:"CONTROLLED", trace:"CHAIN SEALED", lot:"BUSAN REVIEW"},
      "Yokohama": {mode:"DOCS VERIFIED", batch:"CONTROLLED", trace:"LOT MATCHED", lot:"JP RECEIVING"},
      "Shanghai": {mode:"COMPLIANCE REVIEWED", batch:"CONTROLLED", trace:"LOT MATCHED", lot:"CN RECEIVING"},
      "Kaohsiung": {mode:"TRACE VERIFIED", batch:"CONTROLLED", trace:"LOT MATCHED", lot:"TW RECEIVING"}
    };

    function setPrecisionPanel(name, locked){
      if(!panel || !qc[name]) return;
      panel.classList.add("is-verified");
      var rows=panel.querySelectorAll(".route-status-row");
      if(rows[0]){ rows[0].firstElementChild.textContent="QC STATUS"; rows[0].lastElementChild.textContent=locked ? "ROUTE LOCKED" : qc[name].mode; }
      if(rows[1]){ rows[1].firstElementChild.textContent="BATCH FLOW"; rows[1].lastElementChild.textContent=qc[name].batch; }
      if(rows[2]){ rows[2].firstElementChild.textContent="TRACEABILITY"; rows[2].lastElementChild.textContent=qc[name].trace; }
      if(rows[3]){ rows[3].firstElementChild.textContent="LOT CONTROL"; rows[3].lastElementChild.textContent=qc[name].lot; }
      var title=panel.querySelector(".title");
      if(title) title.innerHTML='<i class="route-status-dot"></i> LIVE APAC LOGISTICS';
    }

    map.querySelectorAll(".port-node").forEach(function(port){
      var name=port.getAttribute("data-port");
      port.addEventListener("mouseenter",function(){ setPrecisionPanel(name,false); });
      port.addEventListener("click",function(){ setPrecisionPanel(name,true); });
    });
  }
  if(document.readyState==="loading"){document.addEventListener("DOMContentLoaded",init,{once:true})}else{init()}
})();
