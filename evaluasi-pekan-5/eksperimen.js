/*=========================================================================
BAGIAN 5.1
=========================================================================*/

 
// Tebakan: "55" (+ dengan string = penggabungan teks)
console.log(5 + "5");
// Hasil asli: 55  (sama dengan tebakan)
 
// Tebakan: 6 (- mengubah string jadi angka)
console.log("10" - 4);
// Hasil asli: 6  (sama dengan tebakan)
 
// Tebakan: 20 (* mengubah kedua string jadi angka)
console.log("10" * "2");
// Hasil asli: 20  (sama dengan tebakan)
 
// Tebakan: "string" ("5" + 5 menjadi "55")
console.log(typeof ("5" + 5));
// Hasil asli: string  (sama dengan tebakan)
 
// Tebakan: 1 (sisa 9 dibagi 4)
console.log(9 % 4);
// Hasil asli: 1  (sama dengan tebakan)
 
// Tebakan: 25 (5 pangkat 2)
console.log((2 + 3) ** 2);
// Hasil asli: 25  (sama dengan tebakan)
 
// Tebakan: 2.5 (pembagian JavaScript tidak membulat)
console.log(10 / 4);
// Hasil asli: 2.5  (sama dengan tebakan)
 
// Tebakan: Infinity (tidak error)
console.log(1 / 0);
// Hasil asli: Infinity  (sama dengan tebakan)
 
// Tebakan: NaN ("abc" tidak bisa jadi angka)
console.log("abc" * 2);
// Hasil asli: NaN  (sama dengan tebakan)
 
// Tebakan: "number" (NaN tetap bertipe number)
console.log(typeof NaN);
// Hasil asli: number  (sama dengan tebakan)
 
// Tebakan: true ((true && false) = false, lalu false || true = true)
console.log((5 > 3 && 2 > 4) || 1 === 1);
// Hasil asli: true  (sama dengan tebakan)
 
// Tebakan: true (!true = false, !false = true, false || true = true)
console.log(!true || !false);
// Hasil asli: true  (sama dengan tebakan)
 
// Tebakan: true ("5" == 5 true, "5" !== 5 true karena tipe beda)
console.log("5" == 5 && "5" !== 5);
// Hasil asli: true  (sama dengan tebakan)
 
// Tebakan: true (array dan object sama-sama bertipe "object")
console.log(typeof [] === typeof {});
// Hasil asli: true  (sama dengan tebakan)
 
// Tebakan: 50 (20 + 30)
console.log([10, 20, 30][1] + [10, 20, 30][2]);
// Hasil asli: 50  (sama dengan tebakan)
 

/*=========================================================================
BAGIAN 5.2
=========================================================================*/

 
// ============================================================
// BUKTI: var vs let
// (di bagian ini var sengaja dipakai untuk perbandingan)
// ============================================================
 
// ----- 1. Jangkauan (scope) di dalam blok { } -----
{
  var angkaVar = 10;
  let angkaLet = 20;
  console.log("Di dalam blok:", angkaVar, angkaLet);
}
 
// var bocor ke luar blok, jadi masih bisa dibaca.
console.log("var di luar blok:", angkaVar);
// Hasil asli: var di luar blok: 10
 
// let hanya hidup di dalam blok. Jika baris ini diaktifkan, program berhenti:
// console.log("let di luar blok:", angkaLet);
// Pesan error: ReferenceError: angkaLet is not defined
 
// Cara aman memeriksanya tanpa menghentikan program:
console.log("typeof angkaLet di luar blok:", typeof angkaLet);
// Hasil asli: typeof angkaLet di luar blok: undefined
 
// ----- 2. Deklarasi ulang dengan nama sama -----
var namaMenu = "Nasi Gudeg";
var namaMenu = "Soto Ayam"; // tidak error, nilai lama ditimpa
console.log("var dideklarasikan dua kali:", namaMenu);
// Hasil asli: var dideklarasikan dua kali: Soto Ayam
 
let namaMinuman = "Es Teh Manis";
// Jika baris di bawah diaktifkan, program TIDAK berjalan sama sekali
// (error terdeteksi sebelum satu baris pun dijalankan):
// let namaMinuman = "Wedang Jahe";
// Pesan error: SyntaxError: Identifier 'namaMinuman' has already been declared
 
// Mengganti nilai let tetap boleh, asal tanpa kata let lagi:
namaMinuman = "Wedang Jahe";
console.log("let diganti nilainya:", namaMinuman);
// Hasil asli: let diganti nilainya: Wedang Jahe

