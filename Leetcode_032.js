/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
  return operations.reduce((acc, current)=>(current.includes("+") ? acc + 1 : acc - 1), 0);
};

