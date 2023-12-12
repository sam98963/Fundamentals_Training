/**
 * @param {number[]} arr
 * @return {number}
 */
var findSpecialInteger = function(arr) {
   let count = 1;
   let prev = 0;
   let countThreshold = Math.floor(arr.length / 4)
   let i = 0;
   if(arr.length < 3){
       return arr[0]
   }
   while(i < arr.length && count <= countThreshold){
       if(arr[i]!== prev){
           count = 1;
           prev = arr[i];
       } else{
           count ++;
       }
       i++;
   }
   return arr[i-1];
};