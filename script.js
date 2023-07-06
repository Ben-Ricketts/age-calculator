let ddInput = document.getElementById("dd");
let mmInput = document.getElementById("mm");
let yyyyInput = document.getElementById("yyyy");
let days = document.getElementById("days");
let months = document.getElementById("month");
let years = document.getElementById("years");
let hidden = document.querySelector(".hidden");
let dayHidden = document.querySelector(".day-hidden");
let monthHidden = document.querySelector(".month-hidden");
let yearHidden = document.querySelector(".year-hidden");
let d1 = document.getElementById("dd").value;
let m1 = document.getElementById("mm").value;
let y1 = document.getElementById("yyyy").value;

document.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    let d1 = document.getElementById("dd").value;
    let m1 = document.getElementById("mm").value;
    let y1 = document.getElementById("yyyy").value;
    if (d1 > 0 && m1 > 0 && y1 > 0) {
      days.textContent = daysOld();
      months.textContent = monthsOld();
      years.textContent = workoutBirthYear();
    } else if (d1 === "" || m1 === "" || y1 === "") {
      hidden.classList.remove("hidden");
    } else {
      hidden.classList.add("hidden");
    }
    if (d1 > 31) {
      dayHidden.classList.remove("day-hidden");
      hidden.classList.add("hidden");
    } else if (m1 > 12) {
      monthHidden.classList.remove("month-hidden");
      hidden.classList.add("hidden");
    } else if (y1 > new Date().getFullYear()) {
      yearHidden.classList.remove("year-hidden");
      hidden.classList.add("hidden");
    }
  }
});
// document.addEventListener("keydown", function (e) {
//   if (e.key === "Enter") {
//     if (d1 === "" || m1 === "" || y1 === "") {
//       hidden.classList.remove("hidden");
//     } else {
//       hidden.classList.add("hidden");
//     }
//   }
// });

let workoutBirthYear = function () {
  let currentYear = new Date().getFullYear();
  let birhtYear = currentYear - yyyyInput.value;
  return birhtYear;
};

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

let monthsOld = function () {
  let m1 = document.getElementById("mm").value;
  let m2 = 1 + new Date().getMonth();

  if (m1 > m2) {
    let m = m2 + 12 - m1;

    return m;
  } else {
    let m = m2 - m1 - 1;

    return m;
  }
};
