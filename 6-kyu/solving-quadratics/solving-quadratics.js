function solveQuadratic(a, b, c) {
    let solution = b ** 2 - 4 * a * c
    if (solution < 0) { return undefined }
  // 0 is a "falsy" value. If the discriminant is 0, !d evaluates to true
    if (!solution)    { return [-b / (2 * a)] }
    let sqrt = solution ** .5
    return [(-b - sqrt) / (2 * a), (-b + sqrt) / (2 * a)]
}