(function(){
  function panel(){return document.getElementById('tier1ControlPanel')||document.querySelector('.tier1-control-panel')||document.querySelector('.control-panel')}
  function ensure(){var p=panel(); if(!p||p.querySelector('[data-panel="bcp"]'))return; var b=document.createElement('button'); b.type='button'; b.className='nav-link'; b.setAttribute('data-panel','bcp'); b.textContent='BCP & Resilience'; p.appendChild(b);}
  function bind(){if(window.__YYK_BCP_BIND__)return; window.__YYK_BCP_BIND__=true; document.addEventListener('click',function(ev){var b=ev.target.closest('[data-panel="bcp"]'); if(!b)return; ev.preventDefault(); var e=document.getElementById('bcpEngine'); if(!e)return; document.querySelectorAll('[id$="Engine"],.engine,.modal,.panel-layer').forEach(function(x){if(x!==e){x.classList.remove('active');x.setAttribute('aria-hidden','true');}}); e.classList.add('active'); e.setAttribute('aria-hidden','false'); document.body.classList.add('apex-modal-open');},true)}
  function run(){ensure();bind()}
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',run);else run();
  setTimeout(run,500);
})();
