# Handoff PIC, 25 Okt 2026: permintaan komparasi pertanyaan CV vs Kenali Calon (untuk Auditor)

Dari: sesi PIC `bikin-cv-taaruf`. Untuk: sesi "Auditor Project". Bagian "Untuk repo lain" sesuai `CLAUDE.md` (Proyek terkait dan sinkronisasi).
Penanda: **[Amal]** keputusan Amal di chat PIC; **[Terverifikasi]** diperiksa PIC; **[Kesimpulan PIC]** dugaan PIC, belum diuji terhadap Kenali Calon.

## 1. Permintaan

- **[Amal, chat PIC, 25 Okt]** Amal meminta komparasi konteks pertanyaan antara `bikin-cv-taaruf` dan `kenalicalon`, dan **meminta Auditor yang menyusunnya**.
- **Premis Amal:** kedua proyek dipakai pengguna **berurutan**: bikin CV dulu, lalu berkenalan memakai Kenali Calon. Karena itu kedua proyek seharusnya **tidak tumpang tindih**, demi menghemat tenaga pengguna.
- Alasan diminta ke Auditor: PIC repo ini tidak punya akses ke isi pertanyaan `kenalicalon` (repo di luar cakupan sesi, situs live diblokir). Auditor bisa membaca keduanya.

## 2. Bahan dari sisi CV

- **[Terverifikasi]** `docs/inventaris-pertanyaan-cv.md`: 108 kolom (53 wajib) dengan id, label, jenis, tanda wajib dan kondisi. Dibuat dari `SCHEMA` di `index.html`; hanya label, tanpa data pengguna.
- **[Terverifikasi]** Semua bagian B sampai N tercetak di PDF yang dikirim ke pihak lain (label dari tiap bagian ada di PDF contoh).
- Bagian: Data Diri 11, Domisili 4, Fisik & Kesehatan 12, Pendidikan 3, Pekerjaan 9, Profil Diri 12, Keluarga 8, Ibadah 11, Kesiapan Menikah 9, Visi & Nilai 5, Rencana Nikah 12, Kriteria Calon 6, Penutup 4 (+ 2 persetujuan di halaman depan).
- **[Kesimpulan PIC, hipotesis]** Fakta identitas (B, C, D, E, F) kecil kemungkinan tumpang tindih. Risiko terbesar ada di bagian pandangan dan rencana: K (visi, misi, nilai, matriks rencana hidup), L (peran rumah tangga, anak, keuangan, tempat tinggal), M (kriteria calon), J (kesiapan), I (ibadah), H (keluarga). Perlu dicocokkan dengan isi Kenali Calon.

## 3. Hasil yang diminta (usulan format)

- Tabel per tema: pertanyaan di CV | pertanyaan di Kenali Calon | hubungan (**sama / saling melengkapi / bertentangan / tanpa padanan**) | usulan (pertahankan di CV, pindah, sederhanakan, hapus di salah satu).
- Ringkasan angka: berapa kolom CV punya padanan di Kenali Calon, dan sebaliknya.
- Usulan pembagian peran. **[Kesimpulan PIC]** CV memuat fakta dan pernyataan yang perlu tertulis dan dikirim; Kenali Calon memuat pertanyaan untuk digali bersama saat berkenalan dan tidak mengulang fakta di CV.
- Keluarannya sebagai berkas di git (jalur andal), dan ringkasan ke Amal.

## 4. Batas dan hal yang perlu dipertimbangkan

- **Tanpa berbagi data antar proyek** untuk "menghemat tenaga" (pengisian otomatis lintas proyek). Keempat situs satu origin, tetapi itu mengubah janji privasi dan melanggar aturan "tautan biasa saja". Penghematan harus lewat desain isi pertanyaan.
- **CV adalah dokumen yang dikirim ke calon pasangan sebelum perkenalan.** **[Kesimpulan PIC]** Bagian pandangan (K, L, M) mungkin sengaja ada di CV supaya calon bisa menilai kecocokan sebelum bertemu. Menghapusnya mengubah dokumen yang diterima pihak lain, bukan hanya mengurangi tenaga pengguna. Ini keputusan produk Amal.
- **Mengubah, memindah, atau menghapus kolom CV = perubahan skema form yang besar**: wajib lapor dan perlu keputusan Amal di chat PIC (butir 1 dan 2). Kolom wajib (53) menentukan pesan "PDF belum bisa dibuat"; kolom yang dihapus atau dilonggarkan mengubah validasi, ringkasan, dan PDF.
- PIC **tidak mengubah apa pun di CV** sebelum ada hasil komparasi dan keputusan Amal. Setelah itu PIC menerapkan, menguji (alur, axe, PDF, header), dan melaporkan.

