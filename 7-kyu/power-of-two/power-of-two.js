function isPowerOfTwo(n){
  //.. should return true or false ..
  
  let power = Math.log2(n);
  
  return Number.isInteger(power);
  
}
​
console.log(isPowerOfTwo(4096))