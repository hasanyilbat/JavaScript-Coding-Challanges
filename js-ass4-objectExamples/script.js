const kisiler = [
  { name: "Ahmet", surname: "Can", job: "developer", age: 30 },
  { name: "Mehmet", surname: "Baki", job: "tester", age: 35 },
  { name: "Nur", surname: "Ersan", job: "team lead", age: 40 },
  { name: "Merve", surname: "Veli", job: "developer", age: 26 },

  { name: "Ruzgar", surname: "Kuzey", job: "tester", age: 24 },
];

//* Ornek4: Yasi(age) 33 den kücük olan kisilerin adlarini (name) listeyiniz.
console.log(
  kisiler
    .filter((kisi) => kisi.age < 33)
    .forEach((kisi) => console.log(kisi.name))
);

//* Ornek5: 33 yasindan kücüklerin isimlerini diziye saklayiniz.

const kücükKisiler = kisiler
  .filter((kisi) => kisi.age < 33)
  .map((kisi) => kisi.name);

console.log(kücükKisiler);

//* Ornek6: Meslegi developer olanlarin isim ve yaslarini yeni bir Obje olarak
//* yeni diziye sakla yiniz.

const developerKisiler = kisiler
  .filter((kisi) => kisi.job === "developer")
  .map((kisi) => ({ isim: kisi.name, yas: kisi.age }));

console.log(developerKisiler);
