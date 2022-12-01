const logInForm = document.querySelector("#login-form"); // 1.
const logInInput = document.querySelector("#login-form Input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASS = "hidden";
const USERNAME_KEY = "username";

function logInBtnSubmit(event) {
  event.preventDefault();
  const username = logInInput.value;
  logInForm.classList.add(HIDDEN_CLASS);

  localStorage.setItem(USERNAME_KEY, username);

  paintGreeting(username);
}

function paintGreeting(username) {
  greeting.classList.remove(HIDDEN_CLASS);
  greeting.innerText = `Hello ${username}`;
}

const saveUsername = localStorage.getItem(USERNAME_KEY);

if (saveUsername === null) {
  logInForm.classList.remove(HIDDEN_CLASS);
  logInForm.addEventListener("submit", logInBtnSubmit); // 2.
} else {
  paintGreeting(saveUsername);
}
