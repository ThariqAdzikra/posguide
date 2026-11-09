export const guideRoles = [
  {
    id: 'kasir',
    label: 'Kasir & Front Office',
    badge: 'Kasir & Transaksi',
    tagline: 'Alur cepat transaksi kasir, kalkulasi otomatis meteran spanduk, hingga cetak struk thermal 58mm & 80mm.',
    icon: 'Store',
    steps: [
      {
        id: 'kasir-katalog',
        number: '01',
        title: 'Katalog Produk & Barcode/Pencarian',
        subtitle: 'Navigasi Item Cetak & Filter Kategori',
        description: 'Kasir dapat mencari produk secara instan melalui kolom pencarian atau filter kategori di bagian atas. Setiap kartu produk menampilkan nama barang, foto contoh, kode SKU/tarif dasar, dan indikator sisa stok secara real-time.',
        image: '/screenshots/kasir/pos-katalog-produk.png',
        tips: 'Ketik minimal 2 karakter pada bar pencarian untuk memfilter produk seketika tanpa perlu menekan Enter.',
        highlights: [
          { number: 1, text: 'Bar Pencarian & Filter: Cari produk berdasarkan nama, kode SKU, atau kategori cetak.' },
          { number: 2, text: 'Kartu Produk & Tarif: Menampilkan tarif dasar satuan atau tarif per meter persegi.' },
          { number: 3, text: 'Tombol Tambah (+): Klik untuk langsung memasukkan produk satuan ke keranjang belanja.' }
        ]
      },
      {
        id: 'kasir-custom-ukuran',
        number: '02',
        title: 'Kalkulasi Spanduk & Custom Ukuran',
        subtitle: 'Perhitungan Otomatis Panjang × Lebar (m²)',
        description: 'Untuk produk meteran seperti Spanduk Flexi / Banner, mengklik kartu produk akan membuka modal kustomisasi ukuran. Masukkan dimensi panjang dan lebar dalam meter, pilih jenis finishing (mata ayam di tiap sudut/keliling, atau selongsong), dan sistem otomatis menghitung luas serta harga total secara matematis.',
        image: '/screenshots/kasir/pos-custom-ukuran.png',
        tips: 'Sistem menerapkan batas minimum luas (misal 1 m²) sesuai aturan pricing percetakan agar nota tetap akurat.',
        highlights: [
          { number: 1, text: 'Dimensi Panjang & Lebar: Input angka dalam meter (contoh: 3 × 1 untuk spanduk 3 meter).' },
          { number: 2, text: 'Pilihan Finishing: Opsi mata ayam (ring lubang tali), lebihan bahan, atau potongan pas.' },
          { number: 3, text: 'Kalkulator Harga Instan: Subtotal langsung terkalkulasi sebelum barang masuk ke keranjang.' }
        ]
      },
      {
        id: 'kasir-keranjang-bayar',
        number: '03',
        title: 'Manajemen Keranjang & Pembayaran (DP / Lunas)',
        subtitle: 'Panel Keranjang Kanan & Checkout F4',
        description: 'Panel sisi kanan merangkum item yang telah dipilih. Tentukan data pelanggan (Retail, Reseller, atau Korporat). Tekan tombol "Proses Pembayaran" (atau tekan F4 pada keyboard). Pilih metode bayar: Tunai (dengan hitung kembalian cepat), QRIS, atau Transfer Bank. Untuk pesanan yang butuh waktu produksi berhari-hari, kasir dapat memilih skema Uang Muka (DP 50%).',
        image: '/screenshots/kasir/pos-keranjang-dan-pembayaran.png',
        tips: 'Tekan F4 dari mana saja di layar kasir untuk langsung memicu proses pembayaran tanpa perlu menggeser mouse.',
        highlights: [
          { number: 1, text: 'Identitas Pelanggan: Cari nama pelanggan langganan atau klik Tambah untuk pelanggan baru.' },
          { number: 2, text: 'Skema Pembayaran: Pilih Lunas atau Down Payment (DP) untuk mencatat piutang tertagih.' },
          { number: 3, text: 'Kalkulator Tunai: Tombol nominal pecahan cepat (Rp 50.000, Rp 100.000) untuk kembalian presisi.' }
        ]
      },
      {
        id: 'kasir-struk-thermal',
        number: '04',
        title: 'Dialog Cetak Struk Thermal (58mm / 80mm)',
        subtitle: 'Dukungan Bluetooth ESC/POS & Universal Print',
        description: 'Setelah pembayaran selesai, modal pratinjau struk thermal langsung muncul. Kasir dapat memilih format ukuran kertas: 58 mm (Mini portabel) atau 80 mm (Standar desktop). Hubungkan ke printer kasir via tombol "Cetak via Bluetooth" (Web Bluetooth ESC/POS) atau gunakan "Cetak Biasa (Universal)" untuk dialog print sistem operasi.',
        image: '/screenshots/kasir/pos-cetak-struk-thermal.png',
        tips: 'Ukuran kertas yang Anda pilih tersimpan otomatis di browser kasir, sehingga transaksi berikutnya tidak perlu disetel ulang.',
        highlights: [
          { number: 1, text: 'Format Kertas 58mm / 80mm: Switcher satu klik untuk menyesuaikan lebar print head hardware.' },
          { number: 2, text: 'Cetak via Bluetooth: Mengirim data raw ESC/POS langsung ke printer thermal portabel.' },
          { number: 3, text: 'QR Code WhatsApp: Pelanggan dapat scan struk untuk langsung mengirim pesan ke nomor toko.' }
        ]
      }
    ],
    shortcuts: [
      { key: 'F4', desc: 'Fokus dan picu dialog Proses Pembayaran / Checkout' },
      { key: 'Enter', desc: 'Konfirmasi tombol submit pada modal yang aktif' },
      { key: 'Esc', desc: 'Tutup modal dialog yang sedang terbuka atau bersihkan pencarian' }
    ]
  },
  {
    id: 'operator',
    label: 'Operator Desain & Cetak',
    badge: 'Produksi SPK',
    tagline: 'Papan kendali 6 alur Surat Perintah Kerja (SPK), penguncian file desain, hingga notifikasi WhatsApp.',
    icon: 'Layers',
    steps: [
      {
        id: 'operator-antrean',
        number: '01',
        title: 'Papan Kendali Antrean Kerja & 6 Tahapan SPK',
        subtitle: 'Monitoring Alur Produksi Real-Time (/orders)',
        description: 'Semua pesanan yang dibuat kasir masuk otomatis ke halaman Pesanan (/orders). Setiap nota memiliki status alur kerja berurutan: Order Masuk → Menunggu Desain → Proses Desain → Proses Cetak → Siap Diambil → Selesai. Kartu metrik di atas merangkum total antrean kerja dan nota yang siap diambil pelanggan.',
        image: '/screenshots/operator/orders-daftar-antrean.png',
        tips: 'Sistem menerapkan aturan transisi berurutan; operator tidak dapat melompat tahapan sebelum tahap sebelumnya selesai.',
        highlights: [
          { number: 1, text: 'Kartu Metrik Produksi: Ringkasan jumlah pesanan aktif yang sedang dalam antrean kerja.' },
          { number: 2, text: 'Tabel SPK: Menampilkan nomor nota, waktu order, nama pelanggan, pesanan, dan status produksi.' },
          { number: 3, text: 'Pencarian SPK: Filter nota seketika berdasarkan nomor invoice atau nama pelanggan.' }
        ]
      },
      {
        id: 'operator-drawer-link',
        number: '02',
        title: 'Drawer Detail SPK & Kunci Link File Desain',
        subtitle: 'Integrasi Google Drive / Canva & Validasi Link',
        description: 'Mengklik baris pesanan akan membuka drawer samping berisi Surat Perintah Kerja (SPK) detail. Sebelum pesanan dapat dinaikkan ke tahap "Proses Cetak", desainer wajib menempelkan tautan file desain (Google Drive, Canva, Figma) pada kolom yang disediakan dan menekan "Simpan". Jika link belum diisi, tombol tahapan cetak terkunci otomatis untuk mencegah kesalahan produksi.',
        image: '/screenshots/operator/orders-drawer-spk-detail.png',
        tips: 'Pastikan file Google Drive telah disetel "Anyone with link can view" agar operator mesin cetak dapat mengunduh aset.',
        highlights: [
          { number: 1, text: 'Spesifikasi Item SPK: Dimensi meteran, jumlah cetak, bahan, dan instruksi khusus kasir.' },
          { number: 2, text: 'Input File Desain & Cetak: Kolom URL link Google Drive/Canva dengan tombol Simpan terproteksi.' },
          { number: 3, text: 'Tombol Alur Berurutan: 6 tombol tahapan status yang memandu progres kerja fisik bengkel cetak.' }
        ]
      }
    ],
    shortcuts: []
  },
  {
    id: 'owner',
    label: 'Owner & Manajemen',
    badge: 'Laporan & Finansial',
    tagline: 'Pengawasan stok bahan baku percetakan, analisis loyalitas pelanggan, dan rekapitulasi arus kas.',
    icon: 'TrendingUp',
    steps: [
      {
        id: 'owner-stok',
        number: '01',
        title: 'Kontrol Ketersediaan Bahan & Penyesuaian Stok',
        subtitle: 'Manajemen Inventaris & Opname Bahan Baku (/products)',
        description: 'Halaman Stok (/products) memantau ketersediaan bahan baku percetakan (kertas art carton, roll spanduk flexi, stiker kromo, dsb). Sistem menyajikan kartu indikator stok: Total Produk, Stok Aman (Hijau), Stok Menipis (Kuning), dan Stok Habis (Merah). Owner dapat melakukan audit opname atau menambah stok masuk dengan tombol "+/- Stok".',
        image: '/screenshots/owner/stok-manajemen-produk.png',
        tips: 'Setel batas minimum stok pada produk agar indikator kuning menyala otomatis sebelum bahan kehabisan di tengah pengerjaan order.',
        highlights: [
          { number: 1, text: 'Kartu Metrik Stok: Visualisasi cepat produk aman, menipis, atau kritis habis.' },
          { number: 2, text: 'Filter Status Stok: Saring daftar untuk hanya menampilkan produk yang butuh pengadaan ulang.' },
          { number: 3, text: 'Tombol Penyesuaian Stok: Catat mutasi masuk atau koreksi fisik barang tanpa merusak data penjualan.' }
        ]
      },
      {
        id: 'owner-crm',
        number: '02',
        title: 'Direktori CRM & Riwayat Transaksi Pelanggan',
        subtitle: 'Customer Lifetime Value & Pelacakan Piutang (/customers)',
        description: 'Menu Pelanggan (/customers) merekam direktori mitra dan riwayat pembelian pelanggan secara komprehensif. Owner dapat melihat akumulasi total belanja sepanjang masa (Lifetime Value), sisa piutang berjalan, serta daftar lengkap nota yang pernah diterbitkan untuk pelanggan tersebut.',
        image: '/screenshots/owner/crm-pelanggan-riwayat.png',
        tips: 'Klik baris pelanggan untuk membuka riwayat nota dan tombol WhatsApp langsung untuk konfirmasi atau penagihan nota DP.',
        highlights: [
          { number: 1, text: 'Total Belanja Pelanggan: Akumulasi nilai transaksi historis untuk mengidentifikasi akun prioritas.' },
          { number: 2, text: 'Kolom Kontak WhatsApp: Tombol komunikasi instan ke nomor WhatsApp pelanggan.' },
          { number: 3, text: 'Drawer Riwayat Transaksi: Daftar seluruh invoice pelanggan beserta status pelunasan.' }
        ]
      },
      {
        id: 'owner-laporan',
        number: '03',
        title: 'Laporan Invoice & Rekapitulasi Arus Kas Harian',
        subtitle: 'Rekap Omzet, Pembayaran Lunas vs Sisa Piutang (/reports)',
        description: 'Halaman Invoice (/reports) memaparkan rekapitulasi transaksi finansial kasir. Dilengkapi pemisahan tegas antara Omzet Kotor Penjualan, Pembayaran Kas Riil yang Telah Diterima, dan Sisa Piutang DP Berjalan. Klik pada invoice mana pun untuk memeriksa rincian item, metode bayar (Tunai vs QRIS vs Transfer), dan kasir yang memproses nota.',
        image: '/screenshots/owner/laporan-invoice-keuangan.png',
        tips: 'Gunakan filter metode pembayaran untuk mencocokkan total setoran kas fisik harian dengan riwayat rekening bank / QRIS.',
        highlights: [
          { number: 1, text: 'Ringkasan Omzet & Kas: Menghitung total omzet penjualan vs kas tunai riil yang diterima kasir.' },
          { number: 2, text: 'Status Pelunasan Nota: Membedakan nota lunas penuh dengan nota berstatus DP / sisa piutang.' },
          { number: 3, text: 'Drawer Rincian Finansial: Menampilkan item pesanan, kasir bertugas, dan timestamp pembayaran.' }
        ]
      }
    ],
    shortcuts: []
  }
];

