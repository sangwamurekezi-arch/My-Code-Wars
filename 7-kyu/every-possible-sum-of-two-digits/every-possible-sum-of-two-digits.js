function digits(n) {
  let arr = [];
  let digit = String(n);
  
  if (digit.length < 2) {
    return [];
  }
  
  
  for (let i = 0; i < digit.length; i++){
    for (let j = i + 1; j < digit.length; j++) {
      let result = Number(digit[i]) + Number(digit[j]);
      arr.push(result);
    }
  }
  return arr;
}
​
console.log(digits(234323))
console.log(digits(12345))