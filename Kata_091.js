function findMissingLetter(array){
  let start = array[0].charCodeAt(0)
  for(let i = 1; i<array.length; i++){
    if(array[i].charCodeAt(0) !== start + i){
      return String.fromCharCode(array[i].charCodeAt(0)-1)
    }
  }
}