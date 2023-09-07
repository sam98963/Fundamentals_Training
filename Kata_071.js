function productFib(prod){
  let fib = [0, 1]
  for(let i = 2; i <= Math.sqrt(prod); i++){
    fib[i] = fib[i-1]+fib[i-2]
    if(fib[i]*fib[i-1] === prod){
      return [fib[i-1], fib[i], true]
    } else if (fib[i]*fib[i-1] > prod){
      return [fib[i-1], fib[i], false]
    }
  }
}