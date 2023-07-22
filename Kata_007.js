function count(string) {
  let result = {};
  let array = string.split("").sort((a, b) => a.localeCompare(b));

  for (let i = 0; i < array.length; i++) {
    if (!result[array[i]]) {
      let count = 1;
      for (let j = i + 1; j < array.length; j++) {
        if (array[i] === array[j]) {
          count++;
        }
      }
      result[array[i]] = count;
    }
  }

  return result;
}