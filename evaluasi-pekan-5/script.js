
/*  Nama    : [illiyin auro]
    Tanggal : 10 Oktober 2026
    Tujuan  : Latihan dasar JavaScript: membuat object, array, dan array of
           object untuk data kedai (profil kedai, daftar menu, transaksi),
           lalu menampilkannya ke console dan mengecek tipe datanya.
*/

/*=============================================================================================
 BAGIAN 2
=============================================================================================*/


// ====== 1. Objek Kedai ======

const kedai = {

    nama: "Kedai Rasa Nusantara",
    pemilik: "Bu Ratna",
    kota: "Yogyakarta",
    tahunBerdiri: 2015,
    sedangBuka: true,
    nomorWhatsApp: "081234567890",
    website: null,  //(belum ada)
    jamOperasional: {
        buka: "08:00",
        tutup: "21:00",
    },

};
 
//====== 2. Array menu (6 objek) ======
const menu = [

      { nama: "Nasi Gudeg",  kategori: "Makanan", harga: 25000, stok: 20, tersedia: true },  //(indeks ke 0)

      { nama: "Soto Ayam",  kategori: "Makanan", harga: 22000, stok: 15, tersedia: true },   //(indeks ke 1)

      { nama: "Rawon",  kategori: "Makanan", harga: 28000, stok: 10, tersedia: true },       //(indeks ke 2)

      { nama: "Es Teh Manis",  kategori: "Makanan", harga: 5000, stok: 50, tersedia: true }, //(indeks ke 3)

      { nama: "Wedang Jahe",  kategori: "Makanan", harga: 8000, stok: 30, tersedia: true },  //(indeks ke 4)

      { nama: "Es Dawet",  kategori: "Makanan", harga: 10000, stok: 0, tersedia: false },    //(indeks ke 5)
];


// ====== 3. Array transaksi (3 objeck) ======
// total sebelum diskon & pajak, dari bagian hitungan kasir 
// TRX-001 = 3x25000 + 2x5000 = 85000 ->bayar 175000 (cukup)                  
// TRX-002 = 1x22000 + 2x8000 = 38000 ->bayar 30000 (kurang)                  
// TRX-003 = 1x28000 + 1x5000 = 33000 ->bayar 50000 (cukup)                 

const transaksi = [
    {
        kode: "TRX-001",
        pelanggan: "Budi",
        sudahMember: true,
        uangBayar: 175000,
        catatan: "Tanpa Sambal",
        pesanan: [
            { indeksMenu: 0, jumlah: 3 },
            { indeksMenu: 3, jumlah: 2 }, 
        ],
    },

    {
    kode: "TRX-002",
    pelanggan: "Sari",
    sudahMember: false,
    uangBayar: 30000,
    catatan: null, // catatan kosong 
    pesanan:[
        {indeksMenu: 2, jumlah: 1 },
        {indeksMenu: 3, jumlah: 2 },
    ],

    },
    {
        kode: "TRX-003",
        pelanggan: "Andi",
        sudahMember: true,
        uangBayar: 50000,
        catatan: null, // catatan kosong
        pesanan: [
            {indeksMenu: 2, jumlah: 1 },
            {indeksMenu: 3, jumlah: 1 },
        ],
    },
];

console.log("Nama kedai:", kedai.nama);            //notasi titik
console.log("Kota:", kedai["kota"]);               //notasi kurung siku
console.log("Jam tutup:", kedai.jamOperasional.tutup);
console.log("Menu pertama:", menu[0].nama);
console.log("menu terakhir:", menu[menu.length - 1].nama);
console.log("pelanggan transaksi kedua:", transaksi[1].pelanggan);

const itemKedua = transaksi[2].pesanan[1];
console.log("Menu item kedua transaksi ketiga:", menu[itemKedua.indeksMenu].nama);

console.log("typeof kedai.tahunBerdiri:",typeof kedai.tahunBerdiri);
console.log("typeof kedai.sedangBuka:", typeof kedai.sedangBuka);
console.log("typeof kedai.website:", typeof kedai.website);
console.log("typeof kedai.jamOperasional:", typeof jamOperasional);
console.log("typeof kedai.menu:", typeof menu);
console.log("typeof transaksi[0].catatan:", typeof transaksi[0].catatan)

