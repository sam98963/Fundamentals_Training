const getTurkishNumber = (num) => {
	let result = ""
  let finalArray = []
  let array = num.toString().split("")
//   0-9
  let digitNameArr = ["sıfır", "bir", "iki", "üç","dört", "beş", "altı","yedi", "sekiz", "dokuz"]
//   10-90
  let tensNameArr = ['', 'on', 'yirmi', 'otuz', 'kırk', 'elli','altmış','yetmiş','seksen','doksan']
  if (num < 10){
    result = digitNameArr[num]
  } 
  else if(array[1] === "0"){
    result = tensNameArr[+array[0]]
  }
  else{
    finalArray.push(tensNameArr[+array[0]])
    finalArray.push(digitNameArr[+array[1]])
    result = finalArray.join(" ")
  }
  return result
}