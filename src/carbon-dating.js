const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  const {floor, log10} = Math;
  if (typeof sampleActivity !== 'string') return false;
  sampleActivity = parseInt(sampleActivity, 10);
  if (!sampleActivity) return false;
  if (sampleActivity <= 0 || sampleActivity > MODERN_ACTIVITY) return false;
  return floor(log10(MODERN_ACTIVITY / parseInt(sampleActivity, 10)) * HALF_LIFE_PERIOD / 0.693);    
};
