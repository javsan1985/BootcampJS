// Inputs
var getNumber1 = () => parseInt(document.getElementById("input-number1").value);
var getNumber2 = () => parseInt(document.getElementById("input-number2").value);

// Operations
var sum = () => getNumber1() + getNumber2();
var sub = () => getNumber1() - getNumber2();
var mul = () => getNumber1() * getNumber2();
var div = () => getNumber1() / getNumber2();

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
