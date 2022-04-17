const reverseString = function(string) {
  let strLength = string.length;
  let newString = '';
  for (let i = 1; i <= strLength; i++){
    newString += string.substr(-i,1);
  }
  return newString
};

// Do not edit below this line
module.exports = reverseString;
