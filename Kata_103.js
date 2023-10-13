function factors(integer, limit){
  let result = []
  
  if(limit > integer){
    return []
  }
  
  let i = integer
  
  while(i >= limit){
    if(integer % i == 0){
      result.push(i)
    }
    i--
  }
  return result.sort((a,b)=>(a-b))
}