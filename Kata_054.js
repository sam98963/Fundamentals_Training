var getMilitaryTime = function(input) {
    let array = input.split(":")
  if(input.includes("AM") && array[0] === "12"){
    array[0] = "00"
  } else if(input.includes("PM") && array[0] !== "12"){
    array[0] = (+array[0] + 12).toString()
  }
  return array.join(":").replace(/[a-z]/gi, '')
};