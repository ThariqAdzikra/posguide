const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const rootDir = path.resolve(__dirname, '..');
const publicImgDir = path.join(rootDir, 'public', 'img');

if (!fs.existsSync(publicImgDir)) {
  fs.mkdirSync(publicImgDir, { recursive: true });
}

const logoBase64 = fs.readFileSync(path.join(rootDir, 'public', 'img', 'logoutama.png')).toString('base64');
const screenshotBase64 = fs.readFileSync(path.join(rootDir, 'public', 'screenshots', 'kasir', 'pos-katalog-produk.png')).toString('base64');

// 1. Generate 1200x630 Banner HTML
const bannerHtml = `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="utf-8">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      width: 1200px;
      height: 630px;
      overflow: hidden;
      background: #F1F5F9;
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 24px;
    }
    .card {
      width: 1152px;
      height: 582px;
      background: #FFFFFF;
      border-radius: 20px;
      border: 1px solid #E2E8F0;
      box-shadow: 0 20px 45px -15px rgba(15, 23, 42, 0.08);
      position: relative;
      overflow: hidden;
      display: flex;
      flex-direction: row;
    }
    .left-col {
      width: 580px;
      padding: 44px 40px 40px 48px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      z-index: 10;
    }
    .brand-row {
      display: flex;
      align-items: center;
      gap: 14px;
    }
    .logo-img {
      width: 44px;
      height: 44px;
      object-fit: contain;
    }
    .brand-title {
      font-size: 20px;
      line-height: 1;
      font-weight: 800;
      letter-spacing: -0.02em;
    }
    .brand-title .red { color: #DA2F1F; }
    .brand-title .dark { color: #0F172A; }
    .brand-badge {
      display: inline-flex;
      align-items: center;
      padding: 4px 10px;
      background: #FFF1F0;
      border: 1px solid #FECDD3;
      border-radius: 9999px;
      color: #DA2F1F;
      font-size: 11px;
      font-weight: 700;
      letter-spacing: 0.04em;
      text-transform: uppercase;
      margin-left: 4px;
    }
    .headline-wrap {
      margin-top: 14px;
    }
    .tagline-pill {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      font-size: 11px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      color: #DA2F1F;
      margin-bottom: 10px;
    }
    .tagline-pill::before {
      content: '';
      width: 7px;
      height: 7px;
      border-radius: 50%;
      background: #DA2F1F;
      display: inline-block;
    }
    .headline {
      font-size: 38px;
      font-weight: 800;
      line-height: 1.18;
      color: #0F172A;
      letter-spacing: -0.03em;
    }
    .description {
      font-size: 15px;
      line-height: 1.55;
      color: #64748B;
      margin-top: 12px;
      max-width: 500px;
    }
    .features-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 10px 16px;
      margin-top: 18px;
    }
    .feature-item {
      display: flex;
      align-items: center;
      gap: 8px;
      background: #F8FAFC;
      border: 1px solid #E2E8F0;
      border-radius: 10px;
      padding: 8px 12px;
      font-size: 12px;
      font-weight: 600;
      color: #334155;
    }
    .feature-icon {
      width: 16px;
      height: 16px;
      background: #FFF1F0;
      color: #DA2F1F;
      border-radius: 4px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      font-size: 10px;
      font-weight: 800;
    }
    .meta-row {
      display: flex;
      align-items: center;
      gap: 12px;
      padding-top: 18px;
      border-top: 1px solid #F1F5F9;
    }
    .url-chip {
      display: flex;
      align-items: center;
      gap: 6px;
      background: #0F172A;
      color: #FFFFFF;
      font-size: 12px;
      font-weight: 600;
      padding: 6px 14px;
      border-radius: 8px;
      letter-spacing: -0.01em;
    }
    .status-text {
      font-size: 12px;
      color: #94A3B8;
      font-weight: 500;
    }
    .right-col {
      width: 572px;
      height: 100%;
      background: #F8FAFC;
      border-left: 1px solid #F1F5F9;
      position: relative;
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 30px;
    }
    .mockup-window {
      width: 100%;
      height: 100%;
      background: #FFFFFF;
      border-radius: 14px;
      border: 1px solid #CBD5E1;
      box-shadow: 0 25px 40px -12px rgba(15, 23, 42, 0.15), 0 0 0 1px rgba(15, 23, 42, 0.05);
      display: flex;
      flex-direction: column;
      overflow: hidden;
    }
    .window-header {
      height: 38px;
      background: #F8FAFC;
      border-bottom: 1px solid #E2E8F0;
      display: flex;
      align-items: center;
      padding: 0 14px;
      gap: 12px;
      flex-shrink: 0;
    }
    .dots {
      display: flex;
      gap: 6px;
    }
    .dot {
      width: 10px;
      height: 10px;
      border-radius: 50%;
    }
    .dot.red { background: #EF4444; }
    .dot.yellow { background: #F59E0B; }
    .dot.green { background: #10B981; }
    .window-title {
      font-size: 11px;
      font-weight: 600;
      color: #64748B;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .window-body {
      flex: 1;
      overflow: hidden;
      background: #0F172A;
      position: relative;
    }
    .mockup-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: top left;
      display: block;
    }
    .bottom-accent {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 6px;
      background: #DA2F1F;
    }
  </style>
</head>
<body>
  <div class="card">
    <div class="left-col">
      <div>
        <div class="brand-row">
          <img class="logo-img" src="data:image/png;base64,${logoBase64}" alt="Logo" />
          <div class="brand-title">
            <span class="red">Rahman</span> <span class="dark">printing</span>
          </div>
          <span class="brand-badge">Sistem POS</span>
        </div>

        <div class="headline-wrap">
          <div class="tagline-pill">Buku Panduan & Dokumentasi Resmi</div>
          <h1 class="headline">Panduan Operasional<br>Kasir & Percetakan</h1>
          <p class="description">
            Alur kerja terintegrasi: Transaksi kasir cepat, kalkulator otomatis ukuran spanduk, papan antrean SPK 6 tahap, dan pelaporan keuangan toko.
          </p>
        </div>

        <div class="features-grid">
          <div class="feature-item">
            <span class="feature-icon">✓</span>
            <span>16 Modul Alur Kerja</span>
          </div>
          <div class="feature-item">
            <span class="feature-icon">✓</span>
            <span>Kalkulator Cetak Meteran</span>
          </div>
          <div class="feature-item">
            <span class="feature-icon">✓</span>
            <span>Kasir POS & Struk Thermal</span>
          </div>
          <div class="feature-item">
            <span class="feature-icon">✓</span>
            <span>Papan Antrean SPK & Audit</span>
          </div>
        </div>
      </div>

      <div class="meta-row">
        <div class="url-chip">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
          <span>posguide.sobatweb.tech</span>
        </div>
        <span class="status-text">Rahman Printing POS v2.4</span>
      </div>
    </div>

    <div class="right-col">
      <div class="mockup-window">
        <div class="window-header">
          <div class="dots">
            <span class="dot red"></span>
            <span class="dot yellow"></span>
            <span class="dot green"></span>
          </div>
          <div class="window-title">Katalog Kasir & Transaksi POS — Panduan Sistem</div>
        </div>
        <div class="window-body">
          <img class="mockup-img" src="data:image/png;base64,${screenshotBase64}" alt="POS Interface" />
        </div>
      </div>
    </div>

    <div class="bottom-accent"></div>
  </div>
</body>
</html>`;

