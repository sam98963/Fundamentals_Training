function add(n) {
  function inner(nextValue) {
    return add(n + nextValue);
  }
  inner.valueOf = function () {
    return n;
  };
  return inner;
}