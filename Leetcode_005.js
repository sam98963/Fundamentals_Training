/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  let array = x.toString().split("")
  let reverseCopy = array.slice().reverse()
  for(let i = 0; i<array.length; i++){
      if(array[i] !== reverseCopy[i]){
          return false
      }
  }
  return true
};