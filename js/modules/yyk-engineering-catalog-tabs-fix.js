(function(){
  function normalizeKey(value){
    return (value || '').toString().trim().toLowerCase()
      .replace(/^#/, '')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');
  }

  function findCatalogScope(){
    var headings = Array.prototype.slice.call(document.querySelectorAll('h1,h2,h3,.section-title,.card-title'));
    for(var i=0;i<headings.length;i++){
      if((headings[i].textContent || '').indexOf('Engineering Catalog for 6N') !== -1){
        return headings[i].closest('section,.section,.wrap,main') || headings[i].parentElement;
      }
    }
    return document.getElementById('engineering-catalog') || document.querySelector('[data-engineering-catalog]');
  }

  function prepareCatalog(){
    var scope = findCatalogScope();
    if(!scope) return null;
    scope.classList.add('yyk-engineering-catalog-scope');

    var candidates = Array.prototype.slice.call(scope.querySelectorAll('button,a,[role="tab"],.product-tab,.spec-tab,.catalog-tab'));
    var tabs = candidates.filter(function(el){
      var t = (el.textContent || '').trim().toLowerCase();
      return /^(cu|copper|cu · copper|al|aluminum|al · aluminum|zn|zinc|zn · zinc|ree|rare earth|ree · rare earth)/i.test(t);
    });

    tabs.forEach(function(tab){
      var text = (tab.textContent || '').trim().toLowerCase();
      var key = text.indexOf('cu') === 0 || text.indexOf('copper') === 0 ? 'cu' :
                text.indexOf('al') === 0 || text.indexOf('aluminum') === 0 ? 'al' :
                text.indexOf('zn') === 0 || text.indexOf('zinc') === 0 ? 'zn' :
                'ree';
      tab.setAttribute('data-catalog-tab', key);
      tab.classList.add('catalog-tab');
      tab.setAttribute('type', tab.tagName.toLowerCase() === 'button' ? 'button' : tab.getAttribute('type') || '');
    });

    var panels = Array.prototype.slice.call(scope.querySelectorAll('[data-spec-panel], [data-product-panel], [data-catalog-panel], .spec-panel, .product-panel, .catalog-panel'));
    panels.forEach(function(panel){
      var key = panel.getAttribute('data-catalog-panel') || panel.getAttribute('data-spec-panel') || panel.getAttribute('data-product-panel') || panel.id || '';
      key = normalizeKey(key);
      if(key.indexOf('copper') !== -1) key = 'cu';
      else if(key.indexOf('aluminum') !== -1) key = 'al';
      else if(key.indexOf('zinc') !== -1) key = 'zn';
      else if(key.indexOf('rare') !== -1) key = 'ree';
      else if(key.indexOf('cu') !== -1) key = 'cu';
      else if(key.indexOf('al') !== -1) key = 'al';
      else if(key.indexOf('zn') !== -1) key = 'zn';
      else if(key.indexOf('ree') !== -1) key = 'ree';
      if(['cu','al','zn','ree'].indexOf(key) !== -1){
        panel.setAttribute('data-catalog-panel', key);
        panel.classList.add('catalog-panel');
      }
    });

    return scope;
  }

  function activateCatalogTab(key){
    var scope = prepareCatalog();
    if(!scope) return;
    key = normalizeKey(key);
    scope.querySelectorAll('[data-catalog-tab]').forEach(function(tab){
      var active = tab.getAttribute('data-catalog-tab') === key;
      tab.classList.toggle('active', active);
      tab.setAttribute('aria-selected', active ? 'true' : 'false');
    });
    scope.querySelectorAll('[data-catalog-panel]').forEach(function(panel){
      var active = panel.getAttribute('data-catalog-panel') === key;
      panel.classList.toggle('active', active);
      panel.hidden = !active;
      panel.setAttribute('aria-hidden', active ? 'false' : 'true');
    });
  }

  document.addEventListener('click', function(e){
    var scope = prepareCatalog();
    if(!scope) return;
    var tab = e.target.closest('.yyk-engineering-catalog-scope [data-catalog-tab]');
    if(!tab) return;
    e.preventDefault();
    e.stopPropagation();
    activateCatalogTab(tab.getAttribute('data-catalog-tab'));
  }, true);

  document.addEventListener('DOMContentLoaded', function(){
    prepareCatalog();
    var active = document.querySelector('.yyk-engineering-catalog-scope [data-catalog-tab].active');
    activateCatalogTab(active ? active.getAttribute('data-catalog-tab') : 'cu');
  });

  window.YYKActivateEngineeringCatalogTab = activateCatalogTab;
})();
