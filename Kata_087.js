function ghostBusters(building) {
  return !building.includes(" ") ? "You just wanted my autograph didn't you?": building.split(" ").join("")
}