## 5. Status

- **Menunggu Auditor:** komparasi (bagian 3). **Menunggu Amal:** keputusan setelah komparasi.
- Hal lain yang masih terbuka dari handoff 22 Okt bagian 12 (cek perangkat nyata; uji laporan error di browser seluler dan Safari) tidak berubah.

## 6. Pelaksanaan opsi C (menjawab `AUDIT-HANDOFF-2026-10-25-auditor.md` bagian 8; skema berubah, wajib lapor)

Penanda: **[Amal]** chat PIC; **[Terverifikasi]** diuji PIC; **[Kesimpulan PIC]** tafsiran PIC.

### 6.1 Konfirmasi 8.3
- PIC menampilkan daftar 20 kolom ke Amal di chat PIC dalam satu pesan (25 Okt), beserta dampak (PDF yang diterima calon tidak lagi memuat topik itu, jawaban lama tidak dihapus, judul grup yang hilang, pengantar K dan L) dan dua pertanyaan: setuju daftar? kalimat penunjuk (8.2 butir 4)?
- **[Amal, chat PIC, 25 Okt]** "Silakan eksekusi sesuai perintah auditor".
- **[Kesimpulan PIC]** Jawaban itu dibaca sebagai setuju daftar apa adanya dan setuju kalimat penunjuk, karena yang terakhir tercantum di instruksi Auditor (8.2 butir 4) dan PIC menyarankannya. Bila Amal tidak menghendakinya, hapus satu blok `#kcnote` (kecil).

### 6.2 Pemeriksaan PIC sebelum mengubah [Terverifikasi]
- 20 id ada di `SCHEMA`; 11 di antaranya wajib; hasil **88 kolom, 42 wajib**, per bagian sama dengan 8.1 (G 11/3, J 5/3, K 3/3, L 3/2, M 2/1).
- Tidak ada `showIf` yang merujuk id itu; id tidak muncul di kode di luar `SCHEMA`; penghitung wajib, ringkasan, dan PDF dihitung dari `SCHEMA` sehingga ikut berubah tanpa kode tambahan.
- **Temuan PIC, belum ada di 8.1:** kolom yang dihapus membawa **judul grup** di J, K, dan M (kolom pertama yang tersisa jadi tanpa judul), dan pengantar bagian K dan L menyebut topik yang dihapus. Ditangani di bawah.

### 6.3 Perubahan (komit `8679611`, run 28 `success`)
- `SCHEMA`: 20 kolom dihapus. Judul grup dipindah ke kolom pertama yang tersisa: J.09 "Kesiapan", K.03 "Misi dan nilai", M.03 "Kriteria utama" (L tetap "Target bersama").
- Pengantar K: "Misi, nilai, dan rencana hidup Anda dalam pernikahan."; L: "Target bersama Anda setelah menikah."
- Kalimat penunjuk (`#kcnote`) di awal J, K, L, M mode isian: "Pandangan dan rencana pernikahan Anda dibahas di Kenali Calon, bukan di CV ini." dengan link biasa ke `https://reconciler.github.io/kenalicalon/` (tab baru, `noopener noreferrer`). Tanpa skrip, penyimpanan, atau parameter pelacak.
- `docs/inventaris-pertanyaan-cv.md` dibuat ulang (88 kolom, catatan 25 kolom pemegang topik); `README.md` menyebut pembagian peran. `CLAUDE.md`: bagian baru "Isi formulir (catatan desain)" (komit dokumen terpisah).
- **Tanpa penghapusan data (8.2 butir 1):** jawaban lama tetap di isian dan file cadangan; tidak tampil dan tidak tercetak.
- 25 kolom pemegang topik (catatan simetris bagian 9 Auditor) tidak ada yang disentuh; daftarnya dicatat di `CLAUDE.md`.
- **Belum diubah:** nama bagian K ("Visi & Nilai") dan L ("Rencana Nikah") tidak lagi pas dengan isinya. Usulan: K "Misi & Nilai", L "Target Bersama". Menunggu keputusan Amal (tampilan).

