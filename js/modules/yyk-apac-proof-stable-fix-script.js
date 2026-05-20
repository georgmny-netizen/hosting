(function(){
  function ready(fn){document.readyState==='loading'?document.addEventListener('DOMContentLoaded',fn,{once:true}):fn();}
  ready(function(){
    var map=document.getElementById('yykFooterLogisticsMap');
    if(!map)return;
    map.dataset.proofStableFix='1';
    var cityData={
      Malaysia:{lane:'KUANTAN PORT → KOREA HUB',batch:'MY-YYK-6N-0102',lot:'MY-YYK-6N-0102',status:'QC VERIFIED · COA MATCHED · TRACE LOCKED',chain:'ORIGIN → QC → DOCS → DISPATCH → RECEIVING',docs:['COA (GDMS/ICP-MS)','SDS','PACKING LIST','EXPORT REVIEW'],links:{batch:'#rfq',lot:'#rfq',coa:'#compliance',sds:'#compliance',packing:'#logistics',export:'#compliance'},dock:'malaysia-right'},
      Busan:{lane:'KOREA HUB → APAC PORTS',batch:'KR-YYK-7N-0550',lot:'KR-YYK-7N-0550',status:'CENTRAL QC & DISTRIBUTION HUB · COA MATCHED · TRACE LOCKED',chain:'ORIGIN → QC → DOCS → DISPATCH → RECEIVING',docs:['COA (GDMS/ICP-MS)','SDS','PACKING LIST','EXPORT REVIEW'],links:{batch:'#rfq',lot:'#rfq',coa:'#compliance',sds:'#compliance',packing:'#logistics',export:'#compliance'},dock:'busan-bridge'},
      Yokohama:{lane:'KOREA HUB → YOKOHAMA',batch:'JP-YYK-6N-0988',lot:'JP-YYK-6N-0988',status:'QC VERIFIED · COA MATCHED · TRACE LOCKED',chain:'ORIGIN → QC → DOCS → DISPATCH → RECEIVING',docs:['COA (GDMS/ICP-MS)','SDS','PACKING LIST','EXPORT REVIEW'],links:{batch:'#rfq',lot:'#rfq',coa:'#compliance',sds:'#compliance',packing:'#logistics',export:'#compliance'},dock:'below'},
      Shanghai:{lane:'KOREA HUB → SHANGHAI',batch:'CN-YYK-6N-0426',lot:'CN-YYK-6N-0426',status:'QC VERIFIED · COA MATCHED · TRACE LOCKED',chain:'ORIGIN → QC → DOCS → DISPATCH → RECEIVING',docs:['COA (GDMS/ICP-MS)','SDS','PACKING LIST','EXPORT REVIEW'],links:{batch:'#rfq',lot:'#rfq',coa:'#compliance',sds:'#compliance',packing:'#logistics',export:'#compliance'},dock:'shanghai-left'},
      Kaohsiung:{lane:'KOREA HUB → KAOHSIUNG',batch:'TW-YYK-7N-0211',lot:'TW-YYK-7N-0211',status:'QC VERIFIED · COA MATCHED · TRACE LOCKED',chain:'ORIGIN → QC → DOCS → DISPATCH → RECEIVING',docs:['COA (GDMS/ICP-MS)','SDS','PACKING LIST','EXPORT REVIEW'],links:{batch:'#rfq',lot:'#rfq',coa:'#compliance',sds:'#compliance',packing:'#logistics',export:'#compliance'},dock:'below'},
      Incheon:{lane:'KOREA HUB → INCHEON',batch:'KR-YYK-7N-0612',lot:'KR-YYK-7N-0612',status:'BCP ROUTE · COA MATCHED · TRACE LOCKED',chain:'ORIGIN → QC → DOCS → DISPATCH → RECEIVING',docs:['COA (GDMS/ICP-MS)','SDS','PACKING LIST','EXPORT REVIEW'],links:{batch:'#rfq',lot:'#rfq',coa:'#compliance',sds:'#compliance',packing:'#logistics',export:'#compliance'},dock:'below'},
      Niigata:{lane:'KOREA HUB → NIIGATA',batch:'JP-YYK-7N-0344',lot:'JP-YYK-7N-0344',status:'BCP ROUTE · COA MATCHED · TRACE LOCKED',chain:'ORIGIN → QC → DOCS → DISPATCH → RECEIVING',docs:['COA (GDMS/ICP-MS)','SDS','PACKING LIST','EXPORT REVIEW'],links:{batch:'#rfq',lot:'#rfq',coa:'#compliance',sds:'#compliance',packing:'#logistics',export:'#compliance'},dock:'below'},
      HongKong:{lane:'KOREA HUB → HONG KONG',batch:'HK-YYK-6N-0187',lot:'HK-YYK-6N-0187',status:'QC VERIFIED · COA MATCHED · TRACE LOCKED',chain:'ORIGIN → QC → DOCS → DISPATCH → RECEIVING',docs:['COA (GDMS/ICP-MS)','SDS','PACKING LIST','EXPORT REVIEW'],links:{batch:'#rfq',lot:'#rfq',coa:'#compliance',sds:'#compliance',packing:'#logistics',export:'#compliance'},dock:'below'},
      Qingdao:{lane:'KOREA HUB → QINGDAO',batch:'CN-YYK-6N-0531',lot:'CN-YYK-6N-0531',status:'QC VERIFIED · COA MATCHED · TRACE LOCKED',chain:'ORIGIN → QC → DOCS → DISPATCH → RECEIVING',docs:['COA (GDMS/ICP-MS)','SDS','PACKING LIST','EXPORT REVIEW'],links:{batch:'#rfq',lot:'#rfq',coa:'#compliance',sds:'#compliance',packing:'#logistics',export:'#compliance'},dock:'below'},
      Tianjin:{lane:'KOREA HUB → TIANJIN',batch:'CN-YYK-7N-0093',lot:'CN-YYK-7N-0093',status:'COMPLIANCE HOLD · EUC REQUIRED · REVIEW ACTIVE',chain:'ORIGIN → QC → DOCS → COMPLIANCE REVIEW → DISPATCH',docs:['COA (GDMS/ICP-MS)','SDS','EUC','SANCTIONS SCREEN','EXPORT REVIEW'],links:{batch:'#rfq',lot:'#rfq',coa:'#compliance',sds:'#compliance',packing:'#logistics',export:'#compliance'},dock:'below'}
    };
    window.cityData=cityData;
    var oldPanels=map.querySelectorAll('.yyk-proof-card-master,.yyk-proof-card-final,.yyk-data-lane-card,.yyk-bmap-proof-card');
    oldPanels.forEach(function(p){p.classList.remove('is-open','is-visible');p.style.display='none';});
    var panel=document.getElementById('yykProofModeStablePanel');
    if(!panel){
      panel=document.createElement('div');panel.id='yykProofModeStablePanel';panel.setAttribute('role','dialog');panel.setAttribute('aria-label','Proof Mode Verified Sample');
      panel.innerHTML='<div class="yyk-stable-proof-head"><div><div class="yyk-stable-proof-title">PROOF MODE · VERIFIED SAMPLE</div><div class="yyk-stable-proof-status" data-status></div></div><button type="button" class="yyk-stable-proof-close" aria-label="Close Proof Mode">&times;</button></div><table class="yyk-stable-proof-table"><tbody><tr><th>LANE</th><td><a class="yyk-stable-value" data-lane href="#rfq"></a></td></tr><tr><th>BATCH ID</th><td><a class="yyk-stable-value" data-batch href="#rfq"></a></td></tr><tr><th>LOT ID</th><td><a class="yyk-stable-value" data-lot href="#rfq"></a></td></tr><tr><th>CHAIN</th><td data-chain></td></tr><tr><th>DOCS</th><td data-docs></td></tr></tbody></table><a href="#rfq" class="yyk-stable-proof-rfq">REQUEST RFQ FOR THIS LANE</a><button type="button" class="yyk-stable-proof-export">[↓ EXPORT BATCH REPORT</button>';
      map.appendChild(panel);
    }
    var badge=map.querySelector('.yyk-stable-proof-badge');
    if(!badge){badge=document.createElement('div');badge.className='yyk-stable-proof-badge';map.appendChild(badge);}
    function clonePorts(){
      var nodes=[].slice.call(map.querySelectorAll('.port-node'));
      return nodes.map(function(n){var c=n.cloneNode(true);n.parentNode.replaceChild(c,n);return c;}).filter(function(p){return cityData[p.getAttribute('data-port')];});
    }
    var ports=clonePorts();
    function rectOf(el){var m=map.getBoundingClientRect(),r=el.getBoundingClientRect();return{left:r.left-m.left,right:r.right-m.left,top:r.top-m.top,bottom:r.bottom-m.top,width:r.width,height:r.height,cx:r.left-m.left+r.width/2,cy:r.top-m.top+r.height/2};}
    function dotOf(port){return port.querySelector('.port-dot')||port.querySelector('.precision-core')||port;}
    function labelOf(port){return port.querySelector('.port-label')||port.querySelector('text')||port;}
    function clamp(n,a,b){return Math.max(a,Math.min(b,n));}
    function safeTop(){var h=map.querySelector('.map-head,.yyk-map-head');return h?rectOf(h).bottom+110:110;}
    function normalizeNode(port){
      var city=port.getAttribute('data-port'),size=city==='Busan'?12:8,hit=city==='Busan'?40:34,dot=dotOf(port);
      if(dot&&dot.tagName&&dot.tagName.toLowerCase()==='rect'){
        var r=rectOf(dot),cx=parseFloat(dot.getAttribute('x')||0)+(parseFloat(dot.getAttribute('width')||size)/2),cy=parseFloat(dot.getAttribute('y')||0)+(parseFloat(dot.getAttribute('height')||size)/2);
        if(!isFinite(cx)||!isFinite(cy)){cx=r.cx;cy=r.cy;}
        dot.setAttribute('width',size);dot.setAttribute('height',size);dot.setAttribute('x',(cx-size/2).toFixed(1));dot.setAttribute('y',(cy-size/2).toFixed(1));
        var hitbox=port.querySelector('.yyk-stable-hitbox');
        if(!hitbox){hitbox=document.createElementNS('http://www.w3.org/2000/svg','rect');hitbox.setAttribute('class','yyk-stable-hitbox');port.insertBefore(hitbox,port.firstChild);}
        hitbox.setAttribute('x',(cx-hit/2).toFixed(1));hitbox.setAttribute('y',(cy-hit/2).toFixed(1));hitbox.setAttribute('width',hit);hitbox.setAttribute('height',hit);
      }
      port.setAttribute('role','button');port.setAttribute('tabindex','0');port.style.pointerEvents='auto';if(port.parentNode)port.parentNode.appendChild(port);
    }
    ports.forEach(normalizeNode);
    var locked=null;
    function fill(city){
      var d=cityData[city];panel.dataset.port=city;panel.querySelector('[data-status]').textContent=d.status;var lane=panel.querySelector('[data-lane]');lane.textContent=d.lane;lane.href=d.links.batch||'#rfq';var batch=panel.querySelector('[data-batch]');batch.textContent=d.batch;batch.href=d.links.batch||'#rfq';batch.setAttribute('data-copy-value',d.batch);var lot=panel.querySelector('[data-lot]');lot.textContent=d.lot;lot.href=d.links.lot||'#rfq';lot.setAttribute('data-copy-value',d.lot);panel.querySelector('[data-chain]').textContent=d.chain;var docs=panel.querySelector('[data-docs]');docs.innerHTML='';d.docs.forEach(function(doc){var a=document.createElement('a');a.className='yyk-stable-proof-link';a.textContent=doc;a.href=doc.indexOf('COA')===0?d.links.coa:(doc==='SDS'?d.links.sds:(doc==='PACKING LIST'?d.links.packing:d.links.export));docs.appendChild(a);});
    }
    function panelSize(){panel.style.display='block';panel.style.visibility='hidden';var s={w:panel.offsetWidth||480,h:panel.offsetHeight||300};panel.style.visibility='';return s;}
    function dock(city){
      panel.style.left='auto';panel.style.top='auto';panel.style.right='20px';panel.style.bottom='20px';panel.style.visibility='';
    }
    function show(city,sticky){if(!cityData[city])return;locked=sticky?city:null;fill(city);panel.classList.add('is-open');map.setAttribute('data-proof-open','1');ports.forEach(function(p){var on=p.getAttribute('data-port')===city;p.classList.toggle('is-open',on);p.classList.toggle('is-locked',sticky&&on);});badge.classList.remove('is-open');dock(city);}
    function close(force){if(locked&&!force)return;locked=null;panel.classList.remove('is-open');badge.classList.remove('is-open');map.removeAttribute('data-proof-open');ports.forEach(function(p){p.classList.remove('is-open','is-locked');});}
    window.showTable=function(city){show(city,true);}
    function showBadge(city){if(locked||!cityData[city])return;var r=rectOf(dotOf(map.querySelector('.port-node[data-port="'+city+'"]')));badge.textContent='BATCH: '+cityData[city].batch;badge.style.left=Math.round(r.cx+14)+'px';badge.style.top=Math.round(r.cy-28)+'px';badge.classList.add('is-open');}
    function printReport(){var d=cityData[panel.dataset.port];if(!d){window.print();return;}var old=document.getElementById('yykStablePrintReport');if(old)old.remove();var sec=document.createElement('section');sec.id='yykStablePrintReport';sec.innerHTML='<h1>YONGYEOKYO Corporate Header</h1><p>APAC Proof Mode · Verified Sample</p><table><tbody><tr><th>BATCH ID</th><td>'+d.batch+'</td></tr><tr><th>LOT ID</th><td>'+d.lot+'</td></tr><tr><th>LANE</th><td>'+d.lane+'</td></tr><tr><th>STATUS</th><td>'+d.status+'</td></tr><tr><th>CHAIN</th><td>'+d.chain+'</td></tr></tbody></table><p style="margin-top:32px;font-weight:700">Verified by Representative Director / CEO Kim Irina</p><div class="yyk-certified-export-footer">This document is a digital export from the YONGYEOKYO APAC Terminal. Company profile reference: Kim Irina, Representative Director / CEO. Representative Director / CEO Kim Irina · Company Profile ·</div>';document.body.appendChild(sec);document.body.classList.add('yyk-print-proof-active');window.print();setTimeout(function(){document.body.classList.remove('yyk-print-proof-active');sec.remove();},350);}
    ports.forEach(function(port){var city=port.getAttribute('data-port');port.addEventListener('mouseenter',function(e){showBadge(city);},true);port.addEventListener('mouseleave',function(e){if(!locked)badge.classList.remove('is-open');},true);port.addEventListener('click',function(e){e.preventDefault();e.stopPropagation();e.stopImmediatePropagation();show(city,true);if(window.yykSelectPort)window.yykSelectPort(city);},true);port.addEventListener('keydown',function(e){if(e.key==='Enter'||e.key===' '){e.preventDefault();e.stopPropagation();show(city,true);}},true);});
    panel.addEventListener('click',function(e){e.stopPropagation();var copy=e.target.closest&&e.target.closest('[data-copy-value]');if(copy&&navigator.clipboard){navigator.clipboard.writeText(copy.getAttribute('data-copy-value')).catch(function(){});}if(e.target.closest&&e.target.closest('.yyk-stable-proof-export')){e.preventDefault();printReport();}},true);
    panel.querySelector('.yyk-stable-proof-close').addEventListener('click',function(e){e.preventDefault();e.stopPropagation();close(true);},true);
    map.addEventListener('click',function(e){if(e.target.closest&&(e.target.closest('.port-node')||e.target.closest('#yykProofModeStablePanel')))return;close(true);},true);
    document.addEventListener('click',function(e){if(!map.contains(e.target))close(true);},true);
    window.addEventListener('resize',function(){if(locked)dock(locked);},true);
  });
})();
