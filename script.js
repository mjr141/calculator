let operator;
let num1; // better to use an array for numbers, but this is just to get started
let num2;

const display = document.querySelector(".display");

digits = document.getElementsByClassName("digit");
for (digit of digits) {
  digit.addEventListener("click", getDigit);
}

clear = document.getElementById("clear");
clear.addEventListener("click", clearDisplay);

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

// returns (in the form of a string) the value of the digit clicked on
function getDigit (event) {
  number = event.target.innerHTML;
  // alert(number);
  updateDisplay(number);
}

// update display with value of the digit clicked on
function updateDisplay(value) {
  display.innerHTML = display.innerHTML + value;
  // alert(Number(display.innerHTML))
}

function clearDisplay() {
  display.innerHTML = "";
}