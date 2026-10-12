/*=========================================================================
BAGIAN 4 
=========================================================================*/


/* Program hitung transaksi Kedai Senja */
// FIX 1: komentar blok ditutup dengan */ (sebelumnya tidak ditutup)
 
let namaKedai = "Kedai Senja";
// FIX 10b: const diganti let, karena nama kedai berganti di bawah
const HARGA_KOPI = 18000;
const HARGA_ROTI = 15000;
const TARIF_PAJAK = 0.11;
let jumlahKopi = 3;
let jumlahRoti = 2; // FIX 2: angka, bukan string "2"
let transaksiSelesai = 0;
 
// Jumlah seluruh item. Seharusnya: 5
let jumlahItem = jumlahKopi + jumlahRoti;
 
// Subtotal. Seharusnya: 84000
let subtotal = HARGA_KOPI * jumlahKopi + HARGA_ROTI * jumlahRoti; // FIX 3: jumlahKopi (K besar)
 
// Pajak 11% dari subtotal setelah dipotong diskon 10000. Seharusnya: 8140
let pajak = (subtotal - 10000) * TARIF_PAJAK; // FIX 4: kurung agar pengurangan dikerjakan lebih dulu
 
// Total bayar. Seharusnya: 82140
let totalBayar = subtotal - 10000 + pajak; // FIX 5: tambah titik koma
 
// Pelanggan membayar 100000. Cukup? Seharusnya: true
let uangBayar = 100000;
let uangCukup = uangBayar >= totalBayar; // FIX 6: >= (perbandingan), bukan = (penugasan)
 
// Kembalian. Seharusnya: 17860
let kembalian = uangBayar - totalBayar; // FIX 7: urutan dibalik: uang bayar dikurangi total bayar
 
// Jumlah item genap? Seharusnya: false
let itemGenap = jumlahItem % 2 === 0; // FIX 8: genap berarti sisa bagi 2 sama dengan 0
 
// Transaksi selesai bertambah 1. Seharusnya: 1
transaksiSelesai++; // FIX 9: nilai variabel harus diubah (sebelumnya hasil tambah dibuang)
 
// Kedai berganti nama. Seharusnya "Kedai Senja Baru"
namaKedai = "Kedai Senja Baru"; // FIX 10a: hapus let, karena variabel sudah dideklarasikan
 
// Tarif pajak tidak boleh berubah. Seharusnya tetap 0.11
// FIX 11: baris TARIF_PAJAK = 0.12; dihapus, karena const tidak boleh ditugasi ulang
 
console.log(namaKedai, jumlahItem, subtotal, pajak, totalBayar, uangCukup, kembalian, itemGenap, transaksiSelesai); // FIX 12: console huruf kecil
 
/*
  ===== CATATAN BUG =====
 
  1. Komentar blok tidak ditutup
     Jenis    : menghentikan program (SyntaxError, program tidak berjalan sama sekali).
     Penyebab : komentar dibuka dengan garis miring + bintang tetapi tidak ditutup
                dengan bintang + garis miring, sehingga seluruh kode di bawahnya
                dianggap komentar yang tak pernah selesai.
 
  2. jumlahRoti = "2" (string)
     Jenis    : tidak error, hasil salah.
     Penyebab : operator + pada string dan angka menjadi penggabungan teks, jadi
                jumlahItem menjadi "32", bukan 5.
                (Perkalian HARGA_ROTI * "2" tetap berhasil karena * mengubah
                string ke angka, sehingga bug ini tersembunyi di subtotal.)
 
  3. jumlahkopi (huruf k kecil)
     Jenis    : menghentikan program (ReferenceError).
     Penyebab : JavaScript membedakan huruf besar dan kecil. Variabel jumlahkopi
                tidak pernah dibuat, yang ada jumlahKopi.
 
  4. pajak = subtotal - 10000 * TARIF_PAJAK
     Jenis    : tidak error, hasil salah.
     Penyebab : perkalian dikerjakan lebih dulu dari pengurangan, jadi yang dikenai
                pajak hanya 10000. Hasilnya 84000 - 1100 = 82900, bukan 8140.
 
  5. Titik koma hilang di akhir totalBayar
     Jenis    : tidak error, hasil benar (tapi berisiko).
     Penyebab : JavaScript menyisipkan titik koma otomatis di akhir baris (ASI),
                sehingga kode tetap jalan. Namun pada kasus tertentu (misalnya baris
                berikutnya diawali "(" atau "[") ASI bisa menggabungkan dua baris
                dan menimbulkan bug yang sulit dicari.
 
  6. uangCukup = uangBayar = totalBayar
     Jenis    : tidak error, hasil salah.
     Penyebab : "=" adalah penugasan, bukan perbandingan. uangBayar ikut berubah
                menjadi totalBayar, dan uangCukup berisi angka 82140, bukan
                true/false.
 
  7. kembalian = totalBayar - uangBayar
     Jenis    : tidak error, hasil salah.
     Penyebab : urutan pengurangan terbalik, hasilnya -17860 (negatif).
 
  8. itemGenap = jumlahItem % 2 === 1
     Jenis    : tidak error, hasil salah.
     Penyebab : sisa bagi 2 sama dengan 1 menandakan bilangan ganjil, bukan genap.
                Untuk jumlahItem 5 hasilnya true, padahal seharusnya false.
 
  9. transaksiSelesai + 1;
     Jenis    : tidak error, hasil salah.
     Penyebab : hasil penjumlahan dihitung tetapi tidak disimpan ke variabel mana
                pun, jadi transaksiSelesai tetap 0. Perlu ++ atau += 1.
 
  10. let namaKedai = "Kedai Senja Baru"; (dan const pada deklarasi awal)
      Jenis    : menghentikan program (SyntaxError).
      Penyebab : namaKedai sudah dideklarasikan, dan let tidak boleh mendeklarasikan
                 ulang nama yang sama di scope yang sama. Setelah "let" dihapus,
                 masih ada masalah kedua: deklarasi awalnya const, sehingga penugasan
                 ulang akan menghasilkan TypeError. Maka deklarasi awal diubah
                 menjadi let.
 
  11. TARIF_PAJAK = 0.12;
      Jenis    : menghentikan program (TypeError: Assignment to constant variable).
      Penyebab : TARIF_PAJAK dideklarasikan dengan const, nilainya tidak boleh
                 diganti. Karena tarif harus tetap 0.11, barisnya dihapus.
 
  12. Console.log
      Jenis    : menghentikan program (ReferenceError: Console is not defined).
      Penyebab : nama objeknya console dengan huruf kecil.
*/
