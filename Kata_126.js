function checkConcatenatedSum(number, n){
  let positive = true
  let array = number.toString().split("")
  let sum = 0
  if(number < 0){
    positive = false
    array = array.slice(1)
  }
  for(let i = 0; i < array.length; i++){
    if(positive){
    sum += +concatenate(array[i], n)
    } else{
    sum -= +concatenate(array[i], n)
    }
  }
  return sum === number
}

let concatenate = (num, n)=>{
  let number = num.toString().repeat(n)
  return number
}