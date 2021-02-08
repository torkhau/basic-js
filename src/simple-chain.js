const CustomError = require("../extensions/custom-error");

const chainMaker = {

  chain: [],

  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push(String(value));
    return this;
  },
  removeLink(position) {
    const len = this.getLength();
    if (0 >= position  || position > len) {
      this.chain = [];
      throw 'Error';
    }
    this.chain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    const res = `( ${this.chain.join(' )~~( ')} )`;
    this.chain = [];
    return res;
  }
};

module.exports = chainMaker;
