let number1 = '';
let number2 = '';
let operator = '';
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return Math.round(a / b * 1000) / 1000;
}

function operate(operator, n1, n2) {
  if (operator == '+') {
    return add(n1, n2);
  } else if (operator == '-') {
    return subtract(n1, n2);
  } else if (operator == '×') {
    return multiply(n1, n2);
  } else if (operator == '÷') {
    return divide(n1, n2);
  }
}

function appendNumber(number) {
  if(!operator) {
    number1 += number;
    display.textContent = number1;
  } else {
    number2 += number;
    display.textContent = number2;
  }
}

const numbers = document.querySelectorAll('.number');
const operations = document.querySelectorAll('.operation');
const display = document.querySelector('.display');
const clearButton = document.querySelector('.ac');
const equal = document.querySelector('.equal');

numbers.forEach((element) => {
  element.addEventListener('click', (e) => {
    appendNumber(e.target.textContent);
  })
})

operations.forEach((element) => {
  element.addEventListener('click', (e) => {
    if(operator) {
      number1 = display.textContent = operate(operator, Number(number1), Number(number2));
      number2 = '';
    }
    operator = e.target.textContent;
  })
})

equal.addEventListener('click', (e) => {
  display.textContent = operate(operator, Number(number1), Number(number2));
  number1 = number2 = '';
})

clearButton.addEventListener('click', () => {
  number1 = number2 = operator = '';
  display.textContent = '0';
});