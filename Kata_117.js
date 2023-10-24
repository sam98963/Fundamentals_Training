function goodVsEvil(good, evil){
  const goodTroops = {Hobbits: 1,
              Men: 2,
              Elves: 3,
              Dwarves: 3,
              Eagles: 4,
              Wizards: 10}
  
  const evilTroops = {Orcs: 1,
                Men: 2,
                Wargs: 2,
                Goblins: 2,
                UrukHai: 3,
                Trolls: 5,
                Wizards: 10}
  
  const goodUnits = good.split(" ")
  const evilUnits = evil.split(" ")
  
  const goodKeys = Object.keys(goodTroops);
  const evilKeys = Object.keys(evilTroops)
  
  let points = 0
  goodUnits.forEach((item, index) => {
    points += (item * goodTroops[goodKeys[index]])
  });
  evilUnits.forEach((item, index) => {
    points -= (item * evilTroops[evilKeys[index]])
  });
  console.log(points)

  if(points === 0){
    return 'Battle Result: No victor on this battle field'
  } else if(points < 0){
    return 'Battle Result: Evil eradicates all trace of Good'
  } 
    return 'Battle Result: Good triumphs over Evil'
}
