const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
    constructor(flexMachine) {
        this.machine = (flexMachine === false);
        this.alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }

    encrypt(message, key) {
        let kf = Math.ceil(message.length / key.length);
        key = key.repeat(kf);

        const codeLetterA = 'A'.charCodeAt(0);
        const alfabetCout = 26;

        let res = [];

        for (let i = 0; i < message.length; i++) {
            if (test[i] === ' ') {
                res.push(message[i]);
            } else {
                let letterInd = message.charCodeAt(i) - codeLetterA;
                let shift = key.charCodeAt(i) - codeLetterA;

                res.push(
                    String.fromCharCode(codeLetterA + (letterInd + shift) % alfabetCout)
                );
            }
        }
        return res.join('');
    }

    decrypt(message, key) {
        let kf = Math.ceil(message.length / key.length);
        key = key.repeat(kf);

        const codeLetterA = 'A'.charCodeAt(0);
        const alfabetCout = 26;

        let res = [];

        for (let i = 0; i < message.length; i++) {
            if (test[i] === ' ') {
                res.push(message[i]);
            } else {
                let letterInd = message.charCodeAt(i) - codeLetterA;
                let shift = key.charCodeAt(i) - codeLetterA;

                res.push(
                    String.fromCharCode(codeLetterA - (letterInd + shift) % alfabetCout)
                );
            }
        }
        return res.join('');
    }
}

module.exports = {
    VigenereCipheringMachine
};