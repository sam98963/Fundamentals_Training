function isIsogram(str){
  str = str.toLowerCase()
  let map = {}
  for (char of str){
    map[char] = (map[char] || 0) + 1
  }
  let keys = Object.keys(map)
  for (key of keys){
    if(map[key] > 1){
      return false
    }
  }
  return true
}