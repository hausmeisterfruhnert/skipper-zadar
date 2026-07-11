const { chromium } = require('playwright');
const path = require('path');
(async () => {
  const browser = await chromium.launch();
  const base = 'file://' + path.join(__dirname, 'dist');
  const shots = [
    ['de/index.html', 1280, 'home-desktop', false],
    ['de/index.html', 390, 'home-mobile', true],
    ['de/touren.html', 1280, 'touren', false],
    ['de/dugi-otok.html', 1280, 'dugiotok', false],
    ['de/preise.html', 1280, 'preise', false],
    ['de/kontakt.html', 1280, 'kontakt', false],
    ['hr/index.html', 1280, 'home-hr', false],
    ['en/boot.html', 1280, 'boot-en', false],
  ];
  for (const [p, w, name, full] of shots) {
    const page = await browser.newPage({ viewport:{ width:w, height:900 }, deviceScaleFactor:1 });
    await page.goto(base + '/' + p, { waitUntil:'load' });
    await page.waitForTimeout(400);
    await page.screenshot({ path:`shots/${name}.png`, fullPage: full || w>1000 ? true : true });
    await page.close();
  }
  await browser.close();
  console.log('screenshots done');
})();
