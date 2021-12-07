const input = document.querySelector("#name-input");
const span = document.querySelector("#name-output");

input.addEventListener("input", inputChange);

function inputChange(event) {
  if (event.target.value === "") {
    span.textContent = Anonymous;
  } else {
    span.textContent = event.currentTarget.value;
  }
}
