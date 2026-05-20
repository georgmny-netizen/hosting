(function(){
 function killRSI(){
   ['yykRegionalSynergyLivePanel','yykRsiDrivers','yykRsiLiveSource'].forEach(function(id){
      var n=document.getElementById(id);
      if(n){
        n.remove();
      }
   });

   document.querySelectorAll('*').forEach(function(el){
      var txt=(el.textContent||'').trim();
      if(txt.startsWith('LIVE BACKEND · REGIONAL SYNERGY INDEX')){
         el.remove();
      }
   });
 }

 function injectExecutiveStrip(){
   var target=document.querySelector('#yyk-d26-executive-only .d26x-shell');
   if(!target || document.getElementById('yyk-rsi-executive-strip')) return;

   var wrap=document.createElement('div');
   wrap.innerHTML = `
     <div id="yyk-rsi-executive-strip">
       <div class="yyk-rsi-kpi"><strong>CN</strong><span>88%</span></div>
       <div class="yyk-rsi-kpi"><strong>KR</strong><span>94%</span></div>
       <div class="yyk-rsi-kpi"><strong>JP</strong><span>91%</span></div>
       <div class="yyk-rsi-kpi"><strong>TW</strong><span>95%</span></div>
     </div>
     <div id="yyk-rsi-executive-summary">
       Regional Synergy Index is reduced to executive KPI format. Full backend telemetry and route diagnostics are hidden from visible website flow and reserved for Audit/VDR backend dashboards.
     </div>
   `;
   target.appendChild(wrap);
 }

 function init(){
   killRSI();
   injectExecutiveStrip();
 }
 if(document.readyState==='loading'){
   document.addEventListener('DOMContentLoaded',init,{once:true});
 } else { init(); }
 setTimeout(init,300);
 setTimeout(init,1200);
})();
