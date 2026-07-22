function getCount(str) {
  let count = 0;
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  
  for (let char of str.toLowerCase().split('')) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  
  return count;
}