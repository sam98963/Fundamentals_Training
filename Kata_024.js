function pendulum(values) {
  values.sort((a,b)=>b-a)
  let left = []
  let right = []
for(let i = 0; i<values.length; i++){
  if(i%2 ===0){
    right.push(values[i])
  } else{
    left.push(values[i])
  }
}
if(values.length%2 !== 0){
return right.concat(left.reverse())
} else {
  return left.concat(right.reverse())
}
}