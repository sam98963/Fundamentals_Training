var encryptThis = function(text) {
  let arr = text.split(" ");
  let result = []
  arr.forEach(item=>{
    if(item === ""){
      result.push("")
    } else {
      const firstChar = item.charCodeAt(0).toString()
      if(item.length > 2){
        let word = firstChar + item.slice(-1) + item.slice(2, -1) + item.charAt(1)
        result.push(word)
      } else if(item.length === 2){
        let word = firstChar + item.charAt(1)
        result.push(word)
      } else {
        result.push(firstChar)
      }
    }
  })
  return result.join(" ")
}