function interest(P, r, n) {
  let simpleInterest = Math.round(P * (1 + r * n));
  let compoundInterest = Math.round(P * (1 + r) ** n);
  return [simpleInterest, compoundInterest];
}
console.log(interest(100, 0.1, 2));
