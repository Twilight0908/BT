let imgObj = document.getElementById("myImage");
function init() {
    imgObj = document.getElementById("myImage");
    imgObj.style.position = "relative";
    imgObj.style.left = "0px";
}
let click = document.getElementById("clickMe");
click.addEventListener("click", moveRight);
function moveRight() {
    imgObj.style.left = parseInt(imgObj.style.left) + 10 + "px";
}
window.onload = init;