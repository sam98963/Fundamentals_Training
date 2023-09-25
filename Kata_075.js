function findOdd(A) {
  let map = {}
   for (num of A){
     map[num] = (map[num]||0) + 1
   }
    let array = Object.keys(map)
    for (count of array){
      if(map[count] % 2 != 0){
        return +count
      }
    }
  }