let catatanKasir;
console.log("catatanKasir:", catatanKasir);
/*
  ===== JAWABAN =====
 
  1. <Kenapa nomorWhatsApp disimpan sebagai string, bukan number?>
     Nomor telepon adalah pengenal, bukan angka untuk dihitung. Jika disimpan
     sebagai number, angka 0 di depan (081234...) akan hilang, dan format
     seperti "+62" atau tanda "-" tidak bisa disimpan. Kita juga tidak pernah
     menjumlahkan atau merata-ratakan nomor telepon.
 
  2. <Kenapa website diisi null, sedangkan catatanKasir dibiarkan tanpa nilai?>
     null berarti "sengaja dikosongkan": propertinya ada, tetapi nilainya
     memang belum ada (website belum dimiliki). Variabel yang dideklarasikan
     tanpa nilai otomatis bernilai undefined, artinya "belum pernah diberi
     nilai" dan itu diisi oleh JavaScript sendiri, bukan oleh programmer.
 
  3. <Jika menu berisi 6 item, apa hasil menu[6]? Kenapa?>
     Hasilnya undefined. Indeks array dimulai dari 0, jadi item terakhir ada
     di indeks 5. Indeks 6 tidak punya elemen, sehingga JavaScript
     mengembalikan undefined (bukan error).
 
  4. <Apa hasil typeof menu? Kenapa hasilnya begitu?>
     Hasilnya "object". Di JavaScript, array adalah jenis khusus dari object,
     dan typeof tidak membedakannya. Untuk memastikan sesuatu adalah array,
     pakai Array.isArray(menu).
 
  5. <Kenapa menu dibuat sebagai array, sedangkan kedai dibuat sebagai object?>
     menu adalah kumpulan banyak item sejenis yang berurutan, jadi cocok
     diakses lewat indeks dan bisa diulang (loop). kedai adalah satu entitas
     dengan banyak sifat berbeda (nama, kota, jam buka, dll.), jadi lebih
     jelas diakses lewat nama properti..
*/


 /*=============================================================================================
 BAGIAN 3
 =============================================================================================*/
/*
  ============================================================
  PERHITUNGAN TRANSAKSI DAN LAPORAN HARIAN
  Branch : feat/hitungan-kasir
  ============================================================
*/
 
// Aturan: member potong 10% dari subtotal, pajak 11% dari subtotal setelah potongan.
// Perhitungan persen ditulis "* 10 / 100" agar hasilnya bilangan bulat (tanpa
// galat desimal seperti 0.1 + 0.2).
 
// ===== Transaksi 1 (Budi) =====
const pesananTrx1 = transaksi[0].pesanan;
const subtotalTrx1 =
  menu[pesananTrx1[0].indeksMenu].harga * pesananTrx1[0].jumlah +
  menu[pesananTrx1[1].indeksMenu].harga * pesananTrx1[1].jumlah;
const potonganTrx1 = transaksi[0].sudahMember ? subtotalTrx1 * 10 / 100 : 0;
const pajakTrx1 = (subtotalTrx1 - potonganTrx1) * 11 / 100;
const totalBayarTrx1 = subtotalTrx1 - potonganTrx1 + pajakTrx1;
const kembalianTrx1 = transaksi[0].uangBayar - totalBayarTrx1;
const jumlahItemTrx1 = pesananTrx1[0].jumlah + pesananTrx1[1].jumlah;
const uangCukupTrx1 = transaksi[0].uangBayar >= totalBayarTrx1;
const gratisAntarTrx1 = subtotalTrx1 >= 100000 || jumlahItemTrx1 >= 5;
const semuaMenuTersediaTrx1 =
  menu[pesananTrx1[0].indeksMenu].tersedia &&
  menu[pesananTrx1[1].indeksMenu].tersedia;
 
// ===== Transaksi 2 (Sari) =====
const pesananTrx2 = transaksi[1].pesanan;
const subtotalTrx2 =
  menu[pesananTrx2[0].indeksMenu].harga * pesananTrx2[0].jumlah +
  menu[pesananTrx2[1].indeksMenu].harga * pesananTrx2[1].jumlah;
