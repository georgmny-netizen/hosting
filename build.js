#!/usr/bin/env node
/**
 * YONGYEOKYO Build Script
 * Concatenates section files into a single index.html
 * Assembles CSS modules into legacy-blocks.css
 * 
 * Usage: node build.js
 * Output: index.html (overwrites existing), css/legacy-blocks.css (overwrites)
 */

const fs = require('fs');
const path = require('path');

const SECTIONS_DIR = path.join(__dirname, 'sections');
const OUTPUT = path.join(__dirname, 'index.html');
const CSS_MODULES_DIR = path.join(__dirname, 'css', 'modules');
const CSS_OUTPUT = path.join(__dirname, 'css', 'legacy-blocks.css');

console.log('YONGYEOKYO Build — Assembling project');
console.log('=========================================\n');

// ============================================================
// STEP 1: Assemble CSS modules → css/legacy-blocks.css
// ============================================================

if (fs.existsSync(CSS_MODULES_DIR)) {
  console.log('  [CSS] Assembling modules...');
  const entries = fs.readdirSync(CSS_MODULES_DIR).sort();
  
  let cssOutput = '';
  let moduleCount = 0;
  
  for (const entry of entries) {
    const entryPath = path.join(CSS_MODULES_DIR, entry);
    const stat = fs.statSync(entryPath);
    
    if (stat.isFile() && entry.endsWith('.css')) {
      // Flat CSS file (modules 01-15)
      const content = fs.readFileSync(entryPath, 'utf-8');
      cssOutput += content + '\n';
      const lines = content.split('\n').length;
      console.log(`    ✓ ${entry.padEnd(55)} ${lines} lines`);
      moduleCount++;
    } else if (stat.isDirectory()) {
      // Subdirectory (modules 16/, 17/) — read all .css inside in sorted order
      const subFiles = fs.readdirSync(entryPath)
        .filter(f => f.endsWith('.css'))
        .sort();
      let subLines = 0;
      for (const sf of subFiles) {
        const content = fs.readFileSync(path.join(entryPath, sf), 'utf-8');
        cssOutput += content + '\n';
        subLines += content.split('\n').length;
      }
      console.log(`    ✓ ${(entry + '/ (' + subFiles.length + ' files)').padEnd(55)} ${subLines} lines`);
      moduleCount += subFiles.length;
    }
  }
  
  // Remove trailing newlines to match original
  cssOutput = cssOutput.replace(/\n+$/, '\n');
  
  fs.writeFileSync(CSS_OUTPUT, cssOutput, { encoding: 'utf-8' });
  const cssSizeKB = Math.round(fs.statSync(CSS_OUTPUT).size / 1024);
  console.log(`  → legacy-blocks.css written: ${cssSizeKB} KB from ${moduleCount} modules\n`);
} else {
  console.log('  [CSS] No modules directory found, using existing legacy-blocks.css\n');
}

// ============================================================
// STEP 2: Assemble HTML sections → index.html
// ============================================================

console.log('  [HTML] Assembling sections...');

// Helper: read a directory of HTML files in sorted order
function readDirFiles(dirPath, label) {
  const files = fs.readdirSync(dirPath)
    .filter(f => f.endsWith('.html'))
    .sort();
  
  let combined = '';
  let totalLines = 0;
  for (const file of files) {
    const content = fs.readFileSync(path.join(dirPath, file), 'utf-8');
    combined += content + '\n';
    totalLines += content.split('\n').length;
  }
  // Remove the extra trailing newline we added
  combined = combined.replace(/\n$/, '');
  return { content: combined, lines: totalLines, count: files.length };
}

// Sections that are either single files or directories
const SECTIONS = [
  { type: 'file', name: '01_head.html' },
  { type: 'file', name: '02_header.html' },
  { type: 'file', name: '03_control-panel.html' },
  { type: 'dir',  name: 'content', label: '04_main-content' },
  { type: 'dir',  name: 'modals',  label: '05_modal-engines' },
  { type: 'file', name: '06_scripts.html' },
  { type: 'file', name: '07_tail.html' },
];

let output = '';
let totalLines = 0;

for (const section of SECTIONS) {
  if (section.type === 'file') {
    const filePath = path.join(SECTIONS_DIR, section.name);
    
    if (!fs.existsSync(filePath)) {
      console.error(`  ERROR: Missing ${section.name}`);
      process.exit(1);
    }
    
    const content = fs.readFileSync(filePath, 'utf-8');
    const lines = content.split('\n').length;
    totalLines += lines;
    
    output += content + '\r\n';
    console.log(`    ✓ ${section.name.padEnd(28)} ${lines} lines`);
  } else if (section.type === 'dir') {
    const dirPath = path.join(SECTIONS_DIR, section.name);
    
    if (!fs.existsSync(dirPath)) {
      console.error(`  ERROR: Missing directory sections/${section.name}/`);
      process.exit(1);
    }
    
    const result = readDirFiles(dirPath, section.label);
    totalLines += result.lines;
    
    output += result.content + '\r\n';
    console.log(`    ✓ ${(section.label + ' (' + result.count + ' files)').padEnd(28)} ${result.lines} lines`);
  }
}

// Write output (UTF-8, no BOM)
fs.writeFileSync(OUTPUT, output, { encoding: 'utf-8' });

const sizeKB = Math.round(fs.statSync(OUTPUT).size / 1024);
console.log(`\n  → index.html written: ${totalLines} lines, ${sizeKB} KB`);

// ============================================================
// STEP 3: Syntax Validation
// ============================================================

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
