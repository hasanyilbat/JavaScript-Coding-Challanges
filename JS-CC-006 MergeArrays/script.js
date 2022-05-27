const arr1 = [8, 9, 10];
const arr2 = [];

console.log(arr2.concat(arr1));

console.log([...arr2, ...arr1]);

console.log(arr2 + "," + arr1);

function arrConc() {
  return arr2.concat(arr1);
}
function arrConc1(a, b) {
  return a + "," + b;
}
console.log(arrConc1(arr2, arr1));

console.log(arrConc());
