function sexy_prime(x, y){
  if(x === y || x === 1 || y === 1){
  return false
}
let max = Math.max(x , y);
let min = Math.min(x , y);
for(let i = 2; i < Math.sqrt(max); i++){
  if(x % i === 0 || y % i === 0){
    return false
  }
}
if(max - min !== 6){
  return false
}
return true
}