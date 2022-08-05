class AlarmClock {
  constructor() {
    this.alarmCollection = [];
    this.timerId = null;
  }

  addClock(time, callback, id) {
    if (!id) {
      throw new Error("Параметр id будильника не передан!");
    } else if (this.alarmCollection.some(item => item.id === id)) {
      console.error("Будильник уже установлен!");
    } else {
      this.alarmCollection.push({ time, callback, id });
    }
  };

  removeClock(id) {
    const deleteClock = this.alarmCollection.findIndex(item => item.id === id);

    if (deleteClock === -1) {
      return false;
    } else {
      this.alarmCollection.splice([deleteClock], 1)[0];
      return true;
    }
  };

  getCurrentFormattedTime() {
    return new Date().toTimeString().slice(0, 5);
  };

  start() {
    let checkClock = clock => {
      if (clock.time === this.getCurrentFormattedTime()) {
        clock.callback();
      }
    };

    if (this.timerId === null) {
      this.timerId = setInterval(() => {
        this.alarmCollection.forEach(item => checkClock(item));
      }, 1000);
    }
  };

  stop() {
    if (this.timerId !== null && this.timerId !== undefined) {
      clearInterval(this.timerId);
      this.timerId = null;
    }
  };

  printAlarms() {
    console.log(`Печать всех будильников: ${this.alarmCollection.length}`);

    this.alarmCollection.forEach(item => console.log(`Будильник № ${item.id} установлен на ${item.time}`));
  };

  clearAlarms() {
    this.stop();
    this.alarmCollection = [];
  };
}

function testCase() {
  let phoneAlarmClock = new AlarmClock();

  phoneAlarmClock.addClock(phoneAlarmClock.getCurrentFormattedTime(), () => console.log("Пора вставать!"), 1);

  phoneAlarmClock.addClock(new Date(new Date().getTime() + 60000).toTimeString().slice(0, 5), () => {
    console.log("Давай, вставай уже!");
    phoneAlarmClock.removeClock(phoneAlarmClock.timerId)
  }, 2);

  phoneAlarmClock.addClock(new Date(new Date().getTime() + 2 * 60000).toTimeString().slice(0, 5), () => {
    console.log("Вставай, а то проспишь!");
    phoneAlarmClock.clearAlarms();
    phoneAlarmClock.printAlarms()
  }, 3);

  phoneAlarmClock.printAlarms();

  phoneAlarmClock.start();
}

testCase();