(function(){
  const densityModes = ["compact","review","executive"];
  const cardSelector = ".dense-card,.passport,.verification-card,.product-card,.route-card,.compliance-card";

  function textOf(el){return (el.textContent||"").toLowerCase();}
  function clamp(n,min,max){return Math.max(min,Math.min(max,n));}
  function purityScore(t){
    if(t.includes("7n")||t.includes("99.99999")) return 98;
    if(t.includes("6n+")||t.includes("99.9999")) return 92;
    if(t.includes("6n")||t.includes("99.999")) return 86;
    if(t.includes("5n5")||t.includes("99.9995")) return 78;
    if(t.includes("high-purity")||t.includes("ultra-high")) return 72;
    return 58;
  }
  function riskScore(t){
    let score=32;
    ["defense","export","controlled","china","ree","rare earth","aerospace","risk","end-use","compliance"].forEach(k=>{if(t.includes(k)) score+=7;});
    ["coa","gdms","icp-ms","traceability","sds","tds","scsp","batch"].forEach(k=>{if(t.includes(k)) score-=4;});
    return clamp(score,12,94);
  }
  function controlScore(t){
    let score=50;
    ["gdms","icp-ms","coa","traceability","batch","scsp","sds","tds","verification","review"].forEach(k=>{if(t.includes(k)) score+=5;});
    return clamp(score,40,98);
  }
  function readinessScore(t){
    let score=46;
    ["ready","structured","approved","qualification","documentation","logistics","incoterms","rfq"].forEach(k=>{if(t.includes(k)) score+=5;});
    return clamp(score,35,96);
  }
  function labelRisk(n){return n>=70?"High":(n>=45?"Medium":"Low");}
  function ensureHeatmap(card){
    if(card.querySelector(":scope > .yyk-heatmap")) return;
    const t=textOf(card);
    const purity=purityScore(t), risk=riskScore(t), control=controlScore(t), ready=readinessScore(t);
    const heat=document.createElement("div");
    heat.className="yyk-heatmap";
    heat.innerHTML=`
      <div class="yyk-heatmap-title"><span>Qualification Heatmap</span><span>${labelRisk(risk)} Risk</span></div>
      <div class="yyk-heatmap-grid">
        <div class="yyk-heat-cell" style="--score:${purity}%"><span class="yyk-heat-label">Purity</span><span class="yyk-heat-value">${purity}</span></div>
        <div class="yyk-heat-cell risk" style="--score:${risk}%"><span class="yyk-heat-label">Risk</span><span class="yyk-heat-value">${risk}</span></div>
        <div class="yyk-heat-cell" style="--score:${control}%"><span class="yyk-heat-label">Control</span><span class="yyk-heat-value">${control}</span></div>
        <div class="yyk-heat-cell" style="--score:${ready}%"><span class="yyk-heat-label">Ready</span><span class="yyk-heat-value">${ready}</span></div>
      </div>
      <div class="yyk-heat-note">Auto-scored from visible card content: purity claim, controlled-routing terms, documentation evidence and end-use risk language.</div>`;
    card.appendChild(heat);
  }
  function initHeatmaps(){document.querySelectorAll(cardSelector).forEach(ensureHeatmap);}
  function setDensity(mode){
    if(!densityModes.includes(mode)) mode="review";
    densityModes.forEach(m=>document.body.classList.remove("density-"+m));
    document.body.classList.add("density-"+mode);
    document.querySelectorAll(".density-btn").forEach(btn=>btn.classList.toggle("active",btn.dataset.density===mode));
    try{localStorage.setItem("yykDensityMode",mode)}catch(e){}
  }
  function initDensity(){
    document.querySelectorAll(".density-btn").forEach(btn=>btn.addEventListener("click",()=>setDensity(btn.dataset.density)));
    let saved="review";
    try{saved=localStorage.getItem("yykDensityMode")||"review"}catch(e){}
    setDensity(saved);
  }
  function initAutoResize(){
    if(!("ResizeObserver" in window)) return;
    const ro=new ResizeObserver(entries=>{
      entries.forEach(entry=>{entry.target.style.setProperty("--card-content-height", Math.ceil(entry.contentRect.height)+"px");});
    });
    document.querySelectorAll(cardSelector).forEach(card=>ro.observe(card));
  }
  function init(){initDensity();initHeatmaps();initAutoResize();}
  if(document.readyState==="loading") document.addEventListener("DOMContentLoaded",init); else init();
})();
