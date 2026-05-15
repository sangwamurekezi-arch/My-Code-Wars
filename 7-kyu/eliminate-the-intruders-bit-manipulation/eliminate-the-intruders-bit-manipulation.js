function eliminateUnsetBits(number) {
  // your code here
  let newoutput= number.replace(/0/g, '')
  if(newoutput === ''){
    return 0;
  } else{
    let calculation = parseInt(newoutput, 2);
    return calculation;
  }
}
console.log(eliminateUnsetBits("10000000101"));