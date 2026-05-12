/*
function findDeletedNumber(arr, mixArr) {
  // your code
  if (arr.length === mixArr.length){
    return 0;
  } else{
    const 
  }
}
*/
function findDeletedNumber(arr, mixArr) {
  let array1 = arr.reduce((acc,cur) => acc+cur, 0);
  let array2 = mixArr.reduce((acc,cur) => acc+cur, 0);
  let difference = array1 - array2;
  if (difference === 0){
    return 0;
  } else{
    return difference;
  }
}
console.log(findDeletedNumber([1,2,3,4,5], [3,4,1,5]))