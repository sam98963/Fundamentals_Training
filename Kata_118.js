function toWeirdCase(string){
  let wordArray = string.split(" ")
  const newString = []
  wordArray.forEach(item => {
   let charArray = item.split("")
   charArray.forEach((char, index) => {
     if(index % 2 === 0){
       charArray[index] = char.toUpperCase()
     } else {
       charArray[index] = char.toLowerCase()
     }
   })
    newString.push(charArray.join(""))
  })
  return newString.join(" ")
}