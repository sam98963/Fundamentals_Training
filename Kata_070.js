function solution(string) {
  let indexes = []
  let words = []
  let capital = false
    for(let i = 0; i<string.length; i++){
      if(string.charCodeAt(i)<91 && string.charCodeAt(i)>64){
        indexes.push(i)
        capital = true
      }
    }
  if(!capital){
    return string
  }
  indexes.forEach((item, index) => {
    if(index === 0){
      words.push(string.slice(0, indexes[0]) + " " + string.slice(indexes[0], indexes[1]))
    } else if(index !== 0 && index < indexes.length-1){
      words.push(string.slice(indexes[index], indexes[index+1]))
    } else {
      words.push(string.slice(indexes[index]))
    }})
  return words.join(" ")
  }

