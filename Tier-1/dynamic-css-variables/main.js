const form = document.querySelector('.form');
const root = document.documentElement;

const username = 'testuser';
const password = 'mypassword';

const inputStyle = (input, bgColor, borderColor) => {
  input.style.backgroundColor = `var(--${bgColor}-color)`;
  input.style.border = `2px solid var(--${borderColor}-color)`;
  input.style.fontSize = '1.5rem';
  root.style.setProperty('--body-bg-color', `var(--${bgColor}-color)`);
};

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const usernameInput = form['username'];
  const passInput = form['password'];

  usernameInput.style.backgroundColor = '';
  passInput.style.backgroundColor = '';
  usernameInput.style.border = '';
  passInput.style.border = '';
  usernameInput.style.fontSize = '1.3rem';
  passInput.style.fontSize = '1.3rem';

  if (usernameInput.value.includes(' ') || !usernameInput.value) {
    inputStyle(usernameInput, 'warning', 'danger');
  }
  if (passInput.value.includes(' ') || !passInput.value) {
    inputStyle(passInput, 'warning', 'danger');
  }
  if (usernameInput.value !== username && usernameInput.value) {
    inputStyle(usernameInput, 'danger', 'warning');
  }
  if (passInput.value !== password && passInput.value) {
    inputStyle(passInput, 'danger', 'warning');
    console.log(123);
  }
});
