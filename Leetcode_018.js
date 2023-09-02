/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  if(s.length !== t.length){
      return false
  }
      let countS = {}
      let countT = {}
      for(let i = 0; i<s.length; i++){
          countS[s[i]] = (countS[s[i]]||0) + 1
          countT[t[i]] = (countT[t[i]]||0) + 1
      }
      const chars = Object.keys(countS)

      for(let key of chars){
          if(countS[key]!=countT[key] || !countT.hasOwnProperty(key)){
                  return false
          }
      }
  return true
};