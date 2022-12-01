const logInForm = document.querySelector("#login-form");
const logInInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";

function btnLogInClick(event) {
  event.preventDefault();
  logInForm.classList.add(HIDDEN_CLASSNAME);
  const username = logInInput.value;

  greeting.innerText = `Hello ${username}`; // === "Hello" + username;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

logInForm.addEventListener("submit", btnLogInClick);
