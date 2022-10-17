const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const res = {};
  for (let dom of domains) {
    const arr = dom.split('.').reverse();
    arr.map((item, index) => {
      const d = `.${arr.slice(0, index + 1).join('.')}`;
      if (res[d]) {
        res[d]++;
      } else {
        res[d] = 1;
      }
    });
  }
  return res;
}

module.exports = {
  getDNSStats,
};
