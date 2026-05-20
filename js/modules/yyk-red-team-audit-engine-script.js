(function(){
  var engine=document.getElementById('redTeamAuditEngine'), open=document.getElementById('openRedTeamAudit'), close=document.getElementById('closeRedTeamAudit');
  function show(){engine.classList.add('active');engine.setAttribute('aria-hidden','false');document.body.classList.add('apex-modal-open')}
  function hide(){engine.classList.remove('active');engine.setAttribute('aria-hidden','true');document.body.classList.remove('apex-modal-open')}
  if(open)open.addEventListener('click',show); if(close)close.addEventListener('click',hide); if(engine)engine.addEventListener('click',function(e){if(e.target===engine)hide()});
  document.querySelectorAll('.rt-tab').forEach(function(btn){btn.addEventListener('click',function(){var key=btn.getAttribute('data-rt-tab');document.querySelectorAll('.rt-tab').forEach(function(x){x.classList.toggle('active',x===btn)});document.querySelectorAll('.rt-panel').forEach(function(p){p.classList.toggle('active',p.getAttribute('data-rt-panel')===key)})})});
  var answerMap={
    'Lab Service Agreement + GDMS Calibration Log':'Document response: Folder 11 / Laboratory Validation. Provide laboratory service agreement, ISO/IEC 17025 scope, GDMS instrument serial number, calibration certificate, reference standard, last-quarter calibration log, lab report ID and authorized signatory. If any item is missing, the CoA must be marked Conditional, not Released.',
    'End-User Certificate + Sanctions Screening Record':'Document response: Folder 05 / Compliance Screening. Provide EUC, end-use statement, buyer registry extract, restricted-party screening timestamp, list sources checked, reviewer name and release decision. Any one-character mismatch triggers controlled hold and formal correction.',
    'Cargo Insurance Certificate + Seal Photo Log':'Document response: Folder 07 / Logistics & Insurance. Provide policy certificate, Institute Cargo Clauses (A) if contracted, 110% invoice value evidence, seal numbers, gate-in photo log, packing photos, forwarder booking and BL/AWB reference.',
    'Retained Sample Chain-of-Custody':'Document response: Folder 10 / QA Retained Samples. Provide retained sample ID, storage location, sample weight, tamper evidence, custodian signature, sample pull date and referee lab release protocol.',
    'Supplier Qualification File + Smelter Origin Declaration':'Document response: Folder 03 / Supplier Qualification. Provide supplier onboarding checklist, origin declaration, smelter/refiner lot, audit notes, restricted geography review and batch genealogy map.'
  };
  var gen=document.getElementById('rtGenerateAnswer'); if(gen)gen.addEventListener('click',function(){var v=document.getElementById('rtDocSelect').value;document.getElementById('rtInspectorOutput').innerHTML='<strong>System response</strong><h3>Accepted — evidence path generated</h3><p>'+answerMap[v]+'</p><div class="rt-mini"><b>Red-team note:</b> response speed is acceptable only if the actual PDF/certificate exists in the Data Room and the access log records who opened it.</div>'});
  var killer=[
    ['Show us the exact retained sample that corresponds to this CoA.','Answer: retained sample ID must match batch ID, seal number and lab report ID. If retained sample is unavailable, do not defend the CoA; downgrade status to Conditional and request referee testing.'],
    ['Which clause prevents us from claiming line-stoppage damages?','Answer: the signed Terms must include exclusive remedy, direct-damages cap and consequential-damages exclusion. Website language must never override the contract.'],
    ['Why is the CoA valid if calibration was done after the analysis date?','Answer: it is not automatically valid. You must prove calibration validity covered the analysis date; otherwise retest or mark the CoA invalid.'],
    ['Can you certify TSMC/Samsung internal spec compliance?','Answer: only after receiving the controlled buyer spec under NDA and mapping each impurity/handling requirement to evidence. Public claims are not acceptable.'],
    ['Who signs off sanctions screening?','Answer: named compliance reviewer, timestamp, screening sources, EUC document ID and final status must be recorded before quotation release.']
  ];
  var list=document.getElementById('rtKillerList'); if(list){killer.forEach(function(row,i){var d=document.createElement('div');d.className='rt-q';d.innerHTML='<button type="button">Attack '+(i+1)+': '+row[0]+'</button><div class="rt-a">'+row[1]+'</div>';d.querySelector('button').addEventListener('click',function(){d.classList.toggle('active')});list.appendChild(d)})}
})();
