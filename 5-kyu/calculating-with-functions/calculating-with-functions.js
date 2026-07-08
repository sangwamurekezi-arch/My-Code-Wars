    return argument(6)
  }
}
function seven(argument) {
  if (argument === undefined){
    return 7;
  } else{
    return argument(7)
  }
}
function eight(argument) {
  if (argument === undefined){
    return 8;
  } else{
    return argument(8)
  }
}
function nine(argument) {
  if (argument === undefined){
    return 9;
  } else{
    return argument(9)
  }
}
​
function plus(a) {
    return function(b) {
        return a + b;
    }
}
function minus(a) {
    return function(b) {
        return b-a;
    }
}
function times(a) {
    return function(b) {
        return a * b;
    }
}
function dividedBy(a) {
    return function(b) {
        return Math.floor(b/a);
    }
};
​
console.log(seven(plus(five())));