function mainDiagonalProduct(mat){
  let product = mat[0][0]
  for(let i = 1; i<mat.length; i++){
    product *= mat[i][i]
  }
  return product
}