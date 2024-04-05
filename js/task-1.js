const categoriesNumber = document.querySelectorAll('ul#categories li.item');

console.log(`Number of categories: ${categoriesNumber.length}`);

categoriesNumber.forEach(category => {
  const categoryTitle = category.firstElementChild.textContent;
  const categoryAmount = category.lastElementChild.children.length;
  console.log(`Category: ${categoryTitle}`);
  console.log(`Elements: ${categoryAmount}`);
});
