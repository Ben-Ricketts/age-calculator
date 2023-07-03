let ddInput = document.getElementById("dd");
let days = document.getElementById("days");
let yyyyInput = document.getElementById("yyyy");
let years = document.getElementById("years");
let mmInput = document.getElementById("mm");
let months = document.getElementById("month");
let monthsInYear = 12;

document.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    days.textContent = ddInput.value;
    years.textContent = workoutBirthYear();
    months.textContent = monthsInYear - mmInput.value;
  }
});
let currentYear = new Date().getFullYear();

let workoutBirthYear = function () {
  let birhtYear = currentYear - yyyyInput.value;
  return birhtYear;
};

// months with 31 days = jan,march, may, july, august, oct, dec
//months with 30 days = april, june, sep, nov
//28 days= feb. leap years = 2020, 2016 and every 4 years
