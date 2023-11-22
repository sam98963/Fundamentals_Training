function countSel(lst) {
  const map = {};
  for(let i = 0; i<lst.length; i++){
    map[lst[i]] = (map[lst[i]] || 0) + 1
  }
  let keys = Object.keys(map);
  let oneOccurence = 0;
  keys.forEach(item=>{
    if(map[item] === 1){
      oneOccurence++
    }
  });
  const maxValue = Math.max(...Object.values(map))
  let frequentKeys = getKeyByValue(map, maxValue);
  return [lst.length, keys.length, oneOccurence, [frequentKeys, maxValue]];
}

function getKeyByValue(object, value) { 
  const array = []
  for (let key in object) { 
      if (object.hasOwnProperty(key)) { 
          if (object[key] === value) 
              array.push(+key)
      } 
  } 
return array.sort((a,b)=>a-b)
}