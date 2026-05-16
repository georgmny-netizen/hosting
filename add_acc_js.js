const fs = require('fs');
let c = fs.readFileSync('c:/tmp/hosting/sections/06_scripts.html','utf8');
const accJS = `
// Accordion exclusive logic
document.addEventListener('DOMContentLoaded', function() {
  const accordions = document.querySelectorAll('.hero-accordion');
  accordions.forEach(acc => {
    acc.addEventListener('toggle', function() {
      if (this.open) {
        accordions.forEach(other => {
          if (other !== this && other.open) {
            other.open = false;
          }
        });
      }
    });
  });
});
`;
if (!c.includes('Accordion exclusive logic')) {
  c = c.replace('</script>', accJS + '</script>');
  fs.writeFileSync('c:/tmp/hosting/sections/06_scripts.html', c);
  console.log('Added accordion logic.');
} else {
  console.log('Accordion logic already exists.');
}
