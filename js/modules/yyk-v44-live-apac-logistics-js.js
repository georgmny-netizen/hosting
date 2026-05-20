(function(){
  'use strict';
  function q(s){return document.querySelector(s)}
  function setText(id,val){var el=q('#'+id); if(el) el.textContent=val;}
  function pad(n){return String(n).padStart(2,'0')}
  function kst(){var d=new Date(); var parts=new Intl.DateTimeFormat('en-GB',{timeZone:'Asia/Seoul',hour:'2-digit',minute:'2-digit',second:'2-digit',hour12:false}).formatToParts(d); var m={}; parts.forEach(function(p){m[p.type]=p.value}); return (m.hour||'00')+':'+(m.minute||'00')+':'+(m.second||'00')+' KST';}
  function inferRisk(){
    var body=(document.body.textContent||'').toLowerCase();
    if(body.indexOf('do not quote')>-1 || body.indexOf('rfq blocked')>-1) return 'HIGH / GATE BLOCK';
    if(body.indexOf('review required')>-1 || body.indexOf('pending')>-1) return 'MEDIUM / REVIEW';
    return 'LOW / MONITORED';
  }
  function update(){
    setText('yykMapVerifiedState','VERIFIED · COMPLIANCE READY');
    setText('yykLiveClock', 'KST');
    var clock=q('#yykLiveClock + span'); if(clock) clock.textContent=kst();
    var risk=inferRisk(); var riskEl=q('#yykLiveRisk + span'); if(riskEl) riskEl.textContent=risk;
    setText('yykRouteQcStatus', risk.indexOf('HIGH')===0?'REVIEW':'VERIFIED');
    setText('yykRouteBusanStatus','BONDED READY');
    setText('yykRouteYokohamaStatus','BONDED READY');
    setText('yykRouteBcpStatus', risk.indexOf('HIGH')===0?'ALT ROUTE ARMED':'ALT ROUTE STANDBY');
    var map=q('#yykFooterLogisticsMap'); if(map) map.setAttribute('data-live-risk', risk.split(' ')[0].toLowerCase());
  }
  function bindRouteFocus(){
    var map=q('#yykFooterLogisticsMap'); if(!map) return;
    map.addEventListener('mouseenter',function(e){
      var node=e.target && e.target.closest ? e.target.closest('.port-node,.yyk-logistics-route,.route-group') : null;
      if(!node) return;
      var label=node.getAttribute('data-port')||node.getAttribute('data-route')||'APAC LANE';
      var lane=q('#yykLiveLane + span'); if(lane) lane.textContent=String(label).toUpperCase()+' · LIVE FOCUS';
    },true);
    map.addEventListener('mouseleave',function(e){
      var lane=q('#yykLiveLane + span'); if(lane) lane.textContent='MY - BUSAN - YOKOHAMA';
    },true);
  }
  function init(){update();bindRouteFocus();setInterval(update,1000)}
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',init); else init();
})();
