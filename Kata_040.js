function nbYear(p0, percent, aug, p) {
  let currentPopulation = p0
  let count = 0
  for(let i = 1; currentPopulation<p; i++){
    currentPopulation = Math.floor(currentPopulation*(1+(percent/100))+aug)
    count = i
  }
return count
}