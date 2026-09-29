# Audit handoff — 2026-09-29

Dari: sesi PIC `bikin-cv-taaruf` (Claude Code, `session_01Sjeow1nfArN9DYGmP9XF2o`)
Untuk: sesi "Auditor Project"

## 1. Usulan aturan main lintas-project (disetujui Amal, mohon diformalkan)

Latar: pada 2026-09-29 dua sesi (PIC dan Auditor) sama-sama push langsung ke
`main` dalam selang beberapa menit. Push PIC sempat ditolak (non-fast-forward)
dan harus di-rebase. Tidak ada kerusakan, tetapi setiap push ke `main` langsung
tayang di GitHub Pages, sehingga penulisan paralel berisiko konflik di berkas
aplikasi.

Usulan, sudah disetujui Amal di sesi PIC:

- Hanya sesi **PIC project** yang boleh mengubah isi repo (kode aplikasi,
  aset, README, dll.).
- **Pengecualian:** `CLAUDE.md` boleh diubah oleh siapa pun, termasuk sesi
  Auditor Project.
- Amal meminta Auditor Project mengomunikasikan aturan ini ke semua PIC
  project (`jadwalkajian`, `catatankajian`, `bikin-cv-taaruf`) dan
  memformalkannya sebagai aturan main, misalnya di bagian "Lapor ke sesi
  Auditor Project" pada `CLAUDE.md` tiap repo.

Pertanyaan terbuka untuk Auditor: apakah file `AUDIT-HANDOFF-*.md` ditulis
oleh PIC saja (seperti file ini), atau Auditor juga boleh menulis file
balasan di repo? Aturan di atas secara harfiah hanya mengecualikan
`CLAUDE.md`.

**Addendum (jawaban Amal atas pertanyaan terbuka di atas):** Auditor boleh
mengubah file yang **tidak terkait inti fitur/fungsi project**, misalnya
`CLAUDE.md`, `AUDIT-HANDOFF-*.md` (termasuk balasan Auditor), dan catatan
koordinasi sejenis. File inti fitur/fungsi (di repo ini: `index.html`, `lib/`)
tetap hanya diubah PIC. Mohon rumusan final memakai batas ini dan menyebut
eksplisit posisi `README.md` (dokumentasi pengguna akhir, wilayah abu-abu).

## 2. Laporan perubahan (kategori: menyentuh janji privasi)

Commit terkait ada di `git log` pada tanggal yang sama. Label versi tetap v7.

- **Kredit URL di footer PDF.** Setiap halaman PDF kini memuat
  "Dibuat dengan Bikin CV Taaruf · reconciler.github.io/bikin-cv-taaruf"
  sebagai tautan. Footer dipecah menjadi dua baris karena tidak muat dalam satu
  baris. Tidak ada data pengguna di tautan tersebut.
- **jsPDF tidak lagi dimuat dari cdnjs.** Disalin ke
  `lib/jspdf-2.5.1.umd.min.js` dari paket npm `jspdf@2.5.1`; integritas tarball
  cocok dengan registry npm
  (`sha512-hXObxz7ZqoyhxET78+XR34Xu2qFGrJJ2I2bE5w4SM8eFaFEkW2xcGRVUss360fYelwRSid/jT078kbNvmoW0QA==`).
  Alasan: script dari CDN tanpa atribut `integrity` bisa diganti pihak lain.
  Hash SRI untuk file cdnjs tidak bisa diverifikasi dari sesi PIC (jaringan
  memblokir cdnjs), dan hash yang salah akan mematikan fitur PDF. Hosting tetap
  classic GitHub Pages dari `main`, tanpa build step.
- **Koreksi kalimat privasi** di `README.md` dan `CLAUDE.md`. Klaim sebelumnya,
  "tidak ada data terkirim ke server", terlalu luas: isian memang tidak pernah
  dikirim, tetapi Google Fonts tetap dimuat dari server Google (alamat IP
  pengunjung terlihat oleh Google). Perilaku aplikasi tidak berubah; hanya
  dokumentasinya yang dibuat akurat.

Verifikasi PIC: PDF dibuat di Chromium headless dengan semua akses keluar
diblokir. jsPDF termuat dari `lib/`, PDF terbentuk dan tautan kredit ada di
setiap halaman. Satu-satunya permintaan ke luar adalah Google Fonts. Situs
publik belum dicek langsung oleh PIC karena jaringan sesi memblokir
`reconciler.github.io`.
