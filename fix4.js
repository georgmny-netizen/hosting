const fs = require('fs');
let c = fs.readFileSync('c:/tmp/hosting/css/legacy-blocks.css', 'utf8');

const addition = [
  '',
  '/* ==========================================================',
  '   STAGE 12 FIX: Unify All Site Buttons to Tier-1 Style',
  '   Targets: .yyk-control-action, .spec-tab, .yyk-terminal-action',
  '   ========================================================== */',
  'html body .yyk-control-action,',
  'html body .spec-tab,',
  'html body .yyk-terminal-action {',
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
  '  transition: background 0.15s, border-color 0.15s, color 0.15s !important;',
  '}',
  'html body .yyk-control-action:hover,',
  'html body .yyk-control-action:focus-visible,',
  'html body .yyk-control-action.active,',
  'html body .spec-tab:hover,',
  'html body .spec-tab:focus-visible,',
  'html body .spec-tab.active,',
  'html body .yyk-terminal-action:hover,',
  'html body .yyk-terminal-action:focus-visible,',
  'html body .yyk-terminal-action.active,',
  'html body .yyk-terminal-action.primary {',
  '  background: rgba(201,162,39,.14) !important;',
  '  border-color: rgba(201,162,39,.62) !important;',
  '  color: #fff !important;',
  '}',
  ''
].join('\n');

c += addition;
fs.writeFileSync('c:/tmp/hosting/css/legacy-blocks.css', c);
console.log('Done. File size:', c.length);
