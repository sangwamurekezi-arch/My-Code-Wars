function add(arr) {
  let newArray = [];
  let sum = 0;
  for (let i =0; i < arr.length; i++){
//     sum += arr[i];
    newArray.push(sum += arr[i]);
    
  }
  return newArray;
}