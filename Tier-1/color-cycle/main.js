const box = document.querySelector('.box');
const setColorForm = document.querySelector('.set-color');
const startStopBtn = document.querySelector('.start-stop');

let colorChanging = false;

setColorForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const color = setColorForm['color'].value;
  if (!colorChanging) {
    box.style.backgroundColor = `#${color}`;
  }
});

startStopBtn.addEventListener('click', () => {
  if (colorChanging) {
    box.classList.remove('active');
  } else {
    box.classList.add('active');
  }
  colorChanging = !colorChanging;
});
