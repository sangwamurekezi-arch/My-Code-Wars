function findDeletedNumber(arr, mixArr) {
  // your code
  if (arr.length === mixArr.length){
    return 0;
  } else{
    let missingNum = arr.filter(ar => !mixArr.includes(ar));
    const [x] = missingNum;
    return x;
  }
}
​