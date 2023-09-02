/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  let duplicates = [];
  for(let i = 0; i<nums.length; i++){
      if(duplicates.includes(nums[i])){
          return true;
      }
      duplicates.push(nums[i])
  }
  return false
};