const fs = require('fs');
const files = ['04_main-content.html', '06_scripts.html', '03_control-panel.html', '05_modal-engines.html'];
files.forEach(function(f) {
  let c = fs.readFileSync('c:/tmp/hosting/sections/' + f, 'utf8');
  let count = 0;
  
  const reps = [
    [/#10b981/gi, '#0ea5e9'],
    [/#00FF88/gi, '#38bdf8'],
    [/#00ff88/gi, '#38bdf8'],
    [/#7CFFB2/gi, '#7dd3fc'],
    [/#7cffb2/gi, '#7dd3fc'],
    [/#10F2A0/gi, '#22d3ee'],
    [/#10f2a0/gi, '#22d3ee'],
    [/#22c55e/gi, '#06b6d4'],
    [/#00ffcc/gi, '#67e8f9'],
    [/#00FFCC/gi, '#67e8f9'],
  ];
  
  reps.forEach(function(pair) {
    const m = c.match(pair[0]);
    if (m) count += m.length;
    c = c.replace(pair[0], pair[1]);
  });
  
  if (count > 0) {
    console.log(f + ': ' + count + ' replacements');
    fs.writeFileSync('c:/tmp/hosting/sections/' + f, c);
  }
});
console.log('Done.');
