# Handoff PIC, 28 Okt 2026: pengalaman kerja dan organisasi digabung jadi satu form (untuk Auditor)

Dari: sesi PIC `bikin-cv-taaruf`. Untuk: sesi "Auditor Project". Lanjutan dari `AUDIT-HANDOFF-2026-10-25.md` (bagian 9 dan 10).
Penanda: **[Amal]** keputusan Amal di chat PIC; **[Terverifikasi]** diperiksa PIC lewat ukur atau uji; **[Kesimpulan PIC]** dugaan atau pilihan PIC.

## 1. Permintaan dan perubahan (skema berubah, wajib lapor)

- **[Amal, chat PIC, 28 Okt]** "Tolong simplify kolom pertanyaan pengalaman kerja. Dimerge saja jadi cukup satu form untuk semua jenis pengalaman kerja atau organisasi."
- **[Kesimpulan PIC]** Dibaca sebagai F.03, F.04, F.05 (tiga tabel). F.06 "Prestasi dan penghargaan" **tidak** digabung karena isinya prestasi, bukan pengalaman; tidak ditanyakan ke Amal.

| Sebelum | Sesudah (komit `38805f4`) |
|---|---|
| F.03 Riwayat pekerjaan sebelumnya (Instansi / usaha, Jabatan, Tahun; maks 6) | **F.10** "Pengalaman kerja dan organisasi": satu tabel, opsional, maksimal 18 baris |
| F.04 Pengalaman organisasi (Nama organisasi, Jabatan, Tahun; maks 6) | kolom: **Jenis** (Pekerjaan atau usaha / Organisasi / Kepanitiaan), **Instansi, organisasi, atau kegiatan**, **Jabatan atau peran**, **Tahun** |
| F.05 Pengalaman kepanitiaan (Nama kegiatan, Penyelenggara, Jabatan; maks 6) | satu baris petunjuk di bawah label ("Satu baris untuk satu pengalaman: ...") |
- Total **85 menjadi 83 kolom, wajib tetap 41** (ketiganya opsional). Bagian F: 9 menjadi 7 kolom, wajib tetap 2. Judul grup "Pengalaman" pindah ke F.10.
- **Id pensiun, jangan dipakai ulang:** F.03, F.04, F.05 (selain E.01-E.03, J.08, K.04 dari bagian 9). Id, label, dan tipe ke-82 kolom lain tidak berubah (dicek dengan membandingkan SCHEMA lama dan baru).
- **Maksimal 18 baris [Kesimpulan PIC]:** sama dengan batas lama 6+6+6, supaya migrasi tidak memotong data pengguna.
- **Migrasi jawaban lama, tanpa penghapusan data:** `migrateData()` menyalin baris F.03, F.04, F.05 ke F.10 hanya bila F.10 belum ada. Tidak menimpa, dan F.03-F.05 asli tetap tersimpan (hanya tidak tampil dan tidak tercetak). Penyelenggara kepanitiaan dimasukkan ke kolom nama dalam kurung ("Seminar Pranikah (BEM)") supaya tidak hilang; kolom Tahun kosong untuk baris asal F.05 (kolom itu tidak ada di F.05).
- Dampak ke penerima CV: PDF memuat satu tabel "Pengalaman kerja dan organisasi" (kolom Jenis menjelaskan tiap baris) sebagai ganti tiga tabel; judul lama tidak ada lagi.

## 2. Dampak ke pemetaan komparasi (untuk Auditor)

- F.03, F.04, F.05 di pemetaan `AUDIT-HANDOFF-2026-10-25-auditor.md` tercatat **"tanpa padanan"** dengan Kenali Calon, jadi **tidak ada dampak** ke Kenali Calon. F.10 juga tanpa padanan.
- 25 kolom pemegang topik: **tidak disentuh** (tidak ada F.03-F.05 di daftar itu; F.09 Hobi tidak berubah).
- `docs/inventaris-pertanyaan-cv.md` dan `CLAUDE.md` bagian "Isi formulir" diperbarui. `README.md` tidak menyebut jumlah kolom atau tabel ini, jadi tidak diubah.

## 3. Uji [Terverifikasi, Chromium headless; build uji = berkas repo + pengait uji, selisih 57 byte]

- **Uji baru gabungan: 42/42.** Skema bagian F; tampilan (satu tabel, label kolom, pilihan Jenis, petunjuk terlihat dan `aria-describedby`, tambah baris, tersimpan otomatis, tanpa geser horizontal di 320 px); migrasi lewat tiga jalur (Lanjutkan isian, file cadangan, muat awal sebelum pintu masuk lengkap); kasus tepi (F.10 sudah ada tidak ditimpa, F.10 sengaja dikosongkan tidak diisi ulang, tanpa data lama tidak dibuat, baris kosong atau null dirapikan, nilai bukan array diabaikan tanpa galat, batas 18 baris sementara F.03 asli tetap 10 baris); PDF memuat F.10 dan tidak memuat judul lama.
- Uji skema 120/120 (konstanta diperbarui: 83 kolom, bagian F 7/2, id pensiun bertambah; **bukti sensitivitas:** pada build lama uji yang sama gagal di 4 titik). Uji contoh jawaban 96/96 (ekspektasi diperbarui: F.10 punya petunjuk, 83 kolom).
- Regresi pada build uji dan build real (alamat laporan asli): alur 113/113, axe 0 pelanggaran (39 pemindaian, 13 bagian), laporan error 46/46 dan 47/47, panel Tentang 84/84, peringatan karakter 36/36, header 44 px di 320-1280 px, PDF 4 kasus terbentuk tanpa karakter rusak.
- **Kesalahan uji PIC, diperbaiki:** dua kali. (1) Skrip uji migrasi memanggil fungsi Node di dalam `page.evaluate` (browser); (2) uji autosave membaca `localStorage` sebelum jeda 250 ms (`saveDraftSoon`) berlalu. Keduanya salah di skrip uji, bukan di aplikasi; autosave diperiksa terpisah dan tersimpan benar. Selain itu, pengecekan "id lama tidak ada lagi" di uji skema memakai daftar yang ditulis ulang di dalam `evaluate`, bukan konstanta `GONE2`, sehingga edit konstanta saja tidak akan menguji F.03-F.05; daftar itu diperbaiki.
- Tampilan berubah (butir 11). Tangkapan layar 320 px terang dan gelap dilihat PIC; belum dilihat di perangkat nyata.

## 4. Yang perlu diketahui

- **Belum terbukti:** perilaku migrasi pada draf nyata di browser seluler dan Safari (hanya diuji di Chromium); tampilan di perangkat nyata.
- **Perubahan perilaku:** pengguna yang sudah mengisi tiga tabel lama melihat satu tabel gabungan saat membuka isian. Jawaban lama tidak hilang, dan tidak dimigrasi ulang kalau F.10 sudah ada.
- **Keputusan menunggu Amal:** apakah F.06 Prestasi ikut digabung (saat ini tidak); apakah tabel perlu contoh jawaban per kolom (tabel sengaja tanpa contoh, lihat `CLAUDE.md`); butir lanjutan review beban pertanyaan.
