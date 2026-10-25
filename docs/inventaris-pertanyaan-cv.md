# Inventaris pertanyaan Bikin CV Taaruf

Dibuat dari `index.html` (komit ee6a7d8), konstanta `SCHEMA`. Hanya label pertanyaan, tanpa data pengguna.
Tanda `*` = wajib. `[jk]` = hanya tampil untuk jenis kelamin tertentu atau kondisi tertentu (`showIf`). Semua bagian B sampai N tercetak di PDF yang dikirim ke pihak lain (diperiksa pada PDF contoh: label dari tiap bagian ada di PDF), jadi menghapus atau memindah kolom mengubah dokumen yang diterima pihak itu.

Total: 108 kolom, 53 wajib.

## A. Persetujuan (halaman depan) (2 kolom, 2 wajib)

- `*` A.01 Saya mengisi data ini dengan sukarela dan sadar, untuk keperluan taaruf. (centang)
- `*` A.02 Saya paham CV ini bisa memuat data pribadi yang sensitif (misalnya kesehatan, status pernikahan sebelumnya). Saya setuju membagikannya ke orang yang saya tuju. (centang)

## B. Data Diri (11 kolom, 7 wajib)


**Identitas**

- `*` B.01 Nama lengkap (teks)
- `*` B.02 Nama panggilan (teks)
- `*` B.03 Jenis kelamin (pilihan)
- B.04 Tempat lahir (teks)
- `*` B.05 Tahun lahir (angka)

**Latar belakang dan status**

- B.06 Manhaj / mazhab yang diikuti (jika ada) (pilihan + catatan)
- `*` B.07 Suku (ayah - ibu) (teks)
- `*` B.08 Status pernikahan (pilihan)
- `*` B.09 Izin / restu orang tua atau wali untuk menikah (pilihan)
- B.10 Kewarganegaraan (teks)
- B.11 Bahasa yang dikuasai (teks)

## C. Domisili & Kontak (4 kolom, 2 wajib)


**Domisili dan asal**

- `*` C.02 Kota / kabupaten domisili (teks)
- `*` C.03 Kota asal (teks)

**Kontak**

- C.06 Kontak yang bisa dihubungi (teks)
- C.10 Akun media sosial (teks)

## D. Fisik & Kesehatan (12 kolom, 5 wajib)


**Fisik**

- `*` D.01 Tinggi badan (cm) (angka)
- `*` D.02 Berat badan (kg) (angka)
- D.03 Golongan darah (pilihan)
- D.04 Warna kulit (teks)
- D.05 Warna & tipe rambut (teks)
- D.06 Warna & bentuk mata (teks)
- D.07 Bentuk fisik / ciri khas (teks)

**Kesehatan**

- `*` D.08 Riwayat penyakit yang pernah / sedang diderita (teks panjang)
- `*` D.09 Cacat fisik / disabilitas (teks)

**Kebiasaan**

- `*` D.12 Kebiasaan merokok / alkohol / narkoba (pilihan + catatan)
- D.13 Pola makan / diet (kepatuhan halal) (teks)
- D.14 Pola tidur (teks)

## E. Pendidikan (3 kolom, 1 wajib)

- `*` E.01 Riwayat pendidikan formal (tabel)
- E.02 Pendidikan agama / non-formal (tabel)
- E.03 Pelatihan / sertifikasi (tabel)

## F. Pekerjaan & Aktivitas (9 kolom, 2 wajib)


**Pekerjaan saat ini**

- `*` F.01 Pekerjaan / profesi saat ini (teks)
- F.02 Deskripsi pekerjaan (tugas, hari dan jam kerja) (teks)

**Pengalaman**

- F.03 Riwayat pekerjaan sebelumnya (tabel)
- F.04 Pengalaman organisasi (tabel)
- F.05 Pengalaman kepanitiaan (tabel)
- F.06 Prestasi dan penghargaan (tabel)

**Keahlian, penghasilan, dan hobi**

- F.07 Keahlian khusus (teks)
- F.08 Penghasilan (kisaran per bulan) (pilihan + catatan)
- `*` F.09 Hobi (teks)

## G. Profil Diri & Karakter (12 kolom, 3 wajib)


**Tentang diri**

- `*` G.01 Siapa Anda? (deskripsi diri) (teks panjang)
- G.02 Motto hidup (teks)

**Kelebihan dan kekurangan**

- `*` G.03 Kelebihan saya (daftar)
- `*` G.04 Kekurangan saya (daftar)

**Minat dan pandangan**

- G.05 Hal yang disukai dan tidak disukai (teks)
- G.06 Bacaan favorit (teks)
- G.07 Tontonan / media favorit (teks)
- G.08 Tokoh idola (dalam / luar negeri) (teks)
- G.09 Kegiatan waktu luang (teks)
- G.10 Pergaulan dengan tetangga / lingkungan (teks)
- G.11 Keterlibatan dakwah / kegiatan sosial (teks)
- G.12 Pandangan tentang poligami (teks)

