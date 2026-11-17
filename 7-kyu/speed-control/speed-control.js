function gps(s, x) {
    // your code
  if (x.length <=1) return 0;
  
  let arrCopy = [...x];
  
  for (let i = 0; i < arrCopy.length - 1; i++) {
    arrCopy[i] = (arrCopy[i + 1] - arrCopy[i]);
    
    arrCopy[i] = Math.floor((arrCopy[i]/s) * 3600);
  }
//   arrCopy.pop();
  
//   let hourlySpeed = 
  return Math.max(...arrCopy)
  
  console.log(arrCopy);
  
}
gps(12, [0.0, 0.11, 0.22, 0.33, 0.44, 0.65, 1.08, 1.26, 1.68, 1.89, 2.1, 2.31, 2.52, 3.25]);
​