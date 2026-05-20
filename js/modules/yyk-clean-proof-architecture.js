(function(){
  function init(){
    var map=document.getElementById("yykFooterLogisticsMap");
    if(!map) return;

    // Remove any stale panels/cards created by older scripts.
    map.querySelectorAll(".yyk-proof-card-master,.yyk-unified-proof-card,.svg-city-cards,.svg-city-card").forEach(function(el){el.remove();});

    var panel=document.createElement("div");
    panel.className="yyk-proof-card-master";
    panel.innerHTML=[
      '<button class="yyk-proof-card-close" type="button" aria-label="Close">&times;</button>',
      '<div class="yyk-proof-card-head">PROOF MODE · VERIFIED SAMPLE</div>',
      '<div class="yyk-proof-card-verified">QC VERIFIED · COA MATCHED · TRACE LOCKED</div>',
      '<div class="yyk-proof-card-row"><span>LANE</span><span data-lane></span></div>',
      '<div class="yyk-proof-card-row"><span>BATCH ID</span><span data-batch></span></div>',
      '<div class="yyk-proof-card-row"><span>LOT ID</span><span data-lot></span></div>',
      '<div class="yyk-proof-card-chain">ORIGIN → QC → DOCS → DISPATCH → RECEIVING</div>',
      '<div class="yyk-proof-card-docs" data-docs></div>',
      '<a class="yyk-proof-card-rfq" href="#rfq">REQUEST RFQ FOR THIS LANE</a>'
    ].join("");
    map.appendChild(panel);

    var data={
      Busan:{
        lane:"BUSAN QC HUB",
        batch:"BATCH KR-YYK-6N-0426",
        lot:"LOT KR-YYK-6N-0426",
        docs:["COA","GDMS/ICP-MS","SDS","PACKING LIST","EXPORT REVIEW"]
      },
      Shanghai:{
        lane:"BUSAN → SHANGHAI",
        batch:"BATCH CN-YYK-6N-0426",
        lot:"LOT CN-YYK-6N-0426",
        docs:["COA","GDMS/ICP-MS","SDS","PACKING LIST","EXPORT REVIEW"]
      },
      Yokohama:{
        lane:"BUSAN → YOKOHAMA",
        batch:"BATCH JP-YYK-6N-0426",
        lot:"LOT JP-YYK-6N-0426",
        docs:["COA","GDMS/ICP-MS","SDS","PACKING LIST","EXPORT REVIEW"]
      },
      Kaohsiung:{
        lane:"BUSAN → KAOHSIUNG",
        batch:"BATCH TW-YYK-6N-0426",
        lot:"LOT TW-YYK-6N-0426",
        docs:["COA","GDMS/ICP-MS","SDS","PACKING LIST","EXPORT REVIEW"]
      }
    };

    function openCard(name){
      var d=data[name];
      if(!d) return;
      panel.querySelector("[data-lane]").textContent=d.lane;
      panel.querySelector("[data-batch]").textContent=d.batch;
      panel.querySelector("[data-lot]").textContent=d.lot;

      var grid=panel.querySelector("[data-docs]");
      grid.innerHTML="";
      d.docs.forEach(function(doc){
        var el=document.createElement("div");
        el.className="yyk-proof-card-doc";
        el.textContent=doc;
        grid.appendChild(el);
      });

      panel.classList.add("is-open");
      map.setAttribute("data-active-proof-port",name);
    }

    ["Busan","Shanghai","Yokohama","Kaohsiung"].forEach(function(name){
      var port=map.querySelector('.port-node[data-port="'+name+'"]');
      if(!port) return;
      port.addEventListener("click",function(e){
        e.preventDefault();
        e.stopPropagation();
        openCard(name);
      });
    });

    panel.querySelector(".yyk-proof-card-close").addEventListener("click",function(e){
      e.stopPropagation();
      panel.classList.remove("is-open");
      map.removeAttribute("data-active-proof-port");
    });
  }

  if(document.readyState==="loading"){
    document.addEventListener("DOMContentLoaded",init,{once:true});
  }else{
    init();
  }
})();
