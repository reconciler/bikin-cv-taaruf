# Bikin CV Taaruf — panduan kerja

Aplikasi web satu berkas untuk menyusun CV taaruf (form wizard dinamis,
kondisional berdasarkan jenis kelamin) dan mengekspornya ke PDF sepenuhnya
di sisi klien. Live: **https://reconciler.github.io/bikin-cv-taaruf/**.
Versi saat ini: **v7**.

## Struktur

- `index.html` — seluruh aplikasi (HTML+CSS+JS dalam satu berkas): definisi
  field form, logika render (`render()`, `h()` — hyperscript kecil buatan
  sendiri), validasi, autosave, ekspor PDF via jsPDF.
- `lib/jspdf-2.5.1.umd.min.js` — salinan jsPDF (dari paket npm `jspdf@2.5.1`,
  lisensi MIT) yang dimuat `index.html`. Jangan diedit; ganti file utuh jika
  memperbarui versi.
- `README.md` — cara pakai & catatan teknis untuk pengguna akhir.

## Hosting

GitHub Pages dengan sumber **GitHub Actions** (sejak 30 Sep 2026, atas
keputusan Amal). Workflow `.github/workflows/deploy.yml` berjalan di setiap
push ke `main` dan bisa dijalankan manual. Hanya action resmi `actions/*`.
Tidak ada build step; workflow hanya menyalin berkas situs ke `_site/`.
Tidak ada isu biaya/kredit (GitHub Pages gratis).

- **Yang tayang hanya:** `index.html` dan `lib/jspdf-2.5.1.umd.min.js`.
  `CLAUDE.md`, `AUDIT-HANDOFF-*.md`, dan `README.md` tidak tayang di situs
  (404). Berkas itu tetap terbaca di repo GitHub karena repo ini publik.
- **Berkas situs baru harus didaftarkan** di langkah "Salin berkas situs" pada
  `deploy.yml` (daftar eksplisit, bukan "semua kecuali"). Kalau lupa, berkas
  itu tidak tayang dan situs memberi 404.
- **Uji otomatis setelah deploy:** langkah terakhir `deploy.yml` memakai `curl`
  di runner: beranda 200 dengan penanda, setiap berkas di `_site/` 200, dan
  `CLAUDE.md`, `README.md`, `AUDIT-HANDOFF-*.md` 404 (mengulang sampai sekitar
  2 menit). Jangan dilonggarkan supaya hijau; kalau gagal, selidiki
  penyebabnya. Uji ini tidak menilai tampilan.
- **Verifikasi situs live:** sesi kerja tidak bisa mengakses `reconciler.github.io` (jaringan diblokir); verifikasi live
  dilakukan oleh uji otomatis di atas (hasilnya di log run Actions). Tampilan tetap perlu dicek Amal di perangkat nyata.
- **Jika situs rusak:** Amal mengembalikan Settings → Pages → Source ke
  "Deploy from a branch" (`main`, root). Situs pulih seketika.

## Data & privasi

Draf disimpan otomatis di `localStorage` peramban pengguna (key sesuai
`DRAFT_KEY` di `index.html`) — **tidak ada backend, isian tidak pernah
terkirim ke server mana pun**. Satu-satunya permintaan ke pihak ketiga adalah
Google Fonts (alamat IP pengunjung terlihat oleh Google). Pengguna bisa mengunduh cadangan draf manual sebagai
`cadangan-bikin-cv-taaruf.json`. Perlakukan ini sebagai batasan desain yang
sengaja — jangan tambahkan pengiriman data ke server tanpa diminta eksplisit
oleh Amal, karena itu mengubah janji privasi aplikasi ini.

## Dependensi

- jsPDF 2.5.1 — pembuatan PDF di sisi klien. Disimpan di repo
  (`lib/jspdf-2.5.1.umd.min.js`), bukan dari CDN, supaya kode yang berjalan
  selalu sama dengan yang ada di repo dan PDF tetap bisa dibuat meski CDN
  bermasalah.
- Google Fonts: Bricolage Grotesque, Public Sans — dimuat dari server Google.

Tidak ada `package.json` atau proses build.

