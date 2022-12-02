const logInForm = document.querySelector("#login-form");
const logInInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASS = "hidden";
const USERNAME_KEY = "username";

function logInBtnSubmit(event) {
  event.preventDefault();
  logInForm.classList.add(HIDDEN_CLASS);
  localStorage.setItem(USERNAME_KEY, logInInput.value);

  paintGreeting();
}

function paintGreeting() {
  const username = localStorage.getItem(USERNAME_KEY);
  greeting.classList.remove(HIDDEN_CLASS);
  greeting.innerText = `Hello ${username}`;
}

const saveUsername = localStorage.getItem(USERNAME_KEY);

if (saveUsername === null) {
  logInForm.classList.remove(HIDDEN_CLASS);
  logInForm.addEventListener("submit", logInBtnSubmit);
} else {
  paintGreeting();
}
