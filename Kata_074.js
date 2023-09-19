function deleteNth(arr,n){
  let result = []
  let occurenceMap = {}
  for(let i = 0; i<arr.length; i++){
      occurenceMap[arr[i]] = (occurenceMap[arr[i]] || 0) + 1
    if(occurenceMap[arr[i]]<=n){
      result.push(arr[i])
    }
  }
return result
}