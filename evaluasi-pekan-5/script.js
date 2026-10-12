
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

