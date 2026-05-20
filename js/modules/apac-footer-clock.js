(function(){
  "use strict";

  var nodes = [
    { key: "seoul", offset: 9 },
    { key: "tokyo", offset: 9 },
    { key: "taipei", offset: 8 },
    { key: "shanghai", offset: 8 }
  ];

  function pad(value){
    return value < 10 ? "0" + value : String(value);
  }

  function timeForOffset(offset){
    var now = new Date();
    var utc = now.getTime() + now.getTimezoneOffset() * 60000;
    var local = new Date(utc + offset * 3600000);
    return pad(local.getHours()) + ":" + pad(local.getMinutes());
  }

  function updateApacClock(){
    for(var i = 0; i < nodes.length; i++){
      var item = nodes[i];
      var el = document.querySelector('[data-apac-time="' + item.key + '"]');
      if(!el) continue;

      var nextValue = timeForOffset(item.offset);
      if(el.textContent !== nextValue){
        el.textContent = nextValue;
        el.setAttribute("datetime", nextValue);
      }
    }
  }

  function scheduleNextMinute(){
    var now = new Date();
    var delay = (60 - now.getSeconds()) * 1000 - now.getMilliseconds() + 40;
    window.setTimeout(function(){
      updateApacClock();
      window.setInterval(updateApacClock, 60000);
    }, delay);
  }

  if(document.readyState === "loading"){
    document.addEventListener("DOMContentLoaded", function(){
      updateApacClock();
      scheduleNextMinute();
    });
  }else{
    updateApacClock();
    scheduleNextMinute();
  }
})();
