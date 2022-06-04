function countDigits(digit, low, high) {
  const numArr = [];
  let counter = 0;
  if (digit < 0 || digit > 9) {
    return -1;
  } else {
    for (let i = low; i <= high; i++) {
      numArr.push(String(i).split(""));
      
    }
    console.log(numArr);
    const charArr = [].concat.apply([], numArr);
console.log(charArr);
    charArr.map((num) => {
      if (num === String(digit)) {
        counter++;
      }
    });
    return counter;
  }
}

console.log(countDigits(3, 30, 39));
