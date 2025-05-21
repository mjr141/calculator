let operator;
let num1; // used for initial input and result of operations
let num2;

const display = document.querySelector(".display");
let displayValue = 0;

const digits = document.getElementsByClassName("digit");
for (const digit of digits) {
  digit.addEventListener("click", getDigit);
}

const operators = document.getElementsByClassName("operator");
for (const op of operators) {
  op.addEventListener("click", cueOperation);
}

const clearBtn = document.getElementById("clear");
clearBtn.addEventListener("click", clear);

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
  return add(a, b);
}

// to run when an operator is clicked: update global variables, perform an operation if appropriate
function cueOperation (event) {
  if (operator === undefined) {
    operator = event.target.id;
    num1 = displayValue;
    clearDisplay();
    return;
  }

  else if (num2 === undefined) {
    num2 = displayValue;
    num1 = operate(operator, num1, num2); // we perform the operation with the previous operator clicked on
    num2 = undefined;
    operator = event.target.id;
    clearDisplay();
    return;
  }
}

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

function clearDisplay() {
  display.innerHTML = "";
  displayValue = 0;
}

// clear display and reset its value to 0
function clear() {
  clearDisplay();
  num1 = undefined;
  num2 = undefined;
  operator = undefined;
}