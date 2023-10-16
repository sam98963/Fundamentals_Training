/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  const valuesSeen = {}
  while(n !== 1 && !valuesSeen[n]){
      valuesSeen[n] = true
      n = squaresSum(n)
  }
  return n === 1 ? true : false
}

function squaresSum(n){
  return n.toString().split("").reduce(function(accu, num){
      return accu + (num ** 2);
  }, 0)
}