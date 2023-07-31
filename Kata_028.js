function maxMultiple(divisor, bound){
  let result = 0
  for(let i =0; i<=(bound/divisor); i++){
    result = i*divisor
  }
  return result
}