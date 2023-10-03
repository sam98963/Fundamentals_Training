function longestConsec(strarr, k) {
  if(strarr.length === 0 || k > strarr.length || k <= 0){
    return ""
  }
  const concatWords = []
    for(let i = 0; i<=strarr.length - k; i++){
      let word = strarr[i]
      for(let j = 1; j < k; j++){
        word += strarr[i+j]
      }
      concatWords.push({word, position: i})
    }
  concatWords.sort((a, b) => (a.position - b.position, b.word.length - a.word.length))
  return concatWords[0].word
}