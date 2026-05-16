const fs = require('fs');
const lines = fs.readFileSync('c:/tmp/hosting/sections/04_main-content.html', 'utf8').split('\n');
console.log('Before:', lines.length, 'lines');

// Remove lines 2475-2898 (1-indexed), replace with a comment
// In 0-indexed: lines[2474] through lines[2897]
const before = lines.slice(0, 2474);
const after = lines.slice(2898);
const result = before.concat(
  ['<!-- YYK_HYBRID_CANONICAL_INTELLIGENCE_REMOVED: duplicated existing site content -->'],
  after
);

console.log('After:', result.length, 'lines');
console.log('Removed:', lines.length - result.length, 'lines');
fs.writeFileSync('c:/tmp/hosting/sections/04_main-content.html', result.join('\n'));
