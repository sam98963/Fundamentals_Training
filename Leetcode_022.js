/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
  let map = {}
  let result = []
 nums.forEach(item => {
     map[item] = (map[item] || 0) + 1
 })
 Object.keys(map).filter(item=>{
     if(map[item] > (nums.length/3)){
         result.push(item)
     }
 })
 return result
};