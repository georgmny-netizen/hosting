(function(){
  function qa(s){return Array.prototype.slice.call(document.querySelectorAll(s))}
  document.addEventListener('click',function(e){
    var tab=e.target.closest('.yyk-supply-tab');
    if(tab){var k=tab.getAttribute('data-supply-tab');qa('.yyk-supply-tab').forEach(function(x){x.classList.toggle('active',x===tab)});qa('.yyk-supply-panel').forEach(function(p){p.classList.toggle('active',p.getAttribute('data-supply-panel')===k)});return;}
    if(e.target && e.target.id==='runEucCheck'){
      var vals=['eucEntity','eucUse','eucCountry'].map(function(id){var el=document.getElementById(id);return el?el.value:'warn'});
      var res=document.getElementById('eucResult'); if(!res) return;
      var ok=vals.every(function(v){return v==='ok'});
      res.className='yyk-euc-result '+(ok?'ok':'warn');
      res.textContent=ok?'APPROVED: EUC fields are aligned. Shipment may proceed to sanctions screening and bonded release gate.':'BLOCKED: EUC ambiguity detected. Correct legal name, end-use or country of use before cargo release.';
    }
  });
})();
