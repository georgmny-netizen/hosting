const fs = require('fs');
let c = fs.readFileSync('c:/tmp/hosting/css/legacy-blocks.css', 'utf8');

const replacements = [
  // Primary green -> sky blue
  ['#10b981', '#0ea5e9'],
  // Bright neon green -> light sky blue
  ['#00FF88', '#38bdf8'],
  ['#00ff88', '#38bdf8'],
  // Soft green -> pale sky
  ['#7CFFB2', '#7dd3fc'],
  ['#7cffb2', '#7dd3fc'],
  // Bright mint -> cyan
  ['#10F2A0', '#22d3ee'],
  ['#10f2a0', '#22d3ee'],
  // Standard green -> cyan 500
  ['#22c55e', '#06b6d4'],
  // Cyan-green -> cyan 300
  ['#00ffcc', '#67e8f9'],
  ['#00FFCC', '#67e8f9'],
];

let totalReplaced = 0;
replacements.forEach(([from, to]) => {
  const re = new RegExp(from.replace('#', '#'), 'g');
  const matches = c.match(re);
  if (matches) {
    totalReplaced += matches.length;
    console.log(from, '->', to, ':', matches.length, 'replacements');
  }
  c = c.replace(re, to);
});

// Also fix rgba greens
// rgba(0,255,136 -> rgba(56,189,248 (matches #38bdf8)
const rgbaCount1 = (c.match(/rgba\(0,255,136/g) || []).length;
c = c.replace(/rgba\(0,255,136/g, 'rgba(56,189,248');

// rgba(0,255,88 -> rgba(56,189,248
const rgbaCount1b = (c.match(/rgba\(0,\s*255,\s*88/g) || []).length;
c = c.replace(/rgba\(0,\s*255,\s*88/g, 'rgba(56,189,248');

// rgba(16,242,160 -> rgba(34,211,238 (matches #22d3ee)
const rgbaCount2 = (c.match(/rgba\(16,242,160/g) || []).length;
c = c.replace(/rgba\(16,242,160/g, 'rgba(34,211,238');

// rgba(124,255,178 -> rgba(125,211,252 (matches #7dd3fc)
const rgbaCount3 = (c.match(/rgba\(124,255,178/g) || []).length;
c = c.replace(/rgba\(124,255,178/g, 'rgba(125,211,252');

// rgba(0,255,204 -> rgba(103,232,249 (matches #67e8f9)
const rgbaCount4 = (c.match(/rgba\(0,255,204/g) || []).length;
c = c.replace(/rgba\(0,255,204/g, 'rgba(103,232,249');

// rgba(209,250,229 (green tint bg) -> rgba(207,250,254 (cyan tint bg)
const rgbaCount5 = (c.match(/rgba\(209,250,229/g) || []).length;
c = c.replace(/rgba\(209,250,229/g, 'rgba(207,250,254');

// rgba(216,255, -> rgba(207,250,254
const rgbaCount6 = (c.match(/rgba\(216,255,/g) || []).length;
c = c.replace(/rgba\(216,255,/g, 'rgba(207,250,');

console.log('rgba replacements:', rgbaCount1 + rgbaCount1b + rgbaCount2 + rgbaCount3 + rgbaCount4 + rgbaCount5 + rgbaCount6);

totalReplaced += rgbaCount1 + rgbaCount1b + rgbaCount2 + rgbaCount3 + rgbaCount4 + rgbaCount5 + rgbaCount6;
console.log('Total replacements:', totalReplaced);

fs.writeFileSync('c:/tmp/hosting/css/legacy-blocks.css', c);
console.log('Done.');
