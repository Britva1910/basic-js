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
    constructor(isDirect = true) {
        this.machine = !isDirect;
        this.alphabetLength = 26;
        this.codeLetterA = 'A'.charCodeAt(0);
    }

    encrypt(message, key) {

        if (message === undefined || key === undefined) {
            throw new Error('Incorrect arguments!')
        }
        let kf = Math.ceil(message.length / key.length);
        key = key.repeat(kf).toUpperCase();
        message = message.toUpperCase();

        let result = [];
        let spaseCounter = 0;
        for (let i = 0; i < message.length; i++) {
            if (!/[A-Z]/.test(message[i])) {
                result.push(message[i]);
                spaseCounter += 1;
            } else {
                const currentLetterIndex = message.charCodeAt(i) - this.codeLetterA;
                const shift = key.charCodeAt(i - spaseCounter) - this.codeLetterA;
                result.push(String.fromCharCode(this.codeLetterA + (currentLetterIndex + shift) % this.alphabetLength))
            }

        }
        if (this.machine === true) return result.reverse().join('');
        return result.join('');
    }

    decrypt(message, key) {
        if (message === undefined || key === undefined) {
            throw new Error('Incorrect arguments!')
        }
        let kf = Math.ceil(message.length / key.length);
        key = key.repeat(kf).toUpperCase();
        message = message.toUpperCase();

        let result = [];
        let spaseCounter = 0;
        for (let i = 0; i < message.length; i++) {
            if (!/[A-Z]/.test(message[i])) {
                result.push(message[i]);
                spaseCounter += 1;
            } else {
                const currentLetterIndex = message.charCodeAt(i) - this.codeLetterA;
                const shift = key.charCodeAt(i - spaseCounter) - this.codeLetterA;
                result.push(String.fromCharCode(this.codeLetterA + (currentLetterIndex - shift + this.alphabetLength) % this.alphabetLength))
            }
        }
        if (this.machine === true) {
            return result.reverse().join('')
        };
        return result.join('');
    }
}

module.exports = {
    VigenereCipheringMachine
};