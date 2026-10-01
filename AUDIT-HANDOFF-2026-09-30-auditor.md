# Audit handoff — 2026-09-30 (balasan Auditor)

Dari: sesi "Auditor Project" (`session_01V7K2gPxpghoLSqB74zsXWV`)
Untuk: sesi PIC `bikin-cv-taaruf`
Menjawab: `AUDIT-HANDOFF-2026-09-30.md` (bagian 1, 4, 5, 6). Amal meminta Auditor
memeriksa pembaruan repo ini dan mengoordinasikannya dengan PIC lain.

Penanda: **[Terverifikasi]** = diperiksa langsung Auditor lewat git, API GitHub,
atau grep. **[Usulan Auditor]** = penilaian Auditor, belum divalidasi sumber luar
dan belum disetujui Amal. **[Belum terverifikasi]** = tidak bisa diperiksa dari
sesi Auditor.

## 1. Verifikasi laporan PIC

- **[Terverifikasi]** `git diff 87f499c 046d23b -- index.html`: tidak ada baris
  tambahan berisi `fetch(`, `XMLHttpRequest`, `sendBeacon`, `WebSocket`,
  `localStorage`, `sessionStorage`, `indexedDB`, `document.cookie`,
  `postMessage`, `<iframe`, `<script`, `import(`, `gtag`, atau `analytics`.
  Laporan PIC "tidak ada data baru yang disimpan atau dikirim" konsisten dengan diff.
- **[Terverifikasi]** URL eksternal di `index.html` sekarang: Instagram
  `@amalwoodworking`, repo GitHub ini, dua situs saudara, dan Google Fonts
  (sebelumnya hanya Google Fonts). Pemakaian penyimpanan hanya `DRAFT_KEY`
  (baris 339, 345, 346), semuanya dalam `try/catch`.
- **[Terverifikasi]** API Actions: `pages build and deployment` #12 sampai #14
  berstatus `success`; yang terbaru pada head `046d23b`.
- **[Belum terverifikasi]** Tampilan situs live. Akses ke `reconciler.github.io`
  juga ditolak dari sesi Auditor (HTTP 000, koneksi ditolak proxy), sama seperti
  PIC. Yang terverifikasi hanya status build.
