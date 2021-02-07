const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) throw 'Error';
  if (!arr.find(elem => elem.toString().match(/--discard-next|--discard-prev|--double-next|--double-prev/))) return arr;
  const res = [];
  arr.forEach((elem, index) => {
    if (!elem.toString().match(/--discard-next|--discard-prev|--double-next|--double-prev/)) {
      let forPush = [elem];
      switch (arr[index - 1]) {
        case '--discard-next':
          forPush = undefined;
          break;
        case '--double-next':
          forPush.push(elem);
      };
      if (forPush) {
        switch (arr[index + 1]) {
          case '--discard-prev':
            forPush.pop();
            break;
          case '--double-prev':
            forPush.push(elem)
        };  
        res.push(...forPush);
      }
    }
  })
  return res;
};