(function(){
  'use strict';
  var INTEL={
    'Executive Overview':{status:'BOARD VIEW',body:'Executive decision cockpit: RFQ status, margin lens, risk index, compliance gate and quote recommendation.',risk:'Kill switch',evidence:'RFQ + Legal + Route'},
    'Exit to Website':{status:'RETURN',body:'Close active engines and return to public website surface without changing procurement state.',risk:'None',evidence:'UI navigation'},
    'Virtual Data Room':{status:'GATED',body:'NDA/KYC-controlled evidence vault for buyer audit packs, qualification files and APAC technical governance.',risk:'Access control',evidence:'VDR logs'},
    'Legal Engine':{status:'CONTROL',body:'Liability cap, RMA pathway, EUC language, sanctions posture and transaction document alignment.',risk:'Contract leakage',evidence:'Legal armor'},
    'Supply Chain Engine':{status:'ROUTE',body:'Bonded warehouse route, custody chain, BCP triggers, carrier readiness and emergency release logic.',risk:'Port / carrier',evidence:'BCP route'},
    'Data Room / Stress Test':{status:'AUDIT',body:'Stress questions, cost-of-failure logic, audit evidence and buyer due-diligence defense.',risk:'Buyer audit',evidence:'Defense pack'},
    'Pricing Engine':{status:'MARGIN',body:'Index-based pricing, purity premium, logistics cost and margin sensitivity decision support.',risk:'Margin erosion',evidence:'Pricing memo'},
    'TDS Foundry Engine':{status:'FOUNDRY',body:'Impurity matrix, Fe/U/Th ultra-trace controls, gas profile, SPC history and method traceability.',risk:'Qualification',evidence:'CoA / GDMS'},
    'Technical Partnership':{status:'R&D',body:'Custom trace profile, samples policy, joint lab testing and technical qualification coordination.',risk:'Spec drift',evidence:'Joint lab'}
  };
  function q(s,r){return (r||document).querySelector(s)}
  function text(el){return (el && el.textContent || '').replace(/\s+/g,' ').trim()}
  function cleanLabel(label){
    return label.replace(/^[·??\s]+|[·??\s]+$/g,'').replace(/\s+/g,' ').trim();
  }
  function ensureTip(){
    var tip=q('#yykHoverIntelTooltip');
    if(tip) return tip;
    tip=document.createElement('div');
    tip.id='yykHoverIntelTooltip';
    tip.className='yyk-hover-intel-tooltip';
    tip.setAttribute('role','tooltip');
    tip.innerHTML='<div class="yyk-hover-intel-top"><div class="yyk-hover-intel-title"></div><div class="yyk-hover-intel-status"></div></div><div class="yyk-hover-intel-body"></div><div class="yyk-hover-intel-grid"><div class="yyk-hover-intel-kv"><b>Risk Lens</b><span></span></div><div class="yyk-hover-intel-kv"><b>Evidence</b><span></span></div></div>';
    document.body.appendChild(tip);
    return tip;
  }
  var yykTipTimeout;
  function attachIntel(el){
    if(!el || el.__yykHoverIntel) return;
    el.__yykHoverIntel=true;
    var raw=cleanLabel(text(el));
    Object.keys(INTEL).forEach(function(k){if(raw.toLowerCase()===k.toLowerCase()) raw=k;});
    if(!INTEL[raw]) return;
    el.setAttribute('data-hover-intel','true');
    el.setAttribute('aria-describedby','yykHoverIntelTooltip');
    var tip = ensureTip();
    if(!tip.__hoverInit) {
        tip.__hoverInit = true;
        tip.addEventListener('mouseenter', function(){ clearTimeout(yykTipTimeout); });
        tip.addEventListener('mouseleave', function(){ yykTipTimeout = setTimeout(hide, 200); });
    }
    el.addEventListener('mouseenter',function(){clearTimeout(yykTipTimeout); show(el,raw)});
    el.addEventListener('focus',function(){clearTimeout(yykTipTimeout); show(el,raw)});
    el.addEventListener('mouseleave',function(){yykTipTimeout = setTimeout(hide, 200);});
    el.addEventListener('blur',function(){yykTipTimeout = setTimeout(hide, 200);});
  }
  function show(el,label){
    var data=INTEL[label], tip=ensureTip();
    if(!data) return;
    q('.yyk-hover-intel-title',tip).textContent=label;
    q('.yyk-hover-intel-status',tip).textContent=data.status;
    q('.yyk-hover-intel-body',tip).innerHTML=data.body;
    q('.yyk-hover-intel-kv:nth-child(1) span',tip).textContent=data.risk;
    q('.yyk-hover-intel-kv:nth-child(2) span',tip).textContent=data.evidence;
    position(el);
    tip.classList.add('active');
  }
  function position(el){
    var tip=ensureTip(), r=el.getBoundingClientRect(), pad=14;
    var wrap = document.querySelector('.wrap') || document.body;
    var wr = wrap.getBoundingClientRect();
    var h=tip.offsetHeight || 150;
    var w=tip.offsetWidth || 380; 
    var left=r.left + (r.width / 2) - (w / 2); 
    var minLeft = Math.max(pad, wr.left);
    var maxLeft = Math.min(window.innerWidth - w - pad, wr.right - w);
    if(left < minLeft) left = minLeft; 
    if(left > maxLeft) left = maxLeft;
    var top=r.bottom+10;
    if(top+h+pad>window.innerHeight) top=Math.max(pad,r.top-h-10);
    tip.style.left=left+'px';
    tip.style.top=top+'px';
  }
  function hide(){
    var tip=q('#yykHoverIntelTooltip');
    if(tip) tip.classList.remove('active');
  }
  window.addEventListener('scroll', hide, {passive: true});
  document.addEventListener('click', function(e) {
    var tip = q('#yykHoverIntelTooltip');
    if (tip && tip.classList.contains('active') && !tip.contains(e.target)) {
      hide();
    }
  });
  function scrubGhostText(){
    var rail=q('#yykAuditControlActions');
    if(!rail) return;
    Array.prototype.slice.call(rail.childNodes).forEach(function(n){
      if(n.nodeType===3 && /^[\s.·??]+$/.test(n.nodeValue||'')) n.nodeValue=' ';
    });
  }
  function init(){
    scrubGhostText();
    var selectors='#yykAuditControlPanel .yyk-control-action,#yykAuditControlPanel .yyk-v32-exec-btn,#yykAuditControlPanel .yyk-return-site-btn';
    Array.prototype.slice.call(document.querySelectorAll(selectors)).forEach(attachIntel);
    var rail=q('#yykAuditControlActions');
    if(rail && !rail.__yykHoverIntelObserver){
      rail.__yykHoverIntelObserver=new MutationObserver(function(){setTimeout(init,0)});
      rail.__yykHoverIntelObserver.observe(rail,{childList:true,subtree:true,characterData:true});
    }
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',init); else init();
})();
