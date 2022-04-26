const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
    calculateDepth(arr) {
        let value = 0;
        if (Array.isArray(arr)) {
            for (let i = 0; i < arr.length; i++) {
                value = Math.max(value, this.calculateDepth(arr[i]))
            }
            value++;
        }
        return value;
    }
}

module.exports = {
    DepthCalculator
};