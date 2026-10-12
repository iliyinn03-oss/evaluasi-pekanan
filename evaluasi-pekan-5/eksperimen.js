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

