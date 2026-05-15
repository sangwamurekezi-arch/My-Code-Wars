function eliminateUnsetBits(number) {
  // your code here
  let newmethod = number.split('').filter( num => num === '1' ).join('');
  if (newmethod.length === 0){
    return 0;
  } else{
    let calculation = parseInt(newmethod, 2);
    return calculation;
  }
}
console.log(eliminateUnsetBits("11010101010101"))