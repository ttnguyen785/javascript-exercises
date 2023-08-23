const add = function(num1, num2) {
  return num1 + num2;
	
};

const subtract = function(num1, num2) {
  return num1 - num2;
	
};

const sum = function(array) {
  let total = 0;
  if (array.length === 0) {
    return total;
  }
  for (let i = 0; i < array.length; i++) {
    total += array[i];
  }
  return total;

};

const multiply = function(array) {
  let total = 1;
  if (array.length === 0) {
    return 0;
  }
  for (let i = 0; i < array.length; i++) {
    total *= array[i];
  }
  return total;
};

const power = function(num1, num2) {
  return Math.pow(num1, num2);
	
};

const factorial = function(num) {
	if (num < 0) {
    return undefined; 
  }
  if (num=== 0) {
    return 1;
  }
  let result = 1;
  for (let i = 1; i <= num; i++) {
    result *= i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
