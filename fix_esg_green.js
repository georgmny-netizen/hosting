const fs = require('fs');
let c = fs.readFileSync('c:/tmp/hosting/css/legacy-blocks.css', 'utf8');
let count = 0;

// ESG background gradient has greenish tints - replace with warm dark tones
const reps = [
  // Dark greens in esg-bg gradient -> warm dark neutrals
  ['#101512', '#121210'],  // dark green-black -> warm near-black
  ['#26342a', '#2a2820'],  // dark green -> warm dark brown
  ['#a8b9a1', '#b8a878'],  // pale green -> warm tan/gold
  ['#4b694b', '#6b5d3a'],  // olive green -> warm olive-brown
  ['#0f1310', '#11100e'],  // near-black green -> warm near-black
];

reps.forEach(function(r) {
  const re = new RegExp(r[0].replace('#', '#'), 'gi');
  const m = c.match(re);
  if (m) {
    count += m.length;
    console.log(r[0], '->', r[1], ':', m.length);
  }
  c = c.replace(re, r[1]);
});

console.log('Total:', count);
fs.writeFileSync('c:/tmp/hosting/css/legacy-blocks.css', c);
