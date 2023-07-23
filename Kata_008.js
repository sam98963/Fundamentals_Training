function cookie(x){
  //   test to see the type of the input
    let name = "the dog"
    if (typeof x === "string"){
      name = "Zach"
    } else if (typeof x === "number"){
      name = "Monica"
    }
  return `Who ate the last cookie? It was ${name}!`
  }