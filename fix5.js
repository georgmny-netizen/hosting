const fs = require('fs');
let c = fs.readFileSync('c:/tmp/hosting/css/legacy-blocks.css', 'utf8');

// Add high-specificity rule at the very end, after all existing rules
const addition = [
  '',
  '/* ==========================================================',
  '   STAGE 13 FIX: Force Tier-1 Control Action Buttons Style',
  '   High specificity to override all previous !important rules',
  '   for #yykAuditControlActions buttons',
  '   ========================================================== */',
  'html body #yykAuditControlPanel #yykAuditControlActions .yyk-control-action,',
  'html body #yykAuditControlActions .yyk-control-action {',
  '  background: #1A1A1A !important;',
  '  color: #F5F5F2 !important;',
  '  border: 1px solid rgba(176,184,194,.32) !important;',
  '  font-size: 10px !important;',
  '  font-weight: 700 !important;',
  '  font-family: ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,monospace !important;',
  '  letter-spacing: .08em !important;',
  '  text-transform: uppercase !important;',
  '  padding: 9px 10px !important;',
  '  min-height: 36px !important;',
  '  border-radius: 0 !important;',
  '  white-space: nowrap !important;',
  '  cursor: pointer !important;',
  '  display: inline-flex !important;',
  '  align-items: center !important;',
  '  justify-content: center !important;',
  '  opacity: 1 !important;',
  '  visibility: visible !important;',
  '}',
  'html body #yykAuditControlPanel #yykAuditControlActions .yyk-control-action:hover,',
  'html body #yykAuditControlPanel #yykAuditControlActions .yyk-control-action:focus-visible,',
  'html body #yykAuditControlPanel #yykAuditControlActions .yyk-control-action.active,',
  'html body #yykAuditControlActions .yyk-control-action:hover,',
  'html body #yykAuditControlActions .yyk-control-action.active {',
  '  background: rgba(201,162,39,.14) !important;',
  '  border-color: rgba(201,162,39,.62) !important;',
  '  color: #fff !important;',
  '}',
  ''
].join('\n');

c += addition;
fs.writeFileSync('c:/tmp/hosting/css/legacy-blocks.css', c);
console.log('Done. File size:', c.length);
