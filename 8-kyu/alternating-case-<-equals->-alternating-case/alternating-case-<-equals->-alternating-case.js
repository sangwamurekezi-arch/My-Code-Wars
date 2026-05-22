String.prototype.toAlternatingCase = function () {
  // Define your method here :)
  let letters = this.split('');
  let newSet = letters.map(letter => {
    if (letter === letter.toUpperCase()){
      return letter.toLowerCase();
    } else if (letter === letter.toLowerCase()) {
      return letter.toUpperCase();
    } else {
      return letter;
    }
  })
  return newSet.join('')
}
​