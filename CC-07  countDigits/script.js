function countDigits(digit, low, high) {
  const numArr = [];
  let counter = 0;
  if (digit < 0) {
    return -1;
  } else {
    for (let i = low; i <= high; i++) {
      numArr.push(String(i).split(""));
    }
    const charArr = [].concat.apply([], numArr);

    charArr.map((num) => {
      if (num === String(digit)) {
        counter++;
      }
    });
    return counter;
  }
}

console.log(countDigits(5, 9, 10));
