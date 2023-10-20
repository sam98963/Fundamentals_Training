function solve(arr) {
  let set = new Set()
  for(let i = arr.length-1; i>=0; i--){
    if(!set.has(arr[i])){
       set.add(arr[i]);
       } else{
         arr.splice(i, 1)
       }
  }
  return arr
}