const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  await page.setViewportSize({ width: 1280, height: 800 });
  
  console.log("Navigating to Evara...");
  await page.goto('https://evara.me/', { waitUntil: 'networkidle' });
  await page.screenshot({ path: 'public/evara.png' });
  
  console.log("Navigating to Shraddha Weaves...");
  await page.goto('https://shraddhaweaves.com/', { waitUntil: 'networkidle' });
  await page.screenshot({ path: 'public/shraddhaweaves.png' });
  
  await browser.close();
  console.log("Screenshots captured!");
})();
