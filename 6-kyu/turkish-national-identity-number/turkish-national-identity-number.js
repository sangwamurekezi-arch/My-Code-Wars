  let num6 = Number(numStr.charAt(1)); // 5
  let num7 = Number(numStr.charAt(3)); // 2
  let num8 = Number(numStr.charAt(5));
  let num9 = Number(numStr.charAt(7));
  let num10 = Number(numStr.charAt(9));
  let num11 = Number(numStr.charAt(10))
  
  let numOfsec = (num6+num7+num8+num9);
  
  let substraction = numOffirst - numOfsec;
  
  let modulo = substraction % 10;
  
  let sumFirstTen = (num1 + num6 + num2 + num7 + num3 + num8 + num4 + num9 + num5 + num10) % 10;
  
  
  if ((modulo == num10 && sumFirstTen == num11)) {
    return true;
  } else {
    return false;
  }
  
}