const fs = require('fs');

let extract = fs.readFileSync('c:/tmp/hosting/extract.html', 'utf8');

// Update IDs to avoid conflicts since user wants to keep the old ones too
extract = extract.replace(/id="yykFinalArchitecture"/g, 'id="yykFinalArchitectureNarrow"');
extract = extract.replace(/id="yykExecutiveDecisionLayer"/g, 'id="yykExecutiveDecisionLayerNarrow"');
extract = extract.replace(/id="yykExecStatusPill"/g, 'id="yykExecStatusPillNarrow"');
extract = extract.replace(/id="yykExecActiveRfq"/g, 'id="yykExecActiveRfqNarrow"');
extract = extract.replace(/id="yykExecHighRisk"/g, 'id="yykExecHighRiskNarrow"');
extract = extract.replace(/id="yykExecBlocked"/g, 'id="yykExecBlockedNarrow"');
extract = extract.replace(/id="yykExecMargin"/g, 'id="yykExecMarginNarrow"');
extract = extract.replace(/id="yykExecGateGrid"/g, 'id="yykExecGateGridNarrow"');
extract = extract.replace(/id="yykExecRiskIndex"/g, 'id="yykExecRiskIndexNarrow"');
extract = extract.replace(/id="yykExecCompliance"/g, 'id="yykExecComplianceNarrow"');
extract = extract.replace(/id="yykExecRoute"/g, 'id="yykExecRouteNarrow"');
extract = extract.replace(/id="yykExecProfit"/g, 'id="yykExecProfitNarrow"');
extract = extract.replace(/id="yykExecRecommendation"/g, 'id="yykExecRecommendationNarrow"');
extract = extract.replace(/id="yykExecKillSwitch"/g, 'id="yykExecKillSwitchNarrow"');

// Wrap them in a special div to apply narrow CSS
const newHtml = `\n<!-- NEW NARROW BLOCKS FOR RIGHT HERO STACK -->\n<div class="yyk-narrow-mode-container" style="margin-top: 16px;">\n` + extract + `\n</div>\n<!-- END NEW NARROW BLOCKS -->\n`;

let mainHtml = fs.readFileSync('c:/tmp/hosting/sections/04_main-content.html', 'utf8');

const insertTarget = '<div class="table-panel"></div>';
if (mainHtml.indexOf(insertTarget) === -1) {
    console.error('Target not found!');
    process.exit(1);
}

mainHtml = mainHtml.replace(insertTarget, insertTarget + newHtml);

fs.writeFileSync('c:/tmp/hosting/sections/04_main-content.html', mainHtml);
console.log('Successfully injected new blocks.');
