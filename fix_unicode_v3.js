const fs = require('fs');
let c = fs.readFileSync('c:/tmp/hosting/sections/06_scripts.html', 'utf8');

// Replace exact corrupted sequences
c = c.replace(/\?\uFFFD국/g, '한국')
     .replace(/\?\uFFFD本/g, '日本')
     .replace(/\?\uFFFDShow us/g, '“Show us')
     .replace(/\?\uFFFDapplication/g, '“application')
     .replace(/\?\uFFFDSupplier shall/g, '“Supplier shall')
     .replace(/\?\uFFFDguaranteed/g, '“guaranteed')
     .replace(/\?\uFFFDzero/g, '“zero')
     .replace(/\?\uFFFDfoundry-oriented/g, '“foundry-oriented')
     .replace(/\?\uFFFDDownload/g, '“Download')
     .replace(/\?\uFFFDU\/Th/g, '“U/Th')
     .replace(/\?\uFFFDSPC/g, '“SPC')
     .replace(/Self\?\uFFFDQualification/g, 'Self-Qualification')
     .replace(/Pre\?\uFFFDQualification/g, 'Pre-Qualification')
     .replace(/Korea\?\uFFFDs/g, 'Korea’s')
     .replace(/JOGMEC\?\uFFFDs/g, 'JOGMEC’s');

// If there are any other standalone ?\uFFFD, replace them with a dash
c = c.replace(/\?\uFFFD/g, '—');

fs.writeFileSync('c:/tmp/hosting/sections/06_scripts.html', c);
console.log('Fixed all mojibake');
