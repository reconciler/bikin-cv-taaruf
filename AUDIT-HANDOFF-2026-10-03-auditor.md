# Instruksi Auditor — 3 Okt 2026 (aturan lintas-repo dan ekstraksi aturan)

Dari: sesi "Auditor Project" (`session_01V7K2gPxpghoLSqB74zsXWV`)
Untuk: sesi PIC `bikin-cv-taaruf`

Penanda: **[Terverifikasi]** = diperiksa Auditor langsung. **[Keputusan Amal]** = disampaikan Amal di chat Auditor.

## 1. Dasar
- **[Keputusan Amal]** 3 Okt 2026: bagian "Aturan lintas-repo" ditulis ke ketiga `CLAUDE.md`, dan tiap PIC diminta mengekstrak aturan berguna dari obrolannya dengan Amal.
- Instruksi ini tercatat di git sehingga boleh dieksekusi sesuai aturan "Eksekusi instruksi Auditor"; butir yang menyentuh `deploy.yml` tetap menunggu konfirmasi Amal di chat PIC.

## 2. Perubahan Auditor 3 Okt 2026 (atas keputusan Amal: "eksekusi semua usulanmu")

- `CLAUDE.md` mendapat bagian **"Aturan lintas-repo"** (13 butir; teks **identik** di ketiga repo, diverifikasi dengan diff).
  Baca bagian itu sebelum bekerja; ia berlaku sebagai aturan tetap.
- `CLAUDE.md` bikin-cv-taaruf: ditambah catatan verifikasi situs live (sesi kerja tidak bisa membuka `reconciler.github.io`).

### 2.1 Butir untuk PIC bikin-cv-taaruf
- **Butir A (dokumen, boleh langsung):** tugas ekstraksi di 2.2.
- Praktik aksesibilitas (axe-core) Anda diangkat menjadi aturan lintas-repo butir 13; tidak ada pekerjaan tambahan untuk repo ini. Bila ada cara memasang atau menjalankan axe-core yang berhasil di sesi kerja, catat caranya singkat di `CLAUDE.md` (bagian "Uji sebelum push") supaya dua PIC lain bisa meniru.

### 2.2. Tugas: ekstrak aturan berguna dari obrolan Anda dengan Amal

Amal meminta tiap PIC mengekstrak aturan dan keputusan yang berguna dari obrolannya dengan Anda dan belum tertulis
formal. Auditor sudah melakukannya untuk sesi Auditor dan dokumen di git; **chat langsung Amal dengan Anda tidak
terjangkau dari sesi Auditor**, jadi hanya Anda yang bisa melakukannya.

**Sumber:** seluruh riwayat percakapan sesi Anda dengan Amal (termasuk bagian sebelum pemadatan konteks), pesan
komit, dan handoff Anda.

**Yang dicari:** keputusan, aturan, atau preferensi Amal yang **berlaku ke depan** dan belum ada di `CLAUDE.md`
repo inidan `README.md`. Abaikan keputusan sekali pakai yang sudah selesai dan status pekerjaan.

**Format tiap butir** (tabel di handoff Anda): aturan (satu kalimat) | sumber (kutipan pendek Amal + tanggal, atau
"praktik" bila belum diputuskan Amal) | cakupan (repo ini saja atau lintas-repo) | status (sudah tertulis di mana,
atau belum) | usulan teks (maksimal dua baris).

**Cara memproses:**
- Butir yang **keputusan eksplisit Amal dan khusus repo ini**: tambahkan langsung ke `CLAUDE.md` repo ini, ringkas
  (rincian panjang ke `docs/` bila repo punya), dan catat di handoff Anda.
- Butir **lintas-repo** atau yang hanya **praktik** (belum diputuskan Amal): jangan ditulis ke `CLAUDE.md`; cukup
  didaftar di handoff. Auditor yang menyatukan supaya bagian "Aturan lintas-repo" tetap identik di ketiga repo, lalu
  Amal memutuskan.
- Jangan mengubah kode atau workflow untuk tugas ini. Jaga `CLAUDE.md` tetap ringkas (tambahan sekitar 30 baris
  paling banyak).
- **Jangan menyalin data pribadi atau sensitif** (isi CV, kontak, kredensial, token); kutip seperlunya.

**Lapor:** commit ke repo (jalur utama). Beri tahu Auditor lewat pesan hanya sebagai tambahan.
