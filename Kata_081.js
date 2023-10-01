function capitalize(s){
  let oddCap = []
  let evenCap = []
  for(let i = 0; i<s.length; i++){
    if(i%2 != 0){
      oddCap.push(s.charAt(i).toUpperCase())
      evenCap.push(s.charAt(i))
    } else{
      evenCap.push(s.charAt(i).toUpperCase())
      oddCap.push(s.charAt(i))
    }
  }
  return [evenCap.join(""), oddCap.join("")];
};