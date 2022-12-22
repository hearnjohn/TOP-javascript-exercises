const fibonacci = function (n) {
  if (typeof n === "string") {
    n = parseFloat(n);
  }
  if (n < 0) return "OOPS";
  let twoAgo = 0,
    oneAgo = 1;
  if (n === 0) return twoAgo;
  if (n === 1) return oneAgo;
  n--;
  while (n--) {
    let temp = oneAgo;
    oneAgo += twoAgo;
    twoAgo = temp;
  }
  return oneAgo;
};

// Do not edit below this line
module.exports = fibonacci;
