(function(){
  function kill(){
    var sigs=[
      'Quantum Materials Roadmap 2035',
      'Green Transformation of Korean Chaebols',
      'Failure Modes in Ultra-Pure Supply Chains',
      'Ultra-Pure Supply Failure Modes',
      'this hub advocates stricter verification'
    ];
    document.querySelectorAll('section,article,div,p,li').forEach(function(el){
      if(el.closest('#yyk-intelligence-hub-canonical')) return;
      var txt=el.textContent||'';
      if(sigs.some(function(s){ return txt.indexOf(s) !== -1; })){
        el.setAttribute('data-killed','final-knowledge-orphan');
        el.style.display='none';
      }
    });
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',kill,{once:true}); else kill();
  setTimeout(kill,300);
  setTimeout(kill,1200);
})();
