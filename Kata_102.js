function additionWithoutCarrying(a,b) {
  const az = a.toString().split("").map(Number);
  const bz = b.toString().split("").map(Number);
  const array = [];
  
  const longerString = Math.max(a, b).toString().length;
  for (let i = 0; i<longerString; i++){
    const digitA = i < az.length ? az[az.length - 1 -i] : 0;
    const digitB = i < bz.length ? bz[bz.length - 1 -i] : 0;
    const unit = (digitA + digitB) % 10;
    array.unshift(unit)
  }
  return +array.join("")
}
