function comp(array1, array2){
  if (array1 === null || array2 === null || array1 === undefined || array2 === undefined){
    return false;
  }
  
  if (array1.length !== array2.length){
    return false;
  }
  
  if (array1.length === 0 && array2.length === 0){
    return true;
  }
  
  // FIXED: Copy array2 to track multiplicities
  let tempArray2 = [...array2];
  let count = 0;
  
  for (let tik of array1){
    const square = tik * tik;
    const index = tempArray2.indexOf(square);
    
    if (index !== -1){
      count++;
      tempArray2.splice(index, 1);  // Remove the matched element
    }
  }
  
  return count === array1.length;
}
​
​
​
​
​
// function comp(array1, array2){
//   //your code here
//   if (array1.length === null || array2 === null){
//     return false;
//   }
//   if (array1.length !== array2.length){
//     return false;
//   }
//   if (array1.length === 0 && array2.length === 0){