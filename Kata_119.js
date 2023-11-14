function getChance(n, x, a) {
  let count = 1;
  let chance = (n - x) / n;
  while (count < a) {
    chance *= (n - count - x) / (n - count);
    count++;
  }
  return Math.round(chance * 100) / 100;
}
