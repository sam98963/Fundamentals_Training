function addedChar(s1, s2){
  for(let i = 0; i<s1.length; i++){
    for(let j = 0; j<s2.length; j++){
      if(s1.charAt(i)===s2.charAt(j)){
        s2 = s2.slice(0,j) + s2.slice(j+1);
        break;
      }
    }
  }
  return s2.charAt(0)
}