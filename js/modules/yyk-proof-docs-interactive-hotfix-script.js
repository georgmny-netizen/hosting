(function(){
  function ready(fn){document.readyState==='loading'?document.addEventListener('DOMContentLoaded',fn,{once:true}):fn();}
  ready(function(){
    var panel=document.getElementById('yykProofModeStablePanel');
    if(!panel||panel.dataset.docsInteractive==='1')return;
    panel.dataset.docsInteractive='1';
    function openCompliance(tab){
      if(typeof window.YYKOpenCompliance==='function'){window.YYKOpenCompliance(tab||'legal-framework');return true;}
      if(typeof window.apexOpenCompliance==='function'){window.apexOpenCompliance(tab||'legal-framework');return true;}
      var btn=document.querySelector('[data-open-compliance="'+(tab||'legal-framework')+'"]');
      if(btn){btn.click();return true;}
      var engine=document.getElementById('complianceEngine');
      if(engine){engine.classList.add('active');engine.setAttribute('aria-hidden','false');return true;}
      return false;
    }
    function openVaultScope(scope){
      var ds=document.getElementById('docScope');
      if(ds){Array.prototype.forEach.call(ds.options,function(o){if(o.textContent===scope||o.value===scope)ds.value=o.value;});ds.dispatchEvent(new Event('change',{bubbles:true}));}
      if(typeof window.openVault==='function'){try{window.openVault('APAC Proof Document · '+scope);return true;}catch(e){try{window.openVault();return true;}catch(e2){}}}
      var modal=document.getElementById('vaultModal');
      if(modal){modal.classList.add('active');return true;}
      return false;
    }
    function scrollToTarget(id){var el=document.getElementById(id)||document.querySelector(id);if(el){el.scrollIntoView({behavior:'smooth',block:'center'});return true;}return false;}
    function note(text){var n=panel.querySelector('.yyk-proof-doc-active-note');if(!n){n=document.createElement('div');n.className='yyk-proof-doc-active-note';panel.appendChild(n);}n.textContent=text;}
    panel.addEventListener('click',function(e){
      var doc=e.target.closest&&e.target.closest('.yyk-stable-proof-link');
      if(!doc)return;
      e.preventDefault();e.stopPropagation();
      var label=(doc.textContent||'').trim().toUpperCase();
      if(label.indexOf('COA')===0){openVaultScope('CoA + TDS + SDS');openCompliance('legal-framework');note('COA / GDMS / ICP-MS document vault trigger activated.');return;}
      if(label==='SDS'){openVaultScope('CoA + TDS + SDS');note('SDS controlled document request activated.');return;}
      if(label==='PACKING LIST'){scrollToTarget('leadTimeMatrix')||scrollToTarget('#rfq');note('Packing List lane documentation trigger activated.');return;}
      if(label==='EXPORT REVIEW'){openCompliance('legal-framework');note('Export Review compliance layer activated.');return;}
    },true);
    panel.addEventListener('click',function(e){
      var copy=e.target.closest&&e.target.closest('[data-copy-value]');
      if(!copy)return;
      var value=copy.getAttribute('data-copy-value')||copy.textContent||'';
      if(navigator.clipboard){navigator.clipboard.writeText(value).catch(function(){});}
      note('Copied to clipboard: '+value);
    },true);
  });
})();
