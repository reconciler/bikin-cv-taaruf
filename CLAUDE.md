# Bikin CV Taaruf — panduan kerja

Aplikasi web satu berkas untuk menyusun CV taaruf (form wizard dinamis,
kondisional berdasarkan jenis kelamin) dan mengekspornya ke PDF sepenuhnya
di sisi klien. Live: **https://reconciler.github.io/bikin-cv-taaruf/**.
Versi saat ini: **v7**.

## Struktur

- `index.html` — seluruh aplikasi (HTML+CSS+JS dalam satu berkas): definisi
  field form, logika render (`render()`, `h()` — hyperscript kecil buatan
  sendiri), validasi, autosave, ekspor PDF via jsPDF.
- `lib/jspdf-2.5.1.umd.min.js` — salinan jsPDF (dari paket npm `jspdf@2.5.1`,
  lisensi MIT) yang dimuat `index.html`. Jangan diedit; ganti file utuh jika
  memperbarui versi.
- `README.md` — cara pakai & catatan teknis untuk pengguna akhir.

## Hosting

GitHub Pages, mode **"Deploy from a branch"** (`main`) — bukan GitHub
Actions custom. Push ke `main` langsung terbit, tidak ada build step atau
workflow tambahan. Tidak ada isu biaya/kredit (GitHub Pages gratis).

## Data & privasi

Draf disimpan otomatis di `localStorage` peramban pengguna (key sesuai
`DRAFT_KEY` di `index.html`) — **tidak ada backend, isian tidak pernah
terkirim ke server mana pun**. Satu-satunya permintaan ke pihak ketiga adalah
Google Fonts (alamat IP pengunjung terlihat oleh Google). Pengguna bisa mengunduh cadangan draf manual sebagai
`cadangan-bikin-cv-taaruf.json`. Perlakukan ini sebagai batasan desain yang
sengaja — jangan tambahkan pengiriman data ke server tanpa diminta eksplisit
oleh Amal, karena itu mengubah janji privasi aplikasi ini.

## Dependensi

- jsPDF 2.5.1 — pembuatan PDF di sisi klien. Disimpan di repo
  (`lib/jspdf-2.5.1.umd.min.js`), bukan dari CDN, supaya kode yang berjalan
  selalu sama dengan yang ada di repo dan PDF tetap bisa dibuat meski CDN
  bermasalah.
- Google Fonts: Bricolage Grotesque, Public Sans — dimuat dari server Google.

Tidak ada `package.json` atau proses build.

## Lapor ke sesi "Auditor Project"

Amal menugaskan satu sesi Claude terpisah sebagai auditor lintas-project
(awalnya untuk `jadwalkajian` + `catatankajian`, sekarang juga mengawasi
repo ini). Cari session ID terkini dengan `list_sessions` berdasarkan judul
**"Auditor Project"** (nama umum, sengaja tidak spesifik ke satu project —
kalau sudah tidak valid/berganti nama lagi, cek dulu sebelum asumsi), atau
tanya Amal langsung.

**Aturan akses berkas** (disetujui Amal, 29 Sep 2026, dipicu insiden nyata di
repo ini — push sesi PIC dan Auditor ke `main` nyaris bentrok dalam selang
beberapa menit, non-fast-forward, harus di-rebase. Tidak ada kerusakan, tapi
push ke `main` langsung tayang di GitHub Pages, jadi penulisan paralel
berisiko konflik nyata):
- **Hanya sesi PIC repo ini yang boleh mengubah berkas inti fitur/fungsi**:
  `index.html`, `lib/`.
- **Auditor Project boleh mengubah**: `CLAUDE.md`, `AUDIT-HANDOFF-*.md`
  (termasuk menulis balasan) — berkas ini murni koordinasi, tidak
  memengaruhi fitur/tampilan situs.
- **`README.md`** — wilayah abu-abu (dokumentasi pengguna akhir, bukan
  fitur, tapi juga bukan koordinasi Auditor). Diputuskan: **milik PIC**,
  disamakan dengan berkas inti — README menjelaskan produk yang sedang
  dikerjakan PIC, sebaiknya satu tangan dengan perubahan fiturnya. Auditor
  boleh usulkan perubahan lewat `AUDIT-HANDOFF-*.md`, bukan edit langsung.

**Wajib lapor untuk** (bukan tiap perbaikan kecil — hanya yang signifikan):
- Perubahan struktur/skema field form yang besar (bukan sekadar tambah
  satu field), perubahan versi (`v7` → berikutnya)
- Perubahan hosting/deploy (mis. pindah dari classic Pages ke GitHub
  Actions, ganti platform hosting)
- Perubahan yang menyentuh janji privasi (draf lokal saja, tanpa server) —
  ini wajib lapor meski kecil, karena ini batasan desain inti
- Temuan yang berdampak lintas-project (jarang terjadi untuk repo ini,
  karena berdiri sendiri tanpa dependensi ke `jadwalkajian`/`catatankajian`)

**Tidak perlu lapor untuk**: perbaikan bug kecil, penyesuaian tampilan,
penambahan field form rutin — cukup tercatat di git seperti biasa.

**Cara lapor** (sama persis dengan konvensi di `jadwalkajian`/`catatankajian`
— pesan/trigger otomatis lintas-sesi terbukti tidak selalu andal, lihat
riwayat di dua repo itu kalau perlu detail): untuk hal yang wajib
dilaporkan di atas, **jangan andalkan satu jalur otomatis saja**.
Konfirmasikan lewat DUA jalur:

1. Chat langsung ke Amal, kalau sesi Anda sedang aktif berinteraksi dengannya.
2. Commit file `AUDIT-HANDOFF-<tanggal>.md` ke root repo — jalur paling
   andal, karena auditor bisa menemukannya lewat `git log` kapan saja tanpa
   bergantung notifikasi.
