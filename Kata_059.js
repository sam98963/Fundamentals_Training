function duplicateEncode(word){
  let chars = word.toLowerCase().split("")
  let finalArray = []
  let duplicates = []
  let included = []
  for(let i = 0; i<word.length; i++){
    if(!included.includes(chars[i])){
      included.push(chars[i])
    } else {
      duplicates.push(chars[i])
    }
  } 
  chars.forEach((item)=>{
    if(duplicates.includes(item)){
      finalArray.push(")")
    } else {
      finalArray.push("(")
    }
  })
return finalArray.join("")
  // ...
}
