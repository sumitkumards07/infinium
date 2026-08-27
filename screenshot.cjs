const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  await page.setViewport({ width: 1280, height: 800 });
  
  await page.goto('https://evara.me/', { waitUntil: 'networkidle2' });
  await page.screenshot({ path: 'public/evara.png' });
  
  await page.goto('https://shraddhaweaves.com/', { waitUntil: 'networkidle2' });
  await page.screenshot({ path: 'public/shraddhaweaves.png' });
  
  await browser.close();
  console.log("Screenshots captured!");
})();
