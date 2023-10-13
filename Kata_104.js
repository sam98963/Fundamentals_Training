function reduce(fraction) {
  let i = Math.min(...fraction)
  while (i>0){
    if(fraction[0] % i === 0 && fraction[1] % i === 0){
      return [(fraction[0]/i), (fraction[1]/i)]
    }
    i--
  }
}