let kareAl = (x) => x ** 2;
let küpAl = (x) => x ** 3;
let üsAl = (x, y) => x ** y;

console.log(kareAl(5), küpAl(5), üsAl(5, 2));

let artikYıl = function (year) {
  return (
    (year % 4 == 0 && year % 100 != 0) || (year % 4 == 0 && year % 400 == 0)
  );
};
console.log(artikYıl(1992));
