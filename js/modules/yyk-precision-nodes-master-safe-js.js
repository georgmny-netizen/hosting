(function(){
  function ready(fn){ if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',fn,{once:true});}else{fn();} }
  ready(function(){
    var map=document.getElementById('yykFooterLogisticsMap');
    if(!map) return;

    /* Strip older direct listeners without touching tables, routes or SVG geometry. */
    Array.prototype.slice.call(map.querySelectorAll('.port-node')).forEach(function(node){
      var clone=node.cloneNode(true);
      node.parentNode.replaceChild(clone,node);
    });

    var ports=Array.prototype.slice.call(map.querySelectorAll('.port-node'));
    var panel=map.querySelector('.yyk-proof-card-master');
    var routeGroups=Array.prototype.slice.call(map.querySelectorAll('.route-group,.yyk-logistics-route'));
    var lockedPort=null;

    var data={
      Malaysia:{lane:'KUANTAN PORT · ORIGIN NODE',batch:'BATCH MY-YYK-6N-0426',lot:'LOT MY-ORIGIN-0426',docs:['COA','ORIGIN REVIEW','SDS','PACKING LIST','EXPORT REVIEW']},
      Busan:{lane:'BUSAN QC HUB',batch:'BATCH KR-YYK-7N-0550',lot:'LOT KR-YYK-7N-0550',docs:['COA','GDMS/ICP-MS','SDS','PACKING LIST','EXPORT REVIEW']},
      Shanghai:{lane:'BUSAN → SHANGHAI',batch:'BATCH CN-YYK-6N-0426',lot:'LOT CN-YYK-6N-0426',docs:['COA','GDMS/ICP-MS','SDS','PACKING LIST','EXPORT REVIEW']},
      Yokohama:{lane:'BUSAN → YOKOHAMA',batch:'BATCH JP-YYK-6N-0988',lot:'LOT JP-YYK-6N-0988',docs:['COA','GDMS/ICP-MS','SDS','PACKING LIST','EXPORT REVIEW']},
      Kaohsiung:{lane:'BUSAN → KAOHSIUNG',batch:'BATCH TW-YYK-7N-0211',lot:'LOT TW-YYK-7N-0211',docs:['COA','GDMS/ICP-MS','SDS','PACKING LIST','EXPORT REVIEW']},
      Incheon:{lane:'BCP → INCHEON',batch:'BATCH KR-YYK-7N-0612',lot:'LOT KR-YYK-7N-0612',docs:['COA','GDMS/ICP-MS','SDS','PACKING LIST','EXPORT REVIEW']},
      Niigata:{lane:'BCP → NIIGATA',batch:'BATCH JP-YYK-7N-0344',lot:'LOT JP-YYK-7N-0344',docs:['COA','GDMS/ICP-MS','SDS','PACKING LIST','EXPORT REVIEW']},
      HongKong:{lane:'FLEX ROUTE → HONG KONG',batch:'BATCH HK-YYK-6N-0187',lot:'LOT HK-YYK-6N-0187',docs:['COA','GDMS/ICP-MS','SDS','PACKING LIST','EXPORT REVIEW']},
      Qingdao:{lane:'BUSAN → QINGDAO',batch:'BATCH CN-YYK-6N-0531',lot:'LOT CN-YYK-6N-0531',docs:['COA','GDMS/ICP-MS','SDS','PACKING LIST','EXPORT REVIEW']},
      Tianjin:{lane:'COMPLIANCE HOLD → TIANJIN',batch:'BATCH CN-YYK-7N-0093',lot:'LOT CN-YYK-7N-0093',docs:['COA','GDMS/ICP-MS','EUC','SANCTIONS SCREEN','EXPORT REVIEW']}
    };
    var routeMap={
      Malaysia:['malaysia-busan'],
      Busan:['malaysia-busan','busan-yokohama','busan-shanghai','busan-kaohsiung','busan-niigata','busan-hongkong','busan-qingdao','busan-tianjin'],
      Shanghai:['busan-shanghai'],
      Yokohama:['busan-yokohama'],
      Kaohsiung:['busan-kaohsiung'],
      Incheon:['incheon-yokohama','incheon-shanghai','incheon-kaohsiung','incheon-niigata','incheon-hongkong','incheon-qingdao','incheon-tianjin'],
      Niigata:['busan-niigata'],
      HongKong:['busan-hongkong'],
      Qingdao:['busan-qingdao'],
      Tianjin:['busan-tianjin']
    };

    function focusRoutes(name){
      var active=routeMap[name]||[];
      routeGroups.forEach(function(g){
        var route=g.getAttribute('data-route');
        var on=active.indexOf(route)!==-1;
        g.classList.toggle('is-active',on);
        g.classList.toggle('is-dim',!on);
      });
      ports.forEach(function(p){p.classList.toggle('is-route-active',p.getAttribute('data-port')===name);});
    }
    function clearRoutes(){
      routeGroups.forEach(function(g){g.classList.remove('is-active','is-dim');});
      ports.forEach(function(p){p.classList.remove('is-route-active');});
    }
    function closePanel(){
      if(panel) panel.classList.remove('is-open');
      map.removeAttribute('data-active-proof-port');
      ports.forEach(function(p){p.classList.remove('is-open','is-locked');});
      lockedPort=null;
      clearRoutes();
    }
    function openPanel(name,lock){
      var d=data[name];
      if(!panel||!d) return;
      var lane=panel.querySelector('[data-lane]');
      var batch=panel.querySelector('[data-batch]');
      var lot=panel.querySelector('[data-lot]');
      var docs=panel.querySelector('[data-docs]');
      if(lane) lane.textContent=d.lane;
      if(batch) batch.textContent=d.batch;
      if(lot) lot.textContent=d.lot;
      if(docs){
        docs.innerHTML='';
        d.docs.forEach(function(doc){
          var el=document.createElement('div');
          el.className='yyk-proof-card-doc';
          el.textContent=doc;
          docs.appendChild(el);
        });
      }
      panel.classList.add('is-open');
      map.setAttribute('data-active-proof-port',name);
      ports.forEach(function(p){
        var isCurrent=p.getAttribute('data-port')===name;
        p.classList.toggle('is-open',isCurrent);
        p.classList.toggle('is-locked',lock && isCurrent);
      });
      if(lock) lockedPort=name;
      focusRoutes(name);
    }

    ports.forEach(function(port){
      var name=port.getAttribute('data-port');
      port.setAttribute('role','button');
      port.setAttribute('aria-label','Open '+name+' logistics node data');
      port.addEventListener('mouseenter',function(){ if(!lockedPort) openPanel(name,false); });
      port.addEventListener('mouseleave',function(){ if(!lockedPort){ if(panel) panel.classList.remove('is-open'); port.classList.remove('is-open'); clearRoutes(); } });
      port.addEventListener('click',function(e){
        e.preventDefault();
        e.stopPropagation();
        var alreadyLocked=lockedPort===name;
        ports.forEach(function(p){p.classList.remove('is-locked');});
        openPanel(name,true);
        if(alreadyLocked){ openPanel(name,true); }
      });
    });
    map.addEventListener('click',function(e){
      if(e.target.closest && (e.target.closest('.port-node') || e.target.closest('.yyk-proof-card-master'))) return;
      closePanel();
    });
    if(panel){
      panel.addEventListener('click',function(e){e.stopPropagation();});
      var close=panel.querySelector('.yyk-proof-card-close');
      if(close){close.addEventListener('click',function(e){e.preventDefault();e.stopPropagation();closePanel();});}
    }
    document.addEventListener('click',function(e){
      if(!map.contains(e.target)) closePanel();
    });
  });
})();
