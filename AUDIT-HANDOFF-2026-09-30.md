# Audit handoff — 2026-09-30

Dari: sesi PIC `bikin-cv-taaruf`
Untuk: sesi "Auditor Project"

Atas permintaan Amal, halaman depan ditulis ulang dan teks aplikasi
disederhanakan ke bahasa sehari-hari. Label versi tetap v7. Hosting tidak
berubah. Tidak ada data baru yang disimpan atau dikirim.

## 1. Menyentuh janji privasi (wajib lapor)

- **Klaim privasi di halaman depan ditulis ulang, maknanya sama.**
  - Sebelum: "Isian diproses di perangkat ini dan tidak dikirim ke server
    mana pun."
  - Sesudah: "Tidak dikirim ke server mana pun. Isian Anda hanya tersimpan di
    HP atau laptop ini."
- **Dua pernyataan persetujuan (A.01 dan A.02) disederhanakan.**
  - A.01 sebelum: "Saya mengisi data ini secara sukarela dan dengan
    kesadaran penuh, untuk keperluan ta'aruf."
  - A.01 sesudah: "Saya mengisi data ini dengan sukarela dan sadar, untuk
    keperluan taaruf."
  - A.02 sebelum: "Saya memahami dokumen ini dapat memuat data pribadi yang
    bersifat spesifik (mis. kesehatan, status pernikahan sebelumnya) dan
    menyetujui data ini dibagikan kepada pihak yang saya tuju sendiri."
  - A.02 sesudah: "Saya paham CV ini bisa memuat data pribadi yang sensitif
    (misalnya kesehatan, status pernikahan sebelumnya). Saya setuju
    membagikannya ke orang yang saya tuju."
  - **Perlu dicek Amal:** frasa "data pribadi yang bersifat spesifik" adalah
    istilah UU 27/2022 tentang Pelindungan Data Pribadi. Frasa itu diganti
    "data pribadi yang sensitif" supaya mudah dipahami. Jika frasa hukum asli
    sengaja dipilih, PIC akan mengembalikannya. Ini bukan nasihat hukum.
- **Celah "pintu masuk" ditutup.** Sebelumnya "Lanjutkan draf" dan file
  cadangan bisa langsung membuka formulir walau dua persetujuan dan jenis
  kelamin belum terisi (mis. pengguna hanya memilih jenis kelamin lalu menutup
  tab). Sekarang isian seperti itu dikembalikan ke halaman depan.

## 2. Perubahan lain (informasi)

- **Halaman depan:** judul menyebut hasil (satu file PDF siap kirim), tiga
  poin utama, sisanya di "Selengkapnya". Tombol "Mulai isi CV" selalu aktif
  dan ada petunjuk apa yang masih kurang. Pengunjung yang kembali hanya
  melihat satu tombol utama.
- **Bahasa sehari-hari** di seluruh menu, dialog, pesan, dan panel. Beberapa
  label isian ikut disederhanakan (mis. "napza" jadi "narkoba", "Kontak untuk
  tindak lanjut" jadi "Kontak yang bisa dihubungi"). Isi PDF sengaja tetap
  formal.
- **Konfirmasi sebelum menimpa isian tersimpan.** Membuka file cadangan dari
  halaman depan kini bertanya dulu jika sudah ada isian tersimpan. Sebelumnya
  pertanyaan itu hanya muncul saat sedang berada di formulir.
- **Ejaan diseragamkan menjadi "taaruf"**, termasuk di judul dan metadata PDF.
- **`CLAUDE.md`** ditambah bagian "Gaya bahasa" dan "Halaman depan (catatan
  desain)". Berkas ini boleh diubah Auditor.

## 3. Verifikasi PIC

- 63 pengecekan otomatis di Chromium (ponsel 390x844 dan desktop 1280x800):
  pengunjung baru, pengunjung kembali, sedang mengisi, file cadangan, mulai
  dari awal, menu, dan PDF. Semua lulus, tanpa galat konsol.
- axe-core: 0 pelanggaran aksesibilitas (terang, gelap, pengunjung kembali).
- Situs publik belum dicek langsung oleh PIC karena jaringan sesi memblokir
  `reconciler.github.io`. Status build GitHub Pages dicek lewat API.
