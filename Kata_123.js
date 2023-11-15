function oddNotPrime(n){
  let count = 1
  for(let i = 1; i <= n; i += 2){
    let prime = true;
    for(let j = 2; j <= Math.sqrt(i); j++){
       if(i % j === 0){
         prime = false;
       };
    }
    if(!prime){
      count ++
    }
  }
  return count
}