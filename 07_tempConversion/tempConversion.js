const convertToCelsius = function(temperature) {
  let Celsius = parseFloat(temperature)
  return Celsius = parseFloat(((Celsius - 32) * (5/9)).toFixed(1))
};

const convertToFahrenheit = function(temperature) {
  let Fahrenheit = parseFloat(temperature)
  return Fahrenheit = parseFloat((Fahrenheit * (9/5) + 32).toFixed(1))
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
