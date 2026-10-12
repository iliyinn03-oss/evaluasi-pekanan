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
 