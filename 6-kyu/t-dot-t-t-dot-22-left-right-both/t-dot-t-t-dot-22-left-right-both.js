  let leftHand = "12345!@#$%qwertasdfgzxcvbQWERTASDFGZXCVB" ;
  let rightHand =  "67890^&*()yuiopYUIOPhjkl;''HJKLnm,./";
  
  text = text.replace(/ /g, '');
  
  let lowCaseText = text.toLowerCase();
​
  let rightUsage = false;
  let leftUsage = false;
  for (const low of lowCaseText) {
    if(rightHand.includes(low)) {
      rightUsage=true
    } else if (leftHand.includes(low)) {
      leftUsage=true
    } 
  }
  if (!rightUsage && !leftUsage ) return '';
  if (rightUsage && leftUsage ){
    return "Both"
  }
  return leftUsage? "Left": "Right"
  
}
​
console.log(leftRightOrBoth("xyz"))
console.log(leftRightOrBoth("look up"));
console.log(leftRightOrBoth("^&*()"))
​
​
​
// function leftRightOrBoth(text){
  
//   let leftHand = "12345!@#$%qwertasdfgzxcvbQWERTASDFGZXCVB" ;
//   let rightHand =  "67890^&*()yuiopYUIOPhjkl;''HJKLnm,./";
  
//   text = text.replace(/ /g, '');
  