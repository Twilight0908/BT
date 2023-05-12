let conv = document.getElementById("convert");
conv.addEventListener("click", Convert);
function Convert() {
    let Amount = parseFloat(document.getElementById("amount").value);
    let From = document.getElementById("fromCurr").value;
    let To = document.getElementById("toCurr").value
    let Result;
    if (From == "VND" && To == "USD") {
        Result = Amount / 23457, 50 + " USD";
    }
    else if (From == "USD" && To == "VND") {
        Result = Amount * 23457, 50 + " VND";
    }
    else if (From == "VND") {
        Result = Amount + " VND";
    }
    else {
        Result = Amount + " USD"
    }
    document.getElementById("result").value = Result;
}