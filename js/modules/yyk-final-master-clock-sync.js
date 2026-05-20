(function(){
  function pad(n){return String(n).padStart(2,"0")}
  function updateFooterClock(){
    try{
      var now=new Date();
      var utc=now.getTime()+now.getTimezoneOffset()*60000;
      var zones=[["KST",9],["JST",9],["MYT",8],["CST",8]];
      var text=zones.map(function(z){
        var d=new Date(utc+z[1]*3600000);
        return z[0]+" "+pad(d.getHours())+":"+pad(d.getMinutes());
      }).join("  ·  ");
      document.querySelectorAll(".footer-tech-center,.footer-terminal-core time,#footerApacClock,#apacClock").forEach(function(el){el.textContent=text;});
    }catch(e){}
  }
  updateFooterClock();
  window.setInterval(updateFooterClock,60000);
})();
