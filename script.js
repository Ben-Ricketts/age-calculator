let day = document.getElementById("dd");
let days = document.getElementById("days");

document.addEventListener("keydown", function (e) {
  console.log(e.key);
  if (e.key === "Enter") {
    console.log(day.value);
    days.textContent = day.value;
  }
});
