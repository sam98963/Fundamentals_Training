function longestCollatz (inputArray) {
  let countArray = []
  for(let i = 0; i<inputArray.length; i++){
    let value = inputArray[i]
    let count = 0
    while(value !== 1){
      count++
      if(value%2 === 0){
        value /= 2
      } else {
        value = (3*value)+1
      }
    }
    countArray.push(count)
  }
  let longestCollatzIndex = countArray.indexOf(Math.max(...countArray))
  return inputArray[longestCollatzIndex]
}