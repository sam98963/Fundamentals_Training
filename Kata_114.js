function spinAround(turns) {
  let left = turns.filter(item=>item === "left").length;
  let right = turns.filter(item=>item === "right").length;
  return Math.floor(Math.abs(left-right)/4)
}