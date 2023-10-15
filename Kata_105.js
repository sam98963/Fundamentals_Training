function sortAnimal(animals) {
  const sorted = animals.slice().sort((a, b) => {
    if(a.numberOfLegs === b.numberOfLegs){
      return a.name.localeCompare(b.name)
    }
    else{
    return a.numberOfLegs - b.numberOfLegs
    }
  })
  return sorted;
}
