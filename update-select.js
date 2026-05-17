const fs = require('fs');
let html = fs.readFileSync('sections/06_scripts.html', 'utf8');

const scriptStart = '<script id="yyk-custom-select-init">';
const scriptEnd = '</script>';
const startIndex = html.indexOf(scriptStart);
const endIndex = html.indexOf(scriptEnd, startIndex);

if (startIndex !== -1 && endIndex !== -1) {
  const newJs = `
<script id="yyk-custom-select-init">
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
        trigger.innerHTML = (opt ? opt.innerHTML : '') + '<span class="yyk-custom-arrow">▼</span>';
      }
      updateTrigger();

      Array.prototype.forEach.call(select.options, function(opt, index){
        var item = document.createElement('div');
        item.className = 'yyk-custom-select-item';
        item.innerHTML = opt.innerHTML;
        // USE MOUSEDOWN INSTEAD OF CLICK SO IT FIRES IMMEDIATELY AND RELIABLY
        item.addEventListener('mousedown', function(e){
          e.stopPropagation();
          e.preventDefault(); // Prevent focus loss
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
      // Don't close if clicking on a scrollbar of the list!
      if(e.target.closest('.yyk-custom-select-list')) return;
      document.querySelectorAll('.yyk-custom-select').forEach(function(w){ w.classList.remove('open'); });
    });
  }

  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initCustomSelects);
  else initCustomSelects();

  setTimeout(initCustomSelects, 500);
  setTimeout(initCustomSelects, 1500);
})();
`;
  html = html.substring(0, startIndex) + newJs + html.substring(endIndex);
  fs.writeFileSync('sections/06_scripts.html', html);
  console.log("Replaced custom select logic with mousedown.");
}
