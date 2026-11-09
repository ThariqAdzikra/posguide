# Rahman Printing POS — Interactive User Guide Website

Website landing page panduan visual interaktif resmi untuk operasional sistem **Rahman Printing POS (Point of Sale & SPK Percetakan)**.

---

## 🚀 Fitur Unggulan

1. **Multi-Peran (Multi-Role Switcher)**:
   - **Kasir & Front Office**: Input transaksi, kalkulasi spanduk meteran, keranjang, pembayaran DP/Lunas, dan cetak struk thermal 58mm/80mm via Web Bluetooth.
   - **Operator Desain & Cetak**: Papan kendali SPK 6 status pengerjaan, kunci link Google Drive/Canva, dan notifikasi WhatsApp pesanan siap diambil.
   - **Owner & Manajemen**: Pengawasan perputaran stok bahan, analisis pelanggan (CRM/LTV), laporan keuangan invoice, serta audit center pembatalan (void) nota.
2. **Mockup Screenshot Interaktif**:
   - Pratinjau tangkapan layar berbingkai browser bersih.
   - Fitur **Lightbox Zoom**: Klik gambar untuk memperbesar gambar dalam resolusi penuh.
   - Poin panduan beranotasi nomor (1, 2, 3) dan tips praktis operasional.
3. **Cheat Sheet Keyboard Kasir**: Rangkuman shortcut tombol cepat kasir (`F4`, `Enter`, `Esc`).
4. **Pusat FAQ & Pemecahan Masalah**: Bantuan koneksi printer thermal Bluetooth ESC/POS dan skema uang muka (DP).

---

## 🛠️ Tech Stack

- **React 19**
- **Vite 8**
- **Tailwind CSS v4** (`@tailwindcss/vite`)
- **Lucide React** (Iconography)
- **Inter Font Family** (Google Fonts)

---

## 💻 Cara Menjalankan Secara Lokal

```bash
# 1. Masuk ke direktori pos-guide
cd /home/thariq12/Dokumen/ngoding/pos-guide

# 2. Jalankan server development
npm run dev

# 3. Buka browser pada URL yang muncul (biasanya http://localhost:5173)
```

---

## 📸 Menambah atau Mengganti Tangkapan Layar (Screenshot)

Seluruh tangkapan layar disimpan dalam folder `public/screenshots/`:
- `public/screenshots/kasir/`
- `public/screenshots/operator/`
- `public/screenshots/owner/`

Untuk mengganti gambar atau mengubah teks deskripsi panduan, cukup edit file data di:
`src/data/guideContent.js`

---

## 🌐 Build & Deployment

Untuk membuat build produksi:
```bash
npm run build
```
Folder hasil build berada di `dist/` dan siap dideploy langsung ke **Vercel**, **Netlify**, atau **GitHub Pages**.
