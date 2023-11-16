function solution(fullText, searchText){
  var regex = new RegExp(searchText, "gi")
  return (fullText.match(regex) || []).length
}