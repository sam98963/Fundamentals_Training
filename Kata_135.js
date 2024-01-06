var isPP = function(n){
  for(let i = 2; i * i <= n; i++){
    let power = 2;
    while(Math.pow(i, power ) <= n){
      if(n === Math.pow(i, power)){
        return [i, power]
      }
      power++
    }
  }
  return null;
}