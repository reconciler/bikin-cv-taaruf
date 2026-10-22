# Handoff PIC, 22 Okt 2026: Kenali Calon di panel "Tentang" (gelombang 1), simulasi gelombang 3, koreksi uji header

Dari: sesi PIC `bikin-cv-taaruf`. Untuk: sesi "Auditor Project". Menjawab `AUDIT-HANDOFF-2026-10-22-auditor.md` (komit 7f6192d, diperiksa di git).
Penanda: **[Terverifikasi]** diuji PIC; **[Kesimpulan PIC]**; **[Menunggu Amal]**.

## 1. Gelombang

| Gelombang | Status | Isi |
|---|---|---|
| 1 Tautan Kenali Calon | Selesai, dipush | `ABOUT.others`: Jadwal Kajian, Catatan Kajian, **Kenali Calon** (`https://reconciler.github.io/kenalicalon/`). Urutan dan label = Daftar resmi. README tidak memuat daftar proyek saudara, jadi tidak diubah. Tab yang sama, tanpa skrip, tanpa akses penyimpanan. |
| 2 Keadaan | Tidak berubah | **[Menunggu Amal]** URL Apps Script `/exec` dan keputusan peringatan Arab/emoji di PDF. |
| 3 Penjaga aset | **DITAHAN** (pipeline); simulasi lokal selesai | Lihat bagian 3. Tidak ada perubahan `deploy.yml`. |

Tampilan berubah: panel "Tentang" punya satu tautan lagi (butir 11: belum dilihat di perangkat nyata).

## 2. Hasil uji gelombang 1 [Terverifikasi, Chromium headless, font asli untuk header]

- Panel: 4 tautan (Instagram + 3 proyek), urutan benar, tiga tautan proyek tanpa `target` (tab yang sama). Panel 249 px, tidak terpotong, di dalam layar di 320 px.
- Header 44 px di 320, 360, 375, 390, 412, 430, 768, 1280 px, tahap halaman depan dan formulir, tanpa pecah dua baris dan tanpa geser horizontal.
- axe-core 0 pelanggaran: 84 pemindaian (lebar 320, 375, 430 x terang/gelap x halaman depan/formulir x panel tertutup/terbuka) dan 39 pemindaian formulir.
- Suite alur 113/113 lulus (fitur laporan error mati dan hidup), uji laporan error 46/46.
- Run Actions: dicatat di handoff berikutnya (tidak membuat push kedua hanya untuk itu); PIC memverifikasi `success` lewat API dan melaporkannya di chat.

## 3. Gelombang 3: simulasi lokal (celah di repo ini) [Terverifikasi, tanpa mengubah repo]

Skrip uji pasca-deploy dari `deploy.yml` dijalankan lokal terhadap server tiruan:

| Kasus | Hasil |
|---|---|
| A. `_site/` berisi `index.html` + `lib/jspdf-2.5.1.umd.min.js` | Lolos (percobaan 1) |
| B. Kontrol negatif: `CLAUDE.md` ikut di `_site/` | **Gagal**: `CLAUDE.md=200(harus-404)` |
| C. `lib/jspdf-2.5.1.umd.min.js` tidak ada di `_site/`, tetapi `index.html` masih merujuknya | **Lolos** (percobaan 1) |

- **Celah ada di repo ini.** Uji hanya memeriksa berkas yang ada di `_site/`. Aset yang dirujuk `index.html` tetapi tidak di `_site/` (lupa mendaftarkan di langkah salin, atau salah ketik) tidak terdeteksi, padahal situs rusak (fitur PDF mati).
- Risiko saat ini rendah: hanya satu aset lokal dirujuk (`lib/jspdf-...`), dan `cp` yang gagal sudah menggagalkan job bila berkasnya tak ada di repo. Naik bila aset bertambah.
- **[Kesimpulan PIC] Usulan** (belum dikerjakan): langkah tambahan di akhir uji yang mengumpulkan `src=` dan `href=` relatif di `index.html` dan mewajibkan 200; uji lain tidak dilonggarkan; simulasikan jalur sukses dan gagal lokal; satu push khusus.
- **[Menunggu Amal]** Gelombang ini mengubah `deploy.yml`. Persetujuan diminta di chat PIC.

## 4. Koreksi uji sendiri (kesalahan PIC)

- Skrip tinggi header (`final-hdr.js`) memuat salinan `proto2/final/index.html` bertanggal **1 Okt**, bukan `index.html` di repo. Klaim "header 44 px, font asli" pada laporan 8 Okt dan 10 Okt dengan demikian diukur pada salinan lama.
- **Dampak [Terverifikasi]:** diff `index.html` dari 315c7c2 (tampilan 1 Okt) ke HEAD tidak mengubah markup atau CSS header selain menghapus satu aturan tak terpakai (`.menupanel .mnote`). Klaim sebelumnya kemungkinan besar benar, tetapi **tidak diukur** pada berkas itu.
- **Perbaikan:** salinan uji diperbarui; header diukur ulang pada berkas terkini (bagian 2). Catatan "pastikan uji memuat berkas yang diuji (bandingkan hash)" ditambahkan di `CLAUDE.md` bagian Uji.
- Suite lain (alur, axe formulir, uji laporan error, PDF) memuat `site/` yang dibuat ulang dari `index.html` pada tiap sesi uji dan tidak terdampak.

## 5. Untuk repo lain

- **[Kesimpulan PIC]** Praktik untuk PIC lain: tulis skrip uji agar mencetak hash berkas yang dimuat dan membandingkannya dengan berkas di repo. Salinan uji lama menghasilkan hijau palsu tanpa tanda apa pun.

## 6. Yang perlu diketahui

- **Menunggu Amal:** URL Apps Script, peringatan Arab/emoji, persetujuan gelombang 3.
- **Perubahan perilaku:** hanya satu tautan baru di panel "Tentang".
- **Belum terbukti:** tampilan di perangkat nyata; perilaku Google untuk laporan error (lihat handoff 10 Okt).
