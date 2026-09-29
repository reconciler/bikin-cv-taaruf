# Bikin CV Taaruf

Aplikasi web satu berkas (`index.html`) untuk menyusun CV taaruf dan mengekspornya ke PDF. Versi: **v7**.

## Cara pakai

- Buka `index.html` langsung di peramban (tanpa instalasi atau build), atau
- Aktifkan GitHub Pages (Settings → Pages → pilih branch yang berisi `index.html`, folder `/`) lalu buka URL yang diberikan.

## Catatan teknis

- Seluruh HTML, CSS, dan JavaScript ada di `index.html`.
- Dependensi eksternal:
  - [jsPDF 2.5.1](https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js) dari cdnjs untuk membuat PDF.
  - Google Fonts: Bricolage Grotesque dan Public Sans.
- Draf disimpan otomatis di `localStorage` peramban pengguna; tidak ada data yang dikirim ke server.
- Cadangan draf dapat diunduh sebagai `cadangan-bikin-cv-taaruf.json`.
