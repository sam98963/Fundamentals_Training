function SeriesSum(n)
{
  if(n === 0){
    let result = 0
    return result.toFixed(2)
  }
  let denom = 1
  let total = 1
  for(let i = 0; i<n-1; i++){
    denom += 3
    total+=(1/denom)
  }
return total.toFixed(2)
}