function fibfinder(n) {
  // 1,1,2,
  if (n < 2) {
    return 1;
  } else {
    return fibfinder(n - 2) + fibfinder(n - 1);
  }
}

console.log(fibfinder(7));
