// Capturar valor input
var operator = () => (document.getElementById("input-number").value);

//Operations
function sum() {
    document.getElementById("result").innerText = partial() + "+";
    document.getElementById("input-number").value = "";
}

function sub() {
    document.getElementById("result").innerText = partial() + "-";
    document.getElementById("input-number").value = "";
}

function mul() {
    document.getElementById("result").innerText = partial() + "*";
    document.getElementById("input-number").value = "";
}

function div() {
    document.getElementById("result").innerText = partial() + "/";
    document.getElementById("input-number").value = "";
}

// Results
var partial = () => document.getElementById("result").innerText + operator(); 
    document.getElementById("result").innerText = partial(); 

var result = () => document.getElementById("result").innerText = eval(partial()); 

// Events
document.getElementById("button-sum").addEventListener("click", sum);
document.getElementById("button-subtraction").addEventListener("click", sub);
document.getElementById("button-multiplication").addEventListener("click", mul);
document.getElementById("button-division").addEventListener("click", div);
document.getElementById("button-result").addEventListener("click", result);




