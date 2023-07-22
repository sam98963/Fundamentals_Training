function sumMul(n,m){
  let sum = 0
  if (m<=n){
    return "INVALID"
    }
      for (let i = 1; (n*i)<m; i++){
          sum += (n*i)
      }
  return sum
}