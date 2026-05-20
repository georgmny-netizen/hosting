(function(){
  document.addEventListener("click", function(e){
    var btn = e.target.closest("#safeEsgPolicyAction button");
    if(!btn) return;
    if(typeof window.apexOpenCompliance === "function"){
      e.preventDefault();
      window.apexOpenCompliance("esg");
      return;
    }
    if(typeof window.openCompliance === "function"){
      e.preventDefault();
      window.openCompliance("esg");
      return;
    }
    var tab = document.querySelector('[data-compliance-tab="esg"]');
    var engine = document.getElementById("complianceEngine");
    if(tab && engine){
      e.preventDefault();
      engine.classList.add("active");
      tab.click();
    }
  });
})();
