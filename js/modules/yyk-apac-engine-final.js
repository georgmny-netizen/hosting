(function(){
  'use strict';
  var DATA={
    Malaysia:{batch:'MY-YYK-6N-0102',lot:'MY-YYK-6N-0102',lane:'MALAYSIA → KOREA HUB',origin:'Malaysia Production',status:'QC VERIFIED · COA MATCHED · TRACE LOCKED',chain:'ORIGIN → QC → DOCS → DISPATCH → RECEIVING',route:'malaysia-busan'},
    Busan:{batch:'KR-YYK-7N-0550',lot:'KR-YYK-7N-0550',lane:'KOREA HUB → APAC PORTS',origin:'CENTRAL QC & DISTRIBUTION HUB',status:'CENTRAL QC & DISTRIBUTION HUB · TRACE LOCKED',chain:'ORIGIN → QC → DOCS → DISPATCH → RECEIVING',route:'busan-yokohama'},
    Shanghai:{batch:'CN-YYK-6N-0426',lot:'CN-YYK-6N-0426',lane:'KOREA HUB → SHANGHAI',origin:'KOREA HUB',status:'QC VERIFIED · COA MATCHED · TRACE LOCKED',chain:'ORIGIN → QC → DOCS → DISPATCH → RECEIVING',route:'busan-shanghai'},
    Yokohama:{batch:'JP-YYK-6N-0988',lot:'JP-YYK-6N-0988',lane:'KOREA HUB → YOKOHAMA',origin:'KOREA HUB',status:'QC VERIFIED · COA MATCHED · TRACE LOCKED',chain:'ORIGIN → QC → DOCS → DISPATCH → RECEIVING',route:'busan-yokohama'},
    Kaohsiung:{batch:'TW-YYK-7N-0211',lot:'TW-YYK-7N-0211',lane:'KOREA HUB → KAOHSIUNG',origin:'KOREA HUB',status:'QC VERIFIED · COA MATCHED · TRACE LOCKED',chain:'ORIGIN → QC → DOCS → DISPATCH → RECEIVING',route:'busan-kaohsiung'},
    Incheon:{batch:'KR-YYK-7N-0612',lot:'KR-YYK-7N-0612',lane:'KOREA HUB → INCHEON',origin:'KOREA HUB',status:'BCP ROUTE · COA MATCHED · TRACE LOCKED',chain:'ORIGIN → QC → DOCS → DISPATCH → RECEIVING',route:'incheon-yokohama'},
    Niigata:{batch:'JP-YYK-7N-0344',lot:'JP-YYK-7N-0344',lane:'KOREA HUB → NIIGATA',origin:'KOREA HUB',status:'BCP ROUTE · COA MATCHED · TRACE LOCKED',chain:'ORIGIN → QC → DOCS → DISPATCH → RECEIVING',route:'incheon-niigata'},
    HongKong:{batch:'HK-YYK-6N-0187',lot:'HK-YYK-6N-0187',lane:'KOREA HUB → HONG KONG',origin:'KOREA HUB',status:'QC VERIFIED · COA MATCHED · TRACE LOCKED',chain:'ORIGIN → QC → DOCS → DISPATCH → RECEIVING',route:'incheon-hongkong'},
    Qingdao:{batch:'CN-YYK-6N-0531',lot:'CN-YYK-6N-0531',lane:'KOREA HUB → QINGDAO',origin:'KOREA HUB',status:'QC VERIFIED · COA MATCHED · TRACE LOCKED',chain:'ORIGIN → QC → DOCS → DISPATCH → RECEIVING',route:'incheon-qingdao'},
    Tianjin:{batch:'CN-YYK-7N-0093',lot:'CN-YYK-7N-0093',lane:'KOREA HUB → TIANJIN',origin:'KOREA HUB',status:'COMPLIANCE HOLD · EUC REQUIRED · REVIEW ACTIVE',chain:'ORIGIN → QC → DOCS → COMPLIANCE REVIEW → DISPATCH',route:'incheon-tianjin'}
  };
  function ready(fn){if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',fn,{once:true});}else{fn();}}
  ready(function(){
    var map=document.getElementById('yykFooterLogisticsMap');
    if(!map||map.dataset.apacEngineFinal==='1')return;
    map.dataset.apacEngineFinal='1';
    map.setAttribute('data-proof-open','0');
    var svg=map.querySelector('svg');
    if(!svg)return;
    var oldCards=map.querySelectorAll('.yyk-proof-card,.yyk-proof-card-final,.yyk-proof-card-master,.terminal-card,.local-port-card');
    oldCards.forEach(function(n){n.style.display='none';n.setAttribute('aria-hidden','true');});
    map.querySelectorAll('.route-group[data-route="shanghai-kaohsiung"]').forEach(function(n){n.style.display='none';});
    var panel=document.createElement('div');
    panel.className='yyk-proof-card';
    panel.setAttribute('role','dialog');
    panel.setAttribute('aria-label','Proof Mode verified sample data');
    map.appendChild(panel);
    var badge=document.createElement('div');
    badge.className='yyk-apac-badge';
    map.appendChild(badge);
    var print=document.createElement('div');
    print.className='yyk-apac-print-report';
    document.body.appendChild(print);
    var locked=null;
    function portCenter(port){
      var dot=port.querySelector('.port-dot');
      return {x:parseFloat(dot.getAttribute('data-cx')||dot.getAttribute('x')||0),y:parseFloat(dot.getAttribute('data-cy')||dot.getAttribute('y')||0)};
    }
    function svgToMap(pt){
      var p=svg.createSVGPoint(); p.x=pt.x; p.y=pt.y;
      var m=svg.getScreenCTM();
      if(m){p=p.matrixTransform(m);}
      var r=map.getBoundingClientRect();
      return {x:p.x-r.left,y:p.y-r.top};
    }
    function clamp(n,min,max){return Math.max(min,Math.min(max,n));}
    function titleClearY(){
      var head=map.querySelector('.map-head,.yyk-map-head');
      if(!head)return 110;
      var hr=head.getBoundingClientRect(),mr=map.getBoundingClientRect();
      return (hr.bottom-mr.top)+110;
    }
    function positionFor(city, port, el){
      el.style.left='auto'; el.style.top='auto'; el.style.right='20px'; el.style.bottom='20px';
    }
    function render(city){
      var d=DATA[city];
      var docs='<a class="yyk-proof-link" href="#compliance" data-doc="coa">COA (GDMS/ICP-MS)</a><a class="yyk-proof-link" href="#compliance" data-doc="sds">SDS</a><a class="yyk-proof-link" href="#rfq" data-doc="packing">PACKING LIST</a><a class="yyk-proof-link" href="#compliance" data-doc="export">EXPORT REVIEW</a>';
      return '<div class="yyk-proof-head"><div><div class="yyk-proof-title">PROOF MODE · VERIFIED SAMPLE</div></div><button class="yyk-proof-close" type="button" aria-label="Close">&times;</button></div><div class="yyk-proof-status">'+d.status+'</div><table class="yyk-proof-table"><tr><th>Batch ID</th><td><span class="yyk-proof-copy" data-copy="'+d.batch+'">'+d.batch+'</span></td></tr><tr><th>Lot ID</th><td><span class="yyk-proof-copy" data-copy="'+d.lot+'">'+d.lot+'</span></td></tr><tr><th>Lane</th><td>'+d.lane+'</td></tr><tr><th>Origin</th><td>'+d.origin+'</td></tr><tr><th>Chain</th><td>'+d.chain+'</td></tr><tr><th>Docs</th><td>'+docs+'</td></tr></table><div class="yyk-proof-actions"><button type="button" class="yyk-proof-action" data-rfq="1">REQUEST RFQ FOR THIS LANE</button><button type="button" class="yyk-proof-action" data-export="1">[↓ EXPORT BATCH REPORT</button></div>';
    }
    function close(){
      locked=null; panel.classList.remove('is-visible'); badge.classList.remove('is-visible'); map.setAttribute('data-proof-open','0');
      map.querySelectorAll('.port-node.is-open,.port-node.is-active').forEach(function(n){n.classList.remove('is-open','is-active');});
      map.querySelectorAll('.route-group.is-active,.route-group.is-dim').forEach(function(n){n.classList.remove('is-active','is-dim');});
    }
    function routeState(city){
      var d=DATA[city];
      map.querySelectorAll('.route-group').forEach(function(r){r.classList.remove('is-active','is-dim'); if(d&&r.dataset.route===d.route){r.classList.add('is-active');}else{r.classList.add('is-dim');}});
    }
    function show(city,port,stick){
      var d=DATA[city]; if(!d)return;
      locked=stick?city:locked;
      panel.innerHTML=render(city);
      panel.classList.add('is-visible'); map.setAttribute('data-proof-open','1');
      map.querySelectorAll('.port-node.is-open,.port-node.is-active').forEach(function(n){n.classList.remove('is-open','is-active');});
      port.classList.add('is-open','is-active'); routeState(city);
      requestAnimationFrame(function(){positionFor(city,port,panel);});
    }
    function showBadge(city,port){
      var d=DATA[city]; if(!d)return;
      badge.textContent='LANE ACTIVE · '+d.batch;
      badge.classList.add('is-visible');
      var cv=svgToMap(portCenter(port));
      var leftBelow=['Shanghai','HongKong','Qingdao','Tianjin','Yokohama'];
      var bw=badge.offsetWidth||220;
      if(leftBelow.indexOf(city)!==-1){
        badge.style.left=clamp(cv.x-bw-14,12,map.clientWidth-bw-12)+'px';
        badge.style.top=clamp(cv.y+14,12,map.clientHeight-40)+'px';
      } else {
        badge.style.left=clamp(cv.x+14,12,map.clientWidth-250)+'px';
        badge.style.top=clamp(cv.y-38,12,map.clientHeight-40)+'px';
      }
    }
    function printReport(city){
      var d=DATA[city||locked]; if(!d)return;
      print.innerHTML='<h1>YONGYEOKYO CORPORATE HEADER</h1><p>APAC Verified Sample Batch Report</p><table><tr><th>BATCH ID</th><td>'+d.batch+'</td></tr><tr><th>LOT ID</th><td>'+d.lot+'</td></tr><tr><th>LANE</th><td>'+d.lane+'</td></tr><tr><th>ORIGIN</th><td>'+d.origin+'</td></tr><tr><th>CHAIN</th><td>'+d.chain+'</td></tr><tr><th>STATUS</th><td>'+d.status+'</td></tr></table><div class="sig">Verified by Representative Director / CEO Kim Irina</div><div class="yyk-certified-export-footer">This document is a digital export from the YONGYEOKYO APAC Terminal. Company profile reference: Kim Irina, Representative Director / CEO. Representative Director / CEO Kim Irina · Company Profile ·</div>';
      window.print();
    }
    function activateDoc(link){
      var target=link.getAttribute('href')||'#compliance';
      var type=link.getAttribute('data-doc')||'doc';
      try{sessionStorage.setItem('yykRequestedDoc',type);}catch(e){}
      var el=document.querySelector(target);
      if(el&&el.scrollIntoView)el.scrollIntoView({behavior:'smooth',block:'start'});
    }
    map.querySelectorAll('.port-node').forEach(function(original){
      var node=original.cloneNode(true); original.parentNode.replaceChild(node,original);
      var city=node.getAttribute('data-port'); var d=DATA[city]; if(!d)return;
      var dot=node.querySelector('.port-dot'); var cx=parseFloat(dot.getAttribute('data-cx')), cy=parseFloat(dot.getAttribute('data-cy'));
      var size=(city==='Busan')?12:8;
      dot.setAttribute('width',size); dot.setAttribute('height',size); dot.setAttribute('x',cx-size/2); dot.setAttribute('y',cy-size/2); dot.setAttribute('rx','0'); dot.setAttribute('ry','0');
      var hit=document.createElementNS('http://www.w3.org/2000/svg','rect');
      hit.setAttribute('class','yyk-apac-hitbox'); hit.setAttribute('x',cx-16); hit.setAttribute('y',cy-16); hit.setAttribute('width',32); hit.setAttribute('height',32);
      node.insertBefore(hit,node.firstChild);
      node.setAttribute('role','button'); node.setAttribute('tabindex','0'); node.setAttribute('aria-label','Open '+city+' Proof Mode data');
      node.addEventListener('mouseenter',function(){if(!locked)showBadge(city,node);});
      node.addEventListener('mouseleave',function(){if(!locked)badge.classList.remove('is-visible');});
      node.addEventListener('click',function(e){e.preventDefault();e.stopPropagation();close();show(city,node,true);if(window.yykSelectPort)window.yykSelectPort(city);});
      node.addEventListener('keydown',function(e){if(e.key==='Enter'||e.key===' '){e.preventDefault();close();show(city,node,true);}});
    });
    panel.addEventListener('click',function(e){
      e.stopPropagation();
      var closeBtn=e.target.closest('.yyk-proof-close'); if(closeBtn){close();return;}
      var cp=e.target.closest('[data-copy]'); if(cp){var v=cp.getAttribute('data-copy'); if(navigator.clipboard)navigator.clipboard.writeText(v); cp.textContent=v+' · COPIED'; setTimeout(function(){cp.textContent=v;},900); return;}
      var doc=e.target.closest('.yyk-proof-link'); if(doc){e.preventDefault();activateDoc(doc);return;}
      var rfq=e.target.closest('[data-rfq]'); if(rfq){var s=document.querySelector('[data-open-sogo],#openSogoDrawer,#rfq'); if(s&&s.click)s.click(); else if(document.getElementById('rfq'))document.getElementById('rfq').scrollIntoView({behavior:'smooth'}); return;}
      var exp=e.target.closest('[data-export]'); if(exp){printReport(locked);return;}
    });
    map.addEventListener('click',function(e){if(e.target.closest&&e.target.closest('.port-node,.yyk-proof-card'))return;close();});
    document.addEventListener('click',function(e){if(!map.contains(e.target))close();});
    window.addEventListener('resize',function(){if(!locked)return;var p=map.querySelector('.port-node[data-port="'+locked+'"]'); if(p)positionFor(locked,p,panel);});
  });
})();
