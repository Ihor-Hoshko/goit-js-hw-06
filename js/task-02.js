const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listRef = document.querySelector("#ingredients");

const oneIngredient = ingredients.forEach(doOneIngredients);

function doOneIngredients(elem) {
  const createLi = document.createElement("li");
  createLi.textContent = elem;
  listRef.appendChild(createLi);
}
