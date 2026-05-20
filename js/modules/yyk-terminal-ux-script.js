document.addEventListener("DOMContentLoaded", function(){
  const terminalButtons = document.querySelectorAll(".yyk-terminal-btn");
  const terminalPanels = document.querySelectorAll(".yyk-terminal-panel");
  terminalButtons.forEach(function(btn){
    btn.addEventListener("click", function(){
      const target = btn.getAttribute("data-terminal-target");
      terminalButtons.forEach(function(b){ b.classList.remove("active"); });
      terminalPanels.forEach(function(p){ p.classList.remove("active"); });
      btn.classList.add("active");
      const panel = document.getElementById(target);
      if(panel){ panel.classList.add("active"); }
    });
  });

  const clock = document.getElementById("yykTerminalClock");
  if(clock){
    const stamp = new Date().toISOString().slice(0,10);
    clock.textContent = "LIVE · CONTRACT DESK · " + stamp;
  }
});
