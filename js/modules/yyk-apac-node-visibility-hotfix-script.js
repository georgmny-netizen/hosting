(function(){
  function applyNodeVisibility(){
    var map=document.getElementById('yykFooterLogisticsMap');
    if(!map)return;
    map.querySelectorAll('.port-node').forEach(function(node){
      var dot=node.querySelector('.port-dot');
      if(!dot)return;
      var city=node.getAttribute('data-port');
      var cx=parseFloat(dot.getAttribute('data-cx')||dot.getAttribute('x')||0);
      var cy=parseFloat(dot.getAttribute('data-cy')||dot.getAttribute('y')||0);
      var size=(city==='Busan'||city==='Incheon')?12:8;
      dot.setAttribute('width',String(size));
      dot.setAttribute('height',String(size));
      if(!Number.isNaN(cx)&&!Number.isNaN(cy)){dot.setAttribute('x',String(cx-size/2));dot.setAttribute('y',String(cy-size/2));}
      dot.setAttribute('rx','0');dot.setAttribute('ry','0');
      dot.style.display='inline';dot.style.visibility='visible';dot.style.opacity='1';dot.style.fill='#FFCC33';dot.style.stroke='#d8ffe8';dot.style.strokeWidth='1';
      node.style.display='inline';node.style.visibility='visible';node.style.opacity='1';
    });
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',applyNodeVisibility,{once:true});else applyNodeVisibility();
  window.addEventListener('load',applyNodeVisibility,{once:true});
})();
