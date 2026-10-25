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
