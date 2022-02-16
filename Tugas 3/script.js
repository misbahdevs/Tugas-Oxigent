// ====== BAGIAN PERTAMA ======
// ===== menyiapkan fungsi penilaian =====
function penilaian(score) {
  // === siapkan variable hasil ===
  let result;
  // === jika kondisi terpenuhi maka akan menampilkan 'Selamat! Anda mendapatkan nilai A.' ===
  if (score >= 90) return (result = "Selamat! Anda mendapatkan nilai A.");

  // === jika kondisi terpenuhi maka akan menampilkan 'Anda mendapatkan nilai B.' ===
  if (score >= 80 && score <= 86) return (result = "Anda mendapatkan nilai B.");

  // === jika kondisi terpenuhi maka akan menampilkan 'Anda mendapatkan nilai C.' ===
  if (score >= 70 && score <= 79) return (result = "Anda mendapatkan nilai C.");

  // === jika kondisi terpenuhi maka akan menampilkan 'Anda mendapatkan nilai D.' ===
  if (score >= 60 && score <= 69) return (result = "Anda mendapatkan nilai D.");

  // === jika kondisi diatas tidak terpenuhi maka akan menampilkan 'Anda mendapatkan nilai E.' ===
  return (result = "Anda mendapatkan nilai E.");
}

// ====== BAGIAN KEDUA =====
const firstName = "Misbah",
  lastName = "Hulmunir",
  age = 20,
  isLikeCoding = true;

console.log("Nama saya " + firstName + " " + lastName + ", umur saya " + age + " tahun, coding is fun? " + isLikeCoding);
