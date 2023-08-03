function contentWeight(bottleWeight, scale) {
  let arr = scale.split(" ")
  let result = 0
  if(arr.includes("larger")){
    result = (bottleWeight/(+arr[0]+1))*+arr[0]
  } else {
    result = (bottleWeight/(+arr[0]+1))
  }
  return result
}