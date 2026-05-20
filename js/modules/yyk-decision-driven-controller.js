(function(){
  const materialMap = {
    cu: {
      label:"Copper · Cu",
      purity:"Up to 99.99999% (7N)",
      risk:"Impurity drift / oxygen control / supplier substitution",
      control:"GDMS batch verification + ICP-MS cross-check + CoA release",
      evidence:"CAS 7440-50-8 · KE-08896 · CoA · GDMS / ICP-MS · O/H/N when required",
      esg:"Plant-linked sourcing and batch traceability review"
    },
    al: {
      label:"Aluminum · Al",
      purity:"99.996%&ndash;9.9999%",
      risk:"Fe / Si drift, gas content variation, form mismatch",
      control:"GDMS + impurity map + O/H/N gas analysis where required",
      evidence:"CAS 7429-90-5 · CoA · TDS · SDS · impurity profile",
      esg:"Supplier route validation and packaging / handling review"
    },
    zn: {
      label:"Zinc · Zn",
      purity:"Up to 99.9995% (5N5)",
      risk:"Pb / Cd exposure, oxidation, PSD instability",
      control:"ICP-MS / GDMS + PSD / morphology review",
      evidence:"CAS 7440-66-6 · CoA · SDS · PSD sheet · storage note",
      esg:"Hazard-aware handling and controlled industrial-use documentation"
    },
    ree: {
      label:"Rare Earth Materials · REE",
      purity:"Custom grades available",
      risk:"Origin sensitivity, export-control exposure, end-use restrictions",
      control:"Origin statement + export / end-use screening + ICP-MS / GDMS where applicable",
      evidence:"CoA · SDS · TDS · origin statement · end-use review",
      esg:"Responsible sourcing, supplier due diligence and restricted-use screening"
    }
  };

  const destinationMap = {
    kr: {label:"Korea", tab:"privacy", compliance:"PIPA / K-REACH", control:"Korean privacy handling, K-REACH chemical review, Busan/Incheon route control", docs:"PIPA notice · K-REACH/SDS package · KR logistics record"},
    jp: {label:"Japan", tab:"terms", compliance:"APPI / Tokushoho / METI", control:"Japanese commercial disclosure, APPI privacy review and METI export-control awareness", docs:"Tokushoho disclosure · APPI handling · JP SDS/label review · Yokohama/Osaka routing"},
    cn: {label:"China", tab:"legal-framework", compliance:"PIPL / Entity Screening", control:"China PIPL privacy handling, entity/end-use screening and customs classification", docs:"PIPL notice · end-use confirmation · CN SDS/label review · Shanghai/Shenzhen routing"},
    tw: {label:"Taiwan", tab:"legal-framework", compliance:"Taiwan PDPA / TCSCA", control:"Taiwan PDPA privacy handling, TCSCA chemical review and UBN verification", docs:"PDPA notice · TCSCA check · UBN verification · Kaohsiung/Keelung route"}
  };

  function qs(sel, root){return (root||document).querySelector(sel)}
  function qsa(sel, root){return Array.prototype.slice.call((root||document).querySelectorAll(sel))}

  function normalizeMaterial(value){
    value = String(value || "").toLowerCase();
    if(value.includes("copper") || value.includes("cu")) return "cu";
    if(value.includes("aluminum") || value.includes("aluminium") || value.includes(" al")) return "al";
    if(value.includes("zinc") || value.includes("zn")) return "zn";
    if(value.includes("rare") || value.includes("ree") || value.includes("lanthan") || value.includes("nd") || value.includes("dy")) return "ree";
    return "cu";
  }

  function normalizeDestination(value){
    value = String(value || "").toLowerCase();
    if(value.includes("japan") || value.includes("jp") || value.includes("yokohama") || value.includes("osaka")) return "jp";
    if(value.includes("china") || value.includes("cn") || value.includes("shanghai") || value.includes("shenzhen")) return "cn";
    if(value.includes("taiwan") || value.includes("tw") || value.includes("kaohsiung") || value.includes("keelung") || value.includes("hsinchu")) return "tw";
    if(value.includes("korea") || value.includes("kr") || value.includes("busan") || value.includes("incheon")) return "kr";
    return "kr";
  }

  function findRFQValue(type){
    const selectors = type === "material"
      ? ['select[name*="material" i]','input[name*="material" i]','#rfqMaterial','#material','select[id*="material" i]','input[id*="material" i]']
      : ['select[name*="destination" i]','select[name*="country" i]','input[name*="destination" i]','input[name*="country" i]','#rfqDestination','#destination','#country','select[id*="destination" i]','select[id*="country" i]'];
    for(const sel of selectors){
      const el = qs(sel);
      if(el && el.value) return el.value;
    }
    // fallback from visible selected options
    const allSelects = qsa('select');
    for(const el of allSelects){
      const v = el.value || (el.options && el.options[el.selectedIndex] ? el.options[el.selectedIndex].text : "");
      if(type === "material" && /(copper|cu|aluminum|zinc|zn|rare|ree|lanthan)/i.test(v)) return v;
      if(type === "destination" && /(korea|japan|china|taiwan|busan|incheon|yokohama|shanghai|kaohsiung)/i.test(v)) return v;
    }
    return "";
  }

  function activateComplianceTab(tabName){
    if(typeof window.YYKActivateComplianceTab === "function"){
      window.YYKActivateComplianceTab(tabName);
      return;
    }
    const engine = qs('.compliance-engine');
    if(!engine) return;
    const tabs = qsa('[data-compliance-tab]', engine);
    const panels = qsa('.compliance-panel', engine);
    let idx = tabs.findIndex(t => String(t.getAttribute('data-compliance-tab')).toLowerCase() === String(tabName).toLowerCase());
    if(idx < 0) idx = 0;
    tabs.forEach((t,i)=>t.classList.toggle('active', i===idx));
    panels.forEach((p,i)=>{p.classList.toggle('active', i===idx); p.hidden = i!==idx; p.style.display = i===idx ? 'block':'none';});
  }

  function renderDecision(){
    const materialKey = normalizeMaterial(findRFQValue("material"));
    const destKey = normalizeDestination(findRFQValue("destination"));
    const mat = materialMap[materialKey];
    const dest = destinationMap[destKey];

    const mEl = qs('#yykDecisionMaterial');
    const dEl = qs('#yykDecisionDestination');
    const cEl = qs('#yykDecisionCompliance');
    const sEl = qs('#yykDecisionStatus');
    const sumEl = qs('#yykDecisionSummary');
    const rows = qs('#yykDecisionRows');

    if(mEl) mEl.textContent = mat.label + " · " + mat.purity;
    if(dEl) dEl.textContent = dest.label;
    if(cEl) cEl.textContent = dest.compliance;
    if(sEl) sEl.textContent = materialKey === "ree" || destKey === "cn" ? "Enhanced Review" : "Controlled RFQ";
    if(sumEl) sumEl.textContent = mat.label + " routed to " + dest.label + ": " + dest.control;

    if(rows){
      rows.innerHTML = `
        <tr>
          <td>Material Risk</td>
          <td>${mat.risk}</td>
          <td>${mat.control}</td>
          <td>${mat.evidence}</td>
          <td><span class="yyk-decision-pill">Controlled</span></td>
        </tr>
        <tr>
          <td>Destination Compliance</td>
          <td>${dest.label} shipment / buyer jurisdiction</td>
          <td>${dest.control}</td>
          <td>${dest.docs}</td>
          <td><span class="yyk-decision-pill">${dest.compliance}</span></td>
        </tr>
        <tr>
          <td>ESG / Responsible Sourcing</td>
          <td>${mat.esg}</td>
          <td>Supplier review + document vault + batch traceability</td>
          <td>Supplier registry · CoA · SDS/TDS · origin / end-use records</td>
          <td><span class="yyk-decision-pill">Evidence-linked</span></td>
        </tr>
        <tr>
          <td>RFQ Decision</td>
          <td>Buyer-selected material + destination</td>
          <td>Auto-route to compliance tab: ${dest.compliance}</td>
          <td>RFQ pack generated with required legal / technical attachments</td>
          <td><span class="yyk-decision-pill">${materialKey === "ree" || destKey === "cn" ? "Enhanced Review" : "Ready"}</span></td>
        </tr>
      `;
    }

    // keep compliance layer prepared for the selected country
    activateComplianceTab(dest.tab);

    // sync any existing risk/esg text containers if present
    const riskContext = qs('.risk-engine-context');
    if(riskContext) riskContext.textContent = mat.label + " / " + dest.label + " · " + mat.risk;
    const esgContext = qs('.esg-decision-context');
    if(esgContext) esgContext.textContent = mat.esg + " · " + dest.compliance;
  }

  function initDecisionLayer(){
    // append the decision panel inside RFQ section/card when possible
    const rfq = qs('#rfq .rfq-card') || qs('#rfq') || qs('main');
    const panel = qs('#yykDecisionDrivenLayer');
    if(rfq && panel && !rfq.contains(panel)){
      rfq.appendChild(panel);
    }

    document.addEventListener('change', function(e){
      if(e.target && (e.target.matches('select,input,textarea'))) renderDecision();
    }, true);

    document.addEventListener('click', function(e){
      const btn = e.target.closest('[data-open-compliance]');
      if(btn){
        const v = btn.getAttribute('data-open-compliance');
        if(v === "esg"){
          // ESG button opens ESG but still preserves decision-state destination mapping on next render
          setTimeout(renderDecision, 50);
        }
      }
    }, true);

    renderDecision();
  }

  if(document.readyState === "loading"){
    document.addEventListener("DOMContentLoaded", initDecisionLayer);
  } else {
    initDecisionLayer();
  }

  window.YYKDecisionRender = renderDecision;
})();
