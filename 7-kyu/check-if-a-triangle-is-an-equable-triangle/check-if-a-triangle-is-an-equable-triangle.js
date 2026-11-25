function equableTriangle(a,b,c) {
  let s = (a + b + c)/2;
  let area = Math.floor((s * (s - a) * (s - b) * (s - c)) ** .5);
  // Calculate the perimeter
//   let perimeter = a + b + c;
  let perimeter = s * 2;
  // Compare and generate Boolean values
  return perimeter === area;
  
}