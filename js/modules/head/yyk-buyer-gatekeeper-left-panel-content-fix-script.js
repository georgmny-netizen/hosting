(function(){
  'use strict';

  const defaultContent = {
    title: 'Buyer Gatekeeper Matrix',
    subtitle: 'Qualified counterparty access, document release and RFQ control.',
    primary: 'Buyer Gatekeeper Requirements',
    intro: 'This panel controls what the buyer must provide before CoA access, sample release or RFQ execution.',
    items: [
      'Corporate identity and business email verification.',
      'KYC / KYB and sanctions screening.',
      'Material, purity, form, destination and end-use scope.',
      'NDA/VDR approval where controlled documents are requested.',
      'No binding quote or supply obligation before written agreement.'
    ]
  };

  function q(sel){ return document.querySelector(sel); }

  function renderLeftPanel(data){
    data = data || defaultContent;

    const title = q('#yykBgmModalTitle');
    const sub = q('#yykBgmModalSub');
    const primary = q('#yykBgmPrimaryTitle');
    const list = q('#yykBgmEvidenceList');

    if(title && !title.textContent.trim()) title.textContent = data.title;
    if(sub && !sub.textContent.trim()) sub.textContent = data.subtitle;
    if(primary) primary.textContent = data.primary;

    if(list){
      list.innerHTML = data.items.map(x => '<li>' + x + '</li>').join('');
    }

    const panel = primary ? primary.closest('.bgm-panel') : null;
    if(panel && !panel.querySelector('.bgm-left-summary')){
      const summary = document.createElement('div');
      summary.className = 'bgm-left-summary';
      summary.innerHTML = '<strong>Access Logic</strong>' + data.intro;
      panel.insertBefore(summary, primary.nextSibling);
    }

    if(panel){
      panel.classList.remove('is-empty-warning');
      panel.setAttribute('data-content-state','filled');
    }
  }

  function repairEmptyLeftPanel(){
    const list = q('#yykBgmEvidenceList');
    const primary = q('#yykBgmPrimaryTitle');

    const empty = !list || !list.textContent.trim() || list.children.length === 0;
    if(empty){
      renderLeftPanel(defaultContent);
    }

    const panel = primary ? primary.closest('.bgm-panel') : null;
    if(panel && (!panel.textContent || panel.textContent.trim().length < 40)){
      panel.classList.add('is-empty-warning');
      renderLeftPanel(defaultContent);
    }
  }

  function bindOpenStateRepair(){
    const modal = q('#yykBuyerGatekeeperModal');
    if(!modal || modal.dataset.leftPanelObserver === 'true') return;
    modal.dataset.leftPanelObserver = 'true';

    const observer = new MutationObserver(function(){
      if(modal.classList.contains('active')) repairEmptyLeftPanel();
    });
    observer.observe(modal, {attributes:true, childList:true, subtree:true});
  }

  function init(){
    renderLeftPanel(defaultContent);
    repairEmptyLeftPanel();
    bindOpenStateRepair();
    document.addEventListener('click', function(e){
      if(e.target && e.target.closest && e.target.closest('[data-bgm-action]')){
        setTimeout(repairEmptyLeftPanel, 0);
        setTimeout(repairEmptyLeftPanel, 200);
      }
    });
  }

  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', init, {once:true});
  }else{
    init();
  }
  setTimeout(init,300);
  setTimeout(init,1200);
})();
