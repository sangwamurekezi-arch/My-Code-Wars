​
function letterCheck(arr) {
//write your code here!!
  const toSameCase = arr[0].toLowerCase()
  const secondCase = arr[1].toLowerCase()
  return secondCase.split('').every(second => toSameCase.includes(second))
}
​