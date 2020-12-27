const box = document.querySelector('.box');
const topLeftTop = document.querySelector('.top-left-top');
const topLeftLeft = document.querySelector('.top-left-left');
const topRightTop = document.querySelector('.top-right-top');
const topRightRight = document.querySelector('.top-right-right');
const bottomLeftBottom = document.querySelector('.bottom-left-bottom');
const bottomLeftLeft = document.querySelector('.bottom-left-left');
const bottomRightBottom = document.querySelector('.bottom-right-bottom');
const bottomRightRight = document.querySelector('.bottom-right-right');

topLeftTop.addEventListener('change', (e) => {
  box.style.borderTopLeftRadius = `${topLeftTop.value}px ${topLeftLeft.value}px`;
  css();
});

topLeftLeft.addEventListener('change', (e) => {
  box.style.borderTopLeftRadius = `${topLeftTop.value}px ${topLeftLeft.value}px`;
  css();
});

topRightTop.addEventListener('change', (e) => {
  box.style.borderTopRightRadius = `${topRightTop.value}px ${topRightRight.value}px`;
  css();
});

topRightRight.addEventListener('change', (e) => {
  box.style.borderTopRightRadius = `${topRightTop.value}px ${topRightRight.value}px`;
  css();
});

bottomLeftBottom.addEventListener('change', (e) => {
  box.style.borderBottomLeftRadius = `${bottomLeftBottom.value}px ${bottomLeftLeft.value}px`;
  css();
});

bottomLeftLeft.addEventListener('change', (e) => {
  box.style.borderBottomLeftRadius = `${bottomLeftBottom.value}px ${bottomLeftLeft.value}px`;
  css();
});

bottomRightBottom.addEventListener('change', (e) => {
  box.style.borderBottomRightRadius = `${bottomRightBottom.value}px ${bottomRightRight.value}px`;
  css();
});

bottomRightRight.addEventListener('change', (e) => {
  box.style.borderBottomRightRadius = `${bottomRightBottom.value}px ${bottomRightRight.value}px`;
  css();
});

function css() {
  const topLeft = document.querySelector('.top-left');
  topLeft.innerText = `${topLeftTop.value}px ${topLeftLeft.value}px`;
  const topRight = document.querySelector('.top-right');
  topRight.innerText = `${topRightTop.value}px ${topRightRight.value}px`;
  const bottomLeft = document.querySelector('.bottom-left');
  bottomLeft.innerText = `${bottomLeftBottom.value}px ${bottomLeftLeft.value}px`;
  const bottomRight = document.querySelector('.bottom-right');
  bottomRight.innerText = `${bottomRightBottom.value}px ${bottomRightRight.value}px`;
}
