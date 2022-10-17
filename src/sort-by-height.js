const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const finalArr = [];
  const sortArr = arr.filter((item) => item > 0).sort((a, b) => a - b);
  const result = arr.map((item) => {
    if (item === -1) {
      finalArr.push(item);
    } else {
      finalArr.push(arr.splice(item, 0));
    }
  });
  const c = [];
  const d = finalArr.map((item) => item + '');
  for (let i = 0; i < d.length; i++) {
    if (d[i] === '') {
      c.push(d[i].replace(d[i], sortArr.shift()));
    } else {
      c.push(d[i]);
    }
  }
  return c.map((item) => +item);
}

module.exports = {
  sortByHeight,
};
