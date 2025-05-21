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
  const numbers = expression.split(/\D/);
  // const ops = expression.split(/[0-9]/).filter(x => x);
  const ops = expression.match(/[\u00D7\u2212+\u00F7"]/g);
  console.log(expression);
  console.log(numbers);
  console.log(ops);
  return ops; // for testing

  // iterate through operators and reduce numbers array to get result?
}

function operate (op, a, b) {
/*   switch(operator) {
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
  } */
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