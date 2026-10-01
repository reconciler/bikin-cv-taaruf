# Audit handoff — 2026-09-30

Dari: sesi PIC `bikin-cv-taaruf`
Untuk: sesi "Auditor Project"

Atas permintaan Amal, halaman depan ditulis ulang dan teks aplikasi
disederhanakan ke bahasa sehari-hari. Label versi tetap v7. Hosting tidak
berubah. Tidak ada data baru yang disimpan atau dikirim.

## 1. Menyentuh janji privasi (wajib lapor)

- **Klaim privasi di halaman depan ditulis ulang, maknanya sama.**
  - Sebelum: "Isian diproses di perangkat ini dan tidak dikirim ke server
    mana pun."
  - Sesudah: "Tidak dikirim ke server mana pun. Isian Anda hanya tersimpan di
    HP atau laptop ini."
- **Dua pernyataan persetujuan (A.01 dan A.02) disederhanakan.**
  - A.01 sebelum: "Saya mengisi data ini secara sukarela dan dengan
    kesadaran penuh, untuk keperluan ta'aruf."
  - A.01 sesudah: "Saya mengisi data ini dengan sukarela dan sadar, untuk
    keperluan taaruf."
  - A.02 sebelum: "Saya memahami dokumen ini dapat memuat data pribadi yang
    bersifat spesifik (mis. kesehatan, status pernikahan sebelumnya) dan
    menyetujui data ini dibagikan kepada pihak yang saya tuju sendiri."
  - A.02 sesudah: "Saya paham CV ini bisa memuat data pribadi yang sensitif
    (misalnya kesehatan, status pernikahan sebelumnya). Saya setuju
    membagikannya ke orang yang saya tuju."
  - **Perlu dicek Amal:** frasa "data pribadi yang bersifat spesifik" adalah
    istilah UU 27/2022 tentang Pelindungan Data Pribadi. Frasa itu diganti
    "data pribadi yang sensitif" supaya mudah dipahami. Jika frasa hukum asli
    sengaja dipilih, PIC akan mengembalikannya. Ini bukan nasihat hukum.
- **Celah "pintu masuk" ditutup.** Sebelumnya "Lanjutkan draf" dan file
  cadangan bisa langsung membuka formulir walau dua persetujuan dan jenis
  kelamin belum terisi (mis. pengguna hanya memilih jenis kelamin lalu menutup
  tab). Sekarang isian seperti itu dikembalikan ke halaman depan.

## 2. Perubahan lain (informasi)

- **Halaman depan:** judul menyebut hasil (satu file PDF siap kirim), tiga
  poin utama, sisanya di "Selengkapnya". Tombol "Mulai isi CV" selalu aktif
  dan ada petunjuk apa yang masih kurang. Pengunjung yang kembali hanya
  melihat satu tombol utama.
- **Bahasa sehari-hari** di seluruh menu, dialog, pesan, dan panel. Beberapa
  label isian ikut disederhanakan (mis. "napza" jadi "narkoba", "Kontak untuk
  tindak lanjut" jadi "Kontak yang bisa dihubungi"). Isi PDF sengaja tetap
  formal.
- **Konfirmasi sebelum menimpa isian tersimpan.** Membuka file cadangan dari
  halaman depan kini bertanya dulu jika sudah ada isian tersimpan. Sebelumnya
  pertanyaan itu hanya muncul saat sedang berada di formulir.
- **Ejaan diseragamkan menjadi "taaruf"**, termasuk di judul dan metadata PDF.
- **`CLAUDE.md`** ditambah bagian "Gaya bahasa" dan "Halaman depan (catatan
  desain)". Berkas ini boleh diubah Auditor.

## 3. Verifikasi PIC

- 63 pengecekan otomatis di Chromium (ponsel 390x844 dan desktop 1280x800):
  pengunjung baru, pengunjung kembali, sedang mengisi, file cadangan, mulai
  dari awal, menu, dan PDF. Semua lulus, tanpa galat konsol.
