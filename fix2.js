const fs = require('fs');
const file = 'c:/tmp/hosting/sections/06_scripts.html';
let lines = fs.readFileSync(file, 'utf8').split('\n');
lines[1762] = '    byId("decisionRcepHeadline").textContent = "🛡 " + output.rcep;';
fs.writeFileSync(file, lines.join('\n'));
