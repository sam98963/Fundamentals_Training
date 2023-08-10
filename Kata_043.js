function isDivisible(){
  let arr = [...arguments];
  let numerator = arr[0]
  let result = true
  for(let i = 1; i < arr.length; i++){
       if(numerator%arr[i] !== 0){
         result = false
       }
  } 
return result
}