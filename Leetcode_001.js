/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort((a,b)=>a-b)
    let arr = []
   for (let i = 0; i<nums.length; i++){
       for (let j = i+1; j<nums.length; j++){
           for (let k = j+1; k<nums.length; k++){
               if (nums[i]+nums[k]+nums[j]===0){
                   const tripletStr =[nums[i], nums[j], nums[k]].sort((a,b)=>a-b).toString()
                //    Needs to be string to use .includes() properly.
                   if(!arr.includes(tripletStr)){
                       arr.push(tripletStr)
               }
               }
           }
       }
   } 
//    all are strings, map over to convert each back into array of arrays.
//    map to return all string values to number
   return arr.map(tripletStr=>tripletStr.split(",").map(Number));
};