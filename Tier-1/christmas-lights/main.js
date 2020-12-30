const lights = document.querySelectorAll('.light');
const onOffBtn = document.querySelector('.power-btn');
const speedSetting = document.querySelector('.set-speed');
const intensitySetting = document.querySelector('.set-intensity');

const sleep = (ms) => {
  return new Promise((res) => setTimeout(res, ms));
};

let lightsState = true;
let speed = 100;
let intensity = 1;
let currentLight = 0;
const colors = [
  '#f44336',
  '#ff9800',
  '#ffeb3b',
  '#4caf50',
  '#4fc3f7',
  '#1976d2',
  '#9c27b0',
];

speedSetting['speed'].value = speed;
intensitySetting['intensity'].value = intensity;

const lightsOn = async (state) => {
  if (state) {
    if (currentLight > 0) {
      setIntensity();
      lights[currentLight - 1].style.boxShadow = ``;
    } else {
      setIntensity();
      lights[lights.length - 1].style.boxShadow = '';
    }
    if (currentLight === lights.length - 1) {
      currentLight = -1;
    }
    currentLight++;
  }
};

const setIntensity = () => {
  lights[
    currentLight
  ].style.boxShadow = `0 0 25px ${intensity}px ${colors[currentLight]}`;
};

let onOff = setInterval(() => lightsOn(lightsState), speed);

onOffBtn.addEventListener('click', () => {
  if (lightsState) {
    currentLight = 0;
    lightsState = !lightsState;
    lights.forEach((light) => (light.style.boxShadow = ''));
  } else {
    lightsState = !lightsState;
    lightsOn(lightsState);
  }
});

speedSetting.addEventListener('submit', (e) => {
  e.preventDefault();
  speed = +speedSetting['speed'].value;
  clearInterval(onOff);
  onOff = setInterval(() => lightsOn(lightsState), speed);
});

intensitySetting.addEventListener('submit', (e) => {
  e.preventDefault();
  intensity = +intensitySetting['intensity'].value;
});
