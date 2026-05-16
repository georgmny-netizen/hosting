const fs = require('fs');

let css = fs.readFileSync('c:/tmp/hosting/css/overrides.css', 'utf8');

// Remove the incorrect palette I added previously
const badBlockStart = css.indexOf('/* Footer Palette Transfer (Green instead of Gold) */');
if (badBlockStart !== -1) {
    css = css.substring(0, badBlockStart);
}

// Append the correct original palette overrides
const correctPalette = `
/* =========================================================
   RESTORE ORIGINAL APAC FOOTER PALETTE
   ========================================================= */

/* 1. Top and Bottom Strips: Green instead of Gold */
.footer-tech-status-row,
.footer-terminal-ticker,
.yyk-apac-command-strip {
    border-top-color: rgba(16, 185, 129, .32) !important;
    border-bottom-color: rgba(16, 185, 129, .32) !important;
}

.footer-tech-status-inner, 
.footer-terminal-inner,
.footer-tech-left, .footer-tech-center, .footer-tech-right,
.footer-terminal-left, .footer-terminal-core, .footer-terminal-right,
.footer-terminal-core time, #footerApacClock, #apacClock,
.yyk-apac-command-strip, .yyk-apac-command-inner,
.yyk-apac-command-strip span {
    color: #10b981 !important;
    text-shadow: 0 0 3px #10b981, 0 0 12px rgba(16, 185, 129, .55) !important;
}

/* 2. System Status Live Indicators: Green instead of Gold */
#yykFooterSystemStatus .yyk-green,
#yykFooterSystemStatus.yyk-live .yyk-green {
    color: #10b981 !important;
    text-shadow: 0 0 12px rgba(16, 185, 129, .35) !important;
}

.yyk-live-dot {
    background: #10b981 !important;
    box-shadow: 0 0 14px rgba(16, 185, 129, .65) !important;
}

/* 3. PDF Vault Brackets: Green instead of Gold */
.yyk-pdf-vault a span {
    color: #10b981 !important;
    text-shadow: 0 0 5px rgba(16, 185, 129, .25) !important;
}
.yyk-pdf-vault a:hover span {
    color: #10b981 !important;
    text-shadow: 0 0 14px rgba(16, 185, 129, .55) !important;
}
`;

css += correctPalette;

fs.writeFileSync('c:/tmp/hosting/css/overrides.css', css, 'utf8');
console.log('Restored the correct original footer palette to overrides.css');
