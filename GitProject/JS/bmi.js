let click = document.getElementById("click");
click.addEventListener("click", bmi);
function bmi() {
    let h = parseFloat(document.getElementById("height").value);
    let w = parseFloat(document.getElementById("weight").value);
    let b = w / (h * h);
    if (b < 18)
        document.getElementById("bmi").value = b.toFixed(2) + " Underweight";
    else if (b < 25.0)
        document.getElementById("bmi").value = b.toFixed(2) + " Normal";
    else if (b < 30.0)
        document.getElementById("bmi").value = b.toFixed(2) + " Overweight";
    else
        document.getElementById("bmi").value = b.toFixed(2) + " Obese";
}