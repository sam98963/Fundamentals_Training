var number=function(array){
  let resultArray = array.map((item, index)=>{
    return `${index + 1}: ${item}`
  })
return resultArray
}