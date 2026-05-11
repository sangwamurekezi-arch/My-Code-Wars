function all(arr, fun) {
   for (const ar of arr){
     if (!fun(ar)){
       return false
     } 
   }
  return true;
}
const greaterThan9 = function (x){
  x > 9;
}
const biggerIntime = function (s){
  s > 2;
}
console.log(all([1, 2, 3, 4, 5], greaterThan9)); 
console.log(all([1, 2, 3, 4, 5], biggerIntime))