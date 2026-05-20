(function(){
  function activateSpecTab(key){
    if(!key) return;
    var section = document.getElementById('industrial-specs');
    if(!section) return;

    section.querySelectorAll('[data-spec-tab]').forEach(function(btn){
      var active = btn.getAttribute('data-spec-tab') === key;
      btn.classList.toggle('active', active);
      btn.setAttribute('aria-selected', active ? 'true' : 'false');
    });

    section.querySelectorAll('[data-spec-panel]').forEach(function(panel){
      var active = panel.getAttribute('data-spec-panel') === key;
      panel.classList.toggle('active', active);
      panel.hidden = !active;
      panel.setAttribute('aria-hidden', active ? 'false' : 'true');
    });
  }

  document.addEventListener('click', function(event){
    var btn = event.target.closest('#industrial-specs [data-spec-tab]');
    if(!btn) return;
    event.preventDefault();
    event.stopPropagation();
    activateSpecTab(btn.getAttribute('data-spec-tab'));
  }, true);

  document.addEventListener('DOMContentLoaded', function(){
    var active = document.querySelector('#industrial-specs [data-spec-tab].active');
    activateSpecTab(active ? active.getAttribute('data-spec-tab') : 'cu');
  });

  window.YYKActivateSpecTab = activateSpecTab;
})();
