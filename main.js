// ======================================================
// LATIHAN JAVASCRIPT ES6+
// Nama: Rafa
// ======================================================

console.log("===== 1. LET DAN CONST =====");

// let (bisa diubah)
let nama = "Rafa";
console.log("Nama Awal :", nama);

nama = "Haidar";
console.log("Nama Baru :", nama);

// const (tidak bisa diubah)
const sekolah = "SMK TI BAZMA";
console.log("Sekolah :", sekolah);

// ======================================================

console.log("\n===== 2. ARROW FUNCTION =====");

const salam = (nama) => {
    return `Halo, ${nama}!`;
};

console.log(salam("Rafa"));

// ======================================================

console.log("\n===== 3. TEMPLATE LITERALS =====");

const umur = 17;

const perkenalan = `Nama saya ${nama} dan umur saya ${umur} tahun.`;

console.log(perkenalan);

// ======================================================

console.log("\n===== 4. DESTRUCTURING =====");

// Array
const angka = [10, 20, 30];

const [a, b, c] = angka;

console.log("Array:");
console.log(a);
console.log(b);
console.log(c);

// Object
const siswa = {
    nama: "Rafa",
    umur: 17,
    kelas: "XII"
};

const { kelas } = siswa;

console.log("Object:");
console.log(kelas);

// ======================================================

console.log("\n===== 5. SPREAD OPERATOR =====");

// Array
const buah1 = ["Apel", "Jeruk"];
const buah2 = ["Mangga", "Pisang"];

const semuaBuah = [...buah1, ...buah2];

console.log(semuaBuah);

// Object
const data1 = {
    nama: "Rafa"
};

const data2 = {
    umur: 17
};

const dataLengkap = {
    ...data1,
    ...data2
};

console.log(dataLengkap);

// ======================================================

console.log("\n===== 6. REST OPERATOR =====");

const jumlah = (...angka) => {

    return angka.reduce((total, nilai) => total + nilai, 0);

};

console.log(jumlah(10, 20, 30, 40));

// ======================================================

console.log("\n===== 7. MODULE =====");

console.log(`
Module (import/export) TIDAK dapat dijalankan
dalam satu file JavaScript.

Module minimal membutuhkan dua file.

Contoh:

math.js
export function tambah(){}

main.js
import { tambah } from "./math.js";
`);

// ======================================================

console.log("\n===== 8. PROMISE =====");

const getData = () => {

    return new Promise((resolve) => {

        setTimeout(() => {

            resolve("Data berhasil diambil menggunakan Promise");

        }, 2000);

    });

};

getData().then((hasil) => {

    console.log(hasil);

});

// ======================================================

console.log("\n===== 9. ASYNC / AWAIT =====");

const tampilkanData = async () => {

    const hasil = await getData();

    console.log("Async/Await :", hasil);

};

tampilkanData();

// ======================================================

console.log("\n===== 10. CLASS =====");

class Mahasiswa {

    constructor(nama, umur) {

        this.nama = nama;
        this.umur = umur;

    }

    tampilkanData() {

        console.log(`Nama : ${this.nama}`);
        console.log(`Umur : ${this.umur}`);

    }

}

const mahasiswa1 = new Mahasiswa("Rafa", 17);

mahasiswa1.tampilkanData();

// ======================================================

console.log("\n===== 11. INHERITANCE =====");

class MahasiswaTI extends Mahasiswa {

    constructor(nama, umur, jurusan) {

        super(nama, umur);

        this.jurusan = jurusan;

    }

    tampilkanJurusan() {

        console.log(`Jurusan : ${this.jurusan}`);

    }

}

const mahasiswa2 = new MahasiswaTI(
    "Rafa",
    17,
    "Teknik Informatika"
);

mahasiswa2.tampilkanData();

mahasiswa2.tampilkanJurusan();

// ======================================================

console.log("\n===== PROGRAM SELESAI =====");