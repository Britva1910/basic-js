const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
    if (!options.repeatTimes) options.repeatTimes = 1;
    if (!options.separator) options.separator = '+';
    if (!options.additionSeparator) options.additionSeparator = '|';
    if (!options.hasOwnProperty('addition')) options.addition = '';
    if (!options.additionRepeatTimes) options.additionRepeatTimes = 1;

    const arrAdditionalString = new Array(options.additionRepeatTimes).fill(String(options.addition));
    const firstStr = String(str) + arrAdditionalString.join(options.additionSeparator);
    return new Array(options.repeatTimes).fill(firstStr).join(options.separator);
}
//repeater(true, { repeatTimes: 3, separator: '??? ', addition: false, additionRepeatTimes: 2, additionSeparator: '!!!' }), 'truefalse!!!false??? truefalse!!!false??? truefalse!!!false');

module.exports = {
    repeater
};