let number1, number2, operator;

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
  return a / b;
}

function operate(operator, n1, n2) {
  if (operator == 'addition') {
    return add(n1, n2);
  } else if (operator == 'subtraction') {
    return subtract(n1, n2);
  } else if (operator == 'multiplication') {
    return multiply(n1, n2);
  } else if (operator == 'division') {
    return divide(n1, n2);
  }
}

const numbers = document.querySelectorAll('.number');
const display = document.querySelector('.display');
numbers.forEach((element) => {
  element.addEventListener('click', (e) => {
    display.textContent += e.target.textContent;
  })
})
