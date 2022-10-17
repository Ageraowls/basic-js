const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const transformed = n.toString();
  const res = [];

  for (let i of transformed) {
    res.push(+transformed.replace(i, ''));
  }

  return Math.max(...res);
}

module.exports = {
  deleteDigit,
};
