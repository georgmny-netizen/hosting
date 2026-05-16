const fs = require('fs');

let css = fs.readFileSync('c:/tmp/hosting/css/overrides.css', 'utf8');

const newRules = `
/* Turn map squares (ports) green */
#yykFooterLogisticsMap .yyk-port {
    border: 1px solid rgba(0,255,136,.4) !important;
    background: rgba(0,255,136,.08) !important;
}
#yykFooterLogisticsMap .yyk-port:hover,
#yykFooterLogisticsMap .yyk-port.active,
#yykFooterLogisticsMap .yyk-port.is-active {
    border-color: rgba(0,255,136,.8) !important;
    background: rgba(0,255,136,.18) !important;
}

/* Turn the bottom row / table headers green */
.table-panel table th,
.yyk-port-table th {
    color: #10b981 !important;
}
.table-panel table tr.active td,
.yyk-port-table tr.active td {
    background: rgba(0,255,136,.12) !important;
    color: #10b981 !important;
}

/* Turn the right-side detail panel green */
.yyk-selected-port {
    border: 1px solid rgba(0,255,136,.42) !important;
    background: rgba(0,255,136,.07) !important;
}
.yyk-selected-port .k {
    color: #10b981 !important;
}
`;

fs.appendFileSync('c:/tmp/hosting/css/overrides.css', newRules);
console.log('Appended green rules for map squares and table rows to overrides.css');
