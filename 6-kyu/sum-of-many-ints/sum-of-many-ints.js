function f(n, m) {
  // get the value of k 
  let k = Math.floor(n/m);
  
  // get the value of r
  let r = n%m
  
  let sum_per_cycle = (m*(m-1))/2;
  
  let sum_of_leftovers = (r*(r+1))/2;
  
  return (k * sum_per_cycle) + sum_of_leftovers;
}
​
console.log(f(86405089, 88455929))
​
​
​
// function f(n, m) {
//   let arr=[];
//   for (let i =1; i=< n ;i++) {
//     let num = i%m;
//     arr.push(num);
//   }
//   return arr.reduce((acc,cur) => acc + cur ,0);
// }