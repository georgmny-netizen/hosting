document.addEventListener("DOMContentLoaded", function(){
  const esgPanel = document.getElementById("yyk-esg-compliance-panel");
  if(!esgPanel) return;

  function isEsgTrigger(el){
    const txt = (el.textContent || "").trim().toLowerCase();
    const attrs = [
      el.getAttribute("data-target"),
      el.getAttribute("data-tab"),
      el.getAttribute("href"),
      el.getAttribute("onclick"),
      el.id,
      el.className
    ].join(" ").toLowerCase();
    return txt === "esg" || txt.includes("esg") || attrs.includes("esg");
  }

  const triggers = Array.from(document.querySelectorAll("button, a, .compliance-tab, [data-target], [data-tab]")).filter(isEsgTrigger);

  triggers.forEach(function(trigger){
    trigger.addEventListener("click", function(){
      setTimeout(function(){
        const engine = document.querySelector(".compliance-engine.active, #complianceEngine, .compliance-engine");
        if(engine && !engine.contains(esgPanel)){
          const content = engine.querySelector(".compliance-content, .compliance-body, .compliance-shell") || engine;
          content.appendChild(esgPanel);
        }
        esgPanel.classList.add("active");
        esgPanel.style.display = "block";
      }, 40);
    }, true);
  });
});
