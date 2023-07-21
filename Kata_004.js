function twoArePositive(a, b, c) {
  let arr = [a, b, c]
  let posArray = []
  for (let i=0; i<arr.length; i++){
    if(arr[i]>0){
      posArray.push(arr[i])
    }
  }
  if(posArray.length === 2){
    return true
  }
  return false
}