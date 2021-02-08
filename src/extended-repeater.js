const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  const addition = Array(options.additionRepeatTimes ? options.additionRepeatTimes : 1)
  .fill(`${options.hasOwnProperty('addition') ? String(options.addition) : ''}`);
  return Array(options.repeatTimes ? options.repeatTimes : 1)
  .fill(`${String(str)}${addition.join(options.additionSeparator ? options.additionSeparator : '|')}`)
  .join(options.separator ? options.separator : '+');
};
