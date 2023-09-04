function towerBuilder(nFloors) {
  let resultArray = []
  let maxWidth = (nFloors*2)-1
  for(let i = 1; i<= nFloors; i++){
  let blockCount = (2 * i)-1
  let gapAmount = Math.floor((maxWidth - blockCount)/2)
  let string = " ".repeat(gapAmount) + "*".repeat(blockCount) + " ".repeat(gapAmount)
  resultArray.push(string)
  }
return resultArray
}