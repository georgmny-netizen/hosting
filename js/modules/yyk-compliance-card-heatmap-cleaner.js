(function(){
  "use strict";

  function removeHeatmapsFromComplianceCards(){
    var cards = Array.prototype.slice.call(document.querySelectorAll(".compliance-card"));
    cards.forEach(function(card){
      var title = (card.querySelector("h3") || {}).textContent || "";
      var isRegionalLegalCard = /Korea|Japan|China|Taiwan|KR|JP|CN|TW/i.test(title);
      if(!isRegionalLegalCard) return;

      Array.prototype.slice.call(card.querySelectorAll(".yyk-heatmap")).forEach(function(hm){
        hm.remove();
      });

      Array.prototype.slice.call(card.querySelectorAll("*")).forEach(function(el){
        var text = (el.textContent || "").trim();
        if(/^Qualification Heatmap\b/i.test(text) || /Auto-scored from visible card content/i.test(text)){
          el.remove();
        }
      });
    });
  }

  document.addEventListener("DOMContentLoaded", function(){
    removeHeatmapsFromComplianceCards();
    setTimeout(removeHeatmapsFromComplianceCards, 50);
    setTimeout(removeHeatmapsFromComplianceCards, 4000);
  });

  document.addEventListener("click", function(){
    setTimeout(removeHeatmapsFromComplianceCards, 0);
    setTimeout(removeHeatmapsFromComplianceCards, 100);
  }, true);

  window.YYK_COMPLIANCE_CARD_AUDIT = {
    removeHeatmaps: removeHeatmapsFromComplianceCards,
    status: "regional compliance cards are legal/review content, not qualification scorecards"
  };
})();
