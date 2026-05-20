(function(){
  function normalizeEmail(value){ return String(value || '').trim().toLowerCase(); }
  function fallbackCopy(text){
    var ta = document.createElement('textarea');
    ta.value = text;
    ta.setAttribute('readonly','');
    ta.style.position = 'fixed';
    ta.style.left = '-9999px';
    document.body.appendChild(ta);
    ta.select();
    try { document.execCommand('copy'); } catch(e) {}
    document.body.removeChild(ta);
  }
  function showCopyTooltip(event, message){
    var tooltip = document.querySelector('.yyk-copy-tooltip');
    if(!tooltip){
      tooltip = document.createElement('div');
      tooltip.className = 'yyk-copy-tooltip';
      tooltip.setAttribute('role','status');
      tooltip.setAttribute('aria-live','polite');
      document.body.appendChild(tooltip);
    }
    tooltip.textContent = message || 'Copied';
    var x = event && typeof event.clientX === 'number' ? event.clientX : window.innerWidth / 2;
    var y = event && typeof event.clientY === 'number' ? event.clientY : window.innerHeight / 2;
    tooltip.style.left = x + 'px';
    tooltip.style.top = y + 'px';
    tooltip.classList.add('active');
    window.clearTimeout(tooltip._yykTimer);
    tooltip._yykTimer = window.setTimeout(function(){ tooltip.classList.remove('active'); }, 950);
  }
  document.querySelectorAll('.yyk-corporate-authority-card .yyk-contact-email').forEach(function(link){
    var email = normalizeEmail(link.textContent);
    if(email.indexOf('@') === -1) return;
    link.textContent = email;
    link.setAttribute('href', 'mailto:' + email);
  });
  document.querySelectorAll('.yyk-corporate-authority-card [data-copy-email]').forEach(function(btn){
    var email = normalizeEmail(btn.getAttribute('data-copy-email'));
    if(email.indexOf('@') === -1) return;
    btn.setAttribute('data-copy-email', email);
  });
  document.addEventListener('click', function(event){
    var btn = event.target.closest('.yyk-corporate-authority-card [data-copy-email]');
    if(!btn) return;
    var email = normalizeEmail(btn.getAttribute('data-copy-email'));
    if(!email || email.indexOf('@') === -1) return;
    if(navigator.clipboard && navigator.clipboard.writeText){
      navigator.clipboard.writeText(email).catch(function(){ fallbackCopy(email); });
    } else { fallbackCopy(email); }
    btn.classList.add('copied');
    /* Task 09: tooltip removed — was calling showCopyTooltip here */
    window.setTimeout(function(){ btn.classList.remove('copied'); }, 950);
  });
})();
