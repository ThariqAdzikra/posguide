const puppeteer = require('puppeteer-core');
const path = require('path');
const fs = require('fs');

const OUT_DIR = path.join(__dirname, 'public/screenshots');

async function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

(async () => {
  const dirs = [
    'auth', 'dashboard', 'kasir', 'operator', 'owner', 'profile', 'admin', 'settings', 'employees'
  ];
  for (const d of dirs) {
    fs.mkdirSync(path.join(OUT_DIR, d), { recursive: true });
  }

  const browser = await puppeteer.launch({
    executablePath: '/usr/bin/google-chrome',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu']
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 2 });

  // 1. Capture Login Page
  console.log('Capturing Login Page...');
  await page.goto('http://localhost:8000/login', { waitUntil: 'networkidle2' });
  await sleep(1000);
  await page.screenshot({ path: path.join(OUT_DIR, 'auth/auth-login-masuk.png'), fullPage: false });

  // 2. Capture Forgot Password Mode
  console.log('Capturing Forgot Password...');
  try {
    const forgotBtn = await page.$('button.forgot-password-link');
    if (forgotBtn) {
      await forgotBtn.click();
      await sleep(1000);
    } else {
      await page.goto('http://localhost:8000/forgot-password', { waitUntil: 'networkidle2' });
      await sleep(1000);
    }
    await page.screenshot({ path: path.join(OUT_DIR, 'auth/auth-lupa-password.png'), fullPage: false });
  } catch (err) {
    console.error('Forgot password capture error:', err.message);
  }

  // 3. Login as Admin
  console.log('Logging in as Admin...');
  await page.goto('http://localhost:8000/login', { waitUntil: 'networkidle2' });
  await page.waitForSelector('#login-username');
  await page.type('#login-username', 'admin@pos.com');
  await page.type('#login-password', 'password');
  await Promise.all([
    page.waitForNavigation({ waitUntil: 'networkidle2' }),
    page.click('button[type="submit"]')
  ]);

  // 4. Capture Dashboard
  console.log('Capturing Dashboard...');
  await page.goto('http://localhost:8000/dashboard', { waitUntil: 'networkidle2' });
  await sleep(1500);
  await page.screenshot({ path: path.join(OUT_DIR, 'dashboard/dashboard-kpi-penjualan.png'), fullPage: false });

  // 5. Capture Profile Page
  console.log('Capturing Profile Page...');
  await page.goto('http://localhost:8000/profile', { waitUntil: 'networkidle2' });
  await sleep(1500);
  await page.screenshot({ path: path.join(OUT_DIR, 'profile/profile-pengaturan-akun.png'), fullPage: false });

  // 6. Capture Employees / Staf
  console.log('Capturing Employees Page...');
  await page.goto('http://localhost:8000/employees', { waitUntil: 'networkidle2' });
  await sleep(1500);
  await page.screenshot({ path: path.join(OUT_DIR, 'employees/employees-manajemen-staf.png'), fullPage: false });

  // 7. Capture Audit Center
  console.log('Capturing Audit Center...');
  await page.goto('http://localhost:8000/admin/audit-center', { waitUntil: 'networkidle2' });
  await sleep(1500);
  await page.screenshot({ path: path.join(OUT_DIR, 'admin/audit-center-aktivitas-void.png'), fullPage: false });

  // 8. Capture Settings
  console.log('Capturing Settings Page...');
  await page.goto('http://localhost:8000/settings', { waitUntil: 'networkidle2' });
  await sleep(1500);
  await page.screenshot({ path: path.join(OUT_DIR, 'settings/settings-pengaturan-toko.png'), fullPage: false });

  console.log('All additional features captured successfully!');
  await browser.close();
})();
