var filterString = function(value) {
  let resultArray = []
  for (let i = 0; i<value.length; i++){
    if(value.charCodeAt(i)>=48 && value.charCodeAt(i)<=57){
      resultArray.push(value.charAt(i))
    }
  }
return +resultArray.join("")
}