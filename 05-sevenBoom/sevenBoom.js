//*Create a function that takes an array of numbers and return "Boom!" if the digit 7 appears in the array. Otherwise, return "there is no 7 in the array".

function sevenBoom(arr) {
  let b = arr.map((num) => String(num).includes("7"));
  if (b.includes(true)) {
    return "Boom!";
  } else {
    return "there is no 7 in the array";
  }
}
