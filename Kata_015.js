function buyTofu(cost, box) {
  let monCoins = 0;
  let monmeC = 0;
  let value = 0;

  let arr = box.split(" ");
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "mon") {
      monCoins++;
    }
    if (arr[i] === "monme") {
      monmeC++;
    }
  }

  value = monCoins + monmeC * 60;

  let minMonmeC = Math.min(monmeC, Math.floor(cost / 60));

  let remainingCost = cost - minMonmeC * 60;

  let minMonCoins = Math.min(remainingCost, monCoins);

  let minimumCoins = minMonmeC + minMonCoins;

  if (cost - monmeC * 60 <= monCoins && cost % 60 <= monCoins) {
    return [monCoins, monmeC, value, minimumCoins];
  }

  return "leaving the market";
}
