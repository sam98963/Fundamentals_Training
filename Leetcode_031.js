/**
 * @param {number[]} nums
 * @return {number}
 */
var minPairSum = function(nums) {
  nums.sort((a,b )=>a-b)
  let rightIndex = nums.length - 1;
  let leftIndex = 0;
  let left = nums[leftIndex];
  let right = nums[rightIndex];
  let lowestSum = 0;
  while(leftIndex < rightIndex){
      left = nums[leftIndex];
      right = nums[rightIndex];
      if(left + right > lowestSum){
          lowestSum = left + right
      }
  leftIndex++
  rightIndex--
  }
  return lowestSum
};