function init() {
    let g = document.getElementById("good");
    let f = document.getElementById("fast");
    let c = document.getElementById("cheap");
    if (g.checked == "checked") {
        f.checked = "checked";
    }
}
let a = document.getElementById("good");
a.addEventListener("click", init);