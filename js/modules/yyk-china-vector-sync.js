(function(){
  function byId(id){return document.getElementById(id);}
  function chinaActive(){var d=byId('calcDestination');return !!(d && d.value==='china');}
  function applyChinaVector(){
    if(!chinaActive()) return;
    var title=byId('calcRouteTitle'), txt=byId('calcRouteText'), r=byId('calcRcepBenefit'), st=byId('calcStandard'), lead=byId('calcLeadTime'), docs=byId('calcRequiredDocs');
    if(title) title.textContent='Malaysia → South Korea QC Hub → Shanghai / Ningbo / Shenzhen';
    if(txt) txt.textContent='China Hub Logic resolved: Busan/Incheon → Shanghai Yangshan Deep Water Port with green verification bridge.';
    if(r) r.textContent='0% - 3.3% · China RCEP route under origin qualification';
    if(st) st.textContent='GB/T 20424-2025 Screening Active';
    if(lead) lead.textContent='Malaysia → South Korea QC Hub → Shanghai / Ningbo / Shenzhen · 5-9 days after release';
    if(docs) docs.textContent='Customs CIQ declaration · GB/T impurity verification · RCEP Certificate of Origin · CoA';
    document.querySelectorAll('.yyk-port[data-port*="Shanghai"]').forEach(function(p){p.classList.add('yyk-verified-live');});
    var state=byId('yykMapVerifiedState'); if(state) state.textContent='Verified · Korea → China customs vector active';
  }
  document.addEventListener('DOMContentLoaded',function(){
    var d=byId('calcDestination'); if(d){d.addEventListener('change',function(){setTimeout(applyChinaVector,45);});}
    applyChinaVector();
  });
  window.YYK_CHINA_VECTOR_SYNC=applyChinaVector;
})();
