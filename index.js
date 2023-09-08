
import { ValidationError } from "./Error/index.js";
const err = new ValidationError("Uzb raqam emas");

const nums = document.querySelector("input");
const p = document.querySelector("p");
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  let numbers = nums.value;

  for (let i = 0; i < numbers.length; i++) {
    if (
      numbers[0] == "9" &&
      numbers[1] == "9" &&
      numbers[2] == "8" &&
      numbers[3] == "9" &&
      numbers.length == "12"
    ) {
      p.textContent = "Succes";
    } else {
      p.textContent = "Error";
      console.log(err);
    }
  }
});

document.getElementById("emailForm").addEventListener("submit", function(event) {
  event.preventDefault();

  var email = document.getElementById("email").value;
  var regex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

  if (regex.test(email)) {
      document.getElementById("result").textContent = "Succes";
  } else {
      document.getElementById("result").textContent = "Error";
  }
});