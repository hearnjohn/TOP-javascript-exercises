const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (arr) {
  let s = 0;
  let arrLen = arr.length;
  for (let i = 0; i < arrLen; i++) {
    s += arr[i];
  }
  return s;
};

const multiply = function (arr) {
  let p = 1;
  let arrLen = arr.length;
  for (let i = 0; i < arrLen; i++) {
    p *= arr[i];
  }
  return p;
};

const power = function (a, b) {
  let p = a;
  for (let i = 1; i < b; i++) {
    p *= a;
  }
  return p;
};

const factorial = function (a) {
  let f = 1;
  while (a) {
    f *= a--;
  }
  return f;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
