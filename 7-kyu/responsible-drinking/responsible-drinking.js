function hydrate(s) {
  // your code here
  let collection = (s.match(/\d+/g));
  let nagg = collection.reduce((accumulator,currentValue) => accumulator + Number(currentValue), 0);
//   return collection.map(col => sumation+=col);
  if (nagg>1){
    return `${nagg} glasses of water`
  } else {
    return `${nagg} glass of water`
  }
}
​
​
console.log(hydrate("1 shot, 5 beers, 2 shots, 1 glass of wine, 1 beer"));