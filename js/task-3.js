// const textInput = document.querySelector("#name-input");
// const textOutput = document.querySelector("#name-output");

// textInput.addEventListener("input", event => {
//     const textValue = event.currentTarget.value.trim();
//     if (textValue === '') {
//         textOutput.textContent = "Anonymous";
//     } else {
//         textOutput.textContent = textValue;
//     }
// });

/** Impovments */

const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

nameInput.addEventListener('input', event => {
  const trimmedValue = event.currentTarget.value.trim();

  nameOutput.textContent = trimmedValue || 'Anonymous';
});
