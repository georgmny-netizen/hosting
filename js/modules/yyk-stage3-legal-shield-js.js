(function(){
  function q(s){return document.querySelector(s)}
  function qa(s){return Array.prototype.slice.call(document.querySelectorAll(s))}
  function openLegal(){var m=q('#yykLegalShieldModal');if(!m)return;m.classList.add('active');m.setAttribute('aria-hidden','false');document.body.classList.add('apex-modal-open')}
  function closeLegal(){var m=q('#yykLegalShieldModal');if(!m)return;m.classList.remove('active');m.setAttribute('aria-hidden','true');document.body.classList.remove('apex-modal-open')}
  function cleanGhosts(){
    qa('body *').forEach(function(el){
      if(!el || el.children.length) return;
      var t=(el.textContent||'').trim();
      if(/^;?var blob=new blob/i.test(t)){ el.remove(); }
    });
    qa('a[target="_blank"]').forEach(function(a){a.setAttribute('rel','noopener noreferrer')});
    qa('form').forEach(function(form){
      if(!form.querySelector('[name="yyk_legal_acceptance"]')){
        var i=document.createElement('input');i.type='hidden';i.name='yyk_legal_acceptance';i.value='rfq_preliminary_non_binding_apac_b2b';form.appendChild(i);
      }
      if(!form.querySelector('.yyk-form-legal-note')){
        var n=document.createElement('div');n.className='yyk-form-legal-note';n.style.cssText='margin-top:8px;color:#AEB4BC;font-size:12px;line-height:1.5';
        n.textContent='Submission is preliminary and subject to verification, export-control review and written commercial acceptance.';form.appendChild(n);
      }
    });
  }
  document.addEventListener('click',function(e){
    if(e.target.closest('[data-open-legal-shield]')){openLegal();return}
    if(e.target.closest('[data-close-legal-shield]')){closeLegal();return}
    if(e.target.id==='yykLegalShieldModal'){closeLegal();return}
    if(e.target.closest('.yyk-return-to-site,.yyk-back-to-site,.return-to-site')){
      var active=e.target.closest('.compliance-engine,.product-engine,.contact-engine,.esg-deep-layer,.sogo-drawer,.modal,.yyk-legal-modal');
      if(active){active.classList.remove('active');active.setAttribute('aria-hidden','true');document.body.classList.remove('apex-modal-open');}
    }
  });
  document.addEventListener('keydown',function(e){if(e.key==='Escape')closeLegal()});
  if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',cleanGhosts)}else{cleanGhosts()}
  setTimeout(cleanGhosts,600);
})();
