const fs = require('fs');

const css = `
/* =========================================================
   Task 07: Custom Select UI for all dropdowns (Replaces Native)
   ========================================================= */
.yyk-custom-select { position: relative; user-select: none; width: 100%; }
.yyk-custom-select-trigger {
    background-color: #111; color: #fff;
    border: 1px solid rgba(255,255,255,.18); border-radius: 4px;
    padding: 8px 12px; cursor: pointer; display: flex;
    justify-content: space-between; align-items: center;
    transition: all 0.3s ease; font-size: inherit; min-height: 38px;
}
.yyk-custom-select.open .yyk-custom-select-trigger {
    border-color: rgba(201,162,39,.70); box-shadow: 0 0 0 2px rgba(201,162,39,.2);
}
.yyk-custom-arrow { font-size: 10px; color: #fff; transition: transform 0.3s ease; margin-left: 8px; }
.yyk-custom-select.open .yyk-custom-arrow { transform: rotate(180deg); }
.yyk-custom-select-list {
    position: absolute; top: calc(100% + 4px); left: 0; right: 0;
    background-color: #111; border: 1px solid rgba(201,162,39,.70); border-radius: 4px;
    box-shadow: 0 8px 16px rgba(0,0,0,0.8); z-index: 9999;
    max-height: 0; overflow: hidden; opacity: 0;
    transition: max-height 0.3s ease-in-out, opacity 0.3s ease-in-out;
}
.yyk-custom-select.open .yyk-custom-select-list { max-height: 250px; opacity: 1; overflow-y: auto; }
.yyk-custom-select-item {
    padding: 10px 12px; color: #fff; cursor: pointer; transition: background-color 0.2s ease;
    border-bottom: 1px solid rgba(255,255,255,0.05);
}
.yyk-custom-select-item:last-child { border-bottom: none; }
.yyk-custom-select-item:hover, .yyk-custom-select-item.selected {
    background-color: rgba(201,162,39,.3); color: #fff;
}
`;
fs.appendFileSync('css/overrides.css', css);

const js = `
<script id=\"yyk-custom-select-init\">
(function(){
  function initCustomSelects(){
    document.querySelectorAll('select:not([multiple])').forEach(function(select){
      if(select.dataset.customized) return;
      if(!select.closest('.sogo-inline, .sogo-field, .yyk-pricing-field, .yyk-legal-field, .yyk-partnership-field, .rt-field, .yyk-tds-field, .yyk-euc-checker, .rfq-field, .rfq-auto-field, .tier1-select, .sim-field, .g27-field, .field')) return;

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
        trigger.innerHTML = (opt ? opt.innerHTML : '') + '<span class=\"yyk-custom-arrow\">▼</span>';
      }
      updateTrigger();

      Array.prototype.forEach.call(select.options, function(opt, index){
        var item = document.createElement('div');
        item.className = 'yyk-custom-select-item';
        item.innerHTML = opt.innerHTML;
        item.addEventListener('click', function(e){
          e.stopPropagation();
          select.selectedIndex = index;
          updateTrigger();
          select.dispatchEvent(new Event('change', {bubbles: true}));
          select.dispatchEvent(new Event('input', {bubbles: true}));
          wrapper.classList.remove('open');
        });
        list.appendChild(item);
      });

      trigger.addEventListener('click', function(e){
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

    document.addEventListener('click', function(){
      document.querySelectorAll('.yyk-custom-select').forEach(function(w){ w.classList.remove('open'); });
    });
  }

  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initCustomSelects);
  else initCustomSelects();

  setTimeout(initCustomSelects, 500);
  setTimeout(initCustomSelects, 1500);
})();
</script>
`;
fs.appendFileSync('sections/06_scripts.html', js);
