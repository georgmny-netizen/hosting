(function(){
  "use strict";
  var REE_VALUE = "Rare Earth Materials · REE";
  function byId(id){ return document.getElementById(id); }
  function ensureOption(select, value){
    if(!select) return;
    var exists = false;
    Array.prototype.forEach.call(select.options, function(opt){
      if(opt.value === value || opt.textContent === value){ exists = true; }
    });
    if(!exists){
      var option = document.createElement("option");
      option.value = value;
      option.textContent = value;
      select.appendChild(option);
    }
  }
  function setValue(id, value){
    var el = byId(id);
    if(!el) return;
    if(el.tagName === "SELECT") ensureOption(el, value);
    el.value = value;
    el.dispatchEvent(new Event("input", {bubbles:true}));
    el.dispatchEvent(new Event("change", {bubbles:true}));
  }
  function closeLanthanexLoops(){
    Array.prototype.forEach.call(document.querySelectorAll(".lanthanex-engine,.lanthanex-engine.active"), function(el){
      el.classList.remove("active");
      el.setAttribute("aria-hidden", "true");
    });
    document.body.classList.remove("apex-modal-open");
    document.body.style.overflow = "";
  }
  window.YYK_LANTHANEX_TO_RFQ = function(){
    closeLanthanexLoops();
    setValue("rfqMaterial", REE_VALUE);
    setValue("rfqForm", "Oxide / Salt");
    setValue("rfqPurity", "Custom grades available");
    setValue("rfqApp", "Semiconductor & Energy applications");
    var rfq = byId("rfq");
    if(rfq) rfq.scrollIntoView({behavior:"smooth", block:"start"});
    try { if(typeof window.updateRFQ === "function") window.updateRFQ(); } catch(err) {}
  };
  document.addEventListener("click", function(event){
    var target = event.target && event.target.closest ? event.target.closest("[data-open-lanthanex],[data-lanthanex-rfq]") : null;
    if(!target) return;
    event.preventDefault();
    event.stopImmediatePropagation();
    window.YYK_LANTHANEX_TO_RFQ();
  }, true);
})();
