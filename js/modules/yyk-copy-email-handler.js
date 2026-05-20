(function(){
  function initCopyButtons(){
    document.querySelectorAll('.yyk-copy-email[data-copy-email]').forEach(function(btn){
      // Remove native browser tooltip
      btn.removeAttribute('title');
      btn.setAttribute('data-no-intel', '1');
      if(btn._copyInited) return;
      btn._copyInited = true;
      btn.addEventListener('click', function(){
        var email = btn.getAttribute('data-copy-email');
        if(!email) return;
        var original = btn.textContent;
        navigator.clipboard ? navigator.clipboard.writeText(email).then(function(){
          btn.textContent = 'Copied!';
          btn.style.borderColor = 'rgba(201,162,39,0.8)';
          btn.style.color = '#c9a227';
          setTimeout(function(){ btn.textContent = original; btn.style.borderColor = ''; btn.style.color = ''; }, 1800);
        }) : (function(){
          var ta = document.createElement('textarea');
          ta.value = email; ta.style.position = 'fixed'; ta.style.opacity = '0';
          document.body.appendChild(ta); ta.select();
          try{ document.execCommand('copy'); } catch(e){}
          document.body.removeChild(ta);
          btn.textContent = 'Copied!';
          btn.style.borderColor = 'rgba(201,162,39,0.8)';
          btn.style.color = '#c9a227';
          setTimeout(function(){ btn.textContent = original; btn.style.borderColor = ''; btn.style.color = ''; }, 1800);
        })();
      });
    });
  }
  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initCopyButtons);
  else initCopyButtons();
  setTimeout(initCopyButtons, 500);
})();
