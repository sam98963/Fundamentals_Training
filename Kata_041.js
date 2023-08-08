function vowel2index(str) {
  let result = []
  let lowercase = str.toLowerCase()
  for(let i = 0; i<lowercase.length; i++){
    if(lowercase.charAt(i)=="a"||lowercase.charAt(i)=="e"||lowercase.charAt(i)=="i"||lowercase.charAt(i)=="o"||lowercase.charAt(i)=="u"){
       result.push(i+1)
       } else{
         result.push(str.charAt(i))
       }
  }
return result.join("")
 //code me
}
