const fs = require('fs');
let c = fs.readFileSync('c:/tmp/hosting/sections/06_scripts.html', 'utf8');

c = c.replace(/\?\uFFFDSupplier/g, '“Supplier')
     .replace(/\?\uFFFDguaranteed/g, '“guaranteed')
     .replace(/\?\uFFFDzero/g, '“zero')
     .replace(/\?\uFFFDfoundry/g, '“foundry')
     .replace(/\?\uFFFDDownload/g, '“Download')
     .replace(/\?\uFFFDU\/Th/g, '“U/Th')
     .replace(/\?\uFFFDSPC/g, '“SPC')
     .replace(/Korea\?\uFFFDs/g, 'Korea’s')
     .replace(/JOGMEC\?\uFFFDs/g, 'JOGMEC’s')
     .replace(/\?\uFFFD/g, '—'); // Fallback for any other remaining \uFFFDs

fs.writeFileSync('c:/tmp/hosting/sections/06_scripts.html', c);
console.log('Fixed');
