(function(){
  'use strict';
  function q(s,r){return (r||document).querySelector(s)}
  function qa(s,r){return Array.prototype.slice.call((r||document).querySelectorAll(s))}
  
  // 1. Close all modal engines
  function closeAll(){
    qa('.compliance-engine.active,.product-engine.active,.contact-engine.active,.yyk-bcp-engine.active,.yyk-legal-engine.active,.yyk-data-room-engine.active,.yyk-vdr-engine.active,.yyk-supply-chain-engine.active,.yyk-tds-engine.active,.yyk-pricing-engine.active,.yyk-partnership-engine.active,.modal.active,.sogo-drawer.active').forEach(function(el){
      el.classList.remove('active');
      el.setAttribute('aria-hidden','true');
    });
    document.body.classList.remove('apex-modal-open');
  }

  // 2. Open specific engine
  var MAP={data:'dataRoomStressEngine',vdr:'vdrEngine',supply:'supplyChainEngine',legal:'yykLegalEngine',tds:'tdsFoundryEngine',pricing:'pricingEngine',partnership:'technicalPartnershipEngine'};
  function openEngine(key){
    var id=MAP[key], el=id && document.getElementById(id);
    if(!el) return false;
    closeAll();
    el.classList.add('active');
    el.setAttribute('aria-hidden','false');
    document.body.classList.add('apex-modal-open');
    return true;
  }

  // 3. Setup control actions rail
  var PRIORITY={'Data Room / Stress Test':true, 'Virtual Data Room':true, 'Supply Chain Engine':true, 'Legal Engine':true};
  var ORDER={vdr:20,legal:30,supply:40,data:50,pricing:60,tds:70,partnership:80};

  function setupRail(){
    var rail=q('#yykAuditControlActions');
    if(!rail) return;
    
    // Flatten if needed
    qa('.yyk-priority-row,.yyk-priority-label,.yyk-priority-buttons',rail).forEach(function(el){
      qa('.yyk-control-action',el).forEach(function(btn){rail.appendChild(btn)});
      el.remove();
    });

    

    // Add Executive Overview button
    var exec=q('#yykAuditExecutiveBtn');
    if(!exec){
      exec=document.createElement('button');
      exec.id='yykAuditExecutiveBtn';
      exec.className='yyk-v32-exec-btn yyk-executive-primary-btn';
      exec.type='button';
      exec.textContent='Executive Overview';
      exec.onclick=function(e){
        e.preventDefault();
        closeAll();
        var target=q('#yykExecutiveDecisionLayer') || q('.yyk-executive-decision-layer');
        if(target) target.scrollIntoView({behavior:'smooth',block:'start'});
      };
      rail.insertBefore(exec, rail.firstChild);
    }
    
    // Wire up engine buttons
    qa('.yyk-control-action', rail).forEach(function(btn){
      var key=btn.getAttribute('data-open-engine');
      if(!key){
        var t=(btn.textContent||'').toLowerCase();
        if(t.indexOf('virtual')>-1) key='vdr';
        else if(t.indexOf('legal')>-1) key='legal';
        else if(t.indexOf('supply')>-1) key='supply';
        else if(t.indexOf('data room')>-1 || t.indexOf('stress')>-1) key='data';
        else if(t.indexOf('pricing')>-1) key='pricing';
        else if(t.indexOf('tds')>-1 || t.indexOf('foundry')>-1) key='tds';
        else if(t.indexOf('partnership')>-1) key='partnership';
        if(key) btn.setAttribute('data-open-engine',key);
      }
      if(key && ORDER[key]) btn.style.order=ORDER[key];
      
      btn.onclick=function(e){
        e.preventDefault();
        openEngine(btn.getAttribute('data-open-engine'));
      };
    });
  }

  // 4. Normalize Mode buttons
  function normalizeModes(){
    qa('#yykAuditControlPanel .yyk-mode-btn').forEach(function(btn){
      var t=(btn.textContent||'').toLowerCase();
      if(t.indexOf('procurement')>-1) btn.textContent='Procurement';
      else if(t.indexOf('engineering')>-1) btn.textContent='Engineering';
      else if(t.indexOf('compliance')>-1) btn.textContent='Compliance';
      btn.setAttribute('draggable','false');
      btn.setAttribute('role','tab');
    });
  }

  // 5. Compute Executive Decision
  function computeDecision(){
    var evidence={euc:true,sanctions:true,coa:true,lab:false,route:true,spec:true};
    var missing=Object.keys(evidence).filter(function(k){return !evidence[k]});
    var risk=missing.length?42:24,margin=14;
    var pill=q('#yykExecStatusPill'),rec=q('#yykExecRecommendation'),kill=q('#yykExecKillSwitch');
    if(missing.length){
      if(pill){pill.textContent='CONDITIONAL APPROVAL';pill.className='yyk-exec-status-pill';}
      if(rec)rec.textContent='RECOMMENDATION: APPROVE WITH CONDITIONS ? RELEASE ONLY AFTER LAB CALIBRATION ID IS ATTACHED';
      if(kill)kill.textContent='KILL SWITCH ARMED: DO NOT QUOTE if EUC, sanctions screen, CoA method ID, lab calibration ID, bonded route confirmation or buyer foundry spec mapping is missing.';
    }else{
      if(pill){pill.textContent='APPROVED';pill.className='yyk-exec-status-pill is-approved';}
      if(rec)rec.textContent='RECOMMENDATION: APPROVE ? QUOTE RELEASE ENABLED';
    }
    var r=q('#yykExecRiskIndex');if(r)r.textContent=risk+'%';
    var m=q('#yykExecMargin');if(m)m.textContent='+'+margin+'%';
  }

  function init(){
    normalizeModes();
    setupRail();
    computeDecision();
  }

  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',init);
  else init();

  // --- Accordion Auto-Scroll ---
  document.addEventListener('DOMContentLoaded', function() {
    var accordions = document.querySelectorAll('.hero-accordion');
    accordions.forEach(function(acc) {
      acc.addEventListener('toggle', function(e) {
        if (this.open) {
          var el = this;
          setTimeout(function() {
            var y = el.getBoundingClientRect().top + window.scrollY - 80;
            window.scrollTo({ top: y, behavior: 'smooth' });
          }, 80);
        }
      });
    });
  });

})();
