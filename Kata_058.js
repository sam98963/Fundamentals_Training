function distinct(a) {
 let duplicates = []
 for(let i = 0; i<a.length; i++){
   if(!duplicates.includes(a[i])){
     duplicates.push(a[i])
   }
 }
  return duplicates;
}