export const guideRoles = [
  {
    id: 'kasir',
    label: 'Kasir & Front Office',
    badge: 'Penjualan & Kasir',
    tagline: 'Alur cepat transaksi kasir, kalkulasi otomatis meteran spanduk, hingga cetak struk thermal.',
    icon: 'Store',
    steps: [
      {
        id: 'pos-input',
        number: '01',
        title: 'Pilih Produk & Atur Spesifikasi Cetak',
        subtitle: 'Katalog Produk & Kalkulasi Meteran Otomatis',
        description: 'Kasir dapat mencari produk secara instan melalui kolom pencarian atau filter kategori. Untuk produk meteran seperti Spanduk / Banner, sistem menyediakan modal otomatis untuk menghitung luas (panjang × lebar) serta pilihan finishing mata ayam.',
        image: '/screenshots/kasir/pos-katalog-produk.jpg',
        tips: 'Ketik nama produk minimal 2 huruf di bar pencarian atau klik kategori untuk memfilter cepat.',
        highlights: [
          { number: 1, text: 'Filter Kategori: Pilih kategori cetak (Digital Print, Spanduk, Kartu Nama, dsb).' },
          { number: 2, text: 'Katalog Interaktif: Kartu produk menampilkan foto, harga jual dasar, dan status stok.' },
          { number: 3, text: 'Tombol Tambah (+): Klik sekali untuk produk satuan atau buka form ukuran untuk spanduk.' }
        ]
      },
      {
        id: 'pos-keranjang',
        number: '02',
        title: 'Kelola Keranjang & Identitas Pelanggan',
        subtitle: 'Penetapan Harga, Diskon, & Segmentasi Pelanggan',
        description: 'Periksa item belanja di panel sisi kanan. Hubungkan transaksi dengan data kontak pelanggan (Retail, Reseller, atau Korporat). Jika pelanggan baru, Anda dapat menambahkan kontak langsung tanpa keluar dari layar kasir.',
        image: '/screenshots/kasir/pos-keranjang-dan-pembayaran.jpg',
        tips: 'Menghubungkan nomor WhatsApp pelanggan sangat disarankan agar pelanggan menerima update progres SPK otomatis.',
        highlights: [
          { number: 1, text: 'Pilih Pelanggan: Cari nama pelanggan atau daftarkan pelanggan baru secara kilat.' },
          { number: 2, text: 'Kuantitas & Catatan Khusus: Sesuaikan jumlah cetak dan tulis instruksi khusus untuk desainer.' },
          { number: 3, text: 'Ringkasan Tagihan: Subtotal terhitung otomatis secara real-time.' }
        ]
      },
      {
        id: 'pos-bayar',
        number: '03',
        title: 'Penyelesaian Pembayaran & Uang Muka (DP)',
        subtitle: 'Tunai, QRIS Statis/Dinamis, Transfer, atau DP 50%',
        description: 'Tekan tombol "Proses Pembayaran" (atau tekan tombol F4 di keyboard). Pilih opsi pembayaran Lunas atau Down Payment (DP) jika pesanan butuh proses desain/cetak terlebih dahulu. Pilih metode Tunai, QRIS, atau Transfer.',
        image: '/screenshots/kasir/pos-keranjang-dan-pembayaran.jpg',
        tips: 'Untuk pesanan dengan nilai besar atau waktu pengerjaan berhari-hari, gunakan skema DP 50%. Sisa piutang tercatat rapi di sistem.',
        highlights: [
          { number: 1, text: 'Metode Bayar Fleksibel: Dukungan Tunai dengan kalkulator kembalian, QRIS, dan Transfer.' },
          { number: 2, text: 'Skema Lunas / DP: Pembayaran parsial otomatis membagi status invoice dan piutang.' },
          { number: 3, text: 'Konfirmasi Instan: Tombol cetak struk langsung aktif setelah transaksi tersimpan.' }
        ]
      },
      {
        id: 'pos-struk',
        number: '04',
        title: 'Cetak Struk Thermal (58mm / 80mm)',
        subtitle: 'Dukungan Bluetooth ESC/POS & Universal Print',
        description: 'Setelah pembayaran sukses, dialog cetak struk terbuka. Anda dapat beralih antara format 58mm (mini) atau 80mm (standar). Cetak langsung ke printer Bluetooth nirkabel via Web Bluetooth API atau gunakan dialog print universal browser.',
        image: '/screenshots/kasir/pos-cetak-struk-thermal.jpg',
        tips: 'Gunakan browser Google Chrome di desktop/tablet untuk dukungan Web Bluetooth langsung tanpa driver tambahan.',
        highlights: [
          { number: 1, text: 'Pilihan Format Kertas: Tombol toggle 58mm atau 80mm tersimpan otomatis di perangkat kasir.' },
          { number: 2, text: 'Cetak via Bluetooth: Koneksi langsung ke printer thermal portabel kasir.' },
          { number: 3, text: 'QR Code WhatsApp: Pelanggan dapat scan struk untuk langsung chat konfirmasi ke toko.' }
        ]
      }
    ],
    shortcuts: [
      { key: 'F4', desc: 'Fokus ke proses pembayaran / checkout keranjang' },
      { key: 'Esc', desc: 'Tutup modal atau batal filter' },
      { key: 'Enter', desc: 'Konfirmasi tombol utama pada modal' }
    ]
  },
  {
    id: 'operator',
    label: 'Operator Desain & Cetak',
    badge: 'Produksi & SPK',
    tagline: 'Pantau 6 tahapan pesanan, simpan link file Canva/GDrive, dan kirim notifikasi WhatsApp selesai.',
    icon: 'Layers',
    steps: [
      {
        id: 'orders-antrean',
        number: '01',
        title: 'Pantau Antrean Kerja & 6 Alur Produksi',
        subtitle: 'Papan Kendali Surat Perintah Kerja (SPK)',
        description: 'Di menu Pesanan (/orders), semua pesanan yang diinput kasir masuk otomatis ke papan kerja produksi. Pengerjaan berjalan berurutan: Order Masuk → Menunggu Desain → Proses Desain → Proses Cetak → Siap Diambil → Selesai.',
        image: '/screenshots/operator/orders-drawer-spk-detail.jpg',
        tips: 'Sistem menerapkan proteksi ketat: tahapan tidak boleh dilompati agar tidak terjadi kesalahan cetak di mesin.',
        highlights: [
          { number: 1, text: 'Kartu Metrik: Lihat total nilai pesanan, antrean kerja aktif, dan nota siap diambil.' },
          { number: 2, text: 'Pencarian SPK: Cari berdasarkan nomor invoice, nama pemesan, atau nama produk cetak.' },
          { number: 3, text: 'Label Status Visual: Warna badge membedakan tingkat urgensi pesanan.' }
        ]
      },
      {
        id: 'orders-link-desain',
        number: '02',
        title: 'Input & Kunci Link File Desain',
        subtitle: 'Integrasi Google Drive, Figma, atau Canva',
        description: 'Sebelum masuk ke tahap "Proses Desain", desainer wajib memasukkan tautan file desain atau nama file siap cetak di kolom yang disediakan. Tanpa link desain, status tidak dapat dinaikkan ke proses produksi mesin.',
        image: '/screenshots/operator/orders-drawer-spk-detail.jpg',
        tips: 'Pastikan permission file di Google Drive berstatus "Anyone with link can view" agar operator mesin bisa membukanya.',
        highlights: [
          { number: 1, text: 'Kolom Tautan Desain: Tempel URL Google Drive / Canva / Figma.' },
          { number: 2, text: 'Tombol Simpan Link: Memvalidasi tautan dan mengaktifkan tombol pengerjaan berikutnya.' },
          { number: 3, text: 'Peringatan Validasi: Peringatan bertema merah jika mencoba melompat tanpa input link.' }
        ]
      },
      {
        id: 'orders-produksi',
        number: '03',
        title: 'Kirim ke Mesin Cetak & Finishing',
        subtitle: 'Proses Cetak & Quality Control',
        description: 'Setelah desain disetujui, operator mesin mengklik "Proses Cetak". Spesifikasi pesanan (ukuran, bahan Art Paper / Flexi, tipe laminasi glossy/doff, mata ayam) tertulis jelas pada lembar SPK digital.',
        image: '/screenshots/operator/orders-drawer-spk-detail.jpg',
        tips: 'Operator dapat mencetak ulang struk SPK kertas kecil untuk ditempelkan pada paket pesanan.',
        highlights: [
          { number: 1, text: 'Spesifikasi Lengkap: Item, dimensi meteran, dan catatan kasir tampil rinci.' },
          { number: 2, text: 'Cetak Ulang Struk SPK: Tombol cetak di sudut kanan atas drawer kerja.' },
          { number: 3, text: 'Transisi Status: Mengklik status berikutnya langsung mencatat log waktu pengerjaan.' }
        ]
      },
      {
        id: 'orders-wa-notif',
        number: '04',
        title: 'Notifikasi Otomatis WhatsApp & Serah Terima',
        subtitle: 'Kabar Pesanan Siap Diambil ke Pelanggan',
        description: 'Ketika pesanan selesai dicetak dan masuk tahap "Siap Diambil", tombol WhatsApp aktif secara otomatis dengan pesan siap kirim. Saat pelanggan mengambil pesanan dan melunasi sisa tagihan, status diubah menjadi "Selesai".',
        image: '/screenshots/operator/orders-notifikasi-whatsapp.jpg',
        tips: 'Pesan WhatsApp otomatis menyertakan nomor invoice dan sisa tagihan yang harus dilunasi saat pengambilan.',
        highlights: [
          { number: 1, text: 'Tombol WhatsApp Hijau: Membuka WhatsApp Web / Desktop dengan draf pesan otomatis.' },
          { number: 2, text: 'Status Pembayaran: Memastikan apakah pesanan sudah lunas atau masih ada sisa DP.' },
          { number: 3, text: 'Penyelesaian SPK: Tombol "Selesai" mengarsipkan pesanan ke riwayat pesanan selesai.' }
        ]
      }
    ],
    shortcuts: []
  },
  {
    id: 'owner',
    label: 'Owner & Manajemen',
    badge: 'Laporan & Pengawasan',
    tagline: 'Pantau perputaran stok bahan, analisa pelanggan bernilai tinggi, dan kendalikan keuangan.',
    icon: 'TrendingUp',
    steps: [
      {
        id: 'owner-stok',
        number: '01',
        title: 'Kendali Stok Bahan & Peringatan Habis',
        subtitle: 'Manajemen Inventaris & Opname Otomatis',
        description: 'Di menu Stok (/products), Owner dapat melihat ketersediaan bahan baku percetakan (kertas rim, gulungan spanduk meteran, tinta). Sistem memberikan indikator visual: Stok Aman (Hijau), Stok Menipis (Kuning), dan Stok Habis (Merah).',
        image: '/screenshots/owner/stok-manajemen-produk.jpg',
        tips: 'Setel batas minimum stok pada setiap produk agar sistem memberi sinyal sebelum bahan habis saat antrean cetak tinggi.',
        highlights: [
          { number: 1, text: 'Kartu Indikator Stok: Menampilkan jumlah produk dalam kondisi aman, menipis, atau habis.' },
          { number: 2, text: 'Penyesuaian Cepat (+/- Stok): Input penambahan stok masuk tanpa ribet.' },
          { number: 3, text: 'Audit Log Stok: Seluruh mutasi stok tercatat rapi berdasarkan kasir yang bertugas.' }
        ]
      },
      {
        id: 'owner-pelanggan',
        number: '02',
        title: 'Analisis Loyalitas Pelanggan (CRM)',
        subtitle: 'Customer Lifetime Value & Segmentasi Mitra',
        description: 'Menu Pelanggan (/customers) merekam riwayat semua mitra bisnis. Owner dapat melihat pelanggan yang paling sering memesan, total akumulasi belanja (LTV), dan status piutang yang belum terbayar.',
        image: '/screenshots/owner/crm-pelanggan-riwayat.jpg',
        tips: 'Klik nama pelanggan untuk membuka riwayat seluruh nota pembelian dari awal hingga saat ini.',
        highlights: [
          { number: 1, text: 'Metrik Finansial Pelanggan: Total belanja akumulasi dan sisa piutang berjalan.' },
          { number: 2, text: 'Filter Waktu & Status: Pilah transaksi lunas atau belum lunas per pelanggan.' },
          { number: 3, text: 'Pintas Chat WhatsApp: Tombol komunikasi langsung untuk penagihan atau penawaran promo.' }
        ]
      },
      {
        id: 'owner-laporan',
        number: '03',
        title: 'Laporan Keuangan & Rekap Arus Kas',
        subtitle: 'Laporan Invoice, Omzet Harian, & Piutang Berjalan',
        description: 'Menu Invoice (/reports) memaparkan rekapitulasi penjualan harian, mingguan, dan bulanan. Dilengkapi pemisahan antara kas riil yang sudah diterima versus piutang DP yang masih menggantung.',
        image: '/screenshots/owner/laporan-invoice-keuangan.jpg',
        tips: 'Data laporan dapat difilter berdasarkan metode pembayaran (Tunai vs QRIS vs Transfer) untuk pencocokan setoran bank.',
        highlights: [
          { number: 1, text: 'Ringkasan Omzet: Total nilai penjualan kotor dan perolehan kas bersih.' },
          { number: 2, text: 'Rincian Pembayaran: Informasi detail kas diterima per transaksi.' },
          { number: 3, text: 'Ekspor Data: Siap dicetak atau diunduh untuk kebutuhan pembukuan akuntansi.' }
        ]
      }
    ],
    shortcuts: []
  }
];

