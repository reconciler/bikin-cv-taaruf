# Handoff PIC — 10 Okt 2026 (laporan error opsional; temuan PDF)

Dari: sesi PIC `bikin-cv-taaruf`
Untuk: sesi "Auditor Project"

Penanda: **[Amal]** = keputusan Amal di chat PIC. **[Terverifikasi]** = diuji PIC. **[Kesimpulan PIC]** = pendapat sendiri.

## 1. Menyentuh janji privasi (wajib lapor)

- **[Amal, 10 Okt]** Meminta pencatatan error dari pengguna. Setelah PIC menjelaskan pilihan, Amal memilih: kirim otomatis, tetapi **hanya setelah pengguna ditanya dan menekan "Kirim laporan"**; penerima **Google Apps Script + Google Sheet** milik Amal.
- Ini pengecualian pertama atas "isian tidak pernah terkirim ke server mana pun". Isian CV tetap tidak ikut.
- **Status rilis: fitur MATI.** `REPORT_URL` di `index.html` masih kosong. Selama kosong: tidak ada pertanyaan, tidak ada kiriman, teks privasi tidak berubah. Push ini tidak mengubah apa pun yang dilihat pengguna.
- **Menunggu Amal:** menempel `docs/laporan-error.gs` ke Google Sheet, men-deploy sebagai Web app (Execute as: Me; Anyone), lalu memberi alamat `/exec` ke PIC. Alamat itu publik begitu masuk repo. Setelah itu PIC mengisi `REPORT_URL`; teks privasi berubah otomatis, dan itu push terpisah yang saya laporkan lagi.

## 2. Rancangan

| Hal | Keputusan |
|---|---|
| Pemicu | `error`, `unhandledrejection`, PDF gagal dibuat, unduhan gagal |
| Persetujuan | Bilah bawah layar: Kirim laporan / Jangan kirim / Jangan tanya lagi (`ctgv1_noreport`); Esc menutup; pratinjau isi persis yang dikirim |
| Batas | 3 pertanyaan per kunjungan; galat sama tidak ditanya ulang; galat ekstensi dan "Script error." diabaikan |
| Isi | waktu, versi, jenis, bagian formulir, pesan (kutipan, email, angka panjang disamarkan), 3 baris stack tanpa path, user agent, ukuran layar |
| Tidak ikut | isian CV, jenis kelamin, alamat IP (tidak disimpan penerima; Google tetap melihatnya, seperti pada Google Fonts) |
| Transport | `fetch` POST `text/plain`, `no-cors`, tanpa skrip pihak ketiga dan tanpa SDK |
| Penerima | `docs/laporan-error.gs`: batas 3000 karakter, kolom dari daftar, 500 karakter per sel, sel berawalan `= + - @` dinetralkan, berhenti di 5000 baris |

## 3. Verifikasi

- **[Terverifikasi, Chromium headless]** 46 pengecekan uji laporan lulus; uji lama 109/109 lulus pada build fitur-mati dan fitur-hidup; axe 0 pelanggaran (39 pemindaian formulir; bilah terbuka di 320 px, 390 px gelap, desktop); header 44 px; tanpa geser horizontal.
- Uji canary: teks unik ditaruh di isian CV dan di pesan error. Uji pertama **menemukan kebocoran**: baris judul stack Chrome memuat pesan asli sehingga lolos dari penyamaran. Diperbaiki (hanya baris bingkai yang dipakai, kutipan disamarkan), lalu lulus. Bukti uji punya daya deteksi.
- **[Terverifikasi dengan tiruan]** Skrip Apps Script: 12 pengecekan lulus di Node dengan `SpreadsheetApp`/`LockService`/`ContentService` tiruan.
- **Belum terbukti:** perilaku sebenarnya di Google. Belum diuji: deploy Apps Script, POST `no-cors` lintas pengalihan ke `script.googleusercontent.com` (umum dipakai, tetapi tidak saya uji), kuota Apps Script, dan tampilan di perangkat nyata. Karena `no-cors`, aplikasi tidak bisa memastikan laporan sampai; toast "Laporan dikirim" bersifat optimistis.

## 4. Keterbatasan yang diterima

- Pesan error bisa memuat potongan isian. Penyamaran bersifat heuristik (kutipan, email, angka ≥4 digit), bukan jaminan. Pengguna melihat pratinjau dan boleh menolak.
- Galat tanpa exception tidak tertangkap (mis. izin unduhan ditolak Opera Mobile).
- Alamat `/exec` publik: bisa dibanjiri kiriman palsu. Mitigasi: batas ukuran, batas 5000 baris. Untuk menghentikan: arsipkan deployment atau kosongkan `REPORT_URL`.

## 5. Temuan terpisah (diminta Amal memeriksa PDF)

- **[Terverifikasi]** PDF normal berfungsi: 4 kasus (Ikhwan/Akhwat, isi penuh/minimal, input ekstrem), 7 sampai 12 halaman, header, footer berisi tautan situs di semua halaman, tanpa teks keluar halaman, karakter khusus latin utuh.
- **[Terverifikasi, sudah lama ada]** Huruf Arab dan emoji di isian tampil sebagai karakter rusak di PDF, tanpa galat dan tanpa peringatan di formulir (jsPDF memakai font bawaan Latin). **Usulan:** peringatan di formulir untuk karakter yang tidak bisa dicetak (termurah). Menyematkan font Arab penuh adalah perubahan besar. Menunggu keputusan Amal.

## 6. Yang perlu diketahui

- Perubahan perilaku: belum ada (fitur mati) sampai `REPORT_URL` diisi.
- Menunggu Amal: deploy Apps Script dan alamatnya; keputusan peringatan karakter Arab.
- Tampilan bilah laporan belum dilihat di perangkat nyata.
- Dokumen ikut dirapikan: paragraf privasi di `CLAUDE.md` ditulis ulang, baris usang di handoff 8 Okt diperbarui.
