function tailSwap(arr) {
  let firstStringIndex = 0
  let secondStringIndex = 0
  for(let i = 0; i<arr[0].length; i++){
    if(arr[0].charAt(i)===":"){
      firstStringIndex = i
    }
  }
  for(let i = 0; i<arr[1].length; i++){
    if(arr[1].charAt(i)===":"){
     secondStringIndex = i
    }
  }
  console.log(firstStringIndex, secondStringIndex)
  // your code here
  return [arr[0].slice(0,firstStringIndex) + arr[1].slice(secondStringIndex), arr[1].slice(0,secondStringIndex) + arr[0].slice(firstStringIndex)]
}