const fs = require('fs');
let c = fs.readFileSync('c:/tmp/hosting/sections/06_scripts.html', 'utf8');

// Replace corrupted emoji at decisionRcepHeadline
c = c.replace(/"\?\? "\s*\+/g, '"🛡 " +');
c = c.replace(/"\?\uFFFD "\s*\+/g, '"🛡 " +');
c = c.replace(/"\? "\s*\+/g, '"🛡 " +');
c = c.replace(/"\? "\s*\+/g, '"🛡 " +');

// Replace the replacement characters / broken chars with a middle dot
c = c.replace(//g, '·');

// Fix specific known broken strings
c = c.replace(/APPROVE WITH CONDITIONS \? RELEASE/g, 'APPROVE WITH CONDITIONS · RELEASE');
c = c.replace(/APPROVE \? QUOTE/g, 'APPROVE · QUOTE');

fs.writeFileSync('c:/tmp/hosting/sections/06_scripts.html', c);
