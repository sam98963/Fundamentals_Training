function catchSignChange(arr) {
  let positive = true;
  let count = 0
  if(arr[0]<= 0){
    positive = false
  }

  for(let i = 1; i<arr.length; i++){
   if(positive && arr[i] < 0){
     count++
     positive = false
   } else if(!positive && arr[i] >= 0){
     count++
     positive = true
   }
 }
  return count
}