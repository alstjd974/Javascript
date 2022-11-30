// const loginForm = document.querySelector("#logIn-form");
// const loginInput = loginForm.querySelector("input");
// const loginButton = loginForm.querySelector("button");

const loginInput = document.querySelector("#logIn-form input");
const loginButton = document.querySelector("#logIn-form button");

function btnClick() {
  const username = loginInput.value;
  // if (username === "") {
  //   alert("please write your name.");
  // } else if (username.length > 15) {
  //   alert("your name is too long.");
  // } else {
  //   console.log("hello", " ", username);
  // }
  console.log("hello", " ", username);
}

loginButton.addEventListener("click", btnClick);
