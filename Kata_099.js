function pell(n) {
  let pelltwo = 1n
  let pellone = 0n
   if (n === 0) return pellone;
  for(let i = 2; i<=n; i++){
    let pellthree = (2n * pelltwo) + pellone
    pellone = pelltwo
    pelltwo = pellthree
  }
	return pelltwo;
}