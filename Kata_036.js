function maskify(cc) {
  let ccArray = cc.split("")
  let resultArray = []
  for(let i = 0; i<ccArray.length; i++){
    if(i<(ccArray.length-4)){
      resultArray.push("#")
    } else{
      resultArray.push(ccArray[i])
    }
  }
  return resultArray.join("")
}