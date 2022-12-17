const reverseString = function (s) {
  let sLen = s.length;
  let result = "";
  for (let i = 0; i < sLen; i++) {
    result = result.concat(s[sLen - i - 1]);
  }
  return result;
};

// Do not edit below this line
module.exports = reverseString;
