(function(){
  function syncHeights(){
    var tables = document.querySelectorAll('.passport .table-panel table');
    if(!tables.length) return;
    
    // reset heights to natural first to allow shrinking on resize
    tables.forEach(function(table){
      var rows = table.querySelectorAll('tr');
      rows.forEach(function(row){
        row.style.height = 'auto';
      });
    });

    // Assume all tables have the same number of rows (4)
    var numRows = 4;
    for(var i=0; i<numRows; i++){
      var maxH = 0;
      var currentRows = [];
      
      tables.forEach(function(table){
        var rows = table.querySelectorAll('tr');
        if(rows[i]){
          currentRows.push(rows[i]);
          var h = rows[i].getBoundingClientRect().height;
          if(h > maxH) maxH = h;
        }
      });
      
      if(maxH > 0){
        currentRows.forEach(function(row){
          row.style.height = maxH + 'px';
        });
      }
    }
  }

  function syncDenseCards(){
    document.querySelectorAll('.grid3, .grid4').forEach(function(grid){
      var cards = grid.querySelectorAll('.dense-card');
      if(cards.length < 2) return;
      
      cards.forEach(function(card){
        var t1 = card.querySelector('.card-title');
        var t2 = card.querySelector('.card-text');
        var kv = card.querySelector('.kv');
        if(t1) t1.style.height = 'auto';
        if(t2) t2.style.height = 'auto';
        if(kv) kv.style.height = 'auto';
      });
      
      var maxT1 = 0, maxT2 = 0, maxKv = 0;
      cards.forEach(function(card){
        var t1 = card.querySelector('.card-title');
        var t2 = card.querySelector('.card-text');
        var kv = card.querySelector('.kv');
        if(t1 && t1.getBoundingClientRect().height > maxT1) maxT1 = t1.getBoundingClientRect().height;
        if(t2 && t2.getBoundingClientRect().height > maxT2) maxT2 = t2.getBoundingClientRect().height;
        if(kv && kv.getBoundingClientRect().height > maxKv) maxKv = kv.getBoundingClientRect().height;
      });
      
      cards.forEach(function(card){
        var t1 = card.querySelector('.card-title');
        var t2 = card.querySelector('.card-text');
        var kv = card.querySelector('.kv');
        if(t1 && maxT1 > 0) t1.style.height = maxT1 + 'px';
        if(t2 && maxT2 > 0) t2.style.height = maxT2 + 'px';
        if(kv && maxKv > 0) kv.style.height = maxKv + 'px';
      });
    });
  }

  function runAllSyncs(){
    syncHeights();
    syncDenseCards();
  }

  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', runAllSyncs);
  else runAllSyncs();
  
  window.addEventListener('resize', runAllSyncs);
  setTimeout(runAllSyncs, 500);
  setTimeout(runAllSyncs, 1500);
})();
