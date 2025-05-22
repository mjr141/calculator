const multiply = "\u00D7";
const subtract = "\u2212";
const add = "+";
const divide = "\u00F7";
// create a regex of operators here?

const display = document.querySelector(".display");
display.innerHTML = "";

const digits = document.getElementsByClassName("digit");
for (const digit of digits) {
  digit.addEventListener("click", updateDisplay);
}

const operators = document.getElementsByClassName("operator");
for (const op of operators) {
  op.addEventListener("click", updateDisplay);
}

const clearBtn = document.getElementById("clear");
clearBtn.addEventListener("click", clear);

function addFn(a, b) {
  return a + b;
}

function subtractFn (a, b) {
  return a - b;
}

function multiplyFn (a, b) {
  return a * b;
}

function divideFn (a, b) {
  return a / b;
}

function evaluateDisplay() {
  const expression = display.innerHTML;

  // get an array of numbers
  const numbers = expression.split(/\D/).map(str => Number(str));

  // get an array of operator characters
  const ops = expression.match(/[\u00D7\u2212+\u00F7"]/g); // array of operator characters

  /* return {
    numbers: numbers,
    ops: ops
  }; */

  // evaluate the expression!
  // numbers.reduce ((a, b, i) => operate(result.ops[i-1], a, b))
  console.log(numbers.reduce ((a, b, i) => operate(result.ops[i-1], a, b)))
}

function operate (op, a, b) {
  switch(op) {
    case add:
      return addFn(a, b);
      break;
    case subtract:
      return subtractFn(a, b);
      break;
    case multiply:
      return multiplyFn(a, b);
      break;
    case divide:
      return divideFn(a, b);
      break;
    default:
      return;
  }
}

// add button character clicked on to display
function updateDisplay (event) {
  const character = event.target.innerHTML;
  // alert(character);
  display.innerHTML = display.innerHTML + character;
}

// clear display
function clear() {
  display.innerHTML = "";
}