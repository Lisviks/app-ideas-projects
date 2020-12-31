const timerEl = document.querySelector('.timer');
const eventEl = document.querySelector('.event');
const form = document.querySelector('.form');

let timerCounting = false;
let timer;

const getTime = (date, currentTime) => {
  const ms = date.getTime() - currentTime;
  const days = Math.floor(ms / (3600 * 24) / 1000);
  const hours = Math.floor((ms - days * 1000 * 3600 * 24) / 3600 / 1000);
  const mins = Math.floor(
    (ms - days * 1000 * 3600 * 24 - hours * 1000 * 3600) / 60000
  );
  const secs = Math.floor(
    (ms - days * 1000 * 3600 * 24 - hours * 1000 * 3600 - mins * 60000) / 1000
  );

  return { days, hours, mins, secs };
};

const formatDate = (time) => {
  return `${time.days}:${time.hours < 10 ? '0' + time.hours : time.hours}:${
    time.mins < 10 ? '0' + time.mins : time.mins
  }:${time.secs < 10 ? '0' + time.secs : time.secs}`;
};

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (!timerCounting) {
    const dateTo = new Date(form['date'].value);

    if (dateTo < Date.now()) {
      eventEl.innerText = 'The date picked is in the past!';
      return;
    }

    const time = getTime(dateTo, Date.now());
    timerEl.innerText = formatDate(time);
    eventEl.innerText = form['event-name'].value;
    form['submit'].innerText = 'STOP';

    timer = setInterval(() => {
      const time = getTime(dateTo, Date.now());
      timerEl.innerText = formatDate(time);
      if (dateTo < Date.now()) {
        clearInterval(timer);
        alert(eventEl.innerText);
      }
    }, 1000);

    timerCounting = !timerCounting;
  } else {
    clearInterval(timer);
    timerCounting = !timerCounting;
    form['submit'].innerText = 'START';
  }
});
