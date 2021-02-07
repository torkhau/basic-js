const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  try {
    return members.filter(elem => typeof elem === 'string')
    .map(elem => elem.trim()[0].toUpperCase())
    .sort((a, b) => {if (a < b) return -1})
    .join(''); 
  } catch {
    return false
  }
};
