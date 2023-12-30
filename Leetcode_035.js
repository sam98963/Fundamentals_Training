/**
 * @param {string[]} words
 * @return {boolean}
 */
var makeEqual = function(words) {
  let map = {};
if(words.length == 1){
  return true;
}
const totalLength = words.reduce((sum, word) => sum + word.length, 0);
if (totalLength % words.length !== 0) {
  return false;
}
for(let i = 0; i<words.length; i++){
  for(let j = 0; j<words[i].length; j++){
      map[words[i][j]] = (map[words[i][j]] || 0) + 1;
  }
}
for(let char in map){
  if(map[char] % words.length != 0){
      return false;
  }
}
return true;
};