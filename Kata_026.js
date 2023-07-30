const xMarksTheSpot = (input) => {
  let resultArr = []
  let finalResult = []
  for(let i = 0; i<input.length; i++){
    if(input[i].includes("x")){
      for(let j=0; j<input[0].length; j++){
        if(input[i][j]==="x"){
          resultArr.push([i, j])
        }
      }
    }
  }
  if(resultArr.length === 1){
    return resultArr[0]
  }
  return finalResult;
}