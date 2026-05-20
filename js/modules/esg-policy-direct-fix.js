(function(){
  function openEsgPolicy(){
    if(typeof window.apexOpenCompliance === "function"){
      window.apexOpenCompliance("esg");
      return;
    }
    if(typeof window.openCompliance === "function"){
      window.openCompliance("esg");
      return;
    }
    var engine = document.getElementById("complianceEngine");
    if(engine){
      engine.classList.add("active");
      engine.setAttribute("aria-hidden","false");
      document.body.classList.add("overlay-open");
    }
    document.querySelectorAll(".compliance-tab").forEach(function(tab){
      tab.classList.toggle("active", tab.getAttribute("data-compliance-tab")==="esg");
    });
    document.querySelectorAll(".compliance-panel").forEach(function(panel){
      panel.classList.toggle("active", panel.getAttribute("data-compliance-panel")==="esg");
    });
  }
  document.addEventListener("click", function(e){
    var btn = e.target.closest("#openEsgPolicyDirect");
    if(!btn) return;
    e.preventDefault();
    e.stopPropagation();
    openEsgPolicy();
  }, true);
})();
