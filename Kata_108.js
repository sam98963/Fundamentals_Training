function diamond(n) {
  if(n % 2 === 0 || n < 0){
    return null
  }
  let string = "";
  let count = 0;
  let i = 1;
  let increasing = true;
  while (count < n) {
    let spaces = (n - i) / 2;
    string += " ".repeat(spaces) + "*".repeat(i) + "\n";
    if (i === n) {
      increasing = false;
    }
    if (increasing) {
      i += 2;
    } else {
      i -= 2;
    }
    count++;
  }
  return string;
}