export const faqList = [
  {
    q: 'Bagaimana jika printer thermal tidak terdeteksi via Bluetooth?',
    a: 'Pastikan Bluetooth di komputer/laptop menyala dan printer thermal dalam kondisi pairing. Pada browser Google Chrome, buka alamat "chrome://flags" dan pastikan Web Bluetooth API aktif. Catatan: Web Bluetooth tidak didukung pada mode Chrome Incognito (Privasi).'
  },
  {
    q: 'Kapan sebaiknya menggunakan format struk 58mm vs 80mm?',
    a: 'Format 58mm dirancang untuk printer thermal portabel mini (hemat kertas dan praktis untuk counter kasir kecil). Format 80mm cocok untuk printer thermal desktop kasir standar dengan ukuran huruf dan rincian transaksi yang lebih lega.'
  },
  {
    q: 'Apakah bisa mengubah pesanan yang sudah masuk ke proses pengerjaan?',
    a: 'Perubahan pesanan hanya bisa dilakukan sebelum masuk ke "Proses Cetak". Jika desain perlu direvisi, desainer dapat memperbarui tautan Google Drive/Canva di drawer SPK detail.'
  },
  {
    q: 'Bagaimana cara menangani pelanggan yang ingin membayar dengan DP?',
    a: 'Saat kasir berada di modal pembayaran, pilih opsi "Uang Muka (DP)". Masukkan nominal DP yang disetorkan (misal 50%). Invoice akan otomatis berstatus DP dan sisa piutang akan ditagihkan saat pesanan berstatus Siap Diambil.'
  }
];
