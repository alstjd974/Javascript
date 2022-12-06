const clock = document.querySelector("h2#clock");

function sayhello() {
  console.log("hello!");
}
//setInterval(sayhello, 1000);
setTimeout(sayhello, 5000);
