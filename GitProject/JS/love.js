let btnYes = document.getElementById("btnYes");
btnYes.addEventListener("click", yesClick);
function yesClick() {
    alert("<3");
}
let btnNo = document.getElementById("btnNo");
btnNo.addEventListener("click", noClick);
function noClick() {
    let x = Math.round(Math.random() * window.innerWidth);
    let y = Math.round(Math.random() * window.innerHeight);
    document.getElementById("btnNo").style.left = x + "px";
    document.getElementById("btnNo").style.top = y + "px";
}