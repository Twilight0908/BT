let result = document.getElementById("result");
result.addEventListener("click", mDate);
function mDate() {
    switch (parseInt(document.getElementById("month").value)) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            document.getElementById("date").value = "tháng 31 ngày";
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            document.getElementById("date").value = "tháng 30 ngày";
            break;
        case 2:
            document.getElementById("date").value = "tháng 28/29 ngày";
            break;
        default:
            document.getElementById("date").value = "Không có tháng";
            break;
    }
}