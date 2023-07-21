function isLeapYear(year) {
  let valid = false
  if(year%4 === 0){
      valid = true
    if(year%100 === 0 && year%400 !==0){
      valid = false
    }
  }
  return valid
}