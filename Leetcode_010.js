var mySqrt = function(x) {
  let attempts = x/2
  let y = x/2
  let counter = 1
  if(x === 1){
      return 1
  }
  while(counter < x/2){
      if(Math.floor(attempts) * Math.floor(attempts) <= x && (Math.floor(attempts)+1) * (Math.floor(attempts)+1) > x){
        return Math.floor(attempts)
      } else if(Math.floor(attempts) * Math.floor(attempts) <= x){
          y = y/2
          attempts += y
      }
      else{
          y = y/2
          attempts -= y
      }
         counter++
  }

   
  return Math.floor(attempts)
};