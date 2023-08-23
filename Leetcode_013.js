/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  nums.sort((a,b)=> a-b)
  console.log(nums);
  let duplicates = []
  for(let i = 0; i < nums.length; i++){
      if(nums[i]===nums[i+1] && !duplicates.includes(nums[i])){
          duplicates.push(nums[i])
      }
  }

  let result = nums.filter(number => 
      !duplicates.includes(number)
  )
  return result[0]
};