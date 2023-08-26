/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  let result = -1
  let found = false
  if(needle === haystack || needle === ""){
      result = 0
  } else if(needle.length > haystack.length){
      result = -1
  } else {
      for(let i = 0 ; i < haystack.length; i++){
          if(haystack[i] === needle[0]){
              for(let j = 0; j<needle.length; j++){
                  if(needle[j] !== haystack[i + j]){
                      break;
                      } 
                  else if (j === needle.length - 1){
                      result = i
                      found = true
                      break;
                          }
                      }
              if(found === true){
                  break;
          
                   }
              }
          }
      }
  return result;
};