function createPhoneNumber(numbers){
  const max = 10;
  const checkedNumbers = numbers.filter(num => typeof num === 'number' && !Number.isNaN(num));
  if (checkedNumbers.length !== max){
    return 'Big Issue';
  } else {
    return `(${checkedNumbers.slice(0,3).join('')}) ${checkedNumbers.slice(3,6).join('')}-${checkedNumbers.slice(6,10).join('')}`
  }
}
​
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))