## Gaya bahasa (teks yang dibaca pengguna)

Permintaan Amal (30 Sep 2026): bahasa harus mudah dipahami lulusan SMA dan
tidak terlalu baku — pakai istilah yang umum dipakai orang Indonesia.

- Istilah: "file" (bukan "berkas"), "browser" (bukan "peramban"), "HP atau
  laptop" (bukan "perangkat"), "isian" (bukan "draf"), "link" (bukan
  "tautan"), "fitur PDF" (bukan "pustaka PDF"), "narkoba" (bukan "napza"),
  "kalau" (bukan "bila"), "bisa" (bukan "dapat"). Jangan tampilkan istilah
  teknis seperti ".json" di layar; sebut "file cadangan". Nama file
  `cadangan-bikin-cv-taaruf.json` boleh disebut karena itulah yang terlihat
  di folder unduhan.
- Ejaan: **"taaruf"** (tanpa apostrof) di semua teks, sama dengan nama produk
  dan alamat situs, dan sesuai KBBI daring.
- Kalimat pendek (paling banyak sekitar 15-20 kata), satu gagasan per
  kalimat, sebut hal yang spesifik (nama tombol, angka, nama file). Hal
  terpenting ditaruh paling awal.
- Tetap pakai "Anda" (sopan dan konsisten di seluruh aplikasi).
- Isi PDF (dokumen untuk pihak lain) sengaja tetap formal. Ubah hanya bila
  diminta.
- Footer PDF memuat alamat situs (`SITE_DOMAIN` di `index.html`) sebagai
  kredit tanda tangan; permintaan Amal. Jangan dihapus tanpa diminta.
- Pernyataan persetujuan A.02 memakai frasa "data pribadi yang sensitif",
  bukan istilah UU 27/2022 "bersifat spesifik" (disetujui Amal di chat PIC;
  bukan nasihat hukum). Kembalikan hanya bila Amal meminta.

## Halaman depan (catatan desain)

Ditulis ulang 30 Sep 2026 setelah ulasan copywriting dan UX. Jangan dikembalikan
ke bentuk lama tanpa alasan kuat:

- Judul menyebut hasil (satu file PDF siap kirim), bukan nama produk. Tiga
  poin utama saja; sisanya di "Selengkapnya".
- Tombol utama **selalu aktif**. Kalau isian awal belum lengkap, petunjuk di
  sebelah tombol menyebut apa yang kurang, dan klik akan memunculkan pesan di
  dekat isian yang kurang. Tidak memakai tombol nonaktif karena kontrasnya
  buruk dan pengguna tidak tahu sebabnya.
