const { NotImplementedError } = require("../extensions/index.js");

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
  try {
    date instanceof Date;
  } catch (e) {
    if (e instanceof Error) {
      throw new Error("Invalid date!");
    } else {
      throw e;
    }
  }

  if (arguments.length == 0) return "Unable to determine the time of year!";

  try {
    date.getMonth();
  } catch (e) {
    if (e instanceof Error) {
      throw new Error("Invalid date!");
    } else {
      throw e;
    }
  }

  try {
    date.getUTCFullYear();
  } catch (e) {
    if (e instanceof Error) {
      throw new Error("Invalid date!");
    } else {
      throw e;
    }
  }

  const MONTH = date.getMonth();

  if (MONTH == 2 || MONTH == 3 || MONTH == 4) return "spring";
  if (MONTH == 0 || MONTH == 1 || MONTH == 11) return "winter";
  if (MONTH == 5 || MONTH == 6 || MONTH == 7) return "summer";
  if (MONTH == 8 || MONTH == 9 || MONTH == 10) return "autumn";
}

module.exports = {
  getSeason,
};
