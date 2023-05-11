let area = document.getElementById("areaBtn");
area.addEventListener("click", areaRectg);
function areaRectg() {
    let w = parseInt(document.getElementById("width").value);
    let h = parseInt(document.getElementById("height").value);
    let a = w * h;
    document.getElementById("result").innerHTML = "Area of the rectangle: " + a;
}