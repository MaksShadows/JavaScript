const timer = {
  secondsPassed: 0,
  minsPassed: 0,

  getTime() {
      return `${this.minsPassed}:${this.secondsPassed < 10 ? '0' + this.secondsPassed : this.secondsPassed}`;
  },
  startTimer() {
      this.setInterval(() => {
          if (this.secondsPassed == 60) {
              this.minsPassed += 1;
              this.secondsPassed = 0;
          }
      }, 5000);
  },
  stopTimer() {
      clearInterval(this.clearIntervalID);
  },
  resetTimer() {
      this.minsPassed = 0;
      this.secondsPassed = 0;
  },
}

export { timer };
