/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
  let smallerArray = []
  nums.map((item)=>{
      smallerArray.push(nums.filter(num =>{
          return num < item
      }).length)
  })
  return smallerArray
};