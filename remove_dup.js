const fs = require('fs');
const path = 'c:/tmp/hosting/sections/04_main-content.html';
let content = fs.readFileSync(path, 'utf8');

const regex = /<details class="hyb-detail">\s*<summary data-i18n="auto\.t2241">[\s\S]*?<\/details>/;
const match = content.match(regex);
if (match) {
    content = content.replace(regex, '<!-- DUPLICATE HERO BLOCK REMOVED BY ANTIGRAVITY -->\n');
    fs.writeFileSync(path, content, 'utf8');
    console.log('Removed duplicate hero block successfully.');
} else {
    console.log('Could not find duplicate block using regex.');
}
