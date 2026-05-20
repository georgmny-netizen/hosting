(function(){
  var products=[
    {key:'cu',sym:'Cu',name:'Copper 6N',grade:'6N ingot / powder',margin:74,risk:36,hedge:'LME proxy hedge',lead:'24-48h hub-ready'},
    {key:'al',sym:'Al',name:'Aluminum 6N',grade:'6N ingot',margin:67,risk:32,hedge:'FX + inventory lock',lead:'24-48h bonded'},
    {key:'zn',sym:'Zn',name:'Zinc 5N',grade:'5N powder',margin:61,risk:43,hedge:'price buffer required',lead:'48h after QC'},
    {key:'ree',sym:'RE',name:'Rare Earths',grade:'RFQ-only purity',margin:83,risk:58,hedge:'contract hedge only',lead:'route pre-clearance'}
  ];
  var marketRisk={kr:4,jp:7,tw:9,cn:15};
  var hubRisk={kuantan:3,busan:5,yokohama:8,hk:10};
  var volumeMargin={sample:-8,standard:0,bulk:9};
  function $(id){return document.getElementById(id)}
  function clamp(n,a,b){return Math.max(a,Math.min(b,n))}
  function render(){
    var grid=$('productProfitRiskGrid'); if(!grid) return;
    var market=($('pprMarket')||{}).value||'kr';
    var hub=($('pprHub')||{}).value||'kuantan';
    var volume=($('pprVolume')||{}).value||'standard';
    var vol=parseInt((($('pprVolatility')||{}).value||38),10);
    grid.innerHTML=products.map(function(p){
      var profit=clamp(p.margin+volumeMargin[volume]-Math.round(vol/10),18,96);
      var risk=clamp(p.risk+marketRisk[market]+hubRisk[hub]+Math.round(vol/6),12,98);
      var readiness=(profit>=58 && risk<=72)?'EXECUTION READY':'CONTROL HOLD';
      var cls=readiness==='EXECUTION READY'?'':' hold';
      return '<article class="product-profit-risk-card '+(readiness==='EXECUTION READY'?'active':'')+'" data-product="'+p.key+'">'+
        '<div><div class="ticker"><div><div class="sym">'+p.sym+'</div><div class="product-profit-risk-note">'+p.name+'</div></div><div class="grade">'+p.grade+'</div></div>'+
        '<div class="product-profit-risk-metrics"><div class="product-profit-risk-metric"><span class="k">Profit Lens</span><span class="v">'+profit+'%</span></div><div class="product-profit-risk-metric"><span class="k">Risk Score</span><span class="v">'+risk+'</span></div><div class="product-profit-risk-metric"><span class="k">Hedge</span><span class="v">'+p.hedge+'</span></div><div class="product-profit-risk-metric"><span class="k">Logistics</span><span class="v">'+p.lead+'</span></div></div>'+
        '<div class="product-profit-risk-bar" aria-hidden="true"><span style="width:'+profit+'%"></span></div></div>'+
        '<div><div class="product-profit-risk-status'+cls+'">'+readiness+'</div><div class="product-profit-risk-note">Signal source: catalog profile + market + hub + volume + volatility. No URL/nav mutation.</div></div>'+ 
      '</article>';
    }).join('');
  }
  document.addEventListener('DOMContentLoaded',function(){['pprMarket','pprHub','pprVolume','pprVolatility'].forEach(function(id){var el=$(id); if(el){el.addEventListener('input',render);el.addEventListener('change',render)}});render();});
})();
