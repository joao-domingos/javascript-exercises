const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
  return array.reduce((soma, atual) => soma + atual, 0);
};

const multiply = function(array) {
  return array.reduce((mult, atual) => mult * atual, 1);
};

const power = function(num, power) {
  let result = num;
  for(let i = 1; i < power; i++)
    result *= num;
  return result;
}

const factorial = function(num) {
	let result = 1;
  for (let i = num; i > 0; i--) {
    if (num == 0) return 1;
    result = result * i;
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
