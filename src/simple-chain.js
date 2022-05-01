const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    if (arguments.length == 0) this.chain.push("( )");
    value = String(value);
    this.chain.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (
      typeof position != "number" ||
      position <= 0 ||
      position >= this.chain.length
    ) {
      this.chain = [];
      throw new Error("You can't remove incorrect link!");
    }
    this.chain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },

  finishChain() {
    let res = this.chain.join("~~");
    this.chain = [];
    return res;
  },
};


// const one = chainMaker
//   .addLink(function () {})
//   .addLink("2nd")
//   .addLink("3rd")
//   .removeLink(2)
//   .reverseChain()
//   .finishChain();
// console.log(one);

// const two = "( 3rd )~~( function () { } )";
// console.log(two);

module.exports = {
  chainMaker,
};
