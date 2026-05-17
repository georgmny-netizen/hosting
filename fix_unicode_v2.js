const fs = require('fs');
let c = fs.readFileSync('c:/tmp/hosting/sections/06_scripts.html', 'utf8');

const replacements = [
  { from: /\?\uFFFDSupplier/g, to: '“Supplier' },
  { from: /\?\uFFFDguaranteed/g, to: '“guaranteed' },
  { from: /\?\uFFFDzero risk/g, to: '“zero risk' },
  { from: /\?\uFFFDfoundry-oriented/g, to: '“foundry-oriented' },
  { from: /\?\uFFFDDownload Foundry TDS/g, to: '“Download Foundry TDS' },
  { from: /\?\uFFFDU\/Th/g, to: '“U/Th' },
  { from: /\?\uFFFDSPC history/g, to: '“SPC history' },
  { from: /Self\?\uFFFDQualification/g, to: 'Self-Qualification' },
  { from: /Pre\?\uFFFDQualification/g, to: 'Pre-Qualification' },
  { from: /Korea\?\uFFFDs/g, to: 'Korea’s' },
  { from: /JOGMEC\?\uFFFDs/g, to: 'JOGMEC’s' }
];

let updated = c;
for (let r of replacements) {
  updated = updated.replace(r.from, r.to);
}

fs.writeFileSync('c:/tmp/hosting/sections/06_scripts.html', updated);
console.log('Fixed exactly the corrupted tokens');
