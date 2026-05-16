const fs = require('fs');

let css = fs.readFileSync('c:/tmp/hosting/css/overrides.css', 'utf8');

const vaultFix = `
/* 4. Vault links specific styling from CANONICAL */
.yyk-pdf-vault a {
    background: rgba(255, 255, 255, 0.024) !important;
    z-index: 5 !important;
    position: relative !important;
    padding: 6px 10px !important;
    margin-bottom: 4px !important;
}
.yyk-pdf-vault a:last-child {
    margin-bottom: 0 !important;
}
`;

css += vaultFix;

fs.writeFileSync('c:/tmp/hosting/css/overrides.css', css, 'utf8');
console.log('Appended vault link styles to overrides.css');
