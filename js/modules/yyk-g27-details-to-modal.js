/* =====================================================
   G27 Guardian: details → engine-style modal
   Matches the product-engine / compliance-engine pattern.
   ===================================================== */
(function(){
  'use strict';

  var container = document.getElementById('yyk-d27-guardian-canonical');
  if (!container) return;

  /* ---- build the engine overlay ---- */
  var engine = document.createElement('div');
  engine.className = 'g27-detail-engine';
  engine.id = 'g27DetailEngine';
  engine.setAttribute('aria-hidden', 'true');

  engine.innerHTML =
    '<div class="g27-detail-shell">' +
      '<div class="g27-detail-head">' +
        '<div>' +
          '<div class="eyebrow">GUARDIAN · DIRECTIVE 27</div>' +
          '<div class="g27-detail-title"></div>' +
        '</div>' +
        '<button class="g27-detail-close" type="button" aria-label="Close">&times;</button>' +
      '</div>' +
      '<div class="g27-detail-content"></div>' +
    '</div>';

  document.body.appendChild(engine);

  var titleEl   = engine.querySelector('.g27-detail-title');
  var contentEl = engine.querySelector('.g27-detail-content');
  var closeBtn  = engine.querySelector('.g27-detail-close');

  function openEngine(summaryText, detailsEl) {
    titleEl.textContent = summaryText;
    contentEl.innerHTML = '';

    /* Clone children except <summary> */
    var nodes = detailsEl.children;
    for (var i = 0; i < nodes.length; i++) {
      if (nodes[i].tagName === 'SUMMARY') continue;
      var clone = nodes[i].cloneNode(true);

      /* Clear IDs to avoid duplicates */
      var idEls = clone.querySelectorAll('[id]');
      for (var k = 0; k < idEls.length; k++) {
        idEls[k].setAttribute('data-orig-id', idEls[k].id);
        idEls[k].id = '';
      }
      /* Remove inline onclick */
      var onclicks = clone.querySelectorAll('[onclick]');
      for (var o = 0; o < onclicks.length; o++) {
        onclicks[o].removeAttribute('onclick');
      }

      contentEl.appendChild(clone);
    }

    /* Copy current values from original inputs */
    var origInputs = detailsEl.querySelectorAll('input, select');
    var clonedInputs = contentEl.querySelectorAll('input, select');
    for (var j = 0; j < origInputs.length && j < clonedInputs.length; j++) {
      clonedInputs[j].value = origInputs[j].value;
    }

    /* Bind validation button — directly read from modal inputs */
    var rfqBtn = contentEl.querySelector('.g27-btn');
    if (rfqBtn) {
      rfqBtn.addEventListener('click', function() {
        runModalValidation();
      });
    }

    engine.classList.add('active');
    engine.setAttribute('aria-hidden', 'false');
    document.body.classList.add('apex-modal-open');
  }

  /* Run validation directly from modal input values */
  function runModalValidation() {
    var G = window.YYK_G27_GUARDIAN;
    if (!G) return;

    /* Read values directly from modal clone inputs */
    var matEl  = contentEl.querySelector('[data-orig-id="yykG27Material"]');
    var purEl  = contentEl.querySelector('[data-orig-id="yykG27Purity"]');
    var uthEl  = contentEl.querySelector('[data-orig-id="yykG27UTh"]');
    var feEl   = contentEl.querySelector('[data-orig-id="yykG27Fe"]');
    var sanEl  = contentEl.querySelector('[data-orig-id="yykG27Sanctions"]');

    var params = {
      material:  matEl  ? matEl.value  : 'CORE',
      purity:    purEl  ? purEl.value  : '99.9999',
      uThPpb:    uthEl  ? uthEl.value  : '0.01',
      fePpb:     feEl   ? feEl.value   : '5',
      sanctions: sanEl  ? sanEl.value  : 'clear'
    };

    /* Also sync to original inputs so the page state stays current */
    if (matEl)  { var o = document.getElementById('yykG27Material');  if (o) o.value = params.material; }
    if (purEl)  { var o2 = document.getElementById('yykG27Purity');   if (o2) o2.value = params.purity; }
    if (uthEl)  { var o3 = document.getElementById('yykG27UTh');      if (o3) o3.value = params.uThPpb; }
    if (feEl)   { var o4 = document.getElementById('yykG27Fe');       if (o4) o4.value = params.fePpb; }
    if (sanEl)  { var o5 = document.getElementById('yykG27Sanctions');if (o5) o5.value = params.sanctions; }

    /* Run validation using the public API */
    var scan = G.simulateSanctionsScan(params);
    var rfq  = G.validateRfq(params);
    var blocked = scan.blocked || rfq.blocked;

    var msg = blocked
      ? 'HIGH RISK \u00b7 Compliance Officer required \u00b7 ' + rfq.release + ' \u00b7 ' +
        rfq.violations.concat(scan.blocked ? [scan.reason] : []).join('; ')
      : 'PASS \u00b7 Controlled RFQ path available \u00b7 ' + rfq.release;

    /* Update modal result */
    var modalResult = contentEl.querySelector('[data-orig-id="yykG27Result"]');
    if (modalResult) {
      modalResult.textContent = msg;
      if (blocked) {
        modalResult.classList.add('block');
      } else {
        modalResult.classList.remove('block');
      }
    }

    /* Also update original result */
    var origResult = document.getElementById('yykG27Result');
    if (origResult) {
      origResult.textContent = msg;
      origResult.classList.toggle('block', blocked);
    }
  }

  function closeEngine() {
    engine.classList.remove('active');
    engine.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('apex-modal-open');
    document.body.style.overflow = '';
  }

  closeBtn.addEventListener('click', closeEngine);
  engine.addEventListener('click', function(e) {
    if (e.target === engine) closeEngine();
  });
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && engine.classList.contains('active')) closeEngine();
  });

  /* ---- intercept all summary clicks ---- */
  var allDetails = container.querySelectorAll('details');
  for (var d = 0; d < allDetails.length; d++) {
    (function(detail) {
      var summary = detail.querySelector('summary');
      if (!summary) return;
      summary.addEventListener('click', function(e) {
        e.preventDefault();
        if (detail.open) detail.removeAttribute('open');
        openEngine(summary.textContent, detail);
      });
    })(allDetails[d]);
  }
})();
