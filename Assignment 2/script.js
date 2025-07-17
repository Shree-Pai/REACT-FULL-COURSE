let firstInput = '';
let secondInput = '';
let currentOperator = null;
let enteringSecond = false;

function addInput(number) {
  if (!enteringSecond) {
    firstInput += number;
    document.getElementById('display').value = firstInput;
  } else {
    secondInput += number;
    document.getElementById('display').value = firstInput + ' ' + currentOperator + ' ' + secondInput;
  }
}

function operatorInput(operator) {
  if (firstInput === '') return;

  if (enteringSecond && secondInput !== '') {
    performCalculation();
  }

  currentOperator = operator;
  enteringSecond = true;
  document.getElementById('display').value = firstInput + ' ' + currentOperator;
}

function calculate() {
  if (firstInput === '' || secondInput === '' || !currentOperator) return;

  let num1 = parseFloat(firstInput);
  let num2 = parseFloat(secondInput);
  let result;

  switch (currentOperator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      if (num2 === 0) {
        alert("Cannot divide by zero");
        return;
      }
      result = num1 / num2;
      break;
    default:
      return;
  }

  document.getElementById('display').value = result;
  firstInput = result.toString();
  secondInput = '';
  currentOperator = null;
  enteringSecond = false;
}

function clearCalculator() {
  firstInput = '';
  secondInput = '';
  currentOperator = null;
  enteringSecond = false;
  document.getElementById('display').value = '';
}
