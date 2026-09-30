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

## 4. Temuan lintas-project: tiga situs berbagi satu origin

Ditemukan saat membahas rencana interlink `bikin-cv-taaruf` ke `jadwalkajian`
dan `catatankajian`. Rencana interlink itu sendiri belum diputuskan Amal.

- **Fakta.** Ketiga situs dilayani dari `https://reconciler.github.io`. Origin
  browser dibentuk oleh skema, host, dan port; path tidak ikut. Akibatnya
  `localStorage` dipakai bersama oleh ketiga situs. Sumber:
  [MDN: Same-origin policy](https://developer.mozilla.org/en-US/docs/Web/Security/Defenses/Same-origin_policy)
  dan [catatan komunitas tentang GitHub Pages dan localStorage](https://tomashubelbauer.github.io/github-pages-local-storage/).
- **Dampak untuk `bikin-cv-taaruf`.** Draf CV (kunci `ctgv1_draft_v1`) memuat
  data sensitif, misalnya kesehatan dan status pernikahan sebelumnya. Skrip
  apa pun yang berjalan di dua situs lain secara teknis bisa membacanya.
  Ini bukan akibat interlink, tetapi interlink dan proyek baru jangan sampai
  memperluas paparan ini.
- **Yang perlu diperiksa Auditor atau PIC masing-masing** (PIC ini tidak bisa
  membaca repo lain):
  - Apakah `jadwalkajian` dan `catatankajian` memuat skrip pihak ketiga
    (analitik, pustaka dari CDN) atau membaca kunci `localStorage` milik
    proyek lain.
  - Semua proyek memakai awalan kunci yang unik. `bikin-cv-taaruf` memakai
    `ctgv1_`.
- **Pedoman untuk interlink.** Hanya tautan biasa. Jangan berbagi skrip,
  penyimpanan, iframe, atau `fetch` antarproyek.
- **Opsi jangka panjang** jika isolasi penuh diperlukan: origin terpisah per
  proyek (domain atau subdomain sendiri). Ada biaya dan pekerjaan tambahan.

Status: temuan dan usulan. Belum ada perubahan kode.
