/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
  const array = []
  const lower = sentence.toLowerCase()
  for(let i = 0; i<lower.length; i++){
      array.push(lower.charCodeAt(i));
  }

  for(let j = 97; j<123; j++){
      if(!array.includes(j)){
          return false;
      }
  }
  return true;
};