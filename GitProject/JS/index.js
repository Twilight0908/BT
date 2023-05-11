let intro = "Hello Baby";
document.getElementById("intro").innerHTML = intro;

// function do_something() {
//     let selectedValue = document.getElementById("mySelect").value;
//     alert(selectedValue);
// }

let selectedElement = document.getElementById("mySelect");
selectedElement.addEventListener("change", changeFunction);
function changeFunction() {
    let selectedValue = document.getElementById("mySelect").value;
    alert(selectedValue);
}

let mouse = document.getElementById("intro");
mouse.addEventListener("mouseover", mouseOver);
mouse.addEventListener("mouseout", mouseOut);
function mouseOver() {
    document.getElementById("intro").style.color = "red";
}
function mouseOut() {
    document.getElementById("intro").style.color = "black"
}

let click = document.getElementById("intro");
click.addEventListener("click", clickFunction);
function clickFunction() {
    alert("Love you")
}

let clickbtn = document.getElementById("btnClick");
clickbtn.addEventListener("click", clickBtn);
function clickBtn() {
    alert(intro);
}