const repeatString = function(string, num) {
  let output = ''
  for (let i = 0; i < num; i++) {
    if (i == num - 1){
      output += string;
      return output;
    } else {
      output += string
      continue
    }
     
  }
  
};

// Do not edit below this line
module.exports = repeatString;
