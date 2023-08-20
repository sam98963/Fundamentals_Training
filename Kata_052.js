String.prototype.toJadenCase = function (str) {
  return this.split(" ").map(item => item.charAt(0).toUpperCase() + item.slice(1)).join(" ")
  };