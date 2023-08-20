function eliminateUnsetBits(number) {
  let resultArray = []
  let array = number.toString().split("")
  if(!array.includes("1")){
    return 0
  } else {
    for(let i = 0; i<array.length; i++){
      if(array[i] === "1"){
        resultArray.push(array[i])
      }
    }
  }
  return parseInt(resultArray.join(""), 2)
}