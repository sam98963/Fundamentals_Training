function minDistance(n){
  let factors = []
  for(let i = 1; i<=n; i++){
    if(n%i === 0){
      factors.push(i)
    }
  }
  factors.forEach((item, index)=>{
    if(index < factors.length - 1){
    factors[index] = factors[index + 1] - item}}
  )
  return Math.min(...factors)
}