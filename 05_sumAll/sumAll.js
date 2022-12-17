const sumAll = function (n, m) {
  if (m < 0 || n < 0 || typeof m != "number" || typeof n != "number")
    return "ERROR";
  if (n > m) return sumAll(m, n);
  let sum = 0;
  for (let i = n; i <= m; i++) {
    sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