## H. Keluarga (8 kolom, 5 wajib)


**Orang tua**

- `*` H.02 Gambaran orang tua (teks panjang)
- `*` H.05 Status hidup / wafat orang tua (pilihan)
- `*` H.14 Wali nikah (pilihan) [jk]

**Saudara kandung**

- `*` H.12 Urutan anak (urutan anak)
- H.13 Gambaran saudara kandung (teks)

**Anak**

- `*` H.11 Status anak dari pernikahan sebelumnya (pilihan) [jk]
- H.09 Data anak (dari pernikahan sebelumnya) (tabel) [jk]

**Kondisi keagamaan keluarga**

- H.10 Kondisi keagamaan keluarga (teks)

## I. Ibadah & Kebiasaan (11 kolom, 3 wajib)


**Sholat dan puasa**

- `*` I.01 Sholat wajib (pilihan + catatan)
- `*` I.02 Sholat sunnah (teks)
- I.03 Puasa Ramadhan (teks)
- I.04 Puasa sunnah (teks)

**Al-Qur'an, dzikir, dan kajian**

- I.05 Zakat / infaq / sedekah (teks)
- `*` I.06 Tilawah dan hafalan Al-Qur'an (teks)
- I.07 Dzikir harian (teks)
- I.08 Pengajian rutin yang diikuti (teks)

**Lainnya**

- I.09 Haji / umrah (pilihan + catatan)
- I.10 Sholat Jumat / berjamaah di masjid (teks)
- I.11 Busana syar'i (pilihan + catatan)

## J. Kesiapan Menikah (9 kolom, 7 wajib)


**Kesiapan**

- `*` J.01 Kesiapan ilmu pranikah (teks)
- `*` J.02 Kesiapan mental / psikis (teks)
- `*` J.03 Kesiapan fisik / kesehatan (teks)
- `*` J.04 Kesiapan finansial (teks)
- J.09 Tanggungan nafkah keluarga (teks)
- `*` J.05 Kesiapan orang tua / wali (teks)

**Rencana dan komitmen**

- J.06 Tanggungan utang / cicilan (teks)
- `*` J.07 Rencana waktu menikah (teks)
- `*` J.08 Komitmen pribadi untuk mencapai harapan pernikahan (daftar)

## K. Visi & Nilai Pernikahan (5 kolom, 5 wajib)


**Tujuan**

- `*` K.01 Tujuan menikah (daftar)

**Visi, misi, dan nilai**

- `*` K.02 Visi pernikahan (teks panjang)
- `*` K.03 Misi pernikahan (teks panjang)
- `*` K.04 Nilai yang diusung setelah menikah (daftar)

**Rencana hidup**

- `*` K.05 Matriks rencana hidup (matriks)

## L. Rencana Pernikahan & Pasca-Nikah (12 kolom, 6 wajib)


**Acara pernikahan**

- L.01 Gambaran acara pernikahan (teks)
- L.02 Sumber dana acara pernikahan (pilihan)
- L.03 Mahar (teks)

**Setelah menikah**

- `*` L.04 Tempat tinggal setelah menikah (teks)
- `*` L.05 Kehidupan rumah tangga (pembagian peran) (teks)
- `*` L.06 Pekerjaan dan karier ke depan (teks)
- L.07 Pandangan tentang kebolehan istri bekerja (pilihan + catatan)
- `*` L.08 Jumlah anak dan pendidikan anak (teks)
- L.09 Pengelolaan keuangan keluarga (teks)

**Target bersama**

- `*` L.10 Peningkatan ilmu keislaman (teks)
- `*` L.11 Target bersama jangka pendek (1-3 tahun) (teks)
- L.12 Target bersama jangka panjang (di atas 5 tahun) (teks)

## M. Kriteria Calon Pasangan (6 kolom, 2 wajib)


**Kriteria utama**

- M.01 Kriteria mutlak (tidak bisa ditawar) (teks panjang)
- `*` M.02 Kriteria non-fisik yang diinginkan (tidak mutlak) (teks panjang)
- `*` M.03 Kriteria keagamaan calon (teks panjang)

**Kriteria lain**

- M.04 Mazhab / manhaj calon yang diinginkan (pilihan + catatan)
- M.05 Kriteria fisik (teks)
- M.06 Kriteria dari orang tua / wali (teks)

## N. Penutup (4 kolom, 3 wajib)


**Informasi tambahan**

- N.01 Informasi penting lain (teks panjang)

**Pernyataan dan tanda tangan**

- `*` N.02 Pernyataan: semua informasi di atas benar (centang)
- `*` N.03 Pernyataan: sudah siap menikah dan siap berikhtiar taaruf secara syar'i (centang)
- `*` N.04 Nama lengkap (sebagai tanda tangan) (teks)

