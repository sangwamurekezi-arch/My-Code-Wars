//   }
//   let count = 0;
//   for (let tik of array1){
// //     if (array2.include(tik)){
// //       count+=1;
// //     }
//     let containing = array2.map(ar => {if (array2.includes(ar)) { count++; } else{count--}});
//   }
//   for (let tik of array1){
//     const square = tik**2;
//     let containing2 = array2.map(ar => {if (array2.includes(ar)) { count++; } else{count--}})
//   }
//   if (count > 0){
//     return true;
//   } else {
//     return false;
//   }
// }
console.log("Test 1:", comp([121, 144, 19, 161, 19, 144, 19, 11], 
                            [121, 14641, 20736, 361, 25921, 361, 20736, 361]));
console.log(comp([121, 144, 19, 161, 19, 144, 19, 11], [132, 14641, 20736, 361, 25921, 361, 20736, 361]))
console.log(comp([121, 144, 19, 161, 19, 144, 19, 11], [231, 14641, 20736, 361, 25921, 361, 20736, 361]))