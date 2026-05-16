const fs = require('fs');
const file = 'c:/tmp/hosting/css/legacy-blocks.css';
let c = fs.readFileSync(file, 'utf8');

const rx = /html body #yykAuditControlActions \.yyk-control-action\.active\s*\{/g;
c = c.replace(rx, `html body #yykAuditControlActions .yyk-control-action.active,
html body #yykAuditControlPanel #yykAuditControlActions .yyk-control-action[data-terminal-priority="1"],
html body #yykAuditControlActions .yyk-control-action[data-terminal-priority="1"] {`);

fs.writeFileSync(file, c);
console.log('Fixed CSS.');
