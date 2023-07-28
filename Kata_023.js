function isPrime(num) {
  if(num < 2){
    return false
  } if (num === 2 || num === 3){
    return true
  } if (num > 3){
    if ((num + 1)%6===0 || (num -1)%6 ===0 && num%5 !== 0){
      return true
    }
  }
  return false
}
