// const date1 = Date.now();
// console.log('date 1', date1);

// setTimeout(() => {
//   const date2 = Date.now();
//   console.log('date 1', date1);
//   console.log('date 2', date2);
//   console.log(date2 - date1);
// }, 3000);

const refs = {
  startBtn: document.querySelector('button[data-action-start]'),
  stopBtn: document.querySelector('button[data-action-stop]'),
  face: document.querySelector('.clockface'),
};
class Timer {
  constructor({ onTick }) {
    this.intervalId = null;
    this.isOn = false;
    this.onTick = onTick;

    this.init();
  }
  init() {
    const time = this.getTimeComponents(0);
    this.onTick(time);
  }
  start() {
    if (this.isOn) {
      return;
    }
    this.isOn = true;
    const startTime = Date.now();

    this.intervalId = setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = currentTime - startTime;
      const time = this.getTimeComponents(deltaTime);
      this.onTick(time);
    }, 1000);
  }
  stop() {
    clearInterval(this.intervalId);
    this.isOn = false;
  }
  getTimeComponents(time) {
    const hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    );
    const minutes = this.pad(
      Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)),
    );
    const seconds = this.pad(Math.floor((time % (1000 * 60)) / 1000));
    return { hours, minutes, seconds };
  }
  pad(value) {
    return String(value).padStart(2, '0');
  }
}
const timer = new Timer({ onTick: updateClockface });

function updateClockface({ hours, minutes, seconds }) {
  refs.face.textContent = `${hours}:${minutes}:${seconds}`;
}

refs.startBtn.addEventListener('click', timer.start.bind(timer));
refs.stopBtn.addEventListener('click', timer.stop.bind(timer));
