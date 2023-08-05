const binaryArrayToNumber = arr => {
  let number = 0
  arr.reverse()
 for (let i = 0; i < arr.length; i++) {
    const bit = arr[i];
    number += bit * (2 ** i);
  }
  return number;
};