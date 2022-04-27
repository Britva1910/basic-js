const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
    const arr = str.split('');
    let resultArr = '';
    let count = 0;
    arr.forEach((element, index) => {
        count++;
        if (element !== arr[index + 1]) {
            if (count > 1) {
                resultArr += count + element;
                count = 0;
            } else {
                resultArr += element;
                count = 0;
            }
        }
    })
    return resultArr;
}

module.exports = {
    encodeLine
};