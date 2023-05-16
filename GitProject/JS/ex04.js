let ab = document.getElementById("checkA/b");
ab.addEventListener("click", checkAb);
function checkAb() {
  let numA = parseFloat(document.getElementById("numA").value);
  let numB = parseFloat(document.getElementById("numB").value);
  if (numA % numB == 0) {
    alert(numA + " Chia het cho " + numB);
  } else alert(numA + " Khong Chia het cho " + numB);
}

let Age = document.getElementById("checkAge");
Age.addEventListener("click", checkAge);
function checkAge() {
  let age = parseInt(document.getElementById("age").value);
  if (age >= 14) alert("Du tuoi");
  else alert("Chua du tuoi");
}

let check0 = document.getElementById("check0");
check0.addEventListener("click", Check0);
function Check0() {
  let numC = parseFloat(document.getElementById("numC").value);
  if (numC > 0) alert(numC + " > 0");
  else if (numC == 0) alert(numC + " = 0");
  else alert(numC + " < 0");
}

let max = document.getElementById("max");
max.addEventListener("click", checkMax);
function checkMax() {
  let a = parseFloat(document.getElementById("a").value);
  let b = parseFloat(document.getElementById("b").value);
  let c = parseFloat(document.getElementById("c").value);
  if (a > b && a > c) alert("Max " + a);
  else if (b > a && b > c) alert("Max " + b);
  else alert("Max " + c);
}

let rank = document.getElementById("rank");
rank.addEventListener("click", checkRank);
function checkRank() {
  let dkt = parseFloat(document.getElementById("dkt").value);
  let dgk = parseFloat(document.getElementById("dgk").value);
  let dck = parseFloat(document.getElementById("dck").value);
  let d = (dkt + dgk + dck) / 3;
  if (d >= 9) alert("Rank A");
  else if (d >= 7) alert("Rank B");
  else if (d >= 5) alert("Rank C");
  else alert("Rank F");
}

let hoahong = document.getElementById("hoahong");
hoahong.addEventListener("click", Hoahong);
function Hoahong() {
  let dso = parseFloat(document.getElementById("dso").value);
  if (dso > 110) alert(dso * 0.1);
  else if (dso > 100) alert(dso * 0.07);
  else alert(dso * 0.05);
}

let tinh = document.getElementById("tinh");
tinh.addEventListener("click", tinhtien);
function tinhtien() {
  let sophut = parseInt(document.getElementById("soP").value);
  let phi = 0;
  let phicodinh = 25;
  if (sophut > 200) phi = (sophut - 200) * 200 + 150 * 400 + 50 * 600;
  else if (sophut > 50) phi = (sophut - 50) * 400 + 50 * 600;
  else phi = sophut * 600;
  tong = 0.01 * phi + phicodinh;
  alert(tong);
}
