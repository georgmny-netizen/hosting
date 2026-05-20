(function(){
  'use strict';

  function compactRsi(){
    var panel = document.querySelector('#yykRegionalSynergyLivePanel');
    if(!panel) return;

    panel.setAttribute('data-yyk-layout', 'compact-kpi-widget');

    var drivers = document.querySelector('#yykRsiDrivers');
    if(drivers){
      var text = drivers.textContent || '';
      if(text.length > 150){
        drivers.setAttribute('title', text);
        drivers.textContent = text.slice(0, 147) + '…';
      }
    }

    var source = document.querySelector('#yykRsiLiveSource');
    if(source){
      var s = source.textContent || '';
      if(s.length > 90){
        source.setAttribute('title', s);
        source.textContent = s.slice(0, 87) + '…';
      }
    }
  }

  function init(){
    compactRsi();
    document.addEventListener('YYK:RSI_UPDATED', function(){
      setTimeout(compactRsi, 0);
    });
    setTimeout(compactRsi, 300);
    setTimeout(compactRsi, 1200);
  }

  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', init, {once:true});
  }else{
    init();
  }
})();
