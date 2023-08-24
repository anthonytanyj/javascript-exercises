const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b
};

const sum = function(array) {
	let sum = 0;
  array.forEach(num =>
    sum += num)
  return  sum;
};

const multiply = function(array) {
	let multiply = 1;
  array.forEach(num =>
    multiply *= num)
  return  multiply;
};

const power = function(a,b) {
	return a**b;
};

const factorial = function(a) {
	if (a < 0){
    console.log('Please enter positive number') 
  } else if (a === 0) {
    return 1
  } else {
    let fact = 1;
    for (i=1;i<=a;i++){
      fact *= i
    }
    return fact
  }
  }

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
