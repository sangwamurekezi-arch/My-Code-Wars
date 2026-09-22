// function divisibleCount(x, y, k) {
//    //code me
  
//   let count = 0;
//   for (let i = x; i <= y; i++) {
//     if (i % k === 0) {
//       count++;
//     }
//   }
//    return count;
// }
​
// console.log(divisibleCount(1,9,3));
​
​
​
function divisibleCount(x, y, k) {
   //code me
  k=Math.abs(k);
  
  return Math.floor(y / k) - Math.floor((x - 1) / k)
}
​
console.log(divisibleCount(1,129,10));
​
​