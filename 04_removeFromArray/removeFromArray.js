const removeFromArray = function() {
  let array = arguments[0];
  const finalArray = [];
  for (let i = 1; i < arguments.length; i++){
    for (const arrayValue of array){
      if (arrayValue === arguments[i]) {
        continue;
      } else {
        finalArray.push(arguments[i]);
      }
    }
  }
  return finalArray


};

// Do not edit below this line
module.exports = removeFromArray;
