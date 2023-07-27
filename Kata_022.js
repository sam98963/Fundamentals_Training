function typist(s){
    let count = 0
    let caps = false
    for(let i =0; i<s.length; i++){
      if(s.charCodeAt(i)<97 && caps === false){
        count ++
        caps = true
      } if(s.charCodeAt(i)>=97 && caps === true){
        count ++
        caps = false
      }
      count ++
    }
  return count
}