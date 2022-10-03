function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
// Напиши скрипт, який змінює кольори фону елемента < body >
// через інлайн - стиль по кліку на button.change - color 
// і виводить значення кольору в span.color.

const body = document.body;
const buttonChangeColor = document.querySelector("button.change-color");
const spanColor = document.querySelector("span.color");

buttonChangeColor.addEventListener("click", changeBodyColor);

function changeBodyColor() {
  body.style.backgroundColor = getRandomHexColor();
  spanColor.textContent = getRandomHexColor(toString);
}