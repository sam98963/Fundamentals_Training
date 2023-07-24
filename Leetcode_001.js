/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  nums.sort((a, b) => a - b);
  const arr = [];

  for (let i = 0; i < nums.length - 2; i++) {
      // Skip duplicates for the first element
      if (i === 0 || (i > 0 && nums[i] !== nums[i - 1])) {
          // left starts as (j)
          let left = i + 1;
          // Right starts at end
          let right = nums.length - 1;
          // left + right needs to equal target
          const target = 0 - nums[i];

          while (left < right) {
              const sum = nums[left] + nums[right]; 
              if (sum === target) {
                  arr.push([nums[i], nums[left], nums[right]]);
                  // Skip duplicates for the second element
                  while (left < right && nums[left] === nums[left + 1]) left++;
                  // Skip duplicates for the third element
                  while (left < right && nums[right] === nums[right - 1]) right--;
                  left++;
                  right--;
              } else if (sum < target) {
                  left++;
              } else {
                  right--;
              }
          }
      }
  }

  return arr;
};
