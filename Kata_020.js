function battle(x, y) {
  let result = "Tie!";
  let scoreX = 0;
  let scoreY = 0;
  for(let i=0; i<x.length; i++){
    scoreX += (x.toUpperCase().charCodeAt(i)-64);
  
  } for(let j=0; j<y.length; j++){
    scoreY += (y.toUpperCase().charCodeAt(j)-64);
  }
    if(scoreX > scoreY){
      result = x
    } else if (scoreY > scoreX){
      result = y
    }
  return result
}