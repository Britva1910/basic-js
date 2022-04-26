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
    if (date == null) {
        return 'Unable to determine the time of year!'
    }
    if (Object.keys(date).length > 0 || !(date instanceof Date)) {
        throw new Error('Invalid date!');
    }
    const number = date.getMonth();
    if (number === 11 || number === 0 || number === 1) {
        return ('winter');
    } else if (number === 2 || number === 3 || number === 4) {
        return ('spring');
    } else if (number === 5 || number === 6 || number === 7) {
        return ('summer');
    } else if (number === 8 || number === 9 || number === 10) {
        return ('autumn');
    }

}

module.exports = {
    getSeason
};