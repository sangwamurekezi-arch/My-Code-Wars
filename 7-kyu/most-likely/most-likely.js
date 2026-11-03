function mostLikely(prob1,prob2){
  const [fleftStr, frightStr] = prob1.split(":");
  const [sleftStr, srightStr] = prob2.split(":");
  
  // Convert to numbers in order for me to calculate
  
  const numFavorable1 = Number(fleftStr);
  const numTotal1 = Number(frightStr);
  
  const numFavorable2 = Number(sleftStr);
  const numTotal2 = Number(srightStr);
  
  // Now Make Calculations
  
  const first = numFavorable1 / numTotal1;
  const second = numFavorable2 / numTotal2;
  
  return first > second;
}