function getLargerNumbers(a, b) {
  let newArray = []
  a.forEach((item,index)=>{
    if(item >= b[index]){
      newArray.push(item)
    } else {
      newArray.push(b[index])
    }
  })
  return newArray;
}