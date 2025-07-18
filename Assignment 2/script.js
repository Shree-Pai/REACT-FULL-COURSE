let a = '';
let b = '';
let op = null;
let second = false;

function putNum(n) {
if (!second) {
a += n;
document.getElementById('display').value = a;
} else {
b += n;
document.getElementById('display').value = a + ' ' + op + ' ' + b;
}
}

function putOp(o) {
if (a === '') return;
if (second && b !== '') {
getAns();
}
op = o;
second = true;
document.getElementById('display').value = a + ' ' + op;
}

function getAns() {
if (a === '' || b === '' || !op) return;
let x = parseFloat(a)
let y = parseFloat(b)
let res

if (op === '+') {
res = x + y
}
else if (op === '-') {
res = x - y
}
else if (op === '*') {
res = x * y
}
else if (op === '/') {
if (y === 0) {
alert("no divide by 0")
return
}
res = x / y
} else {
return
}

document.getElementById('display').value = res
a = res.toString()
b = ''
op = null
second = false
}

function clr() {
a = ''
b = ''
op = null
second = false
document.getElementById('display').value = ''
}
