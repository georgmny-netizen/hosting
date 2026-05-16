const fs = require('fs');

let css = fs.readFileSync('c:/tmp/hosting/css/overrides.css', 'utf8');

const newRules = `
/* Footer Palette Transfer (Green instead of Gold) */
.footer h4 {
    color: #10b981 !important;
}
.footer a:hover {
    color: #10b981 !important;
}
.footer .yyk-pdf-vault a:hover span {
    color: #10b981 !important;
}
`;

fs.appendFileSync('c:/tmp/hosting/css/overrides.css', newRules);
console.log('Appended footer green palette rules to overrides.css');
