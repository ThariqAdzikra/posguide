const puppeteer = require('puppeteer-core');
const path = require('path');
const OUT_DIR = path.join(__dirname, 'public/screenshots');

async function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

(async () => {
  const browser = await puppeteer.launch({
    executablePath: '/usr/bin/google-chrome',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu']
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 2 });

  // Login
  await page.goto('http://localhost:8000/login', { waitUntil: 'networkidle2' });
  await page.waitForSelector('#login-username');
  await page.type('#login-username', 'admin@pos.com');
  await page.type('#login-password', 'password');
  await Promise.all([
    page.waitForNavigation({ waitUntil: 'networkidle2' }),
    page.click('button[type="submit"]')
  ]);

  // 1. Open SPK Drawer
  console.log('Opening SPK Drawer...');
  await page.goto('http://localhost:8000/orders?open_order=INV-20261106-0001', { waitUntil: 'networkidle2' });
  await sleep(2000);
  await page.screenshot({ path: path.join(OUT_DIR, 'operator/orders-drawer-spk-detail.png'), fullPage: false });

  // 2. Open Thermal Receipt Modal
  console.log('Opening Thermal Receipt Modal...');
  const printBtn = await page.$('button[title="Cetak Struk Thermal"]');
  if (printBtn) {
    await printBtn.click();
    await sleep(1500);
    await page.screenshot({ path: path.join(OUT_DIR, 'kasir/pos-cetak-struk-thermal.png'), fullPage: false });
  } else {
    console.log('printBtn not found, trying row button');
    await page.goto('http://localhost:8000/orders', { waitUntil: 'networkidle2' });
    await sleep(1500);
    const rowPrintBtn = await page.$('button[title="Cetak Struk Thermal Bluetooth"]');
    if (rowPrintBtn) {
      await rowPrintBtn.click();
      await sleep(1500);
      await page.screenshot({ path: path.join(OUT_DIR, 'kasir/pos-cetak-struk-thermal.png'), fullPage: false });
    }
  }

  console.log('Done capturing SPK Drawer & Thermal Receipt modal!');
  await browser.close();
})();
