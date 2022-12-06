const clock = document.querySelector("h2#clock");
function getClock() {
  const date = new Date();
  let AMPM = "";
  let hour = date.getHours();
  const min = String(date.getMinutes()).padStart(2, "0");
  const sec = String(date.getSeconds()).padStart(2, "0");
  if (hour > 12) {
    AMPM = "PM";
    hour -= 12;
  } else {
    AMPM = "AM";
  }
  hour = String(hour).padStart(2, "0");

  clock.innerText = `${AMPM} ${hour}:${min}:${sec}`;
  // clock.innerText = date.toLocaleTimeString();
}

getClock();
setInterval(getClock, 1000);
