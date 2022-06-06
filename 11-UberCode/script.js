//* This is an interview question asked by Uber.

//* Given an array of integers, return a new array such that each element at index i of the new array is the product of all the numbers in the original array except the one at i.

//* For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24]. If our input was [3, 2, 1], the expected output would be [2, 3, 6].

function multipleArray(arr) {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    const num = arr.reduce((x, y) => x * y) / arr[i];
    newArr.push(num);
  }
  return newArr;
}

console.log(multipleArray([3, 2, 1]));
