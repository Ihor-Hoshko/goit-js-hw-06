const liQuantity = document.querySelectorAll(".item");
console.log(`Number of categories: ${liQuantity.length}`);

liQuantity.forEach((elements) => {
  const liCategory = elements.querySelector("h2");
  const liElements = elements.querySelectorAll("li");

  console.log(`Category: ${liCategory.textContent}`);
  console.log(`Elements: ${liElements.length}`);
});
