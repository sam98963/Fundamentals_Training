function order(words){
  let arrayOfWords = words.split(" ")
  let result = ""
  let resultArray = []
  if(words.length > 0){
    for(let i = 1; i<=arrayOfWords.length; i++){
      for(let j = 0; j<arrayOfWords.length; j++){
        if(arrayOfWords[j].includes(`${i}`)){
          resultArray[i-1] = arrayOfWords[j]
        }
      }
    }
  }
  result = resultArray.join(" ")
  return result
}