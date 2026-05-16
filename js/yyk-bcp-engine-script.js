(function(){
  function q(s){return document.querySelector(s)}
  function qa(s){return Array.prototype.slice.call(document.querySelectorAll(s))}
  function panel(){return q('#tier1ControlPanel')||q('.tier1-control-panel')||q('.control-panel')}
  function addButton(){var p=panel(); if(!p||p.querySelector('[data-panel="bcp"]'))return; var b=document.createElement('button'); b.setAttribute('data-panel','bcp'); b.className='nav-link'; b.type='button'; b.textContent='BCP & Resilience'; p.appendChild(b)}
  function open(){var e=q('#bcpEngine'); if(!e)return; qa('[id$="Engine"],.engine,.modal,.panel-layer').forEach(function(x){if(x!==e){x.classList.remove('active');x.setAttribute('aria-hidden','true')}}); e.classList.add('active'); e.setAttribute('aria-hidden','false'); document.body.classList.add('apex-modal-open')}
  function close(){var e=q('#bcpEngine'); if(e){e.classList.remove('active');e.setAttribute('aria-hidden','true');document.body.classList.remove('apex-modal-open')}}
  function download(){
    var html='<!doctype html><html><head><meta charset="utf-8"><title>YONGYEOKYO BCP One-Pager</title></head><body><h1>BCP & Antifragility Protocol</h1><p>Emergency Safety Stock, T+1h incident reporting, alternate ports, secondary banking and mirrored VDR.</p></body></html>';
    var blob=new Blob([html],{type:'text/html'});
    var url=URL.createObjectURL(blob);
    var a=document.createElement('a');
    a.href=url;
    a.download='YONGYEOKYO_BCP_One_Pager.html';
    a.click();
    URL.revokeObjectURL(url);
  }
  
  function ensure(){var p=panel(); if(!p||p.querySelector('[data-panel="bcp"]'))return; var b=document.createElement('button'); b.type='button'; b.className='nav-link'; b.setAttribute('data-panel','bcp'); b.textContent='BCP & Resilience'; p.appendChild(b);}
  function bind(){
    if(window.__YYK_BCP_BIND__)return; 
    window.__YYK_BCP_BIND__=true; 
    document.addEventListener('click',function(ev){
      var b=ev.target.closest('[data-panel="bcp"]'); 
      if(b){
        ev.preventDefault(); 
        open();
        return;
      }
      if(ev.target && ev.target.id === 'bcpDownload'){
        download();
        return;
      }
    },true);
  }
  function run(){ensure();bind()}
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',run);else run();
  setTimeout(run,500);

  window.yykBcpOpen = open;
  window.yykBcpClose = close;
  window.yykBcpDownload = download;
})();
