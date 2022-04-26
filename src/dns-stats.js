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
    let resObject = {};
    let splitArray = domains.map(elem => elem.split(".").reverse());
    splitArray.forEach(element => {
        let string = new String;
        element.forEach(elem => {
            string += '.' + elem;
            resObject.hasOwnProperty(string) ? resObject[string]++ : resObject[string] = 1;
        })
    });
    return resObject;
}

module.exports = {
    getDNSStats
};