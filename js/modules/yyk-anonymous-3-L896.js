document.addEventListener("DOMContentLoaded", function(){

  const tabs = document.querySelectorAll(".spec-tab");
  const panels = document.querySelectorAll(".spec-panel");

  if(!tabs.length || !panels.length) return;

  tabs.forEach((tab, index)=>{
    tab.addEventListener("click", function(){

      tabs.forEach(t=>t.classList.remove("active"));
      panels.forEach(p=>p.classList.remove("active"));

      tab.classList.add("active");

      // match by index (SAFE, no html dependency)
      if(panels[index]){
        panels[index].classList.add("active");
      }
    });
  });

  // init first
  tabs[0].click();

});
