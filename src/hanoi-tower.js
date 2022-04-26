const { NotImplementedError } = require('../extensions/index.js');

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 * 
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 * 
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
function calculateHanoi(disksNumber, turnsSpeed) {
    const turns = (2 ** disksNumber) - 1;
    const ternsPerSecond = (turnsSpeed / 60) / 60;
    const seconds = Math.floor(turns / ternsPerSecond);

    class TurnsAndSecond {
        constructor(turns, second) {
            this.turns = turns;
            this.seconds = seconds;
        }
    }

    return new TurnsAndSecond(turns, seconds);
}

module.exports = {
    calculateHanoi
};