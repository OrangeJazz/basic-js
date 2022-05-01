const { NotImplementedError } = require("../extensions/index.js");

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
  constructor(isMain = true) {
    this.isMain = isMain;
  }
  encrypt(message, key) {
    if (typeof message == "undefined" || typeof key == "undefined") {
      throw new Error("Incorrect arguments!");
    }

    let messageArr = message.toUpperCase().split("");
    let keyArr = key.toUpperCase().split("");
    const ABC = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    // console.log(ABC);
    while (keyArr.length < messageArr.length) {
      keyArr.push(...keyArr);
    }
    keyArr.length = messageArr.length;
    // console.log(messageArr);
    // console.log(keyArr);
    const keyNum = [];
    keyArr.forEach((element) => {
      const n = ABC.indexOf(element);
      keyNum.push(n);
    });
    let res = [];
    let j = 0;
    for (let i = 0; i < messageArr.length; i++) {
      if (!ABC.includes(messageArr[i])) {
        res.push(messageArr[i]);
        j++;
      } else {
        const oldIndex = ABC.indexOf(messageArr[i]);
        const moveIndex = keyNum[i - j];
        const newIndex = (oldIndex + moveIndex) % 26;
        const newElement = ABC[newIndex];
        res.push(newElement);
      }
    }
    // console.log(keyArr);
    // console.log(keyNum);
    // console.log(res);
    if (!this.isMain) {
      res = res.reverse();
    }
    res = res.join("");
    // console.log(res);
    return res;
  }
  decrypt(message, key) {
    if (typeof message == "undefined" || typeof key == "undefined") {
      throw new Error("Incorrect arguments!");
    }

    let messageArr = message.toUpperCase().split("");
    let keyArr = key.toUpperCase().split("");
    const ABC = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    while (keyArr.length < messageArr.length) {
      keyArr.push(...keyArr);
    }
    keyArr.length = messageArr.length;
    // console.log(messageArr);
    // console.log(keyArr);
    const keyNum = [];
    keyArr.forEach((element) => {
      const n = ABC.indexOf(element);
      keyNum.push(n);
    });
    let res = [];
    let j = 0;
    for (let i = 0; i < messageArr.length; i++) {
      if (!ABC.includes(messageArr[i])) {
        res.push(messageArr[i]);
        j++;
      } else {
        const oldIndex = ABC.indexOf(messageArr[i]);
        const moveIndex = keyNum[i - j];
        const newIndex = (oldIndex - moveIndex + 26) % 26;
        const newElement = ABC[newIndex];
        res.push(newElement);
      }
    }
    // console.log(keyArr);
    // console.log(keyNum);
    // console.log(res);
    if (!this.isMain) {
      res = res.reverse();
    }
    res = res.join("");
    // console.log(res);
    return res;
  }
}

const directMachine = new VigenereCipheringMachine();
const reverseMachine = new VigenereCipheringMachine(false);
// directMachine.encrypt("attack at dawn!", "alphonse");
// reverseMachine.encrypt("attack at dawn!", "alphonse");
// directMachine.decrypt("AEIHQX SX DLLU!", "alphonse");
reverseMachine.decrypt("AEIHQX SX DLLU!", "alphonse");
module.exports = {
  VigenereCipheringMachine,
};
