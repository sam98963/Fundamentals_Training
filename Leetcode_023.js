
var numIdenticalPairs = function(nums) {
    let i = 0
    let j = 1
    let count = 0
    while(j < nums.length){
        if(nums[i] == nums[j]){
            count++
        }
        if(i == (j-1)){
            j++
            i = 0
        } else if(i<(j-1)){
            i++
        }
    }
    return count
};