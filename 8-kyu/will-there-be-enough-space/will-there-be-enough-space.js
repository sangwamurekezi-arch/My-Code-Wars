function enough(cap, on, wait) {
  // your code here
  if ((cap === (on + wait)) || cap > (on + wait)){
    return 0;
    } else if ((on + wait) > cap){
      let calculation = (on + wait) - cap;
      return calculation; 
    }
}
console.log(enough(100, 60, 50));