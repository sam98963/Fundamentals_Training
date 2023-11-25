function validPhoneNumber(phoneNumber){
  let arr = phoneNumber.split("")
  if(arr.length !== 14){
    return false
  }
  for(let i = 0; i<arr.length; i++){
    if(arr[0] !== "(" || arr[4] !== ")" || arr[5] !== " " || arr[9] !== "-"){
      return false
    }}
  return true
}