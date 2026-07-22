function getCount(str) {
  let simplifiedStr = str.toLowerCase();
  let unified = simplifiedStr.match(/[aeiou]/gi) || [];
  let count = 0;
  if (unified.length === 0){
    return 0;
  }
  for(const uni of unified){
    count++;
  }
  
  return count;
  
}
​
​
​