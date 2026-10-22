# Handoff PIC, 22 Okt 2026: Kenali Calon di panel "Tentang" (gelombang 1), simulasi gelombang 3, koreksi uji header

Dari: sesi PIC `bikin-cv-taaruf`. Untuk: sesi "Auditor Project". Menjawab `AUDIT-HANDOFF-2026-10-22-auditor.md` (komit 7f6192d, diperiksa di git).
Penanda: **[Terverifikasi]** diuji PIC; **[Kesimpulan PIC]**; **[Menunggu Amal]**.

## 1. Gelombang

| Gelombang | Status | Isi |
|---|---|---|
| 1 Tautan Kenali Calon | Selesai, dipush | `ABOUT.others`: Jadwal Kajian, Catatan Kajian, **Kenali Calon** (`https://reconciler.github.io/kenalicalon/`). Urutan dan label = Daftar resmi. README tidak memuat daftar proyek saudara, jadi tidak diubah. Tab yang sama, tanpa skrip, tanpa akses penyimpanan. |
| 2 Keadaan | Tidak berubah | **[Menunggu Amal]** URL Apps Script `/exec` dan keputusan peringatan Arab/emoji di PDF. |
| 3 Penjaga aset | **Dikerjakan setelah "ya" Amal di chat PIC** (lihat bagian 7) | Simulasi di bagian 3, eksekusi di bagian 7. |

Tampilan berubah: panel "Tentang" punya satu tautan lagi (butir 11: belum dilihat di perangkat nyata).

## 2. Hasil uji gelombang 1 [Terverifikasi, Chromium headless, font asli untuk header]

- Panel: 4 tautan (Instagram + 3 proyek), urutan benar, tiga tautan proyek tanpa `target` (tab yang sama). Panel 249 px, tidak terpotong, di dalam layar di 320 px.
- Header 44 px di 320, 360, 375, 390, 412, 430, 768, 1280 px, tahap halaman depan dan formulir, tanpa pecah dua baris dan tanpa geser horizontal.
- axe-core 0 pelanggaran: 84 pemindaian (lebar 320, 375, 430 x terang/gelap x halaman depan/formulir x panel tertutup/terbuka) dan 39 pemindaian formulir.
- Suite alur 113/113 lulus (fitur laporan error mati dan hidup), uji laporan error 46/46.
- **Run 14** (`44c0f1a`): `success` (API Actions), semua langkah termasuk "Uji situs setelah deploy" hijau. Diverifikasi ulang oleh Auditor.

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
- Gelombang ini mengubah `deploy.yml`: persetujuan Amal diminta di chat PIC (bagian 7).

## 4. Koreksi uji sendiri (kesalahan PIC)

- Skrip tinggi header (`final-hdr.js`) memuat salinan `proto2/final/index.html` bertanggal **1 Okt**, bukan `index.html` di repo. Klaim "header 44 px, font asli" pada laporan 8 Okt dan 10 Okt dengan demikian diukur pada salinan lama.
- **Dampak [Terverifikasi]:** diff `index.html` dari 315c7c2 (tampilan 1 Okt) ke HEAD tidak mengubah markup atau CSS header selain menghapus satu aturan tak terpakai (`.menupanel .mnote`). Klaim sebelumnya kemungkinan besar benar, tetapi **tidak diukur** pada berkas itu.
- **Perbaikan:** salinan uji diperbarui; header diukur ulang pada berkas terkini (bagian 2). Catatan "pastikan uji memuat berkas yang diuji (bandingkan hash)" ditambahkan di `CLAUDE.md` bagian Uji.
- Suite lain (alur, axe formulir, uji laporan error, PDF) memuat `site/` yang dibuat ulang dari `index.html` pada tiap sesi uji dan tidak terdampak.

## 5. Untuk repo lain

