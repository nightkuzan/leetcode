/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let max = 0;
  for (i = 0; i < s.length; i++) {
    let temp = s.substr(i);
    let arr = [];
    for (j = 0; j < temp.length; j++) {
      if (!arr.includes(temp[j])) {
        arr.push(temp[j]);
      } else {
        break;
      }
    }
    if (arr.length > max) {
      max = arr.length;
    }
  }
  return max;
};
