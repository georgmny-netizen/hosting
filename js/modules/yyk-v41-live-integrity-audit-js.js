(function(){
  'use strict';
  var YYK=window.YYK=window.YYK||{}; YYK.audit=YYK.audit||[];
  function q(s,r){return (r||document).querySelector(s)}
  function qa(s,r){return Array.prototype.slice.call((r||document).querySelectorAll(s))}
  function now(){var d=new Date();return String(d.getHours()).padStart(2,'0')+':'+String(d.getMinutes()).padStart(2,'0')+':'+String(d.getSeconds()).padStart(2,'0')}
  function positive(v){return /true|yes|pass|approved|verified|matched|complete|ready|clear|selected|valid|1/i.test(String(v||''))}
  function scanNodes(){
    var nodes={euc:false,sanctions:false,coa:false,lab:false,route:false,spec:false};
    qa('input,select,textarea,[data-node],[data-rfq-node]').forEach(function(el){
      var hay=[el.id,el.name,el.getAttribute('aria-label'),el.getAttribute('data-node'),el.getAttribute('data-rfq-node'),el.closest('label')&&el.closest('label').textContent].filter(Boolean).join(' ').toLowerCase();
      var val=el.type==='checkbox'?el.checked:(el.value||el.textContent||'');
      var ok=el.type==='checkbox'?!!val:positive(val);
      if(!ok) return;
      if(/euc|end.user|end-user/.test(hay)) nodes.euc=true;
      if(/sanction|ofac|meti|kosti/.test(hay)) nodes.sanctions=true;
      if(/coa|method/.test(hay)) nodes.coa=true;
      if(/lab|calibration/.test(hay)) nodes.lab=true;
      if(/route|bonded|logistics/.test(hay)) nodes.route=true;
      if(/spec|foundry|mapping/.test(hay)) nodes.spec=true;
    });
    var gateText=((q('#rfqHardGate')||{}).textContent||'')+' '+document.body.className;
    if(/verified|quote release enabled|approved|pass/i.test(gateText) && !/blocked|missing|no quote/i.test(gateText)) Object.keys(nodes).forEach(function(k){nodes[k]=true});
    var missing=Object.keys(nodes).filter(function(k){return !nodes[k]});
    return {nodes:nodes,missing:missing,blocked:/blocked|no quote|missing|alert|hard gate/i.test(gateText)};
  }
  function addAudit(level,status,msg){
    var last=YYK.audit[YYK.audit.length-1];
    if(last && last.status===status && last.msg===msg) return;
    YYK.audit.push({time:now(),level:level,status:status,msg:msg});
    if(YYK.audit.length>80) YYK.audit=YYK.audit.slice(-80);
    renderAudit();
  }
  function renderAudit(){
    var log=q('#yykAuditLog'), count=q('#yykAuditCount'); if(!log) return;
    if(count) count.textContent=String(YYK.audit.length).padStart(2,'0');
    log.innerHTML=YYK.audit.slice(-24).reverse().map(function(x){return '<li data-level="'+x.level+'"><span class="t">'+x.time+'</span><span class="s">'+x.status+'</span><span class="m">'+x.msg+'</span></li>'}).join('');
  }
  function updateIntegrity(reason){
    var shell=q('#yykLiveIntegrity'); if(!shell) return;
    var st=scanNodes(), missing=st.missing;
    var state='review', status='REVIEW REQUIRED', rfq='NON-BINDING', risk='MEDIUM', compliance='PENDING', warning='RFQ remains non-binding. Quote release requires EUC, sanctions screen, CoA method ID, laboratory calibration ID, bonded route confirmation and buyer foundry spec mapping.';
    var labels={euc:'EUC',sanctions:'sanctions screen',coa:'CoA method ID',lab:'lab calibration ID',route:'bonded route confirmation',spec:'buyer foundry spec mapping'};
    if(st.blocked || missing.length){
      state='blocked'; status='DO NOT QUOTE'; rfq='BLOCKED'; risk=missing.length>=4?'HIGH':'ELEVATED'; compliance='INCOMPLETE'; warning='No Quote Release. Missing: '+missing.map(function(k){return labels[k]}).join(', ')+'. Final supply remains subject to written agreement and batch-specific certification.';
    } else {
      state='clear'; status='SYSTEM VERIFIED'; rfq='QUOTE-READY'; risk='LOW'; compliance='PASS'; warning='Mandatory evidence nodes appear validated. Quote release may proceed only under written commercial terms, released batch evidence and authorized approval.';
    }
    shell.setAttribute('data-integrity-state',state);
    [['#yykLiStatus',status],['#yykLiRfq',rfq],['#yykLiRisk',risk],['#yykLiCompliance',compliance],['#yykLiWarning',warning]].forEach(function(pair){var el=q(pair[0]); if(el) el.textContent=pair[1]});
    addAudit(state,state.toUpperCase(),(reason||'Integrity sync')+' · '+status+' · compliance '+compliance);
  }
  function bind(){
    var toggle=q('#yykLiveIntegrityToggle'), panel=q('#yykLiveIntegrityPanel');
    if(toggle&&panel){toggle.addEventListener('click',function(){var open=panel.hidden; panel.hidden=!open; toggle.setAttribute('aria-expanded',String(open)); addAudit('review','PANEL',open?'Audit viewer opened':'Audit viewer collapsed')})}
    var clear=q('#yykAuditClear'); if(clear){clear.addEventListener('click',function(e){e.stopPropagation(); YYK.audit=[]; addAudit('review','RESET','Audit viewer display reset')})}
    document.addEventListener('input',function(){setTimeout(function(){updateIntegrity('RFQ input changed')},40)},true);
    document.addEventListener('change',function(){setTimeout(function(){updateIntegrity('RFQ/compliance state changed')},40)},true);
    document.addEventListener('click',function(e){
      var btn=e.target.closest('button,a,[data-module-action],[data-control-open],[data-panel]');
      if(btn){var label=(btn.textContent||btn.getAttribute('data-module-action')||btn.getAttribute('data-panel')||'control').trim().replace(/\s+/g,' '); addAudit('review','ACTION',label.slice(0,96)); setTimeout(function(){updateIntegrity('Control action')},80)}
    },true);
    document.addEventListener('yyk:engine-open',function(e){addAudit('review','ENGINE','Opened '+((e.detail&&e.detail.id)||'engine')); updateIntegrity('Engine open')});
    addAudit('review','BOOT','Live integrity module initialized'); updateIntegrity('Initial scan');
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',bind); else bind();
})();
