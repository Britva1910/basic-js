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
    const arrNumbers = arr.filter(value => value >= 0).sort((a, b) => a - b);
    let result = [];
    let curretnIndex = 0;
    arr.forEach(value => {
        if (value === -1) {
            result.push(-1);
        } else {
            result.push(arrNumbers[curretnIndex]);
            curretnIndex++;
        }
    })
    return result;
}
module.exports = {
    sortByHeight
};