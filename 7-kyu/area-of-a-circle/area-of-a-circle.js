function circleArea(radius) {
  if (radius <= 0){
    throw new Error ("Please! Revise this radius")
  }
  return Math.PI * (radius**2); 
}
circleArea(867);