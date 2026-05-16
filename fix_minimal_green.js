const fs = require('fs');

let html = fs.readFileSync('c:/tmp/hosting/sections/04_main-content.html', 'utf8');

// 1. Restore Map Colors
const mapStart = html.indexOf('id="yykFooterLogisticsMap"');
const mapEnd = html.indexOf('</section>', mapStart);
let mapHtml = html.substring(mapStart, mapEnd);
mapHtml = mapHtml.replace(/#c9a227/gi, '#10b981').replace(/rgba\(201,\s*162,\s*39/g, 'rgba(16,185,129');
html = html.substring(0, mapStart) + mapHtml + html.substring(mapEnd);

// 2. Restore Footer Colors
const footerStart = html.indexOf('<footer class="footer-tier1"');
const footerEnd = html.indexOf('</footer>', footerStart);
let footerHtml = html.substring(footerStart, footerEnd);
footerHtml = footerHtml.replace(/#c9a227/gi, '#10b981').replace(/rgba\(201,\s*162,\s*39/g, 'rgba(16,185,129');
html = html.substring(0, footerStart) + footerHtml + html.substring(footerEnd);

// 3. Restore ESG Colors
const esgStart = html.indexOf('id="sustainability"');
const esgEnd = html.indexOf('</section>', esgStart);
let esgHtml = html.substring(esgStart, esgEnd);
esgHtml = esgHtml.replace(/#c9a227/gi, '#10b981').replace(/rgba\(201,\s*162,\s*39/g, 'rgba(16,185,129');
html = html.substring(0, esgStart) + esgHtml + html.substring(esgEnd);

fs.writeFileSync('c:/tmp/hosting/sections/04_main-content.html', html);
console.log('Restored inline colors in Map, Footer, and ESG.');

// Now append ONLY safe explicit CSS to overrides.css
const cssOverrides = `

/* --- SAFELY RESTORE GREEN COLORS TO MAP, FOOTER, ESG WITHOUT BREAKING LAYOUT --- */
.yyk-apac-map { 
  background: radial-gradient(circle at 28% 68%, rgba(0,255,136,.06), transparent 25%), 
              radial-gradient(circle at 68% 32%, rgba(0,255,136,.06), transparent 25%), 
              linear-gradient(145deg, rgba(6,10,13,.96), rgba(18,18,18,.96)) !important; 
}
.yyk-port:before { background: #00FF88 !important; box-shadow: 0 0 10px rgba(0,255,136,.75) !important; }
.yyk-port.active, .yyk-port:hover { border-color: rgba(0,255,136,.68) !important; background: rgba(0,255,136,.12) !important; }
.yyk-sea-label { color: rgba(255,255,255,.42) !important; }
.yyk-lane-svg path { stroke: rgba(0,255,136,.30) !important; filter: drop-shadow(0 0 6px rgba(0,255,136,.28)) !important; }

/* Force dashed lines as requested */
#yykFooterLogisticsMap g.route-group path { 
  stroke-dasharray: 8 10 !important; 
  animation: yykApacRouteFlow 5.8s linear infinite !important; 
}
@keyframes yykApacRouteFlow { to { stroke-dashoffset: -100; } }

/* ESG Section */
.esg-bg { background: linear-gradient(180deg, #091216 0%, #030608 100%) !important; }
.esg-module { border-color: rgba(16,185,129,.15) !important; }

/* Footer Link Override */
footer button.yyk-terminal-link { 
  color: #10b981 !important; 
  text-decoration: underline; 
  background: transparent; 
  border: none; 
  cursor: pointer; 
}
`;

fs.appendFileSync('c:/tmp/hosting/css/overrides.css', cssOverrides);
console.log('Appended minimal safe CSS to overrides.');
