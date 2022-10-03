const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
console.log(ingredients);
// ingredients.forEach(function (element, index, array) {
//   const item = document.createElement('li');
//   console.log(item);
//   item.textContent = array[index]
// })
// const list = document.querySelector('#ingredients');
// for (let i = 0; i < ingredients.length; i += 1) {
//   const item = document.createElement('li');
//   console.log(item);
//   item.textContent = ingredients[i];
//   item.classList.add('item');
//   console.log(item);
 
// }

//  list.append('item');

const list = document.querySelector('#ingredients');

const items = ingredients.map(function(item) {
  const itemLi = document.createElement('li');
  // console.log(item);
  itemLi.textContent = item;
  itemLi.classList.add('item');
  return itemLi;
})
console.log(items);
list.append(...items);