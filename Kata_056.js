function findSequences(n){
  let allSequences = [];
  for (let i = 1; i<n/2; i++){
    let total = i;
    let sequenceArray = [i];
    for (let j = i+1; j<n; j++){
      total += j;
      sequenceArray.push(j);
      if(total === n){
        allSequences.push(sequenceArray);
        break;
      } else if(total > n){
        break;
      }
    }
  }
  return allSequences.reverse();
}