export const faqList = [
  {
    q: 'Bagaimana cara menghubungkan printer thermal Bluetooth portabel?',
    a: 'Nyalakan printer Bluetooth dan pastikan lampu indikator pairing berkedip. Di modal "Cetak Struk Transaksi", pilih tombol "Cetak via Bluetooth". Browser Google Chrome akan memunculkan dialog pencarian perangkat Bluetooth. Pilih nama printer Anda (misal "RPP02N" atau "Thermal Printer") lalu klik Pair. Koneksi ini menggunakan Web Bluetooth ESC/POS langsung tanpa install driver.'
  },
  {
    q: 'Kapan sebaiknya kasir memilih format kertas 58mm vs 80mm?',
    a: 'Format 58mm dirancang khusus untuk printer thermal mini portabel (printable width 48mm / 30 karakter per baris). Sistem telah dioptimalkan agar garis pembatas strip dan rincian harga tidak meluber atau wrap ke baris baru. Format 80mm digunakan untuk printer thermal kasir desktop standar dengan kapasitas teks lebih lebar (48 kolom).'
  },
  {
    q: 'Mengapa status pesanan tidak bisa langsung dipindahkan ke Proses Cetak?',
    a: 'Sistem POS menerapkan proteksi kualitas: operator tidak diizinkan memulai pencetakan mesin jika link file desain (Google Drive / Canva) belum disimpan pada drawer SPK. Hal ini untuk mencegah risiko mesin cetak berjalan tanpa file acuan yang valid.'
  },
  {
    q: 'Bagaimana penanganan pesanan yang dibayar dengan Uang Muka (DP)?',
    a: 'Di modal pembayaran kasir, pilih opsi DP dan masukkan nominal yang dibayarkan pelanggan (misal 50%). Nota akan berstatus DP dan sisa piutang dicatat pada sistem. Saat pesanan berstatus Siap Diambil, operator/kasir dapat menekan tombol Pelunasan di drawer SPK untuk menerima sisa pembayaran sebelum barang diserahkan.'
  }
];
