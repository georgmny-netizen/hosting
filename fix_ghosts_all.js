const fs = require('fs');
const files = ['01_head.html','02_header.html','03_control-panel.html','04_main-content.html','05_modal-engines.html'];
files.forEach(function(f) {
  var c = fs.readFileSync('c:/tmp/hosting/sections/' + f, 'utf8');
  var re = /<span data-i18n="[^"]*"><!--/g;
  var m = c.match(re);
  if (m && m.length) {
    console.log(f + ': ' + m.length + ' ghost spans — fixing...');
    c = c.replace(/<span data-i18n="[^"]*"><!--([\s\S]*?)--><\/span>/g, '<!--$1-->');
    fs.writeFileSync('c:/tmp/hosting/sections/' + f, c);
  }
});
console.log('Done.');
