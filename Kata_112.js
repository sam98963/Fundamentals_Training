function slicesToName(n) {
  if(typeof n !== "number"){
    return null
  }
   if (n < 2 || n > 100) {
      return null;
    }
    return n%2 === 0 ? "sandwich ".repeat(n / 2).trim(): "bread " + "sandwich ".repeat((n - 1) / 2).trim()
  }
  
  function nameToSlices(name) {
    console.log(name)
  if(typeof name !== "string"){
    return null
  }
   if(!name.includes("sandwich")) {
      return null;
    }
     if(!name.trim()) {
      return null;
    }
    const array = name.split(" ")
    for(let i = 1; i<array.length; i++){
      if(array[i] === "bread"){
        return null
      }
    }
    let sandwichCount = array.filter(x => x === "sandwich").length * 2
    let breadCount = array.filter(x => x === "bread").length
    if(array.includes("bread")){
      sandwichCount++
    }
    return sandwichCount
  }
  