- Pengunjung yang kembali hanya melihat satu tombol utama ("Lanjutkan
  isian"); kartu mulai disembunyikan.
- "Pintu masuk" = jenis kelamin dipilih dan dua pernyataan dicentang
  (`gateOK()`). Isian dari draf atau file cadangan yang belum lolos pintu ini
  dikembalikan ke halaman depan, tidak langsung masuk formulir.

## Tombol "Tentang" dan tautan antarproyek (catatan desain)

Ditambahkan 30 Sep 2026, direvisi 1 Okt 2026 atas permintaan Amal. Polanya
dimaksudkan bisa dipakai ulang di `jadwalkajian` dan `catatankajian`.

- **Satu tombol "Tentang" di header** (akordeon), bukan pil tambahan. Diukur
  dengan font asli di lebar 320 sampai 1280 px: dua pil membuat header pecah
  dua baris di ponsel, satu pil tidak. Tinggi header harus tetap 44 px.
- **Isi panel:** hanya kredit pembuat ("Dibuat oleh @amalwoodworking", tautan
  Instagram) dan Proyek lain (semua proyek saudara). **Tanpa deskripsi singkat
  dan tanpa tautan kode sumber/GitHub** (permintaan Amal).
- **"Data & cadangan" tidak di panel.** Blok tertutup di halaman depan (muncul
  bila ada isian tersimpan) dan di bawah daftar bagian formulir (ponsel:
  muncul saat daftar bagian dibuka; desktop: selalu terlihat). Tombol ikon
  "Cadangkan" di bilah bawah formulir tetap. Jangan menambah kontrol di header.
- **Aturan:** hanya tautan biasa. Tanpa skrip, penyimpanan, `fetch`, iframe,
  atau parameter pelacak yang dibagi antarproyek (ketiga situs satu origin;
  lihat `AUDIT-HANDOFF-2026-09-30.md` bagian 4). Tautan ke luar (Instagram)
  dibuka di tab baru dengan `rel="noopener noreferrer"` supaya asal kunjungan
  tidak terkirim. Proyek saudara dibuka di tab yang sama. Panel menutup dengan
  klik di luar dan tombol Esc.
- **Daftar resmi** ada di konstanta `ABOUT` di `index.html` dan harus sama
  dengan daftar ini:
  - Pembuat: `@amalwoodworking`, https://www.instagram.com/amalwoodworking/
  - Jadwal Kajian: https://reconciler.github.io/jadwalkajian/
  - Catatan Kajian: https://reconciler.github.io/catatankajian/
- Tautan langsung di header dua proyek lain (pil dan spanduk) boleh tetap,
  tetapi sebaiknya distandarkan ke satu bentuk.

## Uji sebelum push

Repo ini sengaja tanpa infrastruktur uji atau build. Sebelum push perubahan
`index.html`, uji di Chromium headless (mis. Playwright) dan pastikan:

- Halaman depan: pengunjung baru, pengunjung kembali, sedang mengisi, pesan
  kesalahan tombol "Mulai isi CV", file cadangan, dan mulai dari awal.
- Tombol "Tentang": isi dan tautan benar; klik di luar dan Esc menutup panel.
- "Data & cadangan": semua fungsinya terjangkau di halaman depan dan di
  formulir (ponsel dan desktop): status penyimpanan, status cadangan, unduh
  cadangan, buka file cadangan, ubah jenis kelamin, mulai dari awal.
- PDF terbentuk; header "CV TAARUF"; tautan footer benar.
- axe-core: 0 pelanggaran di halaman depan (terang dan gelap) dan di 13 bagian
  formulir (mode isian dan ringkasan). Cara yang berhasil di sesi kerja: di
  folder sementara jalankan `npm i axe-core playwright-core`; luncurkan
  Chromium dengan `executablePath: '/opt/pw-browsers/chromium'`; buka
  `file://.../index.html` (blokir semua permintaan non-`file://` lewat
  `context.route`); `page.addScriptTag({path:'node_modules/axe-core/axe.min.js'})`;
  lalu `await axe.run(document,{resultTypes:['violations']})`. Untuk 13 bagian
  formulir, isi state aplikasi lewat pengait uji yang disuntikkan skrip uji
  (tidak ada di `index.html`) lalu pindai tiap bagian.
- Tinggi header tetap 44 px di lebar 320 sampai 430 px (pakai font asli),
  tanpa geser horizontal.

## Aturan lintas-repo (teks identik di jadwalkajian, catatankajian, bikin-cv-taaruf)

Ditetapkan/dikonfirmasi Amal 3 Okt 2026 (butir 14-19: 5 Okt 2026). **Ubah serentak di ketiga repo (dijaga Auditor); jangan hanya satu.**

1. **Keputusan tanpa dampak tampilan atau fungsi** diambil sendiri oleh sesi kerja dan dicatat; jangan menunggu Amal.
   Perubahan tampilan, fungsi, privasi, hosting/pipeline terbit, atau penghapusan data tetap perlu konfirmasi Amal.
2. **Cakupan persetujuan:** persetujuan Amal hanya untuk butir yang disebut. Pengecualian pada butir 1 (pipeline, privasi,
   penghapusan data) dikonfirmasi Amal di **chat sesi kerja repo itu**; kutipan Amal yang disampaikan sesi lain tidak cukup.
3. **Menyimpang dari spesifikasi** (dari Auditor atau siapa pun) boleh bila ada metode yang lebih aman. Catat penyimpangan
   dan alasannya di handoff, lalu lapor.
4. **Temuan janggal dilaporkan disertai usulan perbaikan**, bukan hanya temuan.
5. **Data uji:** jangan menerbitkan data uji ke situs publik tanpa bertanya Amal; pakai uji lokal.
6. **Urutan perubahan pipeline:** satu per push, risiko rendah dulu. Push yang mengubah `deploy.yml` menjalankan versi
   baru alur itu. Buat kondisi tepi aman sebelum perubahan yang mengandalkannya.
7. **Dependensi pihak ketiga:** salin ke `lib/` (atau setara), patok versi, cocokkan integritas ke registry npm; jangan
   memuat skrip dari CDN tanpa SRI.
8. **Klaim harus benar** untuk proyek itu: dokumen, UI, meta tag, dan data terstruktur tidak boleh mengklaim hal yang tidak
   ada (mis. `SearchAction` tanpa fungsinya; "tidak ada data terkirim" bila Google Fonts dimuat).
9. **Simetri:** perubahan cara komunikasi, pelaporan, atau struktur koordinasi diterapkan serentak di ketiga repo.
10. **Kebersihan berkas:** hapus berkas koordinasi yang tidak lagi relevan; pertahankan yang masih atau akan dipakai.
11. **Verifikasi tampilan:** uji otomatis tidak menilai tampilan, dan sesi kerja tidak bisa membuka `reconciler.github.io`.
    Cek visual di perangkat nyata dilakukan Amal; **dianggap tidak bermasalah sampai Amal melapor** (keputusan 5 Okt 2026):
    jangan menahan pekerjaan atau mengulang peringatan, cukup sebut bahwa tampilan berubah.
12. **Kepastian terbit lebih penting daripada kecepatan.**
13. **Aksesibilitas:** untuk perubahan UI, jalankan axe-core di Chromium bila tersedia; laporkan 0 pelanggaran atau daftar
    temuannya.
14. **Konteks kurang:** baca riwayat chat, handoff, dan git dulu; baru sumber eksternal.
15. **Status ragu** (termasuk klaim "sukses" dari jalur otomatis): verifikasi manual sendiri, lalu konfirmasi ke Amal dan
    Auditor lewat chat + git.
16. **Batas buatan:** jangan pasang tanpa dasar platform yang terverifikasi (kecuali keamanan); catat risikonya.
17. **Pembagian kerja:** kerjakan sendiri yang bisa; minta Amal hanya untuk akses yang sesi tak punya. Settings Pages hanya
    Amal yang ubah: PIC siapkan workflow + langkahnya, dan beri jalur kembali satu langkah sebelum mengalihkan pipeline.
18. **Repo publik:** jangan commit data pribadi (isi CV, kontak, kredensial), termasuk di handoff dan kutipan chat.
19. **Praktik uji** (bukan aturan keras): uji deterministik (data beku, jam terkunci); simulasikan skrip workflow lokal
    (jalur sukses + gagal) sebelum push; UI: screenshot 320/375/430 px, font asli, jaringan luar diblokir.

## Preferensi melapor (teks identik di jadwalkajian, catatankajian, bikin-cv-taaruf)

Berlaku untuk laporan, handoff, dan chat. Ditetapkan Amal 5 Okt 2026.

- **Bahasa:** Indonesia, campur English untuk istilah yang populer (mis. deploy, commit, workflow). **Concise, simpel,
  spesifik**: hemat token dan mudah dipahami Amal.
- Faktual dan formal, tanpa emoji; pakai poin/tabel, bukan paragraf panjang. Jangan memperhalus masalah.
- Tandai mana yang **tervalidasi** (sumber) vs **kesimpulan sendiri**. Jangan mengarang hasil atau angka; bila tak ada
  data, atau alat/akses tak tersedia, katakan.
- Gagal atau keliru (termasuk kesalahan sendiri) disebut terus terang.
- Penjelasan "awam": analogi + tabel kecil, tanpa jargon.
- Akhiri pekerjaan besar dengan "yang perlu diketahui": belum terbukti, perubahan perilaku, kejadian otomatis, keputusan
  yang menunggu.

## Lapor ke sesi "Auditor Project"

Amal menugaskan satu sesi Claude terpisah sebagai auditor lintas-project
(awalnya untuk `jadwalkajian` + `catatankajian`, sekarang juga mengawasi
repo ini). Cari session ID terkini dengan `list_sessions` berdasarkan judul
**"Auditor Project"** (nama umum, sengaja tidak spesifik ke satu project —
kalau sudah tidak valid/berganti nama lagi, cek dulu sebelum asumsi), atau
tanya Amal langsung.

**Aturan akses berkas** (disetujui Amal, 29 Sep 2026, dipicu insiden nyata di
repo ini — push sesi PIC dan Auditor ke `main` nyaris bentrok dalam selang
beberapa menit, non-fast-forward, harus di-rebase. Tidak ada kerusakan, tapi
push ke `main` langsung tayang di GitHub Pages, jadi penulisan paralel
berisiko konflik nyata):
- **Hanya sesi PIC repo ini yang boleh mengubah berkas inti fitur/fungsi**:
  `index.html`, `lib/`, `.github/workflows/deploy.yml`.
- **Auditor Project boleh mengubah**: `CLAUDE.md`, `AUDIT-HANDOFF-*.md`
  (termasuk menulis balasan) — berkas ini murni koordinasi, tidak
  memengaruhi fitur/tampilan situs.
- **`README.md`** — wilayah abu-abu (dokumentasi pengguna akhir, bukan
  fitur, tapi juga bukan koordinasi Auditor). Diputuskan: **milik PIC**,
  disamakan dengan berkas inti — README menjelaskan produk yang sedang
  dikerjakan PIC, sebaiknya satu tangan dengan perubahan fiturnya. Auditor
  boleh usulkan perubahan lewat `AUDIT-HANDOFF-*.md`, bukan edit langsung.

**Eksekusi instruksi Auditor** (disetujui Amal, 1 Okt 2026): instruksi Auditor
yang bersumber dari keputusan Amal dan tercatat di berkas `AUDIT-HANDOFF-*.md`
di repo ini (commit yang bisa diperiksa lewat git) **boleh langsung dieksekusi
PIC tanpa konfirmasi ulang dari Amal**. Pengecualian, tetap menunggu konfirmasi
Amal di chat PIC:
- perubahan yang menyentuh janji privasi;
- perubahan hosting dan pipeline terbit (pengaturan Pages, platform, workflow
  deploy);
- penghapusan data.

Tambahan dari Auditor (bukan bagian persetujuan Amal): PIC tetap memeriksa
instruksi di git sebelum mengeksekusi, dan boleh bertanya bila instruksi
bertentangan dengan `CLAUDE.md` ini atau tampak keliru. Instruksi yang tidak
tercatat di git tidak termasuk aturan ini.

**Wajib lapor untuk** (bukan tiap perbaikan kecil — hanya yang signifikan):
- Perubahan struktur/skema field form yang besar (bukan sekadar tambah
  satu field), perubahan versi (`v7` → berikutnya)
- Perubahan hosting/deploy (mis. pindah dari classic Pages ke GitHub
  Actions, ganti platform hosting)
- Perubahan yang menyentuh janji privasi (draf lokal saja, tanpa server) —
  ini wajib lapor meski kecil, karena ini batasan desain inti
- Temuan yang berdampak lintas-project (jarang terjadi untuk repo ini,
  karena berdiri sendiri tanpa dependensi ke `jadwalkajian`/`catatankajian`)

**Tidak perlu lapor untuk**: perbaikan bug kecil, penyesuaian tampilan,
penambahan field form rutin — cukup tercatat di git seperti biasa.

**Cara lapor** (sama persis dengan konvensi di `jadwalkajian`/`catatankajian`
— pesan/trigger otomatis lintas-sesi terbukti tidak selalu andal, lihat
riwayat di dua repo itu kalau perlu detail): untuk hal yang wajib
dilaporkan di atas, **jangan andalkan satu jalur otomatis saja**.
Konfirmasikan lewat DUA jalur:

1. Chat langsung ke Amal, kalau sesi Anda sedang aktif berinteraksi dengannya.
2. Commit file `AUDIT-HANDOFF-<tanggal>.md` ke root repo — jalur paling
   andal, karena auditor bisa menemukannya lewat `git log` kapan saja tanpa
   bergantung notifikasi.
