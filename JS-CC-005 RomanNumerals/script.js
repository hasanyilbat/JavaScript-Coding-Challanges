let number = 248;
let search = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1,
};

let roman = "";
for (const key in search) {
  while (number >= search[key]) {
    roman += key;
    number -= search[key];
  }
}
console.log(roman);
