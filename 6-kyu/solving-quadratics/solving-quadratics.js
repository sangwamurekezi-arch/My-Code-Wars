function solveQuadratic(a, b, c) {
  // Edge Case 1: a is 0 (Linear equation: bx + c = 0)
  if (a === 0) {
    if (b === 0) return undefined; // No variable to solve for
    return [-c / b];
  }
  
  // Edge Case 2: c is 0 (ax^2 + bx = 0 => x(ax + b) = 0)
  if (c === 0) {
    let x1 = 0;
    let x2 = -b / a;
    // If b is also 0, x1 and x2 are both 0. Return a single value.
    if (b === 0) return [0];
    return [x1, x2].sort((n1, n2) => n2 - n1);
  }
​
  // Calculate the discriminant for remaining quadratics
  let discriminant = (b * b) - (4 * a * c);
  
  // Edge Case 3 & 4: Discriminant is 0 or negative
  if (discriminant < 0) {
    return undefined; 