const textInput = document.querySelector("input#validation-input");
const symbolsRequired = Number(textInput.getAttribute("data-length"));
// console.log(symbolsRequired);
// console.log(textInput.value.length);

textInput.addEventListener("blur", () => {
  if (textInput.value.length === symbolsRequired) {
    textInput.classList.remove("invalid");
    return textInput.classList.add("valid");
  } else {
    textInput.classList.remove("valid");
    return textInput.classList.add("invalid");
  }
});