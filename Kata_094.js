function flattenAndSort(array) {
  let flattenedArray = []
  array.forEach(item=>{
    flattenedArray.push(...item)
  })
  return flattenedArray.sort((a,b)=>(a-b))
}