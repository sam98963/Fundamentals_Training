function shiftedDiff(first,second){
  if(first.length !== second.length){
    return -1
  }
  let sExtended = second.repeat(2)
  for(let shift = 0; shift < first.length; shift++){
    let result = true
    for(let i = 0; i<first.length; i++){
      if(sExtended[i+shift] !== first[i]){
        result = false
        break;
      }
    }
    if (result){
      return shift
    }
  }
  return -1
}