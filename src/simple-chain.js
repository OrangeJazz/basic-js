const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  chain: "",
  getLength() {
    let arr = this.chain.split("~~");
    return arr.length;
  },
  addLink(value) {
    if (this.chain.length !== 0) this.chain += "~~";
    if (arguments.length == 0) this.chain += "( )";
    value = String(value);
    this.chain += `( ${value} )`;
    return this;
  },
  removeLink(position) {
    let arr = this.chain.split("~~");
    arr.splice(position - 1, 1);
    this.chain = arr.join("~~");
    return this;
  },
  reverseChain() {
    let arr = this.chain.split("~~");
    arr.reverse();
    this.chain = arr.join("~~");
    return this;
  },

  finishChain() {
    return chainMaker.chain;
  },
};

// const one = chainMaker
//   .addLink(function () {})
//   .addLink("2nd")
//   .addLink("3rd")
//   .removeLink(2)
//   .reverseChain()
//   .finishChain();
// console.log(
//   chainMaker
//     .addLink(function () {})
//     .addLink("2nd")
//     .addLink("3rd")
//     .removeLink(2)
//     .reverseChain()
//     .finishChain()
// );

// const two = "( 3rd )~~( function () { } )";
// console.log(two);

module.exports = {
  chainMaker,
};
