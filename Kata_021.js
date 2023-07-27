function arrayDiff(a, b) {
  let finalArr = []
  if(a.length === 0 || b.length === 0){
    return a
  }
  for(let i = 0; i<a.length; i++){
    if(!b.includes(a[i])){
      finalArr.push(a[i])
    }
  }
 return finalArr
}