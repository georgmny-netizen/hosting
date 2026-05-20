(function(){
  function id(x){return document.getElementById(x)}
  function updateTier1Gate(){
    var docs=(id('tier1Docs')||{}).value||'complete';
    var dest=(id('tier1Destination')||{}).value||'APAC';
    var mat=(id('tier1Material')||{}).value||'High-purity metal';
    var out=id('tier1ReadinessOutput'); if(!out) return;
    var status='Approved for initial due diligence';
    var cls='tier1-status';
    var detail='Quote pack can be prepared with CoA, traceability audit trail, Incoterms 2020 route and standard compliance note.';
    if(docs==='partial'){status='Conditional — EUC pending'; cls='tier1-status warn'; detail='Initial review may proceed, but final quote release requires End-User Certificate and declared application before shipment confirmation.'}
    if(docs==='missing'){status='Suspended — controlled documents missing'; cls='tier1-status stop'; detail='RFQ is held until CoA scope, TDS/SDS and buyer/end-use file are completed. Commercial release is not recommended.'}
    if(/China|Other/.test(dest) && docs!=='missing'){status='Route-gated review'; cls='tier1-status warn'; detail='Destination-sensitive route requires manual export-control, consignee and end-use validation before final offer.'}
    out.innerHTML='<span class="'+cls+'">'+status+'</span><br><strong>'+mat+' · '+dest+'</strong><br>'+detail;
  }
  ['tier1Docs','tier1Destination','tier1Material'].forEach(function(x){var el=id(x); if(el) el.addEventListener('change',updateTier1Gate)});
  document.addEventListener('click',function(e){
    var tab=e.target.closest('[data-compliance-tab="tier1"]');
    if(tab) setTimeout(updateTier1Gate,30);
  });
  updateTier1Gate();
})();
