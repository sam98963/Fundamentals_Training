function sortArray(array) {
  const oddNumbers = array.filter(num => num % 2 !== 0);
  oddNumbers.sort((a, b) => a-b);

  let index = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0) {
      array[i] = oddNumbers[index];
      index++;
    }
  }

  return array;
}
