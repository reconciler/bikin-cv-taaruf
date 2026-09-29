# Bikin CV Taaruf

Aplikasi web satu berkas (`index.html`) untuk menyusun CV taaruf dan mengekspornya ke PDF. Versi: **v7**.

## Cara pakai

- Buka `index.html` langsung di peramban (tanpa instalasi atau build), atau
- Aktifkan GitHub Pages (Settings → Pages → pilih branch yang berisi `index.html`, folder `/`) lalu buka URL yang diberikan.

## Catatan teknis

- Seluruh HTML, CSS, dan JavaScript aplikasi ada di `index.html`.
- Dependensi:
  - [jsPDF 2.5.1](https://github.com/parallax/jsPDF) (lisensi MIT) untuk membuat PDF, disimpan di `lib/jspdf-2.5.1.umd.min.js` (salinan dari paket npm `jspdf@2.5.1`).
  - Google Fonts: Bricolage Grotesque dan Public Sans, dimuat dari server Google.
- Isian dan draf hanya diproses dan disimpan di peramban pengguna (`localStorage`); isian tidak pernah dikirim ke server mana pun. Satu-satunya permintaan ke pihak ketiga adalah pemuatan font dari Google Fonts, yang (seperti situs web pada umumnya) membuat alamat IP pengunjung terlihat oleh Google.
- Cadangan draf dapat diunduh sebagai `cadangan-bikin-cv-taaruf.json`.
