function solution(){
  let argArray = [...arguments]
  let uniqueArgs = []
  for (let i=0; i < argArray.length; i++) {
    if (uniqueArgs.includes(argArray[i])) {
      return true
    }
    uniqueArgs.push(argArray[i])
  }
  return false
}