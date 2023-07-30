function toLeetSpeak(str) {
  let arr = str.split("")
  for(let i =0; i<str.length; i++)
  switch(arr[i]){
      case "A":
      arr[i] = "@";
      break;
      case "B":
      arr[i] = "8";
      break;
      case "C":
      arr[i] = "(";
      break;
      case "D":
      arr[i] = "D";
      break;
      case "E":
      arr[i] = "3";
      break;
      case "F":
      arr[i] = "F";
      break;
      case "G":
      arr[i] = "6";
      break;
      case "H":
      arr[i] = "#";
      break;
      case "I":
      arr[i] = "!";
      break;
      case "J":
      arr[i] = "J";
      break;
      case "K":
      arr[i] = "K";
      break;
      case "L":
      arr[i] = "1";
      break;
      case "M":
      arr[i] = "M";
      break;
      case "N":
      arr[i] = "N";
      break;
      case "O":
      arr[i] = "0";
      break;
      case "P":
      arr[i] = "P";
      break;
      case "Q":
      arr[i] = "Q";
      break;
      case "R":
      arr[i] = "R";
      break;
      case "S":
      arr[i] = "$";
      break;
      case "T":
      arr[i] = "7";
      break;
      case "U":
      arr[i] = "U";
      break;
      case "V":
      arr[i] = "V";
      break;
      case "W":
      arr[i] = "W";
      break;
      case "X":
      arr[i] = "X";
      break;
      case "Y":
      arr[i] = "Y";
      break;
      case "Z":
      arr[i] = "2";
      break;
  }
  return arr.join("");
}