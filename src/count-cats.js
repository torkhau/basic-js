const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  return matrix.map(elem => elem.filter(elem => elem==='^^')).reduce((summ, elem) => summ + elem.length, 0)
};
