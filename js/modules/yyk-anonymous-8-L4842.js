// YONGYEOKYO Directive 24 China Resource Monolith JS START
(function(){
  window.YYK_D24 = {
    productCategory: "Global Resource Control",
    strategicFeedstockRefining: {
      heavyRee: ["Dysprosium", "Terbium"],
      batteryFeedstock: ["Lithium", "Cobalt", "Nickel"],
      exportControlMetals: ["Gallium", "Germanium"]
    },
    chinaSupplyStatus: {
      Shanghai: "MOFCOM Compliance Active / Strategic Reserve Connected",
      Tianjin: "MOFCOM Compliance Active / Strategic Reserve Connected",
      Qingdao: "MOFCOM Compliance Active / Strategic Reserve Connected",
      HongKongIntegratedCenter: "Compliance conduit for MOFCOM-regulated materials"
    },
    hkConduit: "Our Hong Kong Integrated Center acts as a compliance conduit for MOFCOM-regulated materials, ensuring legal and transparent dual-use item transfers.",
    targetMarkets: ["EV Battery Megafactories", "Solar-Grade Silicon Supply", "6G Telecommunications (Huawei/ZTE standards)"],
    validateMofcomLicenseGate: function(payload){
      var regulated = ["gallium","germanium","graphite","rare earth","dysprosium","terbium"];
      var material = String(payload && payload.material || "").toLowerCase();
      var hit = regulated.some(function(x){ return material.indexOf(x) >= 0; });
      return {
        licenseRequired: hit,
        status: hit ? "MOFCOM_REVIEW_REQUIRED" : "STANDARD_COMPLIANCE_ROUTE",
        gate: "CHINA_EXPORT_LICENSE_MANAGEMENT"
      };
    }
  };

})();
// YONGYEOKYO Directive 24 China Resource Monolith JS END
