//* This is an interview question asked by Google.
//* Given a list of numbers and a number k, return whether any two numbers from the list add up to k.
//* For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.
const arr = [10, 15, 3, 7];
let arrays;
let k = +prompt("Sayı giriniz...");
function findSum(k) {
  for (let i = 0; i < arr.length; i++) {
    arrays = arr.map((num) => num + arr[i]);
    arrays.splice(i, 1);
    if (arrays.includes(k)) {
      return true;
    }
  }
  return false;
}

console.log(findSum(k));
