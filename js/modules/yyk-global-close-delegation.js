(function(){
  'use strict';
  document.addEventListener('click', function(e){
    // [FIX] Added .yyk-stage-close-btn and [class$="-close-btn"] to catch dynamically injected SEO close buttons
    var closeBtn = e.target.closest(
      '[class$="-close"], [class$="-close-btn"], [id^="close"], .bcp-close, .compliance-close, .product-close, .contact-close, .yyk-stage-close-btn'
    );
    console.log('[YYK-CLOSE-DEBUG] click target:', e.target.tagName, e.target.id, e.target.className, 'closeBtn:', closeBtn); if(!closeBtn) return;
    
    // Attempt to find the modal engine wrapper. Note: some inner shells have role="dialog" but don't control the .active state
    var engine = closeBtn.closest(
      '[class$="-engine"], [class$="-overlay"], #yykPhaseOverlay, .sogo-drawer, .yyk-bcp-window, .compliance-engine, .product-engine, .contact-engine, .rt-overlay, .sogo-overlay, [role="dialog"][aria-modal="true"]'
    );
    
    // [FIX] Smart traversal: if the found element is an inner shell (no .active class), traverse up to find the true outer wrapper that holds the .active state.
    // This prevents the bug where the inner shell is incorrectly targeted, leaving the outer wrapper visible while body loses apex-modal-open.
    if(engine && !engine.classList.contains('active')){
      var activeParent = engine.closest('.active');
      if(activeParent) engine = activeParent;
    }
    console.log('[YYK-CLOSE-DEBUG] engine:', engine ? engine.id + ' ' + engine.className : 'NULL'); if(!engine) return; console.log('[YYK-CLOSE-DEBUG] CLOSING engine:', engine.id);
    e.preventDefault();
    e.stopImmediatePropagation();
    engine.classList.remove('active');
    engine.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('apex-modal-open');
    document.body.style.overflow = '';
  }, true);
})();

// Accordion exclusive logic
document.addEventListener('DOMContentLoaded', function() {
  const accordions = document.querySelectorAll('.hero-accordion');
  accordions.forEach(acc => {
    acc.addEventListener('toggle', function() {
      if (this.open) {
        accordions.forEach(other => {
          if (other !== this && other.open) {
            other.open = false;
          }
        });
      }
    });
  });
});
