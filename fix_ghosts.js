const fs = require('fs');
let c = fs.readFileSync('c:/tmp/hosting/sections/06_scripts.html', 'utf8');

// Remove all <span data-i18n="..."><!-- ... --></span> ghost wrappers
// Replace with the bare HTML comment (preserving the comment content)
const before = c.length;
c = c.replace(/<span data-i18n="[^"]*"><!--([\s\S]*?)--><\/span>/g, '<!--$1-->');
const after = c.length;

console.log('Removed ghost wrappers. Size change:', before - after, 'bytes');

// Count remaining
const remaining = (c.match(/<span data-i18n="[^"]*"><!--/g) || []).length;
console.log('Remaining ghost spans:', remaining);

fs.writeFileSync('c:/tmp/hosting/sections/06_scripts.html', c);
