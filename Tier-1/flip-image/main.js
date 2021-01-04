const images = document.querySelectorAll('.image');
const form = document.querySelector('form');

images.forEach((image) => {
  let x = 0;
  let y = 0;
  image.addEventListener('click', (e) => {
    if (e.target.id === 'btn') {
      const btn = e.target;
      const image =
        e.target.parentElement.previousElementSibling ||
        e.target.parentElement.nextElementSibling;

      if (btn.innerText === 'up') {
        x += 180;
        image.style.transform = `rotateX(${x}deg) rotateY(${y}deg)`;
      } else if (btn.innerText === 'right') {
        y += 180;
        image.style.transform = `rotateX(${x}deg) rotateY(${y}deg)`;
      } else if (btn.innerText === 'down') {
        x -= 180;
        image.style.transform = `rotateX(${x}deg) rotateY(${y}deg)`;
      } else if (btn.innerText === 'left') {
        y -= 180;
        image.style.transform = `rotateX(${x}deg) rotateY(${y}deg)`;
      }
    }
  });
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const imageUrl = form['image-url'].value;
  images.forEach((image) => {
    image.querySelector('img').src = imageUrl;
  });
});
