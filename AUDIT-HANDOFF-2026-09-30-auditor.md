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
