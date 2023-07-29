var longestCommonPrefix = function(strs) {
  if (strs.length === 0) {
      return "";
  }

  strs.sort((a, b) => a.length - b.length);
  let prefLetter = [];
  for (let i = 0; i < strs[0].length; i++) {
      prefLetter.push(strs[0].charAt(i));
      for (let j = 0; j < strs.length; j++) {
          if (strs[j].charAt(i) !== prefLetter[i]) {
              prefLetter.pop();
              return prefLetter.join("");
          }
      }
  }
  return prefLetter.join("");
};