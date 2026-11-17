function arraySum(arr) {
  // sum ALL the things!
    if (arr.length === 0) return 0;
  
  let sum = 0;
  
  for (const single of arr) {
    if (Array.isArray(single)) {
      // We has to use recursion to solve this. Re-run the function and pass the array in and then add the sum from that array to the current sum we have.
          sum += arraySum(single);
    } else if (typeof single === "number" && !Number.isNaN(single)){
      sum += single;
    }
  }
  
  return sum;
}
​
​
​
​
​
​
​
​
​
​
​