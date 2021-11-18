// Capturar valor input
var operator = () => parseInt(document.getElementById("input-number").value);

//Guardamos valor de input en partial y lo reseteamos

function sum() {
    document.getElementById("result").innerText = operator() + " + ";
    document.getElementById("input-number").value = "";
}

function sub() {
    document.getElementById("result").innerText = operator() + " - ";
    document.getElementById("input-number").value = "";
}

function mul() {
    document.getElementById("result").innerText = operator() + " x ";
    document.getElementById("input-number").value = "";
}

function div() {
    document.getElementById("result").innerText = operator() + " / ";
    document.getElementById("input-number").value = "";
}


// Results
var result = () => document.getElementById("result").innerText = operator();

// Events
document.getElementById("button-result").addEventListener("click", result);
document.getElementById("button-sum").addEventListener("click", sum);
document.getElementById("button-subtraction").addEventListener("click", sub);
document.getElementById("button-multiplication").addEventListener("click", mul);
document.getElementById("button-division").addEventListener("click", div);


