// array hewan
const hewan = [
  { nama: "Kucing", warna: "putih" },
  { nama: "Domba", warna: "hitam" },
  { nama: "Sapi", warna: "coklat" },
];

// cari hewan dan masukan hasil pencarian ke variabel hasil
const hasilAda = hewan.find(({ nama }) => nama === "Kucing");
const hasilTidakAda = hewan.find(({ nama }) => nama === "Gajah");

// cetak hasil pencarian
console.log(hasilAda);
console.log(hasilTidakAda);
