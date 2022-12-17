const repeatString = function a(s, num) {
  if (num < 0) return "ERROR";
  let newString = "";
  for (let i = 0; i < num; i++) {
    newString = newString.concat(s);
  }
  return newString;
};

// Do not edit below this line
module.exports = repeatString;
