let add = document.getElementById("add");
add.addEventListener("click", Add)
function Add() {
    let num1 = parseFloat(document.getElementById("number1").value);
    let num2 = parseFloat(document.getElementById("number2").value);
    document.getElementById("result").value = num1 + num2;
}

let sub = document.getElementById("sub");
sub.addEventListener("click", Sub)
function Sub() {
    let num1 = parseFloat(document.getElementById("number1").value);
    let num2 = parseFloat(document.getElementById("number2").value);
    document.getElementById("result").value = num1 - num2;
}

let mul = document.getElementById("mul");
mul.addEventListener("click", Mul)
function Mul() {
    let num1 = parseFloat(document.getElementById("number1").value);
    let num2 = parseFloat(document.getElementById("number2").value);
    document.getElementById("result").value = num1 * num2;
}

let div = document.getElementById("div");
div.addEventListener("click", Div)
function Div() {
    let num1 = parseFloat(document.getElementById("number1").value);
    let num2 = parseFloat(document.getElementById("number2").value);
    document.getElementById("result").value = num1 / num2;
}