function encode(str) {
  let resultStr = ""
  str = str.toLowerCase();
  for (let i = 0; i < str.length; i++){
  if(str.charCodeAt(i)<=122 && str.charCodeAt(i)>=97){
    console.log(str.charCodeAt(i)-96)
    let replaceValue = str.charCodeAt(i)-96
    resultStr += `${replaceValue}`
  } else {
    resultStr += str.charAt(i)
  }
    
  }
return resultStr
}