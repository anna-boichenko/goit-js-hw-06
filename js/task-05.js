// Напиши скрипт, який під час набору тексту в інпуті input#name-input(подія input),
// підставляє його поточне значення в span#name - output.Якщо інпут порожній,
// у спані повинен відображатися рядок "Anonymous".

const inputEl = document.querySelector("input#name-input");
const output = document.querySelector("span#name-output");

inputEl.addEventListener("input", (event) => {
    if (inputEl.value == '') {
        output.textContent = "Anonymous";
    } else {
        output.textContent = event.currentTarget.value;
    }
});