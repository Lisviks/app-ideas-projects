const form = document.querySelector('form');
const randomNumOutput = document.querySelector('.random-number');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const min = +form['min'].value;
  const max = +form['max'].value;
  const decimal = form['decimal'].checked;

  let random;

  if (decimal) {
    random = (Math.random() * (max - min) + min).toFixed(1);
  } else {
    random = Math.floor(Math.random() * (max - min + 1) + min);
  }

  randomNumOutput.innerText = random;
});