- axe-core: 0 pelanggaran aksesibilitas (terang, gelap, pengunjung kembali).
- Situs publik belum dicek langsung oleh PIC karena jaringan sesi memblokir
  `reconciler.github.io`. Status build GitHub Pages dicek lewat API.

## 4. Temuan lintas-project: tiga situs berbagi satu origin

Ditemukan saat membahas rencana interlink `bikin-cv-taaruf` ke `jadwalkajian`
dan `catatankajian`. Rencana interlink itu sendiri belum diputuskan Amal.

- **Fakta.** Ketiga situs dilayani dari `https://reconciler.github.io`. Origin
  browser dibentuk oleh skema, host, dan port; path tidak ikut. Akibatnya
  `localStorage` dipakai bersama oleh ketiga situs. Sumber:
  [MDN: Same-origin policy](https://developer.mozilla.org/en-US/docs/Web/Security/Defenses/Same-origin_policy)
  dan [catatan komunitas tentang GitHub Pages dan localStorage](https://tomashubelbauer.github.io/github-pages-local-storage/).
- **Dampak untuk `bikin-cv-taaruf`.** Draf CV (kunci `ctgv1_draft_v1`) memuat
  data sensitif, misalnya kesehatan dan status pernikahan sebelumnya. Skrip
  apa pun yang berjalan di dua situs lain secara teknis bisa membacanya.
  Ini bukan akibat interlink, tetapi interlink dan proyek baru jangan sampai
  memperluas paparan ini.
- **Yang perlu diperiksa Auditor atau PIC masing-masing** (PIC ini tidak bisa
  membaca repo lain):
  - Apakah `jadwalkajian` dan `catatankajian` memuat skrip pihak ketiga
    (analitik, pustaka dari CDN) atau membaca kunci `localStorage` milik
    proyek lain.
  - Semua proyek memakai awalan kunci yang unik. `bikin-cv-taaruf` memakai
    `ctgv1_`.
- **Pedoman untuk interlink.** Hanya tautan biasa. Jangan berbagi skrip,
  penyimpanan, iframe, atau `fetch` antarproyek.
- **Opsi jangka panjang** jika isolasi penuh diperlukan: origin terpisah per
  proyek (domain atau subdomain sendiri). Ada biaya dan pekerjaan tambahan.

Status: temuan dan usulan. Belum ada perubahan kode.

## 5. Menu "Tentang" dan tautan antarproyek (pola untuk dua PIC lain)

Sudah dipasang di `bikin-cv-taaruf` atas permintaan Amal (30 Sep 2026). Amal
ingin polanya diduplikat ke `jadwalkajian` dan `catatankajian`. Mohon Auditor
mengoordinasikannya sesuai aturan akses (PIC hanya mengubah berkas intinya
sendiri; `CLAUDE.md` boleh diubah Auditor).

**Yang dipasang di repo ini**
- Pil header "Data & cadangan" diganti satu akordeon "Menu" dengan tiga grup:
  Data & cadangan, Tentang (Dibuat oleh `@amalwoodworking` dengan tautan
  Instagram, kode sumber di GitHub), dan Proyek lain (Jadwal Kajian, Catatan
  Kajian). Tanpa deskripsi singkat, atas permintaan Amal.
- Tautan ke luar dibuka di tab baru dengan `rel="noopener noreferrer"`.
  Proyek saudara dibuka di tab yang sama. Menu menutup dengan klik di luar
  dan tombol Esc.
- Bukan perubahan janji privasi: tidak ada data yang dikirim atau disimpan.
  Klaim seperti "tanpa iklan dan tanpa analitik" sengaja tidak dicantumkan.

**Hasil ukur (font asli, lebar 320 sampai 1280 px, halaman depan dan formulir)**
- Satu akordeon: tinggi header tetap 44 px, tidak pecah baris, tidak ada
  geser horizontal.
- Dua pil terpisah: header pecah dua baris (44 menjadi 86 px) di 320 dan
  360 px pada halaman depan, dan di formulir sampai 430 px.

**Pola yang diusulkan untuk dua proyek lain**
1. Satu akordeon di header, tertutup, menutup dengan klik di luar dan Esc.
2. Isi berurutan: bagian khusus proyek, Tentang, Proyek lain.
3. Hanya tautan biasa. Jangan berbagi skrip, penyimpanan, `fetch`, iframe,
   atau parameter pelacak (lihat bagian 4: ketiga situs satu origin).
4. Klaim di panel harus benar untuk proyek itu. Jangan menyalin klaim proyek
   lain tanpa memeriksa.
5. Tinggi header tidak boleh bertambah. Uji di lebar 320 sampai 430 px.
6. Gaya visual mengikuti proyek masing-masing. Tautan langsung yang sudah ada
   (pil di Catatan Kajian, spanduk di Jadwal Kajian) boleh tetap, tetapi
   sebaiknya distandarkan ke satu bentuk.

**Daftar resmi** (juga dicatat di `CLAUDE.md` repo ini; mohon disalin ke repo
lain dan dijaga Auditor)
- Pembuat: `@amalwoodworking`, https://www.instagram.com/amalwoodworking/
- Jadwal Kajian: https://reconciler.github.io/jadwalkajian/
- Catatan Kajian: https://reconciler.github.io/catatankajian/
- Bikin CV Taaruf: https://reconciler.github.io/bikin-cv-taaruf/

## 6. Temuan aksesibilitas formulir (sudah diperbaiki)

- **Koreksi cakupan.** Klaim "0 pelanggaran aksesibilitas" di bagian 3 hanya
  mencakup halaman depan (terang, gelap, pengunjung kembali). Formulir belum
  diperiksa saat itu.
- **Temuan** (axe-core, 13 bagian formulir; sudah ada sebelum perubahan hari
  ini):
  - 61 kolom isian tanpa nama yang terbaca pembaca layar (kategori critical).
  - 1 pilihan (Jenjang di riwayat pendidikan) tanpa nama (critical).
  - Halaman formulir tanpa `h1` (moderate).
- **Perbaikan.** Hanya menambah atribut, tanpa mengubah tampilan atau logika:
  `aria-labelledby` dan `aria-required` pada kolom isian, `aria-label` pada
  daftar dan tabel, dan `h1` yang disembunyikan secara visual.
- **Hasil.** 0 pelanggaran di 39 pemindaian (13 bagian × kosong, terisi, dan
  ringkasan). 94 pengecekan otomatis lulus.
- Tidak menyentuh janji privasi. Dua PIC lain sebaiknya menjalankan
  pemeriksaan serupa di situs masing-masing.

## 7. Perubahan hosting: pindah ke GitHub Actions (wajib lapor)

Menjalankan instruksi Auditor (`AUDIT-HANDOFF-2026-09-30-auditor.md` bagian 6)
atas keputusan Amal. Amal mengonfirmasi langsung di chat PIC ("lanjut") dan
mengganti Settings → Pages → Source sendiri.

- **Workflow:** `.github/workflows/deploy.yml` (commit `ba554dc`). Hanya action
  resmi `actions/*` (`checkout@v4`, `configure-pages@v5`,
  `upload-pages-artifact@v3`, `deploy-pages@v4`). Salinan berkas lewat daftar
  eksplisit: `index.html` dan `lib/jspdf-2.5.1.umd.min.js`.
- **Uji lokal sebelum push:** `_site/` berisi tepat dua berkas; tanpa 404 dan
  tanpa galat konsol; formulir termuat; PDF 10 halaman terbentuk lewat tombol
  sungguhan.
- **Run manual pertama:** #1 berstatus `success` (semua langkah hijau, termasuk
  Deploy), diverifikasi lewat API.
- **Pemicu push ke `main`** ditambahkan sesudah run manual sukses, sesuai usul
  Auditor.
- **Belum terverifikasi oleh PIC:** situs live (akses ke `reconciler.github.io`
  diblokir). Amal diminta memeriksa beranda, pembuatan PDF, dan bahwa
  `.../bikin-cv-taaruf/CLAUDE.md` memberi 404.
- **Dokumentasi:** bagian "Hosting" di `CLAUDE.md` diperbarui. Workflow
  `deploy.yml` mohon ditambahkan ke daftar berkas inti di aturan akses.
- Tidak ada perubahan janji privasi: origin dan URL sama, tidak ada data yang
  dikirim atau disimpan baru.

## 8. Batch Amal 1 Okt 2026: tombol "Tentang" (menjalankan bagian 7 handoff Auditor)

Amal mengonfirmasi "lanjut" langsung di chat PIC. Satu push, satu deploy.

- **Tombol header "Tentang"** menggantikan "Menu". Panel hanya berisi
  "Dibuat oleh @amalwoodworking" dan Proyek lain (Jadwal Kajian, Catatan
  Kajian). Tautan kode sumber/GitHub dihapus (`ABOUT.source` dan render-nya).
- **Penempatan baru "Data & cadangan"** (keputusan PIC, sesuai bagian 7):
  - Halaman depan: blok tertutup di bawah "Selengkapnya", muncul bila ada
    isian tersimpan atau penyimpanan bermasalah. Tautan "Sudah punya file
    cadangan? Buka di sini" dan tombol "Cadangkan" di formulir tetap.
  - Formulir: blok yang sama di bawah daftar bagian (ponsel: muncul saat
    daftar bagian dibuka; desktop: selalu terlihat). Isinya status
    penyimpanan, status cadangan, unduh cadangan, buka file cadangan, ubah
    jenis kelamin, dan mulai dari awal.
  - Alasan: tidak menambah kontrol di header, jadi tinggi 44 px aman, dan
    fungsi tetap dekat dengan konteksnya.
- **Tidak ada fungsi yang hilang.** Uji otomatis membuktikan tiap fungsi di
  tempat barunya (unduhan menghasilkan `cadangan-bikin-cv-taaruf.json`, buka
  file memuat isi dengan konfirmasi menimpa, ubah jenis kelamin kembali ke
  halaman depan, mulai dari awal membuka konfirmasi).
- **Ukuran header** (font asli, lebar 320 sampai 1280 px, halaman depan dan
  formulir): tetap 44 px, tidak pecah baris, tidak ada geser horizontal.
  Label "Tentang" lebih panjang daripada "Menu", tetapi tetap muat.
- **Hasil uji:** 108 pengecekan Chromium lulus; axe 0 pelanggaran di 39
  pemindaian formulir dan di halaman depan; `_site/` hanya dua berkas, PDF 10
  halaman terbentuk.
- Tidak menyentuh janji privasi dan tidak menghapus data.

## 9. Uji otomatis pasca-deploy (bagian 8 handoff Auditor; pipeline terbit)

Amal mengonfirmasi "lanjut" di chat PIC karena ini perubahan pipeline.

- Satu langkah baru di akhir `deploy.yml`, hanya `curl` dan shell runner:
  beranda 200 dengan teks penanda (`<title>Bikin CV Taaruf</title>`), setiap
  berkas di `_site/` 200 (daftar diambil dari isi `_site/`), dan `CLAUDE.md`,
  `README.md`, serta semua `AUDIT-HANDOFF-*.md` 404. Mengulang 12 kali dengan
  jeda 10 detik, memakai `?v=<sha>` agar tidak terkena cache.
- **Diuji lokal** dengan server tiruan: kasus normal lolos; berkas internal
  ikut tayang gagal (`CLAUDE.md=200 harus-404`); berkas situs hilang gagal
  (`lib/...=404 harus-200`); situs tidak terjangkau gagal.
- Tambahan kecil di atas permintaan: semua `AUDIT-HANDOFF-*.md` diperiksa (404),
  bukan hanya berkas bertanggal 2026-09-30, supaya handoff berikutnya ikut
  terjaga otomatis.
- Hasil run deploy dan langkah ini dicatat setelah push (lihat pesan chat).
