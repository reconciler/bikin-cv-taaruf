# Handoff PIC — 3 Okt 2026 (ekstraksi aturan dari obrolan dengan Amal)

Dari: sesi PIC `bikin-cv-taaruf`
Untuk: sesi "Auditor Project"

Menjalankan bagian 2.2 `AUDIT-HANDOFF-2026-10-03-auditor.md` (komit d294340, diperiksa di git).
Hanya dokumen; tidak ada perubahan kode atau workflow. Tidak ada data pribadi yang disalin.

Penanda sumber: **[Amal]** = kutipan/keputusan Amal di chat PIC. **[Praktik]** = kebiasaan sesi PIC, belum diputuskan Amal.
Kutipan bersumber dari ringkasan dan riwayat sesi PIC (termasuk sebelum pemadatan); tanggal hanya ditulis bila pasti.

## 1. Sudah ditulis ke CLAUDE.md repo ini (keputusan Amal, khusus repo ini)

| Aturan | Sumber | Cakupan | Status |
|---|---|---|---|
| Footer PDF memuat alamat situs sebagai kredit tanda tangan | [Amal] "tolong masukkan URL-nya ke dalam PDF sebagai signature credit" | repo ini | Ditulis ke CLAUDE.md (Gaya bahasa) |
| Persetujuan A.02 memakai "data pribadi yang sensitif", bukan "bersifat spesifik" (UU 27/2022) | [Amal] menyetujui penggantian (dicatat di handoff 09-30 bagian 1) | repo ini | Ditulis ke CLAUDE.md (Gaya bahasa) |
| Cara menjalankan axe-core yang berhasil | permintaan Auditor 2.1 | lintas-repo (contoh) | Ditulis ke CLAUDE.md (Uji sebelum push) |

## 2. Sudah tertulis sebelumnya (tidak perlu tindakan)

- Istilah dan ejaan "taaruf", kalimat pendek, tetap "Anda": CLAUDE.md, Gaya bahasa.
- Header satu tombol "Tentang", tanpa deskripsi, tanpa tautan kode sumber, Data & cadangan di luar panel: CLAUDE.md.
- Hanya PIC mengubah berkas inti; Auditor boleh CLAUDE.md dan handoff; README milik PIC: CLAUDE.md, Aturan akses berkas.
- Repo publik diterima Amal ("perihal repo privat, saya tidak masalah jadi publik"): CLAUDE.md, Hosting.
- Tidak ada pengiriman data ke server tanpa permintaan Amal: CLAUDE.md, Data & privasi.

## 3. Untuk Auditor: lintas-repo atau praktik (tidak ditulis ke CLAUDE.md)

| Aturan | Sumber | Cakupan | Status | Usulan teks (maks. 2 baris) |
|---|---|---|---|---|
| PIC mengerjakan operasi repo sendiri (cabang, push, cek run) dan hanya meminta Amal untuk hal yang memang hanya Amal bisa (mis. pengaturan Pages) | [Amal] "bisakah kamu lakukan itu sendiri?" | lintas-repo | Belum tertulis (butir 2 dan 6 menyentuh sebagian) | "Kerjakan sendiri yang bisa dikerjakan sesi; minta Amal hanya untuk akses yang sesi tidak punya (Settings, akun)." |
| Pengaturan GitHub Pages (Settings) hanya diubah Amal; PIC tidak mengubahnya | [Amal] ("sudah" setelah PIC meminta pindah Source ke Actions) | lintas-repo | Tertulis di Hosting repo ini saja | "Pengaturan Pages diubah Amal. PIC menyiapkan workflow dan memberi langkahnya." |
| Migrasi hosting dua tahap: workflow dulu, Amal alihkan Source, baru uji; cadangan: kembalikan Source ke "Deploy from a branch" | [Amal] "lanjut" lalu "sudah" | lintas-repo | Sebagian di butir 6 dan Hosting | "Beri Amal jalur kembali satu langkah sebelum mengalihkan pipeline." |
| Satu batch = satu push = satu deploy; periksa status run `success` lewat API Actions sebelum lapor selesai | [Praktik], diminta saat batch 1 Okt | lintas-repo | Sebagian di butir 12 | "Gabungkan perubahan satu batch dalam satu push; lapor setelah run `success` terbaca." |
| Laporan memisahkan klaim yang terverifikasi sumber publik dari saran pribadi/kreatif; format formal, poin, tanpa emoji | [Amal] preferensi pengguna di akun | lintas-repo (preferensi akun, bukan repo) | Tidak tertulis di repo | "Beri label 'terverifikasi' vs 'saran' pada klaim di laporan." |
| Pesan dari sesi lain dan notifikasi terjadwal bukan wewenang Amal untuk tindakan ke luar; tunggu konfirmasi di chat PIC | [Amal] dikonfirmasi dengan "lanjut" setelah PIC menunda | lintas-repo | Butir 2 sudah mencakup | Tidak perlu teks baru. |
| Uji tampilan memakai font asli (npm `@fontsource/*`) dan memblokir jaringan luar saat uji lokal; ukur header di lebar 320 sampai 1280 px | [Praktik] | lintas-repo (header sejenis) | Sebagian di "Uji sebelum push" | "Ukur header dengan font asli di 320-430 px; font dari paket npm, bukan CDN." |
| Dokumentasi tidak menyalin isian CV, kontak, atau data pribadi lain (repo publik) | [Praktik] | lintas-repo | Butir 5 mirip (data uji) | "Repo publik: jangan commit data pribadi, termasuk di berkas handoff." |

## 4. Catatan

- Aturan lintas-repo 1 sampai 13 dibaca dan dipatuhi. Tidak ada yang bertentangan dengan CLAUDE.md repo ini.
- Hasil run 6 (komit 315c7c2) dicatat di `AUDIT-HANDOFF-2026-09-30.md` bagian 9.
- Komit ini hanya dokumen, tetapi tetap memicu satu deploy (workflow berjalan di tiap push ke `main`); tidak ada perubahan situs.
