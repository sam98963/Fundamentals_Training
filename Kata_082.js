function toCamelCase(str){
  if(str === ""){
    return ""
  }
  str = str.split(/[.\-_]/)
  let camelCaseArray = []
  camelCaseArray.push(str[0])
  for(let i = 1; i<str.length; i++){
    camelCaseArray.push(str[i].charAt(0).toUpperCase() + str[i].slice(1).toLowerCase())
  }
  return camelCaseArray.join("")
}