function dropCap(n) {

  let arr = n.split(" ")
  let result = []
  for(let i = 0; i<arr.length; i++){
    if(arr[i].length > 2){
      let wordArray = []
      let word = arr[i].toLowerCase()
      for(let j = 0; j<arr[i].length; j++){
        if(j===0){
          wordArray.push(word.charAt(j).toUpperCase())
        } else {wordArray.push(word.charAt(j))}
      } result.push(wordArray.join(""))
    } else{
      result.push(arr[i]);
    }
  }
    return result.join(" ")
  }