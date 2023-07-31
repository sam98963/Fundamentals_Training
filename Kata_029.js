function removeUrlAnchor(url){
  let result = url
  for(let i = 0; i<url.length; i++){
    if(url.charAt(i)==="#"){
      result = url.slice(0, i)
    }
  }
  return result
}