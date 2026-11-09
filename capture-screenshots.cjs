const puppeteer = require('puppeteer-core');
const path = require('path');
const fs = require('fs');

const OUT_DIR = path.join(__dirname, 'public/screenshots');

async function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

(async () => {
  fs.mkdirSync(path.join(OUT_DIR, 'kasir'), { recursive: true });
  fs.mkdirSync(path.join(OUT_DIR, 'operator'), { recursive: true });
  fs.mkdirSync(path.join(OUT_DIR, 'owner'), { recursive: true });

  const browser = await puppeteer.launch({
    executablePath: '/usr/bin/google-chrome',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu', '--window-size=1440,900']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 2 }); // HiDPI 2x for ultra crisp screenshots!

  console.log('Navigating to login...');
  await page.goto('http://localhost:8000/login', { waitUntil: 'networkidle2' });
  await page.waitForSelector('#login-username');
  await page.type('#login-username', 'admin@pos.com');
  await page.type('#login-password', 'password');
  await Promise.all([
    page.waitForNavigation({ waitUntil: 'networkidle2' }),
    page.click('button[type="submit"]')
  ]);
  console.log('Login successful! Current page:', page.url());

  // 1. Kasir /pos
  console.log('Capturing Kasir POS...');
  await page.goto('http://localhost:8000/pos', { waitUntil: 'networkidle2' });
  await sleep(1500);
  await page.screenshot({ path: path.join(OUT_DIR, 'kasir/pos-katalog-produk.png'), fullPage: false });

  // 2. Custom Size Modal (Spanduk or similar custom product)
  console.log('Looking for custom size product or clicking product...');
  try {
    // Look for product card that opens custom dimension modal, e.g. "Spanduk" or "Poster"
    const productCards = await page.$$('div[class*="cursor-pointer"], button[class*="product"]');
    for (const card of productCards) {
      const text = await page.evaluate(el => el.innerText, card);
      if (text.includes('Spanduk') || text.includes('Banner') || text.includes('Meteran')) {
        await card.click();
        await sleep(800);
        break;
      }
    }
    await sleep(800);
    await page.screenshot({ path: path.join(OUT_DIR, 'kasir/pos-custom-ukuran.png'), fullPage: false });
    // Press Escape to close modal
    await page.keyboard.press('Escape');
    await sleep(500);
  } catch (err) {
    console.error('Custom size modal capture error:', err.message);
  }

  // 3. Add item to cart and capture checkout
  console.log('Adding an item to cart...');
  try {
    // Click any plus button
    const plusButtons = await page.$$('button');
    for (const btn of plusButtons) {
      const text = await page.evaluate(el => el.innerText, btn);
      if (text.trim() === '+' || text.includes('Tambah')) {
        await btn.click();
        await sleep(500);
        break;
      }
    }
    await sleep(800);
    await page.screenshot({ path: path.join(OUT_DIR, 'kasir/pos-keranjang-dan-pembayaran.png'), fullPage: false });
  } catch (err) {
    console.error('Cart capture error:', err.message);
  }

  // 4. Capture Struk Thermal modal by opening an invoice or receipt modal
  console.log('Capturing thermal receipt modal from /orders or /reports...');
  try {
    await page.goto('http://localhost:8000/orders', { waitUntil: 'networkidle2' });
    await sleep(1200);
    // Click "Cetak Struk" if visible or click a row
    const cetakButtons = await page.$$('button');
    let opened = false;
    for (const btn of cetakButtons) {
      const text = await page.evaluate(el => el.innerText, btn);
      if (text.includes('Cetak Struk')) {
        await btn.click();
        opened = true;
        await sleep(1000);
        break;
      }
    }
    if (opened) {
      await page.screenshot({ path: path.join(OUT_DIR, 'kasir/pos-cetak-struk-thermal.png'), fullPage: false });
      await page.keyboard.press('Escape');
      await sleep(500);
    }
  } catch (err) {
    console.error('Receipt modal capture error:', err.message);
  }

  // 5. Operator SPK /orders
  console.log('Capturing Operator SPK /orders list...');
  await page.goto('http://localhost:8000/orders', { waitUntil: 'networkidle2' });
  await sleep(1500);
  await page.screenshot({ path: path.join(OUT_DIR, 'operator/orders-daftar-antrean.png'), fullPage: false });

  // 6. Operator SPK drawer detail
  console.log('Opening SPK drawer detail...');
  try {
    const tableRows = await page.$$('tr, div[class*="cursor-pointer"]');
    for (const row of tableRows) {
      const text = await page.evaluate(el => el.innerText, row);
      if (text.includes('INV-') || text.includes('Perlu Desain') || text.includes('Menunggu')) {
        await row.click();
        await sleep(1200);
        break;
      }
    }
    await page.screenshot({ path: path.join(OUT_DIR, 'operator/orders-drawer-spk-detail.png'), fullPage: false });
  } catch (err) {
    console.error('SPK drawer capture error:', err.message);
  }

  // 7. Owner Stok /products
  console.log('Capturing Owner /products...');
  await page.goto('http://localhost:8000/products', { waitUntil: 'networkidle2' });
  await sleep(1500);
  await page.screenshot({ path: path.join(OUT_DIR, 'owner/stok-manajemen-produk.png'), fullPage: false });

  // 8. Owner Pelanggan /customers
  console.log('Capturing Owner /customers...');
  await page.goto('http://localhost:8000/customers', { waitUntil: 'networkidle2' });
  await sleep(1500);
  await page.screenshot({ path: path.join(OUT_DIR, 'owner/crm-pelanggan-riwayat.png'), fullPage: false });

  // 9. Owner Laporan /reports
  console.log('Capturing Owner /reports...');
  await page.goto('http://localhost:8000/reports', { waitUntil: 'networkidle2' });
  await sleep(1500);
  await page.screenshot({ path: path.join(OUT_DIR, 'owner/laporan-invoice-keuangan.png'), fullPage: false });

  console.log('All fresh screenshots captured successfully!');
  await browser.close();
})();
