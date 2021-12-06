/* <div id="counter">
  <button type="button" data-action="decrement">
    -1
  </button>
  <span id="value">0</span>
  <button type="button" data-action="increment">
    +1
  </button>
</div>; */

let counterValue = 0;

const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const counterValueRef = document.querySelector("#value");

incrementBtn.addEventListener("click", onIncrementBtn);
decrementBtn.addEventListener("click", onDecrementBtn);

function onDecrementBtn() {
  counterValue -= 1;
  counterValueRef.textContent = counterValue;
}
function onIncrementBtn() {
  counterValue += 1;
  counterValueRef.textContent = counterValue;
}
