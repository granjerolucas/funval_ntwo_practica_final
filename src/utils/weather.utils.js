const convertToFahrenheit = (celsius) => {
  return (celsius * 9) / 5 + 32;
};

const convertToCelsius = (fahrenheit) => {
  return ((fahrenheit - 32) * 5) / 9;
};

export const convertTo = (type, value) => {
  if (type === "celsius") {
    return convertToCelsius(value);
  }
  if (type === "fahrenheit") {
    return convertToFahrenheit(value);
  }
};
