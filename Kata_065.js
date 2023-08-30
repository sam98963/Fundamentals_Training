function persistence(num) {
    let array = Array.from(num.toString()).map(Number)
    let count = 0
    while(array.length !== 1){
      count ++
      num = array[0]
      for(let i = 1; i<array.length; i++){
        num*=array[i]
      }
      array = Array.from(num.toString()).map(Number)
    }
    return count
  }