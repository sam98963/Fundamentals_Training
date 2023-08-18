function doubleChar(str) {
  let finalArr = []
  for(let i = 0; i<str.length; i++){
    finalArr.push(str.charAt(i))
    finalArr.push(str.charAt(i))
  }
return finalArr.join("")
}