function solve(s){
  let sorted = s.split("").sort().join("")
  let charCode = sorted[0].charCodeAt(0)
  for(let i = 1; i<sorted.length; i++){
    if(sorted.charCodeAt(i) !== (charCode + i)){
      return false
    }
  }
  return true
}