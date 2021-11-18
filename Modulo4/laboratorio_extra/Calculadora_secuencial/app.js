// Inputs
var operator = () => parseInt(document.getElementById("input-number").value);

// Results
var result = () => document.getElementById("result").innerText = operator();

function sum() {
    var partial = document.getElementById("result").innerText = operator() + " + ";
    document.getElementById("input-number").value = "";
    console.log("Operator: ",operator());
    console.log("Partial: ",partial);
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

// Events
document.getElementById("button-result").addEventListener("click", result);
document.getElementById("button-sum").addEventListener("click", sum);
document.getElementById("button-subtraction").addEventListener("click", sub);
document.getElementById("button-multiplication").addEventListener("click", mul);
document.getElementById("button-division").addEventListener("click", div);


