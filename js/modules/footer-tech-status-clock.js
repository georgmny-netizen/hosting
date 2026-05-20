(function(){
  function fmt(zone){
    return new Intl.DateTimeFormat('en-GB',{
      timeZone:zone,
      hour:'2-digit',
      minute:'2-digit',
      hour12:false
    }).format(new Date());
  }
  function tick(){
    var el = document.getElementById('footerTechClock');
    if(!el) return;
    el.textContent =
      'SEOUL ' + fmt('Asia/Seoul') +
      ' | TOKYO ' + fmt('Asia/Tokyo') +
      ' | TAIPEI ' + fmt('Asia/Taipei') +
      ' | SHANGHAI ' + fmt('Asia/Shanghai');
  }
  tick();
  setInterval(tick, 30000);
})();
