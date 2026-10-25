# Bikin CV Taaruf

Aplikasi web satu berkas (`index.html`) untuk menyusun CV taaruf dan mengekspornya ke PDF. Versi: **v7**.

CV ini memuat fakta dan pernyataan ringkas yang perlu dikirim ke pihak lain. Pandangan dan rencana pernikahan (tujuan menikah, visi, peran rumah tangga, kriteria pasangan, dan sejenisnya) dibahas di [Kenali Calon](https://reconciler.github.io/kenalicalon/), bukan di CV ini. Sejak 25 Okt 2026 formulir berisi 88 kolom (42 wajib).

## Cara pakai

- Buka `index.html` langsung di peramban (tanpa instalasi atau build), atau
- Aktifkan GitHub Pages (Settings → Pages → pilih branch yang berisi `index.html`, folder `/`) lalu buka URL yang diberikan.

## Catatan teknis

- Seluruh HTML, CSS, dan JavaScript aplikasi ada di `index.html`.
- Dependensi:
  - [jsPDF 2.5.1](https://github.com/parallax/jsPDF) (lisensi MIT) untuk membuat PDF, disimpan di `lib/jspdf-2.5.1.umd.min.js` (salinan dari paket npm `jspdf@2.5.1`).
  - Google Fonts: Bricolage Grotesque dan Public Sans, dimuat dari server Google.
- Isian dan draf hanya diproses dan disimpan di peramban pengguna (`localStorage`); isian tidak pernah dikirim ke server mana pun. Satu-satunya permintaan ke pihak ketiga adalah pemuatan font dari Google Fonts, yang (seperti situs web pada umumnya) membuat alamat IP pengunjung terlihat oleh Google.
- Cadangan draf diunduh sebagai `cadangan-bikin-cv-taaruf.json` hanya saat pengguna menekan tombol "Cadangkan" atau "Unduh cadangan sekarang". Tidak ada unduhan otomatis.
- Font bawaan PDF hanya memuat huruf Latin. Kalau isian memuat huruf Arab, emoji, atau simbol lain yang tidak bisa dicetak, formulir memberi tahu sejak awal (di bagian Data Diri dan di Selengkapnya halaman depan), lalu menampilkan peringatan di bawah kolom itu dan di bagian Penutup. PDF tetap bisa dibuat; font Arab sengaja tidak disematkan.
- Laporan error bersifat opsional: kalau terjadi error, aplikasi menanyakan dulu dan hanya mengirim laporan teknis (tanpa isian CV) ke Google Sheet milik pembuat setelah pengguna menekan "Kirim laporan". Tanpa persetujuan itu tidak ada yang dikirim.
