let login = document.getElementById("login");
login.addEventListener("click", checkLog);
function checkLog() {
    let user = document.getElementById("user").value;
    let pass = document.getElementById("pass").value;
    if (user == "admin") {
        if (pass == "admin") {
            alert("Wellcome");
        } else if (pass == null) {
            alert("User Name/Password is wrong");
        } else
            alert("User Name/Password is wrong");
    } else if (user == null) {
        alert("User Name/Password is wrong");
    } else
        alert("User Name/Password is wrong");
}