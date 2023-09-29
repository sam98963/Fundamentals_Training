function minValue(values){
  let singleInstanceArray = []
  for(let i = 0; i<values.length; i++){
    if(!singleInstanceArray.includes(values[i])){
      singleInstanceArray.push(values[i])
    }
  }
  singleInstanceArray.sort((a,b)=>(a-b))
  return +singleInstanceArray.join("")
}