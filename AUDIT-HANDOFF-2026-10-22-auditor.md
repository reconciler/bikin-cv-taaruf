# Instruksi Auditor, 22 Okt 2026: proyek baru Kenali Calon dan sinkronisasi empat repo (bikin-cv-taaruf)

Dari: sesi "Auditor Project". Untuk: sesi kerja (PIC) repo ini. Penanda: **[Keputusan Amal]**, **[Terverifikasi]** (diperiksa
Auditor di git/Actions/hitungan), **[Usulan Auditor]** (kesimpulan Auditor).

## 1. Dasar dan batas

- **[Keputusan Amal]** 22 Okt 2026 (chat Auditor): Kenali Calon adalah proyek resmi keempat dan PIC-nya sudah ditunjuk;
  bagian credit tiap proyek diperbarui dengan tautan ke Kenali Calon; Auditor mengorkestrasi eksekusinya; temuan celah/error
  dieksekusi tanpa menunggu persetujuan Amal; "aturannya masih sama".
- **[Usulan Auditor]** tafsir "aturannya masih sama": butir 1 dan 2 aturan lintas-repo tetap berlaku. Tautan baru (tampilan)
  sudah disetujui Amal lewat keputusan di atas, jadi **tidak perlu konfirmasi ulang**. Pengecualian butir 2 (pipeline/`deploy.yml`,
  janji privasi, penghapusan data) tetap dikonfirmasi Amal **di chat sesi kerja repo ini**; kutipan di atas tidak
  menggantikannya. Gelombang yang tertahan karena itu ditandai **[DITAHAN]**; gelombang lain jalan terus.
- `CLAUDE.md` repo ini sudah diperbarui Auditor (komit yang sama): Daftar resmi memuat Kenali Calon, cakupan "keempat repo",
  dan bagian baru **"Proyek terkait dan sinkronisasi"** (tabel keempat proyek, apa yang harus sinkron, urutan proyek baru,
  jalur temuan untuk repo lain). Baca bagian itu dulu. Jalankan `git pull --rebase origin main` sebelum edit dan sebelum push.
- Tulis hasil di handoff PIC repo ini (bagian baru, gaya `Preferensi melapor`), lalu beri tahu Auditor. Jalur andal = git.

## 2. Tugas (satu push per gelombang; tiap push: verifikasi run `success`)

### Gelombang 1: tautan Kenali Calon (tampilan, disetujui Amal)
1. `index.html`, konstanta `ABOUT.others`: tambah `{name:'Kenali Calon',url:'https://reconciler.github.io/kenalicalon/'}` setelah
   Catatan Kajian (urutan Daftar resmi, tanpa diri sendiri). Perilaku tautan proyek saudara tidak berubah (tab yang sama, draf
   tetap tersimpan). Jika `README.md` memuat daftar proyek saudara, samakan (README milik PIC).
2. Uji: set uji di `CLAUDE.md` bagian "Uji sebelum push"; axe-core 320 dan 430 dengan panel "Tentang" terbuka dan tertutup
   (harapan 0 pelanggaran); tinggi header tetap 44 px; panel tidak terpotong di 320. Sebut "tampilan berubah" (butir 11).
3. Kenali Calon menyimpan jawaban sensitif di `localStorage` kunci `kenalicalon_v1` pada origin yang sama. Tautan ini hanya
   tautan biasa; jangan menambah apa pun yang membaca atau membagi penyimpanan (aturan satu origin).

### Gelombang 2: keadaan
- Sesi ini berstatus menunggu Amal (URL Apps Script `/exec`; keputusan peringatan Arab/emoji di PDF). Itu keputusan Amal,
  bukan Auditor; tidak ada tindakan dari Auditor. Gelombang 1 tidak bergantung pada keduanya.

### Gelombang 3: penjaga aset yang dirujuk `index.html` **[DITAHAN: pipeline]**
- Celah **[Terverifikasi]** di `catatankajian`; **di repo ini belum diperiksa**. Simulasikan lokal dulu (hapus satu aset yang dirujuk,
  mis. `lib/jspdf-2.5.1.umd.min.js`, dari `_site/`; bila uji pasca-terbit tetap hijau, celah ada) dan catat.
- Bila ada: langkah uji tambahan yang mengumpulkan aset lokal yang dirujuk `index.html` dan wajib 200. Pola kerja: `deploy.yml`
  repo `kenalicalon`, langkah 4d dan 5. Berjalan setelah terbit; uji lain tidak dilonggarkan. Simulasikan jalur sukses dan gagal
  lokal. Satu push khusus.
- **Syarat:** satu kalimat ke Amal di chat PIC. Tanpa "ya", jangan push gelombang ini.

## 3. Lapor
Handoff PIC bagian baru: tabel gelombang, hasil uji (angka), run, hal yang menunggu Amal. Setelah selesai, beri tahu Auditor.

## 4. Verifikasi Auditor atas hasil PIC (22 Okt 2026, sore) **[Terverifikasi: git, Actions, uji ulang Auditor]**

| Butir | Hasil |
|---|---|
| Gelombang 1 (`44c0f1a`) | Diff `index.html`: satu entri `ABOUT.others` (Kenali Calon, URL persis Daftar resmi, urutan benar). Tinggi header 44/44/44 px (320/375/430) sama sebelum dan sesudah; axe dengan panel terbuka 0 pelanggaran di 320 dan 430. Run #14 success. |
| Gelombang 3 | Tetap **DITAHAN** (benar). Simulasi lokal PIC (celah ada di repo ini) diterima sebagai dasar. catatankajian sudah mendapat "ya" dan menerapkan pola serupa (`b66c872`, run #33 success); bisa dijadikan acuan di samping `kenalicalon`. Perlu "ya" Amal di chat PIC ini. |
| Koreksi uji sendiri (bagian 4 PIC) | Kesalahan dilaporkan terus terang; perbaikan (cetak hash berkas yang diuji) **diterima** sebagai praktik untuk semua repo. |
| Menunggu Amal | URL Apps Script `/exec` dan keputusan peringatan Arab/emoji di PDF: tidak berubah. |
