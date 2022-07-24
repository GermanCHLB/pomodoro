import {makeAutoObservable} from "mobx";

class Pomodoro {
    showSettings = false;
    workMinutes = 45;
    breakMinutes = 15;
    isWorking = true;
    timeLeft = this.initialTimeLeft * 60;
    isStarted = false;
    isPaused = false;

    constructor() {
        makeAutoObservable(this);
    }

    toggleSettings() {
        this.showSettings = !this.showSettings;
    }

    setWorkMinutes(minutes) {
        this.workMinutes = minutes;
        console.log(this.workMinutes)
    }

    setBreakMinutes(minutes) {
        this.breakMinutes = minutes;
        console.log(this.breakMinutes)
    }

    start() {
        if (!this.isStarted) {
            this.timer();
        }
        if (!this.isPaused) {
            this.isStarted = true;
        }
        this.isPaused = false;
    }

    stop() {
        this.isStarted = false;
        this.isPaused = false;
        this.isWorking = true;
        this.timeLeft = this.initialTimeLeft * 60;
    }

    togglePause() {
        if (this.isStarted) {
            this.isPaused = !this.isPaused;
        }
    }

    toggleIsWorking() {
        this.isWorking = !this.isWorking;
        this.isStarted = false;
        this.timeLeft = this.initialTimeLeft * 60;
        this.start();

    }

    decrementTimeLeft() {
        this.timeLeft -= 1;
    }

    timer() {
        const interval = setInterval(() => {
            if (!this.isStarted) {
                clearInterval(interval);
            }
            if (this.isStarted && !this.isPaused) {
                if (this.timeLeft <= 0) {
                    this.toggleIsWorking()
                    clearInterval(interval);
                } else {
                    this.decrementTimeLeft();
                }
            }
        }, 1000)
    }

    get initialTimeLeft() {
        return this.isWorking ? this.workMinutes: this.breakMinutes;
    }
}

export default new Pomodoro()
