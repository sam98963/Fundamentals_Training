function generateHashtag (str) {
  if(str.trim() === ""){
    return false;
  }
  let array = str.split(" ")
    array.forEach((item, index)=>{
      array[index] = item.charAt(0).toUpperCase() + item.slice(1)
    })
  let result = "#" + array.join("")
  if(result.length > 140){
    return false
  }
  return result
}