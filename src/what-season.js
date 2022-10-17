const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  if (!date) return 'Unable to determine the time of year!';
  if (Object.getOwnPropertyNames(date).length > 0 || !(date instanceof Date)) {
    throw Error('Invalid date!');
  }
  const numOfMonth = date.getMonth();
  if (numOfMonth === 11 || numOfMonth === 0 || numOfMonth === 1) {
    return 'winter';
  }
  if (numOfMonth === 2 || numOfMonth === 3 || numOfMonth === 4) {
    return 'spring';
  }
  if (numOfMonth === 5 || numOfMonth === 6 || numOfMonth === 7) {
    return 'summer';
  }
  if (numOfMonth === 8 || numOfMonth === 9 || numOfMonth === 10) {
    return 'autumn';
  }
}

module.exports = {
  getSeason,
};