const potonganTrx2 = transaksi[1].sudahMember ? subtotalTrx2 * 10 / 100 : 0;
const pajakTrx2 = (subtotalTrx2 - potonganTrx2) * 11 / 100;
const totalBayarTrx2 = subtotalTrx2 - potonganTrx2 + pajakTrx2;
const kembalianTrx2 = transaksi[1].uangBayar - totalBayarTrx2;
const jumlahItemTrx2 = pesananTrx2[0].jumlah + pesananTrx2[1].jumlah;
const uangCukupTrx2 = transaksi[1].uangBayar >= totalBayarTrx2;
const gratisAntarTrx2 = subtotalTrx2 >= 100000 || jumlahItemTrx2 >= 5;
const semuaMenuTersediaTrx2 =
  menu[pesananTrx2[0].indeksMenu].tersedia &&
  menu[pesananTrx2[1].indeksMenu].tersedia;
 
// ===== Transaksi 3 (Andi) =====
const pesananTrx3 = transaksi[2].pesanan;
const subtotalTrx3 =
  menu[pesananTrx3[0].indeksMenu].harga * pesananTrx3[0].jumlah +
  menu[pesananTrx3[1].indeksMenu].harga * pesananTrx3[1].jumlah;
const potonganTrx3 = transaksi[2].sudahMember ? subtotalTrx3 * 10 / 100 : 0;
const pajakTrx3 = (subtotalTrx3 - potonganTrx3) * 11 / 100;
const totalBayarTrx3 = subtotalTrx3 - potonganTrx3 + pajakTrx3;
const kembalianTrx3 = transaksi[2].uangBayar - totalBayarTrx3;
const jumlahItemTrx3 = pesananTrx3[0].jumlah + pesananTrx3[1].jumlah;
const uangCukupTrx3 = transaksi[2].uangBayar >= totalBayarTrx3;
const gratisAntarTrx3 = subtotalTrx3 >= 100000 || jumlahItemTrx3 >= 5;
const semuaMenuTersediaTrx3 =
  menu[pesananTrx3[0].indeksMenu].tersedia &&
  menu[pesananTrx3[1].indeksMenu].tersedia;
 
// ===== Sisa kembalian (hanya transaksi yang kembaliannya tidak negatif) =====
// Transaksi 2 uangnya kurang, jadi dilewati.
const sisaSetelah50000Trx1 = kembalianTrx1 % 50000;
let sisaKembalianTrx1 = sisaSetelah50000Trx1;
sisaKembalianTrx1 %= 20000;
 
const sisaSetelah50000Trx3 = kembalianTrx3 % 50000;
let sisaKembalianTrx3 = sisaSetelah50000Trx3;
sisaKembalianTrx3 %= 20000;
 
// ===== Laporan harian =====
let pendapatanHarian = 0;
let jumlahTransaksi = 0;
 
pendapatanHarian += totalBayarTrx1;
jumlahTransaksi++;
pendapatanHarian += totalBayarTrx2;
jumlahTransaksi++;
pendapatanHarian += totalBayarTrx3;
jumlahTransaksi++;
 
const rataRataPendapatan = pendapatanHarian / jumlahTransaksi;
const selisihTerbesar =
  Math.max(totalBayarTrx1, totalBayarTrx2, totalBayarTrx3) -
  Math.min(totalBayarTrx1, totalBayarTrx2, totalBayarTrx3);
const persentaseTransaksiPertama = (totalBayarTrx1 / pendapatanHarian) * 100;
// menu[0] adalah "Nasi Gudeg"; namanya mengikuti soal (hargaKopiTigaBulan).
const hargaKopiTigaBulan = menu[0].harga * 1.05 ** 3;
 
// ===== Cetak =====
console.log("====================================");
console.log("     LAPORAN HARIAN KEDAI SENJA");
console.log(`     ${kedai.nama} - ${kedai.kota}`);
console.log("====================================");
 
