/**
 * @param {number[]} nums
 * @return {number}
 */
function rev(num){
  if(num < 10){
      return num
  }
  return +num.toString().split("").reverse().join("")
}
var countNicePairs = function(nums) {
const map = {};
let count = 0;
const mod = 10 ** 9 + 7;

for (let num of nums) {
  let reversed = rev(num);
  let diff = num - reversed;

  if (diff in map) {
      count += map[diff];
      map[diff]++
  }
  else{map[diff] = 1}
}

return count % mod;
};