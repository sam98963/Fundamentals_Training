function switcheroo(x){
  let array = x.split("")
  let result = []
    for(let i = 0 ; i < array.length ; i++){
      if(array[i]==="a"){
        result.push("b")
      } else if (array[i]==="b"){
        result.push("a")
      } else {
        result.push(array[i])
      }
    }
    return result.join("")
  }