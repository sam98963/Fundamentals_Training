function exampleSort(arr,exampleArr){
  let result = [];
  for(let i = 0; i<exampleArr.length; i++){
    if(arr.includes(exampleArr[i])){
      for(let j = 0; j<arr.length; j++){
        if(arr[j] === exampleArr[i]){
          result.push(arr[j])
        }
      }
    }
  }
  return result;
}