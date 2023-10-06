/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  let map = {}
  nums.forEach(item => {
      map[item] = (map[item] || 0) + 1
  })
  return Object.keys(map).reduce(function(a, b){ return map[a] > map[b] ? a : b });
};