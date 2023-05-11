var intro = "Hello Baby";
document.getElementById("intro").innerHTML = intro;

// function do_something() {
//     var selectedValue = document.getElementById("mySelect").value;
//     alert(selectedValue);
// }

var selectedElement = document.getElementById("mySelect");
selectedElement.addEventListener("change", changeFunction);
function changeFunction() {
    var selectedValue = document.getElementById("mySelect").value;
    alert(selectedValue);
}

var mouse = document.getElementById("intro");
mouse.addEventListener("mouseover", mouseOver);
mouse.addEventListener("mouseout", mouseOut);
function mouseOver() {
    document.getElementById("intro").style.color = "red";
}
function mouseOut() {
    document.getElementById("intro").style.color = "black"
}

var click = document.getElementById("intro");
click.addEventListener("click", clickFunction);
function clickFunction() {
    alert("Love you")
}