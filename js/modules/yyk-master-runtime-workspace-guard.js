/*!
 * YONGYEOKYO Master Runtime Workspace Guard
 * Purpose: team-safe runtime stabilization without changing approved layout/architecture.
 */
(function(){
  "use strict";

  var YYK = window.YYK_MASTER_RUNTIME = window.YYK_MASTER_RUNTIME || {};
  YYK.version = "review-workspace-base-1.0.0";

  function $(selector, root){ return (root || document).querySelector(selector); }
  function $all(selector, root){ return Array.prototype.slice.call((root || document).querySelectorAll(selector)); }

  YYK.safeStorage = {
    get: function(key, fallback){
      try {
        var value = localStorage.getItem(key);
        return value === null ? fallback : value;
      } catch(err) {
        return fallback;
      }
    },
    set: function(key, value){
      try {
        localStorage.setItem(key, value);
        return true;
      } catch(err) {
        YYK.memoryStorage = YYK.memoryStorage || {};
        YYK.memoryStorage[key] = value;
        return false;
      }
    }
  };

  YYK.unlockScroll = function(){
    document.documentElement.style.overflow = "";
    document.body.style.overflow = "";
    document.body.classList.remove("apex-modal-open","modal-open","locked","no-scroll");
  };

  YYK.closeActiveLayers = function(){
    $all(".modal.active,.compliance-engine.active,.product-engine.active,.contact-engine.active,.esg-deep-layer.active,.sogo-drawer.active").forEach(function(el){
      el.classList.remove("active");
    });
    YYK.unlockScroll();
  };

  YYK.refreshRFQ = function(){
    ["input","change"].forEach(function(type){
      $all(".rfq-field,.rfq-auto-field,#rfqMaterial,#rfqForm,#rfqPurity,#rfqQty,#rfqParticle,#rfqApp,#rfqMarket,#rfqDocs,#rfqTerm").forEach(function(el){
        try { el.dispatchEvent(new Event(type, {bubbles:true})); } catch(err){}
      });
    });
    try { if(typeof window.updateRFQ === "function") window.updateRFQ(); } catch(err){}
  };

  YYK.review = function(){
    var ids = {};
    var duplicateIds = [];
    $all("[id]").forEach(function(el){
      ids[el.id] = (ids[el.id] || 0) + 1;
      if(ids[el.id] === 2) duplicateIds.push(el.id);
    });
    return window.YYK_MASTER_AUDIT = {
      duplicateIds: duplicateIds,
      buttonCount: $all("button").length,
      formCount: $all("form").length,
      selectCount: $all("select").length,
      rfqFieldCount: $all(".rfq-field,.rfq-auto-field").length,
      checkedAt: new Date().toISOString()
    };
  };

  document.addEventListener("keydown", function(event){
    if(event.key === "Escape") YYK.closeActiveLayers();
  }, true);

  document.addEventListener("click", function(event){
    if(event.target.closest(".modal-close,.product-close,.compliance-close,.contact-close,.esg-close,.sogo-close,.sogo-backdrop")){
      setTimeout(YYK.unlockScroll, 0);
    }
    if(event.target.closest("[data-open-sogo],[data-pp-add-rfq],[data-terminal-action],#applyAutoDecision")){
      setTimeout(YYK.refreshRFQ, 0);
    }
  }, true);

  document.addEventListener("DOMContentLoaded", function(){
    YYK.unlockScroll();
    YYK.review();
  });
})();
