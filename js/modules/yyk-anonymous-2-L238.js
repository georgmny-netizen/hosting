document.addEventListener("DOMContentLoaded", function(){

// ESG inner navigation (anchors)
document.querySelectorAll('.esg-layer-toc a').forEach(link=>{
  link.addEventListener('click', function(e){
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if(target){
      target.scrollIntoView({behavior:'smooth', block:'start'});
    }
  });
});

// Compliance inner navigation
document.querySelectorAll('.compliance-toc a').forEach(link=>{
  link.addEventListener('click', function(e){
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if(target){
      target.scrollIntoView({behavior:'smooth', block:'start'});
    }
  });
});

});
