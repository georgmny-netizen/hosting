(function(){
  'use strict';
  var VALID_KEYS = ['cu','al','zn','ree','quality','logistics'];

  function normalizeProductKey(value){
    value = (value || '').toString().trim().toLowerCase();
    if(value.indexOf('al') === 0 || value.indexOf('aluminum') !== -1) return 'al';
    if(value.indexOf('zn') === 0 || value.indexOf('zinc') !== -1) return 'zn';
    if(value.indexOf('ree') === 0 || value.indexOf('rare') !== -1) return 'ree';
    if(value.indexOf('quality') !== -1 || value.indexOf('testing') !== -1 || value === 'qc') return 'quality';
    if(value.indexOf('log') !== -1 || value.indexOf('docs') !== -1 || value.indexOf('delivery') !== -1) return 'logistics';
    return 'cu';
  }

  function getProductEngine(){
    return document.getElementById('productEngine');
  }

  function repairProductEngineMarkup(){
    var engine = getProductEngine();
    if(!engine) return null;

    var tabs = Array.prototype.slice.call(engine.querySelectorAll('.product-tab'));
    tabs.forEach(function(tab){
      var key = tab.getAttribute('data-product-tab') || tab.getAttribute('data-catalog-tab') || tab.textContent;
      key = normalizeProductKey(key);
      tab.setAttribute('data-product-tab', key);
      tab.setAttribute('type', 'button');
      tab.setAttribute('role', 'tab');
      tab.removeAttribute('data-catalog-tab');
      tab.style.pointerEvents = 'auto';
      tab.style.cursor = 'pointer';
    });

    var panels = Array.prototype.slice.call(engine.querySelectorAll('.product-panel'));
    panels.forEach(function(panel){
      var key = panel.getAttribute('data-product-panel') || panel.getAttribute('data-catalog-panel') || panel.id || '';
      key = normalizeProductKey(key);
      panel.setAttribute('data-product-panel', key);
      panel.setAttribute('role', 'tabpanel');
      panel.removeAttribute('data-catalog-panel');
    });

    return engine;
  }

  function activateProductPassportPanel(key){
    key = normalizeProductKey(key);
    if(VALID_KEYS.indexOf(key) === -1) key = 'cu';

    var engine = repairProductEngineMarkup();
    if(!engine) return false;

    var tabs = Array.prototype.slice.call(engine.querySelectorAll('.product-tab[data-product-tab]'));
    var panels = Array.prototype.slice.call(engine.querySelectorAll('.product-panel[data-product-panel]'));

    tabs.forEach(function(tab){
      var active = tab.getAttribute('data-product-tab') === key;
      tab.classList.toggle('active', active);
      tab.setAttribute('aria-selected', active ? 'true' : 'false');
      tab.tabIndex = active ? 0 : -1;
    });

    panels.forEach(function(panel){
      var active = panel.getAttribute('data-product-panel') === key;
      panel.classList.toggle('active', active);
      panel.hidden = !active;
      panel.setAttribute('aria-hidden', active ? 'false' : 'true');
      panel.style.display = active ? 'block' : 'none';
    });

    engine.setAttribute('data-active-product-panel', key);
    return true;
  }

  document.addEventListener('click', function(event){
    var tab = event.target.closest && event.target.closest('#productEngine .product-tab[data-product-tab]');
    if(!tab) return;
    event.preventDefault();
    event.stopPropagation();
    if(event.stopImmediatePropagation) event.stopImmediatePropagation();
    activateProductPassportPanel(tab.getAttribute('data-product-tab') || tab.textContent);
  }, true);

  document.addEventListener('keydown', function(event){
    var tab = event.target.closest && event.target.closest('#productEngine .product-tab[data-product-tab]');
    if(!tab || (event.key !== 'Enter' && event.key !== ' ')) return;
    event.preventDefault();
    activateProductPassportPanel(tab.getAttribute('data-product-tab') || tab.textContent);
  }, true);

  document.addEventListener('click', function(event){
    var opener = event.target.closest && event.target.closest('[data-open-product]');
    if(!opener) return;
    var key = opener.getAttribute('data-open-product') || 'cu';
    activateProductPassportPanel(key);
  }, true);

  function boot(){
    repairProductEngineMarkup();
    var active = document.querySelector('#productEngine .product-tab.active[data-product-tab]');
    activateProductPassportPanel(active ? active.getAttribute('data-product-tab') : 'cu');
  }

  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();

  window.YYKActivateProductPassportPanel = activateProductPassportPanel;
  window.YYKRepairProductPassportTabs = repairProductEngineMarkup;
})();
