function expandedForm(num) {
  let numArray = Array.from(num.toString()).map(Number);
  let digitMultiplier = 10**(numArray.length-1)
  let stringArray = []
  for(let i = 0; i<numArray.length; i++){
    let expandedDigit = numArray[i]*digitMultiplier
    if(numArray[i]>0){
      stringArray.push(expandedDigit)
    }
      digitMultiplier/=10
  }
  return stringArray.join(" + ")
}