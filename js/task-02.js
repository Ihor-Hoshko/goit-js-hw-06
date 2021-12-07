const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listRef = document.querySelector("#ingredients");
ingredients.forEach((element) => {
  const createLi = document.createElement("li");
  createLi.classList.add("item");
  createLi.textContent = element;
  listRef.append(createLi);
});

// const listRef = document.querySelector("#ingredients");
// const items = ingredients.map((element) => {
//   const createLi = document.createElement("li");
//   createLi.classList.add("item");
//   createLi.textContent = element;
//   return createLi;
// });
// listRef.append(...items);
