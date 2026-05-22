String.prototype.toAlternatingCase = function () {
  // Define your method here :)
  let newSet = '';
  for (const letter of this) {
    if (letter === letter.toUpperCase()){
      newSet += letter.toLowerCase();
    } else if ( letter === letter.toLowerCase()){
      newSet += letter.toUpperCase();
    }
  }
  return newSet
}
​
​
​
​