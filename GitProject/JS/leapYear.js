let checkYear = document.getElementById("checkYear");
checkYear.addEventListener("click", leap);
function leap() {
    let year = parseInt(document.getElementById("year").value);
    let isLeapYear = false;
    if (year % 4 == 0) {
        if (year % 100 == 0) {
            if (year % 400 == 0) {
                isLeapYear = true;
            }
        } else {
            isLeapYear = true;
        }
    }

    if (isLeapYear) {
        document.getElementById("result").value = "Is a leap year";
    } else {
        document.getElementById("result").value = "Is Not a leap year";
    }
}