const CustomError = require("../extensions/custom-error");
const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
class VigenereCipheringMachine {
  constructor(machine = true) {
    this.machine = machine;
  }
  
  encrypt(message, key) {
    if (!(message || key)) throw 'THROWN';
    message = message.toUpperCase();
    const messageLaters = message.replace(/[^A-Z]/g, '');
    while (key.length < messageLaters.length) {
      key += key.repeat(1);
    }
    key = key.substr(0, messageLaters.length).toUpperCase();
    let encript = '';
    let indexMessage = 0;
    let indexKey = 0;
    do {
      const m = alphabet.indexOf(message[indexMessage]);
      const k = alphabet.indexOf(key[indexKey]);
      if (m >= 0 && k >= 0) {
        encript += alphabet[(m + k) % 26];
        indexKey += 1;
      } else {
        encript += message[indexMessage];
      }
      indexMessage += 1;
    } while (indexMessage !== message.length);
    return this.machine ? encript : encript.split('').reverse().join('');
  }

  decrypt(message, key) {
    if (!(message || key)) throw 'THROWN';
    message = message.toUpperCase();
    const messageLaters = message.replace(/[^A-Z]/g, '');
    while (key.length < messageLaters.length) {
      key += key.repeat(1);
    }
    key = key.substr(0, messageLaters.length).toUpperCase();
    let decrypt = '';
    let indexMessage = 0;
    let indexKey = 0;
    do {
      const m = alphabet.indexOf(message[indexMessage]);
      const k = alphabet.indexOf(key[indexKey]);
      if (m >= 0 && k >= 0) {
        decrypt += alphabet[(m + 26 - k) % 26];
        indexKey += 1;
      } else {
        decrypt += message[indexMessage];
      }
      indexMessage += 1;
    } while (indexMessage !== message.length);
    return this.machine ? decrypt : decrypt.split('').reverse().join('');
  }
}

module.exports = VigenereCipheringMachine;
