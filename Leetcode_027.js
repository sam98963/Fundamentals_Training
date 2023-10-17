/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function(obj) {
  if(Object.keys(obj).length == 0 || !obj){
      return true
  }
  return false
};