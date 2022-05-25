//! ## ÖDEV1:
//! fiyatlar dizisinde her bir fiyata %10 zam yapalım.
//! NOT: FOREACH kullanılmalı ve orjinal dizi değiştirilmeli.

const fiyatlar = [100, 250, 50, 89];

//* Psecode;
//*1 array deki her bir fiyata ulaş.
//*2 her bir elemana %10 zam yap.
//*3 forEach yap. orjinal dizi değişmeli.

fiyatlar.forEach(
  (price, index, array) => (array[index] = (price * 1.1).toFixed(2))
);
console.log(fiyatlar);

// !## ÖDEV2:
// !fiyatlar dizisindeki fiyatı 90'dan büyük olan değerleri
// !konsola tek tek bastırınız.

console.log(fiyatlar.filter((fiyat) => fiyat > 90));

const sonuc = fiyatlar.filter((fiyat) => fiyat > 90);

//! ## ÖDEV3:
//! fiyatlar dizisindeki fiyatı 110'dan küçük olan değerlere %10 artış yapın ve bu değerleri konsola tek tek bastırınız.

fiyatlar
  .filter((x) => x < 110)
  .map((x) => x * 1.1)
  .forEach((x) => console.log(x.toFixed(2)));

//!   ## ÖDEV4:
//! maaslar dizisinde 4000'den düsük olan maaslara %50 zam yapmak istiyoruz ve bunu ayri dizi olarak saklamak istiyoruz.

const maaslar = [3000, 5000, 4000, 6000, 6500];

maaslar
  .filter((x) => x > 4000)
  .map((x) => x * 1.5)
  .forEach((x) => console.log(x.toFixed(1)));

// !  ## ÖDEV5:
//! Maaslarin toplamini hem forEach ile hem de reduce methodu ile çözünüz.
let sum = 0;
const annualSalary = [25000, 3900, 3200, 120000, 73000];
annualSalary.forEach((v) => (sum += v));
console.log(sum);

//!REDUCE

annualSalary.reduce((a, b) => a + b);
console.log(annualSalary.reduce((a, b) => a + b));
