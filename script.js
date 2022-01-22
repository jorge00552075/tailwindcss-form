"use strict";
const form = document.getElementById("form");
const firstName = document.getElementById("firstname");
const lastName = document.getElementById("lastname");
const email = document.getElementById("email");
const password = document.getElementById("password");

const ValidateEmail = (email) => {
  if (
    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.toLowerCase())
  ) {
    return true;
  }
  return false;
};
// display error or success styles
const error = (el) => {
  el.parentElement.firstElementChild.hidden = false;
  el.nextElementSibling.hidden = false;
  el.classList.add("border-red-500");
};

const success = (el) => {
  el.parentElement.firstElementChild.hidden = true;
  el.nextElementSibling.hidden = true;
  el.classList.add("border-green-500");
};

const checkInputs = () => {
  if (firstName.value.trim().length === 0) error(firstName);
  else success(firstName);

  if (lastName.value.trim().length === 0) error(lastName);
  else success(lastName);

  if (!ValidateEmail(email.value)) error(email);
  else success(email);

  if (password.value.length < 6) error(password);
  else success(password);
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();
});
