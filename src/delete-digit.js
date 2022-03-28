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
    const numbers = n.toString().split('');
    let bigNumber = 0;

    for (let i = 0; i < numbers.length; i++) {
        const arr = [...numbers];
        arr.splice(i, 1);
        if (+arr.join('') > bigNumber) {
            bigNumber = +arr.join('');
        }
    }

    return bigNumber;
}

module.exports = {
    deleteDigit
};