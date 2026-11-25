function equableTriangle(a,b,c) {
  //Your code here!
  // For the Area, we are going to use Heron's formula
  // first calculate the value of s
  let s = (a + b + c)/2;
  // then calculate the Area
  let area = Math.floor((s * (s - a) * (s - b) * (s - c)) ** .5);
  // Calculate the perimeter
//   let perimeter = a + b + c;
  let perimeter = s * 2;
  // Compare and generate Boolean values
  if (perimeter === area) {
    return true;
  } else {
    return false;
  }
  
}