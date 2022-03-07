// ================= BAGIAN PERTAMA ================
// const inputUser = prompt('masukan kata yang mo di test!');
// const regex = /^[A-Z]/;
// if (regex.test(inputUser) == true) {
//     console.log('Huruf pertama huruf besar');
// } else {
//     console.log('Huruf pertama bukan huruf besar');
// }




// ================ BAGIAN KEDUA =================
// const inputUser = prompt('masukan no hp!');
// const regex = /^[0-9]+$/;
// if (!regex.test(inputUser) == true) {
//     console.log('hanya menerima digit angka');
// }


// ================ BAGIAN KETIGA ==================
function coultDown(angka) {
    console.log(angka)
    let nextAngka = angka - 1;
    if (nextAngka > 0) {
        coultDown(nextAngka);
    }
}
coultDown(5)

// ================ BAGIAN KEEMPAT ==================
// ini merupakan bluefrient dri object mahasiswa yang mau kita buat
// class Mahasiswa {
//     constructor(nama, npm) {
//         this.nama = nama;
//         this.npm = npm;
//     }
//     sapa() {
//         return `Halo, perkenalkan nama saya ${this.nama}.`
//     }
// }

// const misbah = new Mahasiswa('misbah', 21552011178);






// ================ BAGIAN KELIMA ================
// Module adalah file Javascript yang di dalamnya terdapat value dari objects, functions, dan variables. Kemudian file tersebut dapat diexport dan diimport oleh file lain. Yang mana file lain yang mengimportnya dapat menggunakan values yang ada di file modules tersebut.

