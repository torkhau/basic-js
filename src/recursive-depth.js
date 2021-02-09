const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    if (arr.filter(elem => Array.isArray(elem)).length){
      return 1 + this.calculateDepth(arr.reduce((newArr, elem) => [...newArr, ...Array.isArray(elem) ? elem : [elem]], []))
    } else {
      return 1
    }
  }
};
