function addLength(str) {
  let finalString = ""
  let arr = str.split(" ")
  console.log(arr)
  for(let i = 0 ; i<arr.length; i++){
      arr[i] = `${arr[i]} ${arr[i].length}`
  }
    return arr
  }