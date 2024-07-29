const rating = document.querySelectorAll(".rating");
const submitBtn = document.getElementById("submitBtn");
const container = document.getElementsByClassName("container");
const resultContainer = document.getElementsByClassName("resultContainer");
const result = document.getElementById("result");

let value;

rating.forEach((e) => {
  e.addEventListener("click", (e) => {
    rating.forEach((r) => r.classList.remove("active"));
    e.target.classList.add("active");
    value = e.target.innerText;
  });
});

submitBtn.addEventListener("click", () => {
  console.log("Clicked on submit btn");
  console.log(value);
  container[0].style.display = "none";
  resultContainer[0].style.display = "flex";
  result.innerText = value;
});
