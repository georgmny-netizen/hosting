const fs = require('fs');

let css = fs.readFileSync('c:/tmp/hosting/css/overrides.css', 'utf8');

const newRules = `
/* Hover Port City Labels */
#yykFooterLogisticsMap .port-label,
#yykFooterLogisticsMap text.port-label {
    fill: #10b981 !important;
    color: #10b981 !important;
    text-shadow: 0 0 10px rgba(16,185,129,.6) !important;
}

/* Proof Card (Click Modal) Borders, Text, Links, Buttons */
#yykFooterLogisticsMap .yyk-proof-card {
    border-color: rgba(16,185,129,.48) !important;
}
#yykFooterLogisticsMap .yyk-proof-card .yyk-proof-title,
#yykFooterLogisticsMap .yyk-proof-card .yyk-proof-status,
#yykFooterLogisticsMap .yyk-proof-card .yyk-proof-status b,
#yykFooterLogisticsMap .yyk-proof-card th,
#yykFooterLogisticsMap .yyk-proof-card td,
#yykFooterLogisticsMap .yyk-proof-card .yyk-proof-action,
#yykFooterLogisticsMap .yyk-proof-card .yyk-proof-link,
#yykFooterLogisticsMap .yyk-proof-card .yyk-proof-close,
#yykFooterLogisticsMap .yyk-proof-card .yyk-proof-copy {
    color: #10b981 !important;
}

/* Links and actions underlines/borders inside modal */
#yykFooterLogisticsMap .yyk-proof-card .yyk-proof-copy {
    text-decoration-color: rgba(16,185,129,.6) !important;
}
#yykFooterLogisticsMap .yyk-proof-card .yyk-proof-action {
    border-color: rgba(16,185,129,.45) !important;
    border-bottom-color: rgba(16,185,129,.6) !important;
}
#yykFooterLogisticsMap .yyk-proof-card .yyk-proof-action:hover,
#yykFooterLogisticsMap .yyk-proof-card .yyk-proof-link:hover {
    color: #00FF88 !important;
    border-bottom-color: #00FF88 !important;
    border-color: rgba(0,255,136,.65) !important;
    background: rgba(0,255,136,.1) !important;
}

/* Ensure any general buttons inside the map are also green */
#yykFooterLogisticsMap button, 
#yykFooterLogisticsMap .btn {
    border-color: rgba(16,185,129,.45) !important;
}
`;

fs.appendFileSync('c:/tmp/hosting/css/overrides.css', newRules);
console.log('Appended green rules for hover city label and click modal to overrides.css');