### 6.4 Uji [Terverifikasi, Chromium headless; build uji dibandingkan dengan berkas repo lewat hash]
- Uji baru skema dan dampak: **91/91**. Isi: jumlah dan wajib per bagian; 20 id hilang; 25 pemegang topik dan kolom yang tetap ada; tidak ada `showIf` menggantung; penyebut penghitung wajib = 40 untuk Ikhwan dan Akhwat (51 sebelumnya); judul grup; kalimat penunjuk hanya di J-M mode isian (link, tab baru, rel); axe 0 pelanggaran di bagian J, K, L, M pada 320/390/430 px terang dan gelap; tanpa geser horizontal.
- **Impor cadangan lama (8.2 butir 1):** berkas cadangan berisi semua id yang dihapus dengan teks canary dibuka lewat input berkas asli: tanpa galat, kolom lain terisi benar, jawaban lama tetap di memori, kolom yang dihapus tidak tampil di J, K, L, M, G, tombol PDF tetap menghasilkan PDF, dan PDF **tidak** memuat canary maupun label topik yang dihapus, sementara label kolom yang tetap tercetak.
- Regresi: alur 113/113 (laporan error mati, alamat palsu, alamat asli); axe formulir 0 (39 pemindaian); laporan error 47/47 dan 46/46; panel Tentang 84/84; peringatan karakter 36/36; header 44 px di 16 kombinasi dengan font asli; 4 kasus PDF utuh (halaman: Akhwat penuh 10→9, minimal 7→6, kasus ekstrem 12→10); `_site` hanya dua berkas.
- Tampilan dan skema berubah (butir 11); belum dilihat di perangkat nyata.

### 6.5 Yang perlu diketahui
- **Dampak ke penerima CV:** PDF tidak lagi memuat tujuan menikah, visi, kesiapan, peran rumah tangga, anak, mahar, kriteria pasangan, dan poligami. Pihak lain hanya melihatnya bila pengguna membahasnya lewat Kenali Calon. **[Kesimpulan PIC]** Belum diketahui apakah Kenali Calon menghasilkan sesuatu yang dikirim ke calon; itu di luar jangkauan PIC repo ini.
- **Menunggu Amal:** nama bagian K dan L; cek perangkat nyata; apakah jawaban lama perlu dibersihkan nanti (tidak dikerjakan).
- **Menunggu Auditor:** memverifikasi (urutan proyek baru, langkah 5).

## 7. Insiden CI run #29, koreksi laporan, dan jawaban Auditor (25 Okt, setelah bagian 10 handoff Auditor)

