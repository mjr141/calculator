let operator;
let num1; // used for initial input and result of operations
let num2;

const display = document.querySelector(".display");
let displayValue = 0;

digits = document.getElementsByClassName("digit");
for (digit of digits) {
  digit.addEventListener("click", getDigit);
}

clear = document.getElementById("clear");
clear.addEventListener("click", clear);

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

/*
clicking operator:

user inputs a number, stored in displayValue

user clicks on operator

  operator id is stored...

  if num1 undefined
    displayValue goes to num1
    no operations occur

  else displayValue goes to num2
    operator id is checked
    we do eg. sum num1 and num2
    result is stored in num1 and displayed, num2 is set to undefined
*/

// returns (in the form of a string) the value of the digit clicked on
function getDigit (event) {
  number = event.target.innerHTML;
  // alert(number);
  updateDisplay(number);
}

// update display with value of the digit clicked on, store in displayValue
function updateDisplay(value) {
  display.innerHTML = display.innerHTML + value;
  // alert(Number(display.innerHTML))
  displayValue = Number(display.innerHTML);
}

// clear display and reset its value to 0
function clear() {
  display.innerHTML = "";
  displayValue = 0;
  num1 = undefined;
  num2 = undefined;
}