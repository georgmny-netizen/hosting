(function(){
  const productProfiles={
    cu:{application:'Semiconductor',purity:'Ultra-high purity',form:'Ingot',qc:'Advanced analytical route',destination:'Japan / Taiwan / China'},
    al:{application:'Aerospace',purity:'Ultra-high purity',form:'Ingot',qc:'Batch-specific CoA',destination:'South Korea'},
    zn:{application:'Industrial Processing',purity:'Industrial purity',form:'Powder',qc:'Standard QC',destination:'APAC'},
    quality:{application:'Semiconductor',purity:'Ultra-high purity',form:'Sputtering Target',qc:'Customer-specific testing',destination:'Japan / Taiwan / China'},
    logistics:{application:'Industrial Processing',purity:'Custom',form:'Ingot',qc:'Batch-specific CoA',destination:'APAC'}
  };
  const setSelect=(id,value)=>{const el=document.getElementById(id); if(!el) return; const opt=[...el.options].find(o=>o.textContent.trim()===value); if(opt) el.value=opt.value; el.dispatchEvent(new Event('change',{bubbles:true}));};
  const applyProfile=(key)=>{const p=productProfiles[key]; if(!p) return; setSelect('rfqAutoApplication',p.application); setSelect('rfqAutoPurity',p.purity); setSelect('rfqAutoForm',p.form); setSelect('rfqAutoQC',p.qc); setSelect('rfqAutoDestination',p.destination); document.body.setAttribute('data-selected-trading-product',key); const rfq=document.getElementById('rfqAutoDecision'); if(rfq){rfq.setAttribute('data-product-handoff',key);}};
  document.addEventListener('click',function(e){const trigger=e.target.closest('[data-open-product]'); if(trigger) applyProfile(trigger.getAttribute('data-open-product')); if(e.target.closest('[data-lanthanex-rfq]')){setSelect('rfqAutoApplication','EV / Magnets');setSelect('rfqAutoPurity','Controlled REE');setSelect('rfqAutoForm','Oxide / Salt');setSelect('rfqAutoQC','Customer-specific testing');setSelect('rfqAutoDestination','Japan / Taiwan / China');document.body.setAttribute('data-selected-trading-product','ree');}});
})();