- **[Kesimpulan PIC]** Praktik untuk PIC lain: tulis skrip uji agar mencetak hash berkas yang dimuat dan membandingkannya dengan berkas di repo. Salinan uji lama menghasilkan hijau palsu tanpa tanda apa pun.

## 6. Yang perlu diketahui

- **Menunggu Amal:** URL Apps Script dan peringatan Arab/emoji (lihat juga bagian 7).
- **Perubahan perilaku:** hanya satu tautan baru di panel "Tentang".
- **Belum terbukti:** tampilan di perangkat nyata; perilaku Google untuk laporan error (lihat handoff 10 Okt).

## 7. Gelombang 3 dieksekusi (pipeline; setelah persetujuan Amal)

- **[Amal, chat PIC, 22 Okt]** Menjawab pertanyaan PIC soal perubahan `deploy.yml` dengan "silakan lanjutkan apa yang sudah diminta auditor". PIC menafsirkan ini sebagai "ya" untuk gelombang 3 yang saya tanyakan.
- **Perubahan:** satu langkah baru di akhir `deploy.yml`, "Uji aset yang dirujuk beranda". Hanya `curl`, `grep`, `sed`, tanpa action pihak ketiga. Membaca beranda yang tayang (`?v=<sha>`), mengumpulkan `src`/`href` relatif, mewajibkan 200 per aset, mengulang 12 x 10 detik. Wajib minimal satu aset terdeteksi; jalur mutlak (`/x`) ditolak. Langkah lama tidak diubah.
- Tidak mendeteksi alamat yang dirakit lewat JavaScript (di repo ini tidak ada aset lokal semacam itu).
- **Risiko:** langkah berjalan setelah Deploy, jadi kegagalannya tidak membatalkan situs yang sudah tayang; hanya membuat run merah. Jalur kembali Pages tidak berubah.
- **Simulasi lokal [Terverifikasi]** (skrip diambil dari YAML, server tiruan):

| Kasus | Harapan | Hasil |
|---|---|---|
| A. `index.html` + `lib/jspdf-...` | lolos | lolos, "Aset yang diperiksa: lib/jspdf-2.5.1.umd.min.js" |
| B. `lib/` hilang dari situs tetapi dirujuk | gagal | gagal `lib/...=404(harus-200)` |
| C. rujukan salah ketik `lib/typo.js` | gagal | gagal `lib/typo.js=404` |
| D. tanpa rujukan lokal | gagal | gagal `tidak-ada-aset-lokal-terdeteksi` |
| E. tautan `https://`, `#jangkar`, `mailto:` | lolos (diabaikan) | lolos |
| F. rujukan `/x.png` | gagal | gagal `jalur-mutlak-di-situs-proyek` |
| G. beranda kosong | gagal | gagal (catatan: server tiruan Python memberi 200 untuk daftar direktori, jadi gagalnya karena tanpa aset) |
| H. aset berkueri `?x=1#y` | lolos | lolos |

- Skrip asli (tanpa pengecilan pengulangan) diuji: kasus A lolos seketika; kasus B gagal setelah 121 detik dengan exit 1.
- Simulasi memakai salinan dengan pengulangan 2 x 1 detik untuk kasus A sampai H; selisihnya hanya angka pengulangan.
- **Run dan hasil di Actions:** dicatat di bagian 8 setelah push.

## 8. Hasil run gelombang 3 [Terverifikasi: API Actions dan log langkah]

- **Run 16** (`af9bffb`, push yang membawa langkah baru, jadi memakai versi baru alur): `success`. Semua langkah hijau, termasuk "Uji situs setelah deploy" dan "Uji aset yang dirujuk beranda".
- Log langkah baru pada situs yang tayang: `Aset yang diperiksa: lib/jspdf-2.5.1.umd.min.js`, `Lolos pada percobaan 1`. Jadi langkah itu benar-benar memeriksa aset (bukan lolos kosong), sesuai simulasi kasus A.
- Run 15 adalah push Auditor (`8a61555`), bukan PIC.
- Catatan: pembacaan status run lewat API sempat usang beberapa menit (pernah tampil "berjalan" padahal sudah selesai); keputusan "success" diambil dari daftar langkah dan log, bukan dari satu pembacaan status.

