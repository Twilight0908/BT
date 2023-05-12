let area = document.getElementById("areaBtn");
area.addEventListener("click", areaRectg);
function areaRectg() {
    let w = parseInt(document.getElementById("width").value);
    let h = parseInt(document.getElementById("height").value);
    let a = w * h;
    document.getElementById("result").value = a;
}

let calcu = document.getElementById("calculate");
calcu.addEventListener("click", score);
function score() {
    let phy = parseFloat(document.getElementById("physics").value)
    let che = parseFloat(document.getElementById("chemistry").value)
    let bio = parseFloat(document.getElementById("biology").value)
    let tol = phy + che + bio;
    let med = tol / 3;
    document.getElementById("total").value = tol;
    document.getElementById("medium").value = med;
}

let cf = document.getElementById("CF");
cf.addEventListener("click", cTof);
function cTof() {
    let c = parseFloat(document.getElementById("C").value);
    let f = c * 9 / 5 + 32;
    document.getElementById("F").value = f;
}

let cir = document.getElementById("circle");
cir.addEventListener("click", circle);
function circle() {
    let r = parseFloat(document.getElementById("radius").value);
    let cA = 3.14 * r * r;
    let cD = 2 * 3.14 * r;
    document.getElementById("cArea").value = cA;
    document.getElementById("cDia").value = cD;
}