const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  await page.goto('http://localhost:8080/?v=18');
  await page.waitForTimeout(5000);
  
  const layout = await page.evaluate(() => {
    const wrap = document.querySelector('.yyk-audit-wrap');
    if (!wrap) return 'No wrap found';
    
    const cs = window.getComputedStyle;
    const info = (el) => {
      if(!el) return 'null';
      const r = el.getBoundingClientRect();
      const s = cs(el);
      return { class: el.className, tag: el.tagName, display: s.display, flexDir: s.flexDirection, gridArea: s.gridArea, y: Math.round(r.y), h: Math.round(r.height), w: Math.round(r.width) };
    };
    
    return {
      wrap: info(wrap),
      children: Array.from(wrap.children).map(info),
      topChildren: wrap.querySelector('.yyk-audit-top') ? Array.from(wrap.querySelector('.yyk-audit-top').children).map(info) : []
    };
  });
  
  console.log(JSON.stringify(layout, null, 2));
  await browser.close();
})();