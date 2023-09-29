function foldArray(array, runs) {
  while (runs > 0) {
    let newArray = [];
    runs--;
    let midPoint = Math.floor(array.length / 2);

    for (let i = 0; i < midPoint; i++) {
      let addition = array[i] + array[array.length - 1 - i];
      if (addition === 0) {
        newArray.push(0);
      } else {
        newArray.push(addition);
      }
    }

    if (array.length % 2 !== 0) {
      newArray.push(array[midPoint]);
    }

    array = newArray;
  }

  return array;
}
