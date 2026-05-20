(function(){
  "use strict";
  var STORE_KEY="yyk_trust_decision_engine_v1";
  var TRUST_KEY="yyk_trust_control_state_v1";
  var MODE_POLICY={
    scsp:{label:"SCSP",approval:"APPROVE FOR TECHNICAL REVIEW",risk:"Low / controlled route",pricing:"Base band + documentation release cost",qc:"SCSP pack required: CoA · TDS · SDS · analytical method",owner:"Technical Sales + SQE"},
    elements:{label:"Elements",approval:"CONDITIONAL — TRACE EVIDENCE REQUIRED",risk:"Medium until 70+ element profile is attached",pricing:"Analytical premium band; price lock after impurity table",qc:"70+ trace analysis · GDMS / ICP-MS / SSMS where applicable",owner:"QA / Laboratory Routing"},
    rfq:{label:"RFQ",approval:"STRUCTURED RFQ ONLY",risk:"Medium / input completeness controls release",pricing:"Indicative band only until volume, purity and Incoterms are complete",qc:"Structured material, purity, form, destination and volume required",owner:"RFQ Desk"},
    esg:{label:"ESG",approval:"COMPLIANCE HOLD UNTIL DUE DILIGENCE CLEAR",risk:"Risk-based supplier and origin review",pricing:"Compliance-reserve band; final quote after screening",qc:"Supplier disclosure · origin review · sanctions/export-control check",owner:"Compliance + Commercial Desk"}
  };
  function byId(id){return document.getElementById(id)}
  function qsa(sel,root){return Array.prototype.slice.call((root||document).querySelectorAll(sel))}
  function getText(el){return (el&&el.textContent||"").replace(/\s+/g," ").trim()}
  function safeSet(id,value){var el=byId(id);if(el)el.textContent=value}
  function field(id){var el=byId(id);return el?(el.value||getText(el)||""):""}
  function detectTrust(){
    try{var s=JSON.parse(localStorage.getItem(TRUST_KEY)||"{}");if(s&&s.mode&&MODE_POLICY[s.mode])return s.mode}catch(e){}
    if(window.YYK_TRUST_STATE&&MODE_POLICY[window.YYK_TRUST_STATE.mode])return window.YYK_TRUST_STATE.mode;
    return "scsp";
  }
  function materialShort(){
    var v=field("rfqMaterial")||field("sogoMaterial");
    if(/aluminum|\bal\b/i.test(v))return "Al · Aluminum";
    if(/zinc|\bzn\b/i.test(v))return "Zn · Zinc";
    if(/rare|ree/i.test(v))return "REE · Rare Earth";
    return "Cu · Copper";
  }
  function scoreContext(){
    var mode=detectTrust();
    var qc=field("rfqAutoQC");
    var vol=field("rfqAutoVolume");
    var dest=field("rfqAutoDestination");
    var score=74;
    if(mode==="scsp")score+=13;
    if(mode==="elements")score+=4;
    if(mode==="rfq")score+=8;
    if(mode==="esg")score-=6;
    if(/Batch-specific|Advanced|Customer-specific/i.test(qc))score+=6;
    if(/Production|Long-term/i.test(vol))score-=4;
    if(/China|APAC|Japan|Taiwan/i.test(dest))score-=2;
    score=Math.max(42,Math.min(98,score));
    return {mode:mode,score:score,qc:qc||"Standard QC",volume:vol||"Sample / qualification lot",destination:dest||"South Korea",material:materialShort()};
  }
  function pricingBand(ctx){
    var base=ctx.score>=88?"A":"B";
    if(ctx.mode==="esg")base="C";
    if(ctx.mode==="elements"&&/Batch-specific|Advanced/i.test(ctx.qc))base="B+";
    if(/Production|Long-term/i.test(ctx.volume)&&ctx.mode!=="esg")base=(base==="A"?"A-":"B+");
    return "Band "+base+" · "+MODE_POLICY[ctx.mode].pricing;
  }
  function approvalTier(ctx){
    var p=MODE_POLICY[ctx.mode];
    if(ctx.score>=90&&ctx.mode==="scsp")return "GREEN · "+p.approval;
    if(ctx.mode==="esg")return "AMBER · "+p.approval;
    if(ctx.mode==="elements")return "AMBER · "+p.approval;
    if(ctx.score<65)return "RED · HOLD FOR REVIEW";
    return "AMBER · "+p.approval;
  }
  function syncDocs(ctx,approval,pricing){
    var docs=byId("rfqDocs");
    if(!docs)return;
    var clean=(docs.value||"").replace(/\s*Trust Decision:.*$/," ").trim();
    docs.value=(clean?clean+" · ":"")+"Trust Decision: "+ctx.material+" · "+MODE_POLICY[ctx.mode].label+" · "+approval+" · "+pricing+".";
    try{docs.dispatchEvent(new Event("input",{bubbles:true}));docs.dispatchEvent(new Event("change",{bubbles:true}))}catch(e){}
  }
  function render(){
    var ctx=scoreContext();
    var p=MODE_POLICY[ctx.mode];
    var approval=approvalTier(ctx);
    var pricing=pricingBand(ctx);
    safeSet("autoRisk",p.risk+" · Decision score "+ctx.score+"/100 · "+approval);
    safeSet("autoPricing",pricing);
    safeSet("autoQCLogic",p.qc+" · Active trust mode: "+p.label);
    safeSet("autoOwner",p.owner+" · "+ctx.destination);
    var summary=byId("rfqAutoSummary");
    if(summary)summary.textContent="Trust-linked decision · "+ctx.material+" · "+approval+" · "+pricing;
    var sogo=byId("sogoStatus");
    if(sogo)sogo.textContent="Trust Decision synced · "+ctx.material+" · "+approval+".";
    var state={mode:ctx.mode,material:ctx.material,score:ctx.score,approval:approval,pricing:pricing,qc:ctx.qc,volume:ctx.volume,destination:ctx.destination,updatedAt:new Date().toISOString()};
    try{localStorage.setItem(STORE_KEY,JSON.stringify(state))}catch(e){}
    window.YYK_TRUST_DECISION_STATE=state;
    syncDocs(ctx,approval,pricing);
    return state;
  }
  function install(){
    qsa(".trust-control-panel .trust-control-card[data-trust-control]").forEach(function(card){
      card.addEventListener("click",function(){setTimeout(render,0);setTimeout(render,80)},true);
      card.addEventListener("keydown",function(e){if(e.key==="Enter"||e.key===" "){setTimeout(render,0);setTimeout(render,80)}},true);
    });
    qsa("#structuredRfqRouter select,#rfqMaterial,#rfqForm,#rfqPurity,#rfqParticle").forEach(function(el){
      el.addEventListener("input",render,true);el.addEventListener("change",render,true);
    });
    setTimeout(render,0);setTimeout(render,180);setTimeout(render,600);
  }
  window.YYK_TRUST_DECISION_ENGINE={render:render,getState:function(){return window.YYK_TRUST_DECISION_STATE||null}};
  if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",install);else install();
})();
