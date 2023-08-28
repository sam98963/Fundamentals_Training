function rot13(message) {
  let array = [];
  for (let i = 0; i < message.length; i++) {
    if (message.charCodeAt(i) >= 65 && message.charCodeAt(i) <= 90) {
      if (message.charCodeAt(i) + 13 > 90) {
        array.push(String.fromCharCode(message.charCodeAt(i) + 13 - 26));
      } else {
        array.push(String.fromCharCode(message.charCodeAt(i) + 13));
      }
    } else if (message.charCodeAt(i) >= 97 && message.charCodeAt(i) <= 122) {
      if (message.charCodeAt(i) + 13 > 122) {
        array.push(String.fromCharCode(message.charCodeAt(i) + 13 - 26));
      } else {
        array.push(String.fromCharCode(message.charCodeAt(i) + 13));
      }
    } else {
      array.push(String.fromCharCode(message.charCodeAt(i)));
    }
  }
  return array.join("");
}