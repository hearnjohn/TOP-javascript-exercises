const removeFromArray = function (arr, ...toRemove) {
  let arrLen = arr.length;
  let newArr = [];
  for (let i = 0; i < arrLen; i++) {
    let remove = false;
    for (const e of toRemove) {
      if (arr[i] === e) {
        remove = true;
        break;
      }
    }
    if (!remove) newArr.push(arr[i]);
  }
  return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
