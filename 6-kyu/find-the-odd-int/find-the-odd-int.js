function findOdd(A) {
  //happy coding!
  
  
  for (const it of A) {
    let count = 0;
    
    
    for (const a of A) {
    if (a === it) {
      count++;
    }
  }
    if (count%2 !== 0) {
    return it;
  }
    
  }
  
  
}
​
console.log(findOdd([1,2,2,3,3,3,4,3,3,3,2,2,1]))