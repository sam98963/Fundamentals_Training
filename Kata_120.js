function reverseFizzBuzz(array) {
  let fizz = array.indexOf("Fizz") + 1
  let buzz = array.indexOf("Buzz") + 1
  
  if(fizz === 0){
    fizz = array.indexOf("FizzBuzz") + 1
  } if (buzz === 0){
    buzz = array.indexOf("FizzBuzz") + 1
  }
  return [fizz, buzz]
};