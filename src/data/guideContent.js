export const guideSections = [
  {
    groupId: 'auth-account',
    groupTitle: 'Akun & Akses',
    items: [
      {
        id: 'auth-login',
        endpoint: '/login',
        shortTitle: 'Login & Peran',
        title: 'Login & Akses Peran Pengguna',
        summary: 'Pintu masuk utama sistem dengan pembagian hak akses terisolasi untuk Owner, Admin, dan Karyawan.',
        description: 'Sistem POS Rahman Printing menggunakan form login berbasis Card Deck. Setiap akun memiliki hak akses yang disesuaikan dengan tanggung jawab kerja: Karyawan (Kasir & Operator SPK), Administrator (Pengaturan data master dan staf), serta Owner (Dashboard finansial dan audit).',
        image: '/screenshots/auth/auth-login-masuk.png',
        rules: 'Pastikan menggunakan akun resmi yang terdaftar. Sesi login tersimpan aman menggunakan cookie HTTP-only terenkripsi.',
        points: [
          { label: 'Input Username / Email', desc: 'Masukkan username atau alamat email akun yang telah didaftarkan administrator toko.' },
          { label: 'Input Password & Toggle Mata', desc: 'Gunakan ikon mata untuk memeriksa ketikan password sebelum menekan tombol masuk.' },
          { label: 'Role-based Routing', desc: 'Sistem otomatis mengarahkan ke dashboard yang sesuai dengan hak akses peran pengguna.' }
        ]
      },
      {
        id: 'auth-forgot-password',
        endpoint: '/forgot-password',
        shortTitle: 'Lupa Password',
        title: 'Lupa Password & Pemulihan Akun',
        summary: 'Prosedur pemulihan kata sandi staf dan perintah darurat terminal untuk akun Owner.',
        description: 'Jika staf kasir atau operator lupa kata sandi, klik tombol "Lupa Password?" pada bagian bawah form login. Untuk pemulihan darurat akun Administrator/Owner utama tanpa akses email, sistem menyediakan perintah CLI Artisan khusus yang dapat dijalankan langsung di server.',
        image: '/screenshots/auth/auth-lupa-password.png',
        rules: 'Akun Owner utama dapat direset instan via terminal server menggunakan perintah: php artisan pos:reset-owner --email="owner@pos.com" --password="PasswordBaru".',
        points: [
          { label: 'Form Pemulihan Akun', desc: 'Masukkan username dan nomor telepon yang terdaftar untuk verifikasi kepemilikan akun.' },
          { label: 'Notifikasi Konfirmasi', desc: 'Sistem menampilkan pop-up notifikasi status instruksi pengaturan ulang kata sandi.' },
          { label: 'Bantuan Administrator', desc: 'Staf juga dapat meminta Administrator toko untuk mengubah sandi melalui menu Manajemen Karyawan.' }
        ]
      },
      {
        id: 'profile-pengaturan',
        endpoint: '/profile',
        shortTitle: 'Profil Pengguna',
        title: 'Profil Pengguna & Keamanan Akun',
        summary: 'Pembaruan informasi profil pribadi, nomor WhatsApp, foto avatar, dan perubahan kata sandi.',
        description: 'Setiap pengguna yang login dapat membuka halaman Profil (/profile) melalui dropdown pojok kanan atas. Halaman ini digunakan untuk memperbarui nama lengkap, nomor WhatsApp untuk notifikasi toko, mengunggah foto avatar, serta mengganti kata sandi secara mandiri.',
        image: '/screenshots/profile/profile-pengaturan-akun.png',
        rules: 'Untuk keamanan akun, penggantian kata sandi wajib memasukkan kata sandi saat ini (current password) dengan benar.',
        points: [
          { label: 'Informasi Profil & Kontak', desc: 'Perbarui nama tampilan dan nomor WhatsApp aktif yang digunakan dalam komunikasi pesanan.' },
          { label: 'Unggah Foto Avatar', desc: 'Pilih foto profil staf berformat PNG atau JPG untuk mempermudah identifikasi kasir pada nota.' },
          { label: 'Ganti Kata Sandi', desc: 'Form pembaharuan password dengan validasi ketat minimal 8 karakter.' }
        ]
      }
    ]
  },
  {
    groupId: 'dashboard-overview',
    groupTitle: 'Dashboard',
    items: [
      {
        id: 'dashboard-kpi',
        endpoint: '/dashboard',
        shortTitle: 'Dashboard KPI',
        title: 'Dashboard Utama & KPI Penjualan',
        summary: 'Pusat pantau operasional: omzet harian, transaksi selesai, dan status pengerjaan pesanan.',
        description: 'Dashboard (/dashboard) adalah beranda utama saat Administrator atau Owner masuk ke sistem. Menampilkan ringkasan kartu metrik kinerja toko secara real-time: total omzet penjualan hari ini, jumlah transaksi berhasil, jumlah pesanan dalam antrean produksi, dan grafik tren penjualan.',
        image: '/screenshots/dashboard/dashboard-kpi-penjualan.png',
        rules: 'Data metrik diperbarui otomatis setiap kali ada transaksi kasir baru atau pesanan diselesaikan.',
        points: [
          { label: 'Kartu Metrik KPI', desc: 'Informasi ringkas total omzet harian, laba estimasi, dan volume transaksi.' },
          { label: 'Grafik Penjualan', desc: 'Visualisasi tren penerimaan kas harian, mingguan, hingga bulanan.' },
          { label: 'Pintasan Alur Cepat', desc: 'Tombol navigasi kilat untuk membuka Kasir POS, Papan SPK, atau Laporan Invoice.' }
        ]
      }
    ]
  },
  {
    groupId: 'kasir-pos',
    groupTitle: 'Kasir POS',
    items: [
      {
        id: 'kasir-katalog',
        endpoint: '/pos',
        shortTitle: 'Katalog Produk',
        title: 'Katalog Produk & Pencarian Kilat',
        summary: 'Navigasi master produk percetakan, filter kategori, dan kartu tarif dasar.',
        description: 'Layar kasir (/pos) dirancang untuk memproses transaksi dengan kecepatan tinggi. Menampilkan katalog kartu produk percetakan lengkap dengan foto, kode SKU, tarif dasar, dan status ketersediaan stok fisik. Kasir dapat memfilter berdasarkan kategori atau mengetik nama produk di bar pencarian.',
        image: '/screenshots/kasir/pos-katalog-produk.png',
        rules: 'Ketik minimal 2 karakter di bar pencarian untuk memfilter katalog secara instan tanpa perlu menekan tombol Enter.',
        points: [
          { label: 'Bar Pencarian & Filter Kategori', desc: 'Temukan produk spesifik dalam hitungan detik (Digital Print, Spanduk, Kartu Nama, dsb).' },
          { label: 'Kartu Tarif & Stok', desc: 'Menampilkan tarif jual dasar satuan atau tarif per meter persegi serta status stok.' },
          { label: 'Tombol Tambah (+)', desc: 'Klik sekali untuk produk fixed/satuan atau klik kartu produk untuk membuka kalkulator spanduk.' }
        ]
      },
      {
        id: 'kasir-custom-ukuran',
        endpoint: '/pos',
        shortTitle: 'Kalkulasi Spanduk',
        title: 'Kalkulasi Spanduk & Custom Ukuran',
        summary: 'Modal matematis perhitungan otomatis panjang × lebar (m²) dan opsi finishing.',
        description: 'Produk meteran (Spanduk Flexi, X-Banner, Stiker Meteran) memerlukan kustomisasi dimensi. Mengklik kartu produk akan membuka modal ukuran otomatis. Kasir cukup memasukkan panjang dan lebar dalam satuan meter, lalu memilih jenis finishing (mata ayam keliling/sudut, selongsong, atau potong pas). Sistem menghitung luas total (m²) dan mengalikan tarif secara instan.',
        image: '/screenshots/kasir/pos-custom-ukuran.png',
        rules: 'Sistem menerapkan aturan pembulatan luas minimum (1 m²) sesuai standar operasional percetakan digital.',
        points: [
          { label: 'Input Dimensi Panjang × Lebar', desc: 'Masukkan ukuran real dalam meter (contoh: 3 m × 1.5 m menghasilkan luas 4.5 m²).' },
          { label: 'Pilihan Finishing Bahan', desc: 'Pilih mata ayam sudut/keliling, lebihan bahan untuk lem, atau potongan tepi rapi.' },
          { label: 'Subtotal Otomatis', desc: 'Harga akhir terhitung otomatis di dalam modal sebelum item dimasukkan ke keranjang.' }
        ]
      },
      {
        id: 'kasir-keranjang-bayar',
        endpoint: '/pos',
        shortTitle: 'Keranjang & Bayar',
        title: 'Keranjang Kasir & Pembayaran (DP / Lunas)',
        summary: 'Panel transaksi kanan, penautan kontak pelanggan, shortcut F4, dan skema Uang Muka.',
        description: 'Panel sisi kanan merangkum item yang sedang diproses. Kasir dapat menghubungkan nota dengan data kontak pelanggan (Retail, Reseller, atau Korporat). Tekan tombol "Proses Pembayaran" atau tekan tombol F4 di keyboard. Pilih metode bayar: Tunai (dengan kalkulator kembalian pecahan cepat), QRIS, atau Transfer Bank. Untuk pesanan berdurasi pengerjaan panjang, kasir dapat memilih opsi Uang Muka (DP 50%).',
        image: '/screenshots/kasir/pos-keranjang-dan-pembayaran.png',
        rules: 'Tekan tombol shortcut F4 untuk langsung membuka dialog pembayaran dari posisi mana pun di halaman kasir.',
        points: [
          { label: 'Pilih / Tambah Pelanggan', desc: 'Tautkan nomor WhatsApp pelanggan agar update status SPK terkirim otomatis.' },
          { label: 'Skema Pembayaran Lunas vs DP', desc: 'Opsi DP membagi transaksi menjadi kas masuk dan catatan sisa piutang tertagih.' },
          { label: 'Pecahan Cepat Tunai', desc: 'Tombol nominal cepat (Rp 50.000, Rp 100.000, Uang Pas) untuk kembalian presisi.' }
        ]
      },
      {
        id: 'kasir-struk-thermal',
        endpoint: '/pos',
        shortTitle: 'Cetak Struk Thermal',
        title: 'Cetak Struk Thermal (58mm / 80mm)',
        summary: 'Dialog pratinjau struk, toggle ukuran kertas, Web Bluetooth ESC/POS, dan Universal Print.',
        description: 'Setelah pembayaran berhasil disimpan, dialog Cetak Struk Transaksi muncul secara otomatis. Kasir dapat memilih format kertas: 58 mm (Mini portabel 30 kolom) atau 80 mm (Standar desktop 48 kolom). Klik "Cetak via Bluetooth" untuk mengirim data ESC/POS nirkabel langsung ke printer kasir, atau gunakan tombol "Cetak Universal" untuk dialog browser.',
        image: '/screenshots/kasir/pos-cetak-struk-thermal.png',
        rules: 'Format kertas yang dipilih tersimpan otomatis di localStorage browser, sehingga tidak perlu disetel berulang kali.',
        points: [
          { label: 'Switcher Format Kertas', desc: 'Pilihan satu klik 58mm atau 80mm yang menyesuaikan margin pembatas hardware printer.' },
          { label: 'Cetak via Bluetooth ESC/POS', desc: 'Koneksi langsung Web Bluetooth API ke printer kasir tanpa ketergantungan driver OS.' },
          { label: 'QR Code WhatsApp Toko', desc: 'Struk dilengkapi QR Code interaktif agar pelanggan dapat langsung chat ke nomor toko.' }
        ]
      }
    ]
  },
  {
    groupId: 'spk-produksi',
    groupTitle: 'SPK Produksi',
    items: [
      {
        id: 'orders-antrean',
        endpoint: '/orders',
        shortTitle: 'Papan Antrean SPK',
        title: 'Papan Antrean Kerja (6 Tahapan SPK)',
        summary: 'Alur kerja sekuensial: Order Masuk → Menunggu Desain → Proses Desain → Proses Cetak → Siap Diambil → Selesai.',
        description: 'Halaman Pesanan (/orders) bertindak sebagai papan kendali pengerjaan bengkel cetak. Setiap transaksi kasir diterjemahkan menjadi Surat Perintah Kerja (SPK) dengan alur transisi berurutan yang ketat. Operator mesin dan desainer memantau pesanan aktif, tanggal deadline, dan status pembayaran pesanan.',
        image: '/screenshots/operator/orders-daftar-antrean.png',
        rules: 'Sistem menerapkan aturan anti-loncat: status pengerjaan tidak dapat dinaikkan sebelum tahapan sebelumnya divalidasi.',
        points: [
          { label: 'Kartu Metrik Antrean', desc: 'Menampilkan volume pesanan aktif dalam pengerjaan dan nota yang siap diserahkan.' },
          { label: 'Filter & Pencarian SPK', desc: 'Pilah pesanan berdasarkan nomor invoice, status pengerjaan, atau nama pemesan.' },
          { label: 'Aksi Cepat SPK', desc: 'Tombol cetak ulang struk pengerjaan untuk ditempelkan pada fisik bahan cetak.' }
        ]
      },
      {
        id: 'orders-drawer-spk',
        endpoint: '/orders',
        shortTitle: 'Drawer SPK & Link',
        title: 'Drawer Detail SPK & Kunci Link Desain',
        summary: 'Verifikasi spesifikasi cetak, penyimpanan tautan Canva/GDrive, dan proteksi cetak mesin.',
        description: 'Mengklik baris pesanan akan membuka drawer samping kanan berisi lembar SPK detail. Sebelum pesanan dapat dinaikkan ke tahap "Proses Cetak", desainer diwajibkan menempelkan URL file desain (Google Drive, Canva, atau Figma) lalu menekan tombol "Simpan". Jika link belum disimpan, tombol tahapan cetak terkunci otomatis untuk menghindari salah cetak.',
        image: '/screenshots/operator/orders-drawer-spk-detail.png',
        rules: 'Validasi link desain adalah pengaman wajib sebelum tombol Proses Cetak dan Siap Diambil diaktifkan.',
        points: [
          { label: 'Rincian Spesifikasi Cetak', desc: 'Menampilkan dimensi meteran, bahan, pilihan finishing, dan catatan kasir.' },
          { label: 'Input Link File Desain', desc: 'Kolom penyimpanan link aset digital siap cetak yang dapat dibuka operator mesin.' },
          { label: 'Notifikasi WhatsApp Siap Diambil', desc: 'Tombol draf WhatsApp otomatis aktif saat pesanan masuk tahap Siap Diambil.' }
        ]
      }
    ]
  },
  {
    groupId: 'laporan-keuangan',
    groupTitle: 'Laporan & Invoice',
    items: [
      {
        id: 'reports-transaksi',
        endpoint: '/reports',
        shortTitle: 'Riwayat & Pelunasan',
        title: 'Riwayat Transaksi & Pelunasan Piutang',
        summary: 'Daftar invoice transaksi kasir, buku piutang DP berjalan, dan rekapitulasi arus kas harian.',
        description: 'Halaman Invoice (/reports) menyajikan rekapitulasi lengkap seluruh transaksi yang pernah dilakukan kasir. Menampilkan pemisahan transparan antara total omzet kotor, kas riil yang telah diterima toko, dan sisa piutang Down Payment (DP) yang belum dilunasi pelanggan. Klik invoice untuk memeriksa rincian pembayaran atau membuka form pelunasan.',
        image: '/screenshots/owner/laporan-invoice-keuangan.png',
        rules: 'Pelunasan sisa tagihan DP dapat diproses langsung di halaman ini atau melalui drawer SPK saat pesanan diambil.',
        points: [
          { label: 'Ringkasan Omzet & Arus Kas', desc: 'Rekapitulasi total nilai penjualan kotor vs kas fisik riil yang disetorkan kasir.' },
          { label: 'Status Pelunasan Nota', desc: 'Badge penanda nota lunas penuh atau nota yang masih memiliki sisa piutang DP.' },
          { label: 'Detail Drawer Transaksi', desc: 'Rincian item pesanan, kasir yang bertugas, metode bayar, dan cetak ulang struk.' }
        ]
      }
    ]
  },
  {
    groupId: 'stok-crm',
    groupTitle: 'Stok & Pelanggan',
    items: [
      {
        id: 'products-stok',
        endpoint: '/products',
        shortTitle: 'Manajemen Stok',
        title: 'Manajemen Stok Bahan & Mutasi Opname',
        summary: 'Pemantauan bahan baku percetakan, kartu indikator stok aman/menipis, dan penyesuaian mutasi fisik.',
        description: 'Halaman Stok (/products) mengelola persediaan fisik bahan baku (kertas Art Carton, banner Flexi, roll stiker kromo, dsb). Menyajikan kartu status: Stok Aman, Stok Menipis, dan Stok Habis. Administrator dapat melakukan audit opname stok atau mencatat bahan masuk/keluar melalui tombol "+/- Stok".',
        image: '/screenshots/owner/stok-manajemen-produk.png',
        rules: 'Tetapkan batas peringatan stok minimum pada setiap produk agar sistem memberi peringatan sebelum bahan habis.',
        points: [
          { label: 'Kartu Indikator Stok', desc: 'Visualisasi jumlah produk yang berada pada batas aman, menipis, atau kritis habis.' },
          { label: 'Penyesuaian Cepat (+/- Stok)', desc: 'Catat mutasi masuk barang dari supplier atau koreksi fisik barang rusak.' },
          { label: 'Log Riwayat Mutasi', desc: 'Setiap pengurangan stok akibat penjualan tercatat otomatis per transaksi kasir.' }
        ]
      },
      {
        id: 'customers-crm',
        endpoint: '/customers',
        shortTitle: 'CRM Pelanggan',
        title: 'Direktori CRM & Riwayat Transaksi Pelanggan',
        summary: 'Database pelanggan, Customer Lifetime Value (LTV), pelacakan sisa piutang, dan kontak WhatsApp.',
        description: 'Halaman Pelanggan (/customers) merekam riwayat seluruh mitra bisnis dan pelanggan retail. Menampilkan akumulasi total belanja sepanjang masa (Lifetime Value), sisa piutang belum tertagih, dan riwayat seluruh nota yang diterbitkan. Dilengkapi tombol pintas chat WhatsApp untuk mempermudah komunikasi atau penagihan nota DP.',
        image: '/screenshots/owner/crm-pelanggan-riwayat.png',
        rules: 'Klik nama pelanggan untuk membuka drawer riwayat seluruh transaksi pembelian sejak transaksi pertama.',
        points: [
          { label: 'Customer Lifetime Value (LTV)', desc: 'Analisis pelanggan paling loyal dan bernilai tinggi bagi bisnis percetakan.' },
          { label: 'Pelacakan Sisa Piutang', desc: 'Memantau pelanggan yang masih memiliki tagihan uang muka belum lunas.' },
          { label: 'Pintas Chat WhatsApp', desc: 'Membuka WhatsApp Web / Desktop langsung ke nomor pelanggan dalam satu klik.' }
        ]
      }
    ]
  },
  {
    groupId: 'admin-konfigurasi',
    groupTitle: 'Pengaturan & Admin',
    items: [
      {
        id: 'employees-manajemen',
        endpoint: '/employees',
        shortTitle: 'Manajemen Staf',
        title: 'Manajemen Karyawan & Hak Akses Staf',
        summary: 'Pengelolaan akun kasir, operator produksi, desainer, dan pemisahan hak izin operasional.',
        description: 'Halaman Karyawan (/employees) hanya dapat diakses oleh Administrator dan Owner. Digunakan untuk mendaftarkan staf baru, mengubah nama dan nomor telepon kerja, menyetel ulang kata sandi staf yang bermasalah, serta menentukan peran penugasan (Karyawan Kasir vs Administrator Toko).',
        image: '/screenshots/employees/employees-manajemen-staf.png',
        rules: 'Hanya peran Owner dan Administrator yang memiliki wewenang untuk menambah atau menonaktifkan akun staf.',
        points: [
          { label: 'Tambah Karyawan Baru', desc: 'Daftarkan nama, username, email, nomor HP, peran, dan password awal akun.' },
          { label: 'Atur Peran Akun', desc: 'Batasi akses staf kasir agar hanya dapat membuka menu kasir dan antrean SPK.' },
          { label: 'Reset Sandi Staf', desc: 'Bantu staf yang lupa kata sandi dengan menyetel password baru secara langsung.' }
        ]
      },
      {
        id: 'admin-audit-center',
        endpoint: '/admin/audit-center',
        shortTitle: 'Pusat Audit & Void',
        title: 'Pusat Audit Aktivitas & Kebijakan Void Nota',
        summary: 'Log audit aktivitas staf kasir, riwayat pembatalan transaksi, dan pengembalian stok otomatis.',
        description: 'Menu Audit Center (/admin/audit-center) adalah instrumen pengawasan eksekutif untuk mencegah kecurangan kasir. Merekam setiap aksi pembatalan nota (Void), alasan pembatalan wajib, staf yang memproses, serta pengembalian kuantitas stok bahan secara otomatis ke sistem inventaris.',
        image: '/screenshots/admin/audit-center-aktivitas-void.png',
        rules: 'Setiap aksi pembatalan nota kasir wajib menyertakan alasan tertulis dan tercatat permanen di audit log.',
        points: [
          { label: 'Log Aktivitas Kasir & Staf', desc: 'Merekam timestamp, IP address, nama staf, dan tindakan yang dilakukan di sistem.' },
          { label: 'Riwayat Pembatalan (Void)', desc: 'Daftar transaksi kasir yang dibatalkan beserta alasan tertulis yang valid.' },
          { label: 'Integritas Stok & Keuangan', desc: 'Sistem memastikan stok barang yang dibatalkan kembali otomatis ke inventaris.' }
        ]
      },
      {
        id: 'settings-toko',
        endpoint: '/settings',
        shortTitle: 'Pengaturan Toko',
        title: 'Pengaturan Identitas Toko & Format Struk',
        summary: 'Konfigurasi profil percetakan, nomor WhatsApp resmi, alamat cabang, dan footer struk belanja.',
        description: 'Halaman Pengaturan (/settings) mengatur identitas toko yang dicetak pada struk thermal dan kop SPK resmi. Meliputi nama percetakan ("Rahman Printing"), alamat fisik lengkap, nomor WhatsApp toko untuk QR code struk, serta catatan garansi komplain (misal: "Komplain maksimal 1×24 jam dengan membawa nota ini").',
        image: '/screenshots/settings/settings-pengaturan-toko.png',
        rules: 'Perubahan pada halaman pengaturan toko langsung memengaruhi format kop struk thermal secara real-time.',
        points: [
          { label: 'Nama & Alamat Toko', desc: 'Identitas bisnis yang tercetak pada baris atas struk thermal dan dokumen SPK.' },
          { label: 'Nomor WhatsApp Layanan', desc: 'Nomor tujuan yang ditanamkan pada QR Code struk thermal pelanggan.' },
          { label: 'Teks Kebijakan & Garansi', desc: 'Pesan penutup struk belanja terkait ketentuan pengambilan barang dan komplain.' }
        ]
      }
    ]
  }
];

export const guideShortcuts = [
  { key: 'F4', action: 'Buka Dialog Pembayaran (Checkout Kasir)', detail: 'Fokus seketika ke modal pembayaran tanpa perlu mengklik tombol mouse.' },
  { key: 'Enter', action: 'Konfirmasi Tombol Utama', detail: 'Mengeksekusi tombol simpan, masuk, atau cetak pada modal dialog aktif.' },
  { key: 'Esc', action: 'Tutup Modal / Bersihkan Input', detail: 'Menutup drawer samping, modal kustomisasi ukuran, atau membersihkan pencarian.' }
];

export const guideFaqs = [
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
  },
  {
    q: 'Bagaimana cara memulihkan akun Owner jika lupa kata sandi?',
    a: 'Buka terminal server lokal di folder project POS dan jalankan perintah: php artisan pos:reset-owner --email="owner@pos.com" --password="PasswordBaru123". Perintah ini langsung memperbarui kata sandi di database tanpa bergantung pada verifikasi email.'
  }
];
