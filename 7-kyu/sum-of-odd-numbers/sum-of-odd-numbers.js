function rowSumOddNumbers(n) {
  // TODO
  let firstNumber = (n**2) - n + 1;
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += firstNumber;
    firstNumber += 2;
  }
  
  return sum;
}