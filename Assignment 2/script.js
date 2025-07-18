let a = '';
let b = '';
let op = null;

function putNum(n) {
  if (op === null) {
    a += n;
    document.getElementById('display').value = a;
  } else {
    b += n;
    document.getElementById('display').value = a + ' ' + op + ' ' + b;
  }
}

function putOp(o) {
  if (a === '') return;
  if (op !== null && b !== '') {
    getAns();
  }

  op = o;
  document.getElementById('display').value = a + ' ' + op;
}

function getAns() {
  if (a === '' || b === '' || op === null) return;

  let x = parseFloat(a);
  let y = parseFloat(b);
  let res;

  if (op === '+') {
    res = x + y;
  } else if (op === '-') {
    res = x - y;
  } else if (op === '*') {
    res = x * y;
  } else if (op === '/') {
    if (y === 0) {
      alert("Cannot divide by zero");
      return;
    }
    res = x / y;
  } else {
    return;
  }

  document.getElementById('display').value = res;
  a = res.toString();
  b = '';
  op = null;
}

function clr() {
  a = '';
  b = '';
  op = null;
  document.getElementById('display').value = '';
}
