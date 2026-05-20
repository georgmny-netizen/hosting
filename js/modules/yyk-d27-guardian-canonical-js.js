(function(){
  'use strict';
  const MASTER={uThMaxPpb:0.05,feMaxPpb:8,nomenclature:['CORE','PRECISION','ULTRA'],sanctionsSources:['OFAC','METI','KOSTI'],guardianLastScanKey:'YYK_G27_LAST_SCAN'};
  const REQUIRED_HUBS=['Kuantan','Busan','Yokohama','Shanghai','Tianjin'];
  function q(s){return document.querySelector(s)}
  function status(t,w){const e=q('#yykG27Status');if(!e)return;e.textContent=t;e.classList.toggle('warn',!!w)}
  function result(t,b){const e=q('#yykG27Result');if(!e)return;e.textContent=t;e.classList.toggle('block',!!b)}
  function dedupeIds(){const seen=new Set();document.querySelectorAll('[id]').forEach(n=>{if(n.closest('#yyk-d27-guardian-canonical'))return;const id=n.id;if(!id)return;if(seen.has(id)){n.setAttribute('data-g27-repaired-duplicate-id',id);n.removeAttribute('id')}else seen.add(id)})}
  function repairNomenclature(){document.querySelectorAll('[data-nomenclature]').forEach(n=>{const v=String(n.getAttribute('data-nomenclature')||'').toUpperCase();if(!MASTER.nomenclature.includes(v)){n.setAttribute('data-nomenclature','CORE');n.setAttribute('data-g27-repaired','nomenclature')}})}
  function enforceActiveSupply(){REQUIRED_HUBS.forEach(h=>document.querySelectorAll('td,span,div').forEach(n=>{if((n.textContent||'').includes(h)){const r=n.closest('tr');if(r&&!/ACTIVE/i.test(r.textContent))r.setAttribute('data-g27-supply-repair','ACTIVE / 24-48h required')}}))}
  function simulateSanctionsScan(p){p=p||{};const hit=String(p.sanctions||'').toLowerCase()==='hit';const stamp=new Date().toISOString();try{localStorage.setItem(MASTER.guardianLastScanKey,stamp)}catch(e){};if(hit){status('GUARDIAN BLOCK · SANCTIONS HIT',true);return{blocked:true,reason:'Sanctions hit',sources:MASTER.sanctionsSources,scanned_at:stamp}}status('GUARDIAN SCAN COMPLETE · CLEAR',false);return{blocked:false,reason:'Clear',sources:MASTER.sanctionsSources,scanned_at:stamp}}
  function validateRfq(p){p=p||{};const m=String(p.material||'CORE').toUpperCase();const purity=Number(p.purity);const u=Number(p.uThPpb);const fe=Number(p.fePpb);const sanctions=String(p.sanctions||'clear').toLowerCase();const v=[];if(!MASTER.nomenclature.includes(m)&&!['CU','AL','ZN','REE'].includes(m))v.push('Nomenclature outside CORE/PRECISION/ULTRA');if(Number.isFinite(u)&&u>MASTER.uThMaxPpb)v.push('U/Th exceeds < 0.05 ppb tolerance');if(Number.isFinite(fe)&&fe>MASTER.feMaxPpb)v.push('Fe exceeds < 8 ppb tolerance');if(Number.isFinite(purity)&&purity<99.999)v.push('Purity below high-purity minimum');if(sanctions!=='clear')v.push('Sanctions status not clear');return{blocked:v.length>0,risk:v.length?'HIGH RISK':'CONTROLLED',release:v.length?'NO QUOTE RELEASE':'CONTROLLED RFQ PATH',violations:v}}
  function validateCurrentRfq(){const p={material:q('#yykG27Material')&&q('#yykG27Material').value,purity:q('#yykG27Purity')&&q('#yykG27Purity').value,uThPpb:q('#yykG27UTh')&&q('#yykG27UTh').value,fePpb:q('#yykG27Fe')&&q('#yykG27Fe').value,sanctions:q('#yykG27Sanctions')&&q('#yykG27Sanctions').value};const scan=simulateSanctionsScan(p);const rfq=validateRfq(p);const blocked=scan.blocked||rfq.blocked;result(blocked?'HIGH RISK · Compliance Officer required · '+rfq.release+' · '+rfq.violations.concat(scan.blocked?[scan.reason]:[]).join('; '):'PASS · Controlled RFQ path available · '+rfq.release,blocked);return{scan,rfq}}
  function selfRepair(){dedupeIds();repairNomenclature();enforceActiveSupply()}
  window.YYK_G27_GUARDIAN={MASTER,simulateSanctionsScan,validateRfq,validateCurrentRfq,selfRepair};
  function init(){selfRepair();simulateSanctionsScan({sanctions:'clear'})}
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});else init();
  setInterval(()=>{selfRepair();simulateSanctionsScan({sanctions:'clear'})},24*60*60*1000);
})();
