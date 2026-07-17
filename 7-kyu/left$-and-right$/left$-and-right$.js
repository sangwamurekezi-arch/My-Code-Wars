    if (i > str.length) {
      return str;
    }
    return str.slice(-i);
  }
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
​
​
​
​
// function left$( str, i ) {
//   // type here..
//   if (typeof i === "number"){
//     if (i === 0){
//       return "";
//     } else if (i === undefined) { 
//       i = 1
//       return i;
//     } else if (i < 0 || i > str.length){
//       return str;
//     } else if(typeof i === "string"){
//       return str.slice(0, i);