const fs = require('fs');
const c = fs.readFileSync('c:/tmp/hosting/sections/04_main-content.html', 'utf8');

// Check if target anchors exist
const targets = ['yongyeokyo-apac-compliance', 'rfq', 'compliance-calculator', 'decision-compliance-output'];
targets.forEach(function(t) {
  console.log('id="' + t + '":', c.includes('id="' + t + '"') ? 'EXISTS' : 'MISSING');
});

// Find Privacy Policy and Disclaimer links specifically
const lines = c.split('\n');
lines.forEach(function(l, i) {
  if (/Privacy\s*Policy|Disclaimer/i.test(l)) {
    console.log('L' + (i+1) + ':', l.trim().substring(0, 150));
  }
});
