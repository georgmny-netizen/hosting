(function(){
  const matrix = {
    copper: {
      label: "Copper 6N / 7N",
      south_korea: { rcep:"0% hub-release baseline", standard:"South Korea QC hub · CoA / ICP-MS / GDMS", lead:"Malaysia production → South Korea hub release", docs:"CoA · ICP-MS · GDMS · Product Passport · origin file" },
      japan: { rcep:"0-3.3% RCEP preferential band", standard:"RCEP Form AJ · JIS H 2123", lead:"Malaysia → South Korea hub → Japan · 3-5 days after release", docs:"CoA · RCEP Form AJ · JIS H 2123 declaration · ICP-MS / GDMS" },
      taiwan: { rcep:"0-3.3% RCEP planning band", standard:"TSMC-grade PPT · semiconductor qualification", lead:"Malaysia → South Korea hub → Taiwan · 4-7 days after release", docs:"CoA · TSMC-grade PPT analysis · SEMI-grade passport · end-use file" },
      china: { rcep:"0% - 3.3% · China RCEP route under origin qualification", standard:"GB/T 20424-2025 Screening Active", lead:"Malaysia → South Korea QC Hub → Shanghai / Ningbo / Shenzhen · 5-9 days after release", docs:"Customs CIQ declaration · GB/T impurity verification · RCEP Certificate of Origin · CoA" }
    },
    aluminum: {
      label: "Aluminum 6N",
      south_korea: { rcep:"0% hub-release baseline", standard:"South Korea QC hub · 6N release", lead:"Malaysia production → South Korea hub release", docs:"CoA · ICP-MS · batch traceability · Product Passport" },
      japan: { rcep:"0-3.3% RCEP preferential band", standard:"RCEP Form AJ · JIS H 2123", lead:"Malaysia → South Korea hub → Japan · 3-5 days after release", docs:"CoA · RCEP Form AJ · JIS H 2123 declaration · ICP-MS" },
      taiwan: { rcep:"0-3.3% RCEP planning band", standard:"TSMC-grade PPT · semiconductor surface purity", lead:"Malaysia → South Korea hub → Taiwan · 4-7 days after release", docs:"CoA · TSMC-grade PPT analysis · SEMI-grade passport · surface purity report" },
      china: { rcep:"0% - 3.3% · China RCEP route under origin qualification", standard:"GB/T 20424-2025 Screening Active", lead:"Malaysia → South Korea QC Hub → Shanghai / Ningbo / Shenzhen · 5-9 days after release", docs:"Customs CIQ declaration · GB/T impurity verification · RCEP Certificate of Origin · CoA" }
    },
    zinc: {
      label: "Zinc 5N5",
      south_korea: { rcep:"0% hub-release baseline", standard:"South Korea QC hub · powder / PSD release", lead:"Malaysia production → South Korea hub release", docs:"CoA · PSD analysis · ICP-MS · Product Passport" },
      japan: { rcep:"0-3.3% RCEP preferential band", standard:"RCEP Form AJ · JIS H 2123", lead:"Malaysia → South Korea hub → Japan · 3-5 days after release", docs:"CoA · RCEP Form AJ · PSD report · ICP-MS" },
      taiwan: { rcep:"0-3.3% RCEP planning band", standard:"TSMC-grade PPT · particle / impurity review", lead:"Malaysia → South Korea hub → Taiwan · 4-7 days after release", docs:"CoA · particle size distribution · TSMC-grade PPT report · SEMI-grade passport" },
      china: { rcep:"0% - 3.3% · China RCEP route under origin qualification", standard:"GB/T 20424-2025 Screening Active", lead:"Malaysia → South Korea QC Hub → Shanghai / Ningbo / Shenzhen · 5-9 days after release", docs:"Customs CIQ declaration · GB/T impurity verification · RCEP Certificate of Origin · CoA" }
    },
    ree: {
      label: "Rare Earth Materials",
      south_korea: { rcep:"0% hub-release baseline", standard:"South Korea QC hub · REE composition file", lead:"Malaysia production → South Korea hub release", docs:"CoA · composition analysis · trace-elements report · end-use declaration" },
      japan: { rcep:"0-3.3% RCEP preferential band", standard:"RCEP Form AJ · JIS H 2123 · METI review", lead:"Malaysia → South Korea hub → Japan · 3-5 days after release", docs:"CoA · RCEP Form AJ · end-use declaration · composition analysis" },
      taiwan: { rcep:"0-3.3% RCEP planning band", standard:"TSMC-grade PPT · REE impurity review", lead:"Malaysia → South Korea hub → Taiwan · 4-7 days after release", docs:"CoA · SEMI-grade passport · TSMC-grade PPT report · application declaration" },
      china: { rcep:"0% - 3.3% · China RCEP route under origin qualification", standard:"GB/T 20424-2025 Screening Active", lead:"Malaysia → South Korea QC Hub → Shanghai / Ningbo / Shenzhen · 5-9 days after release", docs:"Customs CIQ declaration · GB/T impurity verification · RCEP Certificate of Origin · CoA" }
    }
  };
  function $(id){ return document.getElementById(id); }
  function updateComplianceCalculator(){
    const material = $("calcMaterial") ? $("calcMaterial").value : "copper";
    const destination = $("calcDestination") ? $("calcDestination").value : "south_korea";
    const item = matrix[material][destination];
    const destinationLabel = $("calcDestination") ? $("calcDestination").options[$("calcDestination").selectedIndex].text : "South Korea";
    if($("calcRouteTitle")) $("calcRouteTitle").textContent = "Malaysia → South Korea Hub → " + destinationLabel;
    if($("calcRouteText")) $("calcRouteText").textContent = matrix[material].label + " procurement route resolved through APAC Regional Supply Desk.";
    if($("calcRcepBenefit")) $("calcRcepBenefit").textContent = item.rcep;
    if($("calcStandard")) $("calcStandard").textContent = item.standard;
    if($("calcLeadTime")) $("calcLeadTime").textContent = item.lead;
    if($("calcRequiredDocs")) $("calcRequiredDocs").textContent = item.docs;
  }
  document.addEventListener("DOMContentLoaded", function(){
    ["calcMaterial", "calcDestination"].forEach(function(id){ const el = $(id); if(el) el.addEventListener("change", updateComplianceCalculator); });
    updateComplianceCalculator();
  });
  window.APAC_COMPLIANCE_CALCULATOR_MATRIX = matrix;
})();
