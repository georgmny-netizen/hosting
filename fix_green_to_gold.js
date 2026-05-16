const fs = require('fs');

// Gold/amber palette matching the site's existing accent color
const reps = [
  // Olive rgba -> Gold rgba (same opacity preserved)
  ['rgba(158,179,123', 'rgba(201,162,39'],
  ['rgba(91,132,77',   'rgba(161,130,31'],
  
  // Olive hex text colors -> Gold text colors
  ['#c7d6b3', '#d4b85c'],    // light olive text -> warm gold
  ['#C7D6B3', '#d4b85c'],
  ['#9eb37b', '#b89b3a'],    // mid olive -> deeper gold
  ['#9EB37B', '#b89b3a'],
  
  // Bright neon greens -> warm amber
  ['#10b981', '#c9a227'],    // emerald -> gold
  ['#00FF88', '#FFCC33'],    // neon green -> bright gold
  ['#00ff88', '#FFCC33'],
  ['#7CFFB2', '#FFD966'],    // soft green -> light gold
  ['#7cffb2', '#FFD966'],
  ['#10F2A0', '#E6B800'],    // mint -> amber
  ['#10f2a0', '#E6B800'],
  ['#22c55e', '#c9a227'],    // std green -> gold
  ['#00ffcc', '#FFD700'],    // cyan-green -> gold
  ['#00FFCC', '#FFD700'],

  // rgba bright greens -> gold rgba
  ['rgba(16,185,129',  'rgba(201,162,39'],
  ['rgba(0,255,136',   'rgba(255,204,51'],
  ['rgba(16,242,160',  'rgba(230,184,0'],
  ['rgba(124,255,178', 'rgba(255,217,102'],
  ['rgba(0,255,204',   'rgba(255,215,0'],
  ['rgba(207,250,232', 'rgba(252,243,213'],
  ['rgba(209,250,229', 'rgba(252,243,213'],
  ['rgba(216,255,',    'rgba(252,243,'],
];

// Process CSS
let c = fs.readFileSync('c:/tmp/hosting/css/legacy-blocks.css', 'utf8');
let totalCSS = 0;
reps.forEach(function(r) {
  const escaped = r[0].replace(/[()#,]/g, '\\$&');
  const re = new RegExp(escaped, 'g');
  const m = c.match(re);
  if (m) { totalCSS += m.length; console.log('CSS:', r[0], '->', r[1], ':', m.length); }
  c = c.replace(re, r[1]);
});
fs.writeFileSync('c:/tmp/hosting/css/legacy-blocks.css', c);
console.log('CSS total:', totalCSS);

// Process HTML sections
const htmlFiles = ['04_main-content.html', '06_scripts.html', '03_control-panel.html', '05_modal-engines.html'];
let totalHTML = 0;
htmlFiles.forEach(function(f) {
  let h = fs.readFileSync('c:/tmp/hosting/sections/' + f, 'utf8');
  let hcount = 0;
  reps.forEach(function(r) {
    const escaped = r[0].replace(/[()#,]/g, '\\$&');
    const re = new RegExp(escaped, 'gi');
    const m = h.match(re);
    if (m) { hcount += m.length; }
    h = h.replace(re, r[1]);
  });
  if (hcount > 0) {
    console.log('HTML ' + f + ':', hcount);
    totalHTML += hcount;
    fs.writeFileSync('c:/tmp/hosting/sections/' + f, h);
  }
});

console.log('\nTotal: CSS=' + totalCSS + ' HTML=' + totalHTML + ' Grand=' + (totalCSS + totalHTML));
