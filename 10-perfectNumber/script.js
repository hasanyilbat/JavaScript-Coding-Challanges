//! Perfect Number
// pseudocode
// for aralık
// for aralık2
//   mod == 0 sa arraye pushla

function checkPerfectNumber(inputNumber) {
  if (inputNumber === 0) {
    return false;
  }
  let sum = 0;
  for (let i = 1; i < inputNumber; i++) {
    if (inputNumber % i == 0) {
      sum += i;
    }
  }
  if (sum == inputNumber) {
    return true;
  }
  return false;
}
