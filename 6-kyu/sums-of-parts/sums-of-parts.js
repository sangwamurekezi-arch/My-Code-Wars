function partsSums(ls) {
//   let newArray = [];
    
  let sum = ls.reduce((acc, cur) => acc + cur, 0);
  
  const result = ls.map(num => {
    const atTheMoment = sum;
    sum -= num;
    return atTheMoment;
  });
  
  result.push(0);
  return result;
}