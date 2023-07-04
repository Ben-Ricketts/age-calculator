let ddInput = document.getElementById("dd");
let days = document.getElementById("days");
let yyyyInput = document.getElementById("yyyy");
let years = document.getElementById("years");
let mmInput = document.getElementById("mm");
let months = document.getElementById("month");
let monthsInYear = 12;

document.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    days.textContent = daysOld();
    years.textContent = workoutBirthYear();
    months.textContent = monthsInYear - mmInput.value;
  }
});
let currentYear = new Date().getFullYear();

let workoutBirthYear = function () {
  let birhtYear = currentYear - yyyyInput.value;
  return birhtYear;
};

// document.addEventListener("keydown", function (e) {
//   if (e.key === "Enter") {
let daysOld = function () {
  let d1 = document.getElementById("dd").value;
  let d2 = new Date().getDate();
  let m2 = 1 + new Date().getMonth();
  let months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  if (d1 > d2) {
    d2 = d2 + months[m2 - 2];

    let d = d2 - d1;
    return d;
  } else {
    let d = d2 - d1;
    return d;
  }
};

// Output: "June"
//months with 31 days = jan,march, may, july, august, oct, dec
//months with 30 days = april, june, sep, nov
//28 days= feb. leap years = 2020, 2016 and every 4 year//
