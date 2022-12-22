const palindromes = function (s) {
  let lP = 0,
    rP = s.length - 1;
  while (lP <= rP) {
    if (!isAlpha(s[lP])) {
      lP++;
      continue;
    } else if (!isAlpha(s[rP])) {
      rP--;
    } else {
      if (s[lP].toLowerCase() !== s[rP].toLowerCase()) return false;
      ++lP;
      --rP;
    }
  }
  return true;
};

function isAlpha(ch) {
  return /^[A-Z]$/i.test(ch);
}
// Do not edit below this line
module.exports = palindromes;
