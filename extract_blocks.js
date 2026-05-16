const fs = require('fs');
const c = fs.readFileSync('c:/tmp/hosting/sections/03_control-panel.html','utf8');
const archStart = c.indexOf('<section aria-label="Final SEO');
const archEnd = c.indexOf('</section>', archStart) + 10;
const arch = c.substring(archStart, archEnd);

const execStart = c.indexOf('<section aria-label="Executive decision layer');
const execEnd = c.indexOf('</section>', execStart) + 10;
const exec = c.substring(execStart, execEnd);

fs.writeFileSync('c:/tmp/hosting/extract.html', arch + '\n' + exec);
console.log('Extracted to extract.html');
