const removeFromArray = function() {
  let array = arguments[0];
  let filteredArray = [];
  for (let i = 1; i < arguments.length; i++){
  if (i === arguments.length - 1 && arguments.length > 2) {
    filteredArray = filteredArray.filter(item => item !== arguments[i])
    return filteredArray; 
  }else if (i == 1 && arguments.length == 2  ) {
    filteredArray = array.filter(item => item !== arguments[i])
    return filteredArray
  } else if (i === arguments.length - 1) {
    filteredArray = filteredArray.filter(item => item !== arguments[i])
    return filteredArray

    } else if (i == 1) {  
      filteredArray = array.filter(item => item !== arguments[i])
    } else {filteredArray = array.filter(item => item !== arguments[i])
    }
  }
}

// Do not edit below this line
module.exports = removeFromArray;
