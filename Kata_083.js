function calculateYears(principal, interest, tax, desired) {
  let counter = 0
  while (principal < desired){
    counter++
    principal += (principal * interest) - (principal * interest)*tax
  }
  return counter
}