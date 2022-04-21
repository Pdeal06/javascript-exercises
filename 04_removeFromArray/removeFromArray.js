const removeFromArray = function(array, ...theUnwanted) {
  function removeUnwanted(value) {
    let answer = theUnwanted.includes(value);
    return !answer
  }
  
  let filtered = array.filter(removeUnwanted);
  return filtered
}
// Do not edit below this line
module.exports = removeFromArray;
