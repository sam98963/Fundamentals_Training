function longestWord(stringOfWords){
  return stringOfWords.split(' ').reverse().sort((a,b) =>  b.length - a.length)[0];
}