## 9. Yang masih menunggu

- **Amal:** URL Apps Script `/exec` (laporan error) dan keputusan peringatan karakter Arab/emoji di PDF. Tidak diambil alih siapa pun.
- Tampilan panel "Tentang" (tautan Kenali Calon) belum dilihat di perangkat nyata (butir 11).

## 10. Peringatan karakter yang tidak bisa dicetak di PDF (temuan 10 Okt, dikerjakan)

- **[Amal, chat PIC, 22 Okt]** "tolong execute apa yang perlu di-execute". Tidak ada instruksi Auditor baru di git. Satu-satunya butir terbuka yang bisa dikerjakan PIC adalah opsi termurah dari temuan 10 Okt (handoff 10 Okt bagian 5). **[Kesimpulan PIC]** PIC menafsirkan kalimat Amal sebagai persetujuan opsi itu saja: **peringatan, bukan perubahan PDF**. Jika tafsiran ini keliru, perubahan mudah dibatalkan (satu fungsi dan satu elemen).
- **Perubahan (`index.html`):** kolom teks, area teks, teks+pilihan, daftar, tabel, dan matriks yang memuat karakter di luar `PDF_CHAR_OK` menampilkan catatan di bawahnya ("Ada huruf atau simbol yang tidak bisa dicetak di PDF: ... Hasilnya akan rusak. Ganti dengan huruf biasa (A sampai Z)."), dan bagian Penutup memuat daftar kolom bermasalah. **Tidak memblokir** PDF, tidak mengubah isi PDF, tidak menyentuh data atau jaringan.
- **Verifikasi himpunan karakter [Terverifikasi]:** sapuan 9.443 titik kode (U+0020 sampai U+24FF) terhadap jsPDF + ekstraksi PDF. 214 karakter tercetak benar; **tidak ada** karakter yang diterima regex tetapi tercetak salah (NBSP tercetak sebagai spasi, tanda hubung lunak sebagai "-", keduanya wajar; `[` dan `]` hanyalah pembatas uji); tidak ada peringatan berlebih; Arab dan emoji tidak tercetak benar (sesuai harapan).
- **Uji [Terverifikasi, Chromium headless]:** 31 pengecekan baru lulus: ketik Arab/emoji lalu hapus; Latin biasa dan tanda baca umum tanpa peringatan; huruf bertanda gabung (NFD) dinormalkan; 6 jenis kolom; kolom tersembunyi tanpa elemen; ringkasan Penutup; PDF tetap terbentuk; axe 0 pelanggaran (320, 390, 1280 px; terang dan gelap). Kontrol negatif: terhadap kode lama uji gagal.
- **Regresi:** alur 113/113 (fitur laporan mati dan hidup), axe formulir 0 (39 pemindaian), uji laporan error 46/46, panel Tentang 84/84, header 44 px di 320 sampai 1280 px dengan font asli (salinan uji diverifikasi sama dengan berkas repo lewat hash), 4 kasus PDF utuh, `_site` hanya dua berkas.
- **Batasan:** kolom yang hanya berisi pilihan tetap atau angka tidak diperiksa (tidak bisa memuat teks bebas). Karakter yang diketik pengguna tetap tersimpan apa adanya. Menyematkan font Arab belum dikerjakan; itu perubahan besar (font di `lib/`, bentuk huruf Arab, arah kanan-ke-kiri) dan tetap menunggu keputusan Amal.
- Tampilan berubah (butir 11): catatan oranye di bawah kolom dan satu panel di bagian Penutup, belum dilihat di perangkat nyata.
- **Run Actions:** dicatat di bagian 11 setelah push.
