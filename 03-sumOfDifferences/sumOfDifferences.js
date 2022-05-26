//* Your task is to sum the differences between consecutive pairs in the array in descending order.

const arr = [-3, -2, -1];
let toplam = 0;
function sumOfDifferences(arr) {
  arr.sort(function (a, b) {
    return b - a;
  });
  for (let i = 0; i < arr.length - 1; i++) {
    toplam += arr[i] - arr[i + 1];
  }
  return toplam;
}
console.log(sumOfDifferences(arr));
