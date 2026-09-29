# Bikin CV Taaruf — panduan kerja

Aplikasi web satu berkas untuk menyusun CV taaruf (form wizard dinamis,
kondisional berdasarkan jenis kelamin) dan mengekspornya ke PDF sepenuhnya
di sisi klien. Live: **https://reconciler.github.io/bikin-cv-taaruf/**.
Versi saat ini: **v7**.

## Struktur

- `index.html` — seluruh aplikasi (HTML+CSS+JS dalam satu berkas): definisi
  field form, logika render (`render()`, `h()` — hyperscript kecil buatan
  sendiri), validasi, autosave, ekspor PDF via jsPDF.
- `README.md` — cara pakai & catatan teknis untuk pengguna akhir.

## Hosting

GitHub Pages, mode **"Deploy from a branch"** (`main`) — bukan GitHub
Actions custom. Push ke `main` langsung terbit, tidak ada build step atau
workflow tambahan. Tidak ada isu biaya/kredit (GitHub Pages gratis).

## Data & privasi

Draf disimpan otomatis di `localStorage` peramban pengguna (key sesuai
`DRAFT_KEY` di `index.html`) — **tidak ada backend, tidak ada data terkirim
ke server mana pun**. Pengguna bisa mengunduh cadangan draf manual sebagai
`cadangan-bikin-cv-taaruf.json`. Perlakukan ini sebagai batasan desain yang
sengaja — jangan tambahkan pengiriman data ke server tanpa diminta eksplisit
oleh Amal, karena itu mengubah janji privasi aplikasi ini.

## Dependensi eksternal

- jsPDF 2.5.1 (cdnjs) — pembuatan PDF di sisi klien.
- Google Fonts: Bricolage Grotesque, Public Sans.

Keduanya dimuat via CDN langsung di `index.html` — tidak ada `package.json`
atau proses build.

## Lapor ke sesi "Auditor project kajian"

Amal menugaskan satu sesi Claude terpisah sebagai auditor lintas-project
(awalnya untuk `jadwalkajian` + `catatankajian`, sekarang juga mengawasi
repo ini). Cari session ID terkini dengan `list_sessions` berdasarkan judul
**"Auditor project kajian"** (nama ini historis dari dua project kajian
yang lebih dulu diaudit — bisa jadi sudah diganti nama, cek dulu), atau
tanya Amal langsung.

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
