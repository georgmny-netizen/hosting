const fs = require('fs');

let css = fs.readFileSync('c:/tmp/hosting/css/overrides.css', 'utf8');

const newRules = `
/* Turn SVG map squares (ports) green */
#yykFooterLogisticsMap .port-dot, 
#yykFooterLogisticsMap .precision-core {
    fill: #10b981 !important;
    stroke: rgba(16,185,129,.4) !important;
    filter: drop-shadow(0 0 5px #10b981) drop-shadow(0 0 14px rgba(16,185,129,.62)) !important;
}

/* Turn the map status strip (bottom row) green */
#yykFooterLogisticsMap .map-status-strip,
#yykFooterLogisticsMap .map-status-strip span {
    color: #10b981 !important;
    text-shadow: 0 0 5px rgba(16,185,129,.62), 0 0 14px rgba(16,185,129,.32) !important;
    border-color: rgba(16,185,129,.42) !important;
}
#yykFooterLogisticsMap .map-status-strip i {
    background: #10b981 !important;
    box-shadow: 0 0 7px #10b981, 0 0 16px rgba(16,185,129,.75) !important;
}
`;

fs.appendFileSync('c:/tmp/hosting/css/overrides.css', newRules);
console.log('Appended green rules for SVG squares and status strip to overrides.css');
