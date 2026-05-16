const fs = require('fs');
let c = fs.readFileSync('c:/tmp/hosting/css/legacy-blocks.css', 'utf8');

const marker = '/* ==========================================================\n   STAGE 11 FIX: Executive Decision Layer Buttons Style Match';
const idx = c.indexOf(marker);
if (idx === -1) { console.error('Marker not found!'); process.exit(1); }

const newBlock = [
  '/* ==========================================================',
  '   STAGE 11 FIX: Executive Decision Layer Buttons Style Match',
  '   Match the .yyk-exec-action buttons to the Tier-1 .yyk-control-action style',
  '   ========================================================== */',
  'html body .yyk-exec-action,',
  'html body .yyk-exec-action.primary {',
  '  display: inline-flex !important;',
  '  align-items: center !important;',
  '  justify-content: center !important;',
  '  background: #1A1A1A !important;',
  '  color: #F5F5F2 !important;',
  '  border: 1px solid rgba(176,184,194,.32) !important;',
  '  padding: 9px 10px !important;',
  '  min-height: 36px !important;',
  '  font-size: 10px !important;',
  '  line-height: 1.1 !important;',
  '  letter-spacing: .08em !important;',
  '  text-transform: uppercase !important;',
  '  font-family: ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,monospace !important;',
  '  cursor: pointer !important;',
  '  white-space: nowrap !important;',
  '  border-radius: 0 !important;',
  '  font-weight: 700 !important;',
  '}',
  'html body .yyk-exec-action:hover,',
  'html body .yyk-exec-action:focus-visible,',
  'html body .yyk-exec-action.active {',
  '  background: rgba(201,162,39,.14) !important;',
  '  border-color: rgba(201,162,39,.62) !important;',
  '  color: #fff !important;',
  '}',
  ''
].join('\n');

c = c.slice(0, idx) + newBlock;
fs.writeFileSync('c:/tmp/hosting/css/legacy-blocks.css', c);
console.log('Done. File size:', c.length);
