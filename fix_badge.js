const fs = require('fs');

let css = fs.readFileSync('c:/tmp/hosting/css/overrides.css', 'utf8');

const newRules = `
/* Hover Badge (LANE ACTIVE popup) */
#yykFooterLogisticsMap .yyk-apac-badge {
    border-color: rgba(16,185,129,.46) !important;
    color: #10b981 !important;
    text-shadow: 0 0 8px rgba(16,185,129,.4) !important;
}
`;

fs.appendFileSync('c:/tmp/hosting/css/overrides.css', newRules);
console.log('Appended hover badge green rules to overrides.css');
