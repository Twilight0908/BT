let result = document.getElementById("result");
result.addEventListener("click", ptb1);
function ptb1() {
  let a = parseFloat(document.getElementById("a").value);
  let b = parseFloat(document.getElementById("b").value);
  if (a == 0) {
    if (b == 0) alert("phuong trinh vo so nghiem");
    else alert("phuong trinh vo nghiem");
  } else alert("phuong trinh co nghiem x = " + -b / a);
}

let result2 = document.getElementById("result2");
result2.addEventListener("click", ptb2);
function ptb2() {
  let a = parseFloat(document.getElementById("a1").value);
  let b = parseFloat(document.getElementById("b1").value);
  let c = parseFloat(document.getElementById("c1").value);
  let delta = b * b - 4 * a * c;
  if (delta < 0) {
    document.getElementById("x1").value = "Phuong trinh vo nghiem";
    document.getElementById("x2").value = "Phuong trinh vo nghiem";
  } else if (delta == 0) {
    document.getElementById("x1").value = -b / (2 * a);
    document.getElementById("x2").value = -b / (2 * a);
  } else {
    document.getElementById("x1").value = (-b + Math.sqrt(delta)) / (2 * a);
    document.getElementById("x2").value = (-b - Math.sqrt(delta)) / (2 * a);
  }
}

let cAge = document.getElementById("cAge");
cAge.addEventListener("click", checkAge);
function checkAge() {
  let age = parseInt(document.getElementById("age").value);
  if (age > 0 && age < 120) alert("Yes");
  else alert("No");
}

let checkTg = document.getElementById("checkTg");
checkTg.addEventListener("click", tamGiac);
function tamGiac() {
  let a = parseFloat(document.getElementById("a2").value);
  let b = parseFloat(document.getElementById("b2").value);
  let c = parseFloat(document.getElementById("c2").value);
  if (a > 0 && b > 0 && c > 0) {
    if (a + b > c && b + c > a && a + c > b) alert("Tam giac");
    else alert("Khong phai Tam giac");
  } else alert("Khong phai Tam giac");
}
