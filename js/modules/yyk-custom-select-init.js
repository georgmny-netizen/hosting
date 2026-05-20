(function(){
  function initCustomSelects(){
    document.querySelectorAll('select:not([multiple])').forEach(function(select){
      if(select.dataset.customized) return;
      if(!select.closest('.sogo-inline, .sogo-field, .yyk-pricing-field, .yyk-legal-field, .yyk-partnership-field, .rt-field, .yyk-tds-field, .yyk-euc-checker, .rfq-field, .rfq-auto-field, .tier1-select, .sim-field, .g27-field, .field, .product-profit-risk-controls')) return;

      select.dataset.customized = 'true';
      select.style.display = 'none';

      var wrapper = document.createElement('div');
      wrapper.className = 'yyk-custom-select';

      var trigger = document.createElement('div');
      trigger.className = 'yyk-custom-select-trigger';

      var list = document.createElement('div');
      list.className = 'yyk-custom-select-list';

      function updateTrigger(){
        var opt = select.options[select.selectedIndex];
        trigger.innerHTML = (opt ? opt.innerHTML : '') + '<span class="yyk-custom-arrow">▼</span>';
      }
      updateTrigger();

      Array.prototype.forEach.call(select.options, function(opt, index){
        var item = document.createElement('div');
        item.className = 'yyk-custom-select-item';
        item.innerHTML = opt.innerHTML;
        item.addEventListener('mousedown', function(e){
          e.stopPropagation();
          e.preventDefault();
          select.selectedIndex = index;
          updateTrigger();
          select.dispatchEvent(new Event('change', {bubbles: true}));
          select.dispatchEvent(new Event('input', {bubbles: true}));
          wrapper.classList.remove('open');
        });
        list.appendChild(item);
      });

      trigger.addEventListener('mousedown', function(e){
        e.stopPropagation();
        var isOpen = wrapper.classList.contains('open');
        document.querySelectorAll('.yyk-custom-select').forEach(function(w){ w.classList.remove('open'); });
        if(!isOpen) wrapper.classList.add('open');
      });

      wrapper.appendChild(trigger);
      wrapper.appendChild(list);
      select.parentNode.insertBefore(wrapper, select.nextSibling);

      select.addEventListener('change', updateTrigger);
      select.addEventListener('input', updateTrigger);
    });

    document.addEventListener('mousedown', function(e){
      if(e.target.closest('.yyk-custom-select-list')) return;
      document.querySelectorAll('.yyk-custom-select').forEach(function(w){ w.classList.remove('open'); });
    });
  }

  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initCustomSelects);
  else initCustomSelects();

  setTimeout(initCustomSelects, 500);
  setTimeout(initCustomSelects, 1500);
})();