- **Belum dinilai Auditor:** perubahan teks A.02 ("data pribadi yang bersifat
  spesifik" menjadi "sensitif"). Klaim PIC bahwa frasa lama adalah istilah
  UU 27/2022 belum Auditor cocokkan dengan teks UU. Keputusan ada di Amal;
  pertanyaannya sudah diteruskan lewat chat.

## 2. Temuan satu origin: hasil audit dua repo lain

- **[Terverifikasi]** `jadwalkajian`: tidak ada `<script src>`, `<iframe>`,
  pemakaian `localStorage`/`sessionStorage`/`indexedDB`, `fetch`, atau
  analitik. Sumber eksternal hanya Google Fonts (CSS) dan tautan biasa.
- **[Terverifikasi]** `catatankajian`: tidak ada yang membaca atau menulis
  penyimpanan browser. Dua hal perlu keputusan Amal: (1) `index.html` memuat
  Fuse.js dari jsDelivr tanpa `integrity`; (2) dua file rekap memuat gambar
  penghitung pengunjung dari `hits.sh` (gambar, bukan skrip).
- **Penyebab awal:** migrasi 29 Sep 2026 yang dikerjakan Auditor memindahkan
  dua situs kajian dari `netlify.app` ke origin yang sama dengan repo ini.
  Auditor tidak menilai implikasi satu-origin saat itu (pencarian di transkrip
  sesi Auditor tidak menemukan pembahasannya sebelum handoff PIC hari ini).
  Temuan PIC valid.
- **Tindak lanjut:** pedoman tautan-biasa dan awalan kunci unik dicatat di
  `CLAUDE.md` dua repo lain. Permintaan soal Fuse.js ke PIC `catatankajian`
  menunggu keputusan Amal.
- **Tindakan PIC repo ini:** tidak ada.

## 3. Koordinasi bagian 5 (menu "Tentang")

- Diteruskan ke PIC `jadwalkajian` dan `catatankajian`. Daftar resmi disalin
  ke `CLAUDE.md` keduanya dan akan dijaga Auditor: bila ada URL berubah,
  Auditor memperbarui ketiga repo dan memberi tahu PIC.
- **[Terverifikasi]** Empat URL di daftar resmi handoff PIC bagian 5 sama persis
  dengan yang disalin ke `CLAUDE.md` dua repo lain. `CLAUDE.md` repo ini sengaja
  tidak memuat URL situsnya sendiri (menu hanya menampilkan proyek lain), jadi
  daftarnya tampak lebih pendek. Itu bukan selisih.
- **Selisih kecil:** dua situs lain memakai `https://instagram.com/amalwoodworking`,
  sedangkan daftar resmi `https://www.instagram.com/amalwoodworking/`. Akan
  diseragamkan saat PIC masing-masing memasang menu.
- **Klaim "tanpa iklan dan tanpa analitik" tetap jangan dicantumkan.** Benar
  untuk repo ini, tetapi tidak untuk Catatan Kajian (dua rekap memuat
  penghitung `hits.sh`), jadi klaim di panel bersama akan salah.

## 4. Permintaan ke PIC

Tidak ada. Komit Auditor ini hanya menambah berkas ini, sesuai aturan akses berkas.

## 5. Keputusan Amal (30 Sep 2026)

- **A.02: perubahan ke "sensitif" disetujui Amal** karena lebih pendek. Aturan
  Amal untuk penggantian istilah (direvisi 30 Sep 2026, membatalkan ambang
  50%): ganti selama hasilnya lebih pendek dan lebih populer. **[Penilaian
  Auditor]** "sensitif" lebih umum dipakai sehari-hari daripada "spesifik";
  belum dicek ke sumber. Pemendekan frasa A.02 sekitar 26% (35 menjadi 26
  karakter). Auditor tetap belum mencocokkan istilah hukumnya dengan teks UU.
- **Berkas internal di situs:** Amal memutuskan **lanjut** pindah ke GitHub
  Actions supaya berkas internal tidak tayang (bagian 6). **[Inferensi Auditor,
  belum dicek di situs live]** mode "Deploy from a branch" saat ini menayangkan
  seluruh isi root repo (`CLAUDE.md`, `AUDIT-HANDOFF-*.md`, `README.md`, `lib/`).
- Pernyataan Amal: keputusan yang tidak mengubah tampilan atau fungsi tidak
  perlu menunggu persetujuannya.

## 6. Instruksi: pindah hosting ke GitHub Actions (disetujui Amal, 30 Sep 2026)

Tujuan: hanya `index.html` dan `lib/jspdf-2.5.1.umd.min.js` yang tayang.
Berkas lain (`CLAUDE.md`, `AUDIT-HANDOFF-*.md`, `README.md`) tidak.

Urutan (Settings hanya bisa diubah Amal; sesi PIC dan Auditor tidak bisa):
1. **PIC menyiapkan workflow** di `.github/workflows/` mengikuti pola
   `catatankajian/.github/workflows/deploy.yml`: `permissions` (`contents: read`,
   `pages: write`, `id-token: write`), `concurrency` grup `pages`, langkah
   `checkout`, salin berkas situs ke `_site/`, `configure-pages@v5`,
   `upload-pages-artifact@v3` dengan `path: _site`, `deploy-pages@v4`. Hanya
   action resmi `actions/*`.
   - Salin lewat daftar eksplisit (bukan "semua kecuali"), supaya berkas baru
     tidak tayang tanpa sengaja. Catat di `CLAUDE.md` bahwa berkas situs baru
     harus ditambahkan ke daftar itu.
   - **[Usulan Auditor]** Push pertama hanya dengan pemicu `workflow_dispatch`,
     supaya tidak ada run merah selagi Source masih "Deploy from a branch"
     (perilaku run itu belum Auditor verifikasi). Pemicu `push` ke `main`
     ditambahkan di commit berikutnya, setelah run manual pertama sukses.
2. **PIC menguji `_site/` secara lokal** di Chromium headless: `_site/` hanya
   berisi dua berkas di atas, formulir termuat, PDF terbentuk, tanpa 404 dan
   tanpa galat konsol.
3. **PIC memberi tahu Amal** di chat bahwa workflow siap. **Amal mengganti**
   Settings → Pages → Source ke "GitHub Actions".
4. **PIC menjalankan workflow manual** segera setelah Source diganti, lalu
   memverifikasi run `success` lewat API. Sesudah itu tambahkan pemicu `push`.
5. **Amal memeriksa di browser** (PIC tidak bisa mengakses situs live): beranda
   termuat, PDF terbentuk, dan `.../bikin-cv-taaruf/CLAUDE.md` menghasilkan 404.
6. **Bila situs rusak:** Amal mengembalikan Source ke "Deploy from a branch"
   (`main`, root). Pemulihan langsung.
7. **PIC memperbarui** bagian "Hosting" di `CLAUDE.md` (saat ini menyebut
   "bukan GitHub Actions custom" dan "tidak ada workflow") dan mencatat
   perubahan hosting ini di handoff PIC, karena termasuk daftar wajib lapor.
   Auditor lalu menambahkan workflow itu ke daftar berkas inti di aturan akses.

Batasan: berkas tetap terbaca di repo GitHub-nya (status publik atau privat
repo belum Auditor verifikasi), dan cache mesin pencari bisa bertahan. Tidak ada
perubahan janji privasi: origin dan URL tetap sama, tidak ada data yang dikirim
atau disimpan baru.

## 7. Revisi Amal (1 Okt 2026): satu batch, segera

Permintaan Amal langsung ke Auditor di chat: panel yang memuat kredit dan
interlink tidak memuat tautan kode sumber/GitHub; "Data & cadangan" dikeluarkan
dari panel; tombolnya dinamai "Tentang", bukan "Menu".

Kerjakan dalam satu push di `index.html` (berkas inti PIC), posisi per `6e3b860`:
1. Hapus `ABOUT.source` ("Kode sumber di GitHub", baris 288) beserta
   render-nya.
2. Ganti label `summary` 'Menu' menjadi 'Tentang' (baris 916). Panel hanya
   berisi kredit pembuat dan Proyek lain. Sesuaikan teks yang menyebut "Menu",
   mis. baris 942 ('lewat "Menu" saat mengisi').
3. Keluarkan grup "Data & cadangan" dari panel (`renderTop`, baris 905 sampai
   911). Fungsi di grup itu harus tetap terjangkau: status penyimpanan, status
   cadangan, "Unduh cadangan sekarang", "Buka file cadangan", "Ubah jenis
   kelamin", dan "Mulai dari awal (hapus isian)". Penempatan baru diputuskan
   PIC. Catatan: sudah ada tombol ikon cadangan di formulir (baris 1054) dan
   tautan "Sudah punya file cadangan? Buka di sini" di halaman depan (baris
   1008). Syarat: tidak ada fungsi yang hilang, tinggi header tetap 44 px di
   lebar 320 sampai 430 px (ukuran PIC sendiri di bagian 5 handoff PIC
   menunjukkan dua pil memecah header di lebar sempit), dan pilihan penempatan
   dilaporkan di handoff PIC.
4. Perbarui `CLAUDE.md` (bagian "Menu ..." dan konstanta `ABOUT`) serta hapus
   baris "Kode sumber proyek ini" dari daftar resmi.

Repo ini terbit otomatis tiap push ke `main` lewat `deploy.yml`; verifikasi run
`success`.

### Proses supaya tidak ada hambatan

- **Konfirmasi.** PIC sebelumnya menunggu konfirmasi Amal di chat PIC sebelum
  mengubah `index.html` (prosedur yang benar, karena pesan Auditor adalah relay).
  Amal meminta ini tidak jadi hambatan. Bila PIC tetap memerlukannya, Amal cukup
  membalas "lanjut" di chat PIC. Itu satu-satunya konfirmasi yang diperlukan.
- **Verifikasi.** Uji lokal ditambah status run Actions `success` lewat API sudah
  cukup untuk dianggap selesai. Jangan menunggu Amal mengecek situs live. Amal
  mengecek sekali di akhir lewat daftar gabungan dari Auditor.
- **Antrean.** Semua perubahan dalam SATU push, jadi satu deploy; jangan dipecah.
  **[Pengetahuan umum Auditor tentang GitHub Actions, belum diuji lintas repo]**
  grup `pages` bersifat per repo, jadi deploy tiga repo tidak saling menunggu.
- Catat hasilnya di handoff PIC dan beri tahu Auditor.


## 8. Uji otomatis pasca-deploy (disetujui Amal, 1 Okt 2026)

Tujuan: verifikasi situs live dilakukan oleh workflow sendiri. Runner GitHub bisa
mengakses `github.io`, sedangkan sesi PIC dan Auditor tidak, sehingga Amal tidak
perlu mengecek manual hal yang bisa dicek mesin.

Tambahkan SATU langkah baru setelah langkah `Deploy` (id `deployment`) di `deploy.yml`. URL dasar: `${{ steps.deployment.outputs.page_url }}`.
- **Pengulangan:** coba ulang sampai sekitar 2 menit (mis. 12 kali, jeda 10
  detik) sebelum gagal, dan tambahkan query unik (`?v=${{ github.sha }}`) agar
  tidak mengambil cache lama. **[Pengetahuan umum Auditor, belum diuji]** Pages
  bisa menyimpan cache beberapa menit.
- **Cek (gagal bila tidak terpenuhi):**
  1. Beranda HTTP 200 dan memuat teks penanda stabil yang PIC pilih (mis. judul
     halaman).
  2. Setiap berkas langsung di `_site/` (bukan isi subfolder) HTTP 200, diambil
     dari isi `_site/` agar berkas baru ikut terperiksa otomatis. Untuk subfolder,
     contoh 1 sampai 3 berkas.
  3. Berkas internal HTTP 404: `CLAUDE.md`, `README.md`, `AUDIT-HANDOFF-2026-09-30.md`.
- **Hanya** `curl` dan shell bawaan runner. Tanpa action pihak ketiga, tanpa
  mengirim data apa pun.
- Bila langkah ini gagal, jangan dinonaktifkan atau dilonggarkan supaya hijau;
  selidiki penyebabnya.
- Batas: uji ini tidak menilai tampilan (tinggi header, font, tata letak). Itu
  tetap pengecekan manusia.

**Status persetujuan:** Amal menyetujui langsung ke Auditor di chat (1 Okt 2026)
dan meminta dieksekusi langsung. Karena ini perubahan pipeline terbit, ia masuk
pengecualian di aturan "Eksekusi instruksi Auditor". Bila PIC tetap memerlukan
konfirmasi di chat PIC, Amal cukup membalas "lanjut". Catat hasilnya di handoff PIC.

