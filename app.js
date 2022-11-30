const title = document.querySelector(".hello h1");

function handleTitleClick() {
  const currentColor = title.style.color;
  let newColor;
  if (currentColor === "blue") {
    newColor = "red";
  } else {
    newColor = "blue";
  }
  title.style.color = newColor;
}

title.addEventListener("click", handleTitleClick);
