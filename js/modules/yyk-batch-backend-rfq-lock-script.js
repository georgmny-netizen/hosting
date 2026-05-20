(function(){
  const mockBatchDB = {
    "COA-CU6N-2024-001": {
      batch_verified:true,
      coa_match:true,
      material_match:true,
      material:"Copper high-purity materials · KE-08896",
      iso17025_lab_id:"ISO17025-GDMS-ICPMS-LAB-READY",
      ppb_tolerance:"0.001",
      kyc_status:"PENDING",
      sanctions_status:"SCREEN REQUIRED",
      bonded_route_confirmed:"PENDING",
      rfq_lock:"CONDITIONAL"
    }
  };
  function sanitize(value){return String(value||"").replace(/[<>]/g,"").trim();}
  function setBackendLockState(state){
    const node=document.getElementById("batchBackendLockState");
    if(!node) return;
    node.classList.remove("release","conditional");
    if(state==="RELEASED"){node.classList.add("release");node.textContent="RFQ RELEASED · BATCH + KYC + SANCTIONS PASS";return;}
    if(state==="CONDITIONAL"){node.classList.add("conditional");node.textContent="RFQ CONDITIONAL · COMPLIANCE ACTION REQUIRED";return;}
    node.textContent="RFQ LOCKED · BACKEND BINDING REQUIRED";
  }
  window.yykBatchBackendGate = function(coaId){
    const id=sanitize(coaId || document.getElementById("batchId")?.value || "COA-CU6N-2024-001");
    const rec=mockBatchDB[id];
    if(!rec){setBackendLockState("LOCKED");return {id,rfq_lock:"LOCKED",reason:"Batch ID not found in internal batch database"};}
    const hardMissing=[];
    if(!rec.batch_verified) hardMissing.push("batch_verified");
    if(!rec.coa_match) hardMissing.push("coa_match");
    if(!rec.material_match) hardMissing.push("material_match");
    if(!rec.iso17025_lab_id) hardMissing.push("iso17025_lab_id");
    if(rec.kyc_status!=="PASS") hardMissing.push("kyc_status");
    if(rec.sanctions_status!=="PASS") hardMissing.push("sanctions_status");
    if(rec.bonded_route_confirmed!=="YES") hardMissing.push("bonded_route_confirmed");
    const lock = hardMissing.length ? (rec.rfq_lock || "CONDITIONAL") : "RELEASED";
    setBackendLockState(lock);
    return Object.assign({id,hardMissing,rfq_lock:lock},rec);
  };
  const oldVerify = window.verifyBatch;
  window.verifyBatch = function(){
    if(typeof oldVerify === "function") oldVerify();
    const id=sanitize(document.getElementById("batchId")?.value || "COA-CU6N-2024-001");
    const gate=window.yykBatchBackendGate(id);
    const rows=document.getElementById("batchRows");
    if(rows){
      rows.innerHTML += `<tr><td>Internal Batch DB</td><td>${gate.reason ? gate.reason : "Record located · API contract ready"}</td></tr>`;
      rows.innerHTML += `<tr><td>Backend RFQ-Lock</td><td class="${gate.rfq_lock==='RELEASED'?'ok':'warn'}">${gate.rfq_lock} · ${gate.hardMissing&&gate.hardMissing.length ? 'Missing: '+gate.hardMissing.join(', ') : 'All hard gates passed'}</td></tr>`;
    }
  };
  document.addEventListener("DOMContentLoaded",function(){window.yykBatchBackendGate("COA-CU6N-2024-001");});
})();
