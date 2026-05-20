(function(){
  function getMaterialValue(){
    var select = document.getElementById("rfqMaterial");
    return select ? (select.value || select.options[select.selectedIndex]?.textContent || "") : "";
  }

  function getRegionValue(){
    var regionFields = [
      document.getElementById("rfqRegion"),
      document.getElementById("sogoRegion"),
      document.querySelector('[name="region"]')
    ].filter(Boolean);
    return regionFields.length ? (regionFields[0].value || "") : "";
  }

  function updateComplianceNotice(){
    var notice = document.getElementById("rfqComplianceNotice");
    var dynamic = document.getElementById("rfqComplianceDynamic");
    if(!notice || !dynamic) return;

    var material = getMaterialValue();
    var region = getRegionValue();
    var highControl = /rare|earth|ree|isotope|cesium|rubidium|selenium|7n|ultra/i.test(material);
    var regionReview = /china|north america|europe|taiwan|japan/i.test(region);

    notice.classList.remove("compliance-alert", "compliance-ready");

    if(highControl){
      notice.classList.add("compliance-alert");
      dynamic.textContent = "Compliance status: enhanced review required for controlled materials / REE / ultra-high purity supply.";
    } else if(regionReview){
      notice.classList.add("compliance-alert");
      dynamic.textContent = "Compliance status: destination and routing review required before commercial release.";
    } else {
      notice.classList.add("compliance-ready");
      dynamic.textContent = "Compliance status: standard review. Batch-specific CoA still required before release.";
    }
  }

  function openLegalFramework(){
    var legalButton = document.querySelector('[data-compliance-tab="legal-framework"]');
    if(legalButton){ legalButton.click(); }
    if(typeof window.openCompliance === "function"){ window.openCompliance("legal-framework"); }
    if(typeof window.apexOpenCompliance === "function"){ window.apexOpenCompliance("legal-framework"); }
  }

  document.addEventListener("change", function(event){
    if(event.target && (event.target.id === "rfqMaterial" || event.target.id === "rfqRegion" || event.target.id === "sogoRegion")){
      updateComplianceNotice();
    }
  });

  document.addEventListener("input", function(event){
    if(event.target && (event.target.id === "rfqMaterial" || event.target.id === "rfqRegion" || event.target.id === "sogoRegion")){
      updateComplianceNotice();
    }
  });

  document.addEventListener("click", function(event){
    var submit = event.target.closest('button');
    if(!submit) return;

    var isRfqSubmit =
      /Submit Controlled RFQ/i.test(submit.textContent || "") ||
      /Submit Request/i.test(submit.textContent || "");

    if(!isRfqSubmit) return;

    var check = document.getElementById("rfqComplianceCheck");
    var notice = document.getElementById("rfqComplianceNotice");
    if(check && !check.checked){
      event.preventDefault();
      event.stopPropagation();
      if(notice){
        notice.classList.add("compliance-alert");
        notice.scrollIntoView({ behavior:"smooth", block:"center" });
      }
      var dynamic = document.getElementById("rfqComplianceDynamic");
      if(dynamic){
        dynamic.textContent = "Compliance acknowledgement required before RFQ submission.";
      }
    }
  }, true);

  document.addEventListener("click", function(event){
    var target = event.target.closest("[data-open-legal-framework]");
    if(!target) return;
    event.preventDefault();
    openLegalFramework();
  });

  updateComplianceNotice();
})();
