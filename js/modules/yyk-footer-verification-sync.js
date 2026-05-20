(function(){
  function byId(id){return document.getElementById(id);}
  function calculatorTarget(){return byId('apacLiveCalculator')||byId('compliance-calculator')||byId('decision-compliance-output')||byId('rfq');}
  function setLive(on){
    var seal=byId('yykDirectorSeal');
    if(seal){seal.classList.toggle('yyk-verified-live',!!on);seal.setAttribute('aria-pressed',on?'true':'false');}
    document.querySelectorAll('.yyk-port').forEach(function(p){p.classList.toggle('yyk-verified-live',!!on);});
    var state=byId('yykMapVerifiedState');
    if(state){state.textContent=on?'VERIFIED · COMPLIANCE READY':'VERIFIED · RCEP EVIDENCE BRIDGE';}
  }
  function resolveStatus(){
    var fields=['calcDestination','decisionDestination','rfqMarket'];
    var active=fields.some(function(id){var el=byId(id);return el && String(el.value||'').trim().length>0;});
    var txt=[byId('calcRcepBenefit'),byId('decisionRcepHeadline'),byId('apacCalcRcep'),byId('apacCalcLogistics')].map(function(el){return el?el.textContent:'';}).join(' ');
    return active || /Ready|Controlled|0%|RCEP|preferential/i.test(txt);
  }
  function sync(){setLive(resolveStatus());}
  function scrollToCalc(e){if(e){e.preventDefault();}var t=calculatorTarget();if(t){t.classList.add('yyk-rcep-focus');t.scrollIntoView({behavior:'smooth',block:'center'});setTimeout(function(){t.classList.remove('yyk-rcep-focus');},1600);}}
  document.addEventListener('DOMContentLoaded',function(){
    ['calcDestination','calcMaterial','decisionDestination','decisionMaterial','rfqMarket'].forEach(function(id){var el=byId(id);if(el){el.addEventListener('change',function(){setTimeout(sync,0);});el.addEventListener('input',function(){setTimeout(sync,0);});}});
    var seal=byId('yykDirectorSeal');
    if(seal){seal.addEventListener('click',scrollToCalc);seal.addEventListener('keydown',function(e){if(e.key==='Enter'||e.key===' '){scrollToCalc(e);}});}
    sync();
  });
  window.YYK_SYNC_GREEN_VERIFICATION=sync;
})();