// 2. Generate 600x600 Square Fallback HTML
const squareHtml = `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="utf-8">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      width: 600px;
      height: 600px;
      overflow: hidden;
      background: #F1F5F9;
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 20px;
    }
    .card {
      width: 560px;
      height: 560px;
      background: #FFFFFF;
      border-radius: 18px;
      border: 1px solid #E2E8F0;
      box-shadow: 0 15px 35px -10px rgba(15, 23, 42, 0.08);
      position: relative;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      padding: 44px 36px 36px;
      text-align: center;
    }
    .badge {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 5px 14px;
      background: #FFF1F0;
      border: 1px solid #FECDD3;
      border-radius: 9999px;
      color: #DA2F1F;
      font-size: 11px;
      font-weight: 700;
      letter-spacing: 0.06em;
      text-transform: uppercase;
    }
    .badge::before {
      content: '';
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: #DA2F1F;
    }
    .center-content {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 12px;
      margin: 16px 0;
    }
    .logo-hero {
      width: 104px;
      height: 104px;
      object-fit: contain;
      filter: drop-shadow(0 10px 15px rgba(218, 47, 31, 0.15));
    }
    .brand-title {
      font-size: 34px;
      font-weight: 800;
      letter-spacing: -0.02em;
      margin-top: 4px;
    }
    .brand-title .red { color: #DA2F1F; }
    .brand-title .dark { color: #0F172A; }
    .headline {
      font-size: 21px;
      font-weight: 700;
      color: #1E293B;
      line-height: 1.35;
      letter-spacing: -0.02em;
    }
    .subtext {
      font-size: 13.5px;
      color: #64748B;
      line-height: 1.5;
      max-width: 440px;
    }
    .bottom-info {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 8px;
      width: 100%;
      padding-top: 14px;
      border-top: 1px solid #F1F5F9;
    }
    .url-chip {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      background: #0F172A;
      color: #FFFFFF;
      font-size: 12px;
      font-weight: 600;
      padding: 6px 16px;
      border-radius: 8px;
    }
    .subdomain {
      font-size: 11.5px;
      color: #94A3B8;
    }
    .bottom-accent {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 6px;
      background: #DA2F1F;
    }
  </style>
</head>
<body>
  <div class="card">
    <div class="badge">Buku Panduan & Dokumentasi</div>

    <div class="center-content">
      <img class="logo-hero" src="data:image/png;base64,${logoBase64}" alt="Rahman Printing Logo" />
      <div class="brand-title">
        <span class="red">Rahman</span> <span class="dark">printing</span>
      </div>
      <h1 class="headline">Panduan Penggunaan Sistem Kasir & Percetakan</h1>
      <p class="subtext">
        Dokumentasi operasional lengkap kasir POS, kalkulator cetak spanduk, alur antrean SPK, dan pelaporan keuangan.
      </p>
    </div>

    <div class="bottom-info">
      <div class="url-chip">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
        <span>posguide.sobatweb.tech</span>
      </div>
      <div class="subdomain">Dokumentasi Resmi Rahman Printing POS</div>
    </div>

    <div class="bottom-accent"></div>
  </div>
</body>
</html>`;

fs.writeFileSync('/tmp/og-preview-template.html', bannerHtml);
fs.writeFileSync('/tmp/og-square-template.html', squareHtml);

console.log('Rendering 1200x630 banner via Chrome headless...');
execSync(`google-chrome --headless=new --disable-gpu --window-size=1200,630 --screenshot="${path.join(publicImgDir, 'og-preview.png')}" file:///tmp/og-preview-template.html`);

console.log('Rendering 600x600 square via Chrome headless...');
execSync(`google-chrome --headless=new --disable-gpu --window-size=600,600 --screenshot="${path.join(publicImgDir, 'og-square.png')}" file:///tmp/og-square-template.html`);

console.log('Done! Generated:');
console.log(' - ' + path.join(publicImgDir, 'og-preview.png'));
console.log(' - ' + path.join(publicImgDir, 'og-square.png'));
