function solve(s) {
  let array = s.split("")
  let sumsArray = []
  let totalString = ""
  for(let i = 0; i<array.length; i++){
    if(!isNaN(+array[i])){
      console.log(+array[i])
      totalString += array[i]
    } else if(totalString !== ""){
      sumsArray.push(+totalString)
      totalString = ""
    }
  }
    if(totalString !== ""){
      sumsArray.push(+totalString)
  }
  return Math.max(...sumsArray);
};