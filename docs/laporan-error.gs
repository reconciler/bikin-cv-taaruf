/**
 * Penampung laporan error untuk Bikin CV Taaruf (Google Apps Script).
 *
 * Cara pasang (dikerjakan Amal, sekali saja):
 * 1. Buat Google Sheet baru, misalnya "Laporan error Bikin CV Taaruf".
 * 2. Extensions > Apps Script. Hapus isi bawaan, tempel seluruh file ini, simpan.
 * 3. Deploy > New deployment > jenis "Web app".
 *    Execute as: Me. Who has access: Anyone. Klik Deploy dan izinkan akses.
 * 4. Salin "Web app URL" (berakhiran /exec), lalu berikan ke PIC untuk diisi
 *    ke konstanta REPORT_URL di index.html.
 * 5. Setiap mengubah script, buat deployment baru (Manage deployments > Edit > New version).
 *
 * Catatan:
 * - Alamat /exec bisa dilihat siapa pun yang membuka sumber situs. Karena itu script
 *   hanya menerima isi kecil, hanya kolom yang diizinkan, dan berhenti di MAX_ROWS.
 * - Sel yang diawali = + - @ diberi tanda kutip supaya tidak dibaca sebagai rumus.
 * - Penerima tidak menyimpan alamat IP. Google tetap melihatnya, seperti pada Google Fonts.
 * - Untuk menghapus data: hapus baris di Sheet. Untuk menghentikan penerimaan:
 *   Deploy > Manage deployments > arsipkan, atau kosongkan REPORT_URL di index.html.
 */
var SHEET_NAME = 'Laporan';
var MAX_ROWS = 5000;   // batas total baris supaya tidak membengkak
var MAX_BODY = 3000;   // batas panjang isi kiriman (karakter)
var MAX_CELL = 500;    // batas panjang tiap kolom
var FIELDS = ['t', 'v', 'kind', 'sec', 'stage', 'msg', 'stack', 'ua', 'vw', 'vh'];

function doPost(e) {
  try {
    var body = (e && e.postData && e.postData.contents) || '';
    if (!body || body.length > MAX_BODY) return reply_('ditolak');
    var p = JSON.parse(body);
    if (!p || typeof p !== 'object') return reply_('ditolak');

    var lock = LockService.getScriptLock();
    lock.waitLock(5000);
    try {
      var ss = SpreadsheetApp.getActiveSpreadsheet();
      var sh = ss.getSheetByName(SHEET_NAME) || ss.insertSheet(SHEET_NAME);
      if (sh.getLastRow() === 0) sh.appendRow(['diterima'].concat(FIELDS));
      if (sh.getLastRow() >= MAX_ROWS) return reply_('penuh');
      var row = [new Date()];
      for (var i = 0; i < FIELDS.length; i++) row.push(clean_(p[FIELDS[i]]));
      sh.appendRow(row);
    } finally {
      lock.releaseLock();
    }
    return reply_('ok');
  } catch (err) {
    return reply_('galat');
  }
}

function clean_(v) {
  var s = String(v == null ? '' : v).slice(0, MAX_CELL);
  return /^[=+\-@\t\r]/.test(s) ? "'" + s : s;
}

function reply_(text) {
  return ContentService.createTextOutput(text);
}
