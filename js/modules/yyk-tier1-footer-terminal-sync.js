(function(){
  function byId(id){return document.getElementById(id);}
  function pad(n){return String(n).padStart(2,'0');}
  function setClock(){
    var now=new Date();
    var kst=new Date(now.toLocaleString('en-US',{timeZone:'Asia/Seoul'}));
    var jst=new Date(now.toLocaleString('en-US',{timeZone:'Asia/Tokyo'}));
    var cst=new Date(now.toLocaleString('en-US',{timeZone:'Asia/Taipei'}));
    var sh=new Date(now.toLocaleString('en-US',{timeZone:'Asia/Shanghai'}));
    var k=byId('yykKstClock'),j=byId('yykJstClock'),t=byId('yykCstClock'),shEl=byId('yykShanghaiClock');
    if(k)k.textContent=pad(kst.getHours())+':'+pad(kst.getMinutes());
    if(j)j.textContent=pad(jst.getHours())+':'+pad(jst.getMinutes());
    if(t)t.textContent=pad(cst.getHours())+':'+pad(cst.getMinutes());
    if(shEl)shEl.textContent=pad(sh.getHours())+':'+pad(sh.getMinutes());
  }
  function readReady(){
    var nodes=['calcRcepBenefit','calcRouteText','calcRequiredDocs','apacCalcRcep','apacCalcLogistics','decisionRcepHeadline','rfqComplianceDynamic'].map(byId);
    var txt=nodes.map(function(n){return n?n.textContent:'';}).join(' ');
    var dest=byId('calcDestination');
    return /Ready|Controlled|0%|0% - 3.3%|RCEP|Operational|Verified|preferential/i.test(txt) || !!(dest && dest.value);
  }
  function syncGreen(){
    var on=readReady();
    document.querySelectorAll('.yyk-director-seal,#yykDirectorSeal').forEach(function(el){
      el.classList.toggle('yyk-verified-live',on);
      el.classList.toggle('yyk-verified-live-all',on);
      if(el.id==='yykDirectorSeal'){el.setAttribute('aria-pressed',on?'true':'false');}
    });
    document.querySelectorAll('.yyk-port').forEach(function(p){p.classList.toggle('yyk-verified-live',on);});
    var panel=byId('yykFooterSystemStatus'); if(panel){panel.classList.toggle('yyk-live',on);}
    var map=byId('yykFooterLogisticsMap'); if(map){map.classList.toggle('yyk-live',on);}
    var state=byId('yykMapVerifiedState'); if(state){state.textContent=on?'VERIFIED · COMPLIANCE READY':'VERIFIED · RCEP EVIDENCE BRIDGE';}
  }
  function bindSeal(){
    document.querySelectorAll('.yyk-director-seal,#yykDirectorSeal').forEach(function(el){
      if(el.dataset.yykSealBound)return; el.dataset.yykSealBound='1';
      el.setAttribute('role','button'); el.setAttribute('tabindex','0');
      var go=function(e){if(e)e.preventDefault(); var target=byId('compliance-calculator')||byId('apacLiveCalculator'); if(target){target.scrollIntoView({behavior:'smooth',block:'center'}); target.classList.add('yyk-rcep-focus'); setTimeout(function(){target.classList.remove('yyk-rcep-focus');},1600);}};
      el.addEventListener('click',go);
      el.addEventListener('keydown',function(e){if(e.key==='Enter'||e.key===' '){go(e);}});
    });
  }
  document.addEventListener('DOMContentLoaded',function(){
    setClock(); setInterval(setClock,30000); bindSeal(); syncGreen();
    ['calcDestination','calcMaterial','decisionDestination','decisionMaterial','rfqMarket'].forEach(function(id){var el=byId(id); if(el){el.addEventListener('change',function(){setTimeout(syncGreen,40);}); el.addEventListener('input',function(){setTimeout(syncGreen,40);});}});
    setInterval(syncGreen,1500);
  });
  window.YYK_TIER1_FOOTER_SYNC=syncGreen;
})();
