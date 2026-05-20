(function(){
  const MATERIALS = {
    copper: {
      rx: /(?:\bcopper\b|\bcu\b|ke-?08896|мед?)/i,
      label: "Copper · Cu · Up to 99.99999% (7N)",
      short: "Copper · Cu",
      href: "#passports",
      baseRisk: 22,
      riskText: "Material risk: controlled purity evidence",
      className: "copper"
    },
    aluminum: {
      rx: /(?:\baluminum\b|\baluminium\b|\bal\b|ал?мин)/i,
      label: "Aluminum · Al · 99.996%&ndash;9.9999%",
      short: "Aluminum · Al",
      href: "#passports",
      baseRisk: 18,
      riskText: "Material risk: standard purity evidence",
      className: "aluminum"
    },
    zinc: {
      rx: /(?:\bzinc\b|\bzn\b)/i,
      label: "Zinc · Zn · Up to 99.9995% (5N5)",
      short: "Zinc · Zn",
      href: "#passports",
      baseRisk: 24,
      riskText: "Material risk: powder/PSD evidence required",
      className: "zinc"
    },
    rareearth: {
      rx: /(?:rare\s*earth|lanthan|lanthanex|neodymium|dysprosium|terbium|\bree\b|oxide|salt|alloy)/i,
      label: "Rare Earth · RFQ-only controlled grade",
      short: "Rare Earth",
      href: "#rfq",
      baseRisk: 48,
      riskText: "Material risk: strategic material enhanced review",
      className: "rareearth"
    }
  };

  const DESTINATIONS = {
    korea: {
      rx: /(?:\bkorea\b|\bkr\b|busan|incheon)/i,
      label: "Korea",
      compliance: "PIPA / K-REACH",
      route: "Busan/Incheon route control",
      rule: "Korean privacy handling + K-REACH chemical review",
      destRisk: 20,
      href: "#apac-regional-supply-desk"
    },
    japan: {
      rx: /(?:\bjapan\b|\bjp\b|tokyo|osaka)/i,
      label: "Japan",
      compliance: "APPI / METI",
      route: "Japan import and METI review",
      rule: "APPI privacy handling + METI export-control review",
      destRisk: 28,
      href: "#apac-regional-supply-desk"
    },
    taiwan: {
      rx: /(?:\btaiwan\b|\btw\b|taipei|kaohsiung)/i,
      label: "Taiwan",
      compliance: "PDPA / UBN",
      route: "Taiwan UBN and route control",
      rule: "Taiwan PDPA + UBN buyer verification",
      destRisk: 24,
      href: "#apac-regional-supply-desk"
    },
    china: {
      rx: /(?:\bchina\b|\bcn\b|shanghai|shenzhen)/i,
      label: "China",
      compliance: "PIPL / End-use screening",
      route: "China entity and end-use review",
      rule: "PIPL privacy handling + entity/end-use screening",
      destRisk: 42,
      href: "#apac-regional-supply-desk"
    },
    apac: {
      rx: /(?:\bapac\b|asean|singapore|vietnam|thailand|malaysia|indonesia|asia|ази)/i,
      label: "APAC",
      compliance: "Local import / privacy review",
      route: "APAC route control",
      rule: "Local privacy, import and route review",
      destRisk: 32,
      href: "#apac-regional-supply-desk"
    }
  };

  const ESCALATIONS = [
    { tier:"restricted", min:82, status:"Restricted / Manual Approval", label:"Tier: Restricted" },
    { tier:"enhanced", min:62, status:"Enhanced Review RFQ", label:"Tier: Enhanced" },
    { tier:"controlled", min:36, status:"Controlled RFQ", label:"Tier: Controlled" },
    { tier:"low", min:0, status:"Standard Evidence RFQ", label:"Tier: Standard" }
  ];

  function cleanText(text){
    return (text || "").replace(/\s+/g, " ").trim();
  }

  function isVisible(el){
    if(!el || !el.isConnected) return false;
    const style = window.getComputedStyle(el);
    if(style.display === "none" || style.visibility === "hidden" || Number(style.opacity) === 0) return false;
    const rect = el.getBoundingClientRect();
    return rect.width > 0 && rect.height > 0;
  }

  function elementSignal(el){
    if(!el) return "";
    const attrs = ["id","class","name","aria-label","title","placeholder","value","href","role"];
    let parts = [];
    attrs.forEach(attr => {
      const value = el.getAttribute && el.getAttribute(attr);
      if(value) parts.push(value);
    });
    if(el.tagName === "SELECT"){
      const opt = el.options && el.options[el.selectedIndex];
      if(opt) parts.push(opt.textContent, opt.value);
    }
    if("value" in el && el.value) parts.push(el.value);
    parts.push(el.textContent || "");
    return cleanText(parts.join(" "));
  }

  function contextSignal(el){
    let parts = [];
    let node = el;
    let depth = 0;
    while(node && node !== document.body && depth < 4){
      parts.push(elementSignal(node));
      node = node.parentElement;
      depth++;
    }
    return cleanText(parts.join(" "));
  }

  function matchDict(text, dict){
    text = cleanText(text);
    for(const key in dict){
      if(dict[key].rx.test(text)) return dict[key];
    }
    return null;
  }

  function findBestVisibleMatch(dict, scopes){
    const selectors = [
      "select",
      "input",
      "textarea",
      "button",
      "a",
      "[role='button']",
      ".route-option",
      ".sogo-option",
      ".passport",
      ".dense-card",
      ".product-card",
      ".route-card",
      ".metric",
      ".strip-cell",
      ".yyk-strip-action",
      "td",
      "li"
    ].join(",");

    let candidates = [];
    scopes.forEach(scope => {
      if(!scope) return;
      const nodes = scope.querySelectorAll ? scope.querySelectorAll(selectors) : [];
      nodes.forEach(el => {
        if(!isVisible(el)) return;
        const signal = contextSignal(el);
        const match = matchDict(signal, dict);
        if(match){
          let score = 1;
          const tag = el.tagName;
          if(["SELECT","INPUT","TEXTAREA"].includes(tag)) score += 5;
          if(["BUTTON","A"].includes(tag) || el.getAttribute("role") === "button") score += 4;
          if(/rfq|material|destination|route|product|passport|country|market/i.test(signal)) score += 3;
          if(el.matches && el.matches(".active,.selected,[aria-selected='true']")) score += 4;
          candidates.push({match, score, signal});
        }
      });
    });

    candidates.sort((a,b) => b.score - a.score);
    return candidates[0] ? candidates[0].match : null;
  }

  function getScopes(){
    return [
      document.querySelector("#rfq"),
      document.querySelector(".rfq-layout"),
      document.querySelector(".rfq-card"),
      document.querySelector(".sogo-drawer.active"),
      document.querySelector(".product-engine.active"),
      document.querySelector("main"),
      document.body
    ].filter(Boolean);
  }

  function captureFromEventTarget(target){
    const signal = contextSignal(target);
    const material = matchDict(signal, MATERIALS);
    const destination = matchDict(signal, DESTINATIONS);

    if(material) document.body.setAttribute("data-selected-material-auto", material.label);
    if(destination) document.body.setAttribute("data-selected-destination-auto", destination.label);

    return {material, destination};
  }

  function storedMaterial(){
    return document.body.getAttribute("data-selected-material-auto") || document.body.getAttribute("data-selected-material") || "";
  }

  function storedDestination(){
    return document.body.getAttribute("data-selected-destination-auto") || document.body.getAttribute("data-selected-destination") || "";
  }

  function resolveMaterial(){
    const direct = matchDict(storedMaterial(), MATERIALS);
    if(direct) return direct;

    const rfqText = cleanText(Array.from(document.querySelectorAll("#rfq input,#rfq select,#rfq textarea,#rfq button,#rfq a,#rfq td,#rfq li"))
      .map(elementSignal).join(" "));
    const fromRfq = matchDict(rfqText, MATERIALS);
    if(fromRfq) return fromRfq;

    return findBestVisibleMatch(MATERIALS, getScopes()) || MATERIALS.copper;
  }

  function resolveDestination(){
    const direct = matchDict(storedDestination(), DESTINATIONS);
    if(direct) return direct;

    const rfqText = cleanText(Array.from(document.querySelectorAll("#rfq input,#rfq select,#rfq textarea,#rfq button,#rfq a,#rfq td,#rfq li"))
      .map(elementSignal).join(" "));
    const fromRfq = matchDict(rfqText, DESTINATIONS);
    if(fromRfq) return fromRfq;

    return findBestVisibleMatch(DESTINATIONS, getScopes()) || DESTINATIONS.korea;
  }

  function setText(selector, value){
    const el = document.querySelector(selector);
    if(el) el.textContent = value;
  }

  function setHref(selector, value){
    const el = document.querySelector(selector);
    if(el) el.setAttribute("href", value);
  }

  function calculateRisk(material, destination){
    let score = material.baseRisk + destination.destRisk;
    if(material.className === "rareearth" && destination.label === "China") score += 18;
    if(material.className === "rareearth" && destination.label === "Japan") score += 10;
    if(material.className === "zinc") score += 4;
    if(destination.label === "China") score += 8;
    if(destination.label === "Korea" && material.className === "copper") score -= 2;
    return Math.max(0, Math.min(100, score));
  }

  function escalationFor(score){
    return ESCALATIONS.find(item => score >= item.min) || ESCALATIONS[ESCALATIONS.length - 1];
  }

  function updateEvidenceRouter(){
    const material = resolveMaterial();
    const destination = resolveDestination();
    const score = calculateRisk(material, destination);
    const escalation = escalationFor(score);
    const summary = material.short + " routed to " + destination.label + ": " + destination.rule + ", " + destination.route;

    setText("[data-evidence-material]", material.label);
    setText("[data-evidence-material-risk]", material.riskText);
    setText("[data-evidence-destination]", destination.label);
    setText("[data-evidence-route]", destination.route);
    setText("[data-evidence-compliance]", destination.compliance);
    setText("[data-evidence-rule]", destination.rule);
    setText("[data-evidence-status]", escalation.status);
    setText("[data-evidence-score]", "Risk score: " + score);
    setText("[data-evidence-score-large]", score + " / 100");
    setText("[data-evidence-tier]", escalation.label);
    setText("[data-evidence-summary]", summary);

    setHref("[data-evidence-material-link]", material.href);
    setHref("[data-evidence-route-link]", destination.href);
    setHref("[data-evidence-compliance-link]", "#yongyeokyo-apac-compliance");
    setHref("[data-evidence-decision-link]", score >= 82 ? "#advisory-deal-room" : "#rfq");

    const router = document.querySelector("[data-evidence-router]");
    const meter = document.querySelector("[data-evidence-risk-meter]");
    const fill = document.querySelector("[data-evidence-risk-fill]");
    const nodes = document.querySelectorAll(".yyk-evidence-node");

    if(router){
      router.setAttribute("data-material", material.label);
      router.setAttribute("data-destination", destination.label);
      router.setAttribute("data-compliance", destination.compliance);
      router.setAttribute("data-risk-score", String(score));
      router.setAttribute("data-risk-tier", escalation.tier);
    }
    if(meter) meter.setAttribute("data-risk-tier", escalation.tier);
    if(fill) fill.style.width = score + "%";
    nodes.forEach(node => node.setAttribute("data-risk-tier", escalation.tier));

    window.dispatchEvent(new CustomEvent("yyk:evidence-router-updated", {
      detail: { material: material.label, destination: destination.label, compliance: destination.compliance, status: escalation.status, score, tier: escalation.tier }
    }));
  }

  function bindAuto(){
    updateEvidenceRouter();

    document.addEventListener("click", function(event){
      captureFromEventTarget(event.target);
      setTimeout(updateEvidenceRouter, 0);
      setTimeout(updateEvidenceRouter, 160);
    }, true);

    document.addEventListener("input", function(event){
      captureFromEventTarget(event.target);
      updateEvidenceRouter();
    }, true);

    document.addEventListener("change", function(event){
      captureFromEventTarget(event.target);
      updateEvidenceRouter();
    }, true);

    document.addEventListener("keyup", function(event){
      captureFromEventTarget(event.target);
      updateEvidenceRouter();
    }, true);

    const observer = new MutationObserver(function(mutations){
      let relevant = false;
      mutations.forEach(m => {
        if(m.target && m.target.closest && m.target.closest("#rfq,.rfq-card,.sogo-drawer,.product-engine,.route-card,.passport")){
          relevant = true;
        }
      });
      if(relevant) updateEvidenceRouter();
    });

    observer.observe(document.body, {
      subtree:true,
      childList:true,
      characterData:true,
      attributes:true,
      attributeFilter:["class","value","aria-selected","aria-pressed"]
    });
  }

  if(document.readyState === "loading"){
    document.addEventListener("DOMContentLoaded", bindAuto);
  }else{
    bindAuto();
  }

  window.YYKEvidenceRouterUpdate = updateEvidenceRouter;
  window.YYKEvidenceRouterSet = function(payload){
    if(payload && payload.material) document.body.setAttribute("data-selected-material-auto", payload.material);
    if(payload && payload.destination) document.body.setAttribute("data-selected-destination-auto", payload.destination);
    updateEvidenceRouter();
  };
  window.YYKEvidenceRouterClear = function(){
    document.body.removeAttribute("data-selected-material-auto");
    document.body.removeAttribute("data-selected-destination-auto");
    document.body.removeAttribute("data-selected-material");
    document.body.removeAttribute("data-selected-destination");
    updateEvidenceRouter();
  };
})();
