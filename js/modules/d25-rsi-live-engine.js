(function(){
  'use strict';
  const API_ENDPOINT = '/api/regional-synergy-index.json';
  const ids = {
    box:'regionalSynergyIndexLive', score:'rsiLiveScore', bar:'rsiLiveBar',
    narrative:'rsiLiveNarrative', source:'rsiLiveSource', CN:'rsiCN', KR:'rsiKR', JP:'rsiJP', TW:'rsiTW'
  };
  function el(id){ return document.getElementById(id); }
  function clamp(n){ n=Number(n); if(!Number.isFinite(n)) return 0; return Math.max(0, Math.min(100, Math.round(n))); }
  function embedded(){
    try{ return JSON.parse(el('d25-rsi-backend-data').textContent); }
    catch(e){ return null; }
  }
  function compute(data){
    const regions = data && data.regions ? data.regions : {};
    const weights = data && data.weights ? data.weights : {};
    const map = [
      ['CN','china_license_visibility'],
      ['KR','korea_distribution_readiness'],
      ['JP','japan_purity_route_readiness'],
      ['TW','taiwan_silicon_shield_continuity']
    ];
    let weighted=0,total=0;
    map.forEach(function(pair){
      const code=pair[0], key=pair[1];
      const score=clamp(regions[code] && regions[code].score);
      const w=Number(weights[key] || 0.25);
      weighted += score*w; total += w;
    });
    return clamp(total ? weighted/total : 0);
  }
  function render(data, status){
    const box=el(ids.box); if(!box || !data) return;
    const score=compute(data);
    box.dataset.rsi=String(score);
    box.dataset.liveStatus=status || 'fallback';
    el(ids.score).textContent=score+'%';
    el(ids.bar).style.width=score+'%';
    ['CN','KR','JP','TW'].forEach(function(code){
      const node=el(ids[code]);
      if(node && data.regions && data.regions[code]) node.textContent=clamp(data.regions[code].score);
    });
    const controls=data.controls || {};
    el(ids.narrative).textContent = 'Live balance across China, Korea, Japan and Taiwan · origin: '+(controls.origin_required || 'verified origin')+' · gap closers: '+((controls.primary_gap_closer_hubs || ['Kuantan','Busan']).join(' + '))+'.';
    el(ids.source).textContent = status === 'live'
      ? 'Source: live backend API · '+(data.updated_at || 'timestamp pending')
      : 'Source: embedded backend fallback · '+(data.updated_at || 'timestamp pending')+' · replaceable by '+API_ENDPOINT;
  }
  async function init(){
    const fallback=embedded();
    render(fallback,'fallback');
    try{
      const res=await fetch(API_ENDPOINT,{cache:'no-store'});
      if(!res.ok) throw new Error('API unavailable');
      const live=await res.json();
      render(live,'live');
    }catch(e){
      render(fallback,'fallback');
    }
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',init,{once:true}); else init();
})();
