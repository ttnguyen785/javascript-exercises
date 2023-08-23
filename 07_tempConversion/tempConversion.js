const convertToCelsius = function(degree) {
  let CelsiusDegree = (degree - 32) * (5/9);
  let rounded = Math.round(CelsiusDegree * 10) / 10;
  return rounded
};

const convertToFahrenheit = function(degree) {
  let FahrenheitDegree = (degree * (9/5) + 32);
  let rounded = Math.round(FahrenheitDegree * 10) / 10;
  return rounded
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
