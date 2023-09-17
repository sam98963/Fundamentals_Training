function isPangram(string){
  let map = {}
 let charArray = string.replace(/\s/g, '').toLowerCase().split("")
 charArray.forEach(item=>{
   map[item] = (map[item]||0) + 1
 })
  if(Object.keys(map).length >= 26){
    return true
  }
  return false
}