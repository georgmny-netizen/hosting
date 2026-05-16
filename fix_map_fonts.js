const fs = require('fs');

let css = fs.readFileSync('c:/tmp/hosting/css/overrides.css', 'utf8');

const newRules = `
/* Turn all map text (fonts) to green per client request */
#yykFooterLogisticsMap .map-head span,
#yykFooterLogisticsMap .map-head strong,
#yykFooterLogisticsMap .yyk-sea-label,
#yykFooterLogisticsMap .yyk-port strong,
#yykFooterLogisticsMap .yyk-port span,
#yykFooterLogisticsMap text,
.yyk-apac-desk-head .yyk-apac-status-pill {
    color: #10b981 !important;
}
`;

fs.appendFileSync('c:/tmp/hosting/css/overrides.css', newRules);
console.log('Appended green font rules for map to overrides.css');
