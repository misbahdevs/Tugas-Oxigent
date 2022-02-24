const number = [2, 4, 6, 8, 10];
// ============== MENAMPILKAN ISI ARRAY DENGAN FOREACH ================
number.forEach(function (num) {
  console.log(num);
});

// ============== HASIL BAGI 2 ARRAY PERTAMA ================
const number2 = number.map(function (num) {
  return num / 2;
});
number2.forEach(function (num) {
  console.log(num);
});

// ============== MENAMBAHKAN NILAI 1 DI AKHIR ================
number2.push(1);

// ============== MENAMPILKAN TOMAT ================
const pruits = [
  ["tomat", 20],
  ["anggur", 20],
  ["Lobak", 20],
];
console.log(pruits[0][0]);

// ============== MEMBUAT NESTED OBJECT DAN MENAMPILKANNYA ================
const obj = {
  nama: "misbah",
  npm: 21552011178,
  prodi: "Teknik Informatika",
  instansi: "Sekolah Tinggi Teknologi Bandung",
};

const array = Object.entries(obj);
console.log(array);
for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}
