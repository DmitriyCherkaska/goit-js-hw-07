// const form = document.querySelector('.login-form');

// form.addEventListener('submit', event => {
//     event.preventDefault();

//     const email = event.currentTarget.elements.email.value.trim();
//     const password = event.currentTarget.elements.password.value.trim();

//     if (!email || !password) {
//         return alert('All form fields must be filled in');
//     };

//     const formData = new FormData(event.currentTarget);

//     console.log(formData);

//     event.currentTarget.reset();
// });

/** Impovments */

const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', event => {
  event.preventDefault();

  const email = event.currentTarget.elements.emailInput.value.trim();
  const password = event.currentTarget.elements.passwordInput.value.trim();

  if (!email || !password) {
    return alert('All form fields must be filled in');
  }

  const formData = {
    email,
    password,
  };

  console.log(formData);

  event.currentTarget.reset();
});
