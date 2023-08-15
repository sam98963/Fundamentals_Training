function comp(array1, array2) {
  let result = true;

  if (!array1 || !array2) {
    return false;
  }

  if (array1.length !== array2.length) {
    result = false;
  }

  array1.sort((a, b) => a - b);
  array2.sort((a, b) => a - b);

  for (let i = 0; i < array1.length; i++) {
    let square = array1[i] ** 2;

    if (square !== array2[i]) {
      result = false;
    }
  }

  return result;
}
