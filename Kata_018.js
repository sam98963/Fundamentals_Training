function whoIsPaying(name){
  let trunc = name.split("").slice(0,2).join("")
  let result = [name]
  if(name.length > 2){
    result = [name, trunc]
  }
  return result
}