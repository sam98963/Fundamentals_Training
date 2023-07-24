function high(x){
  x = x.toLowerCase()
  let array = x.split(" ")
  let codeTotal = []
  for(let i = 0; i<array.length; i++){
    let wordTotal = 0
    for(let j = 0; j<array[i].length; j++){
      wordTotal += array[i].charCodeAt(j)-96
    }
    codeTotal.push(wordTotal)
  }
    let highestIndex = codeTotal.indexOf(Math.max(...codeTotal));
    return array[highestIndex]
  }