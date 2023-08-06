function printerError(s) {
  let regex = /[a-m]/
  let count = 0
  let letters = s.split("")
  for(let i = 0; i<letters.length; i++){
    if(!regex.test(letters[i])){
      count ++
    }
  }
 return `${count}/${s.length}`
}