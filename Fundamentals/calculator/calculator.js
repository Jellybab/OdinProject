function add (num1, num2) {
	return num1 + num2;
}

function subtract (num1, num2) {
	return num1 - num2;
}

function sum (arr) {
	let sum = 0;
	for(let i = 0; i < arr.length; i++){
		sum += arr[i];
	}
	return sum;
}

function multiply (arr) {
	let sum = 1;
	for(let i = 0; i < arr.length; i++){
		sum *= arr[i];
	}
	return sum;
}

function power(num1, num2) {
	return num1 ** num2;
}

function factorial(num) {
	let sum = 1;
	for(let i = 1; i <= num; i++){
		sum *= i;
	}
	return sum;
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}