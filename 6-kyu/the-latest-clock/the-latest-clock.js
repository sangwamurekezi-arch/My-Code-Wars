function latestClock(a, b, c, d) {
  const startPoint = [a, b, c, d].sort().join("");
  
  for (let hr = 23; hr >=0; hr--) {
    for (let min = 59; min >=0; min--) {
      
      let time = String(hr).padStart(2, "0") + ":" + String(min).padStart(2, "0");
      
      let compareDig = time.replace(":", "").split("").sort().join("");
      if (compareDig === startPoint) {
        return time;
      }
    }
  }
}
​
console.log(latestClock(1, 9, 8, 3));