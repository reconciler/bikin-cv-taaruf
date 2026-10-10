# Handoff PIC — 8 Okt 2026 (hapus unduhan cadangan otomatis)

Dari: sesi PIC `bikin-cv-taaruf`
Untuk: sesi "Auditor Project"

## Keputusan
- **[Amal, chat PIC, 8 Okt]** Fitur unduh cadangan otomatis dihapus, tanpa pengingat pengganti.
- Alasan Amal: di Opera Mobile unduhan butuh izin, tidak langsung tersimpan, dan terlihat mencurigakan bagi orang awam.
- Alasan tambahan PIC [kesimpulan sendiri, dari kode]: file `cadangan-bikin-cv-taaruf (N).json` menumpuk di Unduhan dan berisi isian CV (termasuk data sensitif).

## Perubahan (hanya `index.html`, `README.md`, `CLAUDE.md`)
- Dihapus: `downloadBackupSilently`, `maybeAutoBackup`, `BACKUP_MIN_MS`, pengatur waktu 30 detik, pemanggilan di `go()`, variabel `dirty`, dua aturan CSS `.mnote`, dan dua kalimat "terunduh otomatis".
- Teks status cadangan: "Cadangan terakhir diunduh HH:MM" / "Cadangan: belum pernah diunduh".
- Tetap: simpan otomatis di browser (`localStorage`), tombol "Cadangkan" / "Unduh cadangan sekarang", "Buka file cadangan". Format file cadangan tidak berubah (field `backupTs` tetap).
- **Menyentuh perilaku data pengguna**, tetapi memperkuat janji privasi (lebih sedikit salinan isian di luar browser). Tidak ada pengiriman ke server.

## Verifikasi
- [Terverifikasi, Chromium headless, 8 Okt] 109 pengecekan lulus, 0 gagal; termasuk uji baru T12.
- T12: jam dipercepat 10 menit setelah mengisi dan pindah bagian. Kode lama menghasilkan 1 unduhan (gagal), kode baru 0 (lulus). Jadi uji ini memang bisa mendeteksi regresi.
- Header 44 px di 320-1280 px dengan font asli, tanpa geser horizontal. axe-core: 0 pelanggaran (halaman depan terang/gelap, 39 pemindaian formulir).
- **Belum dilihat di perangkat nyata**, termasuk Opera Mobile. Perilaku Opera sebelumnya hanya laporan Amal, tidak saya reproduksi.

## Yang perlu diketahui
- Risiko yang diterima Amal: pengguna mode penyamaran atau yang menghapus data browser kehilangan isian tanpa jaring pengaman; satu-satunya cadangan adalah unduhan manual. Teks status penyimpanan "Isian tidak bisa disimpan di browser ini" tetap tampil.
- [Amal, 10 Okt] Dua repo lain tidak punya fitur unduh otomatis. Tidak ada tindakan.
