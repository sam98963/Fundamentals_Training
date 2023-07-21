var capitals = function (word) {
  let indexes = []
  for (let i =0; i<word.length; i++){
    if(word.charCodeAt(i)<97){
      indexes.push(i)
    }
  }
	// Write your code here
  return indexes
};