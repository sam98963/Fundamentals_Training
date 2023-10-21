function solve(arr) {
  let dominant = new Set()
  let max = arr[arr.length-1]
  for(let i = arr.length-1; i>=0; i--){
    if(arr[i]>=max){
      dominant.add(arr[i])
    }
    max = Math.max(max, arr[i]);
  }

  return Array.from(dominant).reverse()
}