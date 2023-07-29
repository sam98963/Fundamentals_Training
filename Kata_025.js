String.prototype.camelCase=function(){
  let arr = this.split("")
  if(arr.length === 0){
    return ""
  }
  arr[0] = arr[0].toUpperCase()
  for(let i = 0; i<arr.length; i++){
    if(arr[i]=== " "){
      arr.splice(i, 1);
      arr[i] = arr[i].toUpperCase()
    }
  }
  return arr.join("")
}

// When writing a prototype function, use the "this" keyword.