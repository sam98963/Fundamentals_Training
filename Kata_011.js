function countVegetables(string){
  let arr = string.split(" ")
  let filledArr = []
  for (let i =0; i<arr.length; i++){
   if (!filledArr.some(item => item[1] === arr[i])&&arr[i]!=="chopsticks") {
    let count = 1
    for (let j=i+1; j<arr.length; j++){
      if (arr[i] === arr[j]){
        count++
      }
    }
    filledArr.push([count, arr[i]])
  }}
return filledArr.sort((a,b)=>b[0]-a[0] || b[1].localeCompare(a[1]))
}