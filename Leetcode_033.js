/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
  let maximum = -Infinity;
  let max2 = -Infinity;
  for(let num of nums){
      if(num > maximum){
          max2 = maximum;
          maximum = num;
      } else if(num > max2){
          max2 = num;
      }
  }
  return (maximum - 1) * (max2 - 1)
};