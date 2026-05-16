const fs = require('fs');

const zipMain = fs.readFileSync('c:/tmp/hosting2nd_extracted/hosting/sections/04_main-content.html', 'utf8');

const archStart = zipMain.indexOf('<details class="hero-accordion" id="heroArchAccordion">');
const archEnd = zipMain.indexOf('</details>', archStart) + 10;
let archAcc = zipMain.substring(archStart, archEnd);

const execStart = zipMain.indexOf('<details class="hero-accordion" id="heroExecAccordion">');
const execEnd = zipMain.indexOf('</details>', execStart) + 10;
let execAcc = zipMain.substring(execStart, execEnd);

// Combine and rename IDs
let combined = archAcc + '\n' + execAcc;

combined = combined.replace(/id="yykFinalArchitecture"/g, 'id="yykFinalArchitectureNarrow"');
combined = combined.replace(/id="yykExecutiveDecisionLayer"/g, 'id="yykExecutiveDecisionLayerNarrow"');
combined = combined.replace(/id="yykExecStatusPill"/g, 'id="yykExecStatusPillNarrow"');
combined = combined.replace(/id="yykExecActiveRfq"/g, 'id="yykExecActiveRfqNarrow"');
combined = combined.replace(/id="yykExecHighRisk"/g, 'id="yykExecHighRiskNarrow"');
combined = combined.replace(/id="yykExecBlocked"/g, 'id="yykExecBlockedNarrow"');
combined = combined.replace(/id="yykExecMargin"/g, 'id="yykExecMarginNarrow"');
combined = combined.replace(/id="yykExecGateGrid"/g, 'id="yykExecGateGridNarrow"');
combined = combined.replace(/id="yykExecRiskIndex"/g, 'id="yykExecRiskIndexNarrow"');
combined = combined.replace(/id="yykExecCompliance"/g, 'id="yykExecComplianceNarrow"');
combined = combined.replace(/id="yykExecRoute"/g, 'id="yykExecRouteNarrow"');
combined = combined.replace(/id="yykExecProfit"/g, 'id="yykExecProfitNarrow"');
combined = combined.replace(/id="yykExecRecommendation"/g, 'id="yykExecRecommendationNarrow"');
combined = combined.replace(/id="yykExecKillSwitch"/g, 'id="yykExecKillSwitchNarrow"');

const finalHtml = `\n<!-- NEW NARROW ACCORDION BLOCKS -->\n${combined}\n<!-- END NEW NARROW BLOCKS -->\n`;

let localMain = fs.readFileSync('c:/tmp/hosting/sections/04_main-content.html', 'utf8');

const startMarker = '<!-- NEW NARROW BLOCKS FOR RIGHT HERO STACK -->';
const endMarker = '<!-- END NEW NARROW BLOCKS -->';
const startIdx = localMain.indexOf(startMarker);
const endIdx = localMain.indexOf(endMarker) + endMarker.length;

if (startIdx !== -1 && endIdx > startIdx) {
    localMain = localMain.substring(0, startIdx) + finalHtml + localMain.substring(endIdx);
    fs.writeFileSync('c:/tmp/hosting/sections/04_main-content.html', localMain);
    console.log('Successfully replaced with accordion blocks!');
} else {
    console.error('Could not find markers to replace.');
}
