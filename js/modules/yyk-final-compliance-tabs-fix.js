(function(){
  function qsa(sel, root){ return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }
  function qs(sel, root){ return (root || document).querySelector(sel); }

  function getComplianceEngine(){
    return qs('.compliance-engine') || qs('#compliance-engine');
  }

  function openCompliance(tabName){
    var engine = getComplianceEngine();
    if(!engine) return;

    qsa('.product-engine,.contact-engine,.modal,.sogo-drawer').forEach(function(el){
      el.classList.remove('active');
    });

    engine.classList.add('active');
    document.body.classList.add('apex-modal-open');

    if(tabName) activateComplianceTab(tabName);
  }

  function closeCompliance(){
    var engine = getComplianceEngine();
    if(engine) engine.classList.remove('active');
    document.body.classList.remove('apex-modal-open');
  }

  function activateComplianceTab(tabName){
    var engine = getComplianceEngine();
    if(!engine) return;

    var tabs = qsa('[data-compliance-tab]', engine);
    var panels = qsa('.compliance-panel', engine);
    if(!tabs.length || !panels.length) return;

    var index = tabs.findIndex(function(tab){
      return String(tab.getAttribute('data-compliance-tab')).toLowerCase() === String(tabName).toLowerCase();
    });

    if(index < 0) index = 0;

    tabs.forEach(function(tab, i){
      tab.classList.toggle('active', i === index);
      tab.setAttribute('aria-selected', i === index ? 'true' : 'false');
    });

    panels.forEach(function(panel, i){
      panel.classList.toggle('active', i === index);
      panel.hidden = i !== index;
      panel.style.display = i === index ? 'block' : 'none';
    });

    var content = qs('.compliance-content', panels[index]) || panels[index];
    if(content && typeof content.scrollTo === 'function') content.scrollTo({top:0, behavior:'smooth'});
  }

  function initComplianceTabs(){
    var engine = getComplianceEngine();
    if(!engine) return;

    var tabs = qsa('[data-compliance-tab]', engine);
    var panels = qsa('.compliance-panel', engine);

    tabs.forEach(function(tab, i){
      tab.setAttribute('role', 'tab');
      tab.setAttribute('tabindex', '0');
      tab.addEventListener('click', function(e){
        e.preventDefault();
        e.stopPropagation();
        activateComplianceTab(tab.getAttribute('data-compliance-tab'));
      });
      tab.addEventListener('keydown', function(e){
        if(e.key === 'Enter' || e.key === ' '){
          e.preventDefault();
          activateComplianceTab(tab.getAttribute('data-compliance-tab'));
        }
        if(e.key === 'ArrowRight' || e.key === 'ArrowLeft'){
          e.preventDefault();
          var next = e.key === 'ArrowRight' ? i + 1 : i - 1;
          if(next < 0) next = tabs.length - 1;
          if(next >= tabs.length) next = 0;
          tabs[next].focus();
          activateComplianceTab(tabs[next].getAttribute('data-compliance-tab'));
        }
      });
    });

    panels.forEach(function(panel, i){
      panel.setAttribute('role', 'tabpanel');
      panel.hidden = i !== 0;
      panel.style.display = i === 0 ? 'block' : 'none';
    });

    activateComplianceTab((qs('[data-compliance-tab].active', engine) || tabs[0] || {}).getAttribute ? (qs('[data-compliance-tab].active', engine) || tabs[0]).getAttribute('data-compliance-tab') : 'esg');
  }

  function initOpeners(){
    document.addEventListener('click', function(e){
      var opener = e.target.closest('[data-open-compliance]');
      if(opener){
        e.preventDefault();
        e.stopPropagation();
        openCompliance(opener.getAttribute('data-open-compliance') || 'esg');
        return;
      }

      var closer = e.target.closest('.compliance-close');
      if(closer){
        e.preventDefault();
        closeCompliance();
      }
    }, true);

    document.addEventListener('keydown', function(e){
      if(e.key === 'Escape') closeCompliance();
    });
  }

  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', function(){
      initComplianceTabs();
      initOpeners();
    });
  } else {
    initComplianceTabs();
    initOpeners();
  }

  window.YYKOpenCompliance = openCompliance;
  window.YYKActivateComplianceTab = activateComplianceTab;
})();