console.log(`
[${transaksi[0].kode}] ${transaksi[0].pelanggan} (member: ${transaksi[0].sudahMember})
  Subtotal            : Rp ${subtotalTrx1.toLocaleString("id-ID")}
  Potongan            : Rp ${potonganTrx1.toLocaleString("id-ID")}
  Pajak 11%           : Rp ${pajakTrx1.toLocaleString("id-ID")}
  Total bayar         : Rp ${totalBayarTrx1.toLocaleString("id-ID")}
  Uang bayar          : Rp ${transaksi[0].uangBayar.toLocaleString("id-ID")}
  Kembalian           : Rp ${kembalianTrx1.toLocaleString("id-ID")}
  Uang cukup          : ${uangCukupTrx1}
  Gratis antar        : ${gratisAntarTrx1}
  Semua menu tersedia : ${semuaMenuTersediaTrx1}
  Sisa setelah 50000  : Rp ${sisaSetelah50000Trx1.toLocaleString("id-ID")}
  Sisa setelah 20000  : Rp ${sisaKembalianTrx1.toLocaleString("id-ID")}`);
 
console.log(`
[${transaksi[1].kode}] ${transaksi[1].pelanggan} (member: ${transaksi[1].sudahMember})
  Subtotal            : Rp ${subtotalTrx2.toLocaleString("id-ID")}
  Potongan            : Rp ${potonganTrx2.toLocaleString("id-ID")}
  Pajak 11%           : Rp ${pajakTrx2.toLocaleString("id-ID")}
  Total bayar         : Rp ${totalBayarTrx2.toLocaleString("id-ID")}
  Uang bayar          : Rp ${transaksi[1].uangBayar.toLocaleString("id-ID")}
  Kembalian           : Rp ${kembalianTrx2.toLocaleString("id-ID")} (uang kurang)
  Uang cukup          : ${uangCukupTrx2}
  Gratis antar        : ${gratisAntarTrx2}
  Semua menu tersedia : ${semuaMenuTersediaTrx2}
  Sisa kembalian      : tidak dihitung`);
 
console.log(`
[${transaksi[2].kode}] ${transaksi[2].pelanggan} (member: ${transaksi[2].sudahMember})
  Subtotal            : Rp ${subtotalTrx3.toLocaleString("id-ID")}
  Potongan            : Rp ${potonganTrx3.toLocaleString("id-ID")}
  Pajak 11%           : Rp ${pajakTrx3.toLocaleString("id-ID")}
  Total bayar         : Rp ${totalBayarTrx3.toLocaleString("id-ID")}
  Uang bayar          : Rp ${transaksi[2].uangBayar.toLocaleString("id-ID")}
  Kembalian           : Rp ${kembalianTrx3.toLocaleString("id-ID")}
  Uang cukup          : ${uangCukupTrx3}
  Gratis antar        : ${gratisAntarTrx3}
  Semua menu tersedia : ${semuaMenuTersediaTrx3}
  Sisa setelah 50000  : Rp ${sisaSetelah50000Trx3.toLocaleString("id-ID")}
  Sisa setelah 20000  : Rp ${sisaKembalianTrx3.toLocaleString("id-ID")}`);
 
console.log(`
------------------------------------
RINGKASAN HARI INI
  Jumlah transaksi         : ${jumlahTransaksi}
  Pendapatan harian        : Rp ${pendapatanHarian.toLocaleString("id-ID")}
  Rata-rata per transaksi  : Rp ${rataRataPendapatan.toLocaleString("id-ID")}
  Selisih total terbesar   : Rp ${selisihTerbesar.toLocaleString("id-ID")}
  Porsi transaksi pertama  : ${persentaseTransaksiPertama.toFixed(2)}%
  Harga ${menu[0].nama} +5%/bln x3 : Rp ${Math.round(hargaKopiTigaBulan).toLocaleString("id-ID")}
------------------------------------`);
 
// ===== Bukti untuk jawaban nomor 6 =====
console.log("--- Bukti: ubah harga menu[0] ---");
console.log("Total bayar transaksi 1 (tersimpan):", totalBayarTrx1);
menu[0].harga = 30000; // object di dalam const boleh diubah isinya
console.log("Harga menu[0] sekarang:", menu[0].harga);
console.log("Total bayar transaksi 1 setelah harga diubah (tanpa hitung ulang):", totalBayarTrx1);
const subtotalBaruTrx1 =
  menu[pesananTrx1[0].indeksMenu].harga * pesananTrx1[0].jumlah +
  menu[pesananTrx1[1].indeksMenu].harga * pesananTrx1[1].jumlah;
console.log("Subtotal transaksi 1 jika dihitung ulang:", subtotalBaruTrx1);
menu[0].harga = 25000; // kembalikan ke harga semula
 

