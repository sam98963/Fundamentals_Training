var seqlist = function(first,c,l){
  let result = [first];
  let sum = first
  for(let i = 1; i < l; i++){
    sum += c
    result.push(sum)
  }
  return result
}