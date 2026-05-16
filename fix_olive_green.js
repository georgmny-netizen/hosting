const fs = require('fs');
let c = fs.readFileSync('c:/tmp/hosting/css/legacy-blocks.css', 'utf8');
let total = 0;

const reps = [
  // Olive green rgba -> steel blue rgba
  ['rgba(158,179,123', 'rgba(130,170,210', 0],  // olive -> steel blue
  ['rgba(91,132,77',   'rgba(80,130,180',  0],   // dark olive -> dark steel
  ['rgba(16,185,129',  'rgba(14,165,233',  0],   // emerald -> sky blue
  ['rgba(207,250,232', 'rgba(207,235,252', 0],   // green tint -> blue tint
  
  // Olive green hex -> steel blue hex
  ['#c7d6b3', '#b0ccdf', 0],  // light olive text -> light steel
  ['#C7D6B3', '#b0ccdf', 0],
  ['#9eb37b', '#7ba3c4', 0],  // mid olive -> mid steel
  ['#9EB37B', '#7ba3c4', 0],
];

reps.forEach(function(r) {
  const re = new RegExp(r[0].replace(/[()#]/g, '\\$&'), 'g');
  const m = c.match(re);
  if (m) {
    r[2] = m.length;
    total += m.length;
    console.log(r[0], '->', r[1], ':', m.length);
  }
  c = c.replace(re, r[1]);
});

// Also check HTML sections
const htmlFiles = ['04_main-content.html', '06_scripts.html', '03_control-panel.html', '05_modal-engines.html'];
htmlFiles.forEach(function(f) {
  let h = fs.readFileSync('c:/tmp/hosting/sections/' + f, 'utf8');
  let hcount = 0;
  
  [['#c7d6b3','#b0ccdf'],['#C7D6B3','#b0ccdf'],['#9eb37b','#7ba3c4'],['#9EB37B','#7ba3c4']].forEach(function(pair) {
    const re = new RegExp(pair[0].replace('#','#'), 'gi');
    const m = h.match(re);
    if (m) { hcount += m.length; total += m.length; }
    h = h.replace(re, pair[1]);
  });
  
  // rgba in inline styles
  [['rgba(158,179,123','rgba(130,170,210'],['rgba(91,132,77','rgba(80,130,180']].forEach(function(pair) {
    const re = new RegExp(pair[0].replace(/[()]/g, '\\$&'), 'g');
    const m = h.match(re);
    if (m) { hcount += m.length; total += m.length; }
    h = h.replace(re, pair[1]);
  });
  
  if (hcount > 0) {
    console.log(f + ':', hcount, 'HTML replacements');
    fs.writeFileSync('c:/tmp/hosting/sections/' + f, h);
  }
});

console.log('\nTotal replacements:', total);
fs.writeFileSync('c:/tmp/hosting/css/legacy-blocks.css', c);
console.log('Done.');
