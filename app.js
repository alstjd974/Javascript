const logInForm = document.querySelector("#login-form");
const logInInput = document.querySelector("#login-form input");

const link = document.querySelector("a");

function onLoginSubmit(event) {
  event.preventDefault();
  const username = logInInput.value;
  console.log(username);
  console.log(event);
}

function handleLinkClick(event) {
  event.preventDefault();
  console.log(event);
}

logInForm.addEventListener("submit", onLoginSubmit);
link.addEventListener("click", handleLinkClick);
