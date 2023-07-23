function lineupStudents(students){
  //your code here
  console.log(students)
  let arr = students.split(" ")
  console.log(arr)
  
  arr.sort((a,b)=>{
//     difference in str length
    const difference = b.length-a.length
//     if not 0, return the difference to sort.
    if (difference !== 0){
      return difference
    }
//     if difference is 0, return the alphabetical difference
    return b.localeCompare(a)
    })
  return arr
}



// Another solution, rather than an if statement, you can give a second return in the sort function using ||
const lineupStudents = students =>
  students.trim().split(` `).sort((a, b) => b.length - a.length || b.localeCompare(a));