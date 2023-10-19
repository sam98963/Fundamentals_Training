function rotPred(arr){
  let center = arr.indexOf("S")
  if(Math.floor((arr.length-1) / 2) !== center){
    return 'Not a Valid Entry'
  }
  let lIndex = center - 1
  let rIndex = center + 1
  let total = 0
  while(lIndex >= 0 || rIndex <= arr.length-1){
  total += (lIndex - center) * arr[lIndex]
  total += (rIndex - center) * arr[rIndex]
  lIndex--
  rIndex++
}
  if(total === 0){
    return "steady"
  } else if(total < 0){
    return "anti clockwise"
  } else {
    return "clockwise"
  }
}