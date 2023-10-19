var generate = function(numRows) {
  if(numRows < 1){
      return []
  }
  let result = [[1]]
  for (let i = 1; i < numRows; i++) {
      let newRow = [1];
      for (let j = 1; j < i; j++) {
          newRow[j] = result[i - 1][j - 1] + result[i - 1][j];
      }
      newRow.push(1);
      result.push(newRow);
  }
  return result
};