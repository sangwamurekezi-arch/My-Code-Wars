function firstDup(string) {
  const strArr = string.split('');
  for (const str of strArr) {
    let count = 0;
​
    for (const word of strArr) {
      if (word === str) {
        count++;
      }
    }
​
    if (count > 1) {
      return str;
    }
  }
​
  return undefined;
}
​
​
​
​
​
​
// function firstDup(string) {
//   let strArr = string.split(' ')
//     for (const str of strArr) {
//       if (strArr.filter(s => s===str).length > 1) {
//         return str;
//       }
//     }
//   return undefined
// }
​
​