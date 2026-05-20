// YONGYEOKYO Directive 20 Logistics Dictate JS START
(function(){
  window.YYK_D20 = {
    logisticsHubs: [
      { region:"Malaysia", hub:"Kuantan Port (ECER)", bonded:"ACTIVE", shipment:"24-48h" },
      { region:"South Korea", hub:"Busan Port", bonded:"ACTIVE", shipment:"24-48h" },
      { region:"South Korea", hub:"Port of Incheon (Bonded)", bonded:"ACTIVE", shipment:"24-48h" },
      { region:"Japan", hub:"Yokohama", bonded:"ACTIVE", shipment:"24-48h" },
      { region:"Japan", hub:"Niigata", bonded:"ACTIVE", shipment:"24-48h" },
      { region:"China", hub:"Shanghai", bonded:"ACTIVE", shipment:"24-48h" },
      { region:"China / HK", hub:"Hong Kong", bonded:"ACTIVE", shipment:"24-48h" },
      { region:"China", hub:"Qingdao", bonded:"ACTIVE", shipment:"24-48h" },
      { region:"China", hub:"Tianjin", bonded:"ACTIVE", shipment:"24-48h" }
    ],
    koreaDistributionRule: "Korea acts as a hub for further distribution of products from Malaysia ECER.",
    validateTolerance: function(){
      var input = document.getElementById("d20PpbTolerance");
      var result = document.getElementById("d20ToleranceResult");
      var value = input ? Number(input.value) : NaN;
      var ok = Number.isFinite(value) && value > 0;
      if(result){
        result.classList.toggle("block", !ok);
        result.textContent = ok
          ? "PASS · ppb tolerance captured for RFQ technical routing."
          : "BLOCKED · ppb tolerance missing; RFQ cannot pass final gate.";
      }
      return ok;
    }
  };
})();
// YONGYEOKYO Directive 20 Logistics Dictate JS END
