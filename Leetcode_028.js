/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  let lowerCaseString = s.toLowerCase().replace(/[^A-Za-z0-9]/g, '');
 if(lowerCaseString.length < 2){
     return true
 } else{
     let l = 0
     let r = lowerCaseString.length-1
     while(l < r){
         if(lowerCaseString.charAt(l) !== lowerCaseString.charAt(r)){
             return false
         }
         l++
         r--
     }
 }
 return true
};