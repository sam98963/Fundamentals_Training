function checkExam(array1, array2) {
  let score = 0
  array2.forEach((item, index) => {
    if(item === array1[index]){
      score += 4
    } else if (item && item !== array1[index]){
      score -= 1
    } 
  })
  if(score < 0){
    score = 0
  }
  return score
}