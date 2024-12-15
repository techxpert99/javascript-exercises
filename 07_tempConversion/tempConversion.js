const convertToCelsius = function(F) {
  return Math.round((50*((F-32))/9))/10;
};

const convertToFahrenheit = function(C) {
  return Math.round(10*((9*C)/5 + 32))/10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
