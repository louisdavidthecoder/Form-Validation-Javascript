/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function validate(event) {
  event.preventDefault();
  let errorMessage = document.querySelector("#errorMessage");
  !errorMessage.classList.contains("d-none") &&
    errorMessage.classList.toggle("d-none");

  errorMessage.innerHTML = "";

  document
    .querySelectorAll("input")
    .forEach(inp => inp.classList.remove("is-invalid"));

  let inputCardNumber = document.querySelector("#inputCardNumber");
  let cVC = document.querySelector("#cVC");
  let amount = document.querySelector("#amount");
  let firstName = document.querySelector("#firstName");
  let lastName = document.querySelector("#lastName");
  let inputCity = document.querySelector("#inputCity");
  let inputState = document.querySelector("#inputState");
  let inputZip = document.querySelector("#inputZip");

  if (inputCardNumber.value < 1000000000000000) {
    addError("credit card number is invalid, must be 16 digits long");
    inputCardNumber.classList.add("is-invalid");
  }

  if (cVC.value.length < 3) {
    addError("the CVC number must be at least 3 digits");
    cVC.classList.add("is-invalid");
  }

  if (amount.value < 1) {
    addError("dollar amount must be at least greater than 1");
    amount.classList.add("is-invalid");
  }
  if (firstName.value.length < 2) {
    addError("name submitted must be greater than 1 ");
    firstName.classList.add("is-invalid");
  }

  if (lastName.value.length < 2) {
    addError("name submitted must be greater than 1 ");
    lastName.classList.add("is-invalid");
  }

  if (inputCity.value.length < 2) {
    addError("city name must be greater than 1 ");
    inputCity.classList.add("is-invalid");
  }

  if (inputState.value == "Select State.") {
    addError("choose a state");
    inputState.classList.add("is-invalid");
  }

  if (inputZip.value.length < 5) {
    addError("zip code must have at least 5 numbers");
    inputZip.classList.add("is-invalid");
  }

  console.log("cardNumber", inputCardNumber);
  console.log(inputCardNumber.value);
  console.log(inputCardNumber.value.length);
} //write your code here

document.querySelector("#theForm").addEventListener("submit", validate);

function addError(message) {
  let errorMessage = document.querySelector("#errorMessage");

  errorMessage.classList.contains("d-none") &&
    errorMessage.classList.toggle("d-none");

  errorMessage.innerHTML += `<p>${message}</p>`;
}
