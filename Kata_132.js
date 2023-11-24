function findNextSquare(sq) {
  let result = sq + 1;
  if(Math.sqrt(sq) % 1 == 0){
    while(Math.sqrt(result) % 1 !== 0){
        result++;
    }
  } else {
    return -1
  }
  // Return the next square if sq is a perfect square, -1 otherwise
  return result;
}