const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
    let counter = matrix[0].reduce((a, b) => a + b);
    for (let i = 1; i < matrix.length; i++) {
        matrix[i].forEach((element, index) => {
            if (matrix[i - 1][index]) {
                counter += element;
            }
        })
    }
    return counter;
}

module.exports = {
    getMatrixElementsSum
};