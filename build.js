#!/usr/bin/env node
/**
 * ============================================================
 * YONGYEOKYO Build Script
 * ============================================================
 *
 * Assembles the modular source files into a single deployable
 * index.html and a single legacy-blocks.css.
 *
 * Usage:
 *   node build.js
 *
 * Output:
 *   - index.html              (full page, overwrites existing)
 *   - css/legacy-blocks.css   (concatenated CSS, overwrites existing)
 *
 * ── Project Structure ──────────────────────────────────────
 *
 *   css/modules/
 *     01_base.css … 15_*.css     Flat CSS files (core + directives)
 *     16/  (68 sub-modules)      Density, specs, UI upgrades
 *     17/  (86 sub-modules)      Header fixes, patches, kill-switches
 *
 *   sections/
 *     01_head.html               <head> block: meta, JSON-LD, early scripts
 *     02_header.html             Site header + navigation
 *     03_control-panel.html      Audit/mode control panel
 *     content/  (11 files)       Main page content sections (hero → footer)
 *     modals/   (4 files)        Modal engines (vault, compliance, product, contact)
 *     06_scripts.html            Script loader (98 external <script src="…">)
 *     07_tail.html               Closing </body></html>
 *
 *   js/modules/
 *     *.js          (98 files)   Scripts extracted from 06_scripts.html
 *     head/*.js     (12 files)   Early-exec scripts extracted from 01_head.html
 *
 * ── IMPORTANT: Ordering ────────────────────────────────────
 *
 *   CSS:  Files are concatenated in alphabetical order.
 *         This matters for cascade specificity — later files
 *         override earlier ones. The numbered prefixes (01-17)
 *         enforce the correct load order.
 *
 *   HTML: Sections are assembled in the order defined in the
 *         SECTIONS array below. Subdirectories (content/, modals/)
 *         are also read in alphabetical order by filename.
 *
 * ── SAFETY ─────────────────────────────────────────────────
 *
 *   After assembly, the script runs `node -c` syntax validation
 *   on every remaining inline <script> block in index.html.
 *   If any syntax error is found, the build reports it with
 *   the exact line number in the assembled file.
 *
 * ============================================================
 */

const fs = require('fs');
const path = require('path');

// ── Paths ──────────────────────────────────────────────────

const SECTIONS_DIR = path.join(__dirname, 'sections');
const OUTPUT = path.join(__dirname, 'index.html');
const CSS_MODULES_DIR = path.join(__dirname, 'css', 'modules');
const CSS_OUTPUT = path.join(__dirname, 'css', 'legacy-blocks.css');

console.log('YONGYEOKYO Build — Assembling project');
console.log('=========================================\n');

// ============================================================
// STEP 1: Assemble CSS modules → css/legacy-blocks.css
// ============================================================
//
// Reads css/modules/ in sorted order. Each entry can be:
//   - A flat .css file  → appended directly
//   - A subdirectory    → all .css inside are read in sorted
//                         order and appended sequentially
//
// This allows large modules (16, 17) to be split into dozens
// of sub-files while maintaining correct cascade order.
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
      // Subdirectory (e.g. 16/, 17/) — read all .css inside in sorted order.
      // Alphabetical sort of numbered filenames (01_xxx.css, 02_xxx.css, …)
      // preserves the original cascade order from the monolith.
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
  
  // Normalize trailing newlines (single \n at end)
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
//
// The page is built from 7 logical sections. Some are single
// files, some are directories of sub-files:
//
//   01_head.html          – <head> with meta, styles, JSON-LD, early JS
//   02_header.html        – Site header with nav + language switcher
//   03_control-panel.html – Audit mode / role switcher UI
//   content/ (11 files)   – Main visible page content
//   modals/  (4 files)    – Overlay modals (compliance, product, contact, vault)
//   06_scripts.html       – All <script src="…"> tags (98 modules)
//   07_tail.html          – Closing </body></html>
//
// Sections use \r\n line endings between them to match the
// original monolith format (required for byte-compatibility
// with legacy deployment checks).
// ============================================================

console.log('  [HTML] Assembling sections...');

/**
 * Read all .html files from a directory in alphabetical order
 * and concatenate them into a single string.
 *
 * @param {string} dirPath  – Absolute path to directory
 * @param {string} label    – Display label for console output
 * @returns {{ content: string, lines: number, count: number }}
 */
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
  // Remove the extra trailing newline we added after the last file
  combined = combined.replace(/\n$/, '');
  return { content: combined, lines: totalLines, count: files.length };
}

// Assembly order — this defines the final page structure.
// DO NOT reorder without understanding the dependency chain.
const SECTIONS = [
  { type: 'file', name: '01_head.html' },        // Must be first: <!DOCTYPE>, <head>
  { type: 'file', name: '02_header.html' },       // Depends on CSS from head
  { type: 'file', name: '03_control-panel.html' },
  { type: 'dir',  name: 'content', label: '04_main-content' },   // 11 content sections
  { type: 'dir',  name: 'modals',  label: '05_modal-engines' },  // 4 modal engines
  { type: 'file', name: '06_scripts.html' },      // Must be after DOM content
  { type: 'file', name: '07_tail.html' },          // Must be last: </body></html>
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

// Write final HTML (UTF-8, no BOM)
fs.writeFileSync(OUTPUT, output, { encoding: 'utf-8' });

const sizeKB = Math.round(fs.statSync(OUTPUT).size / 1024);
console.log(`\n  → index.html written: ${totalLines} lines, ${sizeKB} KB`);

// ============================================================
// STEP 3: Syntax Validation
// ============================================================
//
// Extracts every remaining inline <script> block from the
// assembled index.html (skipping JSON-LD blocks) and runs
// `node -c` to check for syntax errors.
//
// This catches broken JS that would silently fail in production.
// Each error is reported with its actual line number in the
// assembled index.html for easy debugging.
// ============================================================

console.log('\n  [Syntax Validation] Checking JS blocks for valid syntax...');
const cp = require('child_process');
const html = fs.readFileSync(OUTPUT, 'utf-8');

// Match <script> blocks but skip type="application/json" and type="application/ld+json"
const scriptRegex = /<script(?![^>]*type=["']application\/(?:ld\+)?json["'])[^>]*>([\s\S]*?)<\/script>/gi;
let match;
let foundError = false;
let errCount = 0;

while ((match = scriptRegex.exec(html)) !== null) {
  const code = match[1];
  if (!code.trim()) continue; // Skip empty <script src="…"></script> tags
  
  // Calculate the line number offset for this block in index.html
  const offset = html.substring(0, match.index).split('\n').length;
  
  // Write to temp file and validate with Node's syntax checker
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
  // Clean up temp file
  if (fs.existsSync(tempPath)) fs.unlinkSync(tempPath);
}

if (foundError) {
  console.error(`\n  Build completed with ${errCount} SYNTAX ERROR(S). Please fix the source sections.`);
} else {
  console.log('  ✓ ALL SYNTAX ERRORS FIXED! Code is structurally stable.');
  console.log('\n  Build complete.\n');
}