### 7.1 Insiden run #29 (komit hanya-dokumen `bc36a17`) [Terverifikasi: API Actions dan log langkah]
- **Percobaan 1:** langkah `Deploy` gagal: `Failed to get ID Token ... Request timeout: /idtoken/...` (timeout layanan token OIDC di sisi GitHub; saran "Ensure GITHUB_TOKEN has permission id-token: write" hanya teks bawaan, `deploy.yml` sudah punya `id-token: write` dan run #28 menit sebelumnya sukses). Langkah uji pasca-terbit dilewati. Situs live tidak terpengaruh: `bc36a17` hanya dokumen, situs tetap hasil run #28.
- **Percobaan 2** (dimulai Auditor lewat `rerun_failed_jobs`; dua panggilan `rerun_failed_jobs` PIC ditolak 403 "already running" dan tidak membuat apa pun) **gagal berbeda:** `Multiple artifacts named "github-pages" were unexpectedly found ... Artifact count is 2`. Penyebab: menjalankan ulang job dalam run yang sama mengunggah artefak `github-pages` kedua, dan `deploy-pages` menolak nama ganda. Bukan lanjutan masalah OIDC.
- **Perbaikan:** PIC menjalankan **run baru** lewat `workflow_dispatch` pada `main` (run #31, komit `05bc068`, artefak baru): `success`, semua langkah hijau termasuk "Uji situs setelah deploy" dan "Uji aset yang dirujuk beranda".
- Dua sesi (PIC dan Auditor) sama-sama mencoba menjalankan ulang run yang sama pada saat yang berdekatan. Tidak berbahaya di sini, tetapi sebaiknya hanya satu sesi yang menangani kegagalan CI satu repo.

### 7.2 Untuk repo lain (jadwalkajian, catatankajian, kenalicalon) [Kesimpulan PIC dari kejadian di atas]
- Pada workflow Pages yang memakai `upload-pages-artifact` lalu `deploy-pages` (pola yang sama di keempat repo), **jangan memakai `rerun_failed_jobs` / "Re-run failed jobs"** bila kegagalan terjadi setelah artefak diunggah: percobaan ulang akan gagal dengan "Multiple artifacts named github-pages". Pakai **run baru** (`workflow_dispatch` atau push), yang membuat artefak baru. Timeout OIDC sendiri bersifat sementara.
- Auditor bisa menyalurkannya sebagai catatan di `CLAUDE.md` bagian hosting tiap repo bila dianggap perlu.

### 7.3 Koreksi laporan PIC (bagian 6.3)
- Kalimat "25 kolom pemegang topik ... tidak ada yang disentuh" **kurang tepat**: J.09 menerima judul grup "Kesiapan" (bidang `grp`); artinya tidak berubah. Diperiksa dan dikoreksi oleh Auditor (bagian 10), diterima PIC. Daftar 20 id yang dihapus tidak memuat satu pun dari 25 kolom itu.

### 7.4 Jawaban Auditor atas pertanyaan terbuka (6.5), diterima [Laporan Auditor, tidak diperiksa PIC]
- Kenali Calon menghasilkan sesuatu untuk dikirim ke calon ("Salin jawaban", ke clipboard); jadi topik yang dipindah tidak hilang dari alur, tetapi dikirim terpisah dari PDF CV. **[Kesimpulan PIC]** Dampak ke penerima CV tetap ada: PDF tidak lagi memuat topik itu, dan calon baru melihatnya bila pengguna mengirim jawaban Kenali Calon. Keputusan produk Amal.

### 7.5 Masih menunggu Amal
- Menegaskan kalimat penunjuk `#kcnote` (tafsiran PIC atas "Silakan eksekusi sesuai perintah auditor"; mudah dibuang).
- Nama bagian K ("Misi & Nilai") dan L ("Target Bersama"); cek perangkat nyata.

## 8. Dua butir "Menunggu Amal" dilaksanakan (25 Okt, setelah bagian 7)

- **[Amal, chat PIC, 25 Okt]** "Silakan eksekusi poin 1 dan 2". **[Kesimpulan PIC]** Dibaca sebagai dua butir pertama dari daftar "Menunggu Anda" di laporan PIC: (1) tegaskan kalimat penunjuk ke Kenali Calon, (2) ganti nama bagian K dan L sesuai usulan PIC. Butir 3 (cek perangkat nyata) tidak termasuk dan tetap menunggu.
- **Butir 1:** kalimat penunjuk `#kcnote` **dipertahankan**; dengan ini terjawab permintaan Auditor (bagian 10 handoff Auditor) agar Amal menegaskannya. Tidak ada perubahan kode.
- **Butir 2:** nama bagian diganti (`SCHEMA.sections`, id tetap): K "Misi & Nilai" (judul "K. Misi & Nilai Pernikahan"), L "Target Bersama" (judul "L. Target Bersama Setelah Menikah"). Nama lama ("Visi & Nilai", "Rencana Nikah", "Rencana Pernikahan & Pasca-Nikah") tidak ada lagi di layar maupun PDF.
- **Uji [Terverifikasi, Chromium headless; build uji dicocokkan dengan berkas repo lewat hash]:** uji skema dan dampak 96/96 (5 pengecekan baru: judul bagian K dan L, tombol "Lanjut ke bagian", daftar bagian, nama lama tidak muncul di layar, PDF memuat judul baru dan tidak memuat yang lama); alur 113/113 (laporan error mati, alamat palsu, alamat asli); axe formulir 0 (39 pemindaian); laporan error 47/47 dan 46/46; panel Tentang 84/84; peringatan karakter 36/36; header 44 px di 16 kombinasi dengan font asli; 4 kasus PDF utuh (6, 9, 10, 6 halaman); `_site` hanya dua berkas.
- **Run:** #34 (`d144c6b`, kode dan inventaris) `success`, termasuk "Uji situs setelah deploy" dan "Uji aset yang dirujuk beranda". `docs/inventaris-pertanyaan-cv.md` dibuat ulang dengan nama baru.
- Tampilan berubah (butir 11): judul dua bagian di kartu bagian, daftar bagian, tombol lanjut, dan judul di PDF; belum dilihat di perangkat nyata.
- **Masih menunggu Amal:** cek perangkat nyata (layar J sampai M, peringatan karakter, bilah laporan error, uji laporan di browser seluler dan Safari). Tidak ada instruksi Auditor yang terbuka untuk repo ini.

## 9. Review beban pertanyaan oleh Amal (25 Okt, setelah bagian 8): tiga butir dikerjakan

Penanda: **[Amal]** chat PIC; **[Terverifikasi]** diuji PIC; **[Kesimpulan PIC]** tafsiran PIC. Menyangkut skema form (wajib lapor; koordinasi dengan pemetaan Auditor).

### 9.1 Permintaan dan keputusan
- **[Amal]** Tujuan: memastikan pengguna paham dan tidak kewalahan oleh banyaknya pertanyaan. Tiga butir: (1) gabungkan form pendidikan formal dan informal, (2) ganti butir komitmen untuk mencapai harapan nikah dengan target dalam setahun menikah, (3) hapus butir nilai pernikahan karena ekspektasinya akan terlihat saat mengobrol di Kenali Calon. Amal mengatakan "so far" (masih berjalan): butir lain mungkin menyusul.
- Dua butir bermakna ganda; Amal memilih (opsi yang disarankan PIC): **(1)** satu tabel 4 kolom (Jenis, Jenjang atau program, Institusi atau lembaga, Tahun) yang menggabungkan formal, agama/non-formal, dan pelatihan/sertifikasi; **(2)** "target di setahun pertama setelah menikah", daftar 1-3 butir. Butir 3 jelas.

### 9.2 Perubahan (komit `0c95c6f`, run #38 `success`)
| Sebelum | Sesudah |
|---|---|
| E.01 (wajib), E.02, E.03: tiga tabel | **E.04** "Riwayat pendidikan dan pelatihan": satu tabel, wajib minimal 1 baris, maksimal 12 |
| J.08 "Komitmen pribadi untuk mencapai harapan pernikahan" (wajib, daftar 1-3) | **J.10** "Target Anda di tahun pertama pernikahan" (wajib, daftar 1-3), id baru |
| K.04 "Nilai yang diusung setelah menikah" (wajib, daftar 1-5) | dihapus |
- Total **88 → 85 kolom, wajib 42 → 41**. Per bagian: E 3/1 → 1/1, J 5/3 (sama), K 3/3 → 2/2. Penyebut penghitung Ikhwan dan Akhwat 40 → 39.
- Bagian K diganti nama lagi karena "Nilai" sudah tidak ada: "Misi & Rencana" (judul "K. Misi & Rencana Hidup"); grup K.03 "Misi". **[Kesimpulan PIC]** Konsekuensi langsung dari butir 3; tidak ditanyakan terpisah. Pengantar bagian E diperbarui.
- **Migrasi jawaban lama, tanpa penghapusan data:** `migrateData()` menyalin baris E.01-E.03 lama ke E.04 (Formal: jenjang + jurusan, tahun masuk-lulus; Agama dan non-formal: program; Pelatihan dan sertifikasi: nama pelatihan, penyelenggara) hanya bila E.04 belum ada. Kunci lama dibiarkan. Jawaban J.08 dan K.04 lama tidak dipindah (J.08 artinya berbeda, K.04 dihapus) dan tetap tersimpan, tidak tampil, tidak tercetak.
- Ringkasan "Pendidikan terakhir" di PDF ditulis ulang: baris Formal dengan tahun terbesar (bila tidak ada tahun, baris Formal terakhir).
- 25 kolom pemegang topik tidak disentuh (tidak ada E.\*, J.08, K.04 di daftar itu). `docs/inventaris-pertanyaan-cv.md` dan `README.md` diperbarui; `CLAUDE.md` bagian "Isi formulir" diperbarui di komit dokumen terpisah.

### 9.3 Untuk Auditor (pemetaan komparasi)
- **K.04** di pemetaan Auditor "melengkapi d1q13, d4q25": topik nilai tetap ada di Kenali Calon, jadi tidak hilang dari kedua produk (sesuai alasan Amal).
- **E.01-E.03** "tanpa padanan": tidak ada dampak ke Kenali Calon (E.02 dekat dengan d2q8 tetapi berbeda: riwayat vs yang diikuti kini).
- **J.08** dulu "melengkapi d3q6"; **J.10** adalah kolom baru tanpa pemetaan. **[Kesimpulan PIC]** J.10 sedikit beririsan secara tema dengan L.11 ("Target bersama jangka pendek 1-3 tahun", melengkapi d3q7) tetapi berbeda: J.10 target pribadi di tahun pertama, L.11 target bersama. Mohon Auditor memperbarui pemetaan dan angka acuan (E.04, J.10; K.04 dan E.01-E.03 pensiun).
- Dampak ke penerima CV: PDF tidak lagi memuat "Nilai yang diusung"; pendidikan tampil dalam satu tabel dengan kolom Jenis.

### 9.4 Uji [Terverifikasi, Chromium headless; build uji dicocokkan dengan berkas repo lewat hash]
- Uji skema dan dampak **120/120** (baru: tabel E.04 menampilkan 4 baris dan 4 kolom hasil migrasi pada tiga jalur masuk: lanjutkan isian, file cadangan asli, muat awal sebelum pintu masuk lengkap; kunci lama tidak berubah; E.04 yang sudah ada tidak ditimpa; draf tanpa E.01-E.03 tidak menghasilkan E.04; J.10 ada dan J.08 tidak; K hanya K.03 dan K.05; PDF memuat baris tabel, "Pendidikan terakhir: S1 Teknik - UI", dan target J.10, tanpa label lama, tanpa "Komitmen pribadi" atau "Nilai yang diusung"; axe 0 pada bagian E, J, K, L, M di 320/390/430 px terang dan gelap).
- Regresi: alur 113/113 (laporan error mati, alamat palsu, alamat asli); axe formulir 0 (39 pemindaian); laporan error 47/47 dan 46/46; panel Tentang 84/84; peringatan karakter 36/36; header 44 px di 16 kombinasi dengan font asli; 4 kasus PDF utuh (6, 8, 10, 6 halaman); `_site` hanya dua berkas.
- **Kesalahan uji PIC, diperbaiki:** `site-test.js` mengisi form dari `copy.json`, dump skema lama (108 kolom) yang belum memuat E.04 dan J.10, sehingga PDF tertahan validasi dan uji gagal; `copy.json` dibuat ulang dari skema sekarang (85 kolom, 41 wajib). `cw-real.js` juga salinan usang yang masih menyebut E.01; dibuat ulang. Keduanya skrip uji, bukan aplikasi. Hasil uji sebelumnya hari ini tetap sah (kolom wajib yang ada waktu itu masih tercakup isiannya).
- Tampilan dan skema berubah (butir 11); belum dilihat di perangkat nyata.

### 9.5 Yang perlu diketahui
- **Menunggu Amal:** butir lanjutan dari review beban pertanyaan ("so far"); cek perangkat nyata.
- **Belum terbukti:** perilaku migrasi pada draf nyata pengguna di browser seluler dan Safari; hanya diuji di Chromium.
- **Info beban saat ini [Terverifikasi dari skema]:** 39 wajib terlihat per pengguna Ikhwan atau Akhwat; 10 di antaranya "berat" (area teks, daftar, tabel, matriks), termasuk deskripsi diri minimal 100 kata (G.01), kelebihan dan kekurangan (G.03, G.04), gambaran orang tua (H.02), riwayat penyakit (D.08), misi (K.03), matriks rencana hidup 8 sel (K.05), kriteria keagamaan (M.03), target tahun pertama (J.10). Bahan bagi review lanjutan Amal.
