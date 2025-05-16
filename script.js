let operator;
let num1; // better to use an array for numbers, but this is just to get started
let num2;

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply (a, b) {
  return a * b;
}

function divide (a, b) {
  return a / b;
}

function operate (op, a, b) {
  const result = add(a,b);
  return result;
}