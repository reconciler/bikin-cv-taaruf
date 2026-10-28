# Balasan Auditor, 25 Okt 2026: komparasi pertanyaan Bikin CV Taaruf vs Kenali Calon

Dari: sesi "Auditor Project". Untuk: sesi kerja (PIC) `bikin-cv-taaruf`. Menjawab `AUDIT-HANDOFF-2026-10-25.md` (komit `e74b684`).
Penanda: **[Amal]** permintaan Amal (dari laporan PIC); **[Terverifikasi]** dihitung dari berkas sumber; **[Auditor]** penilaian Auditor.

## 1. Dasar dan metode

- **[Amal, lewat laporan PIC]** Amal meminta komparasi ini dan meminta Auditor yang menyusunnya. Premis: pengguna mengisi CV dulu, lalu memakai Kenali Calon; keduanya tidak boleh tumpang tindih.
- **Sumber [Terverifikasi]:** CV = `docs/inventaris-pertanyaan-cv.md` (komit `ee6a7d8`, 108 kolom, 53 wajib). Kenali Calon = `PANDUAN_DATA` di `index.html` repo `kenalicalon` (komit `f1fbd64`): 7 sesi, **170 pertanyaan**, ditambah 4 kolom penutup = 174.
- **Metode [Auditor]:** tiap kolom CV dicocokkan dengan teks pertanyaan Kenali Calon. Penilaian saya atas arti, bukan pencocokan kata, jadi **ada unsur subjektif**. Angka dihitung dari tabel pemetaan yang sama dengan yang tertulis di bawah (tidak dihitung manual).
- Tiga hubungan: **sama** = informasi yang sama ditanyakan dua kali (pengguna mengetik ulang); **melengkapi** = topik sama tetapi sudut atau kedalaman beda (mis. CV mencatat keadaan sekarang, Kenali Calon menanyakan rencana atau sikap); **tanpa padanan** = hanya ada di satu sisi. Hubungan **bertentangan** (panduan saling menyalahi): **tidak ditemukan**.

## 2. Ringkasan angka [Terverifikasi dari pemetaan]

| Sisi | Total | Sama | Melengkapi | Tanpa padanan |
|---|---|---|---|---|
| Kolom CV | 108 | 47 (44%) | 21 (19%) | 40 (37%) |
| Kolom CV **wajib** | 53 | 27 (51%) | 8 (15%) | 18 (34%) |
| Pertanyaan Kenali Calon | 174 | 44 (25%) | 16 (9%) | 114 (66%) |

- **Tumpang tindih nyata ada.** Hampir separuh kolom CV (dan separuh kolom wajibnya) menanyakan hal yang juga ditanyakan Kenali Calon. Dari sisi Kenali Calon, seperempat pertanyaan mengulang isi CV.
- **Hipotesis PIC terbukti sebagian.** Fakta identitas (B, C, E) hampir tidak tumpang tindih. Tumpang tindih terbesar: **J** Kesiapan (8 dari 9 sama), **L** Rencana pernikahan (9 dari 12), **G** Profil diri (8 dari 12), **I** Ibadah (5 sama + 5 melengkapi dari 11), **M** Kriteria (4 dari 6). Bagian **K** (visi dan nilai) 2 sama + 3 melengkapi.
- **Sesi Kenali Calon yang paling banyak mengulang CV:** Hari 3 (12 dari 22), Hari 2 (9 dari 28), Hari 5 (7 dari 23), Hari 1 (6 dari 24). Hari 7 (anak dan pengasuhan, 28 pertanyaan) hampir bebas dari CV (hanya 2).

## 3. Per bagian CV [Terverifikasi]

| Bagian | Kolom | Sama | Melengkapi | Tanpa padanan |
|---|---|---|---|---|
| A. Persetujuan (halaman depan) | 2 | 0 | 0 | 2 |
| B. Data Diri | 11 | 3 | 0 | 8 |
| C. Domisili & Kontak | 4 | 0 | 0 | 4 |
| D. Fisik & Kesehatan | 12 | 3 | 2 | 7 |
| E. Pendidikan | 3 | 0 | 0 | 3 |
| F. Pekerjaan & Aktivitas | 9 | 2 | 1 | 6 |
| G. Profil Diri & Karakter | 12 | 8 | 2 | 2 |
| H. Keluarga | 8 | 3 | 3 | 2 |
| I. Ibadah & Kebiasaan | 11 | 5 | 5 | 1 |
| J. Kesiapan Menikah | 9 | 8 | 1 | 0 |
| K. Visi & Nilai Pernikahan | 5 | 2 | 3 | 0 |
| L. Rencana Pernikahan & Pasca-Nikah | 12 | 9 | 3 | 0 |
| M. Kriteria Calon Pasangan | 6 | 4 | 1 | 1 |
| N. Penutup | 4 | 0 | 0 | 4 |

## 4. Tabel kolom CV ke Kenali Calon


**A. Persetujuan (halaman depan)**

