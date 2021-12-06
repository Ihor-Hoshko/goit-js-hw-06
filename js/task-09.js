function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const color = document.querySelector(".color");

const buttonChangeColor = document.querySelector(".change-color");

buttonChangeColor.addEventListener("click", () => {
  document.body.style.backgroundColor = `${getRandomHexColor()}`;

  color.textContent = `${getRandomHexColor()}`;
});
