// Inputs
var getNumber1 = () => parseInt(document.getElementById("input-number1").value);
var getResult = () => parseInt(document.getElementById("input-number1").value);

// Operations
var sum = () => getResult() + getNumber1();
var sub = () => getResult() - getNumber1();
var mul = () => getResult() * getNumber1();
var div = () => getResult() / getNumber1();

// Results
var resultSum = () => document.getElementById("result").innerText = sum();
var resultSub = () => document.getElementById("result").innerText = sub();
var resultMul = () => document.getElementById("result").innerText = mul();
var resultDiv = () => document.getElementById("result").innerText = div();

// Events
document.getElementById("button-sum").addEventListener("click", resultSum);
document.getElementById("button-subtraction").addEventListener("click", resultSub);
document.getElementById("button-multiplication").addEventListener("click", resultMul);
document.getElementById("button-division").addEventListener("click", resultDiv);
