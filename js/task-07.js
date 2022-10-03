// Напиши скрипт, який реагує на зміну значення input#font - size - control(подія input) 
// і змінює інлайн - стиль span#text, оновлюючи властивість font - size.
// В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.

const inputRangeEl = document.querySelector("input#font-size-control");
const text = document.querySelector("span#text");

// const minRange = inputRangeEl.getAttribute("min");
// const maxRange = inputRangeEl.getAttribute("max");
// console.log(minRange);
// console.log(maxRange);

inputRangeEl.addEventListener("input", () => {
        text.style.fontSize = inputRangeEl.value + 'px';
    
})