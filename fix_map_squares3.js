const fs = require('fs');

let css = fs.readFileSync('c:/tmp/hosting/css/overrides.css', 'utf8');

const newRules = `
/* FORCE SVG map squares (ports) green with high specificity to beat [data-port="Busan"] selectors */
#yykFooterLogisticsMap .port-node .port-dot, 
#yykFooterLogisticsMap .port-node .precision-core,
#yykFooterLogisticsMap .port-node[data-port] .port-dot,
#yykFooterLogisticsMap .port-node[data-port] .precision-core {
    fill: #10b981 !important;
    stroke: rgba(16,185,129,.4) !important;
    filter: drop-shadow(0 0 5px #10b981) drop-shadow(0 0 14px rgba(16,185,129,.62)) !important;
}

/* Modal panel colors */
#yykFooterLogisticsMap .route-status-panel {
    border-color: rgba(16,185,129,.48) !important;
    box-shadow: 0 0 28px rgba(16,185,129,.16), inset 0 0 22px rgba(16,185,129,.045) !important;
}
#yykFooterLogisticsMap .route-status-panel .title {
    color: #10b981 !important;
    text-shadow: 0 0 8px rgba(16,185,129,.62) !important;
}
#yykFooterLogisticsMap .route-status-panel .route-status-dot {
    background: #10b981 !important;
    box-shadow: 0 0 7px #10b981, 0 0 16px rgba(16,185,129,.74) !important;
}

/* Modal text and links */
#yykFooterLogisticsMap .route-status-panel .route-close,
#yykFooterLogisticsMap .route-status-panel .action-btn,
#yykFooterLogisticsMap .route-status-panel a,
#yykFooterLogisticsMap .route-status-panel .doc-link,
#yykFooterLogisticsMap .route-status-panel button {
    color: #10b981 !important;
}
`;

fs.appendFileSync('c:/tmp/hosting/css/overrides.css', newRules);
console.log('Appended high-specificity green rules for SVG squares and modal panel to overrides.css');
