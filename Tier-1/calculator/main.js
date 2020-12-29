const screen = document.querySelector('.screen');
const keyPad = document.querySelector('.key-pad');

const printToScreen = (val) => {
  screen.innerText = val;
};

const divide = (num1, num2) => num1 / num2;
const multiply = (num1, num2) => num1 * num2;
const substract = (num1, num2) => num1 - num2;
const add = (num1, num2) => num1 + num2;

const calc = (cb) => {
  if (typeof lastOperation !== 'function') {
    total = +current;
    current = '';
  } else {
    total = cb(total, +current);
    current = '';
    if ((total + '').length > 8) {
      printToScreen('ERR');
    } else {
      printToScreen(total);
    }
  }
};

let current = '';
let total = 0;
let lastOperation = '';

keyPad.addEventListener('click', (e) => {
  if (
    e.target.classList.contains('btn-num') ||
    e.target.classList.contains('point')
  ) {
    if ((e.target.innerText == '0' && !current) || current.length >= 8) {
      return;
    }
    current += e.target.innerText;
    printToScreen(current);
  }

  if (e.target.classList.contains('btn-operand')) {
    const operand = e.target.innerText;
    if (operand === '/') {
      calc(lastOperation);
      lastOperation = divide;
    } else if (operand === '*') {
      calc(lastOperation);
      lastOperation = multiply;
    } else if (operand === '-') {
      calc(lastOperation);
      lastOperation = substract;
    } else if (operand === '+') {
      calc(lastOperation);
      lastOperation = add;
    }
  }

  if (e.target.classList.contains('clear-all')) {
    current = '';
    total = 0;
    lastOperation = '';
    printToScreen(current);
  }

  if (e.target.classList.contains('clear')) {
    current = '';
    lastOperation = '';
  }

  if (e.target.classList.contains('equal')) {
    calc(lastOperation);
    lastOperation = '';
  }

  if (e.target.classList.contains('pos-neg')) {
    current = +current * -1;
    printToScreen(current);
  }
});
