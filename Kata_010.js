function time(distance,boatSpeed,stream){
  //   seperate up/down and speed
    let sSpeed = +stream.split(" ")[1]
    let sDir = stream.split(" ")[0]
    if (sDir === "Upstream"){
      boatSpeed-=sSpeed
    } else {
      boatSpeed+=sSpeed
    } 
    let time = distance/boatSpeed
  //   Only round to 2 decimal places if needed.
    time = Math.round(time * 100) / 100
  return time
  }