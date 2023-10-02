function pattern(n){
  var output="";
   for (let i = 0; i<n; i++){
     if(i == n-1){
       output += "*".repeat(i) + `${i+1}`
     } else {
     output += "*".repeat(i) + `${i+1}` + "\n" + "1"
     }
   }
  return output;
 }