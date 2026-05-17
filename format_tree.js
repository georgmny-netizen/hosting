const fs = require('fs');
let c = fs.readFileSync('c:/tmp/hosting/sections/06_scripts.html', 'utf8');
let m = c.match(/<div class="yyk-vdr-folder dense-card" data-i18n="auto\.t4393">([\s\S]*?)<\/div><\/section>/);
if (m) {
    let t = m[1];
    let lines = t.split('\n');
    let r = [];
    for (let i = 0; i < lines.length; i++) {
        let l = lines[i].replace(/\r$/, '');
        if (l.startsWith('  ')) {
            let nl = (i + 1 < lines.length) ? lines[i+1].replace(/\r$/, '') : '';
            if (nl === '' || !nl.startsWith('  ')) {
                r.push('└── ' + l.trim());
            } else {
                r.push('├── ' + l.trim());
            }
        } else {
            r.push(l);
        }
    }
    let newT = r.join('\n');
    c = c.replace(m[1], newT);
    fs.writeFileSync('c:/tmp/hosting/sections/06_scripts.html', c);
    console.log('Fixed');
}
