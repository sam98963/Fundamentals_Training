function smallEnough(a, limit){
  let result = true
  a.forEach(item=>{
    if(item > limit){
      result = false
      return;
    }
  })
  return result
}