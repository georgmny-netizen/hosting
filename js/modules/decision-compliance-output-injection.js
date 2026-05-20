(function(){
  const MATRIX = {
    copper: {
      label: "Copper 6N / 7N",
      south_korea: {
        rcep: "0% preferential route where origin rules qualify",
        standard: "KS high-purity metal QC + semiconductor-grade release",
        docs: "CoA · ICP-MS · GDMS · Product Passport",
        esg: "Batch traceability verified through South Korea QC hub",
        route: "Malaysia → South Korea QC Hub"
      },
      japan: {
        rcep: "0% - 3.3% RCEP duty benefit",
        standard: "JIS H 2123",
        docs: "CoA · RCEP Form AJ · JIS H 2123 declaration · ICP-MS / GDMS",
        esg: "Origin file + batch-level traceability ready for RFQ",
        route: "Malaysia → South Korea QC Hub → Japan"
      },
      taiwan: {
        rcep: "0% - 1% preferential planning range",
        standard: "Semiconductor-grade / TSMC-grade · PPT-level analysis",
        docs: "CoA · SEMI-grade passport · ICP-MS PPT analysis · Product Passport",
        esg: "PPT impurity profile and semiconductor buyer pack available",
        route: "Malaysia → South Korea QC Hub → Taiwan"
      },
      china: {
        rcep: "0% - 2% preferential planning range",
        standard: "GB/T 2025 compliance mapping",
        docs: "CoA · Certificate of Origin · GB/T 2025 file · CIQ support",
        esg: "Destination and end-use screening required before release",
        route: "Malaysia → South Korea QC Hub → China"
      }
    },
    aluminum: {
      label: "Aluminum 6N",
      south_korea: {
        rcep: "0% preferential route where origin rules qualify",
        standard: "KS high-purity aluminum QC",
        docs: "CoA · ICP-MS · Batch traceability · Product Passport",
        esg: "Low-impurity release through South Korea QC hub",
        route: "Malaysia → South Korea QC Hub"
      },
      japan: {
        rcep: "0% - 3.3% RCEP duty benefit",
        standard: "JIS H 2123 buyer documentation mapping",
        docs: "CoA · RCEP Form AJ · JIS compliance declaration · ICP-MS",
        esg: "RCEP and JIS documentation package prepared for RFQ",
        route: "Malaysia → South Korea QC Hub → Japan"
      },
      taiwan: {
        rcep: "0% - 1% preferential planning range",
        standard: "Semiconductor-grade / TSMC-grade",
        docs: "CoA · SEMI-grade passport · Surface purity report · ICP-MS",
        esg: "Semiconductor-grade buyer qualification output available",
        route: "Malaysia → South Korea QC Hub → Taiwan"
      },
      china: {
        rcep: "0% - 2% preferential planning range",
        standard: "GB/T 2025 compliance mapping",
        docs: "CoA · GB/T 2025 report · Customs compliance file",
        esg: "GB/T and customs document review required",
        route: "Malaysia → South Korea QC Hub → China"
      }
    },
    zinc: {
      label: "Zinc 5N5",
      south_korea: {
        rcep: "0% preferential route where origin rules qualify",
        standard: "KS zinc / powder QC mapping",
        docs: "CoA · PSD analysis · ICP-MS · Product Passport",
        esg: "PSD and impurity profile controlled by QC release",
        route: "Malaysia → South Korea QC Hub"
      },
      japan: {
        rcep: "0% - 3.3% RCEP duty benefit",
        standard: "JIS H 2123 buyer documentation mapping",
        docs: "CoA · RCEP Form AJ · PSD report · ICP-MS",
        esg: "Origin and powder profile evidence available",
        route: "Malaysia → South Korea QC Hub → Japan"
      },
      taiwan: {
        rcep: "0% - 1% preferential planning range",
        standard: "Semiconductor-grade / PPT particle and impurity review",
        docs: "CoA · Particle size distribution · PPT purity report · SEMI-grade passport",
        esg: "Particle and PPT impurity output ready for buyer review",
        route: "Malaysia → South Korea QC Hub → Taiwan"
      },
      china: {
        rcep: "0% - 2% preferential planning range",
        standard: "GB/T 2025 compliance mapping",
        docs: "CoA · GB/T 2025 compliance · CIQ support file",
        esg: "Controlled customs and destination file required",
        route: "Malaysia → South Korea QC Hub → China"
      }
    },
    ree: {
      label: "Rare Earth Materials",
      south_korea: {
        rcep: "0% preferential route where origin rules qualify",
        standard: "KS + internal REE composition specification",
        docs: "CoA · Composition analysis · Trace elements report · End-use declaration",
        esg: "End-use declaration and responsible sourcing screen required",
        route: "Malaysia → South Korea QC Hub"
      },
      japan: {
        rcep: "0% - 3.3% RCEP duty benefit",
        standard: "JIS H 2123 documentation mapping + METI review",
        docs: "CoA · RCEP Form AJ · End-use declaration · Composition analysis",
        esg: "Controlled-material and end-use review before RFQ release",
        route: "Malaysia → South Korea QC Hub → Japan"
      },
      taiwan: {
        rcep: "0% - 1% preferential planning range",
        standard: "Semiconductor-grade REE specification / PPT impurity review",
        docs: "CoA · SEMI-grade passport · Purity report · Application declaration",
        esg: "Application declaration and semiconductor buyer pack required",
        route: "Malaysia → South Korea QC Hub → Taiwan"
      },
      china: {
        rcep: "0% - 2% preferential planning range",
        standard: "GB/T 2025 REE route compliance mapping",
        docs: "CoA · GB/T 2025 file · Import license support · CIQ support file",
        esg: "Import-license and end-use checks required before release",
        route: "Malaysia → South Korea QC Hub → China"
      }
    }
  };

  function byId(id){ return document.getElementById(id); }

  function updateDecisionComplianceOutput(){
    const materialEl = byId("decisionMaterial");
    const destinationEl = byId("decisionDestination");
    if(!materialEl || !destinationEl) return;

    const material = materialEl.value;
    const destination = destinationEl.value;
    const output = MATRIX[material][destination];
    const destinationLabel = destinationEl.options[destinationEl.selectedIndex].text;

    byId("decisionRcepHeadline").textContent = "🛡 " + output.rcep;
    byId("decisionRcepSub").textContent = MATRIX[material].label + " · " + destinationLabel + " · financial benefit routed through South Korea QC hub.";
    byId("decisionRcepCell").textContent = output.rcep;
    byId("decisionStandardCell").textContent = output.standard;
    byId("decisionDocsCell").textContent = output.docs;
    byId("decisionEsgCell").textContent = output.esg;
    byId("decisionRouteCell").textContent = output.route;
  }

  document.addEventListener("DOMContentLoaded", function(){
    ["decisionMaterial","decisionDestination"].forEach(function(id){
      const el = byId(id);
      if(el) el.addEventListener("change", updateDecisionComplianceOutput);
    });
    updateDecisionComplianceOutput();
  });

  window.DECISION_COMPLIANCE_OUTPUT_MATRIX = MATRIX;
})();