/*=========================================================================
BAGIAN 5.3
=========================================================================*/
/*
  1. Kenapa 5 + "5" dan "10" - 4 hasilnya berbeda jenis?
     Operator + punya dua tugas: menjumlah angka dan menggabung teks. Jika
     salah satu sisinya string, JavaScript memilih menggabung teks, sehingga
     5 + "5" menjadi "55" (string). Operator - hanya punya satu tugas, yaitu
     mengurangi angka, jadi "10" diubah paksa menjadi angka 10 lalu dikurangi 4
     dan hasilnya 6 (number). Perubahan tipe otomatis ini disebut type coercion.
 
  2. Apa arti NaN, dan kenapa tipenya number?
     NaN singkatan dari "Not a Number": nilai khusus yang muncul ketika sebuah
     operasi hitung tidak menghasilkan angka yang sah, misalnya "abc" * 2 atau
     0 / 0. Tipenya tetap number karena NaN adalah salah satu nilai dalam
     standar bilangan desimal IEEE 754 yang dipakai JavaScript untuk semua angka,
     jadi ia dianggap "angka yang hasilnya tidak valid", bukan tipe terpisah.
     NaN tidak sama dengan dirinya sendiri (NaN === NaN bernilai false), jadi
     untuk memeriksanya pakai Number.isNaN(nilai).
 
  3. Urutan evaluasi 5 > 3 && 2 > 4 || 1 === 1:
     Urutan prioritas operator: perbandingan (>, ===) lebih dulu, lalu &&, lalu ||.
     Jadi ekspresinya dibaca sebagai (5 > 3 && 2 > 4) || (1 === 1).
       Langkah 1: 5 > 3        -> true
       Langkah 2: 2 > 4        -> false
       Langkah 3: 1 === 1      -> true
       Langkah 4: true && false -> false   (&& true hanya jika keduanya true)
       Langkah 5: false || true -> true    (|| true jika salah satu true)
     Hasil akhir: true.
 
  4. Cara membedakan array dari object biasa:
     typeof [] dan typeof {} sama-sama "object", jadi typeof tidak bisa dipakai.
     Gunakan Array.isArray(nilai):
       Array.isArray([10, 20])      -> true
       Array.isArray({ a: 1 })      -> false
     Hati-hati: typeof null juga "object", jadi untuk memeriksa object biasa
     pastikan nilainya bukan null dan Array.isArray(nilai) bernilai false.
 
  5. Statement dan expression pada:
       let hasil = 5 + 10;
       console.log(hasil * 2);
 
     Statement (perintah lengkap):
       a. let hasil = 5 + 10;       (statement deklarasi variabel)
       b. console.log(hasil * 2);   (statement ekspresi, ekspresi yang berdiri sendiri)
 
     Expression dan nilainya:
       - 5                          -> 5
       - 10                         -> 10
       - 5 + 10                     -> 15   (disimpan ke hasil)
       - hasil                      -> 15
       - 2                          -> 2
       - hasil * 2                  -> 30
       - console.log(hasil * 2)     -> undefined (nilai kembaliannya; efek
                                       sampingnya mencetak 30 ke console)
 
  6. eksperimen.js dijalankan di mana dan oleh apa?
     File JavaScript dijalankan oleh sebuah mesin JavaScript (engine). Dalam
     modul ini file dijalankan di terminal dengan Node.js, misalnya:
         node tebak-hasil.js
     (nama file mengikuti file-mu; di sini namanya tebak-hasil.js). Node.js
     memakai mesin V8 yang sama dengan Chrome.
     Perbedaan dengan Node.js dan browser:
       - Browser (lewat tag script atau console DevTools): punya window, document,
         dan fitur halaman web (DOM, alert, localStorage), tidak punya require atau
         akses file komputer.
       - Node.js (di luar browser): punya process, require/import, dan modul
         seperti fs untuk membaca/menulis file, tidak punya window atau document.
       Inti bahasanya (variabel, operator, array, object) sama di keduanya;
       yang berbeda adalah fitur lingkungan di sekitarnya.
     Modul ini memakai let dan const, bukan var, karena let/const berlaku hanya di
     dalam blok tempatnya dibuat, tidak bisa dideklarasikan ulang dengan nama yang
     sama, dan const mencegah nilai diganti tanpa sengaja. Bug jadi muncul sebagai
     error yang jelas di awal, bukan sebagai hasil salah yang tersembunyi.
 
  7. Hasil eksperimen var dan let:
     a. var di dalam blok { }: angkaVar bisa dibaca dari luar blok (mencetak 10).
        var hanya mengenal batas fungsi, bukan batas blok, jadi blok { } tidak
        membatasinya.
     b. let di dalam blok { }: angkaLet tidak bisa dibaca dari luar blok.
        Memanggilnya langsung menimbulkan ReferenceError: angkaLet is not defined.
        Dengan typeof, hasilnya "undefined" tanpa error, karena typeof aman dipakai
        pada nama yang tidak dikenal.
     c. var dideklarasikan dua kali (namaMenu): tidak error, nilai kedua menimpa
        nilai pertama, hasilnya "Soto Ayam".
     d. let dideklarasikan dua kali (namaMinuman): menimbulkan SyntaxError:
        Identifier 'namaMinuman' has already been declared. Error ini terdeteksi
        sebelum program berjalan, jadi tidak ada satu baris pun yang dijalankan.
     e. Mengganti nilai let tanpa kata let lagi diperbolehkan (hasilnya
        "Wedang Jahe").
 
  8. Contoh nyata bug karena var di program besar:
     Di fungsi hitungTotal pada aplikasi kasir:
 
         function hitungTotal(subtotal, sudahMember) {
           if (sudahMember) {
             var diskon = subtotal * 10 / 100;
           }
           return subtotal - diskon;
         }
 
     Karena var tidak dibatasi blok if, kodenya terlihat "jalan" untuk member.
     Untuk pelanggan non-member, blok if tidak dijalankan sehingga diskon
     bernilai undefined (bukan 0), dan subtotal - undefined menghasilkan NaN.
     Total bayar menjadi NaN dan tidak ada error yang muncul. Dengan let,
     variabel diskon di luar blok if langsung memunculkan ReferenceError, jadi
     bug ketahuan saat pengujian.
     Contoh redeklarasi: dua orang menulis var total di file yang sama (satu
     untuk total belanja, satu untuk total pajak). Yang kedua diam-diam menimpa
     yang pertama dan semua perhitungan setelahnya memakai nilai yang salah,
     tanpa peringatan. Dengan let, JavaScript menolak dengan SyntaxError sehingga
     bentrokan nama langsung ketahuan.
*/