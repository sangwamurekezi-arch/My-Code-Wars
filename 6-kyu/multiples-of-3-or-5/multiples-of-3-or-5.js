function solution(number){
  let section = 0;
  if (number <= 0){
      return 0;
    }
  for (let i = 0; i < number; i++){ 
      if (i % 3 === 0 || i % 5 === 0){
          section+=i
      }
  }
  return section;
}
console.log(solution(30));
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
// function solution(number){
//   let section = [];
//   if (number <= 0){
//       return 0;
//     }
//   for (let i = 0; i < number; i++){ 
//       if (!section.includes(i) && (i % 3 === 0 || i % 5 === 0)){
//           section.push(i)
//       }
//   }
//   return section.reduce((acc,cur)=> acc + cur);
// }
// console.log(solution(30));