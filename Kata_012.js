function whoTookTheCarKey(message) {
  //Find that Freakin' Key!
  return message.map(binary=>String.fromCharCode(parseInt(binary,2))).join("")
}