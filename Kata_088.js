function openOrSenior(data){
  const result = data.map(item=>{
   return item[0] > 54 && item[1] > 7 ? "Senior" : "Open"
  })
  return result
}