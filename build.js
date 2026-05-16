#!/usr/bin/env node
/**
 * YONGYEOKYO Build Script
 * Concatenates section files into a single index.html
 * 
 * Usage: node build.js
 * Output: index.html (overwrites existing)
 */

const fs = require('fs');
const path = require('path');

const SECTIONS_DIR = path.join(__dirname, 'sections');
const OUTPUT = path.join(__dirname, 'index.html');

// Ordered list of section files
const SECTIONS = [
  '01_head.html',
  '02_header.html',
  '03_control-panel.html',
  '04_main-content.html',
  '05_modal-engines.html',
  '06_scripts.html',
  '07_tail.html'
];

console.log('YONGYEOKYO Build — Assembling index.html');
console.log('=========================================\n');

let output = '';
let totalLines = 0;

for (const file of SECTIONS) {
  const filePath = path.join(SECTIONS_DIR, file);
  
  if (!fs.existsSync(filePath)) {
    console.error(`  ERROR: Missing ${file}`);
    process.exit(1);
  }
  
  const content = fs.readFileSync(filePath, 'utf-8');
  const lines = content.split('\n').length;
  totalLines += lines;
  
  output += content + '\r\n';
  console.log(`  ✓ ${file.padEnd(28)} ${lines} lines`);
}

// Write output (UTF-8, no BOM)
fs.writeFileSync(OUTPUT, output, { encoding: 'utf-8' });

const sizeKB = Math.round(fs.statSync(OUTPUT).size / 1024);
console.log(`\n  → index.html written: ${totalLines} lines, ${sizeKB} KB`);

// Syntax Validation Step
console.log('\n  [Syntax Validation] Checking JS blocks for valid syntax...');
const cp = require('child_process');
const html = fs.readFileSync(OUTPUT, 'utf-8');
const scriptRegex = /<script(?![^>]*type=["']application\/(?:ld\+)?json["'])[^>]*>([\s\S]*?)<\/script>/gi;
let match;
let foundError = false;
let errCount = 0;
while ((match = scriptRegex.exec(html)) !== null) {
  const code = match[1];
  if (!code.trim()) continue;
  const offset = html.substring(0, match.index).split('\n').length;
  const tempPath = path.join(__dirname, '.temp_validate.js');
  fs.writeFileSync(tempPath, code);
  try {
    cp.execSync(`node -c "${tempPath}"`, {stdio: 'pipe'});
  } catch (e) {
    const err = e.stderr.toString();
    const lineMatch = err.match(/\.temp_validate\.js:(\d+)/);
    if (lineMatch) {
      const errLineNum = parseInt(lineMatch[1]);
      const actualLineNum = offset + errLineNum;
      console.error(`  [Syntax Error] index.html:${actualLineNum} -> ${err.split('\n')[0]}`);
      foundError = true;
      errCount++;
    }
  }
  if (fs.existsSync(tempPath)) fs.unlinkSync(tempPath);
}

if (foundError) {
  console.error(`\n  Build completed with ${errCount} SYNTAX ERROR(S). Please fix the source sections.`);
} else {
  console.log('  ✓ ALL SYNTAX ERRORS FIXED! Code is structurally stable.');
  console.log('\n  Build complete.\n');
}
