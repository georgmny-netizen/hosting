
(function(){
  'use strict';
  var overlay=document.getElementById('yykPhaseOverlay');
  if(!overlay) return;
  var title=document.getElementById('yykPhaseOverlayTitle');
  var close=document.getElementById('yykPhaseClose');
  var names={legal:'Legal Shield Layer',rma:'RMA + Arbitration',tds:'Deep Technical TDS',vdr:'VDR Access Architecture',esg:'ESG Institutional Layer',ai:'AI Orchestration Layer',twin:'Digital Twin of Supply Chain',maas:'MaaS / Circularity',thinktank:'Institutional Think Tank',investor:'Investor / M&A Architecture'};
  function qa(s,r){return Array.prototype.slice.call((r||document).querySelectorAll(s));}
  function activate(id){
    id=id||'legal';
    qa('[data-yyk-phase-pane]', overlay).forEach(function(p){p.classList.toggle('active', p.getAttribute('data-yyk-phase-pane')===id);});
    qa('[data-yyk-phase-tab]', overlay).forEach(function(b){b.classList.toggle('active', b.getAttribute('data-yyk-phase-tab')===id);});
    if(title) title.textContent=names[id]||'Phase Integration';
  }
  function open(id){activate(id);overlay.classList.add('active');overlay.setAttribute('aria-hidden','false');document.body.classList.add('apex-modal-open');}
  function shut(){overlay.classList.remove('active');overlay.setAttribute('aria-hidden','true');document.body.classList.remove('apex-modal-open');}
  qa('[data-yyk-phase-open]').forEach(function(btn){btn.addEventListener('click',function(){open(btn.getAttribute('data-yyk-phase-open'));});});
  qa('[data-yyk-phase-tab]', overlay).forEach(function(btn){btn.addEventListener('click',function(){activate(btn.getAttribute('data-yyk-phase-tab'));});});
  if(close) close.addEventListener('click',shut);
  overlay.addEventListener('click',function(e){if(e.target===overlay) shut();});
  document.addEventListener('keydown',function(e){if(e.key==='Escape'&&overlay.classList.contains('active')) shut();});
  var printBtn=document.getElementById('yykPhasePrint');
  if(printBtn) printBtn.addEventListener('click',function(){window.print();});
  var exportBtn=document.getElementById('yykPhaseExport');
  if(exportBtn) exportBtn.addEventListener('click',function(){
    var lines=['YONGYEOKYO Phase-by-Phase Enterprise Integration Index',''];
    Object.keys(names).forEach(function(k,i){lines.push(String(i+1).padStart(2,'0')+' · '+names[k]);});
    var blob=new Blob([lines.join('\n')],{type:'text/plain'}); var a=document.createElement('a'); a.href=URL.createObjectURL(blob); a.download='YONGYEOKYO_Phase_Integration_Index.txt'; document.body.appendChild(a); a.click(); setTimeout(function(){URL.revokeObjectURL(a.href);a.remove();},100);
  });
})();