| Kolom | W | Pertanyaan CV | Hubungan | Padanan Kenali Calon | Catatan |
|---|---|---|---|---|---|
| A.01 | * | Saya mengisi data ini dengan sukarela dan sadar, untuk keperluan taar… | tanpa padanan | - | persetujuan, bukan pertanyaan |
| A.02 | * | Saya paham CV ini bisa memuat data pribadi yang sensitif (misalnya ke… | tanpa padanan | - | persetujuan, bukan pertanyaan |

**B. Data Diri**

| Kolom | W | Pertanyaan CV | Hubungan | Padanan Kenali Calon | Catatan |
|---|---|---|---|---|---|
| B.01 | * | Nama lengkap | tanpa padanan | - |  |
| B.02 | * | Nama panggilan | tanpa padanan | - |  |
| B.03 | * | Jenis kelamin | tanpa padanan | - | KC meminta peran suami/istri di awal (input terpisah) |
| B.04 |  | Tempat lahir | tanpa padanan | - |  |
| B.05 | * | Tahun lahir | tanpa padanan | - |  |
| B.06 |  | Manhaj / mazhab yang diikuti (jika ada) | sama | d2q8 | manhaj yang diikuti |
| B.07 | * | Suku (ayah - ibu) | tanpa padanan | - |  |
| B.08 | * | Status pernikahan | sama | d2q15 | status sebelumnya |
| B.09 | * | Izin / restu orang tua atau wali untuk menikah | sama | d3q19 | restu orang tua |
| B.10 |  | Kewarganegaraan | tanpa padanan | - |  |
| B.11 |  | Bahasa yang dikuasai | tanpa padanan | - |  |

**C. Domisili & Kontak**

| Kolom | W | Pertanyaan CV | Hubungan | Padanan Kenali Calon | Catatan |
|---|---|---|---|---|---|
| C.02 | * | Kota / kabupaten domisili | tanpa padanan | - | KC d6q2 menanyakan kota setelah menikah (beda) |
| C.03 | * | Kota asal | tanpa padanan | - |  |
| C.06 |  | Kontak yang bisa dihubungi | tanpa padanan | - |  |
| C.10 |  | Akun media sosial | tanpa padanan | - | KC d6q15 soal media sosial setelah menikah (beda) |

**D. Fisik & Kesehatan**

| Kolom | W | Pertanyaan CV | Hubungan | Padanan Kenali Calon | Catatan |
|---|---|---|---|---|---|
| D.01 | * | Tinggi badan (cm) | tanpa padanan | - |  |
| D.02 | * | Berat badan (kg) | tanpa padanan | - |  |
| D.03 |  | Golongan darah | tanpa padanan | - |  |
| D.04 |  | Warna kulit | tanpa padanan | - |  |
| D.05 |  | Warna & tipe rambut | tanpa padanan | - |  |
| D.06 |  | Warna & bentuk mata | tanpa padanan | - |  |
| D.07 |  | Bentuk fisik / ciri khas | tanpa padanan | - | KC d3q9 menanyakan fisik pasangan ideal (kriteria, bukan diri) |
| D.08 | * | Riwayat penyakit yang pernah / sedang diderita | sama | d2q13 | riwayat penyakit pribadi dan keturunan |
| D.09 | * | Cacat fisik / disabilitas | melengkapi | d3q11 | CV mengungkap kondisi sendiri; KC menanyakan sikap terhadap kondisi pasangan |
| D.12 | * | Kebiasaan merokok / alkohol / narkoba | sama | d2q27, d2q28 | merokok dan alkohol |
| D.13 |  | Pola makan / diet (kepatuhan halal) | melengkapi | d2q11 | CV: kepatuhan halal; KC: pola makan sehat |
| D.14 |  | Pola tidur | sama | d2q11, d6q1 | pola tidur |

**E. Pendidikan**

| Kolom | W | Pertanyaan CV | Hubungan | Padanan Kenali Calon | Catatan |
|---|---|---|---|---|---|
| E.01 | * | Riwayat pendidikan formal | tanpa padanan | - |  |
| E.02 |  | Pendidikan agama / non-formal | tanpa padanan | - | dekat dengan d2q8 tetapi CV berupa riwayat, KC berupa yang diikuti kini |
| E.03 |  | Pelatihan / sertifikasi | tanpa padanan | - |  |

**F. Pekerjaan & Aktivitas**

| Kolom | W | Pertanyaan CV | Hubungan | Padanan Kenali Calon | Catatan |
|---|---|---|---|---|---|
| F.01 | * | Pekerjaan / profesi saat ini | tanpa padanan | - |  |
| F.02 |  | Deskripsi pekerjaan (tugas, hari dan jam kerja) | melengkapi | d2q20, d5q22 | CV: tugas dan jam kerja; KC: suasana kerja dan pembagian waktu |
| F.03 |  | Riwayat pekerjaan sebelumnya | tanpa padanan | - |  |
| F.04 |  | Pengalaman organisasi | tanpa padanan | - |  |
| F.05 |  | Pengalaman kepanitiaan | tanpa padanan | - |  |
| F.06 |  | Prestasi dan penghargaan | tanpa padanan | - |  |
| F.07 |  | Keahlian khusus | tanpa padanan | - |  |
| F.08 |  | Penghasilan (kisaran per bulan) | sama | d5q5, d5q6 | penghasilan (KC: nafkah/ekspektasi per bulan) |
| F.09 | * | Hobi | sama | d2q22 | hobi |

**G. Profil Diri & Karakter**

| Kolom | W | Pertanyaan CV | Hubungan | Padanan Kenali Calon | Catatan |
|---|---|---|---|---|---|
| G.01 | * | Siapa Anda? (deskripsi diri) | sama | d1q1 | deskripsi diri |
| G.02 |  | Motto hidup | melengkapi | d1q13 | motto vs prinsip hidup |
| G.03 | * | Kelebihan saya | sama | d1q1 | kelebihan |
| G.04 | * | Kekurangan saya | sama | d1q1 | kekurangan |
| G.05 |  | Hal yang disukai dan tidak disukai | sama | d1q3, d1q2 | yang disukai dan tidak disukai |
| G.06 |  | Bacaan favorit | sama | d2q25 | bacaan/buku |
| G.07 |  | Tontonan / media favorit | tanpa padanan | - |  |
| G.08 |  | Tokoh idola (dalam / luar negeri) | sama | d1q5 | tokoh idola/inspirasi |
| G.09 |  | Kegiatan waktu luang | sama | d2q22, d4q7 | waktu luang |
| G.10 |  | Pergaulan dengan tetangga / lingkungan | tanpa padanan | - |  |
| G.11 |  | Keterlibatan dakwah / kegiatan sosial | melengkapi | d4q27, d3q8 | CV: keterlibatan kini; KC: rencana setelah menikah |
| G.12 |  | Pandangan tentang poligami | sama | d4q24 | poligami |

**H. Keluarga**

| Kolom | W | Pertanyaan CV | Hubungan | Padanan Kenali Calon | Catatan |
|---|---|---|---|---|---|
| H.02 | * | Gambaran orang tua | sama | d2q17 | gambaran orang tua |
| H.05 | * | Status hidup / wafat orang tua | sama | d2q17 | orang tua masih lengkap atau tidak |
| H.14 | * | Wali nikah | tanpa padanan | - |  |
| H.12 | * | Urutan anak | tanpa padanan | - |  |
| H.13 |  | Gambaran saudara kandung | melengkapi | d2q17 | saudara kandung |
| H.11 | * | Status anak dari pernikahan sebelumnya | sama | d2q15 | punya anak dari pernikahan sebelumnya |
| H.09 |  | Data anak (dari pernikahan sebelumnya) | melengkapi | d2q15 | rincian anak |
| H.10 |  | Kondisi keagamaan keluarga | melengkapi | d2q17 | kondisi keagamaan keluarga asal |

**I. Ibadah & Kebiasaan**

| Kolom | W | Pertanyaan CV | Hubungan | Padanan Kenali Calon | Catatan |
|---|---|---|---|---|---|
| I.01 | * | Sholat wajib | sama | d1q21 | shalat wajib |
| I.02 | * | Sholat sunnah | sama | d1q21 | shalat sunnah |
| I.03 |  | Puasa Ramadhan | melengkapi | d1q21 | puasa Ramadhan (KC menyebut puasa sunnah) |
| I.04 |  | Puasa sunnah | sama | d1q21 | puasa sunnah |
| I.05 |  | Zakat / infaq / sedekah | tanpa padanan | - |  |
| I.06 | * | Tilawah dan hafalan Al-Qur'an | sama | d1q22, d1q21 | tilawah dan Qur'an |
| I.07 |  | Dzikir harian | melengkapi | d1q24, d1q21 | dzikir vs doa favorit |
| I.08 |  | Pengajian rutin yang diikuti | sama | d2q8 | pengajian yang diikuti |
| I.09 |  | Haji / umrah | melengkapi | d2q5, d2q6 | CV: status; KC: pandangan haji/umrah |
| I.10 |  | Sholat Jumat / berjamaah di masjid | melengkapi | d2q7 | CV: kebiasaan berjamaah; KC: pandangan tentang masjid |
| I.11 |  | Busana syar'i | melengkapi | d2q9, d6q13, d6q14 | CV: busana kini; KC: batas setelah menikah |

**J. Kesiapan Menikah**

| Kolom | W | Pertanyaan CV | Hubungan | Padanan Kenali Calon | Catatan |
|---|---|---|---|---|---|
| J.01 | * | Kesiapan ilmu pranikah | sama | d3q12 | kesiapan fiqh/ilmu |
| J.02 | * | Kesiapan mental / psikis | sama | d3q12 | kesiapan mental |
| J.03 | * | Kesiapan fisik / kesehatan | sama | d3q12 | kesiapan fisik |
| J.04 | * | Kesiapan finansial | sama | d3q12 | kesiapan finansial |
| J.09 |  | Tanggungan nafkah keluarga | sama | d5q16 | tanggungan nafkah keluarga |
| J.05 | * | Kesiapan orang tua / wali | sama | d3q19, d3q20 | restu/kesiapan orang tua |
| J.06 |  | Tanggungan utang / cicilan | sama | d5q15 | utang/cicilan |
| J.07 | * | Rencana waktu menikah | sama | d3q14 | target waktu menikah |
| J.08 | * | Komitmen pribadi untuk mencapai harapan pernikahan | melengkapi | d3q6 | komitmen pribadi vs gambaran keluarga ideal |

**K. Visi & Nilai Pernikahan**

| Kolom | W | Pertanyaan CV | Hubungan | Padanan Kenali Calon | Catatan |
|---|---|---|---|---|---|
| K.01 | * | Tujuan menikah | sama | d3q3 | tujuan/motivasi menikah |
| K.02 | * | Visi pernikahan | sama | d3q6, d3q7 | visi/gambaran keluarga |
| K.03 | * | Misi pernikahan | melengkapi | d3q7, d4q25 | misi vs pencapaian bersama |
| K.04 | * | Nilai yang diusung setelah menikah | melengkapi | d1q13, d4q25 | nilai yang diusung |
| K.05 | * | Matriks rencana hidup | melengkapi | d3q2, d5q13, d5q14 | CV: matriks rencana; KC: rencana dan target terpisah |

**L. Rencana Pernikahan & Pasca-Nikah**

| Kolom | W | Pertanyaan CV | Hubungan | Padanan Kenali Calon | Catatan |
|---|---|---|---|---|---|
| L.01 |  | Gambaran acara pernikahan | sama | d3q16 | konsep acara |
| L.02 |  | Sumber dana acara pernikahan | sama | d3q16 | biaya acara |
| L.03 |  | Mahar | sama | d3q15 | mahar |
| L.04 | * | Tempat tinggal setelah menikah | sama | d6q2, d6q3 | tempat tinggal |
| L.05 | * | Kehidupan rumah tangga (pembagian peran) | sama | d4q16, d6q4 | pembagian peran/pekerjaan rumah |
| L.06 | * | Pekerjaan dan karier ke depan | sama | d3q2, d5q22 | karier ke depan |
| L.07 |  | Pandangan tentang kebolehan istri bekerja | sama | d5q19 | istri bekerja |
| L.08 | * | Jumlah anak dan pendidikan anak | sama | d7q5, d7q23 | jumlah dan pendidikan anak |
| L.09 |  | Pengelolaan keuangan keluarga | sama | d5q9 | pengelolaan keuangan keluarga |
| L.10 | * | Peningkatan ilmu keislaman | melengkapi | d5q18, d4q25 | peningkatan ilmu keislaman bersama |
| L.11 | * | Target bersama jangka pendek (1-3 tahun) | melengkapi | d3q7 | target bersama jangka pendek |
| L.12 |  | Target bersama jangka panjang (di atas 5 tahun) | melengkapi | d3q7, d3q2 | target bersama jangka panjang |

**M. Kriteria Calon Pasangan**

| Kolom | W | Pertanyaan CV | Hubungan | Padanan Kenali Calon | Catatan |
|---|---|---|---|---|---|
| M.01 |  | Kriteria mutlak (tidak bisa ditawar) | sama | d3q10, d4q23 | kriteria mutlak / non-starter / dealbreaker |
| M.02 | * | Kriteria non-fisik yang diinginkan (tidak mutlak) | sama | d3q9 | kriteria non-fisik |
| M.03 | * | Kriteria keagamaan calon | melengkapi | d3q9 | kriteria keagamaan (KC tidak menanyakan khusus) |
| M.04 |  | Mazhab / manhaj calon yang diinginkan | tanpa padanan | - | KC tidak menanyakan manhaj calon |
| M.05 |  | Kriteria fisik | sama | d3q9 | kriteria fisik |
| M.06 |  | Kriteria dari orang tua / wali | sama | d3q20 | harapan orang tua tentang calon |

**N. Penutup**

| Kolom | W | Pertanyaan CV | Hubungan | Padanan Kenali Calon | Catatan |
|---|---|---|---|---|---|
| N.01 |  | Informasi penting lain | tanpa padanan | - | KC punya penutup bersama (p1-p4), beda fungsi |
| N.02 | * | Pernyataan: semua informasi di atas benar | tanpa padanan | - |  |
| N.03 | * | Pernyataan: sudah siap menikah dan siap berikhtiar taaruf secara syar… | tanpa padanan | - |  |
| N.04 | * | Nama lengkap (sebagai tanda tangan) | tanpa padanan | - |  |

## 5. Opsi dan rekomendasi (keputusan ada pada Amal)

Batas tetap: **tanpa berbagi data antar proyek** (satu origin, tautan biasa saja; janji privasi). Penghematan harus lewat isi pertanyaan, bukan pengisian otomatis.

| Opsi | Isi | Menyentuh CV? | Menghemat | Risiko |
|---|---|---|---|---|
| **A. Catatan di Kenali Calon** | Tambah teks tetap pada pertanyaan yang mengulang CV: "Sudah kamu tulis di CV? Lewati bila sama." | Tidak | Sebagian (pengguna tetap membaca) | Rendah |
| **B. Ubah pertanyaan Kenali Calon yang "sama" menjadi pertanyaan lanjutan** | Mis. "Bila sudah kamu tulis di CV, di sini ceritakan alasan dan contohnya." Fakta tidak ditanya ulang, yang digali alasan, sikap, dan skenario. | Tidak | Terbesar tanpa menyentuh CV: sampai 44 pertanyaan berubah dari fakta ke kedalaman | Sedang (ubah teks 44 pertanyaan; id tidak boleh berubah) |
| **C. Ramping-kan CV** | Pindahkan kolom pandangan (K, L, M, sebagian J dan G) dari CV ke Kenali Calon. | **Ya, besar** (skema, validasi 53 kolom wajib, PDF yang diterima pihak lain) | Terbesar di sisi CV (sampai 47 kolom, 27 wajib) | Tinggi: mengubah dokumen yang dibaca calon pasangan sebelum perkenalan |

- **[Auditor] Rekomendasi:** mulai dari **B** (dan **A** untuk yang tidak layak diubah). Alasan: tidak menyentuh dokumen yang dikirim ke pihak lain, tidak mengubah janji privasi, dan menghilangkan sebagian besar pengetikan ulang. **C** bergantung pada fungsi CV: bagian pandangan (K, L, M) mungkin sengaja ada di CV supaya calon bisa menilai kecocokan sebelum bertemu (dugaan PIC, masuk akal). Itu keputusan produk Amal.
- **Pembagian peran yang konsisten dengan data [Auditor]:** CV memuat fakta dan pernyataan ringkas yang perlu tertulis; Kenali Calon memuat alasan, skenario, dan hal yang belum bisa ditulis sebagai fakta (Hari 4 sampai 7 hampir seluruhnya begitu).
- **Temuan kecil:** peran suami/istri diminta di awal Kenali Calon, jenis kelamin diminta lagi di CV (B.03). Tidak bisa dihemat tanpa berbagi data; cukup dicatat.

## 6. Batas komparasi

- Pemetaan berdasarkan teks pertanyaan, bukan perilaku pengguna sebenarnya. Pengguna mungkin menjawab singkat di salah satu sisi sehingga beban nyata lebih kecil dari angka di atas.
- Kolom CV bersyarat (`showIf`) dan filter peran Kenali Calon (suami/istri) mengurangi jumlah yang dilihat satu pengguna; angka di atas menghitung semua.
- Saya tidak membuka PDF atau situs live; hanya inventaris dan data pertanyaan di git.

## 7. Langkah berikut

- PIC `bikin-cv-taaruf`: **tidak mengubah apa pun di CV** sebelum Amal memutuskan di chat PIC. Berkas ini hanya bahan keputusan.
- Ringkasan untuk Amal dikirim Auditor di chat. Bagian Kenali Calon (opsi A dan B) disalurkan ke PIC `kenalicalon` lewat berkas terpisah di repo itu, juga tanpa eksekusi sebelum keputusan Amal.

## 8. Keputusan Amal 25 Okt 2026: opsi C dieksekusi (instruksi untuk PIC)

- **[Keputusan Amal]** 25 Okt 2026 (chat Auditor), setelah membaca bagian 5: "Lakukan opsi C" (ramping-kan CV; pandangan dan rencana dipindah ke Kenali Calon).
- **[Auditor] Tafsir cakupan.** Opsi C di bagian 5 menyebut batas atas "sampai 47 kolom". Auditor mempersempit ke kolom yang **(a)** hubungannya "sama" dengan pertanyaan Kenali Calon, sehingga topiknya tidak hilang, dan **(b)** bersifat pandangan atau rencana, bukan fakta. Kolom "melengkapi" dan kolom fakta **tetap** di CV. Perluasan (mis. K.03-K.05, L.10-L.12, M.03) hanya atas permintaan Amal berikutnya.

### 8.1 Kolom yang dihapus dari CV (20 kolom, 11 wajib) [Terverifikasi dari inventaris dan pemetaan]

| Kolom | W | Pertanyaan CV | Padanan Kenali Calon | Contoh pertanyaan di Kenali Calon |
|---|---|---|---|---|
| J.01 | * | Kesiapan ilmu pranikah | d3q12 | Seberapa siap kamu menikah? Bagaimana persiapan fisik, pe… |
| J.02 | * | Kesiapan mental / psikis | d3q12 | Seberapa siap kamu menikah? Bagaimana persiapan fisik, pe… |
| J.03 | * | Kesiapan fisik / kesehatan | d3q12 | Seberapa siap kamu menikah? Bagaimana persiapan fisik, pe… |
| J.04 | * | Kesiapan finansial | d3q12 | Seberapa siap kamu menikah? Bagaimana persiapan fisik, pe… |
| G.12 |  | Pandangan tentang poligami | d4q24 | Bagaimana pandanganmu soal poligami? |
| K.01 | * | Tujuan menikah | d3q3 | Apa tujuan dan motivasi utamamu menikah? Kenapa sekarang,… |
| K.02 | * | Visi pernikahan | d3q6, d3q7 | Seperti apa gambaran keluarga ideal yang ingin kamu bangu… |
| L.01 |  | Gambaran acara pernikahan | d3q16 | Konsep acara sederhana atau resepsi besar? Siapa yang men… |
| L.02 |  | Sumber dana acara pernikahan | d3q16 | Konsep acara sederhana atau resepsi besar? Siapa yang men… |
| L.03 |  | Mahar | d3q15 | Bagaimana pandanganmu soal mahar? |
| L.04 | * | Tempat tinggal setelah menikah | d6q2, d6q3 | Setelah menikah, ingin tinggal di kota mana? |
| L.05 | * | Kehidupan rumah tangga (pembagian peran) | d4q16, d6q4 | Apa saja peran dan tugas ideal suami dan istri menurutmu? |
| L.06 | * | Pekerjaan dan karier ke depan | d3q2, d5q22 | Apa tujuan dan rencana hidupmu, termasuk karier, dalam 5–… |
| L.07 |  | Pandangan tentang kebolehan istri bekerja | d5q19 | Bagaimana pandanganmu tentang istri bekerja setelah menik… |
| L.08 | * | Jumlah anak dan pendidikan anak | d7q5, d7q23 | Berapa jumlah anak yang diinginkan, dan berapa jarak usia… |
| L.09 |  | Pengelolaan keuangan keluarga | d5q9 | Seperti apa gambaran belanja dan alokasi keuangan rumah t… |
| M.01 |  | Kriteria mutlak (tidak bisa ditawar) | d3q10, d4q23 | Non-starters: hal apa yang membuatmu langsung berhenti di… |
| M.02 | * | Kriteria non-fisik yang diinginkan (tidak mutlak) | d3q9 | Seperti apa pasangan idealmu (fisik dan non-fisik)? Karak… |
| M.05 |  | Kriteria fisik | d3q9 | Seperti apa pasangan idealmu (fisik dan non-fisik)? Karak… |
| M.06 |  | Kriteria dari orang tua / wali | d3q20 | Adakah harapan atau pesan ortu tentang calon menantu yang… |

- **Sesudah:** CV 108 jadi **88 kolom**, wajib 53 jadi **42**. Per bagian (jumlah/wajib): B 11/7, C 4/2, D 12/5, E 3/1, F 9/2, G 11/3, H 8/5, I 11/3, **J 5/3**, **K 3/3**, **L 3/2**, **M 2/1**, N 4/3, A 2/2. Bagian J, K, L, M menyusut, tidak hilang; sesuaikan pengantar dan urutannya.
- **Kolom yang tetap walau topiknya dekat:** J.05-J.09 (restu ortu, utang, waktu menikah, tanggungan, komitmen), K.03-K.05 (misi, nilai, matriks rencana hidup), L.10-L.12 (target bersama), M.03-M.04 (kriteria keagamaan dan manhaj), serta semua kolom fakta.
- **[Terverifikasi]** Tidak ada kolom lain di `SCHEMA` yang merujuk id di atas lewat `showIf` (dicek lewat parsing `SCHEMA`), dan id itu tidak muncul di kode di luar `SCHEMA`. PIC memeriksa ulang sebelum mengubah.

### 8.2 Syarat pelaksanaan

1. **Tanpa penghapusan data pengguna.** `applyDraft` menyimpan `dr.d` apa adanya, jadi jawaban lama untuk id yang dihapus tetap ada di draf dan berkas cadangan tetapi tidak tampil dan tidak tercetak. Biarkan begitu. Membersihkannya otomatis adalah penghapusan data (pengecualian butir 2) dan hanya boleh atas keputusan Amal di chat PIC. Uji: buka berkas cadangan lama yang memuat id yang dihapus, tidak ada galat, kolom lain terisi benar, PDF tidak memuat kolom yang dihapus.
2. **Perbarui semua yang bergantung pada jumlah atau daftar kolom:** `SCHEMA`, penghitung dan pesan "PDF belum bisa dibuat" (42 wajib), ringkasan, PDF, teks halaman depan atau bantuan yang menyebut bagian atau jumlah, `README.md`, `CLAUDE.md` (bagian khusus repo), `docs/inventaris-pertanyaan-cv.md`.
3. **Uji ulang** (butir 13 dan 19): suite alur, axe formulir (320/375/430, terang/gelap), 4 kasus PDF, header 44 px, laporan error, dan impor cadangan lama (butir 1). Sebut "tampilan dan skema berubah" (butir 11).
4. **Opsional, tampilan:** satu kalimat penunjuk di halaman depan atau awal bagian J/K/L/M: pandangan dan rencana pernikahan dibahas di Kenali Calon, dengan tautan biasa ke `https://reconciler.github.io/kenalicalon/` (`target="_blank" rel="noopener noreferrer"`). Tanpa berbagi data, tanpa parameter pelacak.
5. **Urutan:** satu push untuk perubahan skema (kode + inventaris + uji), push dokumen terpisah. Verifikasi run `success` tiap push.

### 8.3 Konfirmasi di chat PIC

- Perubahan skema besar menurut `AUDIT-HANDOFF-2026-10-25.md` bagian 4 butuh keputusan Amal di chat PIC. Keputusan Amal di chat Auditor tercatat di atas, tetapi **daftar 20 kolom adalah tafsiran Auditor**. **[Usulan]** PIC menampilkan daftar 8.1 ke Amal di chat PIC dalam satu pesan dan melanjutkan bila Amal menjawab setuju atau tidak keberatan. Bila Amal ingin lebih sempit atau lebih luas, ikuti jawabannya dan catat.

### 8.4 Dampak ke Kenali Calon [Terverifikasi dari pemetaan]

- Setelah opsi C: CV 88 kolom (sama 27, melengkapi 21, tanpa padanan 40). Pertanyaan Kenali Calon yang masih mengulang CV turun dari 44 jadi **24** (umumnya fakta dan kebiasaan: profil diri, ibadah, kesehatan, status, restu ortu, penghasilan, utang). 20 pertanyaan Kenali Calon tidak lagi mengulang CV dan menjadi **satu-satunya tempat** topiknya.
- Sisa 24 itu ditangani di bagian 9 (instruksi untuk Kenali Calon di repo `kenalicalon`, bagian 8 handoff Auditor di sana); bukan bagian opsi C dan tidak mengubah kode repo ini.

## 9. Kolom CV yang jadi pemegang topik (catatan simetris; tidak ada perubahan kode di repo ini)

- **[Keputusan Amal]** 25 Okt 2026 (chat Auditor): "Ok tolong siapkan perintah eksekusi" atas klasifikasi pengurangan 24 pertanyaan Kenali Calon yang masih mengulang CV (rincian dan status konfirmasi: `kenalicalon/AUDIT-HANDOFF-2026-10-25-auditor.md` bagian 8). Di sisi Kenali Calon: 10 pertanyaan akan dipensiunkan dan 7 dipotong teksnya, karena topiknya sudah ada di CV. **Status 25 Okt 2026, 09:00 UTC: sudah dikerjakan dan tayang** (Kenali Calon 164 pertanyaan; diverifikasi Auditor, `kenalicalon/AUDIT-HANDOFF-2026-10-25-auditor.md` bagian 9 dan 10). Larangan menghapus 25 kolom di bawah kini berlaku penuh.
- **Akibat untuk repo ini:** 25 kolom CV di bawah menjadi **satu-satunya tempat** topik yang dipotong atau dipensiunkan di Kenali Calon. **Jangan menghapus atau mengubah artinya tanpa koordinasi dengan Auditor** (jika tidak, topiknya hilang dari kedua produk). Aturan ini berlaku sejak sekarang, tidak menunggu Tahap B di Kenali Calon terbit; tidak satu pun dari 25 kolom ada di daftar 20 kolom bagian 8.1 [Terverifikasi dari inventaris].
- B.06, B.08, B.09, D.08, D.12, F.09, G.01, G.03, G.04, G.05, G.06, G.08, G.09, H.02, H.05, H.11, I.01, I.02, I.04, I.06, I.08, J.05, J.06, J.07, J.09.
- **Dua koreksi atas pemetaan bagian 4 [Terverifikasi dari `SCHEMA`]:** D.08 hanya mencatat penyakit pribadi (penyakit keturunan tidak ada di CV, jadi tetap ditanyakan di Kenali Calon); B.08 hanya Perjaka/Gadis/Duda/Janda (pertunangan tidak ada di CV, jadi tetap ditanyakan di Kenali Calon).
- Tidak ada tindakan kode untuk PIC repo ini. Cukup catat daftar di atas di `CLAUDE.md` bagian khusus repo bila PIC menilai perlu, dan konfirmasi 8.3 (daftar 20 kolom) ke Amal di chat PIC tetap berlaku terpisah.

## 10. Verifikasi Auditor atas opsi C (25 Okt 2026, setelah laporan PIC `AUDIT-HANDOFF-2026-10-25.md` bagian 6)

Penanda: **[Diperiksa Auditor]** dijalankan Auditor sendiri dari git/API; **[Laporan PIC]** diambil dari laporan PIC, tidak dijalankan ulang.

- **[Diperiksa Auditor]** `SCHEMA` di `d72b9f2` dibanding `HEAD`: 108 menjadi **88** kolom, wajib 53 menjadi **42**; id yang hilang **persis** 20 id di 8.1; tidak ada kolom baru; tidak ada `showIf` yang menunjuk id hilang; id hilang tidak muncul di kode lain.
- **[Diperiksa Auditor]** Kolom tersisa yang berubah isi hanya J.09, K.03, M.03, dan hanya bidang `grp` (judul grup dipindah). Dari 25 kolom pemegang topik, hanya J.09 yang berubah (`grp`); artinya tidak berubah. Catatan: kalimat "tidak ada yang disentuh" di 6.3 kurang tepat karena J.09 menerima judul grup.
- **[Diperiksa Auditor]** Diff `index.html` di luar `SCHEMA`: CSS `.kcnote`, dua pengantar bagian (K, L), dan satu baris yang menyisipkan `#kcnote` di J-M mode isian. Link ke Kenali Calon diambil dari `ABOUT` (tab baru), tanpa skrip atau penyimpanan bersama.
- **[Diperiksa Auditor, via API Actions]** Run #28 (`8679611`, opsi C) `success`, termasuk "Uji situs setelah deploy" dan "Uji aset yang dirujuk beranda". Run #29 (`bc36a17`, hanya dokumen) **gagal di langkah `Deploy`**: `Failed to get ID Token ... Request timeout` (timeout OIDC di sisi GitHub). Bukan isi situs: `bc36a17` hanya mengubah `CLAUDE.md` dan handoff, jadi situs live tetap hasil #28. Auditor menjalankan `rerun_failed_jobs` satu kali (kesalahan metode Auditor): re-run **di tempat gagal lagi** dengan `Multiple artifacts named "github-pages" ... Artifact count is 2`, karena re-run mengunggah artefak kedua di run yang sama. Itu keterbatasan re-run untuk alur upload-pages-artifact, bukan masalah isi. **Jangan re-run di tempat untuk workflow ini; pakai push baru atau `workflow_dispatch`.** Run baru #30 (`05bc068`, komit dokumen Auditor, berkas situs identik dengan #28) **success**, termasuk "Uji situs setelah deploy" dan "Uji aset yang dirujuk beranda" [Diperiksa Auditor via API Actions, 25 Okt 07:50 UTC]. Jadi `main` kini punya deploy hijau dan tidak ada tindak lanjut. Run #29 tetap merah di riwayat (timeout OIDC di sisi GitHub).
- **[Laporan PIC, tidak dijalankan ulang]** uji skema 91/91, alur 113/113, axe 0, impor cadangan lama, 4 kasus PDF, header 44 px.
- **Penyimpangan kecil dari 8.2 butir 4 (opsional):** `#kcnote` ditambahkan atas penafsiran PIC terhadap "Silakan eksekusi sesuai perintah auditor". Itu perubahan tampilan yang tidak dijawab Amal secara eksplisit. PIC sudah menandainya dan menyebut cara membuangnya (satu blok). Diterima sementara; **Amal diminta menegaskan**.
- **Jawaban atas pertanyaan terbuka PIC (6.5):** Kenali Calon memang menghasilkan sesuatu untuk dikirim ke calon: `CLAUDE.md` Kenali Calon menyatakan jawaban "disalin ke clipboard untuk dikirim ke calon pasangan" (tombol "Salin jawaban"). Jadi topik yang dipindah dari CV tidak hilang dari alur, tetapi pengguna harus mengirimnya sendiri secara terpisah dari PDF CV. [Terverifikasi dari `CLAUDE.md` kenalicalon.] Apakah itu dapat diterima untuk penerima CV adalah keputusan produk Amal.
- Masih menunggu Amal: nama bagian K dan L (usulan PIC "Misi & Nilai" dan "Target Bersama"), kalimat penunjuk, cek perangkat nyata.

### 10.1 Uji independen Auditor atas opsi C (25 Okt 2026, 09:55 UTC; menutup butir 2 sampai 4 pengecekan terjadwal)

**[Diperiksa Auditor]** Chromium headless, jaringan luar diblokir, `index.html` repo `d4de802` (sha256 berkas uji `f97f4c8e…`). Satu-satunya perbedaan dari berkas repo: satu baris pengait uji di akhir skrip (`Object.assign(window,{F,S,...})`), karena skrip aplikasi dibungkus IIFE. Hasil **27/27 lulus**:

| Butir | Hasil |
|---|---|
| Skema | 88 kolom, 42 wajib; wajib yang tampak 40 (Ikhwan) dan 40 (Akhwat) |
| Impor cadangan lama (pengendali asli `fileLoadButton` -> `applyDraft`) berisi ke-20 id yang dihapus + kolom lain | masuk formulir tanpa galat; ke-20 kunci **tetap ada** di draf tersimpan (tidak dibuang); kolom lain terisi benar |
| Layar setelah impor, semua 13 bagian | tidak ada isi dari id dihapus; tidak ada label kolom yang dihapus |
| Pesan "PDF belum bisa dibuat" | angka di pesan = hitungan wajib kosong yang tampak (35 pada data uji) |
| PDF Ikhwan dan Akhwat, data lengkap (40 wajib terpenuhi) | terbentuk, 8 halaman; **tidak** memuat isi id dihapus maupun label 20 kolom itu; 4 label kolom pemegang topik tetap tercetak; judul bagian K "MISI & NILAI PERNIKAHAN" dan L "TARGET BERSAMA SETELAH MENIKAH" ada, judul lama tidak |
| `#kcnote` | hanya di J, K, L, M mode isian; href `https://reconciler.github.io/kenalicalon/`, `target=_blank`, `rel="noopener noreferrer"` |
| Header | 44 px di 320/375/430, tanpa geser horizontal |
| axe-core 4.10.2 | **0 pelanggaran** di 32 pemindaian (beranda + bagian B, G, J, K, L, M, N; 320/430; terang/gelap) |
| Jaringan / konsol | satu-satunya permintaan luar yang dicoba: `fonts.googleapis.com` (sudah ada sebelumnya, diblokir); tidak ada galat konsol atau halaman |

- **Kesalahan skrip uji Auditor, diperbaiki sebelum lulus:** (a) hitungan canary yang diharapkan keliru (21, seharusnya 20: L.04 sudah termasuk 20 id); (b) pembungkus teks PDF salah tingkat (`jsPDF.API.text` tidak ada di 2.5.1; diganti pembungkus instance); (c) pola judul PDF peka huruf besar-kecil, padahal PDF mencetak judul huruf besar tanpa awalan huruf. Tidak satu pun temuan produk.
- **Batas:** tidak diuji di Safari/seluler nyata; PDF diperiksa dari teks yang dikirim ke jsPDF, bukan dari tampilan render; tampilan visual tidak dinilai (aturan 11).

## 11. Verifikasi Auditor atas perubahan skema 25 sampai 28 Okt dan pembaruan angka acuan (28 Okt 2026, head `72b6342`)

Penanda: **[Diperiksa Auditor]** dijalankan Auditor sendiri; **[Laporan PIC]** tidak dijalankan ulang; **[Penilaian Auditor]** kesimpulan, bukan sumber eksternal.

### 11.1 Verifikasi
- **[Diperiksa Auditor]** `SCHEMA` `caaa784` (terakhir diverifikasi) dibanding `HEAD`: 88 menjadi **82** kolom, wajib 42 menjadi **41**, sesuai laporan PIC (`AUDIT-HANDOFF-2026-10-25.md` bagian 9 dan 10, `AUDIT-HANDOFF-2026-10-28.md`). Pensiun: E.01-E.03, F.03-F.06, J.08, K.04. Baru: E.04, F.10, J.10 (wajib: E.04, J.10; E.01 dan J.08 dan K.04 wajib sebelumnya).
- **[Diperiksa Auditor]** **25 kolom pemegang topik utuh:** semua ada, label, tipe, dan status wajib identik. Satu-satunya perubahan pada kolom itu (dan 28 kolom lain) adalah contoh jawaban (`extra.ph`/`hint`), sesuai fitur "contoh jawaban" yang dilaporkan.
- **[Diperiksa Auditor]** Uji independen Auditor (Chromium, jaringan luar diblokir, salinan `index.html` repo + satu baris pengait uji) **27/27 lulus**: 82 kolom dan 41 wajib; impor cadangan lama yang memuat 22 id pensiun (20 opsi C + J.08 + K.04) tanpa galat dan kunci tetap di draf; tidak ada isi atau label id pensiun di layar atau PDF; PDF Ikhwan dan Akhwat terbentuk; label kolom pemegang topik tetap tercetak; `#kcnote` hanya di J-M; header 44 px di 320/375/430; axe 0 pelanggaran di 32 pemindaian.
- **[Diperiksa Auditor]** Run Actions untuk komit PIC dan komit dokumen `success` (cek terakhir: #45, run sesudahnya masih berjalan saat dicatat).
- **[Laporan PIC, tidak dijalankan ulang]** migrasi E.01-E.03 ke E.04 dan F.03-F.06 ke F.10 pada tiga jalur masuk, idempotensi penanda `F.06>F.10`, uji skema 120/120, uji gabungan 57/57. Migrasi tidak saya uji ulang.
- **Dua catatan:** (a) judul bagian K berganti lagi menjadi "K. Misi & Rencana Hidup" atas kesimpulan PIC (bagian 9.2), bukan pertanyaan terpisah ke Amal; dampak tampilan kecil dan konsisten dengan penghapusan K.04, diterima. (b) Uji Auditor 25 Okt memakai judul "Misi & Nilai Pernikahan"; ekspektasinya diperbarui, bukan temuan produk.

### 11.2 Pembaruan angka acuan (menjawab permintaan PIC, bagian 9.3)
- **[Penilaian Auditor]** Pemetaan: E.01-E.03, F.03-F.06 (semua "tanpa padanan") dan J.08, K.04 dikeluarkan; E.04 dan F.10 "tanpa padanan"; **J.10 "melengkapi d3q7"** (target pribadi tahun pertama vs pencapaian bersama; beririsan tema dengan L.11 di dalam CV, bukan fakta yang sama dengan pertanyaan Kenali Calon mana pun).
- Angka sekarang (dihitung dari `SCHEMA` `HEAD` dan `PANDUAN_DATA` kenalicalon `HEAD`):

| Sisi | Jumlah | Rincian |
|---|---|---|
| CV | 82 kolom (41 wajib) | tanpa padanan 35, melengkapi 31 (termasuk 5 kolom yang kini beririsan dengan 7 pertanyaan Kenali Calon yang sudah dipotong), sama 5, **pemegang tunggal 11** (padanan Kenali Calon sudah pensiun: B.09, D.12, F.09, G.05, G.06, G.08, I.01, I.02, I.03, I.04, J.09) |
| Kenali Calon | 164 pertanyaan | tanpa padanan 130, melengkapi 20, disederhanakan 7, masih "sama" menurut pemetaan mentah 7 (d1q22, d2q11, d3q20, d4q7, d5q5, d5q6, d6q1; dinilai sudut berbeda dan sengaja dipertahankan, lihat `kenalicalon` handoff bagian 8.4) |
- **Pertanyaan tidak boleh diulang di keduanya** tetap berlaku: sebelum menambah atau mengubah pertanyaan, bandingkan dengan tabel ini dan pemetaan bagian 4 yang diperbarui di atas.
- **Batas:** analisis hanya antar-produk. Tumpang tindih di dalam CV (mis. J.10 dan L.11, G.01 dan G.03/G.04) tidak dianalisis.
