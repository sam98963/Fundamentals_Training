function highestRank(arr){
  const map = {}
  for(let i = 0; i < arr.length; i++){
    map[arr[i]] = (map[arr[i]] || 0) + 1
  }
  let keyArr = Object.keys(map)
  let max = 0
  let maxKey = 0
  keyArr.sort((a,b) => b-a)
  for(const key of keyArr){
    if(map[key] > max){
      maxKey = key;
      max = map[key];
    }
  }
  return +maxKey
}