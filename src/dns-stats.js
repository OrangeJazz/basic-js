const { NotImplementedError } = require("../extensions/index.js");

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
  let res = {};
  domains.forEach((el) => {
    // console.log(`ELEMENT: ${el}`);
    let domain = "";
    while (el.length != 0) {
      if (!domain) {
        domain = "." + el.substring(el.lastIndexOf(".") + 1);
      } else {
        domain = domain + "." + el.substring(el.lastIndexOf(".") + 1);
      }
      // console.log(domain);
      el = el.substring(0, el.lastIndexOf("."));
      // console.log(el);
      if (!(domain in res)) {
        res[domain] = 1;
      } else {
        res[domain]++;
      }
    }
  });
  // console.log(res);
  return res;
}

getDNSStats(["epam.com", "info.epam.com"]);

module.exports = {
  getDNSStats,
};
