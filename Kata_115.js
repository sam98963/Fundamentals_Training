function partsSums(ls) {
  let sums = []
  let sum = 0
  for(let i = ls.length-1; i>=0; i--){
    sum+=ls[i]
    sums[i] = sum;
  }
  sums.push(0)
  return sums
}